import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   valueInput: "",
    // };
    this.state = {
      Name: "Pham Dac Thinh",
      Age: 21,
      Address: "HCM",
    };
  }
  handleInput = (e) => {
    this.setState({
      valueInput: e.target.value,
    });
  };
  handleOnChangeInput = (e) => {
    this.setState({
      Name: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is: {this.state.Name}
        <br />
        My age is: {this.state.Age}
        {/* <h1>I just get from parent value: {this.props.myProps}</h1>
        <h2>Tong cua 2 so '6' va '9' la: 6 + 9 = {this.props.sum(6, 9)} </h2> */}
        <div>
          {/* <input
            type="text"
            value={this.state.valueInput}
            onChange={(e) => {
              this.handleInput(e);
            }}
          /> */}
          <form
            onSubmit={(e) => {
              this.handleOnSubmit(e);
            }}
          >
            <input type="text" onChange={(e) => this.handleOnChangeInput(e)} />
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* <div>
          <span> {this.state.valueInput} </span>
        </div> */}
      </div>
    );
  }
}
