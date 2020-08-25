import React, { useState } from "react";

function Form() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    accountID: "",
    initialBalance: "",
    customerID: "",
  };

  const initialConversionAmount = {
    conversionAmount: 0,
  };

  // State management for various functions
  const [formData, setFormData] = useState(initialFormData);
  const [users, setUsers] = useState([]);
  const [currency, setCurrency] = useState("CAD");
  const [selectedOption, setSelectedOption] = useState(false);
  const [selectedYesNo, setSelectedYesNo] = useState(false);
  const [conversionAmount, setConversionAmount] = useState(
    initialConversionAmount
  );

  // Utility functions

  // Handles updates in form data
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // Handles the currency conversion
  const handleAmountChange = (e) => {
    setConversionAmount({
      ...conversionAmount,

      [e.target.name]: e.target.value,
    });
  };

  // Handles the submission of form data
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers(users.concat(formData));
    console.log(formData);
  };

  // Handles the option to either withdraw or deposit funds
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handles the currency conversion factor
  const handleConversionFactor = (currency) => {
    let conversionFactor;
    if (currency === "CAD") {
      conversionFactor = 1;
    } else if (currency === "MXN") {
      conversionFactor = 0.1;
    } else {
      conversionFactor = 2;
    }

    return conversionFactor;
  };

  // Handles the Yes or No option selected for additional user actions
  const handleOptionYesNo = (event) => {
    setSelectedYesNo(event.target.value);
  };

  return (
    <div className="container" data-test="formComponent">
      <small>
        *Exchange rates: $1.00 CAD = $0.50 USD | $1.00 CAD = $10.00 MXN
      </small>
      {/* User input form start */}
      <form
        onSubmit={handleSubmit}
        className="form-group p-3 mt-5 pl-5 pr-5 pt-5 bg-white shadow-lg border border-light rounded">
        <h4 className="pb-5">
          To register your account, please enter the information below:
        </h4>
        {/* First name input */}
        <label className="pt-3">First Name</label>
        <input
          placeholder="Enter your first name"
          type="text"
          name="firstName"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
          data-test="formInput"
        />
        {/* Last name input */}
        <label className="pt-3">Last Name</label>
        <input
          placeholder="Enter your last name"
          type="text"
          name="lastName"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
          data-test="formInput"
        />
        {/* Account number input */}
        <label className="pt-3">Account Number</label>
        <input
          placeholder="Enter your account Number"
          type="text"
          name="accountID"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
          data-test="formInput"
        />
        {/* Initial balance input */}
        <label className="pt-3">Initial Balance (CAD)</label>
        <input
          placeholder="Enter your initial Balance"
          type="text"
          name="initialBalance"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
          data-test="formInput"
        />
        {/* Customer ID input */}
        <label className="pt-3">Customer ID</label>
        <input
          placeholder="Enter your customer ID"
          type="text"
          name="customerID"
          onChange={handleChange}
          className="form-control p-1 shadow-sm mb-1"
          data-test="formInput"
        />
        {/* Option to continue with addtional user actions */}
        <h4 className="pt-5"> Would you like to perform another action?</h4>
        {/* Option yes */}
        <label className="p-2 mt-1">Yes</label>
        <input
          type="radio"
          value="Yes"
          checked={selectedYesNo === "Yes"}
          onChange={handleOptionYesNo}
        />
        {/* Option no */}
        <label className="ml-5 p-2 mt-1">No</label>
        <input
          type="radio"
          value="No"
          checked={selectedYesNo === "No"}
          onChange={handleOptionYesNo}
        />

        {/* Additonal user actions */}
        <div
          style={
            selectedYesNo === "Yes"
              ? { visibility: "visible" }
              : { visibility: "collapse", height: "0" }
          }>
          {" "}
          {/* Option to deposit */}
          <h4 className="pt-5">Would you like to:</h4>
          <label className="p-2 mt-1">Deposit</label>
          <input
            type="radio"
            value="Deposit"
            checked={selectedOption === "Deposit"}
            onChange={handleOptionChange}
          />
          {/* Option to withdraw */}
          <label className="ml-5 p-2 mt-1">Withdraw</label>
          <input
            type="radio"
            value="Withdraw"
            checked={selectedOption === "Withdraw"}
            onChange={handleOptionChange}
          />
          <h4>
            You selected to:{" "}
            <span
              className={
                selectedOption === "Withdraw" ? "text-danger" : "text-success"
              }>
              {selectedOption}
            </span>
          </h4>
          <br />
          {/* Currency selection */}
          <h4>Please select the currency below:</h4>
          <label className="p-2">Currency</label>
          <select
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}>
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
            <option value="MXN">MXN</option>
          </select>
          {/* User input amount for deposit or withdrawal */}
          <label className="ml-5 p-2 mt-1">Please enter the amount</label>
          <input
            type="text"
            name="conversionAmount"
            onChange={handleAmountChange}
          />
          {/* Total amount entered in respective currency */}
          <h4 className="pt-3 pb-3">
            Total entered amount in {currency}: $
            {conversionAmount.conversionAmount}
          </h4>
        </div>
        {/* If an option to deposit or withdraw is selected, display confirmation message */}
        {selectedOption && (
          <h4
            className={
              selectedOption === "Withdraw"
                ? "text-danger pt-3 pb-3"
                : "text-success pt-3 pb-3"
            }>
            You are{" "}
            {selectedOption === "Withdraw" ? "withdrawing" : "depositing"}: ${" "}
            {parseFloat(conversionAmount.conversionAmount) *
              handleConversionFactor(currency)}{" "}
            CAD
          </h4>
        )}
        {/* Display total balance in $CAD */}
        <h4 className="pt-3 pb-3">
          Total balance in CAD: $
          {formData.initialBalance > 0 && selectedOption === "Withdraw"
            ? parseFloat(formData.initialBalance) -
              parseFloat(
                conversionAmount.conversionAmount *
                  handleConversionFactor(currency)
              )
            : formData.initialBalance > 0 &&
              parseFloat(
                conversionAmount.conversionAmount *
                  handleConversionFactor(currency)
              ) + parseFloat(formData.initialBalance)}
        </h4>
        {/* Submit form data */}
        <button
          onClick={handleSubmit}
          className="form-control p-1 shadow-sm mb-5 mt-5 bg-danger text-white">
          Submit
        </button>
      </form>
      {/* Display form output */}
      {users.map((item) => {
        return (
          <div key={item.accountID} className="pb-5">
            <h3>
              Customer: {item.firstName} {item.lastName}
            </h3>
            {item.customerID && <p>Customer ID: {item.customerID}</p>}
            {item.accountID && <p>Account Number: {item.accountID}</p>}
            {item.initialBalance && (
              <p>
                Initial Balance for account number {item.accountID}: $
                {item.initialBalance} CAD
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Form;
