// src/Dashboard.jsx
import React from 'react';
import ClassCard from './ClassCard';
import CourseCard from './CourseCard';
import CourseGrid from './CourseGrid';
import './Dashboard.css';

const Dashboard = () => {
  const classes = [
    { name: 'Math', timings: '10:00 AM - 11:00 AM' },
    { name: 'Science', timings: '11:00 AM - 12:00 PM' },
  ];

  const courses = [
    { name: 'Math', attendance: 3, totalClasses: 5 },
    { name: 'Science', attendance: 2, totalClasses: 5 },
    { name: 'CS',attendance: 2,totalClasses: 5}
  ];

  return (
    <><div className="dashboard">
      <div className="class-cards">
        {classes.map((cls, index) => (
          <ClassCard key={index} className={cls.name} timings={cls.timings} />
        ))}
      </div>
      <div className="course-cards">
        {courses.map((course, index) => (
          <CourseCard 
          key={index} 
          courseName={course.name} 
          attendance={course.attendance} 
          totalClasses={course.totalClasses}
          showAttendance={true} />
        ))}
      </div>
    </div>
  </>
  );
};

export default Dashboard;