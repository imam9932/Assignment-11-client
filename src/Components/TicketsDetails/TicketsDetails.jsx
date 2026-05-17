import React, { useEffect } from 'react';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAuth from '../../Context/UseAuth';

const TicketsDetails = () => {
  const {user}=UseAuth()
    const axiosSecure = UseAxiosSecure()
    const { id } = useParams();
    const navigate=useNavigate();
     

    const { data: ticket = {} } = useQuery({
        queryKey: ['ticket', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/ticket/${id}`);
            return res.data
        }
    });

      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

const vendor=ticket?.vendor;
const vendorEmail=vendor?.email;
 
    useEffect(() => {
  if (ticket) {
    reset({
      title: ticket.title,
      fromLocation: ticket.fromLocation,
      toLocation: ticket.toLocation,
      price: ticket.price,
      arrivingDate: ticket.date,
      name:user.displayName,
      email:user.email,
      vendorEmail,

    });
  }
}, [ticket, reset,user,vendorEmail]);

    const onSubmit=async data=>{
        const {name,email,title,fromLocation,toLocation,price,quantity,arrivingDate,vendorEmail}=data;

        const bookingData={
            ticketId:ticket._id,
            name,
            email,
            title,
            fromLocation,
            toLocation,
            price,
            quantity,
            arrivingDate,
            status:'pending',
            vendorEmail,
            paymentStatus:'unpaid',
        };
        console.log(bookingData)
         axiosSecure.post('/bookingData',bookingData)
          .then(res=>{
            console.log('after saving booking data',res.data);
          
               Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your request has been submitted",
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/advertised-tickets')
            
    }
    
        )

        }
    console.log(ticket);
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <div key={ticket._id} className="card bg-base-100 w-96 shadow-md">
                <figure className="px-10 pt-10">
                    <img
                        src={ticket.image}
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
                        <p>Available Quantity : {ticket.ticketQuantity}</p>
                    </div>
                    <button ></button>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button disabled={ticket.quantity===0} className='btn bg-amber-500 text-white mt-2' onClick={() => document.getElementById('my_modal_1').showModal()}> {ticket.quantity===0?'Sold out':'Book Now'}</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div >
                                    <h1 className='text-center text-orange-400 font-bold text-2xl'>Please Submit Your Information</h1>
 {/* title field */}
                                    <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            Ticket Title
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='title'
                                            type='text'
                                            // defaultValue={ticket.title}

                                            {...register('title', {
                                                required: 'title is required'
                                            })}
                                        />
                                        {
                                            errors.title && <p className='text-red-500  '>title is Required</p>
                                        }
                                    </div>

                                    {/* name field */}
                                    <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            Your Name
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='name'
                                            type='text'
                                            placeholder='name'

                                            {...register('name', {
                                                required: 'name is required'
                                            })}
                                        />
                                        {
                                            errors.name && <p className='text-red-500  '>Name is Required</p>
                                        }
                                    </div>
                                    {/* email */}
                                      <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            Your Email
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='email'
                                            type='email'
                                            placeholder='email'

                                            {...register('email', {
                                                required: 'email is required'
                                            })}
                                        />
                                        {
                                            errors.email && <p className='text-red-500  '>Email is Required</p>
                                        }
                                    </div>
                                    {/* from location */}
                                      <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                           From Location
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='fromLocation'
                                            type='text'
                                        //    defaultValue={ticket.fromLocation}

                                            {...register('fromLocation', {
                                                required: 'fromLocation is required'
                                            })}
                                        />
                                        {
                                            errors.fromLocation && <p className='text-red-500  '>fromLocation is Required</p>
                                        }
                                    </div>
                                    {/* to location */}
                                      <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            To Location
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='toLocation'
                                            type='text'
                                            // defaultValue={ticket.toLocation}

                                            {...register('toLocation', {
                                                required: 'toLocation is required'
                                            })}
                                        />
                                        {
                                            errors.toLocation && <p className='text-red-500  '>toLocation is Required</p>
                                        }
                                    </div>
                                    {/* price */}
                                      <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            Price
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='price'
                                            type='number'
                                        //    defaultValue={ticket.price}

                                            {...register('price', {
                                                required: 'price is required'
                                            })}
                                        />
                                        {
                                            errors.price && <p className='text-red-500  '>price is Required</p>
                                        }
                                    </div>


                                    {/* quantity */}

                                      <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            Ticket Quantity
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='quantity'
                                            type='number'
                                            placeholder='quantity'

                                            {...register('quantity', {
                                                required: 'quantity is required'
                                            })}
                                        />
                                        {
                                            errors.quantity && <p className='text-red-500  '>Quantity is Required</p>
                                        }
                                    </div>
                                    {/* date */}

                                      <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            Arriving Date
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='arrivingDate'
                                            type='date'
                                        //    defaultValue={ticket.date}

                                            {...register('arrivingDate', {
                                                required: 'arrivingDate is required'
                                            })}
                                        />
                                        {
                                            errors.arrivingDate && <p className='text-red-500  '>arriving Date is Required</p>
                                        }
                                    </div>


                                    {/* vendor */}

                                      <div className='space-y-1 text-sm'>
                                        <label htmlFor='title' className='block text-orange-400 font-bold mt-2 text-lg'>
                                            Vendor
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                                            id='vendorEmail'
                                            type='email'
                                        //    defaultValue={ticket.date}

                                            {...register('vendorEmail', {
                                                required: 'vendorEmail is required'
                                            })}
                                        />
                                        {
                                            errors.vendorEmail && <p className='text-red-500  '>vendorEmail is Required</p>
                                        }
                                    </div>
                                </div>

                                <div className="modal-action">
      <button
        className="btn bg-amber-400 text-white"
        onClick={() => document.getElementById('my_modal_1').close()}
      >
        Submit
      </button>
    </div>



                            </form>
                           
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default TicketsDetails;