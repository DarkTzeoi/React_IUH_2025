import React, { Component } from "react";
import "./index.css";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.contacts = [
      {
        id: 1,
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "St. John's University, Sydney, Australia",
      },
      {
        id: 2,
        firstName: "Eleanor",
        lastName: "Shellstrop",
        phone: "555-483-1457",
        address: "335 Avalon St, Apt 2C Phoneix Arizona",
      },
      {
        id: 3,
        firstName: "Tahani",
        lastName: "Al-Jamil",
        phone: "555-276-7991",
        address: "1 Lancaster Terrace, London, England",
      },
      {
        id: 4,
        firstName: "Jason",
        lastName: "Mendoza",
        phone: "555-113-8388",
        address: "779 William St, Miami, Florida",
      },
    ];
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  deleteContact = (id) => {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.forceUpdate();
  };

  deleteAllContacts = () => {
    this.contacts = [];
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div className="contact-container">
          {this.contacts.map((contact) => (
            <Contact
              key={contact.id}
              {...contact}
              onDelete={() => this.deleteContact(contact.id)}
            />
          ))}
        </div>
        {this.contacts.length > 0 && (
          <button
            className="delete-all-button"
            onClick={this.deleteAllContacts}
          >
            Delete All
          </button>
        )}
      </div>
    );
  }
}

export default App;
