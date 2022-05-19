import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0hWCDu4I2uHR4DpnxPO6LUdEl9Ek43sD78cHMnu2wyiKtiNetsFXakgW3ljI2n8ncmZEBCfbuB6iKhy9O1QBJ100nVvqXQpG');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="text-center lg:text-left my-12">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p className='text-success font-bold'>Hello {appointment.patientName}</p>
                        <h2 class="card-title">pay for {appointment.treatment}</h2>
                        <p>Your Appointment <span className='text-orange-500'>{appointment.date}</span> at {appointment.slot}</p>
                        <p>Plese pay:${appointment.price}</p>
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;