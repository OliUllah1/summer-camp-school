import React from 'react';
import event from '../../../assets/images/event.jpg'
import { FaCalendarAlt } from "react-icons/fa";
const Events = () => {
    return (
        <div className='px-2 py-20 lg:px-10 flex gap-5'>
            <div className='w-full mx-20 relative'>
                <img className='w-full h-[600px] object-cover rounded-tl-3xl rounded-br-3xl' src={event} alt="" />
                <div className='bg-white absolute bottom-0 -mb-14 shadow-xl space-y-3 px-10 py-5 w-[85%] left-5 rounded-tl-3xl rounded-br-3xl'>
                    <p className='border-l-4 border-red-500 pl-5 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”</p>
                    <h5 className='font-semibold text-lg'>Russell Mack</h5>
                </div>
            </div>
            <div className='w-full mt-11 space-y-6'>
                <p className='italic text-xl text-red-600'>Events</p>
                <h2 className='font-semibold text-4xl'>Upcoming Events And Exhibitions From Students</h2>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className='space-y-4'>
                    <h4 className='font-semibold text-2xl'>The Student Exhibitions</h4>
                    <span className='flex items-center gap-3'><FaCalendarAlt className='text-[#ce373a]'></FaCalendarAlt> <p className='text-gray-500'>12 March - 20 March 2022</p></span>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <hr />
                </div>
                
                <div className='space-y-4'>
                    <h4 className='font-semibold text-2xl'>The Student Exhibitions #2</h4>
                    <span className='flex items-center gap-3'><FaCalendarAlt className='text-[#ce373a]'></FaCalendarAlt> <p className='text-gray-500'>20 August - 24 August 2022</p></span>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <hr />
                </div>
                
            </div>
        </div>
    );
};

export default Events;