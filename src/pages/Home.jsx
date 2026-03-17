// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HERO_BG = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1800&q=80";

const highlights = [
  {
    icon: "📐",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    title: "Instrumentation Engineering",
    desc: "Basic & detailed engineering, instrument specs, loop schematics, PLC/DCS/SCADA systems.",
    link: "/inst",
  },
  {
    icon: "🖥",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    title: "System Integration",
    desc: "BMS, HVAC automation, fire detection, access control, energy monitoring and more.",
    link: "/syst",
  },
  {
    icon: "⚡",
    img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=600&q=80",
    title: "Control Panel Workshop",
    desc: "Custom-fabricated control panels with DOL, Star-Delta, VFD, PLC logic starters.",
    link: "/facility",
  },
  {
    icon: "🔧",
    img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=600&q=80",
    title: "Mechanical Workshop",
    desc: "Pump sets, RO plants, water treatment, irrigation and complete package assemblies.",
    link: "/facility",
  },
];

const whyUs = [
  { icon: "🎓", title: "Expert Engineers", desc: "Seasoned professionals in design, programming, tuning & troubleshooting." },
  { icon: "✅", title: "Quality Standards", desc: "Adhering to the highest industry and safety standards on every project." },
  { icon: "🛡", title: "HSE Compliance", desc: "Full Health, Safety & Environment compliance with rigorous hazard assessment." },
  { icon: "🔩", title: "Custom Solutions", desc: "Tailored designs built to your exact process and specification requirements." },
];

const controls = [
  "HVAC System","Electrical System","Generator System","UPS System",
  "FIRE System","ACCESS System","CCTV System","PA System","Energy Meter System",
];

const protocols = ["MODBUS","BACnet","LonWorks","OPC"];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Engineers" },
  { value: "24/7", label: "Support Available" },
];

const facilityImgs = [
  {
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=700&q=80",
    title: "Mechanical Workshop",
    desc: "Equipped with advanced machinery for mechanical, electrical and instrumentation works.",
    link: "/facility",
  },
  {
    img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=700&q=80",
    title: "Control Panel Workshop",
    desc: "Precision-engineered industrial control panels fabricated to your exact requirements.",
    link: "/facility",
  },
];

export default function Home() {
  return (
    <main className="home-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="tag-dot" /> Premier System Controls — Qatar
            </div>
            <h1 className="hero-title">
              Complete Solutions for<br />
              <em>Instrumentation</em> &amp;<br />
              Control Systems
            </h1>
            <p className="hero-desc">
              Professional team of Engineers and Technicians delivering precision in
              design, installation, programming, tuning, and troubleshooting for
              virtually any control instrumentation or system.
            </p>
            <div className="hero-btns">
              <Link to="/services" className="btn btn-primary">Explore Services</Link>
              <Link to="/contact"  className="btn btn-outline">Get a Quote</Link>
            </div>
            <div className="hero-protocols">
              {protocols.map(p => (
                <span key={p} className="h-proto">{p}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hv-ring hv-ring1" />
            <div className="hv-ring hv-ring2" />
            <div className="hv-core">
              <span className="hv-gear">⚙</span>
              <span className="hv-label">PREMIER<br/>SYSTEMS</span>
            </div>
            <div className="hv-orbit">
              {["PLC","DCS","SCADA","BMS","HMI"].map((t,i) => (
                <div key={t} className="hv-node" style={{ "--i": i }}>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar">
        <div className="stats-inner">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="section highlights-section">
        <div className="section-inner">
          <div className="section-tag">Core Capabilities</div>
          <h2 className="section-title">What We <span>Do</span></h2>
          <div className="accent-bar" />
          <p className="section-sub">
            From engineering design to on-site commissioning, Premier System Controls covers
            the full spectrum of industrial control requirements.
          </p>
          <div className="highlights-grid">
            {highlights.map(h => (
              <Link to={h.link} key={h.title} className="highlight-card">
                <img src={h.img} alt={h.title} className="card-img" />
                <div className="hc-body">
                  <h3 className="hc-title">{h.title}</h3>
                  <p className="hc-desc">{h.desc}</p>
                  <span className="hc-more">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section why-section">
        <div className="section-inner why-inner">
          <div className="why-text">
            <div className="section-tag">Why Premier</div>
            <h2 className="section-title">Why Choose <span>Us</span></h2>
            <div className="accent-bar" />
            <p className="section-sub">
              Deep expertise, quality commitment, and a results-focused approach to every
              instrumentation challenge.
            </p>
            <Link to="/about" className="btn-outline-blue">About Our Company</Link>
          </div>
          <div className="why-cards">
            {whyUs.map(w => (
              <div key={w.title} className="why-card">
                <span className="why-icon">{w.icon}</span>
                <div>
                  <h4 className="why-title">{w.title}</h4>
                  <p className="why-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities Snapshot ── */}
      <section className="section facility-snap-section">
        <div className="section-inner">
          <div className="section-tag">Our Facilities</div>
          <h2 className="section-title">World-Class <span>Workshops</span></h2>
          <div className="accent-bar" />
          <div className="facility-snap-grid">
            {facilityImgs.map(f => (
              <Link to={f.link} key={f.title} className="fsnap-card">
                <div className="fsnap-img-wrap">
                  <img src={f.img} alt={f.title} />
                  <div className="fsnap-overlay">
                    <span>View Facilities →</span>
                  </div>
                </div>
                <div className="fsnap-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Controls ── */}
      <section className="section controls-section">
        <div className="section-inner">
          <div className="section-tag">Systems Coverage</div>
          <h2 className="section-title">Controls We <span>Handle</span></h2>
          <div className="accent-bar" />
          <div className="controls-grid">
            {controls.map(c => (
              <div key={c} className="control-pill">
                <span className="cp-dot" />{c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Ready to Start Your Project?</h2>
            <p>Our engineering team is ready to deliver the right solution for your process.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

    </main>
  );
}