import React, { Component } from "react";
import axios from 'axios';
import MessageAdmin from "./MessageAdmin";

var uid = localStorage.getItem('uid');

export default class MessagesAdmin extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        axios.get(`http://localhost:1999/message`, {
        })
            .then(res => {
                const messages = res.data;
                this.setState({ messages });
                messages.reverse();
            })
    }

    render() {
        return (
                <div className="col-xs-12 col-sm-12 col-md-10">
                    {this.state.messages.map(messages => (
                        <MessageAdmin
                            eid={messages.eid}
                            mid={messages.mid}
                            jobtitle={messages.jobtitle}
                            name={messages.name}
                            email={messages.email}
                            message={messages.message}
                        />
                    ))}
                </div>
        )
    }
}