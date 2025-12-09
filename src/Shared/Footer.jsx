import React from 'react';
import { TbBus } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';

const Footer = () => {
  return (
   <div className='bg-orange-300 py-4'>
     <footer className="footer sm:footer-horizontal   text-base-content p-10 mt-5  flex gap-3 justify-center">
  <nav className='flex-1'>
     <a className="btn btn-ghost text-xl"><span><TbBus />
    </span>Tiki<span className='font-bold text-orange-500'>Tali</span></a>
    <p className=''>Tikitali is a smart online platform for booking bus, train, and launch tickets across Bangladesh. It offers real-time schedules, secure payments, and instant confirmations. With an easy-to-use interface and reliable service, Tikitali makes travel planning faster, simpler, and more convenient for everyone.</p>
  </nav>
  <nav className='flex-1 md:ml-20'>
    <h6 className="footer-title">Quick Links</h6>
      
    <Link to={'/'} className="link link-hover">Home</Link>
    <Link to={'/all-ticket'} className="link link-hover">All Ticket</Link>
    <Link to={'/dashboard'} className="link link-hover">DashBoard</Link>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Contact Info</h6>
    <a className="link link-hover">Email : tikitali@gmail.com</a>
    <a className="link link-hover">Phone : 01976528624</a>
    <a className="link link-hover">FB : www.facebook/tikitali.com</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title text-center">Payment Method</h6>
    <div className='flex gap-5 justify-center items-center'>
      <img className='w-[50px] h-[50px]' src="https://cdn.freebiesupply.com/images/large/2x/stripe-logo-black-transparent.png" alt="" />
      <img className='w-[40px] h-[40px] rounded-md' src="https://yt3.googleusercontent.com/ytc/AIdro_kfgKlp22w3_zZbhHhYhc279q-rVbYRMy1xZ8gJMZRcsQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
      <img className='w-[40px] h-[40px] rounded-md' src="https://play-lh.googleusercontent.com/EQC9NtbtRvsNcU1r_5Dr8pWm3hPfN3OjGjzkOqzCEPDJvqBGKyfU9-a2ajNtcrIg1rs" alt="" />
    </div>
  </nav>
   
</footer>
  <h4 className='text-center'>© 2025 TikiTali. All rights reserved.</h4>
   </div>
  );
};

export default Footer;