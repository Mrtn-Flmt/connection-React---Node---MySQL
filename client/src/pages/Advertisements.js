import React from 'react';
import Navigation from '../components/Navigation';
import CardsAdmin from '../components/admin/CardsAdmin';
import Search from '../components/home/Search';
import Footer from '../components/Footer';

const Advertisements = () => {
    return (
        <div>
            <Navigation />
            <br />
            <div class="d-flex justify-content-center">
                <CardsAdmin />
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default Advertisements;