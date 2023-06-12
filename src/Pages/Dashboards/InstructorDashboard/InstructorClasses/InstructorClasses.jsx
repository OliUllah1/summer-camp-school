import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import ClassDetails from './ClassDetails';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const InstructorClasses = () => {
    const {user,loading}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes?email=${user?.email}`)
            return res.data;
        },
    })

    return (
        <div className='w-[100%]'>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr className='bg-[#eb1551] text-white'>
        <th>No</th>
        <th>Class Name</th>
        <th>Class Price</th>
        <th>Available seats</th>
        <th>Enrolled Students</th>
        <th>Status</th>
        <th>Admin Feedback</th>
        <th>Update Class</th>
      </tr>
    </thead>
    <tbody>
      {
        classes.length===0 && 
          <h1  className='text-xl m-10 font-semibold'>Please add a class and try again</h1>
      }
      
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