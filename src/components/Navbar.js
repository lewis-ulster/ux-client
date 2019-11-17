import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
    return (
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Products</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Account" id="nav-dropdown">
        <NavDropdown.Item>Log In</NavDropdown.Item>
        <NavDropdown.Item>Register</NavDropdown.Item>
      </NavDropdown>
      </Nav>
    );
}
  
