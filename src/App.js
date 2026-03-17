// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import "./index.css"; // ← Global design tokens & shared styles

import Header   from "./components/Header";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";

import Home     from "./pages/Home";
import About    from "./pages/About";
import Inst     from "./pages/Inst";
import Syst     from "./pages/Syst";
import Facility from "./pages/Facility";
import Services from "./pages/Services";
import Contact  from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Top info bar (address / phone / email) */}
      <Header />

      {/* Sticky navigation bar */}
      <Navbar />

      <Routes>
        <Route path="/"         element={<Home     />} />
        <Route path="/about"    element={<About    />} />
        <Route path="/inst"     element={<Inst     />} />
        <Route path="/syst"     element={<Syst     />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact"  element={<Contact  />} />
      </Routes>

      {/* Global footer across all pages */}
      <Footer />
    </Router>
  );
}

export default App;