import React from 'react';
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default Navigation = () => {
    const auth = localStorage.getItem('isConnected');

    const navigate = useNavigate();

    function setDisconnected() {
        localStorage.removeItem('isConnected');
        console.log(auth.valueOf());
    } 
    
    if (auth) {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container d-flex">
                    <a className="navbar-brand">Employ me 😎</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"><NavLink to="/">Home</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={setDisconnected}><NavLink>Log out</NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container d-flex">
                    <a className="navbar-brand">Employ me 😎</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"><NavLink to="/">Home</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><NavLink to="/Login">Login</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><NavLink to="/Register">Register</NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
