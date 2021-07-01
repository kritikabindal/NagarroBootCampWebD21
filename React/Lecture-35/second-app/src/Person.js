import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kritika",
      age: 22,
      favcolor: "blue",
      show: false,
    };
  }

  nameChangeHandler = () => {
    // this.state.name = this.state.name.toUpperCase();
    const newName = this.state.name;
    this.setState({ name: newName.toUpperCase() });
    // console.log(this.name);
  };

  cardTogglehandler = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.cardTogglehandler} style={{ margin: "40px" }}>
          Toggle
        </button>

        {this.state.show ? (
          <arcticle
            onClick={this.nameChangeHandler}
            style={{
              width: "400px",
              margin: "170px auto",
              boxShadow: "0px 1px blue",
              padding: "30px",
            }}
          >
            {/*<h2>Name:{this.state.name} </h2> */}
            <p>Age:{this.state.age} </p>
            <p> Color:{this.state.favcolor}</p>
          </arcticle>
        ) : null}
      </div>
    );
  }
}

export default Person;
