import React from 'react'
import Navigation from '../components/Navigation'
import SendMessage from '../components/SendMessage';
import Footer from '../components/Footer';


export default function DescriptionCard() {
    const jobTitle = localStorage.getItem('jobTitle');
    const description = localStorage.getItem("description");
    const society = localStorage.getItem("society");
    const contract = localStorage.getItem("contract");
    const city = localStorage.getItem("city");
    const salary = localStorage.getItem("salary");

    return (
        <div>
            <Navigation />
            <div className="container">
                <h1>InfoCard</h1>
                <br></br>
                <h3>JobTitle:</h3>
                <h4>{jobTitle}</h4>
            </div>
            <br></br>
            <div className="container">
                <h3>society:</h3>
                <h4>{society}</h4>
            </div>
            <br></br>
            <div className="container">
                <h3>contract:</h3>
                <h4>{contract}</h4>
            </div>
            <br></br>
            <div className="container">
                <h3>city:</h3>
                <h4>{city}</h4>
            </div>
            <br></br>
            <div className="container">
                <h3>salary:</h3>
                <h4>{salary}</h4>
            </div>
            <br></br>
            <div className="container">
                <h3>description:</h3>
                <h4>{description}</h4>
            </div>
            <br></br>
            <SendMessage />
            <br></br>
            <Footer />
        </div>
    )
}