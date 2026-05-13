import React from 'react';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

const AdvertisedTickets = () => {
    const axiosSecure=UseAxiosSecure();
    const {data:tickets=[]}=useQuery({
        queryKey:['isAdvertise'],
        queryFn:async()=>{
const res=await axiosSecure.get('/tickets/isAdvertise');
return res.data;

        }
        
    });
    console.log(tickets);
    return (
        <div>
            <h1 className='text-center text-2xl text-orange-400 font-bold mt-5'>Premium Tickets For You</h1>


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
      <p>Quantity : {myTicket.ticketQuantity}</p>
      <p>Transport Type : {myTicket.transportType}</p>
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

export default AdvertisedTickets;