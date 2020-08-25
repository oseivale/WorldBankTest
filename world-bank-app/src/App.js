import React from "react";
import Form from "./components/form/Form";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div data-test="appComponent">
      <NavBar />
      <Form />
    </div>
  );
}

export default App;
