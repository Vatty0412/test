// src/CourseCard.jsx
import React, { useState } from 'react';
import './CourseCard.css';

const CourseCard = ({ courseName, description, attendance, totalClasses,showAttendance }) => {
  const [attended, setAttended] = useState(attendance);
  const [missed, setMissed] = useState(totalClasses - attendance);

  const handleAttend = () => {
    setAttended(attended + 1);
  };

  const handleMiss = () => {
    setMissed(missed + 1);
  };

  const total = attended + missed;
  const percentage = total ? (attended / total) * 100 : 0;

  return (
    <div className="course-card">
      <h4>{courseName}</h4>
      <p>{description}</p> {/* Display the course description */}
      {showAttendance && (
        <>
          <p>Attended: {attended}</p>
          <p>Missed: {missed}</p>
          <div className="buttons">
            <button onClick={handleAttend}>+</button>
            <button onClick={handleMiss}>-</button>
          </div>
          <p>Attendance: {percentage.toFixed(2)}%</p>
          <progress value={percentage} max="100"></progress>
        </>
      )}
    </div>
  );
};

export default CourseCard;