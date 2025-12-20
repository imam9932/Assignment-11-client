import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10  h-[500px]'>
       <h1 className='text-4xl text-orange-500 font-bold'>Page Not Found</h1>
       <Link to={'/'} className='btn bg-orange-500 text-white mt-5'>Go Home</Link>
    </div>
  );
};

export default ErrorPage;