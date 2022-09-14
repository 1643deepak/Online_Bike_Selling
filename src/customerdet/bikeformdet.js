import axios from "axios";
import React, { useState } from "react";
import './bikeformdet.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export function Bikeformdet() {

    const [bikename, setBikeName] = useState('');
    const [bikemodel, setBikeModel] = useState('');
    const [PurchasingYear, setPurchasingYear] = useState('');
    const [kilometer, setKilometer] = useState('');
    const [ownername, setOwnername] = useState('');
    const [bikecondtion, setBikecondtion] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');


    const bikeformdetdat = () => {
        
        let datastring = { bikename: bikename, bikemodel: bikemodel, PurchasingYear: PurchasingYear, kilometer: kilometer, ownername: ownername, bikecondtion: bikecondtion, price: price, address: address,image:image};
        axios.post("http://localhost:3003/bikeformdet", datastring)
            .then(function (response) {
                if (response.data.status === 'inserted') {
                    alert('inserted');
                    window.location.reload();
                }
            });
            
           
    };

    return (
        <div className=" text-center">
            <div >
                <div>
                    <h1>Customer Details</h1>
                </div>
                <form className="formdet">
                    <div className="row">
                        <div className="col-lg-2">
                            <label>ProductName</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="  m-2" onChange={(e) => setBikeName(e.target.value)} />
                        </div>


                        <div className="col-lg-2">
                            <label>ProductModel</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="m-2" onChange={(e) => setBikeModel(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <label>PurchasingYear:</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="m-2" onChange={(e) => setPurchasingYear(e.target.value)} />
                        </div>
                        <div className="col-lg-2">
                            <label>kilometer:</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="m-2" onChange={(e) => setKilometer(e.target.value)} />
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <label>ownername:</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="m-2" onChange={(e) => setOwnername(e.target.value)} />
                        </div>
                        <div className="col-lg-2">
                            <label>Bikecondtion:</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="m-2" onChange={(e) => setBikecondtion(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <label>price:</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="m-2" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="col-lg-2">
                            <label>Address:</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="m-2" onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="col-lg-2">
                            <input type="file" className="m-2" onChange={(e) => setImage(e.target.value)} />
                        </div>

                    </div>
                    <div className="subm">
                        <button className="btn btn-danger " onClick={bikeformdetdat}>Submit</button>
                    </div>


                </form>


            </div>




        </div>

    );
}