import React from 'react';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const TicketsDetails = () => {
    const axiosSecure = UseAxiosSecure()
    const { id } = useParams();
    console.log(id);

    const { data: ticket = [] } = useQuery({
        queryKey: ['ticket', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/ticket/${id}`);
            return res.data
        }
    });
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
                        <p>Quantity : {ticket.ticketQuantity}</p>
                    </div>
                   <button className='btn bg-amber-500 text-white mt-2'>Booked Now</button>
                   
                </div>
            </div>
        </div>
    );
};

export default TicketsDetails;