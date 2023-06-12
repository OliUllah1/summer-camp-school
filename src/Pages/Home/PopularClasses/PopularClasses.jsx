import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import PopularClassCard from './PopularClassCard';
import useAuth from '../../../Hooks/useAuth';
import { Fade, Slide } from "react-awesome-reveal";
const PopularClasses = () => {
    const {dark}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/popularclasses')
        return res.data;
    })
    console.log(classes)
    return (
        <div className={'lg:py-10 px-2' + (dark?" bg-black":'')}>
            <div className='lg:w-1/2 mx-auto text-center space-y-3'>
            <div>
            <i className='text-[#eb1551] text-lg font-semibold'>Popular Classes</i>
            </div>
            <Fade className={'text-4xl font-bold ' + (dark?"text-white":'text-gray-700')} delay={1e3} cascade damping={1e-1}>
            Choose The Best Class For You
            </Fade>
            <Slide>
            <p className={'font-semibold ' + (dark?"text-white":'text-gray-700')}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur suscipit dolorem fuga esse eum!</p>
            </Slide>
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pt-5'>
                {
                    classes.map(singleClass=><PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;