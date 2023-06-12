import React from 'react';

const ClassPaymentHistory = ({index,singleClass}) => {
    const {className,classImg,transactionId,instructorName,price,time} =singleClass;
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
          <h4 className='font-semibold text-green-500'>{transactionId}</h4>
        </td>
        <td className='font-semibold'>{instructorName}</td>
        <td>{price}</td>
        <td>{time}</td>
        
        
      </tr>
    );
};

export default ClassPaymentHistory;