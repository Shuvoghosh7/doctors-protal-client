import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import OurServices from '../OurService/OurServices';
import Banner from './Banner';
import Contact from './Contact/Contact';
import DentalWellcome from './DentalWellcome/DentalWellcome';
import Footer from './Footer/Footer';
import Info from './Info/Info';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div className='mx-12'>
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