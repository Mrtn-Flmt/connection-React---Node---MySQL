import React, { useState } from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function LoginSystem() {
    const [nameReg, setNameReg] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };

    function register() {
        Axios.post('http://localhost:1999/register', {
            name: nameReg,
            username: usernameReg,
            email: emailReg,
            password: passwordReg
        }).then((response)  => {
            console.log(response);
        })
    }

    function login(e) {
        e.preventDefault();
        Axios.post('http://localhost:1999/login', {
            email: email,
            password: password
        }).then((response)  => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
                localStorage.setItem('isConnected', "false");
            } else {
                setLoginStatus(response.data[0].email);
                navigateHome();
                localStorage.setItem('isConnected', "true");
            }
            console.log(response);
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-6 col-md-6">
                <div className="card">
                    <h1 className="text-center p-3">Login</h1>
                    <form>
                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="loginName">Email</label>
                            <input type="email" id="loginName" className="form-control" onChange={(e)  => {setEmail(e.target.value)}}/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="loginPassword">Password</label>
                            <input type="password" id="loginPassword" className="form-control" onChange={(e)  => {setPassword(e.target.value)}}/>
                        </div>

                        <button type="submit" className="m-3 btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>
                    </form>
                </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
                <div className="card">
                    <h1 className="text-center p-3">Register</h1>
                    <form>
                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerName">Name</label>
                            <input type="text" id="registerName" className="form-control" onChange={(e)  => {setNameReg(e.target.value)}}/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerUsername">Username</label>
                            <input type="text" id="registerUsername" className="form-control" onChange={(e)  => {setUsernameReg(e.target.value)}}/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerEmail">Email</label>
                            <input type="email" id="registerEmail" className="form-control" onChange={(e)  => {setEmailReg(e.target.value)}}/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerPassword">Password</label>
                            <input type="password" id="registerPassword" className="form-control"/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                            <input type="password" id="registerRepeatPassword" className="form-control" onChange={(e)  => {setPasswordReg(e.target.value)}}/>
                        </div>

                        <button type="submit" className=" m-3 btn btn-primary btn-block mb-3" onClick={register}>Sign up</button>
                    </form>
                </div>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    );
};

export default LoginSystem;