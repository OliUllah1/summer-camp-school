import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {
   const classData=useLoaderData()
   const navigate=useNavigate()
   const {className,availableSets,instructorEmail,instructorName,price,_id}=classData;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {className,availableSets,price}=data;
        const updateData={className,availableSets,price}
        console.log(data)
        fetch(`http://localhost:5000/classes/${_id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount===1){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'class updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/dashboard/instructorclasses')
            }
            console.log(data)
        })
    };
    return (
        <div className="bg-base-200 w-full">
        <div className=" w-full shadow-2xl bg-base-100">
        <h1 className='pl-7 pt-10 text-3xl text-[#eb1551] font-semibold'>Update Class</h1>
          <form  onSubmit={handleSubmit(onSubmit)} className="card-body w-full"> 
            <div className='flex gap-5'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold text-[#eb1551]">Class Name</span>
              </label>
              <input type="text" defaultValue={className} name='className' {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered input-secondary w-full" />
              {errors.className && <span>This field is required</span>}
            </div>
            </div>
            <div className='flex gap-5'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold text-[#eb1551]">Instructor name</span>
              </label>
              <input type="text" name='instructorName' {...register("instructorName", { required: true })} value={instructorName} placeholder="Instructor name" className="input input-bordered input-secondary w-full" />
              {errors.instructorName && <span>This field is required</span>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold text-[#eb1551]">Instructor email</span>
              </label>
              <input value={instructorEmail} name='instructorEmail' {...register("instructorEmail", { required: true })} type="text" placeholder="Instructor email" className="input input-bordered input-secondary w-full" />
              {errors.instructorEmail && <span>This field is required</span>}
            </div>
            </div>
            <div className='flex gap-5'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold text-[#eb1551]">Available seats</span>
              </label>
              <input defaultValue={availableSets} type="text" name='availableSets' {...register("availableSets", { required: true })} placeholder="Available seats" className="input input-bordered input-secondary w-full" />
              {errors.availableSets && <span>This field is required</span>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold text-[#eb1551]">Price</span>
              </label>
              <input defaultValue={price} type="text" name='price' {...register("price", { required: true })} placeholder="Price" className="input input-bordered input-secondary w-full" />
              {errors.price && <span>This field is required</span>}
            </div>
            </div>
            <div className="form-control mt-6">
              <button className="primary-btn">Update Class</button>
            </div>
           </form>
        </div>
    </div>
    );
};

export default UpdateClass;