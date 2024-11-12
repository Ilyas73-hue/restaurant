import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/NavBar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Bottom from "./Component/Bottom/Bottom";
import Menu from "./Component/Menu/Menu";
import Chef from "./Component/Chef/Chef";
import Contact from "./Component/Contact/Contact";
import Branches from "./Component/Branches/Branches";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/chef" component={Chef} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/branches" component={Branches} /> 
      </Switch>
      <Footer />
      <Bottom />
    </Router>
    </div>
  );
}

export default App;
