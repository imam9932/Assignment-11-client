import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import useRole from '../../Context/useRole';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const {role,isRoleLoading}=useRole()
  console.log(role,isRoleLoading);
  return (
    <div className="card bg-base-300 w-96 shadow-md space-y-5 flex flex-col items-center justify-center mx-auto my-19">
      <h1 className='text-center font-bold text-2xl text-orange-500 mt-3'>User profile  </h1>
      <figure>
        <img className='rounded-full' src={user?.photoURL
        } alt="" />
      </figure>
      <h3 className='text-center bg-orange-500 text-white  px-2 py-1 rounded-md'>{role}</h3>
      <div className="card-body">
        <h2 className='font-bold text-xl underline'>Name :{user?.name}</h2>
        <p>Email : {user?.email}</p>
         

      </div>
    </div>
  );
};

export default UserProfile;