import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import reg from '../../images/registration.jpg';
import useAuth from '../hooks/useAuth';
import './Register.css';

const Register = () => {
    
 const{ user,error,handleRegistration}  = useAuth();
 const[email,setEmail] = useState('');
 const[password,setPassword] = useState('');


 const handleEmailChange = (event) => {
     setEmail(event.target.value);
     console.log(email);
}
const handlePasswordChange = (event) => {
    setPassword(event.target.value);
}
const handleRegister = () => {
    handleRegistration(email, password);
  };

   
    return (
        <div className="text-center">
            <h2>Register</h2>
            <Container>
             <Row>
            <Col md={7} sm={7} className="container-area">
            <div className="inputs">
            <input  type="email" onBlur={handleEmailChange} placeholder="Email" required />
                <input  type="password" onBlur={handlePasswordChange}  placeholder="Password" required/>
            <div>{error}</div>
            <button onClick={handleRegister} type="Submit" style={{backgroundColor:'darkCyan'}}>Register</button>
            <br/>
            <Link to="/login" className="btn" style={{backgroundColor:'darkCyan'}}>Already Registered?</Link>
            </div>
            </Col>
            <Col md={5} sm={5}>
                   <img src={reg} alt="reg" style={{width: '100%'}} imgFluid/>
             </Col>
        </Row>
        </Container>
        </div>
    );
};

export default Register;