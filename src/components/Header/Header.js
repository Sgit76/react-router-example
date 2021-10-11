
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <div className="header-container ">
          <div className="row d-flex banner align-items-center justify-content-center">
            <Navbar bg="light" expand="lg">
                <Container className="sticky-top">
                  <Nav className="">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/aboutus">About</NavLink>
                  </Nav>
                </Container>
              </Navbar>  
            <div className="col-md-6">
            <h1 className="title">
              ENGLISH LIFE <br /> YOUR ENGLISH LEARNING CENTER
            </h1>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
};

export default Header;