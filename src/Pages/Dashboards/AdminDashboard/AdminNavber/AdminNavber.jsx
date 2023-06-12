import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen,FaUsers } from "react-icons/fa";
const AdminNavber = () => {
    return (
        <div className='text-white'>
            <div className='mt-2'>
            <ul className="menu mx-auto w-56 rounded-box font-semibold">
                <li><Link to='/dashboard/manageclasses'><FaBookOpen></FaBookOpen> Manage Classes</Link></li>   
                <li><Link to='/dashboard/manageusers'><FaUsers></FaUsers> Manage Users</Link></li>     
            </ul>
            </div>
        </div>
    );
};

export default AdminNavber;