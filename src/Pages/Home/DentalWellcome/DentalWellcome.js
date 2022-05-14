import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';

const DentalWellcome = () => {
    return (
        <div className='container'>
            <div className="hero min-h-screen text-center">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-[458px] h-[576px ' src={treatment} />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="ps-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalWellcome;