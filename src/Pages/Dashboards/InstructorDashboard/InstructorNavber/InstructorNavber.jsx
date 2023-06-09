import React from 'react';
import { Link } from 'react-router-dom';
const InstructorNavber = () => {
    return (
        <div className='text-white'>
        <div className='mt-2'>
        <ul className="menu mx-auto w-56 rounded-box font-semibold">
            <li><Link to='/dashboard/addclass'>Add a Class</Link></li>   
            <li><Link to='/dashboard/instructorclasses'>My Classes</Link></li>     
            <li><Link to='/dashboard'>Feedback</Link></li>     
        </ul>
        </div>
    </div>
    );
};

export default InstructorNavber;