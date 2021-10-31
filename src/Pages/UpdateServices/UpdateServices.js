import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const UpdateServices = () => {
    const{serviceId} = useParams();
    const[singleService,setSingleService] = useState({});
    const { register, handleSubmit,reset,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`https://shocking-village-14018.herokuapp.com/update/${serviceId}`,{
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),

        })
        .then(res=> res.json()) 
        .then(result=> console.log(result.modifiedCount));    
        reset();
      };
    return (
        <div className="container">
        <div>
        <h1>Updated Name:{singleService.name}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="text" className="p-2 m-2"  {...register("name")} placeholder="name" />
      <br/>
      <input type="text" className="p-2 m-2" {...register("img", { required: true })} placeholder="imgUrl" />
      <br/>
      <input type="text" className="p-2 m-2" {...register("description", { required: true })} placeholder="description" />
      <br/>
      <input type="text" className="p-2 m-2" {...register("duration", { required: true })} placeholder="duration" />
      <br/>
     
      <input type="number" className="p-2 m-2" {...register("price", { required: true })} placeholder="price" />
      

      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input type="submit" />
    </form>
    </div>
        </div>
    );
};

export default UpdateServices;