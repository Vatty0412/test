// src/AddCourseCard.jsx
import React from 'react';
import './AddCourseCard.css'; // Create a CSS file for styling

const AddCourseCard = ({ onClick }) => {
    return (
        <div className="add-course-card" onClick={onClick}>
            <h4>Add New Course</h4>
            <p>Click here to add a new course.</p>
        </div>
    );
};

export default AddCourseCard;