import React from 'react';

const Service = ({ service,setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{
                    slots.length>0? <span>{slots[0]}</span>:
                    <span className='text-red-500'>Try another day</span>
                }</p>
                <p>{slots.length} {slots.length > 1? "Spaces":"Space"} Spaces available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn modal-button btn-success text-white" disabled={slots.length === 0} onClick={()=>setTreatment(service)} >open modal</label>
                </div>
            </div>
        </div>

    );
};

export default Service;