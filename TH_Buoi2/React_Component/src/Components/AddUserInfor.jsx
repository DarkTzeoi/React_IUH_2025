import React, { Component } from "react";

export default class UserInfor extends Component {
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: this.state.Name,
      Age: this.state.Age,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <br />
          <input
            type="number"
            placeholder="Enter your age"
            onChange={(e) => {
              this.setState({ Age: e.target.value });
            }}
          />
          <br />
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}
