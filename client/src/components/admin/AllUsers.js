import React, { Component } from "react";
import axios from 'axios';
import AllUser from "./AllUser";

export default class AllUsers extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:1999/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            }
            )
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-10">
                {this.state.users.map(user => (
                    <AllUser
                        uid={user.uid}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        password={user.password}
                        status={user.status}
                    />
                ))}
            </div>
        )
    }
}