import React , {useState}  from 'react';
import "./Home.css";
import img1 from "./about.jpg";
import  img2  from "./chef_image_1.jpg";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar  } from "react-icons/fa";
import food_img_1 from "./biryani.png";
import food_img_2 from "./Shawarma.png";
import food_img_3 from "./honey chicken.png";
import food_img_4 from "./parotta.png";
import contact_img from "./getintouch.jpeg";


function Home() {

  const [value, setValue] = useState();

   

  const Api = [{
     "id": "1",
     "name":"Biryani",
     "dishes":"Premium",
     "image":`${food_img_1}`,
     "variety": "Fast Food",
  },
  {
   "id": "2",
   "name":"Shawarma",
   "dishes":"Premium",
   "image":`${food_img_2}`,
   "variety": "Fast Food"
},
{
   "id": "3",
   "name":"Honey Chicken",
   "dishes":"Premium",
   "image":`${food_img_3}`,
   "variety": "Fast Food"
},
{
   "id": "4",
   "name":"Parotta",
   "dishes":"Premium",
   "image":`${food_img_4}`,
   "variety": "Fast Food"
}
];

const homechef_Api = [{
  "name": "chef John",
  "image": `${img2}`,
},
{
  "name": "chef Jane",
  "image": `${img2}`,
},
{
  "name": "chef Bob",
  "image": `${img2}`,
},
{
  "name": "chef Alice",
  "image": `${img2}`,
}
]

const customer_review_api = [
  {
    "id": 1,
    "name": "John",
    "review": "“I’ve been looking forward to trying [food name] at [restaurant] for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too!”"
  },
  {
    "id": 2,
    "name": "John",
    "review": "“I’ve been looking forward to trying [food name] at [restaurant] for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too!”"
  },
  {
    "id": 3,
    "name": "John",
    "review": "“I’ve been looking forward to trying [food name] at [restaurant] for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too!”"
  },

]

//Rating Star
const Ratinggenerate = (num) => {
  return Array(num).fill().map((review, i) => <Rating key={i} /> )
}





const Rating = () => {

return (

<FaStar  color="#EF5008" />
  
 
)
}

 

  return(
    <div>
      <div id="home">
        <div id="home1">
        <div  id="home2">
        <div id="home-div1">
 <h2 id='home-h2'>Do You Have Any <u id="home-u">Dinner</u> Plan Today? Reserve Your Table</h2>
 </div>
 <div className='container' id="home-div2">
 <p id="home-para"> We offer quality food chart and help our customers maintain a healthy food habit. Your health security is our first priority as we never compromise with food quality.</p>
 </div>
 <div id="home-div-3">
 <button id="home-button-1">Reserve A Table</button>
 <button id="home-button-2">Book Now</button>
 </div>
 </div>
 <div id="home-about">
 <div id="home-about">
      <div id="home-about1">
    <div className='container' id="home-about-div-1">
    <div id="home-about-inside-div-1">
           <h3 id="home-about-ins-h3-1">Discovery</h3>
           <h3 id='home-about-ins-h3-2'>OUR HISTROY</h3>
           <button id="home-about-line"></button>
           <p id="home-about-para-1">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.</p>
           <p id="home-about-para-1">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.</p>
           <p id="home-about-para-1">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.</p>
       </div>
       <div id="home-about-inside-div-2">
         <img id="home-about-img-1" src={img1} alt={img1} />
       </div>
    </div>
    <div className='container' id="home-about-div-2">
          <div id="home-about-inside-div-3">
          <img id="home-about-img-2" src={img1} alt={img1} />
          </div>

          <div id="home-about-inside-div-4">
          <p id="home-about-para-2">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
          Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
          </p>
           <p id="home-about-para-2">Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
           Paragraph Resort & Spa, Shekvetili — a unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new paragraph in the history of fabled Georgian hospitality.
           </p>

       <button id="home-about-button">Read More</button>
          </div>
          </div>
    </div>
</div>
 </div>

 {/* Menu */}
 <div id="home-menu">
      <div id="home-menu1">
         <div className='container'  id="home-menu2">
            {/* 1 */}
             <div id="home-menu-indside-div-1">
                     <h2 id="home-menu-inside1-div1"><u id="home-menu-inside-u1">Our Special</u>  <u id="home-menu-inside-u2">Menu</u></h2>
                     <div id="home-menu-inside1-div2">
        <p id="home-menu-para"> We offer quality food chart and help our customers maintain a healthy food habit. Your health security is our first priority as we never compromise with food quality.</p>
       </div>
             </div>
             <div id="home-menu-indside-div-3">
                  <div className='row gy-4 md-4' id="home-menu-row">
            {
               Api.map((item) => (
                  <div className='col-sm-6 col-md-4 col-lg-3' id="home-menu-card-col">
                  <div className="card"  id="home-menu-card"  onMouseOver={() => setValue(`${item.id}`)}  onMouseOut={() => setValue() } >
                  <div id="home_menu_card_img">
                  <img src={item.image} className="card-img-top" id="home-menu-card-image" alt="..." />
                  </div>
                  <div className="card-body" id="home-menu-card-body">
                  <h4 id={ value === `${item.id}` ? "home-menu-card-h4-hover" : "home-menu-card-h4" }>{item.name}</h4>
                  <div id="home_menu_card_div1">
                    <div id="home_menu_div_2">
                      <p id={ value === `${item.id}` ?"home_menu_1_hover" :"home_menu_1" }>{item.dishes}</p>
                      <p id={ value === `${item.id}` ?"home_menu_2_hover" :"home_menu_2" }>₹ 250/-</p>
                    </div>
                    <div id="home_menu_div_3">
                      <div id="home_menu_div_4">
                        <FaStar id= {value === `${item.id}` ?"home_menu_star_icon_hover" :"home_menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home_menu_star_icon_hover" :"home_menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home_menu_star_icon_hover" :"home_menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home_menu_star_icon_hover" :"home_menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home_menu_star_icon_hover" :"home_menu_star_icon"  }/>
                      </div>
                    </div>
                  </div>

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

{/* offer */}

    <div id='offer'>
      <div id="offer1">
        <h1 id="offer-head">Get <u id="offer-u">30%</u> off on all of our dishes</h1>
        <div id="offer-inside-div1">
        <p id="offer-para"> We offer quality food chart and help our customers maintain a healthy food habit. Your health security is our first priority as we never compromise with food quality.</p>
       </div>
       <div id="offer-inside-div2">
            <button id="offer-button">Full View More</button>
       </div>  
       </div>
    </div>

    {/* homechef */}

    <div  id="homechef">
        <div id="homechef1">
        <div className="container" id="homechef-2">
       <div id="homechef-indside-div-1">
                     <h2 id="homechef-inside1-div1"><u id="homechef-inside-u1"> Meet Our  </u>  <u id="homechef-inside-u2">Best chef</u></h2>
                     <div id="homechef-inside1-div2">
        <p id="homechef-para"> We offer quality food chart and help our customers maintain a healthy food habit. Your health security is our first priority as we never compromise with food quality.</p>
       </div>
             </div>
             <div id="homechef-indside-div-2">
                  <div id="homechef-card-div">
                     <div className='row gy-4 md-4'  id="homechef-card-row"> 
                       
                            {
                                homechef_Api.map((item) => (
                                  
                                     <div className='col-sm-6 col-md-4 col-lg-3' id="homechef-card-col">
<div className="card" id="homechef-card" >
<img className="card-img-top" src={item.image} alt={item.image} id="homechef-image"/>
<div class="card-body" id="homechef-card-data">
<h5 class="card-title" id="homechef-card-h5">{item.name}</h5>
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
    </div>

{/* customer */}

<div id="customer">
      <div id="customer1">
                <div id="customer-indside-div-1">
                     <h2 id="customer-inside1-div1"><u id="homechef-inside-u1">What Our</u>  <u id="homechef-inside-u2">Customer's Say</u></h2>
                     <div id="customer-inside1-div2">
        <p id="customer-para"> See What the customer say about our services, dishes and also about restarunt. We added feedback from our happy client's.</p>
       </div>
             </div>
             <div id="customer-inside-div-2">
             <div id="scroll" >
                  
                  <div id="row">
                  {
                  customer_review_api.map((item) => (
                    
                    <div  className='col-sm-6 col-md-4 col-lg-3'  id="col" >
                  <div className="card" id="customer-card" >
                  <FaQuoteRight id="quatation" />
                  <div class="card-body" id="customer-card-body">
                  <h5 class="card-title" id="customer-card-h4">{item.name}</h5>
                  <p class="card-text" id="customer-card-p">{item.review}</p>
                  <div id="star-flex"> {Ratinggenerate(5)} </div>
                  </div>
                  </div>
                    </div>
                  
                  ))
                  }   
                  </div>
                  <div  id="row">
                  {
                  customer_review_api.map((item) => (
                    
                    <div  className='col-sm-6 col-md-4 col-lg-3'  id="col" >
                  <div className="card" id="customer-card" >
                  <FaQuoteRight id="quatation" />
                  <div class="card-body" id="customer-card-body">
                  <h5 class="card-title" id="customer-card-h4">{item.name}</h5>
                  <p class="card-text" id="customer-card-p">{item.review}</p>
                  <div id="star-flex"> {Ratinggenerate(5)} </div>
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
    
    {/* Home get in touch */}

    <div id="home_contact_us">
      <div className='container' id="home_contact_us1">
      <section id="home-contact-section1">
            <img id="home-contact-image" src={contact_img} alt={contact_img} />
          </section>
          <sction id="home-contact-section2">
               <h3 id="home_contact-section-h3">Get In Touch</h3>
               <form id="home_contact-section-form">
                  <input id="home_contact_section_form_input1" type="text" placeholder='Enter Name' />
                  <input id="home_contact_section_form_input2" type="Email" placeholder='Enter Email' />
                  <input id="home_contact_section_form_input3" type="number" placeholder='Enter Phone No' />
                  <textarea id="home_contact_section_form_input4" type="message" placeholder='Enter Message'></textarea>
                  <button type="submit" id="home_contact_section_submit">Submit</button>
               </form>
          </sction>
      </div>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Home;






// {/* <div className='home'>

// <div id="home-div1">
// <h2 id='home-h2'>Do You Have Any Dinner <u id="home-u">Plan Today?</u> Reserve Your Table</h2>
// </div>
// <div className='container' id="home-div2">
// <p id="home-para"> We offer quality food chart and help our customers maintain a healthy food habit. Your health security is our first priority as we never compromise with food quality.</p>
// </div>
// <div id="home-div-3">
// <button id="home-button-1">Reserve A Table</button>
// <button id="home-button-2">Book Now</button>
// </div>
// </div>
// <div className='About'>
// <HomeAbout />
// </div>
// <div className='Menu'>
// <HomeMenu />
// </div>
// <div className='Offer'>
// <HomeOffer />
// </div>
// <div className='homechef'>
//     <homechef />
// </div>
// <div className='customer'>
//     <Customer />
// </div>
// <div className='Search'>
// <HomeSearch />
// </div> */}