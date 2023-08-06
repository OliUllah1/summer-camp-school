
import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import About from '../About/About';
import Class from '../Class/Class';
import Register from '../Register/Register';
import Events from '../Events/Events';
import Blog from '../Blog/Blog';
import Teacher from '../Teacher/Teacher';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Class></Class>
            <Register></Register>
            <PopularClasses></PopularClasses>
            <Events></Events>
            <Teacher></Teacher>
            <Blog></Blog>
            <Contact></Contact>
             
            
            
        </div>
    );
};

export default Home;