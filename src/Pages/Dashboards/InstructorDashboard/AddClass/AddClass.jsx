import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const images_hosting_token=import.meta.env.VITE_images_upload_key;
const AddClass = () => {
    const img_Url=`https://api.imgbb.com/1/upload?key=${images_hosting_token}`

    const {user}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const formData = new FormData();
    
        formData.append('image', data.image[0])
        fetch(img_Url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
    .then(uploadImages=>{
        console.log(uploadImages)
        if(uploadImages.success){
            const imgURL=uploadImages.data.display_url
            const {className,availableSets,instructorEmail,instructorName,price,}=data;
            const newClass={className,availableSets:parseInt(availableSets),instructorEmail,instructorName,price:parseFloat(price),classImg:imgURL,status:'pending'}
            console.log(newClass)
            fetch('http://localhost:5000/classes',{
                method:'POST',
                headers:{
                    "Content-type":'application/json'
                },
                body:JSON.stringify(newClass)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Class Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
                console.log(data)
            })
        }
    })
}
    return (
        <div className="bg-base-200 w-full">
    <div className=" w-full shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
        <div className='flex gap-5'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-semibold text-[#eb1551]">Class Name</span>
          </label>
          <input type="text" name='className' {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered input-secondary w-full" />
          {errors.className && <span>This field is required</span>}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-semibold text-[#eb1551]">Class Image</span>
          </label>
          <input type="file" name='image' {...register("image", { required: true })} className="file-input file-input-bordered file-input-secondary w-full" />
          {errors.image && <span>This field is required</span>}
        </div>
        </div>
        <div className='flex gap-5'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-semibold text-[#eb1551]">Instructor name</span>
          </label>
          <input type="text" name='instructorName' {...register("instructorName", { required: true })} value={user?.displayName} placeholder="Instructor name" className="input input-bordered input-secondary w-full" />
          {errors.instructorName && <span>This field is required</span>}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-semibold text-[#eb1551]">Instructor email</span>
          </label>
          <input value={user?.email} name='instructorEmail' {...register("instructorEmail", { required: true })} type="text" placeholder="Instructor email" className="input input-bordered input-secondary w-full" />
          {errors.instructorEmail && <span>This field is required</span>}
        </div>
        </div>
        <div className='flex gap-5'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-semibold text-[#eb1551]">Available seats</span>
          </label>
          <input type="number" name='availableSets' {...register("availableSets", { required: true })} placeholder="Available seats" className="input input-bordered input-secondary w-full" />
          {errors.availableSets && <span>This field is required</span>}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-semibold text-[#eb1551]">Price</span>
          </label>
          <input type="number" name='price' {...register("price", { required: true })} placeholder="Price" className="input input-bordered input-secondary w-full" />
          {errors.price && <span>This field is required</span>}
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="primary-btn">Add Class</button>
        </div>
      </form>
    </div>
</div>
    );
};

export default AddClass