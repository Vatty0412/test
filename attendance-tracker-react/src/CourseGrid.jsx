import React from 'react';
import CourseCard from './CourseCard';

const courses = [
    { title: 'Course 1', description: 'Description for Course 1' },
    { title: 'Course 2', description: 'Description for Course 2' },
    { title: 'Course 3', description: 'Description for Course 3' },
    { title: 'Course 4', description: 'Description for Course 4' },
    // Add more courses as needed
];

const CourseGrid = () => {
    return (
        <div className="course-grid">
            {courses.map((course, index) => (
                <CourseCard key={index} title={course.title} description={course.description} />
            ))}
        </div>
    );
};

export default CourseGrid;