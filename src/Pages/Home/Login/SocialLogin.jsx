
import React from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {googleSignIn,githubSignIn}=useAuth()
    const location =useLocation();
    const from = location.state?.from?.pathname||'/';
    const navigate = useNavigate();
    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGithubLogin =()=>{
        githubSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='w-full flex items-center justify-center gap-2 rounded-tl-lg rounded-br-lg py-3 font-bold text-white bg-[#4285F4] hover:bg-[#4285F4]/90'><FaGoogle></FaGoogle><span>Sign in with Google</span></button>
            <button onClick={handleGithubLogin} className='w-full mt-3 flex items-center justify-center gap-2 rounded-tl-lg rounded-br-lg py-3 font-bold text-white bg-gray-700 hover:bg-gray-800'><FaGithub></FaGithub>Sign in with Github</button>
        </div>
    );
};

export default SocialLogin;