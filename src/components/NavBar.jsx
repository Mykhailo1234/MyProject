import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand='lg' bg='dark' variant="dark" navbar-fixed-top >
            <Container>
            <Navbar.Brand>Social Network</Navbar.Brand>
            <Navbar.Toggle aria-controls="resposive-navbar-nav" />
            <Navbar.Collapse id="resposive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Profile</Link></Nav.Link>
                    <Nav.Link><Link to="/dialogs">Messages</Link></Nav.Link>
                    <Nav.Link><Link to="/news">News</Link></Nav.Link>
                    <Nav.Link><Link to="/music">Music</Link></Nav.Link>
                    <Nav.Link><Link to="/setting">Setting</Link></Nav.Link>
                </Nav>
                <Nav>
                            <Button variant="primary" className="m-2">Log In</Button>
                    <Button variant="primary" className="m-2">Sig out</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;