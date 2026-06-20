"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  padding: "14px 16px",
  borderRadius: 6,
  border: "1.5px solid rgba(28,22,18,0.30)",
  fontSize: "0.9rem",
  fontFamily: "inherit",
  color: "#1C1612",
  background: "#FAF7F2",
  transition: "border-color 0.2s, box-shadow 0.2s",
  outline: "none",
  width: "100%",
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✅</div>
        <div className="section-label" style={{ color: "#C8863A", marginBottom: 12 }}>Message Sent</div>
        <p style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.4rem", color: "#1C1612" }}>
          Thank you. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const focusStyle: React.CSSProperties = { borderColor: "#3D7A5C", boxShadow: "0 0 0 3px rgba(61,122,92,0.12)" };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name + Email row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        {[
          { label: "Your Name", name: "name", type: "text", required: true },
          { label: "Email Address", name: "email", type: "email", required: true },
        ].map((f) => (
          <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor={f.name} style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1C1612", letterSpacing: "0.04em" }}>
              {f.label}{f.required && <span style={{ color: "#C8863A", marginLeft: 4 }}>*</span>}
            </label>
            <input
              id={f.name} name={f.name} type={f.type} required={f.required}
              style={{ ...inputStyle, ...(focused === f.name ? focusStyle : {}) }}
              onFocus={() => setFocused(f.name)}
              onBlur={() => setFocused(null)}
              placeholder={f.label}
            />
          </div>
        ))}
      </div>

      {/* Phone */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        <label htmlFor="phone" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1C1612", letterSpacing: "0.04em" }}>Phone Number</label>
        <input
          id="phone" name="phone" type="tel"
          style={{ ...inputStyle, ...(focused === "phone" ? focusStyle : {}) }}
          onFocus={() => setFocused("phone")}
          onBlur={() => setFocused(null)}
          placeholder="Your phone number"
        />
      </div>

      {/* Project Type */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        <label htmlFor="project" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1C1612", letterSpacing: "0.04em" }}>Project Type</label>
        <select
          id="project" name="project" defaultValue=""
          style={{ ...inputStyle, appearance: "none", cursor: "pointer", ...(focused === "project" ? focusStyle : {}) }}
          onFocus={() => setFocused("project")}
          onBlur={() => setFocused(null)}
        >
          <option value="" disabled>Select a service…</option>
          {["Custom Timber Home","Porch or Outdoor Space","Bespoke Woodwork","Extension or Renovation","Eco-Passive Design","Design Consultancy","Other"].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        <label htmlFor="budget" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1C1612", letterSpacing: "0.04em" }}>Approximate Budget</label>
        <select
          id="budget" name="budget" defaultValue=""
          style={{ ...inputStyle, appearance: "none", cursor: "pointer", ...(focused === "budget" ? focusStyle : {}) }}
          onFocus={() => setFocused("budget")}
          onBlur={() => setFocused(null)}
        >
          <option value="" disabled>Select a budget range…</option>
          {["Under €50,000","€50,000 – €150,000","€150,000 – €300,000","€300,000 – €500,000","€500,000+","Not sure yet"].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        <label htmlFor="message" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1C1612", letterSpacing: "0.04em" }}>
          Tell us about your project <span style={{ color: "#C8863A" }}>*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          style={{ ...inputStyle, resize: "vertical", minHeight: 120, ...(focused === "message" ? focusStyle : {}) }}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          placeholder="Describe your project, location, timeline…"
        />
      </div>

      <button
        type="submit" disabled={sending}
        style={{ width: "100%", padding: 16, background: sending ? "#2C5241" : "#1E3A2F", color: "#fff", border: "none", borderRadius: 6, fontSize: "0.95rem", fontWeight: 600, cursor: sending ? "not-allowed" : "pointer", transition: "all 0.25s", letterSpacing: "0.04em" }}
        onMouseEnter={e => { if (!sending) (e.currentTarget.style.background = "#2C5241"); }}
        onMouseLeave={e => { if (!sending) (e.currentTarget.style.background = "#1E3A2F"); }}
      >
        {sending ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
