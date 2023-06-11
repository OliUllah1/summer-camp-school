import React, { useEffect, useState } from 'react';
import MyClass from './MyClass';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['saveclasses'], async () => {
        const res = await axiosSecure.get('/saveclass')
        return res.data;
    })
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
        classes.map((singleClass,index)=><MyClass key={singleClass._id} index={index} singleClass={singleClass} refetch={refetch}></MyClass>)
      }
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyClasses;