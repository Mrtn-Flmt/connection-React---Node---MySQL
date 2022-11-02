import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function SendMessage() {

    const auth = localStorage.getItem('isConnected');

    const eid = localStorage.getItem('eid');
    const jobtitle = localStorage.getItem('jobTitle');
    console.log(jobtitle);
    const mid = uuid();
    const [nameMSG, setNameMSG] = useState("")
    const [emailMSG, setEmailMSG] = useState("")
    const [messageMSG, setMessageMSG] = useState("")

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    function ApplyNotConnected(e) {
        e.preventDefault();
        if (nameMSG.length > 0 && emailMSG.length > 0 &&
            messageMSG.length > 0) {
            Axios.post('http://localhost:1999/message', {
                eid: localStorage.getItem('eid'),
                mid: mid,
                jobtitle: jobtitle,
                name: nameMSG,
                email: emailMSG,
                message : messageMSG
            }).then((response) => {
                console.log("apply success")
            })
            navigateHome();
        } else {
            e.preventDefault();
            console.log("fill the form");
        }
    }

    function ApplyConnected(e) {
        e.preventDefault();
        if (messageMSG.length > 0) {
            Axios.post('http://localhost:1999/message', {
                eid: localStorage.getItem('eid'),
                mid: mid,
                jobtitle: jobtitle,
                name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                message : messageMSG
            }).then((response) => {
            })
            navigateHome();
        } else {
            e.preventDefault();
            console.log("fill the form");
        }
    }

    if (!auth) {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalmessage1"> Apply</button>
                </div>

                <div className="modal fade" id="modalmessage1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Send your candidacy</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group row">
                                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" className="form-control" id="name" placeholder="name" onChange={(e) => { setNameMSG(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label for="mail" className="col-sm-2 col-form-label">Mail</label>
                                        <div class="col-sm-10">
                                            <input type="text" className="form-control" id="mail" placeholder="mail" onChange={(e) => { setEmailMSG(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label for="message" className="col-sm-2 col-form-label">Message</label>
                                        <div class="col-sm-10">
                                            <input type="textarea" className="form-control" id="message" placeholder="message" onChange={(e) => { setMessageMSG(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <br></br>

                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={ApplyNotConnected}>Send your candidacy</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalmessage2"> Apply</button>
                </div>

                <div className="modal fade" id="modalmessage2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Send your candidacy</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group row">
                                        <label for="message" className="col-sm-2 col-form-label">Message</label>
                                        <div class="col-sm-10">
                                            <input type="textarea" className="form-control" id="message" placeholder="message" onChange={(e) => { setMessageMSG(e.target.value) }} required />
                                        </div>
                                    </div>
                                    <br></br>

                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={ApplyConnected}>Send your candidacy</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SendMessage;