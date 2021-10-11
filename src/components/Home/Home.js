
import React, { useEffect, useState } from 'react';
import Homeinfo from '../HomeInfo/Homeinfo';
import { Row } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    const [homecourses , setHomeCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
        .then(res=> res.json())
        .then(data=> setHomeCourses(data));
    } , [])
    return (
    <div className="home-container">
        <Row xs={1} md={2} className="g-4">
        {
            homecourses.map(homecourse => <Homeinfo
                key = {homecourse.id}
                homecourse ={homecourse}
         ></Homeinfo>)
        }
        </Row>
    </div>    
        
    );
};

export default Home;