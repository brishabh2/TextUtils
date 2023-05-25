import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li className="navigation">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navigation">
          <NavLink to="/textUtils" activeClassName="selected">
            TextUtils
          </NavLink>
        </li>
        <li className="navigation">
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li className="login">
          <NavLink to="/signIn">SignIn</NavLink>
        </li>
        <li className="login">
          <NavLink to="/signUp">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
}
