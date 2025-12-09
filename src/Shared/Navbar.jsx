import React, { useContext } from 'react';
import { TbBus } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,loading,signOutFunc,setUser}=useContext(AuthContext);

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
  const links=<div className='flex gap-5'>
    <NavLink className='text-orange-500 font-bold' to={'/'}>Home</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/all-ticket'}>All Ticket</NavLink>
    <NavLink className='text-orange-500 font-bold' to={'/dashboard'}>Dashboard</NavLink>
  </div>
  return (
  <div className="navbar bg-base-100 shadow-sm mt-5 sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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

{/* conditional */}
{loading ? (
        //  <FaClock/>
        <p>loading</p>

        ) : user ? (
           <div className="dropdown dropdown-end px-5">
  <div tabIndex={0} role="button" className="border-none"><img src={user?.photoURL ? user.photoURL : 'https://via.placeholder.com/88'} className='h-10 w-10 rounded-full mx-auto' alt="user avatar" /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-purple-700 rounded-box z-1 w-52 p-2 shadow-sm">

 

    <li><a>Name : {user?.displayName}</a></li>
     <button onClick={handleSignOut}   className='bg-violet-700 px-2 py-1 mt-1 hover:bg-amber-700 rounded-lg'>Log-out</button>
  </ul>
</div>
        ) : (
           <Link to={'/register'} className="btn bg-red-500 text-white">Register</Link>
        )}

   
  </div>


     
   
</div>
  );
};

export default Navbar;