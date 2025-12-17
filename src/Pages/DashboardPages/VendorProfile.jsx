import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import useRole from '../../Context/useRole';

const VendorProfile = () => {
  const { user } = useContext(AuthContext);
  const {role,isRoleLoading}=useRole()
  console.log(role,isRoleLoading);
  return (
    <div className="card bg-base-300 w-96 shadow-md space-y-5 flex flex-col items-center justify-center mx-auto my-19">
      <h1 className='text-center font-bold text-2xl text-orange-500 mt-3'>Vendor profile  </h1>
      <figure>
        <img className='rounded-full' src={user.photoURL
        } alt="" />
      </figure>
      <div className="card-body">
        <h2 className='font-bold text-xl underline'>Name :{user.displayName}</h2>
        <p>Email : {user.email}</p>
        <p> {role}  </p>

      </div>
    </div>
  );
};

export default VendorProfile;