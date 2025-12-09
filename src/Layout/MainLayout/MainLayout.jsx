import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Shared/Footer';

const MainLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;