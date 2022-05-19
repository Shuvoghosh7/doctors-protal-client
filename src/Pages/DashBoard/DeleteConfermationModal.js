import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfermationModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor
    const handealDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {

                'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted`)
                    setDeletingDoctor(null)
                    refetch()
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="delet-confirm-model" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handealDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delet-confirm-model" class="btn btn-xs">Cancle</label>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfermationModal;