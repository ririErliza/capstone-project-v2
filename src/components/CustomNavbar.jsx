import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom'


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
        alt="reviver logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">

    
    <Link to="/aboutUs" className='text-white mr-4'>ABOUT US</Link>

    <Link to="/contactus" className='text-white mr-4'>CONTACT US</Link>

      <Link to="/" className='text-white mr-4'>
      HOME
      </Link>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
</section>
  )
}

export default CustomNavbar