import React, { Component } from 'react';
import './Modal.css';
import CloseIcon from '@material-ui/icons/Close';
import RoomIcon from '@material-ui/icons/Room';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    handleChange = (e) => {
        if(e.target.value.length >= 3){
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }
    }

    render (){
        return <div className="modal">
            <div className="x" onClick={this.props.setIsOpen}></div>
            <div className="modal-body y">
                <CloseIcon className="close" onClick={this.props.setIsOpen}/>
                <div className="title">Cek makanan yang tersedia di lokasi kamu!</div>
                <div className="input-icon">
                    <RoomIcon className="icon"/>
                    <input type="text" onChange={this.handleChange}/>
                </div>
                {
                    this.state.show != true ?
                    <div> </div> :
                    <div className="lokasi">
                        <RoomIcon className="icon"/>
                        <div className="info">
                            <div className="nama-tempat"> Kulina </div>
                            <div className="nama-jalan garis"> Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190 </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    }
}

export default Modal;
