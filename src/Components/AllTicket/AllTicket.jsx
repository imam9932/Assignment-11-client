import React, { useState } from 'react';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

const AllTicket = () => {
  const axiosSecure=UseAxiosSecure()
  const [searchText,setSearchText]=useState('');
  const [sortPrice, setSortPrice] = useState('');

  
   


    const {data:tickets=[],isLoading}=useQuery({
        queryKey:['tickets',searchText,sortPrice],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/tickets/accepted?searchText=${searchText}&sortPrice=${sortPrice}`);
            return res.data
        }
    });
    if(isLoading) return <p>Loading...</p>
    console.log(tickets)

  return (
     <div>
            <h1 className='text-center text-2xl text-orange-400 font-bold mt-10'>All Tickets For You</h1>
            <div className='flex justify-between items-center'>
               <div>
               <p className='mb-2 text-orange-400 font-bold'>Search Location: {searchText}</p>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={(e)=>setSearchText(e.target.value)} type="search" className="grow" placeholder="Search" />
                
            </label>
             </div>
               {/* 💰 Sort Dropdown */}
      <div className="md:mt-4 mt-8">
        <select
          className="select select-bordered text-orange-400 font-bold"
          onChange={(e) => setSortPrice(e.target.value)}
        >
          <option  value="">Sort By Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

            </div>

             <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
         {
          tickets.map(myTicket=>
           <div key={myTicket._id} className="card bg-base-100 w-96 shadow-md">
  <figure className="px-10 pt-10">
    <img
      src= {myTicket.image}
      alt="bus"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className='font-bold text-orange-700'>Title : {myTicket.title}</h1>
     <div className='text-orange-400'>
        <p>Price : {myTicket.price} TK</p>
      <p>Available Quantity : {myTicket.ticketQuantity}</p>
      <p>Transport Type : {myTicket.transportType}</p>
         <div className='flex gap-2 text-orange-400'>
                        <h5>From : {myTicket.fromLocation}   -</h5>
                        <h5>To : {myTicket.toLocation}</h5>
                    </div>
     </div>
    
    <div className='flex gap-2 text-orange-400'>

           
    </div>
   
 <Link to={`/ticket-details/${myTicket._id}`} className='btn bg-orange-500 text-white'>About Ticket</Link> 
   
  </div>
</div>
          
        
        )
         }
        
      </div>
        </div>
  );
};

export default AllTicket;