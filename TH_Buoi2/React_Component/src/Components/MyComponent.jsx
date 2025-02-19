import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  //   state = {
  //     Name: "Pham Dac Thinh",
  //     Age: 21,
  //     Address: "Ho Chi Minh",
  //   };

  state = {
    listUser: [
      { id: 1, Name: "Dung", Age: 19 },
      { id: 2, Name: "Hoang", Age: 14 },
      { id: 3, Name: "Chien", Age: 32 },
    ],
  };
  //   sum = (a, b) => {
  //     return a + b;
  //   };

  handleAddnewUser = (userObject) => {
    this.setState({
      listUser: [userObject, ...this.state.listUser],
    });
  };

  handleDeleteUser = (userID) => {
    let listUserClone = this.state.listUser;
    listUserClone = listUserClone.filter((item) => item.id != userID);
    this.setState({
      listUser: listUserClone,
    });
  };
  render() {
    let parent = "this is my parent";
    return (
      <div>
        {/* <div>My first component</div>
        <h1>My name is: {this.state.Name} </h1>
        <h1>My Age is: {this.state.Age} </h1> */}
        {/* <ChildComponent myProps={parent} sum={this.sum} /> */}
        <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
        <hr />
        <DisplayInfor
          listUser={this.state.listUser}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}
