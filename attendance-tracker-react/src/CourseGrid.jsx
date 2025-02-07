// src/CourseGrid.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import AddCourseCard from './AddCourseCard'; // Import the new component
import "./CourseGrid.css";

const courses = [
    { title: 'Course 1', description: 'Description for Course 1', attendance: 0, totalClasses: 10 },
    { title: 'Course 2', description: 'Description for Course 2', attendance: 0, totalClasses: 10 },
    { title: 'Course 3', description: 'Description for Course 3', attendance: 0, totalClasses: 10 },
    { title: 'Course 4', description: 'Description for Course 4', attendance: 0, totalClasses: 10 },
    { title: 'Course 5', description: 'Description for Course 5', attendance: 0, totalClasses: 10 },
    { title: 'Course 6', description: 'Description for Course 6', attendance: 0, totalClasses: 10 },
    { title: 'Course 7', description: 'Description for Course 7', attendance: 0, totalClasses: 10 },
    { title: 'Course 8', description: 'Description for Course 8', attendance: 0, totalClasses: 10 },
];

const CourseGrid = () => {
    // const navigate = useNavigate();

    // const handleAddCourseClick = () => {
    //     navigate('/add-course'); // Redirect to the Add Course page
    // };

    return (
        <div className="course-grid">
            {courses.map((course, index) => (
                <CourseCard class
                    key={index} 
                    courseName={course.title} 
                    description={course.description} 
                    attendance={course.attendance} 
                    totalClasses={course.totalClasses} 
                    showAttendance={false}
                />
            ))}
            <AddCourseCard  /> {/* onClick={handleAddCourseClick} Add the new card */}
        </div>
    );
};

export default CourseGrid;