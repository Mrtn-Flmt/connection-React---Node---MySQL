import React, { Component } from 'react';
import ButtonCardAdmin from './ButtonCardAdmin'

export default class CardAdmin extends Component {
    render() {
        var cid = this.props.cid;
        var uid = this.props.uid;
        var jobtitle = this.props.jobtitle;
        var description = this.props.description;
        var society = this.props.society;
        var contract = this.props.contract;
        var city = this.props.city;
        var salary = this.props.salary;

        return (
            <div>
                <div id="card" className="card">
                    <div className="card-header">
                        {society}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{jobtitle}</h5>
                        <button className="btn outline-dark m-1" disabled>📃 {contract}</button>
                        <button className="btn outline-dark m-1" disabled>📌 {city}</button>
                        <button className="btn outline-dark m-1" disabled>💸 {salary}€/month</button>
                        <p>Description : {society}</p>
                        <div className="d-flex justify-content-end">
                            <ButtonCardAdmin
                                cid={cid}
                                uid={uid}
                                jobtitle={jobtitle}
                                description={description}
                                society={society}
                                contract={contract}
                                city={city}
                                salary={salary}
                            />
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}