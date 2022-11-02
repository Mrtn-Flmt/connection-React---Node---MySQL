import React, { useState } from 'react';
import Axios from 'axios';
import uuid from 'react-uuid';

function AddCard() {
    const cid = uuid();
    const uid = localStorage.getItem('uid');
    const [jobtitleReg, setJobtitleReg] = useState("")
    const [societyReg, setSocietyReg] = useState("")
    const [cityReg, setCityReg] = useState("")
    const [contractReg, setContractReg] = useState("")
    const [salaryReg, setSalaryReg] = useState("")
    const [descriptionReg, setDescriptionReg] = useState("")
    const email = localStorage.getItem('email')

    const auth = localStorage.getItem('isEmployer');
    const admin = localStorage.getItem('isAdmin');

    function sendcard() {
        if (jobtitleReg == "" || societyReg == "" || cityReg == "" || contractReg == "" || salaryReg == "" || descriptionReg == "" || uid == "") {
            console.log("annonce non valide");
        } else {
            Axios.post('http://localhost:1999/sendcard', {
                uid: uid,
                cid: cid,
                jobtitle: jobtitleReg,
                society: societyReg,
                city: cityReg,
                contract: contractReg,
                salary: salaryReg,
                description: descriptionReg,
                email: email
            }).then((response) => {
                console.log(response);
            })
        }
    }

    if (auth || admin) {
        return (
            <div className='container m-3'>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#a">
                            Créer une annonce
                        </button>
                    </div>

                    <div className="modal fade" id="a" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Détails de votre annonce</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group row">
                                            <label for="jobtitle" className="col-sm-2 col-form-label">JobTitle</label>
                                            <div class="col-sm-10">
                                                <input type="text" className="form-control" id="jobtitle" placeholder="JobTitle" onChange={(e) => { setJobtitleReg(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="society" className="col-sm-2 col-form-label">Society</label>
                                            <div class="col-sm-10">
                                                <input type="text" className="form-control" id="society" placeholder="Society" onChange={(e) => { setSocietyReg(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="city" className="col-sm-2 col-form-label">City</label>
                                            <div class="col-sm-10">
                                                <input type="text" className="form-control" id="city" placeholder="City" onChange={(e) => { setCityReg(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" for="inlineFormCustomSelect">Contract</label>
                                            <div class="col-sm-10">
                                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => { setContractReg(e.target.value) }} required>
                                                    <option selected disabled value="">---</option>
                                                    <option value="CDI">CDI</option>
                                                    <option value="Alternance">Alternance</option>
                                                    <option value="CDD">CDD</option>
                                                    <option value="Stage">Stage</option>
                                                    <option value="Intérim">Intérim</option>
                                                    <option value="Franchise">Franchise</option>
                                                    <option value="Indépendant">Indépendant</option>
                                                    <option value="Associé">Associé</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="salary" className="col-sm-2 col-form-label">Salary</label>
                                            <div class="col-sm-10">
                                                <input type="number" id="salary" class="form-control" placeholder="Salary" onChange={(e) => { setSalaryReg(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label for="addDescription">Description</label>
                                            <textarea className="form-control" id="addDescription" rows="3" onChange={(e) => { setDescriptionReg(e.target.value) }} required></textarea>
                                        </div>
                                        <br />
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary" onClick={sendcard}> Poster l'annonce</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
            </div>
        );
    }
}

export default AddCard;