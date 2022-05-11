import React from 'react';
import doctor  from '../assets/images/doctor.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center bg-[url("/src/assets/images/appointment.png")] my-12'>
            <div className='flex-1 mt-[-100px]'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h1 className='text-2xl text-primary'>Appointment</h1>
                <h1 className='text-4xl'>Make an appointment Today</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton/>

            </div>
        </section>
    );
};

export default MakeAppointment;