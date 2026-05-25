import React, { useContext, useEffect, useState } from 'react';
import { TbBus } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,loading,signOutFunc,setUser}=useContext(AuthContext);
      const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }


  const handleSignOut=()=>{
    signOutFunc()
    .then(res=>{
          console.log(res);
          toast.success('Log-out successfully')
          setUser(null)
          
        })
        .catch(err=>{
          console.log(err.message);
          toast.error(err.message)
        })
  }
  const links=<div className='md:flex md:flex-row flex flex-col lg:flex lg:flex-row gap-5'>
    <NavLink className='text-orange-500 font-bold' to={'/'}>Home</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/advertised-tickets'}>Advertise Tickets</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/latest-tickets'}>Latest Tickets</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/all-ticket'}>All Tickets</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/all-routes'}>Routes & Tickets</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/dashboard/user-profile'}>Dashboard</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/why-choose-us'}>Why Choose Us</NavLink>
  </div>
  return (
  <div className="navbar bg-base-100 shadow-sm mt-5 sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu flex flex-col menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
{links}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl"><span><TbBus />
</span>Tiki<span className='font-bold text-orange-500'>Tali</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}  
    </ul>
  </div>
  <div className="navbar-end">
       <input onChange={(e)=>handleTheme(e.target.checked)}
            
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle mr-5"/>


{/* conditional */}
{loading ? (
        //  <FaClock/>
        <p>loading</p>

        ) : user ? (
           <div className="dropdown dropdown-end px-5">
  <div tabIndex={0} role="button" className="border-none"><img src={user?.photoURL ? user.photoURL : 'https://via.placeholder.com/88'} className='h-10 w-10 rounded-full mx-auto' alt="user avatar" /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-purple-700 text-white rounded-box z-1 w-52 p-2 shadow-sm">

 

    <li><a>Name : {user?.displayName}</a></li>
     <button onClick={handleSignOut}   className='bg-violet-700 px-2 py-1 mt-1 hover:bg-amber-700 rounded-lg'>Log-out</button>
  </ul>
</div>
        ) : (
           <Link to={'/login'} className="btn bg-red-500 text-white">Login</Link>
        )}

   
  </div>


     
   
</div>
  );
};

export default Navbar;