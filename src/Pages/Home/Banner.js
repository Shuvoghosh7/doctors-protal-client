import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-[594px] h-[763]' src={chair} />
                <div>
                    <h1 className="text-6xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <PrimaryButton />
                </div>
            </div>
        </div>
    );
};

export default Banner;