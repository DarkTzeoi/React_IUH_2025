import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("HCM");

  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); //ngăn việc tải lại trang
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: name,
      Age: age,
    });
    setAge("");
    setName("");
  };

  return (
    <div>
      My name is: <span>{name}</span>
      <br />
      My Age is: <span> {age} </span>
      <form action="submit" onSubmit={(event) => handleOnSubmit(event)}>
        <label htmlFor="">Your name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <br />
        <label htmlFor="">Your Age:</label>
        <input
          type="text"
          onChange={(event) => handleOnchangeAge(event)}
          value={age}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
