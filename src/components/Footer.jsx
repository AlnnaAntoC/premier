// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { to: "/",         label: "Home" },
  { to: "/about",    label: "About Us" },
  { to: "/inst",     label: "Instrumentation" },
  { to: "/syst",     label: "System Integration" },
  { to: "/facility", label: "Our Facilities" },
  { to: "/services", label: "Services" },
  { to: "/contact",  label: "Contact Us" },
];

const services = [
  "PLC & DCS Systems",
  "SCADA Systems",
  "BMS / HVAC Automation",
  "Control Panel Design",
  "Fire Detection & Alarm",
  "Energy Monitoring",
  "Access Control & CCTV",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/favicon.png" alt="Premier System Controls" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Complete solutions for all your instrumentation and control system needs.
              Expert engineers and technicians delivering precision across every project.
            </p>
            <div className="footer-protocols">
              {["MODBUS","BACnet","LonWorks","OPC"].map(p => (
                <span key={p} className="proto-badge">{p}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">
                    <span className="fl-arrow">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Core Services</h4>
            <ul className="footer-list">
              {services.map(s => (
                <li key={s}>
                  <span className="footer-svc">
                    <span className="fl-arrow">›</span> {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="fc-icon">📍</span>
                <span>Muaither, Doha, Qatar</span>
              </li>
              <li>
                <span className="fc-icon">📞</span>
                <span>+974 6682 0299</span>
              </li>
              <li>
                <span className="fc-icon">✉</span>
                <span>sales.pscontrols@gmail.com</span>
              </li>
              <li>
                <span className="fc-icon">⏰</span>
                <span>Sun – Thu: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
            <Link to="/contact" className="footer-cta-btn">Get a Quote</Link>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Premier System Controls. All rights reserved.
          </span>
          <span className="footer-tagline">
            Designed & Developed by Alnna Anto C
          </span>
        </div>
      </div>
    </footer>
  );
}