import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
        <div className="flex-1">
           <Link to='/' className="btn btn-ghost text-xl">COFFEE BOOK</Link>
        </div>
        <div className="flex-none">
            <ul className="menu space-x-12 text-lg font-medium menu-horizontal px-1">
            <NavLink to='/' className={({isActive})=>[
                isActive?'text-yellow-400 font-bold':'hover:text-yellow-400'
            ]} >Home</NavLink>
            <NavLink to='/coffee' className={({isActive})=>[
                isActive?'text-yellow-400 font-bold':'hover:text-yellow-400'
            ]} >Coffee</NavLink>
            <NavLink to='/dashboard' className={({isActive})=>[
                isActive?'text-yellow-400 font-bold':'hover:text-yellow-400'
            ]}>Dashboard</NavLink>
            
            </ul>
        </div>
        <ToastContainer />
        </div>
        </div>
    );
};

export default Nav;