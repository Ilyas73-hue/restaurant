import React, { useState } from "react";
import "./Home.css";
import img1 from "./about.jpg";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import food_img_1 from "./mutton_briyani (2).png";
import food_img_2 from "./tandoori-chicken.png";
import food_img_3 from "./non-veg-meals.png";
import food_img_4 from "./mutton_soup.png";
import book from "./bookatableslide.png";
import home_slide from "./home.jpeg";
import home_gallery_img_1 from "./home_gallery_1.png";
import home_gallery_img_2 from "./home_gallery_2.png";
import home_gallery_img_3 from "./home_gallery_3.png";
import home_gallery_img_4 from "./home_gallery_4.png";
import home_offer from "./plate.png";
import home_offer_1 from "./home_offer_1.png";
import home_offer_2 from "./home_offer_2.png";

function Home() {
  const [value, setValue] = useState();


  const Api = [{
    "id": "1",
    "name":"Mutton Biryani",
    "dishes":"Premium",
    "image":`${food_img_1}`,
    "variety": "Rice",
  },
  {
    "id": "2",
    "name":"Chicken Tandoori",
    "dishes":"Premium",
    "image":`${food_img_2}`,
    "variety": "Rice",
  },
  {
  "id": "3",
  "name":"Non-veg Meals",
  "dishes":"Premium",
  "image":`${food_img_3}`,
  "variety": "Rice"
  },
  {
  "id": "4",
  "name":"Mutton Soup",
  "dishes":"Premium",
  "image":`${food_img_4}`,
  "variety": "Rice"
  }
  ];

  const customer_review_api = [
    {
      id: 1,
      name: "John",
      review:
        "“I’ve been looking forward to trying [food name] at [restaurant] for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too!”",
    },
    {
      id: 2,
      name: "John",
      review:
        "“I’ve been looking forward to trying [food name] at [restaurant] for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too!”",
    },
    {
      id: 3,
      name: "John",
      review:
        "“I’ve been looking forward to trying [food name] at [restaurant] for awhile now, and was so glad that I did! The food was so delicious and the service was really great, too!”",
    },
  ];

  //Rating Star
  const Ratinggenerate = (num) => {
    return Array(num)
      .fill()
      .map((review, i) => <Rating key={i} />);
  };

  const Rating = () => {
    return <FaStar color="#EF5008" />;
  };

  return (
    <div>
      <div id="home">
        <div id="home1">
          <div  id="home2">
            <div className="container" id="home6">
            <div id="home3">
              <h6 id="home-h6-1">
                Welcome to 
              </h6>
              <h5 id="home-h5-1">Virudhunagar Chettinad Restaurant</h5>
              <p id="home-para">
              At Hotel Virudhunagar Chettinad Restaurant, we don't just serve food—we serve a rich heritage, a culinary tradition that has been nurtured and perfected over decades. Our journey is a testament to the passion and dedication that goes into every dish we create, making us a beloved name in the world of Chettinad and South Indian cuisine.
              </p>
              <button id="home-view-more-button">View More</button>
            </div>
            <div id="home4">
              <img id="home_slide_img" src={home_slide} alt={home_slide} />
            </div>
          </div>
          </div>


{/* Home About */}
          
          <div id="home-about">
              <div id="home-about1">
                 <div className="container" id="home-about2">
                 <h6 id='home-about-2-h6'>Who We Are</h6>
                      <div id="home-about-5">

                       <div id="home-about-5-1">
                       <h6 id="home-about-h6-1">Our History</h6>
                       <div id="home-about-line"></div>
                         <h6 id="home-about-5-h6-1">A Culinary Tradition Rooted in Excellence </h6>
                         <p id="home-about-5-para">Our story began in 1987 with a simple thallu vandi (pushcart), where the visionary H. Ebrahim Sha first introduced the flavors of Virudhunagar to the people of Tamil Nadu. What started as a humble endeavor quickly grew in popularity, leading to the establishment of the iconic Virudhunagar Mess in 1990. Known for its authentic Chettinad dishes and impeccable service, it became a favorite among food lovers.
                         </p>
                       </div>
                       <div id="home-about-5-2">
                         <img className="img-fluid" id="home-about-5-2-img" src={img1} alt={img1} />
                       </div>
                      </div>
                      <div id="home-about-6">
                       <div id="home-about-6-1">
                       <img id="home-about-6-1-img" src={img1} alt={img1} />
                       </div>
                       <div id="home-about-6-2">
                       <h6 id="home-about-6-h6-1">Expanding the Legacy</h6>
                       <p id="home-about-6-para">Over the years, our family-run restaurant has expanded its footprint while staying true to our roots. In 2016, we brought the authentic taste of Chettinad to Meenambakkam, followed by another branch in Vadapalani in 2017. 
                       </p>
                       <p id="home-about-6-para-1">The legacy of Hotel Virudhunagar continues under the stewardship of Mohammed Rafiq, son of H. Ebrahim Sha, who established the Koyambedu branch in 2023. Our commitment to serving the most authentic and flavourful chettinad cuisine.
                       </p>
                       </div>
                      </div>
                 </div>
              </div>
          </div>


          {/* Home Gallery */}

          <div id="home-gallery">
            <div id="home-gallery1">
              <div className="container" id="home-gallery2">
                <div id="home-gallery3">
                  <h6 id="home-gallery-h6">
                    Our Gallery
                  </h6>
                  <p id="home-gallery-p">Try Your Special Dishes</p>
                  <div id="home-gallery4">
                    <img
                      className="img-fluid"
                      id="home-gallery-img-1"
                      src={home_gallery_img_1}
                      alt={home_gallery_img_1}
                    />
                    <img
                      className="img-fluid"
                      id="home-gallery-img-2"
                      src={home_gallery_img_2}
                      alt={home_gallery_img_2}
                    />
                    <img
                      className="img-fluid"
                      id="home-gallery-img-3"
                      src={home_gallery_img_3}
                      alt={home_gallery_img_3}
                    />
                    <img
                      className="img-fluid"
                      id="home-gallery-img-4"
                      src={home_gallery_img_4}
                      alt={home_gallery_img_4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu */}

          <div id="home-menu">
            <div className="container" id="home-menu-1">
              <div  id="home-menu-2">
                <div id="home-menu-3">
                  <div id="home-menu-4">
                     <h5 id="home-menu-h5">
                     Our Special <i id="home-menu-h5-1">Menu</i>
                     </h5>
                     <p id="home-menu-p">Choose & Taste What You Like</p>
                  </div>
                  <div id="home-menu-5">
                     <div className="row gy-4 md-4" id="menu-row">
                     {
               Api.map((item) => (
                  <div className='col-sm-6 col-md-4 col-lg-3' id="home-menu-card-col">
                  <div className="card"  id="home-menu-card"  onMouseOver={() => setValue(`${item.id}`)}  onMouseOut={() => setValue() } >
                  <div id="home-menu-card-img">
                  <img src={item.image} className="card-img-top" id="home-menu-card-image" alt="..." />
                  </div>
                  <div className="card-body" id="home-menu-card-body">

                  <h4 id={ value === `${item.id}` ? "home-menu-card-h4-hover" : "home-menu-card-h4" }>{item.name}</h4>
                  <div id="home-menu_card_div1">
                    <div id="home-menu_div_2">
                      <p id={ value === `${item.id}` ?"home-menu_1_hover" :"home-menu_1" }>{item.dishes}</p>
                      <p id={ value === `${item.id}` ?"home-menu_2_hover" :"home-menu_2" }>₹ 250/-</p>
                    </div>

                    <div id="home-menu_div_3">
                      <div id="home-menu_div_4">
                        <FaStar id= {value === `${item.id}` ?"home-menu_star_icon_hover" :"home-menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home-menu_star_icon_hover" :"home-menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home-menu_star_icon_hover" :"home-menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home-menu_star_icon_hover" :"home-menu_star_icon"  }/>
                        <FaStar id= {value === `${item.id}` ?"home-menu_star_icon_hover" :"home-menu_star_icon"  }/>
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
          </div>


          {/* Home Offer */}

          <div id="home-offer">
            <div id="home-offer1">
              <img id="home-offer-plate" src={home_offer} alt={home_offer} />
              <div className="container" id="home-offer2">
                 <div id="home-offer3">
                     <div id="home-offer4">
                   <p id='home_offer-Para'>Exclusive Offer !</p>
                   <h6 id="home-offer-h6">Get 30% offer on all dishes</h6>
                   <p id="home-offer-para1">We offer quality food chart and help our customers maintain a healthy food habit. Your health security is our first priority as we never compromise with food quality.</p>
                    <button id="home-offer-button">View More</button>
                     </div> 
                     <div id="home-offer5">
                        <div id="home-offer6">
                            <img id="home_offer_img_1" src={home_offer_1} alt={home_offer_1} />
                        </div>
                        <div id="home-offer7">
                        <img id="home_offer_img_2" src={home_offer_2} alt={home_offer_2} />
                        </div>
                    </div>   
                 </div>
              </div>
            </div>
          </div>


          {/* customer */}

          <div className="container" id="customer">
            <div id="customer1">
              <div id="customer-indside-div-1">
                <h2 id="customer-inside1-div1">
                  <u id="customer-inside-u1">What Our</u>{" "}
                  <u id="customer-inside-u2">Customer's Say</u>
                </h2>
                <div id="customer-inside1-div2">
                  <p id="customer-para">
                    {" "}
                    See What the customer say about our services, dishes and
                    also about restarunt. We added feedback from our happy
                    client's.
                  </p>
                </div>
              </div>
              <div id="customer-inside-div-2">
                <div id="scroll">
                  <div id="row">
                    {customer_review_api.map((item) => (
                      <div className="col-sm-6 col-md-4 col-lg-3" id="col">
                        <div className="card" id="customer-card">
                          <FaQuoteRight id="quatation" />
                          <div class="card-body" id="customer-card-body">
                            <h5 class="card-title" id="customer-card-h4">
                              {item.name}
                            </h5>
                            <p class="card-text" id="customer-card-p">
                              {item.review}
                            </p>
                            <div id="star-flex"> {Ratinggenerate(5)} </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="row">
                    {customer_review_api.map((item) => (
                      <div className="col-sm-6 col-md-4 col-lg-3" id="col">
                        <div className="card" id="customer-card">
                          <FaQuoteRight id="quatation" />
                          <div class="card-body" id="customer-card-body">
                            <h5 class="card-title" id="customer-card-h4">
                              {item.name}
                            </h5>
                            <p class="card-text" id="customer-card-p">
                              {item.review}
                            </p>
                            <div id="star-flex"> {Ratinggenerate(5)} </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Table */}

          <div id="home-book-table">
            <div className="container" id="home-book-table-1">
              <div id="home-book-form-div">
                <form id="book-table-form">
                  <h6 id="home-book-table-h6">Book A Table</h6>
                  <div id="home-book-input-div1">
                    <input
                      id="home-book-input-1"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      id="home-book-input-2"
                      type="number"
                      placeholder="Phone"
                    />
                  </div>
                  <div id="home-book-input-div2">
                    <input
                      id="home-book-input-3"
                      type="text"
                      placeholder="Person"
                    />
                    <input
                      id="home-book-input-4"
                      type="email"
                      placeholder="Email Id"
                    />
                  </div>
                  <div id="home-book-input-div3">
                    <input
                      id="home-book-input-5"
                      type="time"
                      placeholder="12: 00 am"
                    />
                    <input
                      id="home-book-input-6"
                      type="date"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                  <button id="home-book-button">Book Now</button>
                </form>
              </div>
              <div id="home-book-img-div">
                <img
                  className="img-fluid"
                  id="home-book-img"
                  src={book}
                  alt={book}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div id="home-div1">
<h2 id="home-h2">
  Do You Have Any <u id="home-u">Dinner</u> Plan Today? Reserve
  Your Table
</h2>
</div>
<div className="container" id="home-div2">
<p id="home-para">
  {" "}
  We offer quality food chart and help our customers maintain a
  healthy food habit. Your health security is our first priority
  as we never compromise with food quality.
</p>
</div>
<div id="home-div-3">
<button id="home-button-1">Reserve A Table</button>
<button id="home-button-2">Book Now</button>
</div> */
}
