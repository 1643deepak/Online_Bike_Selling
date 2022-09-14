import React from "react";
import './home1.css';
import { Navbar } from "./navbar";
import Home1 from './bike1.png';
import Home2 from './bike2.png';
import Home3 from './bike3.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPersonBiking,faRightLong} from "@fortawesome/free-solid-svg-icons";

export function Homepage1(){
    return(
        <div className="container-fluid d1 ">
            <div className="row">

                <div className="home_PAGE_backImg">
                    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Home1} className="d-block w-100 " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Home2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Home3} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Home1} className="d-block w-100" alt="..." />
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators1" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators1" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>

                    {/* <button id="sell" className=" SellButton"> <FontAwesomeIcon className="Bike_ICON" icon={faPersonBiking}/><FontAwesomeIcon icon={faRightLong} className="arrow"/>Sell Bike</button> */}
                </div>

            </div>
        </div>
    );
}