// src/AddCourseCard.jsx
import React from 'react';
import './AddCourseCard.css'; // Create a CSS file for styling

const AddCourseCard = ({ onClick }) => {
    return (
        <div className="add-course-card" onClick={onClick}>
            <img src = 'plus_add.svg' alt = 'addcoursesplus'></img>
            <h4>Add New Course</h4>
        </div>
    );
};

export default AddCourseCard;