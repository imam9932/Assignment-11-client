import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import UseAxiosSecure from '../../../Context/UseAxiosSecure';
 

const PaymentSuccess = () => {
    const [searchParams]=useSearchParams();
    const [paymentInfo,setPaymentInfo]=useState({})
    const sessionId=searchParams.get('session_id');
    const axiosSecure=UseAxiosSecure()
    console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
           axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
           .then(res=>{
            console.log(res.data);
            setPaymentInfo({
                transactionId:res.data.transactionId,
                 
            })
           })
        }
    },[sessionId,axiosSecure]
)
    return (
        <div className='flex flex-col items-center justify-center'>
             <h1 className='text-2xl font-bold   mt-10'>Payment Successful</h1> 


            <p ><span className='font-bold text-lg'>Your Transaction Id :</span> {paymentInfo.transactionId}</p>
            
            
            <Link to='/dashboard/bookings-tickets' className='btn btn-secondary mt-10'>Go to Your Bookings Tickets</Link> 
        </div>
    );
};

export default PaymentSuccess;