import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ManageClasses = () => {
    const classes = useLoaderData()
    console.log(classes)
    return (
        <div>
            <h1>manages class</h1>
        </div>
    );
};

export default ManageClasses;