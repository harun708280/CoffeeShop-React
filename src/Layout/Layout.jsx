import React from 'react';
import Nav from '../Component/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="min-h-[calc(100vh-240px)]">
               <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;