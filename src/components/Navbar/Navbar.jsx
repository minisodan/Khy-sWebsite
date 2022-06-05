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

  //instagram link, photobook, twitter link.
  // make nav bar smaller

  return (
    <nav className="nav">
      <a href="/" className="navBrand">
        KHYЯON
      </a>
      <ul className={active}>
        <li className="navItem"></li>
        <li className="navItem">
          <a href="/about" className="navLink">
            About
          </a>
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
