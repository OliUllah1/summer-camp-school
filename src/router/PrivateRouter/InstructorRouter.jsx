import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
import { Navigate, useLocation } from 'react-router-dom';

const InstructorRouter = ({children}) => {
    const {loading,user}=useAuth()
    const[role,isLoading]=useRole()
    const location = useLocation()
    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }

    if( user && role==='instructor'){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default InstructorRouter;