import React from 'react';
import { Card , CardGroup} from 'react-bootstrap';
const Homeinfo = (props) => {
    const {courseName , img} = props.homecourse;
    return (
        <div>
            <CardGroup>
            <Card>
                <Card.Img  className="image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Course: {courseName}</Card.Title>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    );
};

export default Homeinfo;