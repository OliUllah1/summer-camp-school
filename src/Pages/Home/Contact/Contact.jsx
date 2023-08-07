import React from 'react';
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeOpenText } from "react-icons/fa";
import contactbg from '../../../assets/images/teacher/teacher3.jpg'
const Contact = () => {
    return (
        <div className='pb-10 px-2 lg:px-10 space-y-16'>
            <div className='text-center space-y-4'>
                <p className='italic text-xl text-red-500'>Contact Us</p>
                <h1 className='text-4xl font-bold'>Let Us Take You To The Land <br className='hidden lg:block' /> Of Paints & Brushes</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod <br className='hidden lg:block' /> tempor  incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center'>
                <div className='space-y-3 rounded-tl-3xl rounded-br-3xl py-10 bg-white shadow-xl'>
                    <FaMapMarkerAlt className='mx-auto text-red-600 text-5xl'></FaMapMarkerAlt>
                    <p className='text-xl font-semibold'>Office Location</p>
                    <p className='text-gray-500'>Dhaka,Bangladesh</p>
                </div>
                <div className='space-y-3 bg-[#ce373a] text-white rounded-tl-3xl rounded-br-3xl py-10 bg-white shadow-xl'>
                    <FaPhoneAlt className='mx-auto text-5xl'></FaPhoneAlt>
                    <p className='text-xl font-semibold'>Office Location</p>
                    <p className=''>+000 - 123 - 456789</p>
                </div>
                <div className='space-y-3 rounded-tl-3xl rounded-br-3xl py-10 bg-white shadow-xl'>
                    <FaEnvelopeOpenText className='mx-auto text-red-600 text-5xl'></FaEnvelopeOpenText>
                    <p className='text-xl font-semibold'>Send Us A Message</p>
                    <p className='text-gray-500'>articio@gmail.com</p>
                </div>
                
                
            </div>
            <div className='flex w-[90%] mx-auto shadow-2xl rounded-br-3xl'>
                <div className='w-full'>
                    <img className=' rounded-tl-3xl' src={contactbg} alt="" />
                </div>
                <form className='w-full p-20 space-y-7'>
                    <input className='py-3 w-full px-5 border' placeholder='Your Name' type="text" />
                    <input className='py-3 w-full px-5 border' placeholder='Your Email' type="text" />
                    <input className='py-3 w-full px-5 border' placeholder='Your Subject' type="text" />
                    <textarea placeholder="Your Message" className="h-44 p-5 border w-full" ></textarea>
                    <button className='primary-btn'>Send Message</button>   
                </form>
            </div>
        </div>
    );
};

export default Contact;