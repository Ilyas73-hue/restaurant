import React from 'react';
import "./Chef.css";
import chef1 from "./chef_img_1.png";
import chef3 from  "./chef_img_3.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


function Chef() {

  const chef = [{
    "Name": "Name", 
    "Designation": "Designation",
    "image":`${chef1}`
  },
  {
    "Name": "Name", 
    "Designation": "Designation",
    "image":`${chef1}`
  },
  {
    "Name": "Name", 
    "Designation": "Designation",
    "image":`${chef3}`
  },
  {
    "Name": "Name", 
    "Designation": "Designation",
    "image":`${chef3}`
  }
]

  return (
    <div id="chef">
      <div className='container' id="chef1">

           {/* section1 */}

           <section id="section1-chef1">
             <h3 id="chef-h1">Our Master Chef's</h3>
           </section>
           
           {/* section2 */}
           
           <section id="section-chef-2">
           <div class="row gy-4 md-4">
            {
              chef.map((item) => (
                <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card" id="chef-card">
                  <img  src={item.image} class="card-img-top" id="chef-card-img-top" alt="..." />
                  <div class="card-body" id="chef-card-body">
                    <h5 class="card-title" id='chef-card-title'>{item.Name}</h5>
                    <h6 class="card-title" id='chef-card-title'>{item.Designation}</h6>
                    <div id="chef-icons">
                     <div id="chef-facebook-icon">
                     <FaFacebookF id="chef-facebook-icons1" /> 
                     </div>
                     <div id="chef-twitter-icon">
                     <FaTwitter id="chef-twitter-icons1" /> 
                     </div>
                     <div id="chef-instagram-icon">
                     <FaInstagram id="chef-instagram-icons1" /> 
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
     </div>
           </section>
      </div>
    </div>
  )
}

export default Chef;


{/* <section id="chef_section_1">
<div id="chef_div_1">
  <img id="chef_img_1" src={chef1} alt={chef1} />
</div>
<div  id="chef_div_2">
   <h2 id="chef_h2"><u id="chef_u">Chef</u> John</h2>
    <button id="chef_line"></button>
    <p id="chef_para">Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat."</p>
    <div id="chef-div-2">
      <div id="chef-div-3">
          <div id="chef-div-5">
          <MdEmail id="chef-email" />
          </div>
          <div id="chef-div-6">
            <p id="chef-p1">chef_john@gmail.com</p>
          </div>
      </div>
      <div id="chef-div-4">
          <div id="chef-div-7">
          <MdLocalPhone id="chef-phone" />
          </div>
          <div id="chef-div-8">
           <p id="chef-p2">+91 0000000000</p>
          </div>
      </div>
    </div>
</div>
</section>
<section id="chef_section_2">
<div id="chef_div_9">
<h2 id="chef_h2"><u id="chef_u">Chef</u> Meena</h2>
    <button id="chef_line"></button>
    <p id="chef_para">Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat."</p>
    <div id="chef-div-2">
      <div id="chef-div-3">
          <div id="chef-div-5">
          <MdEmail id="chef-email" />
          </div>
          <div id="chef-div-6">
            <p id="chef-p1">chef_menna@gmail.com</p>
          </div>
      </div>
      <div id="chef-div-4">
          <div id="chef-div-7">
          <MdLocalPhone id="chef-phone" />
          </div>
          <div id="chef-div-8">
           <p id="chef-p2">+91 0000000000</p>
          </div>
      </div>
    </div>
</div>
<div id="chef_div_10">
<img id="chef_img_1" src={chef2} alt={chef2} />
</div>   
</section>
<section id="chef_section_3">
<div id="chef_div_11">
<img id="chef_img_1" src={chef3} alt={chef3} />
</div>
<div id="chef_div_12">
<h2 id="chef_h2"><u id="chef_u">Chef</u> Joe</h2>
    <button id="chef_line"></button>
    <p id="chef_para">Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat."</p>
    <div id="chef-div-2">
      <div id="chef-div-3">
          <div id="chef-div-5">
          <MdEmail id="chef-email" />
          </div>
          <div id="chef-div-6">
            <p id="chef-p1">chef_menna@gmail.com</p>
          </div>
      </div>
      <div id="chef-div-4">
          <div id="chef-div-7">
          <MdLocalPhone id="chef-phone" />
          </div>
          <div id="chef-div-8">
           <p id="chef-p2">+91 0000000000</p>
          </div>
      </div>
    </div>
</div>
</section> */}