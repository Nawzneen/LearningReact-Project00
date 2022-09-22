import React from "react";
export default function Test() {
  const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
  const paragraphs = pokemon.map((item) => <p>{item}</p>);

  return paragraphs;
}
