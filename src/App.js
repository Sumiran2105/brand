import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
