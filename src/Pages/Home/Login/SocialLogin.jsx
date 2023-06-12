
import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { set } from 'react-hook-form';
const SocialLogin = () => {
    const [error,setError]=useState('')
    const {googleSignIn}=useAuth()
    const location =useLocation();
    const from = location?.state?.from?.pathname || '/' ;
    const navigate = useNavigate();
    const handleGoogleLogin=()=>{
        setError('')
        googleSignIn()
        .then(result=>{
            setError('')
            const user = result.user;
            console.log(user)
            const saveData ={email:user?.email,name:user?.displayName,photoUrl:user?.photoURL,role:'student'}
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(saveData)
            })
            .then(res=>res.json())
            .then(data=>{
               console.log(data)
               navigate(from, {replace:true})
            })
            
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div>
            {error && <p className='text-red-500 my-3'>{error}</p>}
            <button onClick={handleGoogleLogin} className='w-full flex items-center justify-center gap-2 rounded-tl-lg rounded-br-lg py-3 font-bold text-white bg-[#4285F4] hover:bg-[#4285F4]/90'><FaGoogle></FaGoogle><span>Sign in with Google</span></button>
        </div>
    );
};

export default SocialLogin;