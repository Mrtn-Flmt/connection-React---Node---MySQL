import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function ButtonMessage(props) {
    var eid = props.eid;
    var mid = props.mid;
    var jobtitle = props.jobtitle;
    var name = props.name;
    var email = props.email;
    var message = props.message;

    const navigation = useNavigate();

    function deleteCard() {
        console.log("remove the data");
        window.location.reload(false);
        Axios.delete(`http://localhost:1999/message/${mid}`)
            .then(res => {
                console.log("Data message deleted", res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button type="button" className="btn btn-primary m-3" onClick={deleteCard}>
                Delete
            </button>
        </div>
    )
}
