// src/components/Header.jsx
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo">
          <img src="/favicon.png" alt="Premier System Controls" className="header-logo-img" />
        </div>

        <div className="header-contact-bar">
          <div className="hc-item">
            <span className="hc-icon">📍</span>
            <div>
              <span className="hc-label">Location</span>
              <span className="hc-value">Muaither, Doha, Qatar</span>
            </div>
          </div>
          <div className="hc-divider" />
          <div className="hc-item">
            <span className="hc-icon">📞</span>
            <div>
              <span className="hc-label">Call Us</span>
              <span className="hc-value">+ 974 6682 0299</span>
            </div>
          </div>
          <div className="hc-divider" />
          <div className="hc-item">
            <span className="hc-icon">✉</span>
            <div>
              <span className="hc-label">Email</span>
              <span className="hc-value">sales.pscontrols@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}