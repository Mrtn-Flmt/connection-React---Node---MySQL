import React from 'react';
import NotifMessage from './NotifMessage'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default Navigation = () => {
    
    const auth = localStorage.getItem('isConnected');
    const admin = localStorage.getItem('isAdmin');
    const employer = localStorage.getItem('isEmployer');

    const navigate = useNavigate();

    function setDisconnected() {
        localStorage.removeItem('isConnected');
        localStorage.removeItem('isEmployer');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('uid');
        window.location.reload(false);
        console.log(auth.valueOf());
    }

    if (admin) {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container d-flex">
                    <a className="navbar-brand"><NavLink id="brand" to="/">Employ me🔥</NavLink></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item navv">
                                <a id="lien" className="m-2 nav-link active" aria-current="page"><NavLink to="/profile">Profile</NavLink></a>
                            </li>
                            <li className="nav-item navv">
                                <a id="lien" className="m-2 nav-link active" aria-current="page"><NavLink to="/allmessage">All messages</NavLink></a>
                            </li>
                            <li className="nav-item navv">
                                <a id="lien" className="m-2 nav-link active" aria-current="page"><NavLink to="/Advertisements">All advertisements</NavLink></a>
                            </li>
                            <li className="nav-item navv">
                                <a id="lien" className="m-2 nav-link active" aria-current="page"><NavLink to="/Users">All Users</NavLink></a>
                            </li>
                            <li className="nav-item navv">
                                <a id="lien" className="m-2 nav-link" onClick={setDisconnected}><NavLink to="/home">Log out</NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    } else if (auth) {
        if (employer) {
            return (
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container d-flex">
                        <a className="navbar-brand"><NavLink id="brand" to="/">Employ me 🔥</NavLink></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a id="lien" className="nav-link active" aria-current="page"><NavLink to="/">Home</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a id="lien" className="nav-link active" aria-current="page"><NavLink to="/profile">Profile</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a id="lien" className="nav-link active" aria-current="page"><NavLink to="/message">Message</NavLink></a>
                                    <NotifMessage />
                                </li>
                                <li className="nav-item">
                                    <a id="lien" className="nav-link active" aria-current="page"><NavLink to="/mycard">Card</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a id="lien" className="nav-link" onClick={setDisconnected}><NavLink to="/home">Log out</NavLink></a>
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
                        <a className="navbar-brand"><NavLink id="brand" to="/">Employ me 🔥</NavLink></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a id="lien" className="nav-link active" aria-current="page"><NavLink to="/">Home</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a id="lien" className="nav-link active" aria-current="page"><NavLink to="/profile">Profile</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a id="lien" className="nav-link" onClick={setDisconnected}><NavLink to="/home">Log out</NavLink></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container d-flex">
                    <a className="navbar-brand"><NavLink id="brand" to="/">Employ me 🔥</NavLink></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a id="lien" className="nav-link active" aria-current="page"><NavLink to="/">Home</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a id="lien" className="nav-link"><NavLink to="/Login">Login</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a id="lien" className="nav-link"><NavLink to="/Register">Register</NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
