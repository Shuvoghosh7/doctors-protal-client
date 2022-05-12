import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date())

    return (
        <div style={{
            background: `url(${bg})`

        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                   <p>Your selected date:{format(selected, 'PP')}</p>
                    
  
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentBanner;