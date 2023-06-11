import React from 'react';
import { FaUser,FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ClassDetails = ({singleClass,index}) => {
    const {availableSets,classImg,className,price,status,TotalEnrolledStudents,feedback,_id}=singleClass;
    return (
        <tr className='w-[100%]'>
        <th className='text-[#eb1551]'>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask  w-20 h-16 object-center rounded-lg">
                <img src={classImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-[#eb1551]">{className}</div>
            </div>
          </div>
        </td>
        <td className='font-semibold'>$ {price}</td>
        <td className='text-center font-semibold'><span className='flex items-center justify-center gap-2'>{availableSets} <FaUser className=' text-[#eb1551]'></FaUser></span></td>
        <td className='text-center font-semibold'>
          <span className='flex items-center justify-center gap-2'>{TotalEnrolledStudents} <FaUser className='text-green-500'></FaUser></span>
          </td>
        <td>
            {status==='pending'&&<p className='flex gap-2 font-semibold text-red-500'>pending <span className="loading loading-spinner loading-xs"></span></p>}
            {status==='approved'&&<p className=' text-green-500'>Approved</p>}
            {status==='denied'&&<p className='text-red-500'>Denied</p>}
            
        </td>
        <td className={status==='approved'?'text-green-500 font-semibold':'text-red-500 font-semibold'}>{feedback}</td>
        <td>
          <Link to={`/dashboard/updateclass/${_id}`}>
          <button className='bg-emerald-500 p-3 rounded-full text-white'><FaPen></FaPen></button>
          </Link>
        </td>
      </tr>
    );
};

export default ClassDetails;