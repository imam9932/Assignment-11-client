import axios from "axios";

const axiosSecure=axios.create({
  baseURL:'http://localhost:3000'
})

import React, { useContext, useEffect } from 'react';
import { AuthContext } from "./AuthContext";

const UseAxiosSecure = () => {
  const {user }=useContext(AuthContext)
  useEffect(()=>{
    // intercept request
    const reqInterceptor=axiosSecure.interceptors.request.use(config=>{
      config.headers.Authorization=`Bearer ${user?.accessToken}`
      return config
    })

    // interceptor response
    const resInterceptor=axiosSecure.interceptors.response.use((response)=>{
      return response;
    },(error)=>{
      console.log(error);

const statusCode=error.status;
if(statusCode===401 || statusCode===403){
// signOutUser()
// .then(res=>{
//   console.log(res)
//   navigate('/login')

// })
}

      return Promise.reject(error)
    })

    return ()=>{
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    }
  },[user])
  return axiosSecure;
};

export default UseAxiosSecure;