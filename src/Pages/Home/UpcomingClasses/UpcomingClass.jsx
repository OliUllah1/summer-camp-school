import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UpcomingClass = ({singleClass}) => {
  const { dark}=useAuth()
    const{availableSets,classImg,className,instructorName,price
    }=singleClass;
    return (
        <div className={"card " + (dark?"bg-base-300":'bg-base-100 shadow-xl')}>
        <figure className='px-5 pt-5'><img className=' h-60 w-full object-cover rounded-lg' src={classImg} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="font-bold text-xl">Class Name : <span className='font-bold text-[#eb1551]'>{className}</span></h2>
          <p className="font-bold text-lg"><span className='font-semibold'>Instructor Name :</span> {instructorName}</p>
          <div className='flex gap-2'>
              <p className="font-bold text-lg"><span className='font-semibold'>Available Sets :</span>{availableSets}</p>
              <p className="font-semibold text-lg mb-2">Price : <span className='font-bold text-[#eb1551]'>${price}</span></p>
          </div>
          <button className='primary-btn'>Coming Soon</button>
        </div>
      </div>
    );
};

export default UpcomingClass;