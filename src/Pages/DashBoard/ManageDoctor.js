import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfermationModal from './DeleteConfermationModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-2xl'>Manage Doctors:{doctors.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfermationModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            />}
        </div>
    );
};

export default ManageDoctor;