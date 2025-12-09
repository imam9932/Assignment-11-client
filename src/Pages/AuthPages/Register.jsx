import React from 'react';
import { useForm } from 'react-hook-form';
import { TbFidgetSpinner } from 'react-icons/tb';

const Register = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubmitData=(data)=>{
    console.log(data)
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
          <input type="file" className="file-input file-input-ghost" placeholder=" " />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
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