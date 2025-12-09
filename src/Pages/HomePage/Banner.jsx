import React from 'react';
import image from '/train.jpg'
import { TbBus } from 'react-icons/tb';

const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='w-full h-[500px] bg-no-repeat bg-cover bg-center flex gap-5 justify-center items-center mt-5 rounded-md'>
      <div className='flex-1 px-20 text-orange-500'>
        <h1 className='font-bold text-5xl text-center '>WellCome to <br />  </h1>
        <h2 className='text-center font-bold text-5xl'> 
         Tiki Tali </h2>
        <h6 className='font-bold text-whit text-center mt-9'>We saves your time both while <br /> purchasing,the check-in <br /> and during the travel</h6>
      </div>
      <div className='flex-1'>

      </div>
    </div>
  );
};

export default Banner;