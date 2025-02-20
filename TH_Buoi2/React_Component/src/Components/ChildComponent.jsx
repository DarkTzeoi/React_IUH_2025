

import React from "react";

const ChildComponent = (props) => {
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
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <input type="text" onChange={(e) => handleOnChangeInput(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChildComponent;
