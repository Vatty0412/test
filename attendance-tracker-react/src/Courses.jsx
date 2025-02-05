import React from "react";
import CourseCard from "./CourseCard"; // Ensure this component is defined
// If you have a ClassCard component, import it as well
// import ClassCard from "./ClassCard"; 

const Courses = () => {
    const courses = [
        { name: 'Math', attendance: 3, totalClasses: 5 },
        { name: 'Science', attendance: 2, totalClasses: 5 },
        { name: 'CS', attendance: 2, totalClasses: 5 }
    ];

    return (
        <div className="course-grid">
            {courses.map((course, index) => (
                <CourseCard key={index} title={course.name} description={course.description} />
            ))}
        </div>
    );
};

export default Courses; // Ensure this matches the import in App.jsx
