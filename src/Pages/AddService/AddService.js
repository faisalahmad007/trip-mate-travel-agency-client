import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit,reset,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://shocking-village-14018.herokuapp.com//services', data)
        .then(res=> {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
      };
    return (
        <div className="container">
        <div>
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

export default AddService;