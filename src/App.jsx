// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Services from "./Services";
import Techinfo from "./Techinfo";
import Quality from "./Quality";
import Contact from "./Contact";
import "./App.css";
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/techinfo" element={<Techinfo />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
