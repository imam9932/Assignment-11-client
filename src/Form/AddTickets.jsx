import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { imageUpload } from '../Utility/index'
import { AuthContext } from '../Context/AuthContext';
import UseAxiosSecure from '../Context/UseAxiosSecure';
import Swal from 'sweetalert2';


const AddTickets = () => {
  const { user } = useContext(AuthContext)
  const axiosSecure=UseAxiosSecure();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = async data => {
    
    const {title,image,fromLocation,toLocation,transportType,ticketQuantity,price,date,time } = data;
    const imageFile = image[0];
    const imageURL = await imageUpload(imageFile)
    const ticketsData = {
      image: imageURL,
      title,
      fromLocation,
      toLocation,
      transportType,

      ticketQuantity: Number(ticketQuantity),
      price: Number(price),
      date,
      time,

       
      seller: {
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email
      }
    }
    console.log(ticketsData);
     // save tickets to the db
  axiosSecure.post('/tickets',ticketsData)
  .then(res=>{
    console.log('after saving parcel',res.data);
    if(res.data.insertedId){
       Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your ticket has been added",
  showConfirmButton: false,
  timer: 1500
});
    }
  })
  };

 

  // for date
  const formatDate = (date) => date.toISOString().slice(0, 10);

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>

            {/* title */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                id='title'
                type='text'
                placeholder='title'

                {...register('title', {
                  required: 'title is required'
                })}
              />
              {
                errors.title && <p className='text-red-500  '>title is Required</p>
              }
            </div>

            {/* from location */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='from location' className='block text-gray-600 '>
                From location
              </label>
              <select
                required
                className='w-full px-4 py-3 border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                {...register('fromLocation', {
                  required: 'from location is required'
                })}
              >
                <option value='Dhaka'>Dhaka</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value='Sylhet'>Sylhet</option>
                <option value='Chattogram'>Chattogram</option>
              </select>
            </div>
            {
              errors.fromLocation && <p className='text-red-500  '>From Location is Required</p>
            }


            {/* to location */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='to location' className='block text-gray-600 '>
                To location
              </label>
              <select
                required
                className='w-full px-4 py-3 border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                {...register('toLocation', {
                  required: 'to location is required'
                })}
              >
                <option value='Dhaka'>Dhaka</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value='Sylhet'>Sylhet</option>
                <option value='Chattogram'>Chattogram</option>
              </select>
            </div>
            {
              errors.toLocation && <p className='text-red-500  '>To Location is Required</p>
            }

            {/* transport type */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='transport type' className='block text-gray-600'>
                Transport type
              </label>
              <select
                required
                className='w-full px-4 py-3 border-orange-300 focus:outline-orange-500 rounded-md bg-white'
                {...register('transportType', {
                  required: 'transport type is required'
                })}

              >
                <option value='Bus'>Bus</option>
                <option value="Train">Train</option>
                <option value='Lonch'>Lonch</option>

              </select>




              {
                errors.transportType && <p className='text-red-500  '>Transport type is Required</p>
              }
            </div>
             {/* Image */}
            <div className=' p-4  w-full  m-auto rounded-lg grow'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'

                      id='image'
                      accept='image/*'
                      hidden
                      {...register('image', {
                        required: 'Image is required'
                      })}
                    />
                    <div className='bg-orange-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-orange-500'>
                      Upload
                    </div>
                  </label>
                </div>
              </div>
            </div>
           
          </div>
          <div className='space-y-6 flex flex-col'>
            {/* Price & Quantity */}
            <div className='flex justify-between gap-2'>
              {/* Price */}
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600 '>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                  id='price'
                  type='number'
                  placeholder='Price per unit'

                  {...register('price', {
                    required: 'Price is required'
                  })}
                />
                {
                  errors.price && <p className='text-red-500  '>Price is Required</p>
                }
              </div>

              {/* ticket quantity */}
              <div className='space-y-1 text-sm'>
                <label htmlFor='ticket quantity' className='block text-gray-600'>
                  Ticket quantity
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                  id='ticketQuantity'
                  type='number'
                  placeholder='ticket quantity'
                  required
                  {...register('ticketQuantity', {
                    required: 'ticket quantity is required'
                  })}
                />
                {
                  errors.ticketQuantity && <p className='text-red-500  '>Ticket quantity is Required</p>
                }
              </div>

            </div>
            <div className='flex gap-3'>
                {/* date */}
              <div className='space-y-1 text-sm flex-1'>
                <label htmlFor='date' className='block text-gray-600'>
                  Date
                </label>
                <input
                  type="date"
                  className="border p-2 rounded"
                  defaultValue={formatDate(today)}
                  min={formatDate(today)}
                  max={formatDate(maxDate)}
                   {...register('date', {
                    required: 'date is required'
                  })}
                />
                {
                  errors.date && <p className='text-red-500  '>date is Required</p>
                }
              </div>

               {/* time*/}
            <div className='space-y-1 text-sm flex-1'>
              <label htmlFor='time' className='block text-gray-600'>
                Time
              </label>
              <select
                required
                className='w-full px-4 py-3 border-orange-300 focus:outline-orange-500 rounded-md bg-white'
                {...register('time', {
                  required: 'time is required'
                })}

              >
                <option value='6.30 pm'>6.30 pm</option>
                <option value="10.00 pm">10.00 pm</option>
                <option value='12.00 am'>12.00 am</option>

              </select>




              {
                errors.time && <p className='text-red-500  '>time type is Required</p>
              }
            </div>
            </div>




           

              {/* seller name */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='seller name' className='block text-gray-600'>
                Seller name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                id='sellerName'
                type='text'
                 defaultValue={user.displayName}


                {...register('sellerName', {
                  required: 'seller Name is required'
                })}
              />
              {
                errors.sellerName && <p className='text-red-500  '>seller name is Required</p>
              }
            </div>
              {/* seller email */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='seller email' className='block text-gray-600'>
                Seller email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white'

                id='sellerEmail'
                type='text'
                 defaultValue={user.email}


                {...register('sellerEmail', {
                  required: 'seller email is required'
                })}
              />
              {
                errors.sellerEmail && <p className='text-red-500  '>seller email is Required</p>
              }
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-orange-500 '
            >
              Add Ticket
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTickets;