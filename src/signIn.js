import React from "react";
import "./signIn.css";

export default function signIn() {
  return (
    <div>
      <form className="formSignIn">
        <div style={{ marginLeft: "10px" }}>
          <h1 style={{ marginTop: "7px" }}>Sign In</h1>
          <br />
          <label htmlFor="email">
            <b style={{ marginRight: "10px" }}>Username *</b>
          </label>
          <br />
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Username"
            name="email"
            required
          />
          <br />
          <label htmlFor="password">
            <b style={{ marginRight: "10px", marginTop: "10px" }}>Password *</b>
          </label>
          <br />
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Password"
            name="password"
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button className="signInButton">Sign In</button>
        </div>
      </form>
    </div>
  );
}
