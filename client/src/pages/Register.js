import React from 'react';
import Navigation from '../components/Navigation';
import RegisterSystem from '../components/register/RegisterSystem';
import Footer from '../components/Footer';

const Register = () => {
    return (
        <div>
            <Navigation />
            <br />
            <div className="container">
                <div class="row justify-content-center">
                    <RegisterSystem />
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default Register;