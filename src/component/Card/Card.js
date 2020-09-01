import React, { Fragment, Component } from 'react';
import './Card.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

class Card extends Component {

    render() {
        return <Fragment>
            <div className="card">
            <img src="https://lh3.googleusercontent.com/proxy/HtUA7ERHvhc-6pdUG01c39vaKmol-wA9UPkCZx4Iqe0jv7E_3V-T7w5ydTydqpfE9acIYc7RLSZ6hsZeMQkJCK6z-2Dq78qN_RvLYojwoKJxyLTxNkaIWKXGtXBJG0Ki8emR8w" alt=""/>
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