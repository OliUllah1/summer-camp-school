import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';

const AdminRouter = ({children}) => {
    const {loading,user}=useAuth()
    const[role,isLoading]=useRole()
    const location = useLocation()
    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }

    if( user && role==='admin'){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRouter;