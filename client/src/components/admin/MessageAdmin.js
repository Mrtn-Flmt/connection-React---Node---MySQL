import React, { Component } from 'react';
import ButtonMessageAdmin from './ButtonMessageAdmin'

export default class MessageAdmin extends Component {
    render() {
        var eid = this.props.eid;
        var mid = this.props.mid;
        var jobtitle = this.props.jobtitle;
        var name = this.props.name;
        var email = this.props.email;
        var message = this.props.message;

        return (
            <div className="bg-light m-5">
                <div id="card" className="card">
                    <div className="card-body">
                        <p><strong>jobtitle: </strong>{jobtitle}</p>
                        <p><stron>name: </stron>{name}</p>
                        <p><strong>email: </strong>{email}</p>
                        <p><strong>message: </strong>{message}</p>
                        <ButtonMessageAdmin
                            eid={eid}
                            mid={mid}
                            jobtitle={jobtitle}
                            name={name}
                            email={email}
                            message={message}
                        />
                    </div>
                </div>
            </div>
        )
    }
}