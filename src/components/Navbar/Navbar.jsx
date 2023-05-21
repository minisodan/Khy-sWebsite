import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("navMenu");

  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");
  };

  //instagram Link, photobook, twitter Link.
  // make nav bar smaller

  return (
    <nav className="nav">
      <Link to="/" className="navBrand">
        KHYЯON
      </Link>
      <ul className={active}>
        <li className="navItem"></li>
        <li className="navItem">
          <Link to="/about" className="navLink">
            About
          </Link>
        </li>
        <li className="navItem">
          <a href="https://khykard.carrd.co/" className="navLink">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className="navToggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
