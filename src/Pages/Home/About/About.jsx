import React from 'react';
import aboutPic from "../../../assets/images/about/about.jpg"
import aboutPrint from "../../../assets/images/about/about-print.jpg"
import founder from "../../../assets/images/about/founder.jpg"
const About = () => {
    return (
        <div className='px-10 py-20 flex gap-10'>
            <div className='w-[100%]  relative'>
                <div className='bg-[#2d3448] w-[80%] ml-20 mb-20 mt-36 h-[600px]'>
                </div>

                <img className='absolute object-cover h-[85%] w-[85%] left-0 top-0 rounded-tl-3xl' src={aboutPic} alt="" />
                <img className='absolute w-[62%] -mb-3 h-[50%] rounded-2xl border-[15px] border-white -mr-16 right-0 bottom-0 object-cover' src={aboutPrint} alt="" />

             
            </div>
            <div className='space-y-5 mt-16'>
                <p className='italic text-2xl text-red-700'>About Articio</p>
                <h1 className='text-5xl font-semibold'>Learn The Art From The Core And Pursue Your Passion</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                <div className='flex'>
                    <div className='w-[80%] space-y-1 py-2 border-r-4'>
                        <div className='flex justify-center items-center text-center gap-3'>
                        <h1 className='font-bold text-5xl text-red-500'>1999</h1>
                        <p className='text-2xl text-semibold'>+</p>
                        </div>
                        <p className='ml-3 text-center text-gray-500 font-semibold'>Happy Students</p>
                    </div>
                    <h5 className='px-10 py-2 text-gray-500 text-lg space-y-1'>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti</h5>
                </div>
                <div className='flex'>
                    <div className='w-[91%] space-y-1 py-2 border-r-4'>
                        <div className='flex items-center justify-center text-center gap-3'>
                        <h1 className='font-bold text-5xl text-red-500'>120</h1>
                        <p className='text-2xl text-semibold'>+</p>
                        </div>
                        <p className='text-gray-500 text-center font-semibold'>Events & Exhibitions</p>
                    </div>
                    <h5 className='px-10 py-2 text-gray-500 text-lg space-y-1'>Perspiciatis unde omnis iste natus error volupta accusantium doloremque laudanti, totam rem aperiam eaque ipsa inventore</h5>
                </div>
                <div className='flex items-center gap-14'>
                    <div className='flex px-10 gap-5 justify-center items-center'>
                        <img className='w-20 rounded-full' src={founder} alt="" />
                        <div>
                            <h3 className='text-xl font-bold text-gray-700'>Oli Ullah</h3>
                            <p className='text-gray-500'>Founder Articio</p>
                        </div>
                    </div>
                    <button className='primary-btn'>More About Us</button>
                </div>
                
            </div>
        </div>
    );
};

export default About;