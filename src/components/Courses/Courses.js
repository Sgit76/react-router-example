import React, { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import { Row } from 'react-bootstrap';
const Courses = () => {
    const [courses , setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
        .then(res=> res.json())
        .then(data=> setCourses(data));
    } , [])
    return (
        <div className="container">
            <h1 className="text-center text-warning">Our Courses</h1>
            <hr />
            <Row xs={1} md={2} className="g-4">
            {
                courses.map(course => <Course 
                    key = {course.id}
                    course ={course}
                ></Course>)
            }
            </Row>
        </div>
    );
};

export default Courses;