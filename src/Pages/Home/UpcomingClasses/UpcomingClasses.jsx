import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import UpcomingClass from './UpcomingClass';
import { Fade, Slide } from "react-awesome-reveal";
import useAuth from '../../../Hooks/useAuth';

const UpcomingClasses = () => {
    const {dark}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/upcomingclasses')
        return res.data;
    })
    return (
        <div className={'lg:py-10 px-2' + (dark?" bg-black":'')}>
            <div className='lg:w-1/2 mx-auto text-center space-y-3'>
            <div>
            <i className='text-[#eb1551] text-lg font-semibold'>Upcoming</i>
            </div>
            
            <Fade className={'text-4xl font-bold ' + (dark?"text-white":'text-gray-700')} delay={1e3} cascade damping={1e-1}>
            See Our Upcoming Classes
            </Fade>
            <Slide>
            <p className={'font-semibold ' + (dark?"text-white":'text-gray-700')}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur suscipit dolorem fuga esse eum!</p>
            </Slide>
            
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>
               {
                classes.map(singleClass=><UpcomingClass key={singleClass._id} singleClass={singleClass}></UpcomingClass>)
               }
            </div>
        </div>
    );
};

export default UpcomingClasses;