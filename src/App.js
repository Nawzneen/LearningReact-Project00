// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Cards from "./Components/Cards.js";
import Test from "./Components/Test.js";
import jokesData from "./jokesData.js";
import Jokes from "./Components/Jokes.js";

export default function App() {
  const jokeElements = jokesData.map((joke) => (
    <Jokes setup={joke.setup} punchline={joke.punchline} />
  ));
  return (
    <div>
      <div className="contacts">
        <Cards
          img="./images/mr-whiskerson.png"
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
      </div>
      <br></br>
      <Test />
      <hr />
      <hr />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
      <div>{jokeElements}</div>
    </div>
  );
}
