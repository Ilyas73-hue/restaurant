import React, { useState } from "react";
import "./Home.css";
import img1 from "./about.jpg";
import img2 from "./chef_image_1.jpg";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import food_img_1 from "./biryani.png";
import food_img_2 from "./Shawarma.png";
import food_img_3 from "./honey chicken.png";
import food_img_4 from "./parotta.png";
import book from  "./bookatableslide.png";

function Home() {
  const [value, setValue] = useState();

  const Api = [
    {
      id: "1",
      name: "Biryani",
      dishes: "Premium",
      image: `${food_img_1}`,
      variety: "Fast Food",
    },
    {
      id: "2",
      name: "Shawarma",
      dishes: "Premium",
      image: `${food_img_2}`,
      variety: "Fast Food",
    },
    {
      id: "3",
      name: "Honey Chicken",
      dishes: "Premium",
      image: `${food_img_3}`,
      variety: "Fast Food",
    },
    {
      id: "4",
      name: "Parotta",
      dishes: "Premium",
      image: `${food_img_4}`,
      variety: "Fast Food",
    },
  ];

  const homechef_Api = [
    {
      name: "chef John",
      image: `${img2}`,
    },
    {
      name: "chef Jane",
      image: `${img2}`,
    },
    {
      name: "chef Bob",
      image: `${img2}`,
    },
    {
      name: "chef Alice",
      image: `${img2}`,
    },
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
          <div id="home2">
            <div id="home-div1">
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
            </div>
          </div>
          <div id="home-about">
            <div id="home-about">
              <div id="home-about1">
                <div className="container" id="home-about-div-1">
                  <div id="home-about-inside-div-1">
                    <h3 id="home-about-ins-h3-1">Discovery</h3>
                    <h3 id="home-about-ins-h3-2">OUR HISTROY</h3>
                    <button id="home-about-line"></button>
                    <p id="home-about-para-1">
                      Paragraph Resort & Spa, Shekvetili — a unique place where
                      perfect blend of sea and forest landscape welcomes bald
                      contemporary design engraving new paragraph in the history
                      of fabled Georgian hospitality.
                    </p>
                    <p id="home-about-para-1">
                      Paragraph Resort & Spa, Shekvetili — a unique place where
                      perfect blend of sea and forest landscape welcomes bald
                      contemporary design engraving new paragraph in the history
                      of fabled Georgian hospitality.
                    </p>
                    <p id="home-about-para-1">
                      Paragraph Resort & Spa, Shekvetili — a unique place where
                      perfect blend of sea and forest landscape welcomes bald
                      contemporary design engraving new paragraph in the history
                      of fabled Georgian hospitality.
                    </p>
                  </div>
                  <div id="home-about-inside-div-2">
                    <img id="home-about-img-1" src={img1} alt={img1} />
                  </div>
                </div>
                <div className="container" id="home-about-div-2">
                  <div id="home-about-inside-div-3">
                    <img id="home-about-img-2" src={img1} alt={img1} />
                  </div>

                  <div id="home-about-inside-div-4">
                    <p id="home-about-para-2">
                      Paragraph Resort & Spa, Shekvetili — a unique place where
                      perfect blend of sea and forest landscape welcomes bald
                      contemporary design engraving new paragraph in the history
                      of fabled Georgian hospitality. Paragraph Resort & Spa,
                      Shekvetili — a unique place where perfect blend of sea and
                      forest landscape welcomes bald contemporary design
                      engraving new paragraph in the history of fabled Georgian
                      hospitality.
                    </p>
                    <p id="home-about-para-2">
                      Paragraph Resort & Spa, Shekvetili — a unique place where
                      perfect blend of sea and forest landscape welcomes bald
                      contemporary design engraving new paragraph in the history
                      of fabled Georgian hospitality. Paragraph Resort & Spa,
                      Shekvetili — a unique place where perfect blend of sea and
                      forest landscape welcomes bald contemporary design
                      engraving new paragraph in the history of fabled Georgian
                      hospitality.
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
              <div className="container" id="home-menu2">
                {/* 1 */}
                <div id="home-menu-indside-div-1">
                  <h2 id="home-menu-inside1-div1">
                    <u id="home-menu-inside-u1">Our Special</u>{" "}
                    <u id="home-menu-inside-u2">Menu</u>
                  </h2>
                  <div id="home-menu-inside1-div2">
                    <p id="home-menu-para">
                      {" "}
                      We offer quality food chart and help our customers
                      maintain a healthy food habit. Your health security is our
                      first priority as we never compromise with food quality.
                    </p>
                  </div>
                </div>
                <div id="home-menu-indside-div-3">
                  <div className="row gy-4 md-4" id="home-menu-row">
                    {Api.map((item) => (
                      <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        id="home-menu-card-col"
                      >
                        <div
                          className="card"
                          id="home-menu-card"
                          onMouseOver={() => setValue(`${item.id}`)}
                          onMouseOut={() => setValue()}
                        >
                          <div id="home_menu_card_img">
                            <img
                              src={item.image}
                              className="card-img-top"
                              id="home-menu-card-image"
                              alt="..."
                            />
                          </div>
                          <div className="card-body" id="home-menu-card-body">
                            <h4
                              id={
                                value === `${item.id}`
                                  ? "home-menu-card-h4-hover"
                                  : "home-menu-card-h4"
                              }
                            >
                              {item.name}
                            </h4>
                            <div id="home_menu_card_div1">
                              <div id="home_menu_div_2">
                                <p
                                  id={
                                    value === `${item.id}`
                                      ? "home_menu_1_hover"
                                      : "home_menu_1"
                                  }
                                >
                                  {item.dishes}
                                </p>
                                <p
                                  id={
                                    value === `${item.id}`
                                      ? "home_menu_2_hover"
                                      : "home_menu_2"
                                  }
                                >
                                  ₹ 250/-
                                </p>
                              </div>
                              <div id="home_menu_div_3">
                                <div id="home_menu_div_4">
                                  <FaStar
                                    id={
                                      value === `${item.id}`
                                        ? "home_menu_star_icon_hover"
                                        : "home_menu_star_icon"
                                    }
                                  />
                                  <FaStar
                                    id={
                                      value === `${item.id}`
                                        ? "home_menu_star_icon_hover"
                                        : "home_menu_star_icon"
                                    }
                                  />
                                  <FaStar
                                    id={
                                      value === `${item.id}`
                                        ? "home_menu_star_icon_hover"
                                        : "home_menu_star_icon"
                                    }
                                  />
                                  <FaStar
                                    id={
                                      value === `${item.id}`
                                        ? "home_menu_star_icon_hover"
                                        : "home_menu_star_icon"
                                    }
                                  />
                                  <FaStar
                                    id={
                                      value === `${item.id}`
                                        ? "home_menu_star_icon_hover"
                                        : "home_menu_star_icon"
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>



        

          {/* customer */}

          <div className="container" id="customer">
      <div id="customer1">
                <div id="customer-indside-div-1">
                     <h2 id="customer-inside1-div1"><u id="customer-inside-u1">What Our</u>  <u id="customer-inside-u2">Customer's Say</u></h2>
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
    
     {/* Book Table */}

     <div id="home-book-table">
       <div className="container" id="home-book-table-1">
          <div id="home-book-form-div">
            <form id="book-table-form">
               <h6 id="home-book-table-h6">Book A Table</h6>
               <div id="home-book-input-div1">
                <input id="home-book-input-1" type="text" placeholder="Name" />
                <input id="home-book-input-2" type="number" placeholder="Phone" />
               </div>
               <div id="home-book-input-div2">
               <input id="home-book-input-3" type="text" placeholder="Person" />
               <input id="home-book-input-4" type="email" placeholder="Email Id" />
               </div>
               <div  id="home-book-input-div3">
               <input id="home-book-input-5"  type="time" placeholder="12: 00 am" />
               <input id="home-book-input-6" type="date"  placeholder="dd-mm-yyyy" />
               </div>
               <button id="home-book-button">Book Now</button>
            </form>
          </div>
          <div id="home-book-img-div">
            <img className="img-fluid" id="home-book-img" src={book} alt={book} />
            </div>
        </div>
     </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

