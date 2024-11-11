import React from 'react';
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import footer_logo_1 from "./resturant_logo_1.png";
import footer_logo_2 from "./resturant_logo_2.png";
import footer_logo_3 from "./resturant_logo_3.png";


function Footer() {
  return (
    <div id="footer">
      <div id="footer1">
         <div id='footer-logo-content'>
           <div id="footer-line"></div>
              <div id="footer-div-1-1">
              <a className="footer-brand" id="footer-a" href="/"><img id="footer-img" src={footer_logo_1} alt={footer_logo_1} /> <img id="footer-img-1" src={footer_logo_2} alt={footer_logo_2} /> <img id="footer-img-2" src={footer_logo_3} alt={footer_logo_3} /> </a>
                   </div>
           <div id="footer-line"></div>
         </div>
         <div className='container' id="footer2">
             <div id="footer-div-2-1">
                <h6 id="footer2-h6-1">Our Address</h6>
                <p id="footer2-p">No.4 , First Street,
                Perumalpuram</p>
                <div id="footer2-div-2-2">
                    <div id="footer2-div-2-3">
                    <FaFacebookF id="footer-facebook-icon" />
                    </div>
                    <div id="footer2-div-2-4">
                    <FaInstagram id="footer-instagram-icon" />
                    </div>
                    <div id="footer2-div-2-5">
                    <FaTwitter id="footer-twitter-icon" />
                    </div>
                    <div id="footer2-div-2-6">
                    <FaWhatsapp id="footer-whatsapp-icon" />
                    </div>
                </div>
             </div>
             <div id="footer-div-2-2">
             <h6 id="footer2-h6-2">Order Online</h6>
             <p id="footer2-p">If You want to book a table, You can
             contact with our staff</p>
             <p id="footer2-p1">+91 0095006905</p>
             </div>
             <div id="footer-div-2-3">
             <h6 id="footer2-h6-3">Our Hours</h6>
             <p id="footer3-p">Mon-Fri  09:00 Am-10:00 Pm</p>
             <p id="footer3-p1">Sat-Sun  09:00 Am-10:00 Pm</p>
             </div>
         </div>
      </div>
    </div>
  )
}
export default Footer;


// <a className="footer-brand" id="footer-a" href="/"><a id='footer-ahref' href='/'>Chef's</a> <a id='footer-ahref1' href='/'>Kitchen</a></a>