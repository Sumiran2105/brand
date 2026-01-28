import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      backgroundColor: "#0f172a",
    },
    logo: {
      color: "#ffffff",
      fontSize: "20px",
      fontWeight: "bold",
    },
    links: {
      display: "flex",
      gap: "24px",
    },
    link: (isActive) => ({
      color: isActive ? "#38bdf8" : "#e5e7eb",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: isActive ? "600" : "400",
    }),
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyApp</div>

      <div style={styles.links}>
        <NavLink to="/" style={({ isActive }) => styles.link(isActive)}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => styles.link(isActive)}>
          About
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => styles.link(isActive)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
