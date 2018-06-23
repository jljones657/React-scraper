import React from "react";
import "../styles/Header.css";

const Header = () => (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Times Articles</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Search</a></li>
        <li><a href="collapsible.html">Saved</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;