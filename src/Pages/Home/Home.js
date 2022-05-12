import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import OurServices from '../OurService/OurServices';
import Footer from '../Shared/Footer/Footer';

import Banner from './Banner';
import Contact from './Contact/Contact';
import DentalWellcome from './DentalWellcome/DentalWellcome';

import Info from './Info/Info';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div >
            <Banner/>
            <Info/>
            <OurServices/>
            <DentalWellcome/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;