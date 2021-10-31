import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageServices.css';

const ManageServices = () => {
    const[services,setServices] = useState([]);
    useEffect(() => {
        fetch('https://shocking-village-14018.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const handleDelete = id =>{
        const url = `https://shocking-village-14018.herokuapp.com/services/${id}`;
        fetch(url, { 
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
           
            if(data.deletedCount){
                alert('deleted');
                const remainingServices = services.filter(service=>service._id !== id)
                setServices(remainingServices);
            

            }
           
        })
    }
    return (
        <div>
            <h2>Manage Services</h2>
          <div className="service-container">
            {
            services.map(service => <div key={service._id}>
               
                <img src={service.img} alt="servicesimages" className="img-fluid"/>
                <h3>{service.name}</h3>
                <h5>{service.description}</h5>
                <h3>{service.duration}</h3>
                <h3>Price:{service.price}</h3>
              <div>
             <Link to={`/update/${service._id}`}>
                <button className="btn btn-success">Update</button>
                </Link>
                <button className="btn btn-danger" onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>
            </div>)}
            
            </div>  
        </div>
    );
};

export default ManageServices;