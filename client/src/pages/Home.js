import React from 'react';
import Navigation from '../components/Navigation';
import Cards from '../components/home/Cards';
import Filter from '../components/home/Filter';
import Search from '../components/home/Search';
import Footer from '../components/Footer';
import AddCard from '../components/home/AddCard';
import Advertisements from './Advertisements';

const Home = () => {
    const isAdmin = localStorage.getItem('isAdmin');

    if (isAdmin) {
        return (
            <div>
                <Advertisements />
            </div>
        )
    }
    return (
        <div>
            <Navigation />
            <Search />
            <br />
            <div className="container">
                <div class="row justify-content-end">
                    <AddCard />
                    <Filter />
                    <Cards />
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );

};

export default Home;