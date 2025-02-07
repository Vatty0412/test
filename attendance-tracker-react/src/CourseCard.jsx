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
      <h3>{courseName}</h3>
      {description && <p>{description}</p>}
      {showAttendance && (
        <div className='course-card-contents'>
          <div className = "attendence-info">
          <p>Attended:
            <span className="attendance-number">{attended}</span>
          </p>
          <p>Missed:     
            <span className="attendance-number">{missed}</span
          ></p>
          </div>
          <div className="buttons">
            <button onClick={handleAttend}><img src = 'plus_green.png' alt = "Button Icon"></img></button>
            <button onClick={handleMiss}><img src = 'minus_red.png' alt = 'Button Icon'></img></button>
          </div>
          <div className='progress-bar'>
          <p>Attendance: {percentage.toFixed(2)}%</p>
          <progress className = 'the-bar' value={percentage} max="100"></progress>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;