
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo3.png'
import useAuth from '../../../Hooks/useAuth';
import { FaMoon,FaSun } from "react-icons/fa";
import useRole from '../../../Hooks/useRole';

const Navber = () => {
    const {user,logOut,dark,setDark}=useAuth()
    const [role]=useRole()
    console.log(role)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }
    const navItem = <>
            <li><NavLink to="/" className={({ isActive }) =>isActive ? "text-xl  text-[#eb1551]" : "text-white text-xl"}>Home</NavLink></li>
            <li><NavLink to="/instructors" className={({ isActive }) =>isActive ? "text-xl  text-[#eb1551]" : "text-white  text-xl"}>Instructors</NavLink></li>
            <li><NavLink to="/classes" className={({ isActive }) =>isActive ? "text-xl  text-[#eb1551]" : "text-white  text-xl"}>Classes</NavLink></li>
            {
              role==='student' && <li><NavLink to="/dashboard/myclasses" className={({ isActive }) =>isActive ? "text-xl  text-[#eb1551]" : "text-white  text-xl"}>Dashboard </NavLink></li>
            }
            {
              role==='instructor' && <li><NavLink to="/dashboard/addclass" className={({ isActive }) =>isActive ? "text-xl  text-[#eb1551]" : "text-white  text-xl"}>Dashboard </NavLink></li>
            }
            {
              role==='admin' && <li><NavLink to="/dashboard/manageclasses" className={({ isActive }) =>isActive ? "text-xl  text-[#eb1551]" : "text-white  text-xl"}>Dashboard </NavLink></li>
            }
            
    </>
    return (
        <>
        <div className={"pr-4 lg:pr-0 w-[83%] lg:w-[100%] fixed z-10 overflow-hidden dark:bg-black" + (dark?"":'bg-black')}>
        <div className="flex justify-between items-center shadow-md lg:mb-1 bg-black bg-opacity-40">
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
        <img className="lg:w-40 h-full object-center" src={logo} alt="" />
        
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
              <div className="w-10 lg:w-20 rounded-full">
                <img className="w-full object-center"src={user.photoURL} />
              </div>
            </div>
            <button onClick={handleLogOut} className="primary-btn">Log Out</button>
          </div>:<div>
            <Link to='/login'><button className="primary-btn">Log In</button></Link>
            </div>
        }
        
          
      </div>
      {
        dark?<button><FaMoon onClick={()=>setDark(false)} className='mx-1 text-xl lg:mx-2 lg:text-3xl'></FaMoon></button>:<button onClick={()=>setDark(true)} className='mx-1 text-xl lg:mx-2 lg:text-3xl text-white'><FaSun></FaSun></button>
      }
      </div>
    </div>
        </div>
        </div>
        
        </>
    );
};

export default Navber;