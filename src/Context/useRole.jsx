import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// import { useQuery } from '@tanstack/react-query'

const useRole = () => {
  const {user,loading}=useContext(AuthContext);
  const axiosSecure=UseAxiosSecure();

  const {data:role,isLoading:isRoleLoading}=useQuery({
    enabled: !loading && !!user?.email,
queryKey:['role',user?.email],
queryFn:async()=>{
  const result=await axiosSecure.get(`user/role`)
  console.log(result);
  return result.data.role
},
  })
  return {role,isRoleLoading};
};

export default useRole;