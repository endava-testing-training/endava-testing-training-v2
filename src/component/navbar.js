import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import EndavaLogo from '../images/logo-endava-white.png';

const EndavaNavbar = () => (
    <Navbar bg="dark" variant="dark" expand="lg" className="pl-5 pr-5">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink className="nav-menu-link" exact to="/home">Home</NavLink>
                <NavDropdown title="Recommended sites" id="recommended-sites-nav-dropdown">
                    <NavDropdown.Item href="https://www.ministryoftesting.com" target="_blank" >Ministry of Testing</NavDropdown.Item>
                    <NavDropdown.Item href="https://istqb.org" target="_blank" >ISTQB oficial site</NavDropdown.Item>
                    <NavDropdown.Item href="http://testingchallenges.thetestingmap.org/" target="_blank" >Fun Exercises</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Useful links" id="useful-links-nav-dropdown">
                    <NavDropdown.Item href="about-scrum">About Scrum</NavDropdown.Item>
                    <NavDropdown.Item href="video-agile">12 Agile Principles</NavDropdown.Item>
                    <NavDropdown.Item href="https://goo.gl/NoCM4J" target="_blank">Confluence</NavDropdown.Item>
                </NavDropdown>
                <NavLink className="nav-menu-link text-nowrap" exact to="/success">Our success stories</NavLink>
                <NavLink className="nav-menu-link" exact to="/communities">Communities</NavLink>
                <NavLink className="nav-menu-link text-nowrap" exact to="/about">About Us</NavLink>
                <a className="nav-menu-link text-nowrap" href="https://goo.gl/97oRXH" target="_blank">Contact us</a>
            </Nav>
            <Navbar.Brand href="#home">
                <img src={EndavaLogo} alt="Endava logo" />
            </Navbar.Brand>
        </Navbar.Collapse>
    </Navbar>
);

export default EndavaNavbar;