// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Cards from "./Components/Cards.js";
import Test from "./Components/Test.js";
// import img1 from "images/mr-whikerson.png";

function App() {
  return (
    <div className="contacts">
      <Cards
        img="images/mr-whikerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Cards
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Cards
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Cards
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
      <br></br>
      <br></br>
      <br></br>
      <Test />
    </div>
  );
}

export default App;
