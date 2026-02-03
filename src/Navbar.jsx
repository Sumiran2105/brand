import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-menu" aria-hidden="true">
          ☰
        </span>
        <NavLink to="/" className="navbar-logo">
          Thread & Needle
        </NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
        <NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")}>
          Sign in
        </NavLink>
        <NavLink to="/signup" className="navbar-cta">
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
