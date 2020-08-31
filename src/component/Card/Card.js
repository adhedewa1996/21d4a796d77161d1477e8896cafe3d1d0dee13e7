import React from 'react';
import './Card.css';

function Card() {
    return(
        <div className="card">
            <img src="https://lh3.googleusercontent.com/proxy/6sK68pvAyWDiJNJhMNAx0gpytfe7sVBC5wyW97T566S5a7zVpBdFXG_PES8h-ElRdExWZnSsYarwx_Q5u-QnYE-gpBLbetlVfGGJdjjVuagpfyjcn9S9BqI7gbM3fERqBYpEGA" alt=""/>
            <div className="info-card">
                <div className="rating">5</div>
                <div className="food-name">Rosted Chicken With Scrambled Eggs</div>
                <div className="by-name">by Kulina ~ Uptown Launch</div>
            </div>
            <div className="info-order">
                <div className="food-price">Rp 35.000</div>
                <div className="add">ADD +</div>
            </div>
        </div>
    );
}

export default Card;