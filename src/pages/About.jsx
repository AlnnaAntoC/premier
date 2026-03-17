// src/pages/About.jsx
import React from "react";
import "./About.css";

const HERO_BG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80";
const CHAIRMAN_PHOTO = "";

const values = [
  { icon: "🎯", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=75", title: "Precision", desc: "Every design and installation is executed with exact engineering standards and meticulous attention to detail." },
  { icon: "🤝", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=75", title: "Reliability", desc: "We stand behind our solutions with responsive support and long-term commitment to our clients." },
  { icon: "💡", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=75", title: "Innovation", desc: "Continuously adopting the latest technologies in PLC, SCADA, DCS and building automation." },
  { icon: "🛡", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=75", title: "Safety", desc: "HSE compliance and occupational safety are non-negotiable on every project and in every workshop." },
];

const team = [
  { role: "Instrumentation Engineers", count: "10+" },
  { role: "PLC/HMI Programmers",       count: "8+"  },
  { role: "Control Panel Technicians",  count: "12+" },
  { role: "Site & Commissioning Teams", count: "6+"  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="breadcrumb">Home / <span>About Us</span></div>
          <h1>About <span>Premier System Controls</span></h1>
          <p>Engineering excellence powering industrial control across Qatar and beyond.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="section-inner about-intro">
          <div>
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">A Team Built for <span>Precision</span></h2>
            <div className="accent-bar" />
            <p className="about-para">
              Premier System Controls is a dedicated instrumentation and control systems company
              headquartered in Qatar's Industrial Area. We offer a complete solution for all
              your instrumentation challenges — combining the expertise of seasoned engineers
              with cutting-edge technology.
            </p>
            <p className="about-para">
              Our professional team of Engineers and Technicians specialises in designing,
              installing, programming, tuning, and troubleshooting for virtually any control
              instrumentation or system — from single instruments to complex SCADA architectures.
            </p>
            <p className="about-para">
              We believe practical solutions and user-friendly systems are the hallmark of great
              engineering. Every solution we deliver is designed to be easy to understand, operate,
              and maintain.
            </p>
          </div>
          <div className="about-img-wrap">
            <img
              src="/company.png"
              alt="Premier System Controls"
              className="about-company-img"
            />
            <div className="about-img-badge">
              <span className="aib-icon">⚙</span>
              <div>
                <div className="aib-name">Premier System Controls</div>
                <div className="aib-sub">Industrial Area, Qatar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chairman's Message ── */}
      <section className="section chairman-section">
        <div className="section-inner">
          <div className="section-tag">Leadership</div>
          <h2 className="section-title">Chairman's <span>Message</span></h2>
          <div className="accent-bar" />
          <div className="chairman-layout">
            <div className="chairman-photo-wrap">
              <img src={CHAIRMAN_PHOTO} alt="Chairman" className="chairman-photo" />
              <div className="chairman-badge">
                <div className="cb-name">Name </div>
                <div className="cb-title">Chairman &amp; Founder</div>
                <div className="cb-company">Premier System Controls</div>
              </div>
            </div>
            <div className="chairman-message">
              <div className="cm-quote-mark">"</div>
              <p className="cm-text">
                Since founding Premier System Controls, our mission has remained unwavering — to deliver
                the most precise, reliable, and innovative control solutions across Qatar's industrial
                landscape. We built this company on the belief that engineering excellence is not just
                a standard, it is a commitment to every client we serve.
              </p>
              <p className="cm-text">
                Over the years, we have assembled a team of extraordinary engineers and technicians
                who share that same passion. From complex SCADA architectures to precision-fabricated
                control panels, every project reflects our dedication to quality, safety, and
                long-term partnership with our clients.
              </p>
              <p className="cm-text">
                As we continue to grow, we remain anchored to our core values: precision, reliability,
                innovation, and safety. I am proud of what our team achieves every day, and I look
                forward to building the future of Qatar's industrial infrastructure together.
              </p>
              <div className="cm-signature">
                <div className="cms-name">Name</div>
                <div className="cms-role">Chairman &amp; Founder, Premier System Controls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section vm-section">
        <div className="section-inner">
          <div className="section-tag">Our Direction</div>
          <h2 className="section-title">Vision &amp; <span>Mission</span></h2>
          <div className="accent-bar" />
          <div className="vm-grid">
            <div className="vm-card vm-vision">
              <div className="vm-icon">🔭</div>
              <h3 className="vm-heading">Our Vision</h3>
              <p className="vm-text">
                To be the most trusted and innovative instrumentation and control systems company
                in Qatar and the wider GCC region — recognised for engineering excellence,
                operational integrity, and transformative solutions that power the industries
                of tomorrow.
              </p>
              <ul className="vm-list">
                <li><span>→</span> Regional leader in control systems</li>
                <li><span>→</span> Technology-driven, future-ready solutions</li>
                <li><span>→</span> Trusted partner for Qatar's industrial growth</li>
              </ul>
            </div>
            <div className="vm-card vm-mission">
              <div className="vm-icon">🎯</div>
              <h3 className="vm-heading">Our Mission</h3>
              <p className="vm-text">
                To provide complete, reliable, and practical instrumentation and control solutions
                through exceptional engineering expertise, a commitment to HSE standards, and a
                customer-first philosophy — delivering measurable value to every client on every project.
              </p>
              <ul className="vm-list">
                <li><span>→</span> Deliver precision engineering on every project</li>
                <li><span>→</span> Maintain highest HSE &amp; quality standards</li>
                <li><span>→</span> Empower clients through knowledge and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values-section">
        <div className="section-inner">
          <div className="section-tag">Our Values</div>
          <h2 className="section-title">What Drives <span>Us</span></h2>
          <div className="accent-bar" />
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <img src={v.img} alt={v.title} className="card-img-sm" />
                <div className="value-body">
                  <span className="value-icon">{v.icon}</span>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Our People</div>
          <h2 className="section-title">The <span>Team</span></h2>
          <div className="accent-bar" />
          <div className="team-grid">
            {team.map(t => (
              <div key={t.role} className="team-card">
                <span className="team-count">{t.count}</span>
                <span className="team-role">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE */}
      <section className="section hse-section">
        <div className="section-inner hse-inner">
          <div className="hse-content">
            <div className="section-tag">Safety First</div>
            <h2 className="section-title">Health, Safety &amp; <span>Environment</span></h2>
            <div className="accent-bar" />
            <p className="about-para">
              We adhere to the highest standards of Quality, Health, Safety and Environment.
              Occupational safety standards are rigorously maintained to ensure our workforce is
              protected from all work-related hazards.
            </p>
            <p className="about-para">
              All staff are provided with complete safety uniforms and are actively involved in
              ongoing programs about healthy and safe working conditions — ensuring the highest
              quality of workmanship on every project.
            </p>
          </div>
          <div className="hse-badges">
            {["Quality Standards","HSE Compliance","Safety Uniforms","Hazard Assessment","Staff Training","Safe Workmanship"].map(b => (
              <div key={b} className="hse-badge">
                <span className="hse-check">✓</span> {b}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}