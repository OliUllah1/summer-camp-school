import React, { useEffect, useState } from 'react';
import ClasseCard from './ClasseCard';

const Classes = () => {
    const [classes,setClasses]=useState([])
    useEffect(()=>{
        fetch('https://summer-camp-school-server-mu.vercel.app/approvedclasses')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    console.log(classes)
    return (
        <div className='pt-20'>
            <div className='grid grid-cols-4 py-10 gap-5'>
                {
                    classes.map(classe=><ClasseCard key={classe._id} classe={classe}></ClasseCard>)
                }
            </div>
        </div>
    );
};

export default Classes;