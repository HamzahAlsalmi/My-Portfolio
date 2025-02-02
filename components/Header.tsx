import React from "react";
import { Link } from "react-router-dom";
import "../src/Header.css"; // Optionally, create a separate CSS file for the header

const Header: React.FC = () => {
  return (
    <header>
      <h1>Hamzah Alsalmi</h1>
      <nav>
        <Link to="/" className="nav-link">
          About Me
        </Link>
        <Link to="/portfolio" className="nav-link">
          Portfolio
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/resume" className="nav-link">
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;
