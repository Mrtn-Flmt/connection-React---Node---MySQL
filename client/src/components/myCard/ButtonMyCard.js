import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function ButtonMyCard(props) {
    var uid = props.uid;
    var cid = props.cid;
    var jobtitle = props.jobtitle;
    var description = props.description;
    var society = props.society;
    var contract = props.contract;
    var city = props.city;
    var salary = props.salary;

    const navigation = useNavigate();

    function deleteCard() {
        console.log("remove the data");
        window.location.reload(false);
        Axios.delete(`http://localhost:1999/mycard/${cid}`)
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
