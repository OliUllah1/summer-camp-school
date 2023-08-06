import React from 'react';
import teacher1 from '../../../assets/images/teacher/teacher1.jpg'
import teacher2 from '../../../assets/images/teacher/teacher2.jpg'
import teacher3 from '../../../assets/images/teacher/teacher3.jpg'
import teacher4 from '../../../assets/images/teacher/teacher4.jpg'
import teacher5 from '../../../assets/images/teacher/teacher5.jpg'
import teacher6 from '../../../assets/images/teacher/teacher6.jpg'
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const Teacher = () => {

    return (
        <div className='px-3 w-full lg:px-10 pt-10'>
            <div className='space-y-4 text-center'>
                <p className='italic text-red-600 text-xl'>Our Teacher</p>
                <h1 className='font-bold text-4xl'>Meet With Expert Teacher</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor <br className='hidden lg:block' /> incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='grid my-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className="group rounded-tl-3xl rounded-br-3xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="">
                    <img className="h-full rounded-tl-3xl rounded-br-3xl w-full object-cover transition-transform duration-500 " src={teacher1} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <div className='w-[80%] -mt-64 rounded-tl-3xl rounded-br-3xl left-10 z-20 space-y-2 bg-white py-4 text-center shadow-xl'>
                            <h3 className='text-2xl font-bold'>Elsie Boyce</h3>
                            <p className='text-gray-500'>Teacher</p>
                        </div>
                        <div className='absolute rounded-tl-3xl rounded-br-3xl opacity-80 top-0 w-full h-full'>
                            <div className='flex items-center gap-3 justify-center pt-80'>
                                <div className='teacher-btn'>
                                    <FaFacebookF></FaFacebookF>
                                </div>
                                <div className='primary-teacher-btn'>
                                    <FaTwitter></FaTwitter>
                                </div>
                                <div className='teacher-btn'>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="group rounded-tl-3xl rounded-br-3xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="">
                    <img className="h-full rounded-tl-3xl rounded-br-3xl w-full object-cover transition-transform duration-500 " src={teacher2} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <div className='w-[80%] -mt-64 rounded-tl-3xl rounded-br-3xl left-10 z-20 space-y-2 bg-white py-4 text-center shadow-xl'>
                            <h3 className='text-2xl font-bold'>Russell Mack</h3>
                            <p className='text-gray-500'>Founder Articio</p>
                        </div>
                        <div className='absolute rounded-tl-3xl rounded-br-3xl opacity-80 top-0 w-full h-full'>
                            <div className='flex items-center gap-3 justify-center pt-80'>
                                <div className='teacher-btn'>
                                    <FaFacebookF></FaFacebookF>
                                </div>
                                <div className='primary-teacher-btn'>
                                    <FaTwitter></FaTwitter>
                                </div>
                                <div className='teacher-btn'>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="group rounded-tl-3xl rounded-br-3xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="">
                    <img className="h-full rounded-tl-3xl rounded-br-3xl w-full object-cover transition-transform duration-500 " src={teacher3} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <div className='w-[80%] -mt-64 rounded-tl-3xl rounded-br-3xl left-10 z-20 space-y-2 bg-white py-4 text-center shadow-xl'>
                            <h3 className='text-2xl font-bold'>Don Metcalfe</h3>
                            <p className='text-gray-500'>Teacher</p>
                        </div>
                        <div className='absolute rounded-tl-3xl rounded-br-3xl opacity-80 top-0 w-full h-full'>
                            <div className='flex items-center gap-3 justify-center pt-80'>
                                <div className='teacher-btn'>
                                    <FaFacebookF></FaFacebookF>
                                </div>
                                <div className='primary-teacher-btn'>
                                    <FaTwitter></FaTwitter>
                                </div>
                                <div className='teacher-btn'>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="group rounded-tl-3xl rounded-br-3xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="">
                    <img className="h-full rounded-tl-3xl rounded-br-3xl w-full object-cover transition-transform duration-500 " src={teacher4} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <div className='w-[80%] -mt-64 rounded-tl-3xl rounded-br-3xl left-10 z-20 space-y-2 bg-white py-4 text-center shadow-xl'>
                            <h3 className='text-2xl font-bold'>Adelina Hasan</h3>
                            <p className='text-gray-500'>Teacher</p>
                        </div>
                        <div className='absolute rounded-tl-3xl rounded-br-3xl opacity-80 top-0 w-full h-full'>
                            <div className='flex items-center gap-3 justify-center pt-80'>
                                <div className='teacher-btn'>
                                    <FaFacebookF></FaFacebookF>
                                </div>
                                <div className='primary-teacher-btn'>
                                    <FaTwitter></FaTwitter>
                                </div>
                                <div className='teacher-btn'>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="group rounded-tl-3xl rounded-br-3xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="">
                    <img className="h-full rounded-tl-3xl rounded-br-3xl w-full object-cover transition-transform duration-500 " src={teacher5} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <div className='w-[80%] -mt-64 rounded-tl-3xl rounded-br-3xl left-10 z-20 space-y-2 bg-white py-4 text-center shadow-xl'>
                            <h3 className='text-2xl font-bold'>Asiya Russo</h3>
                            <p className='text-gray-500'>Teacher</p>
                        </div>
                        <div className='absolute rounded-tl-3xl rounded-br-3xl opacity-80 top-0 w-full h-full'>
                            <div className='flex items-center gap-3 justify-center pt-80'>
                                <div className='teacher-btn'>
                                    <FaFacebookF></FaFacebookF>
                                </div>
                                <div className='primary-teacher-btn'>
                                    <FaTwitter></FaTwitter>
                                </div>
                                <div className='teacher-btn'>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="group rounded-tl-3xl rounded-br-3xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="">
                    <img className="h-full rounded-tl-3xl rounded-br-3xl w-full object-cover transition-transform duration-500 " src={teacher6} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <div className='w-[80%] -mt-64 rounded-tl-3xl rounded-br-3xl left-10 z-20 space-y-2 bg-white py-4 text-center shadow-xl'>
                            <h3 className='text-2xl font-bold'>Bryson Whyte</h3>
                            <p className='text-gray-500'>Teacher</p>
                        </div>
                        <div className='absolute rounded-tl-3xl rounded-br-3xl opacity-80 top-0 w-full h-full'>
                            <div className='flex items-center gap-3 justify-center pt-80'>
                                <div className='teacher-btn'>
                                    <FaFacebookF></FaFacebookF>
                                </div>
                                <div className='primary-teacher-btn'>
                                    <FaTwitter></FaTwitter>
                                </div>
                                <div className='teacher-btn'>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Teacher;