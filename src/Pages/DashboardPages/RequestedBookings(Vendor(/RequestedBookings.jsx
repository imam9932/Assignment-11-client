import React from 'react';
import UseAuth from '../../../Context/UseAuth';
import UseAxiosSecure from '../../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const RequestedBookings = () => {
     const {user}=UseAuth()
    const axiosSecure=UseAxiosSecure();
    const {data:bookingData=[],refetch }=useQuery({
        queryKey:['requestedBookings',user?.email

        ],
        enabled:!!user?.email,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/requestedBookings?vendorEmail=${user.email}`)
            return res.data
        }
        
    });

      const handleAcceptBookingsRequested=bookingData=>{
             const statusInfo={status:'accepted'};
                    axiosSecure.patch(`/requestedBookings/${bookingData._id}/status`,statusInfo)
                    .then(res=>{
                         if (res.data.modifiedCount) {
            
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: `${bookingData.title} is accepted`,
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
                                        text: "He can travel with you now",
                                        icon: "success"
                                    });
                                });
                            }
                    })
            
        }
        const handleRejectBookingsRequested=bookingData=>{
             const statusInfo={status:'rejected'};
                    axiosSecure.patch(`/requestedBookings/${bookingData._id}/status`,statusInfo)
                    .then(res=>{
                         if (res.data.modifiedCount) {
            
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: `${bookingData.title} is rejected`,
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
                                        text: "He can't traveled with you more.",
                                        icon: "success"
                                    });
                                });
                            }
                    })
            
        }
   
    console.log(bookingData);
    return (
        <div>
            <h1>Bookings Request : {bookingData.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Customer Name</th>
        <th>Title</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookingData.map((r,index)=>
 <tr key={r._id}>
        <th>{index+1}</th>
        <td> {r.name}</td>
        <td> {r.title}</td>
        <td> {r.quantity}</td>
        <td> {r.quantity*r.price} TK</td>
        <td> {
r.status==='pending'? (
    <>
    <button onClick={()=>handleAcceptBookingsRequested(r)} className='btn bg-orange-400 text-white'>Accept</button>
    </>
)
:
r.status==='accepted'?
(
    <><button onClick={()=>handleRejectBookingsRequested(r)} className='btn bg-red-700 text-white'>Reject</button></>
):null

}</td>
       
      </tr>
        )
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RequestedBookings;