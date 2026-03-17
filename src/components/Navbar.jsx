// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/",          label: "Home" },
  { to: "/about",     label: "About" },
  { to: "/inst",      label: "Instrumentation" },
  { to: "/syst",      label: "System Integration" },
  { to: "/facility",  label: "Our Facilities" },
  { to: "/services",  label: "Services" },
  { to: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
          Get a Quote
        </NavLink>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "ham-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${open ? "mobile-open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `mob-link ${isActive ? "active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contact" className="mob-cta" onClick={() => setOpen(false)}>
              Get a Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}