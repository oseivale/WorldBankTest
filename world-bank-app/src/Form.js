import React, { useState } from "react";

function Form() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    accountID: "",
    initialBalance: "",
    customerID: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    setUsers(users.concat(formData));
    console.log(formData);
  };

  // const addUser = () => {};

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="form-group p-3 mt-5 bg-white shadow-lg border border-light rounded">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
        />
        <label>Account ID:</label>
        <input
          type="text"
          name="accountID"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
        />
        <label>Initial Balance:</label>
        <input
          type="text"
          name="initialBalance"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
        />
        <label>Customer ID:</label>
        <input
          type="text"
          name="customerID"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
        />
        <button
          onClick={handleSubmit}
          className="form-control p-1 shadow-sm mb-1 bg-danger text-white">
          Submit
        </button>
      </form>
      {users.map((item, key) => {
        return (
          <div key={item.accountID}>
            <h3>
              Hello, {item.firstName} {item.lastName}
            </h3>
            <p>Your account ID: {item.accountID}</p>
            <p>Your Initial Balance: {item.accountID}</p>
            <p>Your Customer ID is: {item.accountID}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Form;
