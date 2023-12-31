import React from 'react';
import DashboardNavBar from '../../DashboardNavBar/DashboardNavBar';
import ClassInformation from './ClassInformation';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    })
    return (
        <div  className='w-[100%]'>
    
            <DashboardNavBar>Manages Classes</DashboardNavBar>
            
            <div className='w-[100%]'>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr className='bg-[#eb1551] text-white'>
        <th>No</th>
        <th>Class Information</th>
        <th>Instructor Information</th>
        <th>Available seats</th>
        <th>price</th>
        <th>Current Status</th>
        <th>Set Status</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        classes.map((singleClass,index)=><ClassInformation singleClass={singleClass} key={singleClass._id} refetch={refetch} index={index}></ClassInformation>)
      }
    </tbody>
    
    
  </table>
</div>
        </div>
        </div>
    );
};

export default ManageClasses;