import axios from "axios";

export const imageUpload=async imageData=>{
 const formData=new FormData();
  formData.append('image',imageData);

  const {data}=await axios.post(`https://api.imgbb.com/1/upload?  key=a52fc5e71b64ac0b6b528963b985be2a`,formData)

  return data?.data?.display_url
}