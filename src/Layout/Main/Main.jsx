import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../Pages/Shared/Navber/Navber';
import Footer from '../../Pages/Shared/Footer/Footer';
import TopNavber from '../../Pages/Shared/Navber/TopNavber';

const Main = () => {
    return (
        <div>
            
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;