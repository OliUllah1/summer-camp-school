import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import drawingbg from '../../../assets/images/about/drawing-bg.jpg'
import drawing from '../../../assets/images/about/drawing.jpg'
import { FaArrowRight } from "react-icons/fa";
const AboutBottom = () => {
    const {dark}=useAuth()
    return (
        <div className='lg:flex lg:py-20'>
            <div className='w-full bg-black relative'>
                <img className='w-full h-[430px] object-cover lg:h-[500px] opacity-10 ' src={drawingbg} alt="" />
                <div className='absolute  space-y-5 w-full h-full top-0 left-0 text-white p-7 lg:p-20'>
                    <h1 className='text-2xl lg:text-4xl pr-5 font-bold'>20 Years Of Experience In Art & Drawing School</h1>
                    <div className='space-y-5'>
                       
                        <div className='space-y-1'>
                        <div className='flex justify-between'>
                        <p className='font-bold'>Drawing</p>
                        <p className='text-gray-400 text-lg'>89%</p>
                        </div>
                        <div className='relative'>
                            <p className='w-full py-[5px] bg-white rounded-tl-lg rounded-br-lg'></p>
                            <p className='w-[89%] py-[5px] absolute top-0 bg-red-500 rounded-tl-lg rounded-br-lg'></p>
                        </div>

                        </div>
                        <div className='space-y-1'>
                        <div className='flex justify-between'>
                        <p className='font-bold'>Painting</p>
                        <p className='text-gray-400 text-lg'>86%</p>
                        </div>
                        <div className='relative'>
                            <p className='w-full py-[5px] bg-white rounded-tl-lg rounded-br-lg'></p>
                            <p className='w-[86%] py-[5px] absolute top-0 bg-red-500 rounded-tl-lg rounded-br-lg'></p>
                        </div>

                        </div>
                        <div className='space-y-1'>
                        <div className='flex justify-between'>
                        <p className='font-bold'>Sketch</p>
                        <p className='text-gray-400 text-lg'>82%</p>
                        </div>
                        <div className='relative'>
                            <p className='w-full py-[5px] bg-white rounded-tl-lg rounded-br-lg'></p>
                            <p className='w-[82%] py-[5px] absolute top-0 bg-red-500 rounded-tl-lg rounded-br-lg'></p>
                        </div>

                        </div>
                        <div className='space-y-1'>
                        <div className='flex justify-between'>
                        <p className='font-bold'>Digital Art</p>
                        <p className='text-gray-400 text-lg'>86%</p>
                        </div>
                        <div className='relative'>
                            <p className='w-full py-[5px] bg-white rounded-tl-lg rounded-br-lg'></p>
                            <p className='w-[86%] py-[5px] absolute top-0 bg-red-500 rounded-tl-lg rounded-br-lg'></p>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
                <div className='w-full hidden lg:block relative'>
                <img className='w-full h-full object-cover' src={drawing} alt="" />
                <div className='absolute right-0 top-72 w-[60%] bg-red-700 text-white p-10 rounded-tl-lg space-y-3'>
                    <h3 className='font-bold text-2xl'>We Provide Best Service</h3>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim nostrud exercitation</p>
                    <button className='font-semibold text-lg flex items-center gap-2 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300'>Join Class Now <FaArrowRight></FaArrowRight> </button>
                </div>
                </div>
        </div>
    );
};

export default AboutBottom;