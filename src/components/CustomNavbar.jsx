import React from 'react';
import {Navbar, Nav, } from 'react-bootstrap';
import logo from '../img/logo.png';


function CustomNavbar() {
  return (
    <section id="nav-bar">
    <Navbar collapseOnSelect expand="lg" className="Navbar">
  <Navbar.Brand href="#home">
  <img
        src={logo}
        width="120"
        height="50"
        className="d-inline-block align-top ml-3"
        alt="repairs logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="#home" className='text-white'>
        HOME
      </Nav.Link>
    
      <Nav.Link href="#aboutUs" className='text-white'>ABOUT US</Nav.Link>

      <Nav.Link href="#why" className='text-white'>WHY?</Nav.Link>

      <Nav.Link href="#how" className='text-white'>HOW TO</Nav.Link>

      <Nav.Link href="#dropPoints" className='text-white'>DROP POINTS</Nav.Link>

      <Nav.Link href="#contactUs" className='text-white'>CONTACT US</Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
</section>
  )
}

export default CustomNavbar