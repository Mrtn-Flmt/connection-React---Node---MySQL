import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function ButtonMessageAdmin(props) {
    
    var mid = props.mid;

    const navigation = useNavigate();

    function deleteCard() {
        console.log("remove the data");
        window.location.reload(false);
        Axios.delete(`http://localhost:1999/allmessage/${mid}`)
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