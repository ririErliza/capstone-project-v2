import React from 'react';
import {Navbar, Nav, Badge } from 'react-bootstrap';
import logo from '../img/logo.png';
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa"


function CustomNavbar() {
  const location = useLocation()
  return (
    <section id="nav-bar">
    <Navbar collapseOnSelect expand="lg" className="Navbar navbar-dark">
  <Navbar.Brand>
    <Link to="/">
  <img
        src={logo}
        width="120"
        height="50"
        className="d-inline-block align-top ml-3"
        alt="reviver logo"
      />
      </Link>
  </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">

    <Link to="/" className='text-white mr-4 '> <div className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }> HOME </div>  </Link>
    <Link to="/aboutUs" className='text-white mr-4 '> <div className={
                location.pathname === '/aboutUs' ? 'nav-link active' : 'nav-link'
              }> ABOUT US </div> </Link>

    <Link to="/contactus" className='text-white mr-4 '> <div className={
                location.pathname === '/contactus' ? 'nav-link active' : 'nav-link'
              } > CONTACT US </div> </Link>



<Link to="/shop" className='text-white mr-4 '> <div className={
                location.pathname === '/shop' ? 'nav-link active' : 'nav-link'
              }> SHOP </div>  </Link>

<Link to="/cart" className='text-white mr-4 '> <div className={
                location.pathname === '/cart' ? 'nav-link active' : 'nav-link'
              }> <FaShoppingBasket style={{ fontSize:'1.6em', color:'#ffff' }}/>
              <Badge className='badge badge-danger' id="badge-number"> 1 </Badge> </div>  </Link>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
</section>
  )
}

export default CustomNavbar