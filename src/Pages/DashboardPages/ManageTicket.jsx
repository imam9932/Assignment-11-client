import React from 'react';
import UseAuth from '../../Context/UseAuth';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageTicket = () => {
    
    const axiosSecure=UseAxiosSecure()

    const {refetch,data:tickets=[]}=useQuery({
        queryKey:['tickets'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/tickets');
            return res.data
        }
    });

    const handleAcceptTickets=tickets=>{
         const statusInfo={status:'accepted'};
                axiosSecure.patch(`/tickets/${tickets._id}/status`,statusInfo)
                .then(res=>{
                     if (res.data.modifiedCount) {
        
                            Swal.fire({
                                title: "Are you sure?",
                                text: `${tickets.title} is accepted`,
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, make it!"
                            }).then((result) => {
                                if (result.isConfirmed)
                                    refetch()
                                Swal.fire({
                                    title: `Accepted`,
                                    text: "He can published ticket now.",
                                    icon: "success"
                                });
                            });
                        }
                })
        
    }
    const handleRejectTickets=tickets=>{
         const statusInfo={status:'rejected'};
                axiosSecure.patch(`/tickets/${tickets._id}/status`,statusInfo)
                .then(res=>{
                     if (res.data.modifiedCount) {
        
                            Swal.fire({
                                title: "Are you sure?",
                                text: `${tickets.title} is rejected`,
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, make it!"
                            }).then((result) => {
                                if (result.isConfirmed)
                                    refetch()
                                Swal.fire({
                                    title: `Accepted`,
                                    text: "He can't published ticket more.",
                                    icon: "success"
                                });
                            });
                        }
                })
        
    }
    return (
        <div>
                       <h1 className='text-center font-bold text-2xl mt-5'>All Tickets : {tickets.length}</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
         {
          tickets.map(ticket=>
           <div key={ticket._id} className="card bg-base-100 w-96 shadow-md">
  <figure className="px-10 pt-10">
    <img
      src= {ticket.image}
      alt="bus"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className='font-bold text-orange-700'>Title : {ticket.title}</h1>
    <div className='flex gap-2 text-orange-600'>
  <h5>From : {ticket.fromLocation}   -</h5>
            <h5>To : {ticket.toLocation}</h5>
    </div>
    <div className='flex gap-2 text-orange-500'>
  <p>Date : {ticket.date}</p>
            <p>Time : {ticket.time}</p>
    </div>
    <div className='flex gap-2 text-orange-400'>
 <p>Price : {ticket.price} TK</p>
            <p>Quantity : {ticket.ticketQuantity}</p>
          
    </div>
      <p className='text-orange-500'>Status : {ticket.status}</p>
    <p className='text-orange-400'>Vendor Name:-<span className='text-orange-400 px-2 py-1 rounded-md'>{ticket.vendor.name}</span>
    </p>



    <p className='text-orange-400'>Vendor Email:-<span className='text-orange-400 px-2 py-1 rounded-md'>{ticket.vendor.email}</span>
    </p>
    <div className='gap-5 flex mt-2'>
  
{
    ticket.status==='accepted'?( 
    <>
     <button onClick={()=>handleRejectTickets(ticket)} className='btn hover:bg-orange-500 text-white  bg-red-500'  >Reject</button></>)
     : ticket.status==='pending'?( <>  <button  htmlFor="my_modal_6" className="btn bg-orange-500 text-white hover:bg-red-500" onClick={()=>handleAcceptTickets(ticket)}>Accept</button> 
     
      <button onClick={()=>handleRejectTickets(ticket)} className='btn hover:bg-orange-500 text-white  bg-red-500'  >Reject</button>
      </>
      ):
      status==='rejected'? (
        <><button  htmlFor="my_modal_6" className="btn bg-orange-500 text-white hover:bg-red-500" onClick={()=>handleAcceptTickets(ticket)}>Accept</button> 
     </>
      ):null
    
}

 
          
    </div>
   
  </div>
</div>
          
        
        )
         }
        
      </div>

        </div>
    );
}

export default ManageTicket;