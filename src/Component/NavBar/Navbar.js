import React from 'react';
import "./Navbar.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "./logo.png"

function Navbar() {


  return (


 
<nav class="navbar navbar-expand-lg" id="navs">
  <div class="container">
  <a className="navbar-brand" id="navbar" href="/">+91 000000000</a>
  <button className="navbar-toggler" id="nav-tog-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" ></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="ul-navbar">
      <li className="nav-item mx-2">
          <a className="nav-link" id="nav-link"  href="/">Home</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" id="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" id="nav-link" href="/menu">Menu</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" id="nav-link" href="/branches">Branches</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" id="nav-link" href="/contact">Contact Us</a>
        </li>
      </ul>
      <div class="d-flex" id="navbar-2">
      <div id="navbar-button-div">
        <button id="navbar-button">Reserved A Table</button>
      </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar


