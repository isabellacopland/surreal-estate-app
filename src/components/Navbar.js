import React from "react";
import { Link } from "react-router-dom";
import image from "../styles/logo.png";
import "../styles/navbar.css";

const Navbar = () => (
  <div className="navbar">
    <img className="navbarlogo" src={image} alt="surreallogo" />
    <ul className="navbar-links">
      <Link className="navbar-links-item" to="/">
        View Properties
      </Link>
      <Link className="navbar-links-item" to="/add-property">
        Add a Property
      </Link>
    </ul>
  </div>
);

export default Navbar;
