import React, { Fragment } from 'react';
import './Header.css';
import '../BagianAtas/bagian-atas.css';
import Calender from '../Calender/Calender';

function Header() {
    return (
        <Fragment>
            <div className="bagian-atas">
                <div className="header">
                    <div className="arrow-left"></div>
                    <div className="alamat">
                        <p>ALAMAT PENGANTARAN</p>
                        <div className="nama-tempat">
                            Tokopedia Tower
                            <div className="arrow-down"></div>
                        </div>

                    </div>
                </div>
                <Calender />
            </div>
        </Fragment>
    );
}

export default Header;