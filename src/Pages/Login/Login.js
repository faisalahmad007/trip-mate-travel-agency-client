import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import login from '../../images/login.png';
import useAuth from '../hooks/useAuth';
import { Link,useLocation,useHistory} from 'react-router-dom';
import "./Login.css";


const Login = () => {
    const{ signInUsingGoogle,handleUserLogin,error,user,setUser}  = useAuth();
    
    const location = useLocation();
    const history = useHistory();
    const[email,setEmail] = useState('');
    const redirect_url = location.state?.from || '/payment';
    const[password,setPassword] = useState('');
   

    const handleGoogleLogin = ()=> {
       
        signInUsingGoogle()
        .then(result => {
            const{displayName,email,photoURL} =result.user;
            const loggedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
            };
            setUser(loggedInUser);
     
            history.push(redirect_url);
        })
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
   }
   const handlePasswordChange = (event) => {
       setPassword(event.target.value);
  }
  const handleLogin = () => {
    handleUserLogin(email, password);
  };


    return (
        <div className="">
        <div className="heading-area">
            <h1>Login To your Account</h1>
            <h3> Welcome to your account: { user?.email }</h3>
            
            </div>
           <Container className=" login-area">
             <Row>
            <Col md={7}>
            <div className="inputs-area">
                <input onChange={handleEmailChange} type="email" placeholder="email" />
                <input onChange={handlePasswordChange} type="password" placeholder="Password"/>
                <br/>
               
            
            <button onClick={handleLogin} style={{backgroundColor:'darkCyan'}}>Login</button>
            <br/>
           
                <button onClick={handleGoogleLogin} style={{backgroundColor:'darkCyan'}}>Google Login</button>
                </div>
                <br/>
                <Link className="btn" style={{backgroundColor:'darkCyan'}} to="/register">New User</Link>

          
            </Col>
            <Col md={5}>
                <img src={login} alt="login" style={{width: '100%', height: '100%'}}/>
            </Col>
            </Row>
            </Container> 
            
        </div>
    );
};

export default Login;