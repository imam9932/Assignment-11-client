import React from 'react';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllRoutes = () => {
      const axiosSecure=UseAxiosSecure()

    const {data:tickets=[]}=useQuery({
        queryKey:['allRoutes'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/tickets/accepted');
            return res.data
        }
    });
    console.log(tickets)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Arriving Date</th>
      </tr>
    </thead>
    <tbody>
       {
        tickets.map((ticket,index)=>  <tr key={ticket._id}>
        <th>{index+1}</th>
        <td>{ticket.title}</td>
        <td>{ticket.fromLocation}</td>
        <td>{ticket.toLocation}</td>
        <td>{ticket.price} TK</td>
        <td>{ticket.ticketQuantity}</td>
        <td>{ticket.date}</td>
         
      </tr> )
       }
    
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllRoutes;