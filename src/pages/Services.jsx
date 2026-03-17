// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const HERO_BG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80";

const allServices = [
  { category: "Instrumentation Engineering", icon: "📐", color: "#1a4fa0",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80",
    link: "/inst",
    items: ["Basic & Detailed Engineering","Instrument Specification","Installation Drawings","Field Instrument Selection","Loop Schematics","Material Take-Off (MTO)","Technical Bid Analysis","Purchase Order Specification","Location Layouts","Cable Engineering","PLC & DCS Systems","SCADA Systems","Reverse Engineering"] },
  { category: "System Integration", icon: "🖥", color: "#f5b800",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
    link: "/syst",
    items: ["PLC Programming","RTU Programming","HMI Programming","Building Management Systems","HVAC / Chiller Plant Automation","Fire Detection & Alarm","Access Control & Security","Lighting & Comfort Control","Power & Energy Monitoring","Substation Automation","Distributed Control Systems","SCADA Systems","Data Logging & Reports","FAT & SAT"] },
  { category: "Control Panel Workshop", icon: "⚡", color: "#1a4fa0",
    img: "https://images.unsplash.com/photo-1620283085634-c3ec57d8eb41?auto=format&fit=crop&w=700&q=80",
    link: "/facility",
    items: ["Standard DOL Starter Panels","Star Delta Starter Panels","Duty Standby Pump Starters","VFD Control Pump Starters","PLC & Logic Relay Panels","Panel Modifications & Maintenance","Yearly Maintenance Contracts","Special Fabrication"] },
  { category: "Mechanical & Packaged Assemblies", icon: "🔧", color: "#f5b800",
    img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=700&q=80",
    link: "/facility",
    items: ["Packaged Lift & Booster Pump Sets","RO Plants","Sand Water Filters","Water Chilling Units","Water Treatment Applications","Irrigation Applications","Pumping Stations","Villa Water Packages"] },
];

const process = [
  { step: "01", title: "Consultation",  icon: "💬", desc: "We assess your requirements and process needs in detail." },
  { step: "02", title: "Engineering",   icon: "📐", desc: "Detailed design, documentation, and specification." },
  { step: "03", title: "Procurement",   icon: "📦", desc: "Sourcing the right equipment to your exact specifications." },
  { step: "04", title: "Installation",  icon: "🔧", desc: "Professional installation and panel fabrication." },
  { step: "05", title: "Programming",   icon: "🖥", desc: "PLC, HMI, SCADA and BMS programming and configuration." },
  { step: "06", title: "Commissioning", icon: "✅", desc: "FAT, SAT and full commissioning with documentation." },
];

export default function Services() {
  return (
    <main className="services-page">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="breadcrumb">Home / <span>Services</span></div>
          <h1>Our <span>Services</span></h1>
          <p>A complete catalogue of engineering, integration, fabrication and commissioning services.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Full Service Offering</div>
          <h2 className="section-title">Everything We <span>Offer</span></h2>
          <div className="accent-bar" />
          <div className="svc-cards-grid">
            {allServices.map(s => (
              <div key={s.category} className="svc-card" style={{"--accent-c": s.color}}>
                <div className="svc-img-wrap">
                  <img src={s.img} alt={s.category} />
                  <div className="svc-img-overlay" />
                  <div className="svc-img-label">
                    <span className="svc-head-icon">{s.icon}</span>
                    <h3 className="svc-head-title">{s.category}</h3>
                  </div>
                </div>
                <div className="svc-body">
                  <ul className="svc-list">
                    {s.items.map(i => (
                      <li key={i} className="svc-list-item">
                        <span className="svc-dot" style={{background: s.color}} />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <Link to={s.link} className="svc-learn">Explore Service →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-inner">
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">Our <span>Process</span></h2>
          <div className="accent-bar" />
          <div className="process-track">
            {process.map((p, i) => (
              <div key={p.step} className="process-step">
                <div className="ps-step-num">{p.step}</div>
                <div className="ps-icon">{p.icon}</div>
                <h4 className="ps-title">{p.title}</h4>
                <p className="ps-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Ready to Work Together?</h2>
            <p>Contact our team and let's find the right solution for your project.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>

    </main>
  );
}