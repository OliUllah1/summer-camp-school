import React from 'react';

const InstructorCard = ({instructor}) => {
  const {photoUrl,name,email}=instructor;
    return (
        <div className="card bg-base-100 shadow-2xl">
  <div className="avatar flex justify-center mt-5">
  <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={photoUrl} />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name : {name}</h2>
    <p className='text-gray-600 font-semibold'>Email : {email}</p>
  </div>
</div>
    );
};

export default InstructorCard;