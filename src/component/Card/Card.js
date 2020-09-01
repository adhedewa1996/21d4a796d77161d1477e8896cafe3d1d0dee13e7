import React, { Fragment, Component } from 'react';
import './Card.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

class Card extends Component {

    render() {
        return <Fragment>
            <div className="card">
            <img src="https://lh3.googleusercontent.com/proxy/6sK68pvAyWDiJNJhMNAx0gpytfe7sVBC5wyW97T566S5a7zVpBdFXG_PES8h-ElRdExWZnSsYarwx_Q5u-QnYE-gpBLbetlVfGGJdjjVuagpfyjcn9S9BqI7gbM3fERqBYpEGA" alt=""/>
            <div className="info-card">
                <div className="rating">
                    4.5
                    <StarIcon className="icon"/>
                    <StarIcon className="icon"/>
                    <StarIcon className="icon"/>
                    <StarIcon className="icon"/>
                    <StarHalfIcon className="icon"/>
                    </div>
                    <div className="food-name"> Rosted Chicken With Scrambled Eggs </div>
                    <div className="by-name"> by Kulina ~ Uptown Launch </div>
                </div>
                <div className="info-order">
                    <div className="food-price" >Rp 35.000 </div>
                    <button className="add" onClick={this.props.IncrementItem}> ADD + </button>
                </div>
            </div>
        </Fragment>
    }
}

export default Card;