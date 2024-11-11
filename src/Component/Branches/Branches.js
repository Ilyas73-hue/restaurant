import React from 'react';
import "./Branches.css";
import img_1 from "./assets/branches_img_1.png";
import img_2 from "./assets/branches_img_2.png";
import img_3 from "./assets/branches_img_3.png";
import book from "./assets/bookatableslide.png";

function Branches() {
  return (
    <div id="branches">
      
      <div className='container' id="branches-section-1">
          <div id="branches-section-1-1">
            <div id="branches-section-1-1-1">
               <img id="branches-section-1-1-1-img"  src={img_1} alt={img_1} />
            </div>
            <div id="branches-section-1-1-2">
              <div id="branches-section-1-1-2-1">
                <h6 id="branches-section-1-1-2-1-h6-1">We Created best dinning experience for you </h6>
              </div>   
              <div id="branches-section-1-1-2-2">
                
              </div>   
              <div id="branches-section-1-1-2-3">
                <p id="branches-section-1-1-2-3-p-1">Our story began in 1987 with a simple thallu vandi (pushcart), where the visionary H. Ebrahim Sha first introduced the flavors of Virudhunagar to the people of Tamil Nadu. What started as a humble endeavor quickly grew in popularity, leading to the establishment of the iconic Virudhunagar Mess in 1990. Known for its authentic Chettinad dishes and impeccable service, it became a favorite among food lovers.
                </p>
              </div> 
            </div>
          </div>
          <div id="branches-section-1-2">
            <div id="branches-section-1-2-1">
            <div id="branches-section-1-2-1-1">
                <h6 id="branches-section-1-2-1-1-h6-1">We Created best dinning experience for you </h6>
              </div>   
              <div id="branches-section-1-2-1-2">
                
              </div>   
              <div id="branches-section-1-2-1-3">
                <p id="branches-section-1-2-1-3-p-1">Our story began in 1987 with a simple thallu vandi (pushcart), where the visionary H. Ebrahim Sha first introduced the flavors of Virudhunagar to the people of Tamil Nadu. What started as a humble endeavor quickly grew in popularity, leading to the establishment of the iconic Virudhunagar Mess in 1990. Known for its authentic Chettinad dishes and impeccable service, it became a favorite among food lovers.
                </p>
              </div> 
            </div>
            <div id="branches-section-1-2-2">
            <img id="branches-section-1-2-2-img"  src={img_2} alt={img_2} />
            </div>
          </div>
          <div id="branches-section-1-3">
          <div id="branches-section-1-3-1">
               <img id="branches-section-1-3-1-img"  src={img_3} alt={img_3} />
            </div>
            <div id="branches-section-1-3-2">
              <div id="branches-section-1-3-2-1">
                <h6 id="branches-section-1-3-2-1-h6-1">We Created best dinning experience for you </h6>
              </div>   
              <div id="branches-section-1-3-2-2">
                
              </div>   
              <div id="branches-section-1-3-2-3">
                <p id="branches-section-1-3-2-3-p-1">Our story began in 1987 with a simple thallu vandi (pushcart), where the visionary H. Ebrahim Sha first introduced the flavors of Virudhunagar to the people of Tamil Nadu. What started as a humble endeavor quickly grew in popularity, leading to the establishment of the iconic Virudhunagar Mess in 1990. Known for its authentic Chettinad dishes and impeccable service, it became a favorite among food lovers.
                </p>
              </div> 
            </div>
          </div>
      </div>

      {/* Book Table */}

<div id="branches-book-table">
<div className="container" id="branches-book-table-1">
  <div id="branches-book-form-div">
    <form id="book-table-form">
      <h6 id="branches-book-table-h6">Book A Table</h6>
      <div id="branches-book-input-div1">
        <input
          id="branches-book-input-1"
          type="text"
          placeholder="Name"
        />
        <input
          id="branches-book-input-2"
          type="number"
          placeholder="Phone"
        />
      </div>
      <div id="branches-book-input-div2">
        <input
          id="branches-book-input-3"
          type="text"
          placeholder="Person"
        />
        <input
          id="branches-book-input-4"
          type="email"
          placeholder="Email Id"
        />
      </div>
      <div id="branches-book-input-div3">
        <input
          id="branches-book-input-5"
          type="time"
          placeholder="12: 00 am"
        />
        <input
          id="branches-book-input-6"
          type="date"
          placeholder="dd-mm-yyyy"
        />
      </div>
      <button id="branches-book-button">Book Now</button>
    </form>
  </div>
  <div id="branches-book-img-div">
    <img
      className="img-fluid"
      id="branches-book-img"
      src={book}
      alt={book}
    />
  </div>
</div>
</div>

    </div>
  )
}

export default Branches;
