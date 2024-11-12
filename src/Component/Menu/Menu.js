import React from "react";
import "./Menu.css";
import sea from "./sea_food.png";
// import mutton_ from "./mutton_img.png";
// import special_font from "./parotta.png";
// import logo from "./virudhunagar.png";
import biryani_img from "./briyani chicken 1.png";
import meals_img from "./veg_meals_img.png";
import maincourse1 from "./main_course_1_img_1.png";
import maincourse2 from "./main_course_1_img_2.png";
import maincourse3 from "./main_course_1_img_3.png";
import parotta_img from "./parotta.png";
import mutton1 from "./mutton.png";
// import chicken_img from "./chicken.png";
import chicken_tandoori from "./chicken_tandoori.png";
import gravy_img from "./paneer_gravy.png";
import soups_img from "./soups_img.png";
import starters_non_veg from "./starters_img.png";

function Menu() {
  // Soup Data

  const soup = [
    {
      id: 1,
      name: "MUTTON BONE SOUP",
      price: 190,
      description:
        "Rich broth infused with tender mutton pieces, herbs, and spices.",
    },
    {
      id: 2,
      name: "VEG MANCHOW SOUP",
      price: 150,
      description:
        "A hearty and spicy Indo-Chinese soup filled with vegetables and crispy noodles.",
    },
    {
      id: 3,
      name: "KOZHI RASSAM",
      price: 149,
      description:
        "Spicy and tangy chicken soup flavored with traditional South Indian spices.",
    },
    {
      id: 4,
      name: "CHICKEN MANCHOW SOUP",
      price: 200,
      description:
        "A flavorful blend of chicken, vegetables, and spices in a tangy broth  topped with crispy noodles.",
    },
    {
      id: 5,
      name: "MUTTON LEG SOUP",
      price: 249,
      description:
        "Hearty soup made from mutton leg, simmered to perfection with  aromatic spices",
    },
    {
      id: 6,
      name: "MUTTON MANCHOW SOUP",
      price: 250,
      description:
        "Rich and savory soup with tender mutton, vegetables, and a hint of spice,  garnished with crispy noodles.",
    },
    {
      id: 7,
      name: "MUTTON NENJUKARI SOUP",
      price: 249,
      description:
        "Nourishing soup featuring mutton chest pieces, cooked with spices and herbs for a comforting experience",
    },
    {
      id: 8,
      name: "CRAB CLEAR SOUP",
      price: 200,
      description:
        "Light and clear broth infused with crab meat and delicate flavors of herbs  and spices.",
    },
  ];

  const starter = [
    {
      id: 1,
      name: "CHETTINADU KOZHI",
      price: 249,
      description:
        "Spicy Chettinad-style chicken curry with authentic South Indian spices.",
    },
    {
      id: 2,
      name: "BRAIN FRY",
      price: 150,
      description:
        "Delicately spiced and pan-fried brain, a savory treat for adventurous eaters.",
    },
    {
      id: 3,
      name: "MUTTON VARUVAL",
      price: 349,
      description:
        "Tender mutton pieces marinated and fried to  perfection with aromatic spices.",
    },
    {
      id: 4,
      name: "CRISPY FRIED CHICKEN",
      price: 300,
      description:
        "Tender chicken pieces coated in a crunchy batter, fried to perfection.",
    },
    {
      id: 5,
      name: "CHICKEN CHUKKA",
      price: 249,
      description:
        "Bone-in chicken cooked with onions, tomatoes, and traditional spices until dry and flavorful.",
    },
    {
      id: 6,
      name: "SPICY FRIED CHICKEN",
      price: 250,
      description:
        "Chicken marinated in spicy seasonings, fried until crispy and flavorful.",
    },
    {
      id: 7,
      name: "MEEN PODIMAS",
      price: 299,
      description: "South Indian-style fish stir-fry with spices and coconut.",
    },
    {
      id: 8,
      name: "CHICKEN SIZZLERS",
      price: 250,
      description:
        "Juicy chicken served on a sizzling hot plate with  vegetables and a sizzling sauce.",
    },
    {
      id: 9,
      name: "MUTTON KOLA",
      price: 300,
      description: "Aromatic mutton curry cooked slowly with spices and herbs.",
    },
    {
      id: 10,
      name: "MEEN SIZZLERS",
      price: 300,
      description:
        "A hearty and spicy Indo-Chinese soup filled with vegetables and crispy noodles.",
    },
    {
      id: 11,
      name: "MUTTON CHUKKA",
      price: 300,
      description:
        "Succulent mutton pieces sautéed with onions, ginger, garlic, and spices.",
    },
    {
      id: 12,
      name: "PRAWN SIZZLERS",
      price: 300,
      description:
        "Succulent prawns served on a sizzling hot plate  with vegetables and a savory sauce.",
    },
    {
      id: 13,
      name: "CRAB OMLET",
      price: 299,
      description: "Fluffy omelet packed with flavorful crab meat and  spices.",
    },
    {
      id: 14,
      name: "FISH FINGER",
      price: 300,
      description:
        "Crispy breaded fish fillet strips, perfect as a  snack or appetizer.",
    },
  ];

  const main_course = [
    {
      id: 1,
      name: "CHICKEN MEALS",
      price: 250,
      description:
        "Delicious chicken dishes served with aromatic rice, flavorful curries, and fresh salads.",
    },
    {
      id: 2,
      name: "VNR VEG FRIED RICE",
      price: 250,
      description:
        "Flavorful stir-fried rice with mixed vegetables and  aromatic spices.",
    },
    {
      id: 3,
      name: "CHICKEN THOKKU BIRIYANI",
      price: 300,
      description:
        "Fragrant basmati rice layered with spicy chicken  thokku (masala) and cooked to perfection.",
    },
    {
      id: 4,
      name: "VNR NON VEG FRIED RICE",
      price: 250,
      description:
        "Fried rice with a mix of chicken, prawns, or other  meats, blended with vegetables and seasonings.",
    },
    {
      id: 5,
      name: "FISH MEALS",
      price: 320,
      description:
        "A complete meal featuring perfectly cooked fish  served with rice, vegetables, and traditional  accompaniments.",
    },
    {
      id: 6,
      name: "VNR VEG NOODLES",
      price: 250,
      description:
        "Stir-fried noodles with assorted vegetables in a  savory sauce.",
    },
    {
      id: 7,
      name: "MUTTON MEALS",
      price: 250,
      description:
        "Succulent prawns served on a sizzling hot plate  with vegetables and a savory sauce.",
    },
    {
      id: 7,
      name: "MUTTON MEALS",
      price: 350,
      description:
        "Succulent prawns served on a sizzling hot plate  with vegetables and a savory sauce.",
    },
    {
      id: 8,
      name: "VNR NON VEG NOODLES",
      price: 200,
      description:
        "Stir-fried noodles with a medley of chicken,  prawns, or other meats along with vegetables in a  savory sauce.",
    },
    {
      id: 9,
      name: "MUTTON THOKKU BIRIYANI",
      price: 350,
      description:
        "Crispy breaded fish fillet strips, perfect as a  snack or appetizer.",
    },
  ];


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

  const biryani_1 = [
    {
      id: 1,
      name: "CHICKEN BIRIYANI",
      price: 290,
    },
    {
      id: 2,
      name: "MUTTON BIRIYANI",
      price: 330,
    },
    {
      id: 3,
      name: "NAATUKOZHI BIRIYANI",
      price: 350,
    },
  ];

  const biryani_2 = [
    {
      id: 1,
      name: "FISH BIRIYANI",
      price: 350,
    },
    {
      id: 2,
      name: "PRAWN BIRYANI",
      price: 350,
    },
    {
      id: 3,
      name: "CHICKEN 65 BIRIYANI",
      price: 350,
    },
  ];

  const parotta = [
    {
      id: 1,
      name: "PAROTTA (1PC)",
      price: 30,
    },
    {
      id: 2,
      name: "VEECHU PAROTTA",
      price: 50,
    },
    {
      id: 3,
      name: "EGG VEECHU PAROTTA",
      price: 80,
    },
    {
      id: 4,
      name: "EGG KOTHU  PAROTTA",
      price: 150,
    },
    {
      id: 5,
      name: "CHICKEN KOTHU PAROTTA",
      price: 200,
    },
    {
      id: 6,
      name: "MUTTON KOTHU PAROTTA",
      price: 250,
    },
    {
      id: 7,
      name: "CHICKEN KEEMA PAROTTA",
      price: 250,
    },
    {
      id: 8,
      name: "MUTTON KEEMA PAROTTA",
      price: 300,
    },
  ];

  // Meals

  const meals = [
    {
      id: 1,
      name: "VEG MEALS",
      price: 170,
    },
    {
      id: 2,
      name: "NON VEG MEALS",
      price: 200,
    },
  ];

  const main_course1 = [
    {
      id: 1,
      name: "FRIED RICE",
      veg: 200,
      egg: 230,
      chn: 250,
      mtn: 300,
    },
    {
      id: 2,
      name: "NOODLES",
      veg: 200,
      egg: 230,
      chn: 250,
      mtn: 300,
    },
    {
      id: 3,
      name: "SCHEZWAN FRIED RICE",
      veg: 210,
      egg: 240,
      chn: 260,
      mtn: 300,
    },
    {
      id: 4,
      name: "SCHEZWAN NOODLES",
      veg: 210,
      egg: 240,
      chn: 260,
      mtn: 300,
    },
  ];

  // IDLY Array

  const idly = [
    {
      id: 1,
      name: "IDLY (2 PC)",
      price: 50,
    },
    {
      id: 2,
      name: "CHICKEN KOTHE IDLY",
      price: 150,
    },
    {
      id: 3,
      name: "MUTTON KOTHE IDLY",
      price: 200,
    },
  ];

  // Dosa Array

  const dosa = [
    {
      id: 1,
      name: "DOSA ROAST",
      price: 80,
    },
    {
      id: 2,
      name: "EGG DOSA ROAST",
      price: 90,
    },
    {
      id: 3,
      name: "GHEE ROAST",
      price: 120,
    },
    {
      id: 4,
      name: "KAL DOSA",
      price: 50,
    },
    {
      id: 5,
      name: "EGG KAL DOSA",
      price: 80,
    },
    {
      id: 6,
      name: "MINI UTHAPPAM",
      price: 80,
    },
    {
      id: 7,
      name: "EGG KARI DOSA",
      price: 200,
    },
    {
      id: 8,
      name: "CHICKEN KARI DOSA",
      price: 250,
    },
    {
      id: 9,
      name: "MUTTON KARI DOSA",
      price: 300,
    },
  ];

  // IDIYAPPAM Array

  const idiyappam = [
    {
      id: 1,
      name: "IDIYAPPAM (4 PC)",
      price: 80,
    },
    {
      id: 2,
      name: "CHICKEN KOTHE",
      price: 150,
    },
    {
      id: 3,
      name: "MUTTON KOTHE",
      price: 200,
    },
  ];

  // Egg Array

  const egg = [
    {
      id: 1,
      name: "OMLET",
      price: 50,
    },
    {
      id: 2,
      name: "HALF BOILED",
      price: 40,
    },
    {
      id: 3,
      name: "FULL BOILED",
      price: 40,
    },
    {
      id: 4,
      name: "KALAKKI",
      price: 50,
    },
    {
      id: 5,
      name: "KALAKI MASALA",
      price: 80,
    },
    {
      id: 6,
      name: "EGG PODIMAS",
      price: 70,
    },
  ];

  //gravy array

  const gravy = [
    {
      id: 1,
      name: "CHICKEN KURUMA",
      price: 250,
    },
    {
      id: 2,
      name: "MUTTON KURUMA",
      price: 300,
    },
    {
      id: 3,
      name: "MUTTON PAAYA",
      price: 350,
    },
  ];

  // Desserts Array

  const desserts = [
    {
      id: 1,
      name: "GULAB JAMUN",
      regular: 50,
      ice_cream: 150,
    },
    {
      id: 2,
      name: "BROWNIE",
      regular: 150,
      ice_cream: 250,
    },
    {
      id: 3,
      name: "ELANEER PAYASAM (SIGNATURE)",
      regular: 200,
    },
  ];

  //ice cream array

const ice_cream = [{
  id: 1,
  name: "POT KULFI",
  price: 100
},{
  id: 2,
  name: "CASSATA SLICES",
  price: 100
}, {
  id: 3,
  name: "BUTTERSCOTCH",
  price: 150
},
{
  id: 4,
  name: "MANGO",
  price: 150
},
{
  id: 5,
name: "CHOCOLATE",
price: 150
},
{
  id: 6,
name: "STRAWBERRY",
price: 150
},
{
  id: 7,
name: "VANILLA",
price: 150
},
{
  id: 8,
name: "PISTA",
price: 180
}
];

// falooda array

const falooda = [{
  id: 1,
  name: "MINI",
  price: 100
},
{
  id: 2,
  name: "REGULAR",
  price: 150
},
{
  id: 3,
  name: "VIRUDHUNAGAR SPL",
  price: 200
}
];


//fresh_juice array

const fresh_juice = [{
  id: 1,
  name: "LEMON JUICE",
  price: 50
},
{
  id: 2,
  name: "SWEET LIME",
  price: 100
},
{
  id: 3,
  name: "GRAPE",
  price: 100
},
{
  id: 4,
  name: "ORANGE",
  price: 150
},
{
  id: 5,
  name: "APPLE",
  price: 150
},
{
  id: 6,
  name: "PINEAPPLE",
  price: 150
},
{
  id: 7,
  name: "WATERMELON",
  price: 150
}
];


// beverage array 

const beverage = [{
  id: 1,
  name: "WATER BOTTLE",
  price: 20 
}, {
  id: 2,
  name: "MILK",
  price: 30 
},{
  id: 3,
  name: "GOLI SODA",
  price: 40 
}, {
  id: 4,
  name: "TEA",
  price: 40 
}, {
  id: 5,
  name: "COFFEE",
  price: 50 
}]

// TANDOORI 


const tandoori = [{
  id: 1,
  name: "CHICKEN TANDOORI",
  veg: 280,
}];

// chicken

const chicken_1 =[{
   id: 1,
   name: "TANDOORI (HALF)",
   price: 250
}, {
  id: 2,
  name: "TANDOORI (FULL)",
  price: 400
}, {
  id: 3,
  name: "TIKKA (DRY)",
  price: 250
}, {
  id: 4,
  name: "TIKKA (MASALA)",
  price: 280
}, {
  id: 5,
  name: "TANDOORI KEBAB (2 LEGS)",
  price: 250
}];


//gravy

const gravy_1 = [{
  id: 1,
  name: "PANEER TIKKA MASALA",
  veg: 300
}, {
  id: 2,
  name: "PANEER BUTTER MASALA",
  veg: 250
}, {
  id: 3,
  name: "KADAI PANEER MASALA",
  veg: 250
}, {
  id: 4,
  name: "ALOO GOBI MASALA",
  veg: 150
}, {
  id: 5,
  name: "MIX VEG CURRY",
  veg: 200
}, {
  id: 6,
  name: "KADAI VEG CURRY",
  veg: 200 
}]


// chicken

const chicken_2 = [{
  id: 1, 
  name:"BUTTER CHICKEN MASALA",
  price: 280
}, {
  id: 2, 
  name:"KADAI CHICKEN MASALA",
  price: 280
}];

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
    <div id="menu">
      <div id="menu1">
        <div className="container" id="menu2">
          <div id="menu3">
            <h6 id="menu-h6-1">
              Our Special <a href="/menu" id="menu-h6-a">Menu</a>
            </h6>
            <p id="menu-p">Choose & Taste What You Like</p>
          </div>
        </div>

        {/* Section1 */}

        <div id="menu4">
          <h6 id="menu4-h6">SOUPS</h6>
          <div id="menu4-section2">
            <div className="container" id="menu4-flex">
              <div className="row" id="menu-horizontal-card-row">
                {soup.map((item) => (
                  <div class="card" id="menu-horizontal-card">
                    <div class="card-body">
                      <div id="menu-horizontal-flex">
                        <h5 class="card-title" id="menu-card-horizontal-h5-1">
                          {item.name}
                        </h5>
                        <h5 class="card-title" id="menu-card-horizontal-h5-2">
                          {item.price}
                        </h5>
                      </div>
                      <p class="card-text" id="menu-card-horizontal-para-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* section2  */}

        <div id="menu5">
       <div id="menu5-virdhunagar-logo">
      <div className="menu5-virudhunagar-logo-overall-class">
          <h3 id="menu5-virudhunagar-logo">Virudhunagar
          Specials</h3>
      </div>
      </div>
          <div id="menu5-div-1">
            <h6 id="menu5-h6">STARTERS</h6>
          </div>
          <div className="container">
            <div id="menu5-div-2">
              <div className="row" id="menu5-div-3-row">
                {starter.map((item) => (
                  <div class="card" id="menu-horizontal-card">
                    <div class="card-body">
                      <div id="menu-horizontal-flex">
                        <h5 class="card-title" id="menu-card-horizontal-h5-1">
                          {item.name}
                        </h5>
                        <h5 class="card-title" id="menu-card-horizontal-h5-2">
                          {item.price}
                        </h5>
                      </div>
                      <p class="card-text" id="menu-card-horizontal-para-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section3  */}

        <div id="menu6">
          <div id="menu6-div-1">
            <h6 id="menu6-h6-1">MAIN COURSE</h6>
          </div>
          <div className="container">
            <div id="menu6-div-2">
              <div className="row" id="menu6-div-3-row">
                {main_course.map((item) => (
                  <div class="card" id="menu-horizontal-card">
                    <div class="card-body">
                      <div id="menu-horizontal-flex">
                        <h5 class="card-title" id="menu-card-horizontal-h5-1">
                          {item.name}
                        </h5>
                        <h5 class="card-title" id="menu-card-horizontal-h5-2">
                          {item.price}
                        </h5>
                      </div>
                      <p class="card-text" id="menu-card-horizontal-para-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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
     

        {/* Section 5 */}

        <section id="section5">
          <div className="container">
            <div id="section5-menu-8-1">
              <h6 id="section5-menu-h6-1">BRIYANI SPECIAL</h6>
            </div>

            {/* Menu 8 */}
            <div id="section5-menu-8-2">
              <div>
                {biryani_1.map((item) => (
                  <div id="section5-menu-8-3">
                    <div id="section5-menu-8-5">
                      <h6 id="section5-menu-h6-2">{item.name}</h6>
                    </div>
                    <div id="section5-menu-8-6">
                      <h6 id="section5-menu-h6-3">{item.price}</h6>
                    </div>
                  </div>
                ))}
              </div>
              <div id="section5-menu-8-4">
                <img
                  id="section5-menu-8-img-slide-1"
                  src={biryani_img}
                  alt={biryani_img}
                />
              </div>
            </div>

            {/*  menu 9 */}

            <div id="section5-menu-9-2">
              <div id="section5-menu-9-4">
                <img
                  id="section5-menu-9-img-slide-1"
                  src={biryani_img}
                  alt={biryani_img}
                />
              </div>
              <div>
                {biryani_2.map((item) => (
                  <div id="section5-menu-9-3">
                    <div id="section5-menu-9-5">
                      <h6 id="section5-menu-h6-9-2">{item.name}</h6>
                    </div>
                    <div id="section5-menu-9-6">
                      <h6 id="section5-menu-h6-9-3">{item.price}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* section 6 */}

        <section id="section6">
          <div className="container">
            {/* Menu 10 */}

            <div id="section6-menu-10-1">
              <h6 id="section6-menu-h6-10-1">MEALS SPECIAL</h6>
            </div>

            <div id="section6-menu-10-2">
              <div id="section6-menu-10-4">
                <img
                  id="section6-menu-10-img-slide-1"
                  src={meals_img}
                  alt={meals_img}
                />
              </div>
              <div>
                {meals.map((item) => (
                  <div id="section6-menu-10-3">
                    <div id="section6-menu-10-5">
                      <h6 id="section6-menu-h6-10-2">{item.name}</h6>
                    </div>
                    <div id="section6-menu-10-6">
                      <h6 id="section6-menu-h6-10-3">{item.price}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

{/* Section 14 */}

<div id="section14">

     <div id="section14-virdhunagar-logo">
      <div className="section14-virudhunagar-logo-overall-class">
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


        {/* Section 7 */}

        <section id="section7">
          <div className="container">
            {/* Menu 11 */}
            <div id="section7-menu-11-1">
              <h6 id="section7-menu-11-h6-1">MAIN COURSE</h6>
            </div>
            <div id="section7-menu-11-5">
              <div id="section7-menu-11-2">
                <div id="section7-menu-11-3">
                  <h6 id="section7-menu-11-h6-2">STEAMED RICE (BASMATI)</h6>
                </div>
                <div id="section7-menu-11-4">
                  <h6 id="section7-menu-11-h6-2">100</h6>
                </div>
              </div>
            </div>
            <div id="section7-menu-11-6">
              <div id="section7-menu-11-7">
                <div id="section7-menu-11-8">
                  <div id="section7-menu-11-9"></div>
                  <div id="section7-menu-11-10">
                    <p id="section7-menu-11-li">VEG /</p>
                    <p id="section7-menu-11-li">EGG /</p>
                    <p id="section7-menu-11-li">CHN /</p>
                    <p id="section7-menu-11-li">MTN</p>
                  </div>
                </div>
                <div id="section7-menu-11-line"></div>
                <div id="section7-menu-11-14">
                  {main_course1.map((item) => (
                    <div id="section7-menu-11-11">
                      <div id="section7-menu-11-12">
                        <p id="section7-menu-11-p-1">{item.name}</p>
                      </div>
                      <div id="section7-menu-11-13">
                        <p id="section7-menu-11-p-2">{item.veg}</p>
                        <p id="section7-menu-11-p-3">{item.egg}</p>
                        <p id="section7-menu-11-p-4">{item.chn}</p>
                        <p id="section7-menu-11-p-5">{item.mtn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="section7-menu-11-15">
              <img
                id="section7-menu-11-15-img-1"
                src={maincourse1}
                alt={maincourse1}
              />
              <img
                id="section7-menu-11-15-img-2"
                src={maincourse2}
                alt={maincourse2}
              />
              <img
                id="section7-menu-11-15-img-3"
                src={maincourse3}
                alt={maincourse3}
              />
            </div>
          </div>
        </section>

        {/* Section 13 */}


        <section id="section13"> 
            <div id="section13-virdhunagar-logo">
              <div className="section13-virudhunagar-logo-overall-class">
                  <h3 id="section13-virudhunagar-logo">Virudhunagar 
                  Specials</h3>
              </div>
              </div>
                <div id="section13-menu-1">
                 <h6 id="section13-menu-1-h6">NORTH INDIAN SPECIAL</h6>
                </div>
                <div className="container" id="section13-menu-2">

                   {/* Part 1 */}

                  <div id="section13-menu-2-1">
                    <div id="section13-menu-2-1-1">
                      
                    </div>
                    <div id="section13-menu-2-1-2">
                       <div id="section13-menu-2-1-2-1">
                       <h6 id="section13-menu-2-1-2-1-h6-1">
                       TANDOORI
                       </h6>
                       <h6 id="section13-menu-2-1-2-1-h6-2">  
                       VEG
                       </h6>
                       </div>
                       <div id="section13-menu-2-1-2-2"> 

                       </div>
                       <div id="section13-menu-2-1-2-3">
                        {
                          tandoori.map((item) => (
                            <div id="section13-menu-2-1-2-3-1">
                            <p id="section13-menu-2-1-2-3-1-p-1">{item.name}</p>
                            <p id="section13-menu-2-1-2-3-1-p-2">{item.veg}</p>
                          </div>
                          ))
                        }    
                       </div>
                    </div>
                  </div>

                   {/* Part 2 */}
                  <div id="section13-menu-2-2">

                     <div id="section13-menu-2-2-1">
                     <div id="section13-menu-2-2-1-1">
                     <h6 id="section13-menu-2-2-1-1-h6-1">CHICKEN</h6>
                     </div>
                     <div id="section13-menu-2-2-1-2">

                     </div>
                     <div id="section13-menu-2-2-1-3">
                        {
                          chicken_1.map((item) => (
                            <div id="section13-menu-2-2-1-3-1">
                            <p id="section13-menu-2-2-1-3-1-p-1">{item.name}</p>
                            <p id="section13-menu-2-2-1-3-1-p-2">{item.price}</p>
                          </div>
                          ))
                        }  
                     </div>
                     </div>
        

                     <div id="section13-menu-2-2-2">
                      <img id="section13-menu-2-2-2-img" src={chicken_tandoori} alt={chicken_tandoori} />
                     </div>
                   </div>


                   {/* Part 3 */}
                   <div id="section13-menu-2-3">
                   <div id="section13-menu-2-3-1">
                     <img id="section13-menu-2-3-1-img" src={gravy_img} alt={gravy_img} />
                   </div>
                   <div id="section13-menu-2-3-2">
                    <div id="section13-menu-2-3-2-1">
                      <h6 id="section13-menu-2-3-2-1-h6-1">GRAVY</h6>
                      <h6  id="section13-menu-2-3-2-1-h6-2">VEG</h6>   
                    </div>
                    <div id="section13-menu-2-3-2-2">
                      
                    </div>
                    <div id="section13-menu-2-3-2-3">
                        {
                          gravy_1.map((item)=> (
                            <div id="section13-menu-2-3-2-3-1">
                            <p id="section13-menu-2-3-2-3-1-p-1">{item.name}</p>
                            <p id="section13-menu-2-3-2-3-1-p-2">{item.veg}</p>
                            </div>
                          ))
                        }
                    </div>
                   </div>   
                  </div>
                   {/* Part 4 */}
                  <div id="section13-menu-2-4">
                   <div id="section13-menu-2-4-1">
                      <div id="section13-menu-2-4-1-1">
                       <h6 id="section13-menu-2-4-1-1-h6-1">CHICKEN</h6>
                      </div>
                      <div id="section13-menu-2-4-1-2">
                      
                      </div>
                      <div id="section13-menu-2-4-1-3">
                       {
                    chicken_2.map((item)=> (
                      <div id="section13-menu-2-4-1-3-1">
                      <p id="section13-menu-2-4-1-3-1-p-1">{item.name}</p>
                      <p id="section13-menu-2-4-1-3-1-p-2">{item.price}</p>
                    </div>
             
                       ))}
                      </div>
                   </div>
                   <div id="section13-menu-2-4-2">

                   </div>
                  </div>

                </div>
            </section>

        {/* Section 9 */}

        <section id="section9">
          <div className="container">
            {/* Menu 12 */}
            <div id="section9-menu-12-1">
              <h6 id="section9-menu-12-h6">TIFFIN SPECIAL</h6>
            </div>
            <div id="section9-menu-12-2">
              <div id="section9-menu-12-3">
                <div id="section9-menu-12-4">
                  <div id="section9-menu-12-8">
                    <p id="section9-menu-12-p-1">PAROTTA</p>
                  </div>
                  <div id="section9-menu-12-9"></div>
                </div>
                <div id="section9-menu-12-6"></div>
                <div id="section9-menu-12-12">
                  {parotta.map((item) => (
                    <div id="section9-menu-12-7">
                      <div id="section9-menu-12-10">
                        <p id="section9-menu-12-p-2">{item.name}</p>
                      </div>
                      <div id="section9-menu-12-11">
                        <p id="section9-menu-12-p-3">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div id="section9-menu-12-5">
                <img
                  id="section9-menu-12-img"
                  src={parotta_img}
                  alt={parotta_img}
                />
              </div>
            </div>
          </div>
        </section>

        

         {/* section 10 */}

       <section id="section10">
          <div className="container">
            {/* Menu 13 */}

            <div id="section10-menu-13-3-flex-1">
            
            <div id="section10-menu-13-3-flex-inside-1">
               {/* Menu 14 */}

               <div id="section10-menu-14-3">
              <div id="section10-menu-14-4">
                <div id="section10-menu-14-8">
                  <p id="section10-menu-14-p-1">DOSA</p>
                </div>
                <div id="section10-menu-14-9"></div>
              </div>
              <div id="section10-menu-14-6"></div>
              <div id="section10-menu-14-12">
                {dosa.map((item) => (
                  <div id="section10-menu-14-7">
                    <div id="section10-menu-14-10">
                      <p id="section10-menu-14-p-2">{item.name}</p>
                    </div>
                    <div id="section10-menu-14-11">
                      <p id="section10-menu-14-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div id="section10-menu-13-3">
              <div id="section10-menu-13-4">
                <div id="section10-menu-13-8">
                  <p id="section10-menu-13-p-1">IDLY</p>
                </div>
                <div id="section10-menu-13-9"></div>
              </div>
              <div id="section10-menu-13-6"></div>
              <div id="section10-menu-13-12">
                {idly.map((item) => (
                  <div id="section10-menu-13-7">
                    <div id="section10-menu-13-10">
                      <p id="section10-menu-13-p-2">{item.name}</p>
                    </div>
                    <div id="section10-menu-13-11">
                      <p id="section10-menu-13-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            </div>
            <div id="section10-menu-13-3-flex-inside-2">
               {/* Menu 15 */}

               <div id="section10-menu-15-3">
              <div id="section10-menu-15-4">
                <div id="section10-menu-15-8">
                  <p id="section10-menu-15-p-1">IDIYAPPAM</p>
                </div>
                <div id="section10-menu-15-9"></div>
              </div>
              <div id="section10-menu-15-6"></div>
              <div id="section10-menu-15-12">
                {idiyappam.map((item) => (
                  <div id="section10-menu-15-7">
                    <div id="section10-menu-15-10">
                      <p id="section10-menu-15-p-2">{item.name}</p>
                    </div>
                    <div id="section10-menu-15-11">
                      <p id="section10-menu-15-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu 16 */}

            <div id="section10-menu-16-3">
              <div id="section10-menu-16-4">
                <div id="section10-menu-16-8">
                  <p id="section10-menu-16-p-1">EGG</p>
                </div>
                <div id="section10-menu-16-9"></div>
              </div>
              <div id="section10-menu-16-6"></div>
              <div id="section10-menu-16-12">
                {egg.map((item) => (
                  <div id="section10-menu-16-7">
                    <div id="section10-menu-16-10">
                      <p id="section10-menu-16-p-2">{item.name}</p>
                    </div>
                    <div id="section10-menu-16-11">
                      <p id="section10-menu-16-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

    {/* Menu 17 */}
  <div id="section10-menu-17-3">
              <div id="section10-menu-17-4">
                <div id="section10-menu-17-8">
                  <p id="section10-menu-17-p-1">GRAVY</p>
                </div>
                <div id="section10-menu-17-9"></div>
              </div>
              <div id="section10-menu-17-6"></div>
              <div id="section10-menu-17-12">
                {gravy.map((item) => (
                  <div id="section10-menu-17-7">
                    <div id="section10-menu-17-10">
                      <p id="section10-menu-17-p-2">{item.name}</p>
                    </div>
                    <div id="section10-menu-17-11">
                      <p id="section10-menu-17-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            </div>

            </div>

            
         

           

          </div>
        </section>

        {/* section 11 */}

        <section id="section11">
          <div className="container">
            {/* Menu 18 */}

            <div id="section11-menu-18-1">
              <h6 id="section11-menu-18-h6-1">DESSERTS</h6>
            </div>

            <div id="section11-menu-18-2">
              <div id="section11-menu-18-3">
                <div id="section11-menu-18-4"></div>
                <div id="section11-menu-18-5">
                  <p id="section11-menu-18-p-1">REGULAR</p>
                  <p id="section11-menu-18-p-2">ICE CREAM</p>
                </div>
              </div>
              <div id="section11-menu-18-line"></div>
              <div id="section11-menu-18-6">
                {
                  desserts.map((item) =>(
                    <div id="section11-menu-18-7">
                    <div id="section11-menu-18-8">
                      <p id="section11-menu-18-p-3">{item.name}</p>
                    </div>
                    <div id="section11-menu-18-9">
                      <p id="section11-menu-18-p-4">{item.regular}</p>
                      <p id="section11-menu-18-p-5">{item.ice_cream}</p>
                    </div>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </section>

      {/* Section 12 */}

      <section id="section12">
       <div className="container">

         {/* Menu 19 */}

         <div id="section12-menu-19-3-flex">
           <div id="section12-menu-19-3-flex-inside-1">

           <div id="section12-menu-19-3">
              <div id="section12-menu-19-4">
                <div id="section12-menu-19-8">
                  <p id="section12-menu-19-p-1">ICE CREAMS</p>
                </div>
                <div id="section12-menu-19-9"></div>
              </div>
              <div id="section12-menu-19-6"></div>
              <div id="section12-menu-19-12">
                {ice_cream.map((item) => (
                  <div id="section12-menu-19-7">
                    <div id="section12-menu-19-12">
                      <p id="section12-menu-19-p-2">{item.name}</p>
                    </div>
                    <div id="section12-menu-19-11">
                      <p id="section12-menu-19-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

 {/* Menu 21 */}

 <div id="section12-menu-21-3">
              <div id="section12-menu-21-4">
                <div id="section12-menu-21-8">
                  <p id="section12-menu-21-p-1">FALOODA</p>
                </div>
                <div id="section12-menu-21-9"></div>
              </div>
              <div id="section12-menu-21-6"></div>
              <div id="section12-menu-21-12">
                {falooda.map((item) => (
                  <div id="section12-menu-21-7">
                    <div id="section12-menu-21-12">
                      <p id="section12-menu-21-p-2">{item.name}</p>
                    </div>
                    <div id="section12-menu-21-11">
                      <p id="section12-menu-21-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           </div>
           <div id="section12-menu-19-3-flex-inside-2">

            
 {/* Menu 20 */}

 <div id="section12-menu-20-3">
              <div id="section12-menu-20-4">
                <div id="section12-menu-20-8">
                  <p id="section12-menu-20-p-1">FRESH JUICES</p>
                </div>
                <div id="section12-menu-20-9"></div>
              </div>
              <div id="section12-menu-20-6"></div>
              <div id="section12-menu-20-12">
                {fresh_juice.map((item) => (
                  <div id="section12-menu-20-7">
                    <div id="section12-menu-20-12">
                      <p id="section12-menu-20-p-2">{item.name}</p>
                    </div>
                    <div id="section12-menu-20-11">
                      <p id="section12-menu-20-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           

            {/* Menu 22 */}

            <div id="section12-menu-22-3">
              <div id="section12-menu-22-4">
                <div id="section12-menu-22-8">
                  <p id="section12-menu-22-p-1">BEVERAGES</p>
                </div>
                <div id="section12-menu-22-9"></div>
              </div>
              <div id="section12-menu-22-6"></div>
              <div id="section12-menu-22-12">
                {beverage.map((item) => (
                  <div id="section12-menu-22-7">
                    <div id="section12-menu-22-12">
                      <p id="section12-menu-22-p-2">{item.name}</p>
                    </div>
                    <div id="section12-menu-22-11">
                      <p id="section12-menu-22-p-3">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


           </div>
         </div>
 
       

           

       </div>
      </section>

      </div>
    </div>
  );
}

export default Menu;

