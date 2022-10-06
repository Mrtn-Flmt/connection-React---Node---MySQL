import React from 'react';
import Navigation from '../components/Navigation';
import RegisterSystem from '../components/register/RegisterSystem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

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
        </div>
    );
};

export default Register;