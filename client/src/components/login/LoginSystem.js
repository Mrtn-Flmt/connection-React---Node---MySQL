import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginSystem() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
        window.location.reload(false);
    };

    function checkStatus() {
        Axios.post('http://localhost:1999/checkStatus', {
            email: email,
        }).then((response) => {
            navigateHome();
            if (response.data[0].status == "employer") {
                localStorage.setItem('isEmployer', "true");
            }
            if (response.data[0].status == "admin") {
                localStorage.setItem('isAdmin', "true");
            }
            console.log(response);
        })
    }

    function login(e) {
        e.preventDefault();
        Axios.post('http://localhost:1999/login', {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].email);
                localStorage.setItem('uid', response.data[0].uid)
                localStorage.setItem('name', response.data[0].name)
                localStorage.setItem('username', response.data[0].username)
                localStorage.setItem('password', password)
                localStorage.setItem('isConnected', "true");
                checkStatus();
            }
            localStorage.setItem('email', email);
            console.log(response);
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-6 col-md-6">
                <div id="card" className="card">
                    <h1 className="text-center p-3">Login</h1>
                    <form>
                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="loginName">Email</label>
                            <input type="email" id="loginName" className="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="loginPassword">Password</label>
                            <input type="password" id="loginPassword" className="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <button type="submit" className="m-3 btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>
                    </form>
                </div>
            </div>
            <p className="text-center text-danger m-3">{loginStatus}</p>
        </div>
    );
};

export default LoginSystem;