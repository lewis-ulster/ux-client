import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return ( 
      <Nav justify className="justify-content-end" variant="darker" activeKey="/home">
        <Nav.Item>
          <Link to="/">
            Home 
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/dashboard">
          Dashboard
          </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/login">
            Log In
          </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/register">
          Register
        </Link>
        </Nav.Item>
      </Nav>
    );
}
  
