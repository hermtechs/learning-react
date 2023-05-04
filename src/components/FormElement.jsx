import React from 'react'
// import {useRef} from "react";
import { useState, useEffect, useRef } from "react";
import {useForm} from "react-hook-form";

function Form() {
// console.log(useForm());
const {register, handleSubmit}= useForm()
// console.log(register("ourName"));
// console.log(register("ourAge"))



    const person = {name:'', age:''}

  return (
    <form onSubmit={
      handleSubmit(data=>console.log(data))
    }>
    
        <div className="mb-3">
            <label useRef="ourName" className="form">Name</label>
            <input {...register('name')} id='name' type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="Age" useRef="ourAge" className="form">Age</label>
            <input {...register('age')} id='Age' type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form