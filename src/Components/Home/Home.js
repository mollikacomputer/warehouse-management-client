import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section>
                <Inventory></Inventory>
            </section>
        </div>
    );
};

export default Home;