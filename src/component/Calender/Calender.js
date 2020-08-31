import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Calender.css';

function Calender(){
    return(
        <Swiper  >
            <SwiperSlide className="calender">
                <div className="day">
                    SEN
                    <div className="date">10</div>
                </div>
                <div className="day">
                    SEL
                    <div className="date">11</div>
                </div>
                <div className="day">
                    RAB
                    <div className="date">12</div>
                </div>
                <div className="day active">
                    KAM
                    <div className="date">13</div>
                </div>
                <div className="day">
                    JUM
                    <div className="date">14</div>
                </div>
                <div className="day disable">
                    SAB
                    <div className="date">15</div>
                </div>
                <div className="day disable">
                    MIN
                    <div className="date">16</div>
                </div>
                <div className="day">
                    SEN
                    <div className="date">17</div>
                </div>
                <div className="day">
                    SEL
                    <div className="date">18</div>
                </div>
                <div className="day">
                    RAB
                    <div className="date">19</div>
                </div>
                <div className="day">
                    KAM
                    <div className="date">20</div>
                </div>
                <div className="day">
                    JUM
                    <div className="date">21</div>
                </div>
                <div className="day disable">
                    SAB
                    <div className="date">22</div>
                </div>
                <div className="day disable">
                    MIN
                    <div className="date">23</div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Calender;