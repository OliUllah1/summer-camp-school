import React from 'react';
import register from '../../../assets/images/register.jpg'
import registerBg from '../../../assets/images/register-bg.jpg'
import { FaCheckCircle,FaClock,FaPhoneAlt,FaMapMarkerAlt } from "react-icons/fa";
const Register = () => {
    return (
        <div className='lg:py-10 relative h-[1950px] lg:h-[1250px]'>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${registerBg})`,backgroundAttachment:'fixed',backgroundPosition:'cover'}}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" space-y-3">
      <p className='italic text-red-600 text-xl font-semibold'>Register Now</p>
      <h1 className='font-bold text-4xl text-white'>Join Our Class Now And Get 20% Discount</h1>
      <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
  </div>
            </div>
            <div className='lg:flex absolute w-full lg:w-[85%] top-96 mt-56 lg:mt-32 rounded-tl-3xl rounded-br-3xl gap-10 lg:mx-20 p-5 lg:p-16 bg-white shadow-2xl'>
                <div className='w-full'>
                    <form action="" className=' mb-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered" />
                    </div>
                    <div className='lg:flex w-full gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg font-semibold">Email</span>
                        </label>
                        <input type="text" placeholder="Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg font-semibold">Telephone</span>
                        </label>
                        <input type="text" placeholder="Telephone" className="input input-bordered" />
                    </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Select Class</span>
                        </label>
                        <input type="text" placeholder="Class" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Message</span>
                        </label>
                        <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full h-40" ></textarea>
                    </div>
                    <button className='primary-btn uppercase mt-5' type='submit'>Register Now</button>
                    </form>
                </div>
                <div className='w-full relative'>
                    <div className='lg:mx-5 bg-black rounded-tl-[40px] rounded-br-[30px]'>
                        <img className='w-full h-[550px] object-cover rounded-tl-[40px] rounded-br-[30px] opacity-10' src={register} alt="" />
                    </div>
                    <div className=' absolute lg:mx-5 top-0 w-full h-full py-10 pl-10 pr-14 space-y-4 lg:space-y-5'>
                        <h3 className='text-xl lg:text-3xl font-bold text-white'>Don't Hesitate To Contact Us If You Have Any Question</h3>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                        <div className='flex gap-5 items-center text-gray-300'>
                            <FaCheckCircle className='text-[#ce373a]'></FaCheckCircle>
                            <p>Consectetuer adipiscing elit. Aenean commodo</p>
                        </div>
                        <div className='flex gap-5 items-center text-gray-300'>
                            <FaCheckCircle className='text-[#ce373a]'></FaCheckCircle>
                            <p>Excepteur sint occaecat cupidatat non proident</p>
                        </div>
                        <button className='primary-btn'>VIEW CLASS</button>
                        
                        <div className='flex gap-5 items-center text-gray-300'>
                            <FaMapMarkerAlt className='text-[#ce373a]'></FaMapMarkerAlt>
                            <p>Dhaka,Bangladesh</p>
                        </div>
                        <div className='flex gap-5 items-center text-gray-300'>
                            <FaClock className='text-[#ce373a]'></FaClock>
                            <p>Mon - Fri : 9:00 am - 5:00 pm</p>
                        </div>
                        <div className='flex gap-5 items-center text-gray-300'>
                            <FaMapMarkerAlt className='text-[#ce373a]'></FaMapMarkerAlt>
                            <p>+000 - 123 - 456789</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;