import React from 'react';
import { FaRegUser, FaRegUserCircle } from 'react-icons/fa';
import { TbBrandBooking, TbBus } from 'react-icons/tb';
import { TiDocumentAdd, TiTicket } from 'react-icons/ti';
import { Link, Outlet } from 'react-router';
import { PiUserListFill } from "react-icons/pi";
import UseAuth from '../../Context/UseAuth';
import useRole from '../../Context/useRole';
import { MdManageAccounts } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";



 
const Dashboard = () => {
  
  const {role}=useRole()
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-linear-to-r from-orange-500 to-red-500 rounded-r-md sticky top-0">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
         
      </label>
      <h2 className="px-4 text-white font-bold text-2xl  ">Dashboard</h2>
    </nav>
    <Outlet></Outlet>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible mt-">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-linear-to-b from-orange-500 to-red-500 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">


        {/* List item */}
        <li className='md:mt-15'>
          {/* user profile */}
          <Link to={'user-profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="User profile">
            {/* vendor profile */}
            <FaRegUserCircle />

            <span className="is-drawer-close:hidden">User Profile</span>
          </Link>


          {/* customer bookings tickets */}
          {
            role==='customer' && <>
               <Link to={'bookings-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="My Tickets">
             
           <TbBrandBooking />



            <span className="is-drawer-close:hidden">Bookings Tickets</span>
          </Link>
            
            
            </>
          }

{
  role==='vendor'&&
         <>
           {/* add tickets */}
          <Link to={'add-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="Add Tickets">
             
            <TiDocumentAdd />


            <span className="is-drawer-close:hidden">Add Tickets</span>
          </Link>

           {/* my added tickets */}
          <Link to={'my-added-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="My added Tickets">
             
           <TiTicket />



            <span className="is-drawer-close:hidden">My Added Tickets</span>
          </Link></>

}
         


         {
          role==='admin' && <>
           {/*users page */}
          <Link to={'users'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="All users">
             
             {/* users icon */}
           <PiUserListFill />




            <span className="is-drawer-close:hidden">All Users</span>
          </Link>
          
          

            {/*manage ticket */}
          <Link to={'manage-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="Manage-Tickets">
             
             {/* manage icon */}
          <MdManageAccounts />
 <span className="is-drawer-close:hidden">Mange Tickets</span>
          </Link>


            {/*advertise tickets */}
          <Link to={'advertise-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="Advertise-Tickets">
             
             {/* advertise icon */}
          <RiAdvertisementFill />

 <span className="is-drawer-close:hidden">Advertise Tickets</span>
          </Link>
          </>
         }
        </li>

       
      </ul>
    </div>
  </div>
</div>
  );
};

export default Dashboard;