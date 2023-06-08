import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const InstructorNavber = () => {
    const {user}=useAuth()
    return (
        <div className='text-white'>
            <div className="avatar flex justify-center mt-16">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} />
            </div>
            </div>
            <h3 className='text-center mt-3 text-3xl font-semibold'>Welcome {user.displayName}</h3>
            <div className='mt-2'>
            <ul className="menu mx-auto w-56 rounded-box font-semibold">
                <li><Link to='/dashboard/myclasses'>Add a Class</Link></li>   
                <li><Link to='/dashboard/enrolled'>My Classes</Link></li>   
                <li><Link to='/dashboard/paymenthistory'>Payment History</Link></li>   
            </ul>
            </div>
        </div>
    );
};

export default InstructorNavber;