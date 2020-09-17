import React, { useState } from "react";
import Input from "./Input";

function Form(props) {
  const [fName, setFName] = useState("");
  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }
  return (
    <form className="form">
      <h1>Hello {fName}</h1>
      <Input
        type="text"
        placeholder="Username"
        name="fName"
        value="fName"
        onChange={updateFName}
      />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">
        {props.isRegistered ? "Log In" : "Register"}
      </button>
    </form>
  );
}

export default Form;
