import React from 'react';

const EnrollClass = ({singleClass}) => {
    console.log(singleClass)
    const{classImg,className,instructorName}=singleClass
    return (
        <div className="card bg-base-200 shadow-xl">
  <figure className="px-5 pt-5">
    <img src={classImg}alt="Shoes" className="rounded-xl h-60" />
  </figure>
  <div className="px-5 pt-3 py-5 space-y-3">
    <h2 className="card-title">{className}</h2>
    <p className='font-semibold'> <span className='font-bold text-lg'>Instructor</span> : {instructorName}</p>
    <div className="card-actions">
      <button className="primary-btn w-full">Continue Class</button>
    </div>
  </div>
</div>
    );
};

export default EnrollClass;