import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckOutForm from './CheckOutForm';
import { useLoaderData, useParams } from 'react-router-dom';
// TODO
const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
    const classData=useLoaderData()
    // const [classData,setClassData]=useState({})
    // const {id}= useParams()
    // const classId=id.substring(1)
    const{className,price}=classData;
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/classes/${classId}`)
    //     .then(res=>res.json())
    //     .then(data=>setClassData(data))
    // },[])
    console.log(classData)
    return (
        <div className='text-[#eb1551] bg-gray-300 w-[100%] h-[100%]'>
            <h1 className='m-10 text-4xl font-semibold'>payment Now</h1>
            <div className='flex gap-10 ml-10 font-semibold'>
                <p>Class Name: {className}</p>
                <p>price : {price}</p>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;