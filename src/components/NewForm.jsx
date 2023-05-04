import React from 'react'
import { useForm } from 'react-hook-form'


function NewForm() {
   const {register, handleSubmit, formState} = useForm();
   const {errors}=formState;

  return (
    <form onSubmit={ handleSubmit(data=>{console.log(data)})}>
        <div className="mb-3">
        <label htmlFor="name" className="form">name</label>
        <input {...register("name", {required:true, minLength:4})} type="text" className="form-control" id='name'/>
       { errors.name?.type==="required"?<p className="text-danger">Required</p>: "" }
       {errors.name?.type==="minLength"?<p className="text-danger">Must be longer than 4 characters</p>:""}

        </div>
        <div className="mb-3">
        <label htmlFor="gender" className="form" >gender</label>
        <input {...register("gender",{minLength:4})} type="text" className="form-control" id='gender'/>
        </div>
        <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  )
}

export default NewForm