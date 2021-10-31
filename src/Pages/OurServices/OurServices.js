import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import {  Card, CardGroup, Container, Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './OurServices.css';


const OurServices = () => {
    const [services,setServices] = useState([]);
    useEffect(()=> {
       
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
    <div className="mt-5">
     <Container fluid  className="mt-5">
     <h2 className="text-center">Our Services</h2>
       <Row xs={1} md={3} className="g-4">
        
        {
            services.map(service =>
          <CardGroup key={service._id}>
            <Card style={{ width: '8rem' }} className="card-area">
            <Card.Img variant="top" src={service?.img} alt="displayimage" className="img-fluid"/>
            <Card.Body className="card-line">
           <Card.Title>Package ID:{service?._id}</Card.Title>
          <Card.Text style={{ fontSize: '2rem' }} >
                  {service.name}
          </Card.Text>
          <Card.Text >
                  {service.description}
          </Card.Text>
         <Button variant="danger" style={{backgroundColor:'darkCyan',padding: '10px',fontSize: '20px'}}>
             <NavLink style={{ textDecoration: 'none', color: 'black'}}
              to={`/booking/${service._id}`}
             >Booking this package</NavLink></Button>
         </Card.Body>
         </Card>
         </CardGroup>   
             )
        }
    
    </Row> 
    </Container>
    </div>
    );
};

export default OurServices;