import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookinModal from './BookinModal';
import Service from './Service';

const AvailableAppointments = ({selected}) => {
    const[services,setServices]=useState([])
    const[treatment,setTreatment]=useState({})
    console.log(services)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <p className='text-xl text-secondary text-center'>Your selected date:{format(selected, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment &&<BookinModal 
            selected={selected} 
            treatment={treatment}
            setTreatment={setTreatment}>
            </BookinModal>}
        </div>
    );
};

export default AvailableAppointments;