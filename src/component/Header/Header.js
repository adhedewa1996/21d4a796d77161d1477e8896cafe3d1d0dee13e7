import React, { Fragment, Component } from 'react';
import './Header.css';
import '../BagianAtas/bagian-atas.css';
import Calender from '../Calender/Calender';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Header extends Component {
    render(){
        return (
            <Fragment>
                <div className="bagian-atas">
                    <div className="header">
                        <div className="arrow-left">
                            <ArrowBackIcon />
                        </div>
                        <div className="alamat">
                            <p>ALAMAT PENGANTARAN</p>
                            <div className="nama-tempat">
                                Tokopedia Tower
                                <div className="arrow-down">
                                    <ExpandMoreIcon onClick={this.props.setIsOpen}></ExpandMoreIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Calender />
                </div>
            </Fragment>
        );
    }
}

export default Header;