import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="TripMingle" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#travel-buddy">Find Travel Buddy</a>
          </li>
          <li>
            <a href="#destinations">Destinations</a>
          </li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
