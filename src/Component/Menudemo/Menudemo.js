import React from 'react';
import "./Menudemo.css";
import soups_img from "./soups_img.png";
import starters_non_veg from "./starters_img.png";

function Menudemo() {

    // soups 

  const soups = [{
    id: 1,
    name: "SWEET CORN",
    veg: 150,
    chicken: 170
  }, {
    id: 2,
    name: "HOT & SOUR",
    veg: 150,
    chicken: 200,
    mutton:250 
  }, {
    id: 3,
    name: "MANCHOW",
    veg: 150,
    chicken: 200,
    mutton:250 
  }, {
    id: 4,
    name: "LUNG FUNG",
    veg: 150,
    chicken: 200,
    mutton:250 
  }, {
    id: 5,
    name: "CLEAR SOUP",
    veg: 130,
    chicken: 170,
    mutton: 200
  }, {
    id: 6,
    name: "TOMATO SOUP",
    veg: 150
  }, {
    id: 7,
    name: "MUSHROOM SOUP",
    veg: 150,
  }];

  //starters

  const starters_NON_VEG =[{
    id: 1,
    name: "BLACK PEPPER CHICKEN",
    dry: 270,
    gravy: 270
  }, {
    id: 2,
    name: "CHICKEN LOLLIPOP",
    dry: 250,
    gravy: 250
  }, {
    id: 3,
    name: "DRAGON CHICKEN",
    dry: 280,
    gravy: 280
  }, {
    id: 4,
    name: "CHILLI CHICKEN",
    dry: 300,
    gravy: 300
  }, {
    id: 5,
    name: "CHILLI FISH",
    dry: 300,
    gravy: 300
  }, {
    id: 6,
    name: "GARLIC CHICKEN",
    dry: 300,
    gravy: 300 
  }, {
    id: 7,
    name: "VOLCANO CHICKEN",
    dry: 300,
  }, {
    id: 8,
    name: "CHILLI PRAWN",
    dry: 300,
    gravy: 300 
  }];


  const starters_veg =[{
    id: 1,
    name: "GOBI",
    six: 150,
    chilli: 180,
    gravy: 200,
    Manchurian: 210
  }, {
    id: 2,
    name: "PANEER",
    six: 150,
    chilli: 180,
    gravy: 200,
    Manchurian: 210
  }, {
    id: 3,
    name: "MUSHROOM",
    six: 150,
    chilli: 180,
    gravy: 200,
    Manchurian: 210
  }, {
    id: 4,
    name: "BABY CORN",
    six: 150,
    chilli: 180,
    gravy: 200,
    Manchurian: 210
  }]

  return (
    <div id="menudemo">
      {/* Section 14 */}

<div id="section14">

<div id="section14-virdhunagar-logo">
 <div id="section14-virudhunagar-logo-overall-class">
     <h3 id="section14-virudhunagar-logo">Virudhunagar Chinese
     Specials</h3>
 </div>
 </div>

 <div className='container' id="section14-menu-1">
   <h6 id="section14-menu-1-h6-1">CHINESE SPECIAL</h6>
 </div>

 <div className='container' id="section14-menu-2">
   {/* Part 1 */}
   <div id="section14-menu-2-1">
     <div id="section14-menu-2-1-1">
       <div id="section14-menu-2-1-1-1">
         <div id="section14-menu-2-1-1-1-1">
           <h6 id="section14-menu-2-1-1-1-1-h6-1">SOUPS</h6>
         </div>
         <div id="section14-menu-2-1-1-1-2">
         <h6 id="section14-menu-2-1-1-1-2-h6-1">VEG</h6>
         <h6 id="section14-menu-2-1-1-1-2-h6-1">/</h6>
         <h6 id="section14-menu-2-1-1-1-2-h6-1">CHICKEN</h6>
         <h6 id="section14-menu-2-1-1-1-2-h6-1">/</h6>
         <h6 id="section14-menu-2-1-1-1-2-h6-1">MUTTON</h6>
         </div>
       </div>
       <div id="section14-menu-2-1-1-2">

       </div>
       <div id="section14-menu-2-1-1-3">
         {
           soups.map((item) => (
             <div id="section14-menu-2-1-1-3-flex">
             <div id="section14-menu-2-1-1-3-1">
              <p id="section14-menu-2-1-1-3-1-p-1">{item.name}</p>
             </div>
             <div id="section14-menu-2-1-1-3-2">
             <p id="section14-menu-2-1-1-3-2-p-1">{item.veg}</p>
             <p id="section14-menu-2-1-1-3-2-p-2">{item.chicken}</p>
             <p id="section14-menu-2-1-1-3-2-p-3">{item.mutton}</p>
             </div>
             </div>
           ))
         }
        
       </div>
     </div>
     <div id="section14-menu-2-1-2">
       <img id="section14-menu-2-1-2-img" src={soups_img} alt={soups_img} />
     </div>
   </div>

   {/* Part 2 */}

   <div id="section14-menu-2-2">
   <div id="section14-menu-2-2-1">
    <img id="section14-menu-2-2-1-img" src={starters_non_veg} alt={starters_non_veg} />
   </div>

   <div id="section14-menu-2-2-2">
     <div id="section14-menu-2-2-2-1">
        <div id="section14-menu-2-2-2-1-1">
            <h6 id="section14-menu-2-2-2-1-1-h6-1">STARTERS (NON - VEG)</h6>
        </div>
        <div id="section14-menu-2-2-2-1-2">
          <h6 id="section14-menu-2-2-2-1-2-h6-1">DRY</h6>
          <h6 id="section14-menu-2-2-2-1-2-h6-1">/</h6>
          <h6 id="section14-menu-2-2-2-1-2-h6-1">GRAVY</h6>
        </div>
     </div>
     <div id="section14-menu-2-2-2-2">
       
     </div>
     <div id="section14-menu-2-2-2-3">
       {
         starters_NON_VEG.map((item) => (
           <div id="section14-menu-2-2-2-3-1">
           <div id="section14-menu-2-2-2-3-1-1">
              <p id="section14-menu-2-2-2-3-1-1-p-1">{item.name}</p>
           </div>
           <div id="section14-menu-2-2-2-3-1-2">
           <p id="section14-menu-2-2-2-3-1-2-p-1">{item.dry}</p>
           <p id="section14-menu-2-2-2-3-1-2-p-2">{item.gravy}</p>
           </div>
           </div>
         ))
       }
     </div>
   </div>
   </div>

 {/* Part 3 */}

 <div id="section14-menu-2-2-3">
    <div id="section14-menu-2-2-3-1">
     <div id="section14-menu-2-2-3-1-1">
        <h6 id="section14-menu-2-2-3-1-1-h6-1">STARTERS (VEG)</h6>
     </div>
     <div id="section14-menu-2-2-3-1-2">
     <h6 id="section14-menu-2-2-3-1-2-h6-1">65</h6>
     <h6 id="section14-menu-2-2-3-1-2-h6-1">/</h6>
     <h6 id="section14-menu-2-2-3-1-2-h6-1">CHILLI</h6>
     <h6 id="section14-menu-2-2-3-1-2-h6-1">/</h6>
     <h6 id="section14-menu-2-2-3-1-2-h6-1">GRAVY</h6>
     <h6 id="section14-menu-2-2-3-1-2-h6-1">/</h6>
     <h6 id="section14-menu-2-2-3-1-2-h6-1">MANCHURIAN</h6>
     </div>
    </div>
    <div id="section14-menu-2-2-3-2">
     
    </div>
    <div id="section14-menu-2-2-3-3">
     {
       starters_veg.map((item) => (
         <div id="section14-menu-2-2-3-3-1">
         <div id="section14-menu-2-2-3-3-1-1">
          <p id="section14-menu-2-2-3-3-1-1-p-1">{item.name}</p>
         </div>
         <div id="section14-menu-2-2-3-3-1-2">
         <p id="section14-menu-2-2-3-3-1-2-p-1">{item.six}</p>
         <p id="section14-menu-2-2-3-3-1-2-p-2">{item.chilli}</p>
         <p id="section14-menu-2-2-3-3-1-2-p-3">{item.gravy}</p> 
         <p id="section14-menu-2-2-3-3-1-2-p-4">{item.Manchurian}</p>
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

export default Menudemo
