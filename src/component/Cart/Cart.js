import React, { Fragment, Component } from 'react';
import './Cart.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Cart extends Component {

    render() {
        return <Fragment>
            <div className="blur"></div>
            <div className="cart">
                <div className="info-cart">
                    <div className="atas">
                        <div className="jumlah"> { this.props.clicks } Items | {'\u00A0'} </div>
                        <div className="total"> Rp 125.000 </div>
                    </div>
                    <div className="bawah"> Termasuk ongkos kirim </div>
                </div>
                <div className="icon"> <ShoppingCartIcon /> <ArrowForwardIosIcon/> </div>
            </div>
        </Fragment>
    }
}

export default Cart;