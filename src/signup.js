import React from "react";
import './signup.css';
import {Link} from "react-router-dom";
import axios from 'axios'; 
import { useState } from 'react';
export function Signuppage(){

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signupdata = () => {
        let datastring = { firstname: firstname, lastname: lastname, email: email, password: password };
        axios.post("http://localhost:3003/signup", datastring)
            .then(function (response) {
                if (response.data.status === 'inserted') {
                    alert('inserted');
                    window.location.reload();
                }
            });
    };

    return (
        <div className="sig">
            <div className="container ">

                <div className="card">
                    <div className="main active">
                        <div className="top-div">

                            <h2>Sign Up</h2>
                        </div>
                        <div className="input-text">
                            <input type="text" placeholder="firstname" require id="f_name" onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="input-text">
                            <input type="text" placeholder="Lastname" require id="l_name" onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div className="input-text">
                            <input type="text" placeholder="Email" require onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-text">
                            <input type="password" placeholder="Password" require onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-text">
                            <input type="password" placeholder="Confirm Password" require />
                        </div>
                        <div className="buttons">
                            <button onClick={signupdata}>Sign Up</button>
                        </div>
                    </div>
                    <div className="sign-in">
                        <Link to="/login"> <p>Already have an account? Login</p></Link>
                    </div>
                </div>

            </div>
        </div>


    );
}