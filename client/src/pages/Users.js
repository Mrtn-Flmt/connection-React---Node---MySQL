import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AllUsers from '../components/admin/AllUsers';

const Users = () => {
    return (
        <div>
            <Navigation />
            <br />
            <div className="container">
                <div class="row justify-content-center">
                <AllUsers />
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default Users;