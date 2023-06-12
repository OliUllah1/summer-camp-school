import React from 'react';

const PopularClassCard = ({singleClass}) => {
    const{availableSets,classImg,className,instructorName,price
    }=singleClass;
    console.log(singleClass)
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img className=' h-60 w-full object-cover' src={classImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font-bold text-xl">Class Name : <span className='font-bold text-[#eb1551]'>{className}</span></h2>
    <p className="font-bold text-lg"><span className='font-semibold'>Instructor Name :</span> {instructorName}</p>
    <div className='flex gap-2'>
        <p className="font-bold text-lg"><span className='font-semibold'>Available Sets :</span>{availableSets}</p>
        <p className="font-semibold text-lg mb-2">Price : <span className='font-bold text-[#eb1551]'>${price}</span></p>
    </div>
    <button className='primary-btn'>Enroll Now</button>
  </div>
</div>
    );
};

export default PopularClassCard;