import React from "react";
import Card from "./Components/Card";
// import Hello from "./Components/Hello";
import "./App.css";
import Product from "./Components/Product";

//==============================================

class App extends React.Component {
  //===================
  constructor(props) {
    super();

    this.state = {
      cards: [
        {
          name: "Kritika",
          age: 22,
          color: "Blue",
          hobbies: ["Reading", "Badminton", "Running"],
        },
        {
          name: "Ritika",
          age: 20,
          color: "White",
          hobbies: ["Coding", "Badminton", "Running"],
        },
        {
          name: "Pritika",
          age: 21,
          color: "Pink",
          hobbies: ["Reading", "Badminton"],
        },
      ],
    };
  }

  //==================================
  render() {
    let cardList = this.state.cards.map((card) => {
      return (
        <Card
          name={card.name}
          age={card.age}
          color={card.color}
          hobbies={card.hobbies}
        />
      );
    });
    return (
      // <div className="App">
      //   <Card
      //     name="Kritika"
      //     age={24}
      //     color="black"
      //     hobbies={["Reading", "Badminton", "Running"]}
      //   />
      //   <Card
      //     name="Aayan"
      //     age={23}
      //     color="blue"
      //     hobbies={["Reading", "Badminton", "Running"]}
      //   />
      //   <Card
      //     name="Ritika"
      //     age={26}
      //     color="white"
      //     hobbies={["Writing", "Badminton", "Running"]}
      //   />
      //   <Card
      //     name="Pritika"
      //     age={27}
      //     color="Yellow"
      //     hobbies={["Reading", "Dancing"]}
      //   />

      //   <Product price={100} />
      //   <Product price={200} />
      //   <Product price={300} />
      //   <Product price={400} />
      // </div>
      <div className="App">{cardList}</div>
    );
  }
}

export default App;
