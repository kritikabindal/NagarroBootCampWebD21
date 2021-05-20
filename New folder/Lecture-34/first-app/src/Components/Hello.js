import React, { Component } from "react";
// import Card from "./Card";

const getMoods = () => {
  const moods = ["Angry", "Sad", "Happy", "Love", "Paranoid "];
  return moods[Math.floor(Math.random() * moods.length)];
};

//===============================================

const getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
};

class Hello extends Component {
  render() {
    let num = getNum();

    let msg;
    if (num === 7) {
      msg = <p> Lucky!!!!</p>;
    } else {
      msg = <p> Unlucky!!</p>;
    }

    return (
      <div>
        <h1> Hello From React App</h1>
        <p> This is my first Paragraph</p>
        <h2>My mood is {getMoods()}</h2>
        <p>
          My Number is {num} {num === 7 ? "Lucky Number" : "Unlucky Number "}
        </p>

        <img src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
    );
  }
}
export default Hello;
