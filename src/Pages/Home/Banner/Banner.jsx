import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useAuth from '../../../Hooks/useAuth';

const Banner = () => {
    const {dark}=useAuth()
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/src/assets/images/Slider-1.jpg)'}}>
            <div className={"hero-overlay"+ (dark?" bg-opacity-100":' bg-opacity-70')}></div>
            <div className="">
            <div className="pl-10  w-1/2">
                <h1 className="mb-5 text-6xl font-bold text-white">The Most Creative <span className='text-[#eb1551]'>Art School</span> That Can Develop Your Talent</h1>
                <p className="mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat enim in corporis totam animi, quibusdam, magnam voluptates expedita corrupti asperiores, quod eos mollitia quos temporibus sapiente molestiae autem illo?</p>
                <button className="primary-btn">Admission Now</button>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/src/assets/images/Slider-2.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="">
            <div className="pl-10  w-1/2">
                <h1 className="mb-5 text-6xl font-bold text-white">The Most Creative <span className='text-[#eb1551]'>Art School</span> That Can Develop Your Talent</h1>
                <p className="mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat enim in corporis totam animi, quibusdam, magnam voluptates expedita corrupti asperiores, quod eos mollitia quos temporibus sapiente molestiae autem illo?</p>
                <button className="primary-btn">Admission Now</button>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/src/assets/images/Slider-3.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="">
            <div className="pl-10  w-1/2">
                <h1 className="mb-5 text-6xl font-bold text-white">The Most Creative <span className='text-[#eb1551]'>Art School</span> That Can Develop Your Talent</h1>
                <p className="mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat enim in corporis totam animi, quibusdam, magnam voluptates expedita corrupti asperiores, quod eos mollitia quos temporibus sapiente molestiae autem illo?</p>
                <button className="primary-btn">Admission Now</button>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(/src/assets/images/Slider-4.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="">
            <div className="pl-10  w-1/2">
                <h1 className="mb-5 text-6xl font-bold text-white">The Most Creative <span className='text-[#eb1551]'>Art School</span> That Can Develop Your Talent</h1>
                <p className="mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat enim in corporis totam animi, quibusdam, magnam voluptates expedita corrupti asperiores, quod eos mollitia quos temporibus sapiente molestiae autem illo?</p>
                <button className="primary-btn">Admission Now</button>
            </div>
            </div>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/src/assets/images/Slider-5.jpg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="">
            <div className="pl-10  w-1/2">
                <h1 className="mb-5 text-6xl font-bold text-white">The Most Creative <span className='text-[#eb1551]'>Art School</span> That Can Develop Your Talent</h1>
                <p className="mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat enim in corporis totam animi, quibusdam, magnam voluptates expedita corrupti asperiores, quod eos mollitia quos temporibus sapiente molestiae autem illo?</p>
                <button className="primary-btn">Admission Now</button>
            </div>
            </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    );
};

export default Banner;