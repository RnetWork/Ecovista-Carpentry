import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Eco Vista Carpentry. We build timber frame homes across Ireland and speak your language — no language barriers.",
};

const details = [
  { icon: "📞", label: "Phone", value: "+353 1 234 5678", href: "tel:+35312345678" },
  { icon: "✉️", label: "Email", value: "hello@ecovistacarpentry.com", href: "mailto:hello@ecovistacarpentry.com" },
  { icon: "📍", label: "Location", value: "Co. Wicklow, Ireland", href: "#" },
  { icon: "🕐", label: "Hours", value: "Mon – Fri · 8:00 – 18:00", href: "#" },
];

export default function Contact() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "#1E3A2F", padding: "160px 0 80px", position: "relative", overflow: "hidden" }}>
        <Image src="/images/finished/08-img-4713.jpg" alt="EcoVista team at work" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.22 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p className="section-label" style={{ color: "#E8A558", marginBottom: 20 }}>Get in Touch</p>
            <h1 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, lineHeight: 1.02, color: "#fff", marginBottom: 24 }}>
              Let&apos;s build<br /><em style={{ color: "#E8A558" }}>something.</em>
            </h1>
            <p style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.70)", maxWidth: 540 }}>
              No language barriers. No jargon. Just a genuine conversation about your project — in plain English.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTACT GRID ─────────────────────────────────────────── */}
      <section style={{ background: "#F0E8D8", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }} className="contact-grid-responsive">

            {/* Left: Info */}
            <FadeUp>
              <p className="section-label" style={{ color: "#C8863A", marginBottom: 12 }}>Contact Us</p>
              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 600, color: "#1C1612", marginBottom: 16 }}>
                Talk to us directly
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.72, color: "rgba(28,22,18,0.60)", marginBottom: 40 }}>
                Our English-speaking team is ready to discuss your vision. We offer a free, no-obligation consultation for all new projects.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {details.map(({ icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "#1E3A2F", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C8863A", marginBottom: 4 }}>{label}</div>
                      <Link href={href} style={{ fontWeight: 500, color: "#1C1612", textDecoration: "none" }}>{value}</Link>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 48, padding: "24px", background: "#1E3A2F", borderRadius: 14 }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>🇮🇪</div>
                <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.1rem", color: "#fff", marginBottom: 8 }}>English-speaking team</div>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                  No translation apps, no misunderstandings. Every member of our team communicates clearly in English throughout your entire project.
                </p>
              </div>
            </FadeUp>

            {/* Right: Form */}
            <FadeUp delay={1}>
              <div style={{ background: "#fff", borderRadius: 14, padding: 48, boxShadow: "0 8px 32px rgba(28,22,18,0.14)" }}>
                <h3 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.5rem", fontWeight: 600, color: "#1C1612", marginBottom: 8 }}>Send us a message</h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(28,22,18,0.55)", marginBottom: 36 }}>We respond within one business day.</p>
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
