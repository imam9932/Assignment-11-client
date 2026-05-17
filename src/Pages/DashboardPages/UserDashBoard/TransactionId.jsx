import React from 'react';
import UseAuth from '../../../Context/UseAuth';
import UseAxiosSecure from '../../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TransactionId = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?customerEmail=${user.email}`)
            return res.data
        }
    })
    console.log(payments);
    return (
        <div>
            <h1 className='text-center font-bold text-2xl text-orange-400 mt-10'>All Of My Transactions : {payments.length}</h1>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Transactions Id</th>
                            <th>Amount</th>
                            <th>Title</th>
                            <th>Payment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.
                                    transactionId
                                }</td>
                                <td>{payment.amount} Tk</td>
                                <td>{payment.ticketName}</td>
                                <td>{payment.paidAt}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionId;