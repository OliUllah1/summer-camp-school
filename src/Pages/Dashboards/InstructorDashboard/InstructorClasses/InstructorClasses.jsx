import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import ClassDetails from './ClassDetails';

const InstructorClasses = () => {
    const [classes,setClasses]=useState([])
    const {user}=useAuth()
    useEffect(()=>{
        fetch(`http://localhost:5000/classes?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
        })
    },[])
    console.log(classes)
    return (
        <div className='w-[100%]'>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr className='bg-[#eb1551] text-white'>
        <th>No</th>
        <th>Class Name</th>
        <th>Instructor</th>
        <th>Class Price</th>
        <th>Available seats</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      
      {
        classes.map((singleClass,index)=><ClassDetails key={singleClass._id} singleClass={singleClass} index={index}></ClassDetails>)
      }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default InstructorClasses;