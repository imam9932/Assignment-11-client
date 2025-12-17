// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { TbFidgetSpinner } from 'react-icons/tb';
// import { imageUpload } from '../../Utility';
import { useContext } from 'react';
import { TbBus } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
 
import { AuthContext } from '../../Context/AuthContext';
import { saveOrUpdateUser } from '../../Utility';

const Register = () => {


const {createUserFunc,setUser,setLoading,user,loginWithGoogle}=useContext(AuthContext)
const navigate=useNavigate();
const location=useLocation();


 const handleCreateUser=(e)=>{
    e.preventDefault();
    const name=e.target.name.value; 
    const image=e.target.image.value; 
    const email=e.target.email.value; 
    const password=e.target.password.value; 

    console.log(name,email,image,password);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!passwordRegex.test(password)){
      toast.error("Password should be one uppercase, one lowercase and at least 6 characters")
      return;
    }

    // create user
    createUserFunc(email,password)
    .then(async(res)=>{
      console.log(res.user);
      toast.success('Account created successfully')
      setUser(user)
      setLoading(false)

      // save or update user to the db
      await saveOrUpdateUser({name,email})
       navigate(`${location.state? location.state : "/"}`)
    })
    .catch(err=>{
      console.log(err.message);
      toast.error(err.message)
    })
   
  
  };

  // google login
  const handleGoogleSignIn=()=>{
       
     
    loginWithGoogle()
    .then(async(res)=>{
      console.log(res.user)
      toast.success('Google login successful')
      setUser(user)
      setLoading(false)

      // save or update user to the db
      await saveOrUpdateUser({ 
      image: user?.displayName,
    name: user?.displayName,
    

      } ,
       )

       navigate(`${location.state? location.state : "/"}`)
    })
    .catch(err=>{
      console.log(err.message)
      toast.error(err.message)
    })
  }


  return (
     <div className=' border-base-300 rounded-box w-xs border p-4 mx-auto my-20 font-bold text-orange-500'>
    <h1 className='text-center text-4xl text-orange-500'>Register</h1>
    <p className='text-end text-sm'>For our services</p>
    <a className="btn btn-ghost text-2xl flex items-center justify-center"><span className='text-black'><TbBus />
    </span><span className='text-black font-normal'>Tiki</span><span className='font-bold text-orange-500'>Tali</span></a>
    <form onSubmit={handleCreateUser}>
       <fieldset className="fieldset ">
        {/* name */}
  <label className="label">Your Name</label>
  <input type="text" name='name' className="input text-black" placeholder='write your name' />

  {/* photo */}
  <label className="label">Photo URL</label>
  <input type="text" name='image' className="input text-black" placeholder="URL" />
   
{/* email */}
  <label className="label">Your Email</label>
  <input type="email" name='email' className="input text-black" placeholder="enter your email" />
{/* password */}
  <label className="label">Password</label>
  <input type="password" name='password' className="input text-black" placeholder="Password" />

  <button className="btn btn-neutral mt-4 bg-orange-500 border-white">Register</button>
</fieldset>
    </form>
    <p className='text-center'>------------or------------</p>
{/* google login */}

<div type='button' onClick={handleGoogleSignIn}  >
<button className="btn bg-orange-500 w-full mt-2 text-white border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
</div>


<div  >
<p className="text-center text-sm  mt-3">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-500 underline"
                  >
                    Login
                  </Link>
                </p>

</div>

     
   </div>
  );
}
export default Register;