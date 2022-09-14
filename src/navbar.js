import React from "react";
import './navbar.css';
import olximg from './olx.png';
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
export function Navbar() {

  return (
       
    <div className="fluid BG">
      <div className="row">
        <div className="col-lg-2">
          <img src={olximg} class=" OLX_IMG1" />

        </div>
        <div className="col-lg-2  DropDown">
          <select name="search" id="cars" maxlength="40" placeholder="Search...">
            <option>Tamil Nadu</option>
            <option>Coimbatore</option>
            <option>Gandhipuram</option>
          </select>
        </div>
        <div className="col-lg-2">
          <input type="text" name="search" id="SCHBTN" placeholder="Find bikes" required />
          <label id="inputSCHICON"><FontAwesomeIcon icon={faSearch} className="SC_ICon" /></label>

        </div>
        <div className="col-lg-2 ml-auto">


        </div>
        <div className="col-lg-2">
          <select name="search" id="BIke" placeholder="Language">
            <option>ENGLISH </option>
            <option>TAMIL</option>
          </select>
        </div>
        <div className="col-lg-2">
          <Link to='/bikeformdet'><button className="sell_button">< FontAwesomeIcon icon={faPlus} className="plus_icon" />SELL</button></Link>
        </div>

      </div>

    </div>



    

  );
}