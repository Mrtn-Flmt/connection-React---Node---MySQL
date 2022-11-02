import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ButtonCard(props) {
    const navigation = useNavigate();

    function navigateCard() {
        console.log("Navigation -> info card");
        localStorage.removeItem('eid');
        localStorage.removeItem('jobTitle');
        localStorage.removeItem('description');
        localStorage.removeItem('society');
        localStorage.removeItem('contract');
        localStorage.removeItem('city');
        localStorage.removeItem('salary')

        localStorage.setItem("eid", props.uid);
        localStorage.setItem("jobTitle", props.jobtitle);
        localStorage.setItem("description", props.description);
        localStorage.setItem("society", props.society);
        localStorage.setItem("contract", props.contract);
        localStorage.setItem("city", props.city);
        localStorage.setItem("salary", props.salary);
        navigation("/DescriptionCard");
    };

    return (
        <div>
            <button type="button" class="btn btn-primary" onClick={navigateCard}>
                Show More
            </button>
        </div>
    )
}
