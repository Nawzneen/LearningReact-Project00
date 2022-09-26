import React from "react";
export default function Test() {
  // const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
  // const paragraphs = pokemon.map((item) => <p>{item}</p>);
  const [messages, setMessages] = React.useState(["a", "b"]);
  function checkMessages() {
    if (messages == 0) {
      <h1> You are all caught up</h1>;
    } else if (messages === 1) {
      return <h1> you have {messages.length} unread message</h1>;
    } else {
      return <h1> you have {messages.length} unread messages</h1>;
    }
    console.log("TEstsdf");
  }
  return checkMessages();
}
