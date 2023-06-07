import React from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <button  className='w-full flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-[#4285F4] hover:bg-[#4285F4]/90'><FaGoogle></FaGoogle><span>Sign in with Google</span></button>
            <button className='w-full mt-3 flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-gray-700 hover:bg-gray-800'><FaGithub></FaGithub>Sign in with Github</button>
        </div>
    );
};

export default SocialLogin;