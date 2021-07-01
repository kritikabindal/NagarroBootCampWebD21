import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      qty: "",
    };
  }

  //nameChangeHandler Function

  // nameChangeHandler = (e) => {
  //   this.setState({ name: e.target.value });
  // };

  // //qtychnageHandler function

  // qtyChangeHandler = (e) => {
  //   this.setState({ name: e.target.value });
  // };
  //==============
  changeHandler = (e) => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  //=============
  //submitHandler function
  submitHandler = (e) => {
    e.preventDefault();
    console.log(e.state);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {/* for name */}

        {/*<label htmlFor="username">Name: </label>
    <input type="text" name="name" onChange={this.nameChangeHandler} />*/}
        <br />
        <br />
        {/* for quantity */}

        {/*<label htmlFor="username">Quantity: </label>
    <input type="text" name="qty" onChange={this.qtyChangeHandler} />*/}

        <label htmlFor="username">Name: </label>
        <input type="text" name="username" onChange={this.changeHandler} />

        <label htmlFor="username">Quantity: </label>
        <input type="text" name="qty" onChange={this.changeHandler} />

        <button> Submit</button>
      </form>
    );
  }
}

export default Form;
