import React from 'react';
import Navbar from '../Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Footer from '../Components/Footer';
import CreateTable from '../Pages/CreateTable';
import Requests from '../Pages/Requests';

function AllRoute(props) {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/create' element={<CreateTable/>}></Route>
                <Route path='/request' element={<Requests/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default AllRoute;