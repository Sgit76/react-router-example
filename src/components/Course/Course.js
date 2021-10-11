import React from 'react';
import { Card , CardGroup} from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const {courseName , content , duration , test , fees , img} = props.course;
    return (
    <div>
        <CardGroup>
            <Card>
                <Card.Img  className="image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Course: {courseName}</Card.Title>
                    <Card.Text>
                        <p><b>Course Content:</b> {content}</p>
                        <p><b>Duration:</b> {duration}</p>
                        <p><b>Exams:</b> {test}</p>
                        <p><b>Fees:</b> {fees}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </div>    
        
    );
};

export default Course;