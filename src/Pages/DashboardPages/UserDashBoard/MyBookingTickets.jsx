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
            const res=await axiosSecure.get(`/bookingsData?email=${user?.email}`)
            return res.data
        }
        
    });
     const handlePayment=async(b)=>{
    const paymentInfo={
     total_price:b.quantity*b.price,
      bookingId:b._id,
      customerEmail:b.email,
      ticketName:b.title,
      vendorEmail:b.vendorEmail,

      
    }
     
    const res=await axiosSecure.post('/payment-checkout-session',paymentInfo);

   window.location.href=(res.data.url);
   console.log(b)
   console.log('vendor email',b.vendorEmail)

  }
   
     
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
        <th>Payment Status</th>
      </tr>
    </thead>
    <tbody>
      {
  bookingData.map((b, index) => (
    <tr key={b._id}>
      <th>{index + 1}</th>
      <td>{b.title}</td>
      <td>{b.quantity}</td>
      <td>{b.quantity*b.price} TK</td>
      <td>{b.fromLocation}</td>
      <td>{b.toLocation}</td>
      <td>{b.arrivingDate}</td>
      <td>
        {
         
          b.status==='accepted'?(<>
          <button  className='btn bg-orange-400  text-white'>Accepted</button>
          </>):
          b.status==='pending'? (<>
          <button className='btn bg-orange-400 text-white'>Pending</button>
          </>):
          null
        }
      </td>
      <td>
        {
           b.paymentStatus==='paid'?(<><button className='btn bg-red-500 text-white'>Paid</button></>):(<>
           <button onClick={()=>handlePayment(b)} className='btn bg-blue-700 text-white'>please pay</button></>)
        }
      </td>

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