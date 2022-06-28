import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

export default function App() {
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    return (
        <>
            <Nav />
            <div className='container'>
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} />} />
                </Routes>
            </div>
        </>
    )
}
