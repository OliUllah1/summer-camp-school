import React from 'react';
import DashboardNavBar from '../../DashboardNavBar/DashboardNavBar';
import { useLoaderData } from 'react-router-dom';
import UserInformation from './UserInformation';

const ManageUsers = () => {
    const users=useLoaderData();
    console.log(users)
    return (
        <div  className='w-[100%]'>
    
            <DashboardNavBar>Manages Users</DashboardNavBar>
            
            <div className='w-[100%]'>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr className='bg-[#eb1551] text-white'>
        <th>No</th>
        <th>User Profile</th>
        <th>User Information</th>
        <th>Role</th>
        <th>Make Admin</th>
        <th>Make Instructor</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        users.map((user,index)=><UserInformation user={user} index={index} key={user._id}></UserInformation>)
      }
    </tbody>
    
    
  </table>
</div>
        </div>
        </div>
    );
};

export default ManageUsers;