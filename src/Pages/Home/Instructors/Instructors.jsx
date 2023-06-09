import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const [instructors,setInstructors]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[])
    console.log(instructors)
    return (
        <div className='mt-20'>
            <div className='grid grid-cols-4 py-10 gap-5'>
            {
                instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
            </div>
        </div>
    );
};

export default Instructors;