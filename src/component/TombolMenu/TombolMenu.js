import React, { Component } from 'react';
import './TombolMenu.css';

class TombolMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            launchIs: "tombol-launch active",
            dinnerIs: "tombol-dinner",
        };
        this.klikButtonLaunch = this.klikButtonLaunch.bind(this);
        this.klikButtonDinner = this.klikButtonDinner.bind(this);
    }

    klikButtonLaunch(){
        this.setState({ launchIs: "tombol-launch active", dinnerIs: "tombol-dinner" })
    }

    klikButtonDinner(){
        this.setState({ dinnerIs: "tombol-dinner active", launchIs: "tombol-launch" })
    }

    render(){
        return(
            <div className="tombol-menu">
                <button className={this.state.launchIs} onClick={this.klikButtonLaunch}> Launch </button>
                <button className={this.state.dinnerIs} onClick={this.klikButtonDinner}> Dinner </button>
            </div>
        );
    }
}

export default TombolMenu;