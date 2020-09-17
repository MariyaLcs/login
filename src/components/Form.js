import React, { useState } from "react";

function Form() {
  const [fName, setFName] = useState("");
  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }
  return (
    <form className="form">
      <h1>Hello {fName}</h1>
      <input
        type="text"
        placeholder="Username"
        name="fName"
        value={fName}
        onChange={updateFName}
      />
      <input type="password" placeholder="Password" />

      <input type="password" placeholder="Confirm Password" />

      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
