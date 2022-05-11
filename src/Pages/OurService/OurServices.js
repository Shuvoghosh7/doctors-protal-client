import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const OurServices = () => {
    const services=[
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:flouride

        },
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:cavity

        },
        {
            _id:2,
            name:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:whitening

        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className=' text-primary text-2xl font-bold uppercase'>OUR SERVICES</h1>
                <p className='text-4xl' >Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                {
                    services.map(service =><Service
                      key={service._id}
                      service={service}
                    />)
                }

            </div>
        </div>
    );
};

export default OurServices;