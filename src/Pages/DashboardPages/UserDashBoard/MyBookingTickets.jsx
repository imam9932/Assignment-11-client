import React from 'react';
import UseAxiosSecure from '../../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../Context/UseAuth';

const MyBookingTickets = () => {
    const {user}=UseAuth();
    const axiosSecure=UseAxiosSecure();
    const {data:bookingData=[] }=useQuery({
        queryKey:['bookings-tickets',user?.email

        ],
        enabled:!!user?.email,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/bookingsData?email=${user.email}`)
            return res.data
        }
        
    });
   
    console.log(bookingData);
    console.log(bookingData[0]);
    return (
        <div>
            <h1 className='text-center font-bold text-orange-400 text-2xl mt-5'>My Bookings Tickets : {bookingData.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>From</th>
        <th>To</th>
        <th>Arriving Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
  bookingData.map((b, index) => (
    <tr key={b._id}>
      <th>{index + 1}</th>
      <td>{b.title}</td>
      <td>{b.quantity}</td>
      <td>{b.quantity}*{b.price}</td>
      <td>{b.fromLocation}</td>
      <td>{b.toLocation}</td>
      <td>{b.arrivingDate}</td>
      <td>{b.status}</td>

    </tr>
  ))
}
    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBookingTickets;