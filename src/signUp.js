import React from "react";
import "./signUp.css";

export default function signUp() {
  return (
    <div>
      <form className="form">
        <div style={{ marginLeft: "10px" }}>
          <h1 style={{ marginTop: "7px" }}>Sign Up</h1>
          <p style={{ marginTop: "7px", marginBottom: "10px" }}>
            Please fill the details in this form to create an account
          </p>
          <label htmlFor="email">
            <b style={{ marginRight: "10px" }}>Email *</b>
          </label>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />
          <br />
          <label htmlFor="password">
            <b style={{ marginRight: "10px", marginTop: "10px" }}>Password *</b>
          </label>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />
          <label htmlFor="Confirm-password">
            <b style={{ marginRight: "10px" }}>Confirm Password *</b>
          </label>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Confirm Password"
            name="confirm-password"
            required
          />
          <br />
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          <p style={{ marginTop: "10px" }}>
            By Creating an account you agree to our{" "}
            <a href="/">Term Conditions & Privacy.</a>
          </p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button className="cancelButton">Cancel</button>
          <button className="submitButton">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
