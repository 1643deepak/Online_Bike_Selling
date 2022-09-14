import React,{useState,useEffect} from 'react';
import './home.css';
import Jawa from './image1.png';
import Heroxpluse from './image2.png';
import Honda from './image3.png';
import MT15 from './image4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Homepage1 } from "./home1";
import { Bajajbikes } from "./bike models/Bajaj";
import axios from "axios";

export function Homepage() {

    const [productdetails,setProductdetails] = useState([]);
      
    useEffect(()=>{
        getBikes();
        
    },[]);

    const getBikes = async() => {
        const response = await axios.get("http://localhost:3003/details");
        setProductdetails(response.data);
    }
    
    

    return (
        <div className="container-fluid">
            <Navbar />
            <Homepage1 />
            <div className="row">
                <div className="card1">
                    <div className="row">
                        <div className="col-lg-12">
                            <Link to="/home"><h3>More on Motorcycles</h3></Link>
                        </div>
                    </div>

                    <div className="row">
                        {productdetails.map((product, index) => (
                            
                        <div className="col-lg-3">
                            <div className="bike_card ">
                                <div className="bike_DE p-3">
                                    <img src={Jawa} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h3>₹{product.price}</h3>
                                    {/* <h3>{product.PurchasingYear}</h3> */}
                                    <h5>{product.PurchasingYear}-{product.kilometer}KM</h5>
                                    <Link to={"/jawabikedetail/"+product.id}> <h6 class="name">{product.bikename}</h6></Link>
                                </div>
                            </div>
                        </div>
                        ))}
                        {/* <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={Heroxpluse} className="img36" alt="..." />
                                </div>
                                <div className=" p-3">
                                    <h4>$1,0,000</h4>
                                    <p>2019-10,000 km</p>
                                    <Link to="/heroxpulse"><h6 className="name">Hero xpulse low km done</h6></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={Honda} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$40,000</h4>
                                    <p>2016-35,000 km</p>
                                    <h6 class="name">Honda CBZ Xtream</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="bike_card">
                                <div className="bike_DE p-3">
                                    <img src={MT15} className="img36" alt="..." />
                                </div>
                                <div className="p-3">
                                    <h4>$65,000</h4>
                                    <p>2021-8,000 km</p>
                                    <h6 class="name">New yamaha MT15 Vermillion color</h6>
                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Bajajbikes />
        </div>



    );
}