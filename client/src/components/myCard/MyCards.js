import React, { Component } from "react";
import axios from 'axios';
import MyCard from './MyCard'

var uid = localStorage.getItem('uid');

export default class MyCards extends Component {

    state = {
        cards: []
    }

    componentDidMount() {
        
        axios.get(`http://localhost:1999/mycard/${uid}`, {
        })
            .then(res => {
                const cards = res.data;
                this.setState({ cards });
                cards.reverse();
            })
            
    }

    render() {
        
        return (
                <div className="col-xs-12 col-sm-12 col-md-10">
                    {this.state.cards.map(card => (
                        <MyCard
                            uid={card.uid}
                            cid={card.cid}
                            society={card.society}
                            jobtitle={card.jobtitle}
                            contract={card.contract}
                            city={card.city}
                            salary={card.salary}
                            description={card.description}
                        />
                    ))}
                </div>
        )
    }
}
