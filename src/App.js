import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Register from './views/Register';

export default function App() {
    return (
        <>
            <Nav />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
        </>
    )
}
