import React from 'react';

const ClassDetails = ({singleClass,index}) => {
    console.log(singleClass)
    const {availableSets,classImg,className,instructorEmail,instructorName,price,status}=singleClass;
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
        <td className='font-semibold'>$ {price}</td>
        <td className='text-center font-semibold'>{availableSets}</td>
        <td>
            {status==='pending'&&<p className='flex gap-2 font-semibold text-red-500'>pending <span className="loading loading-spinner loading-xs"></span></p>}
            {status==='approved'&&<p className=' text-green-500'>Approved</p>}
            {status==='denied'&&<p className='text-red-500'>Denied</p>}
            
        </td>
      </tr>
    );
};

export default ClassDetails;