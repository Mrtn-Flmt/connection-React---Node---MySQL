import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function ButtonUserAdmin(props) {
    var uid = props.uid;
    var name = props.name;
    var username = props.username;
    var email = props.email;
    var password = props.password;
    var status = props.status;

    const navigation = useNavigate();

    function deleteCard() {
        console.log("remove the data");
        window.location.reload(false);
        Axios.delete(`http://localhost:1999/users/${uid}`)
            .then(res => {
                console.log("Data users deleted", res)
            })
            .catch(err => console.log(err))
    }

    // function updateCard() {
    //     console.log("set the data");
    // }

    return (
        <div>
            {/* <button type="button" className="btn btn-primary " onClick={updateCard}>
                Set
            </button> */}
            <button type="button" className="btn btn-primary m-3" onClick={deleteCard}>
                Delete
            </button>
        </div>
    )
}
