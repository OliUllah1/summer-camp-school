import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import PopularInstructorCard from './PopularInstructorCard';
import useAuth from '../../../Hooks/useAuth';
import { Fade, Slide } from "react-awesome-reveal";
const PopularInstructors = () => {
    const {dark}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/popularinstructors')
        return res.data;
    })

    return (
        <div className={'py-10 px-2' + (dark?" bg-black":'')}>
            <div className='lg:w-1/2 mx-auto text-center space-y-3'>
            <div>
            <i className='text-[#eb1551] text-lg font-semibold'>Popular Instructors</i>
            </div>
            <Fade className={'text-4xl font-bold ' + (dark?"text-white":'text-gray-700')} delay={1e3} cascade damping={1e-1}>
            Meet Our Instructors
            </Fade>
            <Slide>
            <p className={'font-semibold ' + (dark?"text-white":'text-gray-700')}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur suscipit dolorem fuga esse eum!</p>
            </Slide>
            
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