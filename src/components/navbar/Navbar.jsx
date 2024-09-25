import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MenuItems } from "../../constants/MenuItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TripMingle</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button onClick={handleSignupClick}>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
