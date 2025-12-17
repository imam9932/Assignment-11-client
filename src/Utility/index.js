import axios from "axios";
import UseAxiosSecure from "../Context/UseAxiosSecure";

export const imageUpload=async imageData=>{
 const formData=new FormData();
  formData.append('image',imageData);

  const {data}=await axios.post(`https://api.imgbb.com/1/upload?  key=a52fc5e71b64ac0b6b528963b985be2a`,formData)

  return data?.data?.display_url
}


// save or update user in db
// const axiosSecure=UseAxiosSecure();
export const saveOrUpdateUser=async (userData)=>{
 
  
  try{
const {data}=await axios.post(`http://localhost:3000/user`,userData)
return data;
  }
  catch (error){
console.error('failed to save or update user',error);
throw error;
  }
  
  
}
