import React from 'react';
import digital from '../../../assets/images/class/digital.png';
import drawing from '../../../assets/images/class/drawing.png';
import painting from '../../../assets/images/class/painting.png';
import pottery from '../../../assets/images/class/pottery.png';
import sketch from '../../../assets/images/class/sketch.png';
import {  FaLongArrowAltRight } from "react-icons/fa";

const Class = () => {
    return (
        <div className='py-20 px-3 lg:px-10'>
            <div className='text-center space-y-3 mb-5'>
                <p className='italic text-red-600 text-2xl'>Our Class</p>
                <h1 className='text-4xl font-bold text-gray-700'>Choose The Best Class For You</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden lg:block' /> tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='grid my-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='shadow-xl  rounded-br-3xl rounded-tl-3xl space-y-3 bg-slate-50 p-10'>
                    <img className='w-20 ' src={drawing} alt="" />
                    <h3 className='text-2xl font-semibold text-gray-700'>Drawing Class</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <button className='text-red-500 flex items-center gap-3 font-semibold'>Read More <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                </div>
                <div className='shadow-xl rounded-br-3xl rounded-tl-3xl   space-y-3 bg-slate-50 p-10'>
                    <img className='w-20 ' src={painting} alt="" />
                    <h3 className='text-2xl font-semibold text-gray-700'>Panting Class</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <button className='text-red-500 flex items-center gap-3 font-semibold'>Read More <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                </div>
                <div className='shadow-xl rounded-br-3xl rounded-tl-3xl  space-y-3 bg-slate-50 p-10'>
                    <img className='w-20 ' src={pottery} alt="" />
                    <h3 className='text-2xl font-semibold text-gray-700'>Pottery Class</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <button className='text-red-500 flex items-center gap-3 font-semibold'>Read More <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                </div>
                <div className='shadow-xl rounded-br-3xl rounded-tl-3xl  space-y-3 bg-slate-50 p-10'>
                    <img className='w-20 ' src={digital} alt="" />
                    <h3 className='text-2xl font-semibold text-gray-700'>Digital Art</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <button className='text-red-500 flex items-center gap-3 font-semibold'>Read More <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                </div>
                <div className='shadow-xl rounded-br-3xl rounded-tl-3xl  space-y-3 bg-slate-50 p-10'>
                    <img className='w-20 ' src={sketch} alt="" />
                    <h3 className='text-2xl font-semibold text-gray-700'>Sketch Class</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <button className='text-red-500 flex items-center gap-3 font-semibold'>Read More <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                </div>
                <div className='shadow-xl rounded-br-3xl rounded-tl-3xl  space-y-3 bg-slate-50 p-10'>
                    <img className='w-20 ' src={drawing} alt="" />
                    <h3 className='text-2xl font-semibold text-gray-700'>Drawing Class</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <button className='text-red-500 flex items-center gap-3 font-semibold'>Read More <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                </div>
            </div>
        </div>
    );
};

export default Class;