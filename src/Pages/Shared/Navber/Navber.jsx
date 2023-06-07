// import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../../Provider/AuthProvider';
import logo from '../../../assets/images/logo3.png'
import TopNavber from './TopNavber';
import useAuth from '../../../Hooks/useAuth';

const Navber = () => {
    const {user,logOut}=useAuth()
    console.log(user)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }
    const navItem = <>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "text-xl  text-pink-600" : "text-black text-xl"}>Home</NavLink></li>
            <li><NavLink to="/instructors" className={({ isActive }) =>isActive ? "text-xl  text-pink-600" : "text-black text-xl"}>Instructors</NavLink></li>
            <li><NavLink to="/classes" className={({ isActive }) =>isActive ? "text-xl  text-pink-600 " : "text-black text-xl"}>Classes</NavLink></li>
            <li><NavLink to="/dashboard " className={({ isActive }) =>isActive ? "text-xl  text-pink-600" : "text-black text-xl"}>Dashboard </NavLink></li>
            
    </>
    return (
        <>
        <TopNavber></TopNavber>
        <div className="flex justify-between items-center bg-lime-500 shadow-md lg:mb-1">
    <div className="navbar">
      <div className=" flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {navItem}
          </ul>
        </div>
        <div className=''>
        <img className="w-40 h-full object-center" src={logo} alt="" />
        
        </div>
      </div>
      <div>
      <div className=" hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 font-semibold text-white">
          {navItem}
        </ul>
      </div>
      <div className=" font-semibold ml-5">
        {
            user ? <div className="flex items-center gap-2">
            <div  className="btn btn-ghost btn-circle avatar">
              <div className="w-20 rounded-full">
                <img className="w-full object-center"src={user.photoURL} />
              </div>
            </div>
            <button onClick={handleLogOut} className="primary-btn">Log Out</button>
          </div>:<div>
            <Link to='/login'><button className="primary-btn">Log In</button></Link>
            </div>
        }
          
      </div>
      </div>
    </div>
        </div>
        
        </>
    );
};

export default Navber;