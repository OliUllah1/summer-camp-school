import React from 'react';
import StudentNavber from '../StudentDashboard/StudentNavber/StudentNavber';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex gap-5'>
            <div className='bg-[#eb1551] w-[25%]'>
            <StudentNavber></StudentNavber>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;