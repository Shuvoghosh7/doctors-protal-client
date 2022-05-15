import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="deshboard-sidevar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-3xl font-bold text-purple-500'>My Appointment</h1>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label htmlFor="deshboard-sidevar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* Sidebar content here */} 
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;