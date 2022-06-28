import React from 'react';
import Nav from './components/Nav';
import Home from './views/Home';

export default function App() {
    return (
        <>
            <Nav />
            <div className='container'>
                <Home />
            </div>
        </>
    )
}
