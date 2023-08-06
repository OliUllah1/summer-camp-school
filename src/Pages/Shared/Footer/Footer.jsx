import React from 'react';
import logo from '../../../assets/images/logo3.png'
import { FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaClock } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='text-center w-full lg:text-left px-5 lg:px-10 pt-20 pb-10 bg-[#12161f] text-white'>
        <footer className="footer">
  <div>
    <img className='w-56 mb-2' src={logo} alt="" />
    <p className=' text-gray-400 font-semibold'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Animi esse excepturi <br /> tempore,  quibusdam sed voluptates.</p>
    <div className='space-y-3 mt-3'>
        <p className='flex gap-3 items-center font-semibold'><span className='text-[#eb1551]'><FaMapMarkerAlt className='text-xl'></FaMapMarkerAlt></span> Dhaka,Bangladesh</p>
        <p className='flex gap-3 items-center font-semibold'><span className='text-[#eb1551]'><FaEnvelope className='text-xl'></FaEnvelope></span> articio@gmail.com</p>
        <p className='flex gap-3 items-center font-semibold'><span className='text-[#eb1551]'><FaPhoneAlt className='text-xl'></FaPhoneAlt></span> +000 - 123 - 456789</p>
    </div>
  </div> 
  <div className='text-lg'>
    <span className="text-xl border-b-2 border-[#eb1551]">Quick Links</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Class</a> 
    <a className="link link-hover">Teacher</a> 
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Contact</a>
  </div> 
  <div className='text-lg'>
    <span className="text-xl border-b-2 border-[#eb1551]">Useful Links</span> 
    <a className="link link-hover">Privacy Policy</a> 
    <a className="link link-hover">Terms and Conditions</a> 
    <a className="link link-hover">Disclaimer</a> 
    <a className="link link-hover">Support</a>
    <a className="link link-hover">FAQ</a>
  </div> 
  <div>
    <span className="text-xl border-b-2 border-[#eb1551]">Work Hours</span> 
    <p className='flex gap-3 items-center font-semibold'><span className='text-[#eb1551]'><FaClock className='text-xl'></FaClock></span> 9 AM - 5 PM , Monday - Saturday</p>
    <p className='my-3 text-gray-400  text-lg'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Commodi, ratione?</p>
    <button className='primary-btn'>Register Now</button>
  </div>
        </footer>
        <hr className='mt-10' />
        <p className='text-center mt-2 text-white'>Copyright © 2023. All rights reserved.</p>
        
        </div>
    );
};

export default Footer;