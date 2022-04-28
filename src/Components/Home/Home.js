import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;