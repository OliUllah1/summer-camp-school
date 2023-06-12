import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import ClassPaymentHistory from './ClassPaymentHistory';

const PaymentHistory = () => {
    const {user}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['enroll-classes'], async () => {
        const res = await axiosSecure.get(`/payments?email=${user.email}`)
        return res.data;
    })
    return (
        <div className='w-[100%]'>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr className='bg-[#eb1551] text-white'>
        <th>No</th>
        <th>Class Name</th>
        <th>Payment ID</th>
        <th>Instructor</th>
        <th>Class Price</th>
        <th>Purchase Time</th>
      </tr>
    </thead>
    <tbody>
    {
        classes.map((singleClass,index)=><ClassPaymentHistory key={singleClass._id} index={index} singleClass={singleClass}></ClassPaymentHistory>)
      }
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;