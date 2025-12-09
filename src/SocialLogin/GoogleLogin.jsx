import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const GoogleLogin = () => {

  const {loginWithGoogle,setUser,setLoading,user}=useContext(AuthContext);

  loginWithGoogle()
  .then(res=>{
    console.log(res.user)
    toast.success('Google login successful')
    setUser(user)
    setLoading(false)
  })
  .catch(err=>{
    console.log(err.message)
    toast.error(err.message)
  })
  return (
    <div>
      
    </div>
  );
};

export default GoogleLogin;