import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import login from '../../../assets/images/login.jpg'
import { FaEye,FaEyeSlash } from "react-icons/fa";
import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
    const {signIn}=useAuth();
    const [error,setError]=useState(null)
    const [showPassword,setShowPassword]=useState(!true)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('');
        signIn(data.email,data.password)
        .then(result=>{
            const user= result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
    const handleShowPassword =()=>{
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }
    return (
        <div>
             <div className="flex items-center justify-center py-10">
                <div className='w-1/2'>
                    <img src={login} alt="" />
                </div>
                <div className="w-1/3 border rounded-lg bg-base-100 px-5 py-10">
                    <h1 className='font-bold text-3xl mb-2 text-[#eb1551]'>Login Now</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="text"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        {errors.email && <span className='mt-1 text-red-700'>Please enter your email and try again</span>}
                        <div className="form-control  relative">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword?'text':'password'}
                            
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                            name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 character</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be use one capital letter and one special character.</p>}
                        <p className='text-red-500'>{error && error}</p>

                        <p className='mt-3'>New here?<Link className="link link-primary" to='/signup'>create an a account</Link></p>
                        <div className="form-control mt-6">
                            <input className='primary-btn' type="submit" value="Login" />
                        </div>
                    </form>
                    <button onClick={handleShowPassword} className=' absolute right-48 top-64'>{showPassword?<FaEyeSlash className="w-8"></FaEyeSlash>:<FaEye className='w-8'></FaEye>}</button>
                    <div className="divider">OR</div>
                    <div>
                    <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;