import React from 'react';
import Navbar from '../Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Footer from '../Components/Footer';

function AllRoute(props) {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default AllRoute;