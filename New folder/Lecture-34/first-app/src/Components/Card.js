import React from "react";
import "./Card.css";

function Card(props) {
  let hobbies = props.hobbies.map((h) => <li>{h}</li>);
  return (
    <div className="Card">
      <h1> Name:{props.name} </h1>
      <h3> Age:{props.age}</h3>
      <p> {props.color}</p>
      <h4>Hobbies</h4>
      <ul>{hobbies}</ul>
    </div>
  );
}

export default Card;
