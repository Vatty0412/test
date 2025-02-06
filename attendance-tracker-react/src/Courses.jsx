import React from "react";
import CourseGrid from "./CourseGrid";
import "./CourseGrid.css";
import "./Courses.css";

const Courses = () => {
    return (
        <div className="courses">
            <div className='Title'>
                <h1>Courses</h1>
            </div>
            {/* Render CourseGrid once, as it already handles the course mapping */}
            <CourseGrid />
        </div>
    );
};

export default Courses;