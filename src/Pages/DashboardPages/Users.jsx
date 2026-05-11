import React from 'react';
import UseAuth from '../../Context/UseAuth';
import UseAxiosSecure from '../../Context/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { LiaUserGraduateSolid} from "react-icons/lia";
import { SiFlathub } from "react-icons/si";
import Swal from 'sweetalert2';



const Users = () => {
    const {user}=UseAuth();
    const axiosSecure=UseAxiosSecure()

    const {refetch,data:users=[]}=useQuery({
        queryKey:['users',user],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users',user);
            return res.data
        }
    });
   

    const handleToMakeAdmin=user=>{
        const roleInfo={role:'admin'};
        axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
        .then(res=>{
             if (res.data.modifiedCount) {

                    Swal.fire({
                        title: "Are you sure?",
                        text: `${user.displayName} make as an Admin`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, make it!"
                    }).then((result) => {
                        if (result.isConfirmed)
                            refetch()
                        Swal.fire({
                            title: `${user.displayName} is Admin now`,
                            text: "He can controls your website.",
                            icon: "success"
                        });
                    });
                }
        })
    };


      const handleRemoveAdmin = user => {
        const roleInfo = { role: 'customer' };
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {

                    Swal.fire({
                        title: "Are you sure?",
                        text: `${user.displayName} remove from Admin`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, make it!"
                    }).then((result) => {
                        if (result.isConfirmed)
                            refetch()
                        Swal.fire({
                            title: `${user.displayName} is user now`,
                            text: "He can't controls your website.",
                            icon: "success"
                        });
                    });
                }
            })

    };

    const handleMakeVendor=(user)=>{
         const roleInfo={role:'vendor'};
        axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
        .then(res=>{
             if (res.data.modifiedCount) {

                    Swal.fire({
                        title: "Are you sure?",
                        text: `${user.displayName} make as a Vendor`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, make it!"
                    }).then((result) => {
                        if (result.isConfirmed)
                            refetch()
                        Swal.fire({
                            title: `${user.displayName} is Vendor now`,
                            text: "He can published ticket now.",
                            icon: "success"
                        });
                    });
                }
        })

    };

    const handleMakeFraud=()=>{
    
    }
    return (
        <div>
            <h1 className='text-center font-bold text-2xl mt-5'>All Of Our Users : {users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
       {
        users.map((user,index)=>  <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
         
        <td className='flex gap-2'> 

          {
  user.role === 'admin' ? (
    <button
      onClick={() => handleRemoveAdmin(user)}
      className="btn"
    >
      Remove Admin
    </button>

  ) : user.role === 'vendor' ? (

    <div className="flex gap-5">
      <button
        onClick={() => handleToMakeAdmin(user)}
        className="btn"
      >
        Make Admin
      </button>

      <button
        onClick={() => handleMakeFraud(user)}
        className="btn"
      >
      Mark as Fraud
      </button>
    </div>

  ) : (

    <div className="flex gap-5">
      <button
        onClick={() => handleToMakeAdmin(user)}
        className="btn"
      >
        Make Admin
      </button>

      <button
        onClick={() => handleMakeVendor(user)}
        className="btn"
      >
        Make Vendor
      </button>
    </div>
  )
}
          
           
        </td>
      </tr>)
       }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;