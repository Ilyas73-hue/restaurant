import React from 'react';
import img1 from "./about_img_1.png";
import img2 from "./about_img_2.png";
import book from "./bookatableslide.png";
import about from "./about.jpg";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import home_offer_1 from "./home_offer_1.png";
import home_offer_2 from "./home_offer_2.png";
import home_offer from "./plate.png";
import "./About.css";

function About() {

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
    <div id="about">
       <div id="about1">

         <div className='container' id="about2">
          <div  id="about3">
              <div id="about4">
                   <h6 id="about-h6-1">A Menu That Speaks of Tradition 
                   and Innovation</h6>
                   <p id="about-para1">
                   At Hotel Virudhunagar Chettinad Restaurant, our menu is a celebration of the rich and diverse culinary heritage of South India. We take pride in our Chettinad dishes, known for their bold flavors and aromatic spices. From the fiery Chettinad chicken curry to the flavorful mutton biryani, each dish is a masterpiece that pays homage to the traditions of the Chettinad region.
                   </p>
              </div>
              <div id="about5">
                 <img  id="about-img" src={img1} alt={img1} />
              </div>
          </div>
          <div  id="about7">
              <div id="about8">
              <img  id="about-img1" src={img2} alt={img2} />
              </div>
              <div id="about9">
              <h6 id="about-h9-1">
              Why Choose Hotel Virudhunagar?
</h6>
                   <p id="about9-para1">
                   When you dine with us, you are not just enjoying a meal—you are experiencing a legacy of taste that has been honed over generations. Our chefs are masters of their craft, dedicated to preserving the authenticity of our recipes while infusing each dish with their unique touch. We source the finest ingredients, ensuring that every bite is a reflection of quality and flavor.
                   </p>
              </div>
          </div>
         </div>

{/*  About resuturant welcome */}

<div id="about-welcome">
    <div className='container'>
          <div id="about-welcome-1">
            <h6 id='about-welcome-h6-1'>Welcome to Our Restaurant</h6>
            <h6 id="about-welcome-h6-2">A Variety of Great Dishes</h6>
            <p id="about-welcome-p"> Our restaurant features a wide variety of dishes, from delicious starters and satisfying main courses to indulgent desserts. </p>
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
  )
}

export default About;


<div id="history-about">
              <div id="history-about1">
                 <div className="container" id="history-about2">
                      <div id="history-about-4">
                      <h6 id="history-about-h6-1">Our History</h6>
                      <div id="history-about-line"></div>
                      </div>
                      <div id="history-about-5">
                       <div id="history-about-5-1">
                         <h6 id="history-about-5-h6-1">A Culinary Tradition Rooted in Excellence </h6>
                         <p id="history-about-5-para">Our story began in 1987 with a simple thallu vandi (pushcart), where the visionary H. Ebrahim Sha first introduced the flavors of Virudhunagar to the people of Tamil Nadu. What started as a humble endeavor quickly grew in popularity, leading to the establishment of the iconic Virudhunagar Mess in 1990. Known for its authentic Chettinad dishes and impeccable service, it became a favorite among food lovers.
                         </p>
                       </div>
                       <div id="history-about-5-2">
                         <img className="img-fluid" id="history-about-5-2-img" src={about} alt={about} />
                       </div>
                      </div>
                      <div id="history-about-6">
                       <div id="history-about-6-1">
                       <img id="history-about-6-1-img" src={about} alt={about} />
                       </div>
                       <div id="history-about-6-2">
                       <h6 id="history-about-6-h6-1">Expanding the Legacy</h6>
                       <p id="history-about-6-para">Over the years, our family-run restaurant has expanded its footprint while staying true to our roots. In 2016, we brought the authentic taste of Chettinad to Meenambakkam, followed by another branch in Vadapalani in 2017. 
                       </p>
                       <p id="history-about-6-para-1">The legacy of Hotel Virudhunagar continues under the stewardship of Mohammed Rafiq, son of H. Ebrahim Sha, who established the Koyambedu branch in 2023. Our commitment to serving the most authentic and flavourful chettinad cuisine.
                       </p>
                       </div>
                      </div>
                 </div>
              </div>
          </div>
