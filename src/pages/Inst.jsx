// src/pages/Inst.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Inst.css";

const HERO_BG = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=80";

const services = [
  { icon: "📐", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=75", title: "Basic & Detailed Engineering", desc: "Comprehensive engineering documentation from concept to as-built, tailored to your process." },
  { icon: "📋", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=75", title: "Instrument Specification", desc: "Detailed instrument datasheets and specifications for procurement and installation." },
  { icon: "🗺",  img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=75", title: "Installation Drawings", desc: "Detailed installation drawings and hookup diagrams for all field instruments." },
  { icon: "🔬", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=75", title: "Field Instrument Selection", desc: "Selecting the right instrument for every process variable — pressure, flow, temperature and level." },
  { icon: "🔗", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=75", title: "Loop Schematics", desc: "Complete loop diagrams showing instrument connections, signal paths, and control logic." },
  { icon: "📦", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=75", title: "Material Take-Off (MTO)", desc: "Detailed MTO documents enabling accurate procurement and material planning." },
  { icon: "📊", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=75", title: "Technical Bid Analysis", desc: "Evaluation and comparison of vendor bids against technical specifications and standards." },
  { icon: "🧾", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=75", title: "Purchase Order Specification", desc: "Precise PO specs ensuring supplied instruments meet exact project requirements." },
  { icon: "📍", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=75", title: "Location Layouts", desc: "Instrument location plans and general arrangement drawings for all field devices." },
  { icon: "🔌", img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=500&q=75", title: "Cable Engineering", desc: "Cable schedules, routing plans, and termination diagrams for complete field wiring." },
  { icon: "🖥",  img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=500&q=75", title: "PLC & DCS Systems", desc: "Design, specification, and programming of Programmable Logic Controllers and Distributed Control Systems." },
  { icon: "📡", img: "https://images.unsplash.com/photo-1620283085634-c3ec57d8eb41?auto=format&fit=crop&w=500&q=75", title: "SCADA Systems", desc: "Full SCADA architecture design, configuration, and integration for remote monitoring and control." },
  { icon: "🔄", img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=500&q=75", title: "Reverse Engineering", desc: "Analysis and recreation of existing control systems documentation from installed hardware." },
];

const tools = ["AutoCAD","EPLAN","HART Communicator","InTouch","Wonderware","Siemens TIA Portal","Allen-Bradley Studio 5000","Schneider Unity Pro"];

export default function Inst() {
  const [active, setActive] = useState(null);
  return (
    <main className="inst-page">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="breadcrumb">Home / <span>Instrumentation</span></div>
          <h1>Instrumentation <span>Engineering</span></h1>
          <p>Complete engineering services for field instruments, control systems, and process documentation.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner inst-intro">
          <div>
            <div className="section-tag">Our Expertise</div>
            <h2 className="section-title">Complete Instrumentation <span>Solutions</span></h2>
            <div className="accent-bar" />
            <p className="inst-para">
              Premier System Controls provides a complete solution for all your instrumentation
              problems — delivering the right instruments for your process and the engineering
              documentation to back them up. Our team handles everything from conceptual design
              through procurement, installation, and commissioning.
            </p>
          </div>
          <div className="inst-tools-box">
            <div className="itb-header">Engineering Tools &amp; Platforms</div>
            <div className="itb-tags">
              {tools.map(t => <span key={t} className="itb-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section inst-services-section">
        <div className="section-inner">
          <div className="section-tag">Engineering Services</div>
          <h2 className="section-title">What We <span>Deliver</span></h2>
          <div className="accent-bar" />
          <div className="inst-grid">
            {services.map((s, i) => (
              <div key={s.title} className={`inst-card ${active === i ? "inst-active" : ""}`}
                onClick={() => setActive(active === i ? null : i)}>
                <div className="inst-card-img-wrap">
                  <img src={s.img} alt={s.title} className="inst-card-img" />
                  <div className="inst-card-num">{String(i+1).padStart(2,"0")}</div>
                </div>
                <div className="inst-card-body">
                  <span className="inst-icon">{s.icon}</span>
                  <h3 className="inst-title">{s.title}</h3>
                  <p className={`inst-desc ${active === i ? "inst-desc-open" : ""}`}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Need Instrumentation Engineering?</h2>
            <p>Talk to our team about your process requirements today.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">Contact Our Engineers</Link>
          </div>
        </div>
      </section>

    </main>
  );
}