import React from 'react';
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaWhatsapp, FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Footer() {
  return (
    <div id="footer">
         <div id="footer1">
             <section id="footer-section-1">
                   <div id="footer-div-1-1">
                   <a className="footer-brand" id="footer-a" href="/"><a id='footer-ahref' href='/'>Chef's</a> <a id='footer-ahref1' href='/'>Kitchen</a></a>
                   </div>
                   <div id="footer-div-1-2">
                         <p> We offer quality food chart and help our customers maintain a healthy food habit. We offer quality food chart and help our customers maintain a healthy food habit. </p>
                   </div>
                  
             </section>
             <section id="footer-section-2">
             
                     <div id="footer-div-2-1">
                     <h3 id="footer-head-1">Use Links</h3>
                     </div>
                     <div id="footer-div-2-2">
                     <a href="/" id="footer-quick-1">Home</a>
                     <a href="/" id="footer-quick-1">About Us</a>
                     <a href="/" id="footer-quick-1">Menu</a>  
                     <a href="/" id="footer-quick-1">Chef</a> 
                     </div>
                </section>
                <section id="footer-section-3">
                    <div id="footer-div-3-1">
                    <h3 id="footer-head-3">Contact Us</h3>
                    </div>
                    <div id="footer-div-3-2">
                       <div id="footer-home-icon-add">
                           <FaHome id="footer-home-icon" />
                           <p id="footer-home-p">1/111, Main Road, LLL, Tirnelveli. 1/111, Main Road, LLL, Tirnelveli.</p>
                       </div>
                       <div id="footer-email-icon-add">
                           <MdEmail id="footer-email-icon" />
                           <p id="footer-email-p">demo@gmail.com</p>
                       </div>
                       <div id="footer-phone-icon-add">
                           <FaPhoneAlt id="footer-phone-icon" />
                           <p id="footer-phone-p">+91 0000000000</p>
                       </div>
                    </div>
                </section>
                <section id="footer-section-4">
                <div id="footer-div-4-1">
                    <h3 id="footer-head-4">Follow Us</h3>
                    </div>
                    <div id="footer-div-1-3">
                       <div id="footer-div-icon1">
                       <FaFacebookF id="footer-facebook-icon" />
                       </div>
                       <div id="footer-div-icon2">
                       <FaInstagram id="footer-instagram-icon" />
                       </div>
                       <div id="footer-div-icon3">
                       <FaTwitter id="footer-twitter-icon" />
                       </div>
                       <div id="footer-div-icon4">
                       <FaWhatsapp id="footer-twitter-icon" />
                       </div>
                   </div>
                </section>
         </div>
    </div>
  )
}
export default Footer;