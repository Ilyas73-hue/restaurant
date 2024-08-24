import React from 'react';
import img1 from "./about.jpg";
import "./About.css";

function About() {

  const restaurant_Branches = [{
    "address": "1/111, Main Road, LLL, Tirnelveli. 1/111, Main Road, LLL, Tirnelveli.",
    "image": `${img1}`,
},
{
    "address": "1/111, Main Road, LLL, Tirnelveli. 1/111, Main Road, LLL, Tirnelveli.",
    "image": `${img1}`,
},
{
    "address": "1/111, Main Road, LLL, Tirnelveli. 1/111, Main Road, LLL, Tirnelveli.",
    "image": `${img1}`,
},
{
    "address": "1/111, Main Road, LLL, Tirnelveli. 1/111, Main Road, LLL, Tirnelveli.",
    "image": `${img1}`,
}
]

  return (
    <div id="about">
      <div id="about1">
        <div className='container' id="about-div-1">
           <div id="about-inside-div-1">
             <img id="about-img-1" src={img1} alt={img1} />
           </div>
           <div id="about-inside-div-2">
               <h3 id="about-ins-h3-1">Best Restaurant <u id='about-ins-h3-2'>in Chennai</u></h3>
               <button id="about-line"></button>
               <p id="about-para-1">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.</p>
               <p id="about-para-1">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.</p>
               <p id="about-para-1">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.</p>
           </div>
        </div>
        <div className='container' id="about-div-2">
              <div id="about-inside-div-3">
              <p id="about-para-2">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
              Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
              </p>
               <p id="about-para-2">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
               Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
               </p>
              </div>
              <div id="about-inside-div-4">
              <img id="about-img-2" src={img1} alt={img1} />
              </div>
        </div>

        <div className='container' id='about-div-3'>
            <div id="about-inside-div-5">
               <h2 id='about-ins-h2-1'>  <u id='about-ins-h2-2'>Our</u> Branches</h2>
            </div>
            <div id="about-inside-div-5">
            <div className='row gy-4 md-4'  id="about-restaurant-card-row"> 
                       
                       {
                           restaurant_Branches.map((item) => (
                             
                                <div className='col-sm-6 col-md-4 col-lg-3' id="about-restaurant-card-col">
<div className="card" id="about-restaurant-card" >
<img className="card-img-top" src={item.image} alt={item.image} id="about-restaurant-image"/>
<div class="card-body" id="about-restaurant-card-data">
<h5 class="card-title" id="about-restaurant-card-h5">{item.address}</h5>
</div>
</div>
                                 </div>
                           ))
                       }
                  
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About;