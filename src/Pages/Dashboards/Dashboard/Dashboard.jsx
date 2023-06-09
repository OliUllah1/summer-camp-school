
import StudentNavber from '../StudentDashboard/StudentNavber/StudentNavber';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const Dashboard = () => {
    const {user}=useAuth()
    return (
        <div className='flex gap-5'>
            <div className='bg-[#eb1551] w-[20%] h-[600px]'>
            <DashboardSidebar></DashboardSidebar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;