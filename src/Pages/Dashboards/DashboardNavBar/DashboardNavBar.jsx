import React from 'react';

const DashboardNavBar = ({children}) => {
    return (
        <div className='w-full text-xl font-semibold text-white bg-[#eb1551] py-1 mt-1 text-center'>
            <h1>{children}</h1>
            <hr />
        </div>
    );
};

export default DashboardNavBar;