import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

function NavB(){
    return(
        <Navbar className="col-var" collapseOnSelect expand="md" bg="dark" variant="dark">
  <Navbar.Brand  className="heading" href="#home">Mockvita </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto ">
      <Nav.Link href="#home">Home </Nav.Link>
     <Nav.Link href="#about us">about us </Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    )
}

export default NavB;