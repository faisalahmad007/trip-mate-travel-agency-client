import React from 'react';
import { Container, Form, FormControl, Nav, Navbar,Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user,logOut} = useAuth();
    
    return (
        <>
  <Navbar bg="light" expand="lg">
  <Container fluid className="area-details">
    <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-4 my-lg-0 nav-area"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink as={Link} to="/home#home" className="nav-area">Home</NavLink>
        <NavLink as={Link} to="/services" className="nav-area">Services</NavLink>
        <NavLink as={Link}  to="/aboutus" className="nav-area">About Us</NavLink>
        <NavLink as={Link} to="/manageservices" className="nav-area">Manage Service</NavLink>
        <NavLink as={Link} to="/addservice" className="nav-area">Add Service</NavLink>
        <NavLink as={Link} to="/register" className="nav-area">Register</NavLink>
        {
          user?.email ?
          <NavLink to="/home" onClick={logOut} className="nav-area">Logout</NavLink>:
          <NavLink as={Link} to="/login" className="nav-area">login</NavLink>
        }
       
        <Navbar.Text>
          {user?.displayName}
         </Navbar.Text>
         <Navbar.Text>
          {user?.img}
         </Navbar.Text>
         
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;