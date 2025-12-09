import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TbFidgetSpinner } from 'react-icons/tb';
import { imageUpload } from '../../Utility';
import { toast } from 'react-toastify';

const Register = () => {
   const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const handleSubmitData=async(data)=>{
     const {name,image,email,password}=data;
     console.log(name);
     const imageFile=image[0];
     console.log(imageFile);
     const formData=new FormData();
     formData.append('image',imageFile);
     console.log(formData);

     try{
const {data}=await axios.post(`https://api.imgbb.com/1/upload?key=a52fc5e71b64ac0b6b528963b985be2a`,formData)

const imageURL=await imageUpload(imageFile)


     }
     catch(error){
      console.log(error)
      toast.error(error.message);

     }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-orange-500">Register</h1>
      <p className='text-end mt-2 text-sm text-orange-500'>For our services</p>
       
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={()=>handleSubmit(handleSubmitData)} >
         <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="name"
          {...register('name',{required:'Name is required'})} />
          {
            errors.name && <p className='text-red-500'>name is required</p> 
          }
          {/* image */}
          <label className="label">Image</label>
          <input type="file" className="file-input file-input-ghost" placeholder=" " {...register('image',{required:'Image is required'})}/>
          {
            errors.image && <p className='text-red-500'>Image is required</p> 
          }
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"
          {...register('email',{required:'Email is required'})}
           />
           {
            errors.email && <p className='text-red-500'>email is required</p> 
          }
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register('password',{required:'Password is required',pattern:{value: />^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
 ,message:'password must be one upperCase,one lowerCase & at least 6 characters'}},)} />
 {
            errors.password && <p className='text-red-500'>Password is required</p> 
          }
          <div><a className="link link-hover">Forgot password?</a></div>
           <div>
            <button
              type='submit'
              className='bg-lime-500 w-full rounded-md py-3 text-white'
            >
              {/* {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )} */}
              Register
            </button>
          </div>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;