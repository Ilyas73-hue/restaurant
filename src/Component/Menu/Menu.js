import React, { useState } from 'react';
import "./Menu.css";
import img1 from "./offer_img_1.jpg";
import img2 from "./offer_img_2.jpg";
import img3 from "./offer_img_3.jpeg"
import { FaStar  } from "react-icons/fa";



function Menu() {

  const [value, setValue] = useState();


  const offer = [{
    id: 1,
    img: `${img1}`
  },
  {
    id:2,
    img:`${img2}`
  },
  {
    id: 3,
    img:`${img3}`
  }
];


  

const Api = [{
  "id": "1",
  "name":"Chicken Biryani",
  "dishes":"Premium",
  "image":`https://shorturl.at/kC706`,
  "variety": "Rice",
},
{
  "id": "2",
  "name":"Sushi",
  "dishes":"Premium",
  "image":`https://shorturl.at/3lxD7`,
  "variety": "Rice",
},
{
"id": "3",
"name":"Risotto",
"dishes":"Premium",
"image":`https://shorturl.at/55Ux1`,
"variety": "Rice"
},
{
"id": "4",
"name":"Rice Pudding",
"dishes":"Premium",
"image":`https://shorturl.at/RB53p`,
"variety": "Rice"
}
];




const data =   Api.filter((filter) => filter.variety)

console.log(data)

  return (
    <div id="menu">
      <div id="menu1">
        <section id="section_menu_1">
          <div id="menu-offer-section-scroll">
            <div id="menu-offer-section-row">
               {
                offer.map((offers) => (
                    <div id="menu-offer-col">
                     <img id="offer_menu_img" src={offers.img} alt={offers.img} />
                    </div>
                ))
               }
          </div> 
          <div id="menu-offer-section-row">
               {
                offer.map((offers) => (
                    <div id="menu-offer-col">
                     <img id="offer_menu_img" src={offers.img} alt={offers.img} />
                    </div>
                ))
               }
          </div> 
          </div>    
        </section>
        <section id="section_menu_2">
            <h2 id="menu-head-h2">Our <u id="menu-head-h2-1">Menu</u></h2>
            <p id="menu-para"> We offer quality food chart and help our customers maintain a healthy food habit. Your health security is our first priority as we never compromise with food quality.</p>
        </section>
        {/* <section className='container' id="section_menu_3">
           <ul id="menu_list_ul">
           <li id="menu_list_li">Starters</li>
           <li id="menu_list_li">Sandvich</li>
           <li id="menu_list_li">Subziyan</li>
           <li id="menu_list_li">Pizza's</li>
           <li id="menu_list_li">Noodles</li>
           <li id="menu_list_li">Rice</li>
           </ul>
        </section> */}
        <section className='container' id="section_menu_4">
        <div className='row gy-4 md-4' id="menu-row">
            {
               Api.map((item) => (
                  <div className='col-sm-6 col-md-4 col-lg-3' id="menu-card-col">
                  <div className="card"  id="menu-card"  onMouseOver={() => setValue(`${item.id}`)}  onMouseOut={() => setValue() } >
                  <div id="menu-card-img">
                  <img src={item.image} className="card-img-top" id="menu-card-image" alt="..." />
                  </div>
                  <div className="card-body" id="menu-card-body">

                  <h4 id={ value === `${item.id}` ? "menu-card-h4-hover" : "menu-card-h4" }>{item.name}</h4>
                  <div id="menu_card_div1">
                    <div id="menu_div_2">
                      <p id={ value === `${item.id}` ?"menu_1_hover" :"menu_1" }>{item.dishes}</p>
                      <p id={ value === `${item.id}` ?"menu_2_hover" :"menu_2" }>₹ 250/-</p>
                    </div>

                    <div id="menu_div_3">
                      <div id="menu_div_4">
                        <FaStar id= {value === `${item.id}` ?"menu_star_icon_hover" :"menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"menu_star_icon_hover" :"menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"menu_star_icon_hover" :"menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"menu_star_icon_hover" :"menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"menu_star_icon_hover" :"menu_star_icon"  }/>
                      </div>
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

export default Menu;