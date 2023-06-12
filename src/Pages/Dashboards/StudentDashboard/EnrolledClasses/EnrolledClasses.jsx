import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import useAuth from '../../../../Hooks/useAuth';
import EnrollClass from './EnrollClass';

const EnrolledClasses = () => {
    const {user}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['enroll-classes'], async () => {
        const res = await axiosSecure.get(`/payments?email=${user.email}`)
        return res.data;
    })
    return (
        <div className='pt-5'>
            <h1 className='font-semibold text-2xl text-[#eb1551]'>My Enroll Classes</h1>
            <div className='grid mt-5 grid-cols-3 gap-5'>
                {
                    classes.map(singleClass=><EnrollClass singleClass={singleClass} key={singleClass._id}></EnrollClass>)
                }
            </div>
        </div>
    );
};

export default EnrolledClasses;