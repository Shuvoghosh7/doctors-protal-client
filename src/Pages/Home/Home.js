import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import OurServices from '../OurService/OurServices';
import Banner from './Banner';
import DentalWellcome from './DentalWellcome/DentalWellcome';
import Info from './Info/Info';


const Home = () => {
    return (
        <div className='mx-12'>
            <Banner/>
            <Info/>
            <OurServices/>
            <DentalWellcome/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;