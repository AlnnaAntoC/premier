// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const HERO_BG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80";

const contactInfo = [
  { icon: "📍", label: "Address",       value: "Muaither, Doha, Qatar" },
  { icon: "📞", label: "Phone",         value: "+974 6682 0299" },
  { icon: "✉",  label: "Email",         value: "sales.pscontrols@gmail.com" },
  { icon: "⏰", label: "Working Hours", value: "Sunday – Thursday: 8:00 AM – 6:00 PM" },
];

const subjects = [
  "Instrumentation Engineering","PLC / HMI / SCADA Programming",
  "Building Management Systems","Control Panel Fabrication",
  "Mechanical / Pump Assembly","Maintenance Contract","General Inquiry",
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const handle = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => { e.preventDefault(); setSent(true); };

  return (
    <main className="contact-page">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="breadcrumb">Home / <span>Contact Us</span></div>
          <h1>Get In <span>Touch</span></h1>
          <p>Our engineering team is ready to discuss your requirements and deliver the right solution.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner contact-layout">

          <div className="contact-info-col">
            <div className="section-tag">Reach Us</div>
            <h2 className="section-title">Contact <span>Information</span></h2>
            <div className="accent-bar" />
            <p className="contact-intro">
              Whether you need instrumentation engineering, system integration,
              or custom panel fabrication — our team is ready to help.
            </p>
            <div className="contact-cards">
              {contactInfo.map(c => (
                <div key={c.label} className="contact-card">
                  <div className="cc-ic">{c.icon}</div>
                  <div>
                    <div className="cc-lbl">{c.label}</div>
                    <div className="cc-val">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          <div className="contact-form-col">
            {sent ? (
              <div className="form-success">
                <div className="fs-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within one business day.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-header">
                  <span className="form-header-tag">Request a Quote / Enquiry</span>
                  <h3 className="form-header-title">Send Us a Message</h3>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handle} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" placeholder="Your company name" value={form.company} onChange={handle} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" placeholder="email@example.com" value={form.email} onChange={handle} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+974 0000 0000" value={form.phone} onChange={handle} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject / Service Required *</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handle} required>
                    <option value="">— Select a service —</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} placeholder="Describe your project or requirements..." value={form.message} onChange={handle} required />
                </div>
                <button type="submit" className="btn btn-primary form-submit">Send Message ➔</button>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}