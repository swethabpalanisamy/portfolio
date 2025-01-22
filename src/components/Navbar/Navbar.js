import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="nav-title" href="/">
        <img src={assets.code} alt="coding" />
      </a>
      <div className="menu">
        <img
          className="menu-btn"
          src={menuOpen ? assets.closeIcon : assets.menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menu-items ${menuOpen && "menu-open"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About me</a>
          </li>
          {/* <li>
            <a href="#experience">Experience</a>
          </li> */}
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
