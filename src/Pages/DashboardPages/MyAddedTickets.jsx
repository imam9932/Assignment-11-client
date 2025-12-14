import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import Swal from 'sweetalert2';

const MyAddedTickets = () => {
  const {user:vendor}=useContext(AuthContext);
  const axiosSecure=UseAxiosSecure();
  const [myTickets,setMyTickets]=useState([])
  

  useEffect(()=>{
    if(!vendor?.email)
      return;
axiosSecure.get(`/my-added-tickets/${vendor.email}`)
    .then(res=>{
      console.log(res.data)
      setMyTickets(res.data)
    })
    .catch(err=>{
      console.log(err)
    })

  },[axiosSecure,vendor?.email])
  console.log(myTickets);


   const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
 axiosSecure.delete(`/my-added-tickets/${id}`)
     
     .then(data=>{
      console.log(data);
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    setMyTickets(myTickets.filter(ticket=>ticket._id!==id))
       
      })
     .catch(err=>{
      console.log(err)
      })


    
  }
})};
  return (
    <div className='mt-5'>
      <h1 className='text-center text-3xl text-orange-500 font-bold underline'>My Tickets : ( {myTickets.length} )</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
         {
          myTickets.map(myTicket=>
           <div key={myTicket._id} className="card bg-base-100 w-96 shadow-md">
  <figure className="px-10 pt-10">
    <img
      src= {myTicket.image}
      alt="bus"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className='font-bold text-orange-700'>Title : {myTicket.title}</h1>
    <div className='flex gap-2 text-orange-600'>
  <h5>From : {myTicket.fromLocation}   -</h5>
            <h5>To : {myTicket.toLocation}</h5>
    </div>
    <div className='flex gap-2 text-orange-500'>
  <p>Date : {myTicket.date}</p>
            <p>Time : {myTicket.time}</p>
    </div>
    <div className='flex gap-2 text-orange-400'>
 <p>Price : {myTicket.price} TK</p>
            <p>Quantity : {myTicket.ticketQuantity}</p>
    </div>
    <p className='text-orange-300'>Status : <span className='bg-blue-400 px-2 py-1 text-black rounded-md'>{myTicket.status}</span>
    </p>
    <div className='gap-5 flex mt-2'>
 {/* <button className='btn bg-orange-500 text-white hover:bg-red-500'>Update</button> */}

 {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn bg-orange-500 text-white hover:bg-red-500">Update</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle  " />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">{myTicket.title}</h3>
     <form      >
              <fieldset className="fieldset ">
                
          
       {/* title */}
         <label className="label">  Title</label>
         <input type="text"
           name='title' className="input text-black" placeholder="title" defaultValue={myTicket.title} />
       {/*  from location */}
         <label className="label"> From Location</label>
         <input type="text" name='fromLocation' className="input text-black" placeholder="from location" defaultValue={myTicket.fromLocation}   />
       {/* to location */}
         <label className="label">To Location</label>
         <input type="text" name='toLocation' className="input text-black" placeholder="to location" defaultValue={myTicket.toLocation}   />
       {/* date */}
         <label className="label">Date</label>
         <input type="number" name='date' className="input text-black" placeholder="date" defaultValue={myTicket.date}   />
       {/* day */}
         <label className="label">Day</label>
         <input type="number" name='day' className="input text-black" placeholder="day" defaultValue={myTicket.day}   />
       {/* price */}
         <label className="label">Price</label>
         <input type="number" name='price' className="input text-black" placeholder="price" defaultValue={myTicket.price} 
         
          
         />
       {/* quantity */}
         <label className="label">Quantity</label>
         <input type="number" name='quantity' className="input text-black" placeholder="quantity" defaultValue={myTicket.ticketQuantity} 
         
          
         />
       
       
          
       
         
       </fieldset>
           </form>
     
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn btn-neutral mt-2 bg-orange-500 border-white">Update</label>
    </div>
  </div>
</div>
            <button className='btn hover:bg-orange-500 text-white  bg-red-500' onClick={()=>handleDelete(myTicket._id)}>Delete</button>
    </div>
   
  </div>
</div>
          
        
        )
         }
        
      </div>
    </div>
  );
};

export default MyAddedTickets;