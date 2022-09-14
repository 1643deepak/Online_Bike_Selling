import React from "react";
import './Bajaj.css';
import Img1 from './pulsar 150.png';
import Img2 from './ns200.png';
import Img3 from './ns160.png';
import Img4 from './rs200.png';
import Img5 from './discover.png';
import Img6 from './dominar.png';
import Img7 from './Avanger150.png';
import Img8 from './pulsar180.png';
import {Link} from "react-router-dom";
 export function Bajajbikes(){
    return(
        
             
        <div className="container-fluid">
            <div className="row">
                <div className="card1">
                    <div className="row">
                        <div className="col-lg-12">
                        <Link to='./bike models/Bajaj' > <h4>Bajajbikes</h4></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 ">
                            <div className="bike_card ">
                                <div className="bike_DE ">
                                    <img src={Img1} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$70,000</h4>
                                    <p>2018-20,000 km</p>
                                    <h6>Pulsar 150</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card ">
                                <div className="bike_DE p-3 ">
                                    <img src={Img2} className="img36" alt="..." />
                                </div>
                                <div className=" p-3">
                                    <h4>$95,000</h4>
                                    <p>2021-9,000 km</p>
                                    <h6>NS 200</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={Img3} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$1,10,000</h4>
                                    <p>2020-7,000 km</p>
                                    <h6>NS 150</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={Img4} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$1,10,000</h4>
                                    <p>2020-7,000 km</p>
                                    <h6>RS 200</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card1">
                    {/* <div className="row">
                        <div className="col-lg-12">
                        <Link to='./bike models/Bajaj' > <h4>Bajajbikes</h4></Link>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-3 ">
                            <div className="bike_card ">
                                <div className="bike_DE p-3">
                                    <img src={Img5} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$1,10,000</h4>
                                    <p>2020-7,000 km</p>
                                    <h6>Discover</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={Img6} className="img36" alt="..." />
                                </div>
                                <div className=" p-3">
                                    <h4>$1,10,000</h4>
                                    <p>2020-7,000 km</p>
                                    <h6>Dominar 400</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={Img7} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$1,10,000</h4>
                                    <p>2020-7,000 km</p>
                                    <h6>Avanger 150</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={Img8} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$1,10,000</h4>
                                    <p>2020-7,000 km</p>
                                    <h6></h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>

           




    );
 }
