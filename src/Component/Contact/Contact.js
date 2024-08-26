import React from 'react';
import "./Contact.css";


function Contact() {
  return (
    <div id="contact">
        <div className='container' id="contact1">
          {/* content1 */}
           <div id="contact2">
              <h2 id="contact-h2">Contact Us</h2>
           </div>
           {/* content 2 */}
             <div className='row' id="contact-row">

              {/* Address */}
             <div className='col-md-4'>
            <div className='card mb-4' >
              <div className='card-body' id="contact-div-1">

               <div id="contact-div-1-2">
                   <h3 id="contact-h3-address">Address</h3>
                   <p id="contact-add-data">4th street, Perumalpuram, Tirunelveli.</p>
               </div>
              </div>
            </div>
          </div>

{/* Phone */}
<div className='col-md-4'>
<div className='card mb-4' >
              <div className='card-body' id="contact-div-2">
               <div id="contact-div-1-4">
                   <h3 id="contact-h3-phone">Phone</h3>
                   <p id="contact-phn-data">+91 0000000000</p>
               </div>
              </div>
            </div>
</div>

{/* Hours */}
<div className='col-md-4'>
<div className='card mb-4' >
              <div className='card-body' id="contact-div-3">
               <div id="contact-div-1-6">
                   <h3 id="contact-h3-time">Opening Hours</h3>
                   <p id="contact-time-data">Mon-Sun : 11Am - 11Pm;</p>
               </div>

              </div>
            </div>
          </div>
             </div>
           {/* content 3 */}

           <div id="content3-contact1">
               <div id="content3-contact2">
                  <div class="card" id="contact-form-card">
                    <form id="contact-form">
                  <div class="row g-3">

  <div class="col-6">
  <input class="form-control" id="content3--contact-input-text1" type="text" placeholder='Your Name' />
  </div>
  <div class="col-6">
  <input  class="form-control" id="content3--contact-input-phone1" type="number" placeholder='Phone Number' />
  </div>
  <div class="col-12">
  <input className='form-control' id="content3--contact-input-text2" type="text" placeholder='Address' />
  </div>
  <div class="col-12 mb-4">
  <textarea class="form-control" id="content3--contact-input-text3" type="text" placeholder='Message'></textarea>
  </div>
</div>
<button id="content3--contact-input-button">Submit</button>
</form>
                  </div>
               </div>
           </div>
        </div>    
    </div>
  )
}

export default Contact;

<span >
                    <div class="col-md-12">
                    <input id="content3--contact-input-text2" type="text" placeholder='Address' />
                    </div>
                    <div class="col-md-12">
                    <textarea id="content3--contact-input-text3" type="text" placeholder='Message'></textarea>
                    </div>
                    </span>


