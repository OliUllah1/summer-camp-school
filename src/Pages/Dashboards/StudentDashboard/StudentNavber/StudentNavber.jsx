import React from 'react';
import { Link } from 'react-router-dom';
const StudentNavber = () => {
    return (
        <div className='text-white'>
            <div className='mt-2'>
            <ul className="menu mx-auto w-56 rounded-box font-semibold">
                <li><Link to='/dashboard/myclasses'>My Classes</Link></li>   
                <li><Link to='/dashboard/enrolled'>Enrolled Classes</Link></li>   
                <li><Link to='/dashboard/paymenthistory'>Payment History</Link></li>   
            </ul>
            </div>
        </div>
    );
};

export default StudentNavber;