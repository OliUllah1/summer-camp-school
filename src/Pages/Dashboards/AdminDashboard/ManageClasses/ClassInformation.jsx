import React from 'react';
import { FaCheck,FaTimes,FaComment} from "react-icons/fa";
import Swal from 'sweetalert2';

const ClassInformation = ({singleClass,index}) => {
  const {availableSets,classImg,className,instructorEmail,instructorName,price,status,_id}=singleClass;
  const handleApproved=(id)=>{
    fetch(`http://localhost:5000/classes/${id}`,{
      method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(modifiedCount===1){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Class Approved Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
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
        <td>
          <h4 className='font-semibold text-xl'>{instructorName}</h4>
          <p className='font-semibold text-gray-600'>{instructorEmail}
          </p>
          
        </td>
        <td className='text-center font-semibold'>{availableSets}</td>
        <td className='font-semibold'>$ {price}</td>
        <td>
            {status==='pending'&&<p className='flex gap-2 font-semibold text-red-500'>pending <span className="loading loading-spinner loading-xs"></span></p>}
            {status==='approved'&&<p className=' text-green-500'>Approved</p>}
            {status==='denied'&&<p className='text-red-500'>Denied</p>}
            
        </td>
        <td>
          <button onClick={()=>handleApproved(_id)} disabled={status==='approved'|| status==='denied'} className=' bg-green-500 rounded-full p-3 text-white font-semibold mr-3'><FaCheck></FaCheck></button>
          <button disabled={status==='approved'|| status==='denied'} className='bg-red-500 rounded-full p-3 text-white font-semibold'><FaTimes></FaTimes></button>
          <button className='bg-sky-500 ml-3 rounded-full p-3 text-white font-semibold'><FaComment></FaComment></button>
        </td>
      </tr>
    );
};

export default ClassInformation;