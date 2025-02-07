// connecting to database
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bcrypt from "bcrypt";
import path from 'path';
import { fileURLToPath } from 'url';

// global arrays
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const classType = ["Lecture", "Tutorial", "Practical"];
const status = ["Absent", "Present"];
const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const port = process.env.PORT || 3000;

// middleware
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());
app.use(cors());

// connecting to DB
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://vatty-0412:Yg59B6myIE993llF@attendance-data.kcd77.mongodb.net/tracker-db';
mongoose.connect(mongoURI)
.then(() => console.log("Connected to the database"))
.catch(err => console.log("Cannot connect to the database.", err));

// Establishing Schema
const CourseSchema = mongoose.Schema({
     course_code: String,
     course_name: String,
     min_perc: {type: Number, default: 75}
});

const ProfileSchema = mongoose.Schema({
     "reg-no": Number,
     "full-name": String,
     "mnnit-mail-id": String,
     "password": String,
});

const UserSchema = mongoose.Schema({
     profile: ProfileSchema,
     courses: [CourseSchema],
     schedule: {type: [[mongoose.Schema.Types.Mixed]], default: Array.from({ length: 6 }, () => Array(10).fill(null))},
     attendance: {type: [[mongoose.Schema.Types.Mixed]], default: Array.from({ length: 6 }, () => Array(10).fill(null))},
     extraClasses: {type: [{date: String, course: CourseSchema, start: String, end: String, status: Number}], default: []}
});

const UserModel = mongoose.model('tracker-entries', UserSchema);
const CourseModel = mongoose.model('tracker-entries', CourseSchema);

// sign-up User
const SignUpUser = async (req, res) => {
     const {password, ...otherDetails} = req.body;
     const saltRounds = 10;
     const hashedPassword = await bcrypt.hash(password, saltRounds);
     
     const userExists = await UserModel.findOne({"profile.reg-no": otherDetails["reg-no"]});
     if(userExists){
          console.log("User already registered!");
          return;
     }
     const newUser = new UserModel({
          profile: {password: hashedPassword,
          ...otherDetails}
     });

     try{
          await newUser.save();
          res.status(201).json({ message: "user added successfully!" });
          console.log("User added successfully.");
     } catch (err) {
          res.status(500).json({error: "Failed to Add User"});
          console.log("Failed to add users.");
     };
}
app.post('/signup-user', SignUpUser);

// Log-in User
const LogInUser = async (req, res) => {
     const {identifier, password} = req.body;
     const userExists = await UserModel.findOne({$or: [{"profile.reg-no": identifier}, {"profile.mnnit-mail-id": identifier}]});
     if(!userExists){
          console.log("This user is not registered.");
          return;
     };
     const isPasswordCorrect = await bcrypt.compare(password, userExists.profile.password);
     if (!isPasswordCorrect) {
          return res.status(500).send("Invalid password!");
     };

     res.status(200).json("Login successful!");
}
app.post('/login-user', LogInUser);

// Adding Course
app.post("/add-course", async (req, res) => {
     const fetched = req.body;
     try {
          const user = await UserModel.find({"profile.reg-no": fetched.added_by});
          const newCourse = new CourseSchema({
               course_code: fetched.course_code,
               course_name: fetched.course_name,
               min_perc: Number.parseInt(fetched.perc),
          })
          user.courses.push(newCourse);
          for(const entry of fetched.schedule){
               user.schedule[weekdays.indexOf(entry.day)][timeSlots.indexOf(entry.startTime)] = [newCourse, fetched.type];
          }
     } catch (err) {
          res.status(500).json({ error: "Failed to add course" });
          console.log("Failed to add course");
     }
});

// fetch today's courses
app.post("/fetch-courses-today", async (req, res) => {
     try {
          const {schedule} = await UserModel.find({"profile.reg-no": req.body.id});
          const day = new Date();
          day = day.getDay();
          for (i = 0; i < 10; i++){
               if (schedule[weekdays.indexOf(date)][i]){
                    console.log(schedule[weekdays.indexOf(date)][i]);
               }
          }
          res.json(courses);
     } catch (err) {
          res.status(500).json({error: "Failed to fetch users"});
     }
});

// fetch all courses
app.post("/fetch-courses-all", async (req, res) => {
     try {
          const user = await UserModel.find({"added_by": req.body.id});      
     } catch (err) {
          res.status(500).json({error: "Failed to fetch users"});
     }
     user.courses.forEach((elem) => {
          let totalClasses, presentClasses;
          for(i = 0; i < 6; i++){
               for(j = 0; j < 10; j++){
                    if (user.schedule[i][j][0].course_code == elem.course_code) {
                         const total = Object.keys(user.attendance[i][j]);
                         const freq = total.filter(item => item === 1);
                         presentClasses += freq;
                         totalClasses += total.length;
                    }
               }
          }
          const cur_perc = presentClasses*100/totalClasses;   
     })
});

// Logging attendance
app.post("/log-attendance", async (req, res) => {
     const fetched = req.body;
     try {
          const user = await UserModel.find({"added_by": req.body.id});
          const date = new Date();
          user.attendance[weekdays.indexOf(fetched.day)][timeSlots.indexOf(fetched.startTime)][date] = (status.indexOf(fetched.status));
     } catch (err) {
          res.status(500).json({error: "Failed to fetch users"});
     }
})

// Start the server
app.listen(port, () => {
     console.log(`Server running on port ${port}`);
});