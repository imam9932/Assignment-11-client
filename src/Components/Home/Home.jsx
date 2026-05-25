import React from 'react';
import Banner from '../../Pages/HomePage/Banner';
import { IoMdBus } from "react-icons/io";
import { FaPlaneDeparture, FaShip, FaTrain } from 'react-icons/fa';


const Home = () => {
  return (
    <div>
<Banner></Banner>

<div>
  <h3 className='text-center text-orange-400 font-bold text-2xl my-10'>Our Popular Routes</h3>
  <div className='grid grid-cols-3 gap-5'>
    <div className='rounded-lg md:p-10 p-9 bg-orange-400 text-white hover:bg-orange-300'>
      <h4 className='text-center font-bold'>Dhaka ------------ Sylhet</h4>
    </div>
    <div className='rounded-lg md:p-10 p-9 bg-orange-400 text-white hover:bg-orange-300'>
      <h4 className='text-center font-bold'>Dhaka ------------ Cox's Bazar</h4>
    </div>
    <div className='rounded-lg md:p-10 py-9 px-3 bg-orange-400 text-white hover:bg-orange-300'>
      <h4 className='text-center font-bold'>Dhaka ------------ Chattogram</h4>
    </div>

  </div>
</div>

<div>
  <h2 className='text-center text-orange-400 font-bold text-2xl my-10'>You Can Travel With Us By</h2>
  <div className='grid grid-cols-4 gap-5'>
      <div className='rounded-lg p-10 bg-orange-400 text-white hover:bg-orange-300'>
      <h4 className='text-center font-bold flex flex-col justify-center items-center'>
        <IoMdBus />

        Bus</h4>
    </div>
      <div className='rounded-lg p-10 bg-orange-400 text-white hover:bg-orange-300'>
      <h4 className='text-center font-bold flex flex-col justify-center items-center'>
        <FaTrain />

        Train</h4>
    </div>
      <div className='rounded-lg p-10 bg-orange-400 text-white hover:bg-orange-300'>
      <h4 className='text-center font-bold flex flex-col justify-center items-center'>
        <FaShip />

        Lonch</h4>
    </div>
      <div className='rounded-lg p-10 bg-orange-400 text-white hover:bg-orange-300'>
      <h4 className='text-center font-bold flex flex-col justify-center items-center'>
        <FaPlaneDeparture />

        Air</h4>
    </div>

  </div>
</div>
    </div>

    
  );
};

export default Home;