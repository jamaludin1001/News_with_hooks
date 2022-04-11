import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar } from "react-bootstrap";

export default class Menu extends React.Component{
    render() {
        return(
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Jamaludin Saputra</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#bio">About Me</Nav.Link>
                <Nav.Link href="#skills">Skills & Other Skills</Nav.Link>
                <Nav.Link href="#friends">My Friends</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}