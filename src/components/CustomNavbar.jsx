import React, { useState } from 'react';
import {Navbar, Nav, Badge } from 'react-bootstrap';
import logo from '../img/logo.png';
import { NavLink, useLocation } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa"


function CustomNavbar() {
  const location = useLocation()
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="nav-bar">
    <Navbar expanded={expanded} collapseOnSelect expand="lg" className="Navbar navbar-dark">
  <Navbar.Brand>
    <NavLink to="/">
  <img
        src={logo}
        width="120"
        height="50"
        className="d-inline-block align-top ml-3"
        alt="reviver logo"
      />
      </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle  onClick={() => setExpanded(expanded? false : "expanded")} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="ml-auto">

    <NavLink onClick={() => setExpanded(false)}
               to="/" className='text-white mr-4 '> <div className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }> HOME </div>  </NavLink>
    <NavLink onClick={() => setExpanded(false)}
               to="/aboutUs" className='text-white mr-4 '> <div className={
                location.pathname === '/aboutUs' ? 'nav-link active' : 'nav-link'
              }> ABOUT US </div> </NavLink>

    <NavLink onClick={() => setExpanded(false)}
              to="/contactus" className='text-white mr-4 '> <div className={
                location.pathname === '/contactus' ? 'nav-link active' : 'nav-link'
              } > CONTACT US </div> </NavLink>



    <NavLink onClick={() => setExpanded(false)}
              to="/shop" className='text-white mr-4 '> <div className={
                location.pathname === '/shop' ? 'nav-link active' : 'nav-link'
              }> SHOP </div>  </NavLink>

    <NavLink onClick={() => setExpanded(false)}
             to="/cart" className='text-white mr-4 '> <div className={
                location.pathname === '/cart' ? 'nav-link active' : 'nav-link'
              }> <FaShoppingBasket style={{ fontSize:'1.6em', color:'#ffff' }}/>
              <Badge className='badge badge-danger rounded-circle' id="badge-number"> 1 </Badge> </div>  </NavLink>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
</section>
  )
}

export default CustomNavbar