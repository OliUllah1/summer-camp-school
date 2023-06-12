import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo3.png'
import useAuth from '../../../Hooks/useAuth';
import StudentNavber from '../StudentDashboard/StudentNavber/StudentNavber';
import AdminNavber from '../AdminDashboard/AdminNavber/AdminNavber';
import InstructorNavber from '../InstructorDashboard/InstructorNavber/InstructorNavber';
import useRole from '../../../Hooks/useRole';
import { FaBookReader,FaUserGraduate,FaHome } from "react-icons/fa";

const DashboardSidebar = () => {
    const {user,}=useAuth()
    const [role]=useRole()
    console.log(role)
    
    return (
        <div className='text-white'>
            <img className='w-44 flex mx-auto my-3' src={logo} alt="" />
            <hr />
            <div className="avatar flex justify-center mt-8">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} />
            </div>
            </div>
            <h3 className='text-center mt-3 text-3xl font-semibold'>Welcome {user.displayName}</h3>
            {
                role==='student'&&<StudentNavber></StudentNavber>
            }
            {
                role=='instructor'&&<InstructorNavber></InstructorNavber>
            }
            {
                role==='admin'&&<AdminNavber></AdminNavber>
            }
            <hr className='text-white mx-2' />
            <ul className="menu font-semibold w-56 rounded-box">
            <li><Link to='/'><FaHome></FaHome> Home</Link></li>
            <li><Link to="/instructors"><FaUserGraduate></FaUserGraduate> Instructors</Link></li>
            <li><Link to="/classes"><FaBookReader></FaBookReader> Classes</Link></li>
            
            </ul>
            
        </div>
    );
};

export default DashboardSidebar;