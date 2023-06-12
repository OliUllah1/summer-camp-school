import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/popularinstructors')
        return res.data;
    })

    return (
        <div className='py-10'>
            <div className='w-1/2 mx-auto text-center space-y-3'>
            <i className='text-[#eb1551] text-lg font-semibold'>Popular Instructors</i>
            <h1 className='text-4xl font-bold text-gray-700'>Meet Our Instructors</h1>
            <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur suscipit dolorem fuga esse eum!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>
               {
                instructors.map(instructor=><PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
               }
            </div>
        </div>
    );
};

export default PopularInstructors;