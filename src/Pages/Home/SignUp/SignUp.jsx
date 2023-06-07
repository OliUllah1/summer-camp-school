
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin';
import {  useState } from 'react';
import { useForm } from 'react-hook-form';
import signupImg from '../../../assets/images/signup.jpg'
import useAuth from "../../../Hooks/useAuth";
const SignUp = () => {
    const {createUser,updateUserNameAndPhoto}=useAuth()
    const [error,setError]=useState(null)
    const [passwordError,setPasswordError]=useState(null);
    const [showPassword,setShowPassword]=useState(!true)
    const [showConfirmPassword,setShowConfirmPassword]=useState(!true)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        
        if(data.password===data.confirmPassword){
            console.log(data)
            const {email,password,name,photoUrl}=data;
            createUser(email,password)
            .then(result=>{
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error=>{
                console.log(error)
                setError(error.message)
            })

        }
        else{
            return setPasswordError('password and confirm password are not same!!')
        }
    };
    const handleShowPassword =()=>{
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }
    const handleShowConfirmPassword=()=>{
        if(showConfirmPassword){
            setShowConfirmPassword(false)
        }
        else{
            setShowConfirmPassword(true)
        }
    }
    return (
        <div>
             <div className="flex items-center justify-center py-10">
                <div className='w-1/2'>
                    <img src={signupImg} alt="" />
                </div>
                <div className="w-1/3 border rounded-lg bg-base-100 px-5 py-10">
                    <h1 className='font-bold text-3xl mb-2 text-[#eb1551]'>Sign Up Now</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                        </div>
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
                            name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 character</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be use one capital letter and one special character.</p>}
                        <div className="form-control  relative">
                            <label className="label">
                            <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={showConfirmPassword?'text':'password'}  
                            {...register("confirmPassword", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                            name='confirmPassword' placeholder="confirm password" className="input input-bordered" />
                        </div>
                        {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.confirmPassword?.type === 'minLength' && <p className="text-red-600">Password must be 6 character</p>}
                        {errors.confirmPassword?.type === 'pattern' && <p className="text-red-600">Password must be use one capital letter and one special character.</p>}
                        <p className="text-red-500">{passwordError&&passwordError}</p>
                        
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url"  {...register("photoUrl", { required: true })} name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
                        </div>
                        {errors.photoUrl?.type === 'required' && <p role="alert" className="text-red-500">photo url is required</p>}
                        <p className="text-red-500 mt-2">{error&&error}</p>
                        <p className='mt-3'>Already have a account?<Link className="link link-primary" to='/login'>Login now</Link></p>
                        
                        <div className="form-control mt-6">
                            <input className='primary-btn' type="submit" value="Create Account" />
                        </div>
                    </form>
                    <button onClick={handleShowPassword} className=' inline-block absolute right-48 top-64 mt-20 pt-2'>{showPassword?<FaEyeSlash className="w-8"></FaEyeSlash>:<FaEye className='w-8'></FaEye>}</button>
                    <button onClick={handleShowConfirmPassword} className='inline-block absolute right-48 top-64 mt-40 pt-2'>{showConfirmPassword?<FaEyeSlash className="w-8"></FaEyeSlash>:<FaEye className='w-8'></FaEye>}</button>
                    <div className="divider">OR</div>
                    <div>
                    <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;