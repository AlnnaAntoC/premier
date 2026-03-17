// src/pages/Facility.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Facility.css";

const HERO_BG = "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1800&q=80";
const MECH_IMG  = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80";
const PANEL_IMG = "https://images.unsplash.com/photo-1620283085634-c3ec57d8eb41?auto=format&fit=crop&w=900&q=80";

const panelFeatures = [
  "Standard DOL Starter","Star Delta Starter","Duty Standby Pumps Starter",
  "VFD Control Pump Starters","PLC & Logic Relay Control Pump Starters",
  "Modifications & Maintenance for Control Panels","Yearly Maintenance Contracts",
  "Assembling, Designing & Special Fabrication",
];

const assemblies = [
  { icon: "💧", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=500&q=75", title: "Packaged Lift & Booster Pump Sets", desc: "Fully assembled pump sets with control panels ready for site installation." },
  { icon: "🔬", img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=500&q=75", title: "RO Plants", desc: "Reverse osmosis plant assemblies for water purification and treatment." },
  { icon: "🌊", img: "https://images.unsplash.com/photo-1468685645338-c1efcf8a9e6f?auto=format&fit=crop&w=500&q=75", title: "Sand Water Filters", desc: "Filtration assemblies for sediment and particulate removal." },
  { icon: "❄",  img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=75", title: "Water Chilling Units", desc: "Packaged water chillers with integrated control and monitoring." },
  { icon: "🏭", img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=500&q=75", title: "Water Treatment Applications", desc: "Complete water treatment solutions customized to process requirements." },
  { icon: "🌿", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=75", title: "Irrigation Applications", desc: "Automated irrigation control assemblies for industrial and commercial use." },
  { icon: "⛽", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=75", title: "Pumping Stations", desc: "Complete pumping station packages with controls, starters and instrumentation." },
  { icon: "🏠", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=500&q=75", title: "Villa Water Packages", desc: "Complete water application packages for residential villa developments." },
];

export default function Facility() {
  return (
    <main className="facility-page">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="breadcrumb">Home / <span>Our Facilities</span></div>
          <h1>Our <span>Facilities</span></h1>
          <p>State-of-the-art mechanical workshop and control panel fabrication facility in Qatar's Industrial Area.</p>
        </div>
      </section>

      {/* Mechanical Workshop */}
      <section className="section">
        <div className="section-inner fac-split">
          <div className="fac-img-col">
            <img src={MECH_IMG} alt="Mechanical Workshop" className="fac-main-img" />
          </div>
          <div className="fac-text-col">
            <div className="section-tag">Workshop 01</div>
            <h2 className="section-title">Mechanical <span>Workshop</span></h2>
            <div className="accent-bar" />
            <p className="fac-para">
              Premier System Controls' mechanical workshop is equipped with new machines, equipment,
              and tools situated in the Industrial Area. Our highly experienced on-site staff manage
              and analyze all project works — including mechanical, electrical, and instrumentation.
            </p>
            <p className="fac-para">
              We adhere to the highest standards of Quality, Health, Safety and Environment.
              Every team member is provided with complete safety uniforms and is actively trained
              in healthy and safe working conditions.
            </p>
            <div className="fac-badges">
              {["New Machinery","Experienced Staff","HSE Compliant","Quality Controlled","Full Safety Uniforms"].map(b => (
                <span key={b} className="fac-badge">✓ {b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Control Panel Workshop */}
      <section className="section panel-section">
        <div className="section-inner fac-split fac-reverse">
          <div className="fac-text-col">
            <div className="section-tag">Workshop 02</div>
            <h2 className="section-title">Control Panel <span>Workshop</span></h2>
            <div className="accent-bar" />
            <p className="fac-para">
              Premier System Controls has established its own dedicated control panel workshop
              in the Industrial Area. We are recognized for manufacturing and supplying
              precision-engineered industrial control panels with excellent efficiency and
              long-term durability.
            </p>
            <p className="fac-para">
              Each panel is customized to our customer's preferred design, control, and status
              layout — from simple motor starters to complex PLC-driven systems.
            </p>
            <div className="panel-grid">
              {panelFeatures.map(f => (
                <div key={f} className="panel-feature-item">
                  <span className="pfi-check">✓</span><span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fac-img-col">
            <img src={PANEL_IMG} alt="Control Panel Workshop" className="fac-main-img" />
          </div>
        </div>
      </section>

      {/* Assemblies */}
      <section className="section assemblies-section">
        <div className="section-inner">
          <div className="section-tag">Mounting & Fabrication</div>
          <h2 className="section-title">Packaged <span>Assemblies</span></h2>
          <div className="accent-bar" />
          <p className="section-sub">
            Our mounting and special adaptations department assembles complete packages
            designed and fabricated to your exact requirements.
          </p>
          <div className="asm-grid">
            {assemblies.map(a => (
              <div key={a.title} className="asm-card">
                <div className="asm-img-wrap">
                  <img src={a.img} alt={a.title} />
                </div>
                <div className="asm-body">
                  <span className="asm-icon">{a.icon}</span>
                  <h3 className="asm-title">{a.title}</h3>
                  <p className="asm-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Require Custom Fabrication?</h2>
            <p>We design and fabricate to your exact specifications and process requirements.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">Request a Quotation</Link>
          </div>
        </div>
      </section>

    </main>
  );
}