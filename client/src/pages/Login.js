import React from 'react';
import Navigation from '../components/Navigation';
import LoginSystem from '../components/login/LoginSystem';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div>
            <Navigation />
            <br />
            <div className="container">
                <div class="row justify-content-center">
                    <LoginSystem />
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            <Footer />
        </div>
    );
};

export default Login;
