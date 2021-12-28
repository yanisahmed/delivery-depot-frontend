import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const Content = () => {
    const location = useLocation();
    return (
        <div className='content-area'>
            {location.pathname === '/login' ? <Login /> : ''}
            {location.pathname === '/signup' ? <Signup /> : ''}

        </div>
    );
};

export default Content;