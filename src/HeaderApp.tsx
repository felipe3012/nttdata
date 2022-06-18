import React from 'react';
import './HeaderApp.css';
import image from './clash-logo.png';

function HeaderApp() {
    return (     
        <div className='Header'>
            <h1>CLASH OF CLANS</h1>
            <img src={image} className="Header__image" alt="clashofclans"/>
        </div>   
    );
}

export { HeaderApp };