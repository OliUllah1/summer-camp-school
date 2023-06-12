import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/popularclasses')
        return res.data;
    })
    return (
        <div className='py-10'>
            <div className='w-1/2 mx-auto text-center space-y-3'>
            <i className='text-[#eb1551] text-lg font-semibold'>Popular Classes</i>
            <h1 className='text-4xl font-bold text-gray-700'>Choose The Best Class For You</h1>
            <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur suscipit dolorem fuga esse eum!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>
                {
                    classes.map(singleClass=><PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;