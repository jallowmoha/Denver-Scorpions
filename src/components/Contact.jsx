import React from "react";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'

export const Contact = () => {
  

  let contactSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required()
  })
  
  const { register, handleSubmit, formState: { errors }  } = useForm({
    resolver: yupResolver(contactSchema)
  });

  
  
   
  
   
   
   
 
  const onSubmit = (data) => {
    axios.post('https://deverscorpions.herokuapp.com/contact', data)
  }
    
    console.log(errors)
    return (
      <div >
            
     
   <form onSubmit={handleSubmit(onSubmit)}> 
     <h2 className="form-header"> Contact us</h2>
  
            <p className="form-label"  >Name:</p>
       
            <input type="text" name="name"  required id="id_name" placeholder="Your Name" {...register("name")}/>
            {errors.name && <p>{errors.name.message}</p>}
       
            <p className="form-label" >Email:</p>
       
            <input type="email" name="email"  required id="id_email" placeholder="Email" {...register("email")}/>
            {errors.email && <p> {errors.email.message} </p> }
       
            <p className="form-label" >Message:</p>
        
            <textarea name="message" cols="40" rows="10" required id="id_message" {...register("message")}></textarea>
            {errors.message && <p> {errors.message.message} </p>}
    <br/>
    <button className="form-button" type="submit"> Submit </button>
            </form>
             </div>
  );
}
