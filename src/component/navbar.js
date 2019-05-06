import React from 'react';
import { Navbar, NavDropdown, Nav} from 'react-bootstrap';
import EndavaLogo from '../images/logo-endava-white.png';

const EndavaNavbar = () => (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-5 pl-5 pr-5">
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <NavDropdown title="Recommended sites" id="recommended-sites-nav-dropdown">
                    <NavDropdown.Item href="https://www.ministryoftesting.com" target="_blank" >Ministry of Testing</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.istqb.org/" target="_blank">Ministry of Testing</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Useful links" id="useful-links-nav-dropdown">
                    <NavDropdown.Item href="about-scrum">About Scrum</NavDropdown.Item>
                    <NavDropdown.Item href="agile">12 Agile Principles</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="success">Our success stories</Nav.Link>
                <Nav.Link href="about">About Us</Nav.Link>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://goo.gl/97oRXH" target="_blank" >MS Teams</NavDropdown.Item>
                    <NavDropdown.Item href="https://goo.gl/NoCM4J" target="_blank">Confluence</NavDropdown.Item>
                    <NavDropdown.Item href="https://dev.azure.com/GiselaVivas/Testing%20Management" target="_blank">Out Board</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Navbar.Brand href="#home">
                    <img
                src={EndavaLogo}
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        </Navbar.Collapse>
    </Navbar>
);

export default EndavaNavbar;