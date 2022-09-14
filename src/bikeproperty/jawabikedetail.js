import React, { useState,useEffect } from 'react';
import './jawabikedetail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  Img1 from  './jawa1.png';
import Img2 from './jawa2.png';
import Img3 from './jawa3.png';
import Img4 from './jawa4.png';
import { Navbar } from "../navbar";
import { Link , useParams } from "react-router-dom";

 
export function Jawabikedetail(){
    const [bikename , setBikename] = useState('');
    const [bikemodel , setBikemodel] = useState('');
    const [price,setPrice] = useState('');
    const [address,setAddress] = useState('');
    const [PurchasingYear,setPurchasingYear] = useState('');
    const [kilometer,setKilometer] = useState('');
    const [ownername,setOwnername] = useState('');
    const [bikecondtion,setBikecondtion] = useState('');
    const { id } = useParams();
    useEffect(()=>{
        getBikes();
    });
    const getBikes = async() => {
        console.warn(id);
        var response = await fetch("http://localhost:3003/jawabikedetail/"+id);
        response = await response.json();
        setBikename(response[0].bikename);
        setBikemodel(response[0].bikemodel);
        setPrice(response[0].price);
        setAddress(response[0].address);
        setPurchasingYear(response[0].PurchasingYear);
        setKilometer(response[0].kilometer);
        setOwnername(response[0].ownername);
        setBikecondtion(response[0].bikecondtion);
    }
    return(
        <div>
            {/* <Navbar /> */}
            <div className="container">
                 <div className="row">
                     <div className="col-lg-8 col-md-12">

                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Img1} className="d-block w-100" id="jawa1" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Img2} className="d-block w-100" id="jawa1" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Img3} className="d-block w-100" id="jawa1" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Img4} className="d-block w-100" id="jawa1" alt="..." />
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                          
                        </div> 
                        <div className="TEXT_CON">
                            <h3 className="ml-4">Details</h3>
                            <div className="tx">
                                <p className="ml-5">Brand</p>
                                <p className="ml-5">Other Brands</p>
                                <p className="ml-5">Model</p>
                                <p className="ml-5">Others</p>
                            </div>
                            <div className="">
                                <h3 className="ml-4">
                                    Description
                                </h3>
                                <p className="ml-5">{bikecondtion}</p>

                            </div>

                        </div>


                    </div> 
                    <div className="col-lg-4  col-md-12">
                        

                        <div className="bac">
                            <div class="CONTENT">
                                <h2>₹{price}</h2>
                                <h3>{PurchasingYear}-{kilometer}KM</h3>
                                <p>{bikemodel}</p>
                               {/* <h6>Jawa 42 bs6</h6>  */}
                                <p>{address}</p></div>
                        </div>
                        <div className="bac">

                            <div class="CONTENT">
                                <h4>Seller description</h4>
                                <img src={Img1} className="user_chat"/>

                                <h6>{ownername}</h6>
                                <div className="bu ml-2 mb-4 mt-4 col-12">
                                    <button className="USER">Chat With Seller</button>
                                </div>
                            </div>

                        </div>

                        <div className="bac">
                            <div class="CONTENT">
                                <h6>Posted</h6>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.383335051896!2d76.99583421472124!3d11.084781492112707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f792636f82b5%3A0xdc86449e9fb48675!2sKGiSL%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1660580100435!5m2!1sen!2sin"></iframe></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>        
      
       


    );
}