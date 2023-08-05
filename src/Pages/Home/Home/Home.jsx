
import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import UpcomingClasses from '../UpcomingClasses/UpcomingClasses';
import About from '../About/About';
import AboutBottom from '../About/AboutBottom';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AboutBottom></AboutBottom>
            {/* <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <UpcomingClasses></UpcomingClasses> */}
        </div>
    );
};

export default Home;