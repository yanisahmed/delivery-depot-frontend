import React from 'react';
import { useLocation } from 'react-router-dom';
import AddPercel from '../AddPercel/AddPercel';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyPercel from '../MyPercel/MyPercel';

const Home = () => {
    let location = useLocation();
    console.log(location);
    return (
        <>
            <Header />
            <Content />
            {location.pathname === '/add-percel' ? <AddPercel /> : ''}

            <MyPercel />
            <Footer />
        </>
    );
};

export default Home;