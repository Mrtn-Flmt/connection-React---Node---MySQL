import React, { Component } from 'react';
import ButtonUserAdmin from './ButtonUserAdmin'

export default class AllUser extends Component {
    render() {
        var uid = this.props.uid;
        var name = this.props.name;
        var username = this.props.username;
        var email = this.props.email;
        var password = this.props.password;
        var status = this.props.status;

        return (
            <div>
                <div id="card" className="card">
                    <div className="card-header">
                        {uid}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name:</h5>
                        <p>{name}</p>
                        <br />
                        <h5>UserName:</h5>
                        <p>{username}</p>
                        <br />
                        <h5>Email:</h5>
                        <p>{email}</p>
                        <div className="d-flex justify-content-end">
                            <ButtonUserAdmin
                                uid={uid}
                                name={name}
                                username={username}
                                email={email}
                                password={password}
                                status={status}
                            />
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}