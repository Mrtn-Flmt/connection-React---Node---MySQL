import React, { useState } from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function RegisterSystem() {
    const [nameReg, setNameReg] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

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
            if (response.data.message) {
                console.log("nooo")
            } else {
                console.log("heelloooo");
            }
            console.log("hhhhhh");
        })
    }

    return (
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
    )
}
