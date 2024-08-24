import React from 'react';
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

function Contact() {
  return (
    <div id="contact">
        <div className='container' id="contact1">
          {/* content1 */}
           <div id="contact2">
              <h2 id="contact-h2">Contact Us</h2>
           </div>
           {/* content 2 */}
           <div id="contact3">
             <div id="contact-div-1">
               <div id="contact-div-1-1">
                    <FaLocationDot id="contact_loaction_icon" />
               </div>
               <div id="contact-div-1-2">
                   <h3 id="contact-h3-address">Address</h3>
                   <p id="contact-add-data">4th street, Perumalpuram, Tirunelveli.</p>
               </div>
             </div>
             <div id="contact-div-2">
             <div id="contact-div-1-3">
                    <FaPhoneAlt id="contact_phone_icon" />
               </div>
               <div id="contact-div-1-4">
                   <h3 id="contact-h3-phone">Phone</h3>
                   <p id="contact-phn-data">+91 0000000000</p>
               </div>
             </div>
             <div id="contact-div-3">
             <div id="contact-div-1-5">
                    <IoIosTime id="contact_time_icon" />
               </div>
               <div id="contact-div-1-6">
                   <h3 id="contact-h3-time">Opening Hours</h3>
                   <p id="contact-time-data">Mon-Sun : 11Am - 23Pm;</p>
               </div>
             </div>
           </div>
           {/* content 3 */}

           <div id="content3-contact1">
               <div id="content3-contact2">
                  <form className='col-lg-12' id="content3-contract2">
                    <span className='col-lg-12'  id="content3-span-contract3">
                    <input id="content3--contact-input-text1" type="text" placeholder='Your Name' />
                    <input id="content3--contact-input-phone1" type="number" placeholder='Phone Number' />
                    </span>
                    <input className='col-sm-4 col-md-4 col-lg-12' id="content3--contact-input-text2" type="text" placeholder='Address' />
                    <textarea className='col-sm-4 col-md-4 col-lg-12' id="content3--contact-input-text3" type="text" placeholder='Message'></textarea>
                    <button id="content3--contact-input-button">Submit</button>
                  </form>

               </div>
           </div>
        </div>    
    </div>
  )
}

export default Contact;