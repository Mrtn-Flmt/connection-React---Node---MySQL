import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function RegisterSystem() {
    const [nameReg, setNameReg] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordConfirmReg, setPasswordConfirmReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const samePassword = false;

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    function register(e) {
        if (nameReg.length > 0 && usernameReg.length > 0 &&
            emailReg.length > 0 && passwordConfirmReg.length > 0) {
            if (passwordConfirmReg === passwordReg) {
                Axios.post('http://localhost:1999/register', {
                    name: nameReg,
                    username: usernameReg,
                    email: emailReg,
                    password: passwordReg
                }).then((response)  => {
                })
                localStorage.setItem('isConnected', "true");
                navigateHome();
            } else {
                e.preventDefault();
                console.log("not same mdp");
            }
        }
    }

    function checkPassword() {
        if ( passwordReg.length > 0 && passwordConfirmReg === passwordReg) {
            console.log("is same");
        } else {
            console.log("is not same");
        }
    }

    return (
            <div className="col-xs-6 col-sm-6 col-md-6">
                <div className="card">
                    <h1 className="text-center p-3">Register</h1>
                    <form>
                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerName">Name</label>
                            <input type="text" id="registerName" className="form-control" onChange={(e)  => {setNameReg(e.target.value)}} required/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerUsername">Username</label>
                            <input type="text" id="registerUsername" className="form-control" onChange={(e)  => {setUsernameReg(e.target.value)}} required/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerEmail">Email</label>
                            <input type="email" id="registerEmail" className="form-control" onChange={(e)  => {setEmailReg(e.target.value)}} required/>
                        </div>

                        <div className="form-outline mb-4 p-3">
                            <label className="form-label" for="registerPassword">Password</label>
                            <input type="password" id="registerPassword" className="form-control" onChange={(e) => {setPasswordConfirmReg(e.target.value)}} required/>
                        </div>
                        <div className="form-outline mb p-3">
                            <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                            <input type="password" id="registerRepeatPassword" className="form-control" onChange={(e) => {checkPassword(e.target.value)}} onChange={(e)  => {setPasswordReg(e.target.value)}} required/>
                        </div>
                        <p className="incorectPassword text-center text-danger d-none">password must be the same</p>
                        {passwordReg === passwordConfirmReg ? '' : <div className="text-danger m-3 ">password is not same</div>}
                        <button type="submit" className=" m-3 btn btn-primary btn-block mb-3" onClick={register}>Sign up</button>
                    </form>
                </div>
            </div>
    )
}
