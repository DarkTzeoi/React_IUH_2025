import React from "react";
import { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [users, setUsers] = useState([
    { id: 1, Name: "Dung", Age: 19 },
    { id: 2, Name: "Hoang", Age: 14 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    setUsers([userObject, ...users]);
  };

  const handleDeleteUser = (userID) => {
    let listUserClone = users;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    setUsers(listUserClone);
  };

  const handleDeleteAllUser = () => {
    setUsers([]);
  };
  return (
    <div>
      <AddUserInfor handleAddnewUser={handleAddnewUser} />
      <hr />
      <DisplayInfor listUser={users} handleDeleteUser={handleDeleteUser} />
      <button onClick={handleDeleteAllUser}>Delete ALL</button>
    </div>
  );
};

export default MyComponent;

//   state = {
//     Name: "Pham Dac Thinh",
//     Age: 21,
//     Address: "Ho Chi Minh",
//   };

//   sum = (a, b) => {
//     return a + b;
//   };

//   render() {
//     let parent = "this is my parent";
//     return (
//       <div>
//         {/* <div>My first component</div>
//         <h1>My name is: {this.state.Name} </h1>
//         <h1>My Age is: {this.state.Age} </h1> */}
//         {/* <ChildComponent myProps={parent} sum={this.sum} /> */}

//       </div>
//     );
//   }
// }
