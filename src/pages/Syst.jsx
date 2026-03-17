// src/pages/Syst.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Syst.css";

const HERO_BG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80";

const categories = [
  { id: "plc", label: "PLC / RTU / HMI", icon: "🖥",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=700&q=80",
    services: ["PLC Programming & Troubleshooting","RTU Programming","HMI Programming","Control System Support","System Design & Engineering","Factory Acceptance Test (FAT)","Site Acceptance Test (SAT)","Data Logging & Report Generation"] },
  { id: "bms", label: "BMS / Building Systems", icon: "🏢",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=80",
    services: ["Building Management Systems (BMS)","HVAC Control / Chiller Plant Automation","Fire Detection & Alarm System","Access Control, Security & Surveillance","Lighting Control","Comfort Control","Intuitive Graphical User Interface","Advanced Reporting"] },
  { id: "power", label: "Power & Energy", icon: "⚡",
    img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=700&q=80",
    services: ["Power & Energy Monitoring Systems","Substation Automation Systems","Energy Monitoring Systems","Distributed Control Systems","PLCs for Process Industry","Generator System Control","UPS System Integration","Electrical System Automation"] },
  { id: "scada", label: "SCADA & Control Panels", icon: "📡",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    services: ["SCADA Systems","Control Panel Design & Fabrication","Installation & Service","PA System Integration","CCTV System","Energy Meter System","Fire System","Access System"] },
];

const protocols = [
  { name: "MODBUS",   desc: "Serial/TCP communication for industrial devices" },
  { name: "BACnet",   desc: "Building Automation and Control Networks" },
  { name: "LonWorks", desc: "Local Operating Network for smart buildings" },
  { name: "OPC",      desc: "Open Platform Communications standard" },
];

const controls = [
  { icon: "❄", label: "HVAC System",          img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=75" },
  { icon: "⚡", label: "Electrical System",    img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&q=75" },
  { icon: "🔋", label: "Generator System",     img: "https://images.unsplash.com/photo-1620283085634-c3ec57d8eb41?auto=format&fit=crop&w=400&q=75" },
  { icon: "🔌", label: "UPS System",           img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=75" },
  { icon: "🔥", label: "FIRE System",          img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=75" },
  { icon: "🔐", label: "ACCESS System",        img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=400&q=75" },
  { icon: "📷", label: "CCTV System",          img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=400&q=75" },
  { icon: "🔊", label: "PA System",            img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=75" },
  { icon: "📊", label: "Energy Meter System",  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=75" },
];

export default function Syst() {
  const [activeTab, setActiveTab] = useState("plc");
  const current = categories.find(c => c.id === activeTab);
  return (
    <main className="syst-page">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="breadcrumb">Home / <span>System Integration</span></div>
          <h1>System <span>Integration</span></h1>
          <p>Specialising in PLC, RTU, HMI, SCADA, BMS and full building control system integration.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Integration Services</div>
          <h2 className="section-title">What We <span>Integrate</span></h2>
          <div className="accent-bar" />
          <div className="syst-tabs">
            {categories.map(c => (
              <button key={c.id} className={`syst-tab ${activeTab === c.id ? "syst-tab-active" : ""}`} onClick={() => setActiveTab(c.id)}>
                <span>{c.icon}</span> {c.label}
              </button>
            ))}
          </div>
          <div className="syst-panel">
            <div className="sp-img-wrap">
              <img src={current.img} alt={current.label} />
              <div className="sp-img-overlay" />
            </div>
            <div className="sp-content">
              <div className="sp-header">
                <span className="sp-icon">{current.icon}</span>
                <h3>{current.label}</h3>
              </div>
              <div className="sp-list">
                {current.services.map(s => (
                  <div key={s} className="sp-item"><span className="sp-bullet">▸</span> {s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section syst-proto-section">
        <div className="section-inner">
          <div className="section-tag">Communication Protocols</div>
          <h2 className="section-title">Protocols <span>Supported</span></h2>
          <div className="accent-bar" />
          <div className="proto-grid">
            {protocols.map(p => (
              <div key={p.name} className="proto-card">
                <div className="proto-name">{p.name}</div>
                <div className="proto-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Systems We Control</div>
          <h2 className="section-title">Control <span>Coverage</span></h2>
          <div className="accent-bar" />
          <div className="controls-icon-grid">
            {controls.map(c => (
              <div key={c.label} className="cig-item">
                <div className="cig-img-wrap">
                  <img src={c.img} alt={c.label} />
                </div>
                <div className="cig-info">
                  <span className="cig-icon">{c.icon}</span>
                  <span className="cig-label">{c.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Looking for System Integration?</h2>
            <p>Our specialists are ready to design and integrate your control system.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">Speak to a Specialist</Link>
            <Link to="/services" className="btn btn-outline">All Services</Link>
          </div>
        </div>
      </section>

    </main>
  );
}