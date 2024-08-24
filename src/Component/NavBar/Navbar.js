import React from 'react';
import "./Navbar.css";
import { BsFillTelephoneFill } from "react-icons/bs";

function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg" id="navs">
  <div className="container">
    <a className="navbar-brand" id="navbar" href="/"><a id='navbar-ahref' href='/'>Chef's</a> <a id='navbar-ahref1' href='/'>Kitchen</a></a>
    <button className="navbar-toggler" id="nav-tog-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0" id="ul-navbar">
        <li className="nav-item">
          <a className="nav-link" id="nav-link"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="nav-link" href="/menu">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="nav-link" href="/chef">Chef</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="nav-link" href="/contact">Contact Us</a>
        </li>
        <div  id="phn-flex">
      <BsFillTelephoneFill id="phone_icons" />
      <p id="phone_num">+91 000000000</p>
      </div>
      <div id="navbar-button-div">
        <button id="navbar-button">Request A Call</button>
      </div>
      </ul>
      
    </div>
  </div>
  
</nav>

  )
}

export default Navbar


//

//