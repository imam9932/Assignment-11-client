import React from 'react';
import UseAuth from '../../../Context/UseAuth';
import UseAxiosSecure from '../../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TotalRevenue = () => {
     const {user}=UseAuth()
    const axiosSecure=UseAxiosSecure();
    const {data:payments=[] }=useQuery({
        queryKey:['payments',user?.email

        ],
        enabled:!!user?.email,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payments?vendorEmail=${user?.email}`)
            return res.data
        }
        
    });
    console.log("Logged user:", user);
console.log("User email:", user?.email);
    console.log(payments)
    return (
        <div>
           <h1>Revenue Overview  </h1> 
        </div>
    );
};

export default TotalRevenue;