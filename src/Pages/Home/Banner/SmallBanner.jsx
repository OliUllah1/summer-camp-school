import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const SmallBanner = () => {
    const {dark}=useAuth()
    console.log(dark)
    return (
        <div className="hero min-h-screen block lg:hidden" style={{backgroundImage: 'url(https://i.ibb.co/jWw4f6j/Slider-1.jpg)',backgroundSize:'cover'}}>
            <div className={"hero-overlay"+ (dark?" bg-opacity-100":' bg-opacity-70')}></div>
            <div className="">
            <div className="px-2 pt-20">
                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">The Most Creative <span className='text-[#eb1551]'>Art School</span> That Can Develop Your Talent</h1>
                <p className="mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat enim in corporis totam animi, quibusdam, magnam voluptates expedita corrupti asperiores, quod eos mollitia quos temporibus sapiente molestiae autem illo?</p>
                <button className="primary-btn">Admission Now</button>
            </div>
            </div>
        </div>
    );
};

export default SmallBanner;