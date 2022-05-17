import id from 'date-fns/esm/locale/id/index.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const { data: services, isLoading} = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    
    const imageStorageKey='1102adc3ea9ff69facf45e7edc08700d'
      /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */
    const onSubmit = async data => {
       const image=data.image[0]
       const formData = new FormData();
       formData.append('image',image );
       const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
       fetch(url,{
           method:'POST',
           body:formData
       })
       .then(res => res.json())
       .then(result => {
           if(result.success){
               const img=result.data.url
               const doctor={
                   name:data.name,
                   email:data.email,
                   speciality:data.speciality,
                   img:img
               }
               //send to your database
               fetch('http://localhost:5000/doctor',{
                   method:"POST",
                   headers:{
                    'Content-type': 'application/json',
                    'authorization':`Bearer ${localStorage.getItem('AccessToken')}`
                   },
                   body:JSON.stringify(doctor)
               })
               .then(res =>res.json())
               .then(inserted =>{
                   if(inserted.insertedId){
                       toast.success('Doctor added successfully')
                       reset()
                   }
                   else{
                       toast.error("Field to added Doctor")
                   }
               })
           }
           console.log('imgbb',result)
        })

    };
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-3xl'>Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="name"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name is required"

                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="Email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"

                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">speciality</span>
                    </label>
                    <select {...register("speciality") }class="select input-bordered w-full max-w-xs">
                        {
                           services.map(service =><option
                            key={service._id}
                            value={service.name}
                           >{service.name}
                           </option>) 
                        }
            
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Photo"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "image is required"

                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>
                <input className='btn w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;