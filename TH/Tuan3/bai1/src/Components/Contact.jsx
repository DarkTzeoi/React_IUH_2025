import React from "react";

const Contact = ({ firstName, lastName, phone, address, onDelete }) => {
  return (
    <div className="card">
      <div className="name-container">
        <h2>{firstName}</h2>
        <h4>{lastName}</h4>
      </div>
      <p>
        <span>Phone: </span>
        {phone}
      </p>
      <p>
        <span>Address: </span>
        {address}
      </p>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
