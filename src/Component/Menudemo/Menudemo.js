import React from 'react';
import "./Menudemo.css";
import sea from "./sea_food.png";
import mutton1 from "./mutton.png";
import chicken_tandoori from "./chicken_tandoori.png";

function Menudemo() {

  //sea food array

  const sea_food = [
    {
      id: 1,
      name: "VANJARAM",
      fry_price: 320,
      gravy: 350,
    },
    {
      id: 2,
      name: "NETHILI",
      fry_price: 240,
      gravy: 260,
    },
    {
      id: 3,
      name: "SANKARA",
      fry_price: 280,
      gravy: 300,
    },
    {
      id: 4,
      name: "GALANGA",
      fry_price: 250,
      gravy: 270,
    },
    {
      id: 5,
      name: "CHETTINAD PRAWN",
      fry_price: 250,
      gravy: 280,
    },
    {
      id: 6,
      name: "CHETTINAD CRAB",
      fry_price: 300,
      gravy: 330,
    },
  ];

  // mutton array 
  const mutton = [
    {
      id: 1,
      name: "MUTTON LIVER",
      fry_price: 230,
      gravy: 250,
    },
    {
      id: 2,
      name: "MUTTON HEAD",
      fry_price: 230,
      gravy: 250,
    },
    {
      id: 3,
      name: "MUTTON CHOPS",
      fry_price: 300,
      gravy: 350,
    },
  ];


  //chicken

  const chicken = [{
    id: 1,
    name:"CHETTINAD CHICKEN",
    fry: 250,
    gravy: 280 
  }, {
    id: 2,
    name:"NAATU KOZHI",
    fry: 300,
    gravy: 330 
  }, {
    id: 3,
    name:"CHETTINAD PEPPER CHICKEN",
    fry: 250 
  }];

  return (
    <div id="menudemo">
         {/* Section4 */}
         <section id="section-4">

        <div id="section4-virdhunagar-logo">
          <div id="virudhunagar-logo-overall-class">
              <h3 id="virudhunagar-logo">Virudhunagar Chettinad Restaurant</h3>
          </div>
          </div>
          
          <div className='container' id='section-4-menu-1'>
               <div id="section-4-menu-1-1">
                  <div id="section-4-menu-1-1-1">
                  <div id='section-4-menu-1-1-1-1'>
                      <div id="section-4-menu-1-1-1-1-1">
                      <h6 id='section-4-menu-1-1-1-1-1-h6-1'>SEA FOOD</h6>
                      </div>
                      <div id="section-4-menu-1-1-1-1-2">
                        <h6 id='section-4-menu-1-1-1-1-2-h6-1'>FRY</h6>
                        <h6 id='section-4-menu-1-1-1-1-2-h6-1'>/</h6>
                        <h6 id='section-4-menu-1-1-1-1-2-h6-1'>GRAVY</h6>
                      </div>
                  </div>
                  <div id='section-4-menu-1-1-1-2'>

                  </div>
                  <div id='section-4-menu-1-1-1-3'>
                    {
                        sea_food.map((item) => (
                            <div id='section-4-menu-1-1-1-3-1'>
                            <div id='section-4-menu-1-1-1-3-1-1'>
                               <p id='section-4-menu-1-1-1-3-1-1-p-1'>{item.name}</p>
                            </div>
                            <div id='section-4-menu-1-1-1-3-1-2'>
                            <p id='section-4-menu-1-1-1-3-1-2-p-1'>{item.fry_price}</p>
                            <p id='section-4-menu-1-1-1-3-1-2-p-1'>{item.gravy}</p>
                            </div>
                          </div>
                        ))
                    }
                  </div>
                  </div>
                  <div id="section-4-menu-1-1-2">
                   <img src={sea} alt={sea} />
                  </div>
               </div>
               <div id="section-4-menu-1-2">
                  <div id="section-4-menu-1-2-1">
                    <img src={mutton1} alt={mutton1} />
                  </div>
                  <div id="section-4-menu-1-2-2">
                  <div id='section-4-menu-1-2-2-1'>
                      <div id="section-4-menu-1-2-2-1-1">
                      <h6 id='section-4-menu-1-2-2-1-1-h6-1'>MUTTON</h6>
                      </div>
                      <div id="section-4-menu-1-2-2-1-2">
                        <h6 id='section-4-menu-1-2-2-1-2-h6-1'>FRY</h6>
                        <h6 id='section-4-menu-1-2-2-1-2-h6-1'>/</h6>
                        <h6 id='section-4-menu-1-2-2-1-2-h6-1'>GRAVY</h6>
                      </div>
                  </div>
                  <div id='section-4-menu-1-2-2-2'>

                  </div>
                  <div id='section-4-menu-1-2-2-3'>
                    {
                        mutton.map((item) => (
                            <div id='section-4-menu-1-2-2-3-1'>
                            <div id='section-4-menu-1-2-2-3-1-1'>
                               <p id='section-4-menu-1-2-2-3-1-1-p-1'>{item.name}</p>
                            </div>
                            <div id='section-4-menu-1-2-2-3-1-2'>
                            <p id='section-4-menu-1-2-2-3-1-2-p-1'>{item.fry_price}</p>
                            <p id='section-4-menu-1-2-2-3-1-2-p-1'>{item.gravy}</p>
                            </div>
                          </div>
                        ))
                    }
                  </div>
                  </div>
               </div>

               <div id="section-4-menu-1-3">
                 <div id="section-4-menu-1-3-1">
                    <div id="section-4-menu-1-3-1-1">
                     <div id="section-4-menu-1-3-1-1-1">
                      <h6 id="section-4-menu-1-3-1-1-1-h6-1">CHICKEN</h6>
                     </div>
                     <div id="section-4-menu-1-3-1-1-2">
                     <h6 id='section-4-menu-1-3-1-1-2-h6-1'>FRY</h6>
                        <h6 id='section-4-menu-1-3-1-1-2-h6-1'>/</h6>
                        <h6 id='section-4-menu-1-3-1-1-2-h6-1'>GRAVY</h6>
                     </div>
                    </div>
                    <div id="section-4-menu-1-3-1-2">
                      
                    </div>
                    <div id="section-4-menu-1-3-1-3">
                      {
                       chicken.map((item) => (
                        <div id="section-4-menu-1-3-1-3-1">
                        <div id="section-4-menu-1-3-1-3-1-1">
                          <p id="section-4-menu-1-3-1-3-1-1-p-1">{item.name}</p>
                        </div>
                        <div id="section-4-menu-1-3-1-3-1-2">
                          <p id="section-4-menu-1-3-1-3-1-2-p-1">{item.fry}</p>
                          <p id="section-4-menu-1-3-1-3-1-2-p-2">{item.gravy}</p>
                        </div>
                        </div>
                       ))
                      }
                    </div>
                 </div>
                 <div id="section-4-menu-1-3-2">
                  <img src={chicken_tandoori} alt={chicken_tandoori} />
                  </div>
               </div>
          </div>

        </section>
    </div>
  )
}

export default Menudemo
