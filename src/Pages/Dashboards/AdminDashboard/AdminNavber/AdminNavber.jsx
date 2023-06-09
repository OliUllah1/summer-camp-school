import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavber = () => {
    return (
        <div className='text-white'>
            <div className='mt-2'>
            <ul className="menu mx-auto w-56 rounded-box font-semibold">
                <li><Link to='/dashboard/myclasses'>Manage Classes</Link></li>   
                <li><Link to='/dashboard/enrolled'>Manage Users</Link></li>     
            </ul>
            </div>
        </div>
    );
};

export default AdminNavber;