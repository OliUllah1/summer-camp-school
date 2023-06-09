import React from 'react';

const ClasseCard = ({classe}) => {
    const {availableSets,classImg,className,instructorName,price}=classe;
    return (
        <div className="card bg-base-100 shadow-2xl">
  <figure className="px-5 pt-10">
    <img src={classImg} alt="Shoes" className="rounded-xl w-full h-40" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#eb1551]">{className}</h2>
    <p className='font-semibold'><span className='font-bold'>Instructor</span> : {instructorName}</p>
    <p className='font-semibold'><span className='font-bold'>Available seats</span> : {availableSets}</p>
    <p className='font-semibold'><span className='font-bold'>Price</span> : {price} $</p>
    <button className='primary-btn mt-3'>Save Class</button>
  </div>
</div>
    );
};

export default ClasseCard;