import React from "react";
import Login from "./Login";

const isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Welcome, User</h1> : <Login />}
    </div>
  );
}

export default App;
