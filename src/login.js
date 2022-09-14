import React, { useState } from "react";
import './login.css';
import userLogo from './38728.png';
import { Link } from "react-router-dom";
import axios from "axios";
export function Loginpage(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const adddata =()=>{
        let datastring={email:email,password:password}
        axios.post("http://localhost:3003/login" ,datastring).then(function(res){
            if(res.data.status==='error'){
                alert("invalid password")
            }
            else if(res.data.status==='correct'){
                alert("login succesfully");
                window.location.href="/home";
            }
            if(res.data.status==='error1'){
                alert("invalid email");
            }
        })
    }


return(
          
        <div className="login_ground row">

            <div className="login_card">
                <img src={userLogo} class="user_logo" />
                <div>
                    <input type="text" id="email1" placeholder="Continue with Email" name="Email" onChange={(e) =>setEmail (e.target.value)} />

                </div>
                <div>
                    <input type="password" id="password" placeholder="password" name="password"  className="password1"onChange={(e) =>setPassword (e.target.value)} />
                </div>
               <button onClick={adddata}>Login</button><br />
                <Link to="/signup"><p className="login_with_Email">New USer Signup</p></Link>
                <p>All your personal details are safe with us</p>

                <p className="login_det"> <span className="login_bottom">If you continue, you are accepting</span>OLX Terms and Conditions and Privacy Policy</p>
            </div>

        </div>

       
       

    );
}