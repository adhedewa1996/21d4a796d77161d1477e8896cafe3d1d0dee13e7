import React, { Component } from 'react';
import './Modal.css';
import CloseIcon from '@material-ui/icons/Close';
import RoomIcon from '@material-ui/icons/Room';

class Modal extends Component {
  render (){
    return <div className="modal">
        <div className="x" onClick={this.props.setIsOpen}></div>
        <div className="modal-body y">
            <CloseIcon className="close" onClick={this.props.setIsOpen}/>
            <div className="title">Cek makanan yang tersedia di lokasi kamu!</div>
            <input type="text"/>
            <div className="lokasi">
                <RoomIcon className="icon"/>
                <div className="info">
                    <div className="nama-tempat"> Kulina </div>
                    <div className="nama-jalan garis"> Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190 </div>
                </div>
            </div>
            <div className="lokasi">
                <RoomIcon className="icon"/>
                <div className="info">
                    <div className="nama-tempat"> Apartemen Pancoran Riverside </div>
                    <div className="nama-jalan garis"> Jl. Pengadegan Timur I No.30, RT.12/RW.1, Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12770 </div>
                </div>
            </div>
            <div className="lokasi">
                <RoomIcon className="icon"/>
                <div className="info">
                    <div className="nama-tempat"> Jalan Tulodong Atas 28 </div>
                    <div className="nama-jalan garis"> Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190 </div>
                </div>
            </div>
            <div className="lokasi">
                <RoomIcon className="icon"/>
                <div className="info">
                    <div className="nama-tempat"> Block 71 Jakarta </div>
                    <div className="nama-jalan garis"> Ariobimo Sentral, South Jakarta, RT.9/RW.4, East Kuningan, Jakarta, 12950 </div>
                </div>
            </div>
        </div>
    </div>
  }
}

export default Modal;
