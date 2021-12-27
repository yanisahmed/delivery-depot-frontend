import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
};

export default Home;