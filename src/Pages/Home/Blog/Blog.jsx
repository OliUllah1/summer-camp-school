import React from 'react';
import blog1 from '../../../assets/images/blog1.jpg'
import blog2 from '../../../assets/images/blog2.jpg'
import blog3 from '../../../assets/images/blog3.jpg'
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
    return (
        <div className='px-2 lg:px-10 py-20'>
            <div className='text-center space-y-3'>
            <p className='italic text-xl text-red-600'>Our Blog</p>
            <h1 className='font-bold text-4xl'>Latest Articles & Blog</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden lg:block' /> tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='grid my-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='space-y-3 shadow-2xl p-5 rounded-tl-3xl rounded-br-3xl'>
                    <div className='relative'>
                        <img className='rounded-tl-3xl rounded-br-3xl' src={blog1} alt="" />
                        <p className='bg-red-600 absolute top-4 left-4 px-2 py-2 w-28 text-center text-white rounded-tl-xl rounded-br-xl'>Application</p>
                    </div>
                    <h1 className='text-2xl font-semibold'>10 Best Drawing Apps And Art Apps In 2022 ( Free & Paid )</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                    <button className='text-red-600 text-sm flex gap-3 items-center font-semibold'>READ MORE<FaArrowRight></FaArrowRight> </button>
                </div>
                <div className='space-y-3 shadow-2xl p-5 rounded-tl-3xl rounded-br-3xl'>
                    <div className='relative'>
                        <img className='rounded-tl-3xl rounded-br-3xl' src={blog1} alt="" />
                        <p className='bg-red-600 absolute top-4 left-4 px-2 py-2 w-20 text-center text-white rounded-tl-xl rounded-br-xl'>Insight</p>
                    </div>
                    <h1 className='text-2xl font-semibold'>Mixed Media Art – Guide With Types, Techniques & Examples</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                    <button className='text-red-600 text-sm flex gap-3 items-center font-semibold'>READ MORE<FaArrowRight></FaArrowRight> </button>
                </div>
                <div className='space-y-3 shadow-2xl p-5 rounded-tl-3xl rounded-br-3xl'>
                    <div className='relative'>
                        <img className='rounded-tl-3xl rounded-br-3xl' src={blog1} alt="" />
                        <p className='bg-red-600 absolute top-4 left-4 px-2 py-2 w-20 text-center text-white rounded-tl-xl rounded-br-xl'>Painting</p>
                    </div>
                    <h1 className='text-2xl font-semibold'>Why Knowing How To Draw Will Improve Your Painting</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                    <button className='text-red-600 text-sm flex gap-3 items-center font-semibold'>READ MORE<FaArrowRight></FaArrowRight> </button>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;