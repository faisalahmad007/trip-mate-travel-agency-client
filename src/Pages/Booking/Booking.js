import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row,Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {serviceId} = useParams();
    const[service,setService] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const{user} = useAuth();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])

    
    return (
        <div>
    <Container>
        <h2>Total Ordered Items:{service?.length} </h2> 
         <Row >
         
         <Col  md={6} sm={12} lg={6}>
           
            <Card style={{ width: '20rem', marginLeft:'5rem' }}>
            <Card.Img variant="top" src={service?.img} alt="displayimage"/>
            <Card.Body>
           <Card.Title>Service Id:{service?._id}</Card.Title>
          <Card.Text style={{ fontSize: '1rem',width: '18rem', marginLeft:'auto',marginRight:'auto' }} >
                    Duration: {service?.duration}
          </Card.Text>
          <Card.Title>Cost:{service?.price}</Card.Title>
         </Card.Body>
         </Card>
         </Col>
         <Col md={6} sm={12} lg={6}>
         <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("Name")} placeholder="Name" />
      <input  defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span className="error">This field is required</span>}
      
      <input type="submit" style={{backgroundColor:'darkCyan'}}  />
    </form>
         </Col>
         </Row>
         </Container>      
        </div>
    );
};

export default Booking;