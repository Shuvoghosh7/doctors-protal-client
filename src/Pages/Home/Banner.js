import React from 'react';
import chair from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-[594px] h-[763]' src={chair} />
                <div>
                    <h1 class="text-6xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;