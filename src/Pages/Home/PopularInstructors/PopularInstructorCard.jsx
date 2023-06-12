import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const PopularInstructorCard = ({instructor}) => {
    const {dark}=useAuth()
    const {name,email,photoUrl,role}=instructor
    return (
        <div className={"card " + (dark?"bg-base-300":'bg-base-100 shadow-xl')}>
  <figure><img className=' h-60 w-full object-cover' src={photoUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font-bold text-xl"> Instructor Name: <span className='font-bold text-[#eb1551]'>{name}</span></h2>
    <p className="font-bold mb-2"><span className='font-semibold'>Instructor Email :</span> {email}</p>
    <button className='primary-btn'>See Our Classes</button>
  </div>
</div>
    );
};

export default PopularInstructorCard;