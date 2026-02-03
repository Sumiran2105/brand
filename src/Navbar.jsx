import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Thread & Needle</div>

      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
        <NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")}>
          Sign in
        </NavLink>
      </div>
      <NavLink className="navbar-cta" to="/signup">
        Join the club
      </NavLink>
    </nav>
  );
};

export default Navbar;
