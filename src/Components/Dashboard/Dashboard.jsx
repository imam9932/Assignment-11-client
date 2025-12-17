import React from 'react';
import { FaRegUser, FaRegUserCircle } from 'react-icons/fa';
import { TbBus } from 'react-icons/tb';
import { TiDocumentAdd, TiTicket } from 'react-icons/ti';
import { Link, Outlet } from 'react-router';
 
const Dashboard = () => {
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


          {/* add tickets */}
          <Link to={'add-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="Add Tickets">
             
            <TiDocumentAdd />


            <span className="is-drawer-close:hidden">Add Tickets</span>
          </Link>

          {/* my added tickets */}
          <Link to={'my-added-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="My added Tickets">
             
           <TiTicket />



            <span className="is-drawer-close:hidden">My Added Tickets</span>
          </Link>
        </li>

        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            {/* Settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Dashboard;