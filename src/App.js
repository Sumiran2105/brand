import React, { useState } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";

const App = () => {
  const [activePage, setActivePage] = useState("home");

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
    navLinks: {
      display: "flex",
      gap: "24px",
    },
    link: (isActive) => ({
      color: isActive ? "#38bdf8" : "#e5e7eb",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: isActive ? "600" : "400",
    }),
    page: {
      padding: "40px",
    },
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>MyApp</div>

        <div style={styles.navLinks}>
          <span style={styles.link(activePage === "home")} onClick={() => setActivePage("home")}>
            Home
          </span>
          <span style={styles.link(activePage === "about")} onClick={() => setActivePage("about")}>
            About
          </span>
          <span style={styles.link(activePage === "contact")} onClick={() => setActivePage("contact")}>
            Contact
          </span>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div style={styles.page}>{renderPage()}</div>
    </>
  );
};

export default App;
