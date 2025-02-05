// src/ClassCard.jsx
import React from 'react';
import './ClassCard.css';

const ClassCard = ({ className, timings }) => {
  return (
    <div className="class-card">
      <div className = "class-content">
        <h3 className = "class-title">{className}</h3>
        <p className = "class-timings">{timings}</p>
      </div>
    </div>
  );
};

export default ClassCard;