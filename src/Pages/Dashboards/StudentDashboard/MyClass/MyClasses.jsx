import React, { useEffect, useState } from 'react';
import MyClass from './MyClass';

const MyClasses = () => {
    const [classes,setClasses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/saveclass')
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
            console.log(data)
        })
    },[])
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
        <th>Payment</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
        classes.map((singleClass,index)=><MyClass key={singleClass._id} index={index} singleClass={singleClass}></MyClass>)
      }
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyClasses;