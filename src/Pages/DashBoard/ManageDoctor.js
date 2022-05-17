import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageDoctor = () => {
    const{data:doctors,isLoading}=useQuery('doctors',()=>fetch('http://localhost:5000/doctor',{
        headers:{
            'Content-type': 'application/json',
            'authorization':`Bearer ${localStorage.getItem('AccessToken')}` 
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-2xl'>Manage Doctors:{doctors.length}</h1>
        </div>
    );
};

export default ManageDoctor;