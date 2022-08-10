import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <div>
  <Navbar bg="danger" expand="lg">
    <Nav className="ms-auto" defaultActiveKey="/" as="ul" style={{ padding: "15px",}} >
        <Nav.Item as="li">
        <Link style={{marginRight: "1rem", color: "black"}} to="/">Home</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "white"}} to="about">About</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "white"}} to="contact">Contact</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "white"}} to="services">Services</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "white"}} to="project">Project</Link>
        </Nav.Item>
    </Nav>
  </Navbar>
    </div>
  )
}

export default Navbars;