import React from 'react';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AdvertiseTickets = () => {
    const axiosSecure=UseAxiosSecure()

    const {data:tickets=[]}=useQuery({
        queryKey:['acceptedTickets'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/tickets/accepted');
            return res.data
        }
    });
   const handleAdvertiseTicket=ticket=>{
axiosSecure.patch(`tickets/${ticket._id}`)
.then(res=>{
    if(res.data.modifiedCount){
       Swal.fire({
        position: "top-end",
        icon: "success",
        title:'Ticket is ready for advertise'  ,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
   };
    return (
        <div>
            <h1 className='text-orange-400 font-bold text-center text-2xl mt-5'>Advertise Tickets : {tickets.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Vendor Email</th>
        <th>Title</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Arriving Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
            tickets.map(ticket=>
 <tr key={ticket._id}>
        <th>{ticket.vendor.email}</th>
        <th>{ticket.title}</th>
        <th>{ticket.fromLocation}</th>
        <th>{ticket.toLocation}</th>
        <th>{ticket.price}TK</th>
        <th>{ticket.ticketQuantity}</th>
        <th>{ticket.date}</th>
        <td><button className='btn text-orange-400' onClick={()=>handleAdvertiseTicket(ticket)}>Advertise</button></td>
        
      </tr>

            )
        }

      
    
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AdvertiseTickets;