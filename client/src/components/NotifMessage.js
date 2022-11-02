import React, { Component } from "react";
import axios from 'axios';

var uid = localStorage.getItem('uid');

export default class NotifMessage extends Component {

    state = {
        messages: [],
        longeur: 0
    }

    componentDidMount() {
        axios.get(`http://localhost:1999/message/${uid}`, {
        })
            .then(res => {
                const messages = res.data;
                const longeur = res.data.length;
                this.setState({ messages });
                this.setState({ longeur })
                messages.reverse();
            })
    }

    render() {
        if (this.state.longeur <= 0) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="notif">
                    <span className="badge badge-light d-flex justify-content-center">
                        {this.state.longeur}
                    </span>
                </div>
            )
        }
    }
}
