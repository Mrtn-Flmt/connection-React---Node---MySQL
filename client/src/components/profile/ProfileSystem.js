import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

import Axios from 'axios';

export default function ProfileSystem() {

    const navigation = useNavigate();

    const [nameReg, setNameReg] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")

    const uid = localStorage.getItem('uid');
    console.log(uid);
    const name = localStorage.getItem('name');
    const username = localStorage.getItem('username')
    const email = localStorage.getItem('email');

    function remove() {
        console.log("remove the data: " + uid);
        Axios.delete(`http://localhost:1999/Profile/${uid}`)
        .then(res => {
            console.log("Data deleted", res)
            navigation('/home');
        })
    }

    function removeAndSet() {
        console.log("remove and set the data: " + uid);
        Axios.delete(`http://localhost:1999/Profile/${uid}`)
        .then(res => {
            console.log("Data deleted", res)
        })

        Axios.post('http://localhost:1999/profile', {
            uid: uid,
            name: nameReg,
            username: usernameReg,
            email: emailReg,
            password: localStorage.getItem('password'),
            status: localStorage.getItem('status')
        }).then((response) => {
        })
        localStorage.setItem('name', nameReg)
        localStorage.setItem('email', emailReg)
        localStorage.setItem('username', usernameReg)
        checkStatus();
    }

    return (
        <div>
            <h1 className="text-center m-5 p-3">Bonjour {name}</h1>
            <Card className="text-center m-5 p-5" style={{ width: '1000px' }}>
                <Card.Body>
                    <Card.Title><strong>Profile</strong></Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{ height: '80px' }}>Name: {name}</ListGroup.Item>
                    <ListGroup.Item>Username: {username}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#modalprofile">Set account</Card.Link>
                </Card.Body>
            </Card>
            <Card classname="text-center m-5 p-5">
                <Card.Body>
                    <Card.Link className="btn btn-danger m-3" onClick={remove}>delete my account</Card.Link>
                </Card.Body>
            </Card>

            <div className="modal fade" id="modalprofile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Set profile</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group row">
                                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" className="form-control" id="name" placeholder="name" onChange={(e) => { setNameReg(e.target.value) }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label for="name" className="col-sm-2 col-form-label">Username</label>
                                    <div class="col-sm-10">
                                        <input type="text" className="form-control" id="username" placeholder="username" onChange={(e) => { setUsernameReg(e.target.value) }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label for="mail" className="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="text" className="form-control" id="mail" placeholder="mail" onChange={(e) => { setEmailReg(e.target.value) }} required />
                                    </div>
                                </div>
                                <br />
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={removeAndSet}>Modify profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}