import React from 'react';
import { FaPhoneAlt,FaFacebookF,FaInstagram,FaLinkedinIn,FaEnvelope,FaTiktok,FaTwitter } from "react-icons/fa";
const TopNavber = () => {
    return (
        <div className=' bg-[#eb1551] py-2 px-5 text-white hidden lg:flex justify-between'>
            <div className='flex gap-5'>
                <p className='flex items-center gap-2'><FaPhoneAlt></FaPhoneAlt> +000 - 123 - 456789</p>
                <p className='flex items-center gap-2'><FaEnvelope></FaEnvelope>art.academy@gmail.com</p>
            </div>
            <div>
                <p className='flex items-center gap-4'>Follow Us :
                <span className='flex gap-2'>
                <span  className=' bg-white text-[#eb1551] w-6 rounded-full h-6 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300'><FaFacebookF className='mt-1 ml-1'></FaFacebookF></span>
                <span  className=' bg-white text-[#eb1551] w-6 rounded-full h-6 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300'><FaInstagram className='mt-1 ml-1'></FaInstagram></span>
                <span  className=' bg-white text-[#eb1551] w-6 rounded-full h-6 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300'><FaTiktok  className='mt-1 ml-1'></FaTiktok></span>
                <span  className=' bg-white text-[#eb1551] w-6 rounded-full h-6 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300'><FaTwitter className='mt-1 ml-1'></FaTwitter></span>
                </span>
                </p>
            </div>
        </div>
    );
};

export default TopNavber;