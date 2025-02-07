// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Courses from './Courses';
import AddCourseCard from './AddCourseCard'; // Import your Add Course component
import './App.css';

//Old code

const App = () => { 
  return ( 
  <div className="app"> 
    <div className='app-navbar'><Navbar /></div>
    <div className='app-dashboard'><Dashboard /></div>
    <div className='app-courses'><Courses /></div> 
  </div> 
  ); 
};



//The DOM based code
// const App = () => {
//   return (
//     <Router> {/* Wrap your application in Router */}
//       <div className="app">
//         <Navbar />
//         <Routes> {/* Use Switch to render only the first matching route */}
//           <Route path="/" exact component={Dashboard} /> {/* Home route */}
//           <Route path="/courses" component={Courses} /> {/* Courses route */}
//           <Route path="/add-course" component={AddCourseCard} /> {/* Add Course route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

export default App;