import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import PopularClassCard from './PopularClassCard';
import useAuth from '../../../Hooks/useAuth';
const PopularClasses = () => {
    const {dark}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/popularclasses')
        return res.data;
    })
    console.log(classes)
    return (
        <div className={'lg:py-20 px-2 lg:px-10' + (dark?" bg-black":'')}>
            <div className='lg:w-1/2 mx-auto text-center space-y-3'>
            <div>
            <i className='text-[#eb1551] text-lg font-semibold'>Popular Classes</i>
            </div>
            <h1 className={'text-4xl font-bold ' + (dark?"text-white":'text-gray-700')}>
            Choose The Best Class For You
            </h1>
            <p className={'font-semibold ' + (dark?"text-white":'text-gray-700')}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur suscipit dolorem fuga esse eum!</p>
           
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pt-5 mt-5'>
                {
                    classes.map(singleClass=><PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;