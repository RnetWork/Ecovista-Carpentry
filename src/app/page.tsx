import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const services = [
  {
    num: "01", icon: "🏡", title: "Custom Timber Homes",
    desc: "Full design-and-build service for timber-frame residences. We handle everything from structural engineering and planning permission to interior detailing and landscaping tie-in.",
    img: "/images/finished/06-img-4702.jpg",
  },
  {
    num: "02", icon: "🪟", title: "Porches & Outdoor Spaces",
    desc: "Covered verandas, wrap-around porches, pergolas, and deck systems that extend your living space into the outdoors — built to withstand every season.",
    img: "/images/finished/04-img-4631.jpg",
  },
  {
    num: "03", icon: "🪚", title: "Bespoke Woodwork",
    desc: "Custom cabinetry, staircase systems, structural beams, cladding, and interior joinery — handcrafted to your specification with natural wood species of your choice.",
    img: "/images/finished/08-img-4713.jpg",
  },
  {
    num: "04", icon: "🏗️", title: "Extensions & Renovations",
    desc: "Adding timber extensions to existing structures or upgrading aging woodwork. We match original materials where possible and integrate seamlessly with what is already there.",
    img: "/images/finished/05-img-4635.jpg",
  },
  {
    num: "05", icon: "🌿", title: "Eco-Passive Design",
    desc: "Passive-house compatible timber-frame builds with superior insulation, natural vapour control, and minimal environmental footprint — comfortable year-round without energy waste.",
    img: "/images/finished/21-img-4719.jpg",
  },
  {
    num: "06", icon: "📐", title: "Design Consultancy",
    desc: "Not ready to build yet? Our timber design consultants will help you plan, specify, and budget your project so you can make confident decisions before ground is broken.",
    img: "/images/finished/16-img-4721.jpg",
  },
];

const process = [
  { step: "Step 01", icon: "☕", title: "Free Consultation", desc: "We meet (in person or online) to understand your vision, site constraints, and budget. No jargon, no pressure — just a genuine conversation." },
  { step: "Step 02", icon: "📐", title: "Design & Proposal", desc: "Our team produces detailed drawings and a transparent, itemised quote. You see exactly what you are paying for — before anything is signed." },
  { step: "Step 03", icon: "🪵", title: "Build & Updates", desc: "Construction begins. You receive regular English-language progress updates, photos, and site visits whenever you want them. No surprises." },
  { step: "Step 04", icon: "🔑", title: "Handover & Aftercare", desc: "We walk you through your completed project, explain every detail, and leave you with full documentation plus our 10-year structural warranty." },
];

const portfolio = [
  { img: "/images/finished/09-img-4729.jpg", tag: "Timber Home — Wicklow",  title: "The Hargreaves Residence", wide: true },
  { img: "/images/finished/23-img-4728.jpg", tag: "Bespoke Interior — Cork", title: "Oakwood Library & Study",   tall: true },
  { img: "/images/finished/11-img-4573.jpg", tag: "Porch — Kerry",           title: "Lakeside Veranda" },
  { img: "/images/finished/15-img-4944.jpg", tag: "Eco Home — Galway",       title: "Passive Timber Farmhouse" },
  { img: "/images/finished/14-img-4572.jpg", tag: "Joinery — Dublin",        title: "Heritage Staircase" },
  { img: "/images/finished/20-img-4726.jpg", tag: "Extension — Limerick",    title: "Garden Room Addition" },
];

const reasons = [
  { icon: "💬", title: "Fully English-Speaking Crews", desc: "Every tradesperson on your site communicates in English — no translation apps, no misunderstandings, no costly mistakes from unclear instructions." },
  { icon: "🌲", title: "100% Sustainable Timber",      desc: "All our wood is FSC-certified and sourced from responsibly managed forests. Your home is carbon-smart from day one." },
  { icon: "📋", title: "Fixed-Price Transparency",     desc: "We quote clearly and stick to it. No hidden extras, no surprise invoices. If scope changes, we discuss it openly before proceeding." },
  { icon: "🛡️", title: "10-Year Structural Warranty",  desc: "Every project we deliver carries a decade-long structural warranty. We build to outlast — and we stand behind everything we make." },
];

const testimonials = [
  {
    quote: "From our first call to the day we got the keys, everything was communicated clearly and professionally. The craftsmanship is something we show off to every visitor.",
    name: "Sarah & Tom Gallagher", role: "Custom timber home, Co. Wicklow",
    avatar: "/images/finished/06-img-4702.jpg",
  },
  {
    quote: "We had worked with other builders who barely spoke to us in plain English. EcoVista was completely different — honest, clear, and the quality speaks for itself.",
    name: "James O'Brien", role: "Eco-passive build, Co. Galway",
    avatar: "/images/finished/09-img-4729.jpg",
    featured: true,
  },
  {
    quote: "Our porch has transformed how we use the house. EcoVista delivered exactly what they promised, on time and on budget. Wouldn't hesitate to recommend them.",
    name: "Claire Murphy", role: "Wraparound porch, Co. Kerry",
    avatar: "/images/finished/21-img-4719.jpg",
  },
];

/* Images used in the photo strip between services and process */
const photoStrip = [
  "/images/finished/01-img-4722.jpg",
  "/images/finished/02-img-4715.jpg",
  "/images/finished/10-img-4712.jpg",
  "/images/finished/12-img-4629.jpg",
  "/images/finished/17-img-4633.jpg",
  "/images/finished/22-img-4634.jpg",
  "/images/finished/27-img-4703.jpg",
];

export default function Home() {
  return (
    <>
      {/* ── HERO — VIDEO ─────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", background: "#1E3A2F", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/video/v2.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,40,30,0.65) 0%, rgba(20,40,30,0.45) 60%, rgba(20,40,30,0.75) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top, #FAF7F2, transparent)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 40px", width: "100%" }}>
          <div style={{ maxWidth: 780 }}>
            <div className="section-label" style={{ color: "#E8A558", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 40, height: 2, background: "#C8863A" }} />
              Master Timber Builders
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.03em", color: "#fff", marginBottom: 28 }}>
              Built from<br /><em style={{ fontStyle: "italic", color: "#E8A558" }}>nature.</em><br />Built to last.
            </h1>
            <p style={{ fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.80)", maxWidth: 560, marginBottom: 48 }}>
              From custom timber-frame homes to open-air porches and bespoke woodwork — we craft spaces that honour the material and stand for generations. And we do it all in{" "}
              <strong style={{ color: "#E8A558" }}>your language.</strong>
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/gallery" className="btn btn-primary">View Our Work</Link>
              <Link href="/contact" className="btn btn-outline">Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <div style={{ background: "#1E3A2F", padding: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: 1200, margin: "0 auto" }}>
          {[
            { num: "18+",  label: "Years in Business" },
            { num: "340",  label: "Homes Delivered" },
            { num: "100%", label: "Sustainable Timber" },
            { num: "4.9★", label: "Client Satisfaction" },
          ].map(({ num, label }, i) => (
            <FadeUp key={label} delay={(i % 3) as 0 | 1 | 2 | 3}
              style={{ padding: "40px 32px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" } as React.CSSProperties}
            >
              <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "2.8rem", fontWeight: 700, color: "#C8863A", lineHeight: 1, marginBottom: 8 }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section id="about" style={{ background: "#FAF7F2", padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }} className="about-grid-responsive">
            <FadeUp style={{ position: "relative" } as React.CSSProperties}>
              {/* Main portrait image */}
              <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 14, overflow: "hidden", boxShadow: "0 24px 64px rgba(28,22,18,0.20)", position: "relative" }}>
                <Image src="/images/finished/03-img-4632.jpg" alt="EcoVista craftsmen at work" fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: "cover" }} />
              </div>
              {/* Accent image bottom-right */}
              <div style={{ position: "absolute", bottom: -32, right: -32, width: 180, aspectRatio: "1", borderRadius: 14, overflow: "hidden", border: "6px solid #FAF7F2", boxShadow: "0 8px 32px rgba(28,22,18,0.14)" }}>
                <Image src="/images/finished/13-img-4725.jpg" alt="Timber detail" fill sizes="180px" style={{ objectFit: "cover" }} />
              </div>
              {/* Amber badge */}
              <div style={{ position: "absolute", top: 32, left: -24, background: "#C8863A", color: "#fff", padding: "16px 20px", borderRadius: 14, textAlign: "center", boxShadow: "0 8px 32px rgba(28,22,18,0.14)" }}>
                <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>18</div>
                <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85, marginTop: 4 }}>Years of<br />craft</div>
              </div>
            </FadeUp>
            <div>
              <p className="section-label" style={{ color: "#C8863A", marginBottom: 12 }}>Who We Are</p>
              <FadeUp>
                <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, lineHeight: 1.2, color: "#1C1612", marginBottom: 20 }}>
                  Craftsmen who speak your language — literally.
                </h2>
              </FadeUp>
              <div className="divider divider-left" />
              <FadeUp delay={1}>
                <p style={{ fontSize: "1.125rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(28,22,18,0.60)", marginBottom: 20 }}>
                  EcoVista Carpentry was founded on a simple belief: great timber work deserves great communication. Too many clients have been left confused by language barriers on their own building sites. Not here.
                </p>
              </FadeUp>
              <FadeUp delay={2}>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.72, color: "rgba(28,22,18,0.60)", marginBottom: 20 }}>
                  Every member of our team is fully English-speaking, so from your first consultation to the final nail, you always know exactly what is happening with your project. Combine that with 18 years of mastery in timber-frame construction, and you get a partner who is as clear in conversation as they are skilled with wood.
                </p>
              </FadeUp>
              <FadeUp delay={3}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36 }}>
                  {[
                    { icon: "🌲", title: "Sustainable Sourcing",    desc: "Only FSC-certified, responsibly harvested timber." },
                    { icon: "💬", title: "English-Speaking Team",   desc: "No interpreters needed — ever." },
                    { icon: "🏗️", title: "Full-Build Capability",   desc: "Design through handover, under one roof." },
                    { icon: "🛡️", title: "10-Year Warranty",        desc: "Structural guarantee on every project." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: "#F0E8D8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{icon}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>{title}</div>
                        <div style={{ fontSize: "0.82rem", color: "rgba(28,22,18,0.60)", lineHeight: 1.5 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" style={{ background: "#F0E8D8", padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 72px" }}>
              <p className="section-label" style={{ color: "#C8863A", marginBottom: 12 }}>What We Build</p>
              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, lineHeight: 1.2, color: "#1C1612", marginBottom: 16 }}>Every project. Every scale.</h2>
              <div className="divider" />
              <p style={{ fontSize: "0.95rem", lineHeight: 1.72, color: "rgba(28,22,18,0.60)" }}>
                Whether you are commissioning your dream timber-frame home or adding a handcrafted porch to an existing property, our expertise covers the full spectrum of natural wood construction.
              </p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="services-grid-responsive">
            {services.map(({ num, icon, title, desc, img }, i) => (
              <FadeUp key={title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <div className="service-card">
                  <div style={{ aspectRatio: "16/10", position: "relative", overflow: "hidden" }}>
                    <Image src={img} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: 16, left: 16, width: 36, height: 36, borderRadius: "50%", background: "#C8863A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 700 }}>{num}</div>
                  </div>
                  <div style={{ padding: 28 }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{icon}</div>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.3rem", fontWeight: 600, color: "#1C1612", marginBottom: 10 }}>{title}</div>
                    <p style={{ fontSize: "0.88rem", color: "rgba(28,22,18,0.60)", lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
                    <Link href="/services" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", fontWeight: 600, color: "#3D7A5C", textDecoration: "none" }}>
                      Learn more →
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────── */}
      <div style={{ display: "flex", height: 260, overflow: "hidden" }}>
        {photoStrip.map((src, i) => (
          <div key={src} style={{ flex: 1, position: "relative", minWidth: 0 }}>
            <Image src={src} alt={`EcoVista project ${i + 1}`} fill sizes="14vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section id="process" style={{ background: "#1E3A2F", padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 72px" }}>
              <p className="section-label" style={{ color: "#E8A558", marginBottom: 12 }}>How It Works</p>
              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, lineHeight: 1.2, color: "#fff", marginBottom: 16 }}>Simple. Clear. Yours.</h2>
              <div className="divider" />
              <p style={{ color: "rgba(255,255,255,0.60)" }}>From first call to final handover — a process you can follow every step of the way.</p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }} className="process-grid-responsive">
            {process.map(({ step, icon, title, desc }, i) => (
              <FadeUp key={title} delay={i as 0 | 1 | 2 | 3} className="process-step">
                <div style={{ fontFamily: "var(--font-cinzel),Georgia,serif", fontSize: "0.7rem", color: "#C8863A", letterSpacing: "0.2em", marginBottom: 24 }}>{step}</div>
                <div style={{ fontSize: "2.4rem", marginBottom: 20 }}>{icon}</div>
                <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.2rem", color: "#fff", marginBottom: 12 }}>{title}</div>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────────── */}
      <section id="portfolio" style={{ background: "#FAF7F2", padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 52px" }}>
              <p className="section-label" style={{ color: "#C8863A", marginBottom: 12 }}>Our Work</p>
              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, lineHeight: 1.2, color: "#1C1612", marginBottom: 16 }}>Projects we are proud of</h2>
              <div className="divider" />
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 52, flexWrap: "wrap" }}>
              {["All Projects", "Timber Homes", "Porches", "Interiors", "Extensions"].map((f, i) => (
                <span key={f} style={{ padding: "9px 22px", borderRadius: 100, fontSize: "0.82rem", fontWeight: 500, border: `1.5px solid ${i === 0 ? "#1E3A2F" : "rgba(28,22,18,0.30)"}`, background: i === 0 ? "#1E3A2F" : "transparent", color: i === 0 ? "#fff" : "rgba(28,22,18,0.60)", cursor: "pointer" }}>{f}</span>
              ))}
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridAutoRows: 280, gap: 16 }} className="portfolio-grid-responsive">
            {portfolio.map(({ img, tag, title, wide, tall }) => (
              <div key={title} className="portfolio-item" style={{ gridColumn: wide ? "span 2" : undefined, gridRow: tall ? "span 2" : undefined, position: "relative" }}>
                <Image src={img} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                <div className="portfolio-overlay">
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#E8A558", marginBottom: 6, fontWeight: 500 }}>{tag}</div>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>{title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <FadeUp>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/gallery" className="btn btn-dark">View Full Portfolio</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────── */}
      <section id="why" style={{ background: "#F0E8D8", padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="why-grid-responsive">
            <div>
              <p className="section-label" style={{ color: "#C8863A", marginBottom: 12 }}>Why EcoVista</p>
              <FadeUp>
                <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, lineHeight: 1.2, color: "#1C1612", marginBottom: 16 }}>
                  We speak your language.<br />We build your vision.
                </h2>
              </FadeUp>
              <div className="divider divider-left" />
              <FadeUp delay={1}>
                <p style={{ fontSize: "1.125rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(28,22,18,0.60)", marginBottom: 32 }}>
                  Finding skilled timber craftsmen is hard enough. Finding ones you can actually talk to clearly — without awkward back-and-forth through a middleman — is rarer still.
                </p>
              </FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {reasons.map(({ icon, title, desc }, i) => (
                  <FadeUp key={title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                    <div className="why-reason">
                      <div style={{ width: 52, height: 52, borderRadius: 12, background: "#1E3A2F", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>{icon}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: 6 }}>{title}</div>
                        <p style={{ fontSize: "0.85rem", color: "rgba(28,22,18,0.60)", lineHeight: 1.6 }}>{desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
            <FadeUp delay={1}>
              <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 14, overflow: "hidden", boxShadow: "0 24px 64px rgba(28,22,18,0.20)" }}>
                <Image src="/images/finished/19-img-4727.jpg" alt="EcoVista craftsmen" fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,40,30,0.6), transparent 50%)" }} />
                <div style={{ position: "absolute", top: 24, right: 24, background: "#C8863A", color: "#fff", padding: "10px 18px", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                  🇮🇪 English-Speaking Team
                </div>
                <div style={{ position: "absolute", bottom: 32, left: 32, right: 32, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.20)", borderRadius: 14, padding: 20 }}>
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.1rem", color: "#fff", marginBottom: 6 }}>18 years of proven craft</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)" }}>Co. Wicklow, Ireland · FSC Certified</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TIMBER INSIGHT STRIP ─────────────────────────────────── */}
      <section style={{ background: "#1E3A2F", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0, borderTop: "1px solid rgba(255,255,255,0.10)", borderBottom: "1px solid rgba(255,255,255,0.10)" }} className="stats-strip-responsive">
            {[
              { num: "0.9T",  label: "CO₂ stored",       sub: "per cubic metre of timber" },
              { num: "1.1T",  label: "CO₂ avoided",      sub: "vs concrete or steel" },
              { num: "30%",   label: "Lower energy bills", sub: "heating & cooling, up to" },
              { num: "40%",   label: "Of global emissions", sub: "comes from construction" },
            ].map(({ num, label, sub }, i) => (
              <FadeUp key={label} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <div style={{ padding: "48px 32px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "2.4rem", fontWeight: 700, color: "#C8863A", lineHeight: 1, marginBottom: 8 }}>{num}</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.80)", fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.40)", letterSpacing: "0.06em" }}>{sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, marginTop: 40 }}>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", maxWidth: 560, lineHeight: 1.7 }}>
                Construction accounts for nearly 40% of global carbon emissions. Timber is how we build against that — not with it. Every home we build actively stores CO₂ for its entire lifetime.
              </p>
              <Link href="/journal/why-timber-frame-homes-are-the-future" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.85rem", fontWeight: 600, color: "#E8A558", textDecoration: "none", whiteSpace: "nowrap" }}>
                Why timber is the future →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 72px" }}>
              <p className="section-label" style={{ color: "#C8863A", marginBottom: 12 }}>Client Stories</p>
              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, lineHeight: 1.2, color: "#1C1612", marginBottom: 16 }}>What our clients say</h2>
              <div className="divider" />
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="testimonials-grid-responsive">
            {testimonials.map(({ quote, name, role, avatar, featured }, i) => (
              <FadeUp key={name} delay={i as 0 | 1 | 2 | 3}>
                <div className={`testimonial-card${featured ? " featured" : ""}`}>
                  <div style={{ fontSize: "3rem", lineHeight: 1, color: featured ? "#E8A558" : "#C8863A", fontFamily: "var(--font-playfair),Georgia,serif", marginBottom: 20 }}>"</div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                    {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: "#C8863A", fontSize: "0.85rem" }}>{s}</span>)}
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: featured ? "rgba(255,255,255,0.75)" : "rgba(28,22,18,0.60)", marginBottom: 28, fontStyle: "italic" }}>{quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flexShrink: 0, position: "relative" }}>
                      <Image src={avatar} alt={name} fill sizes="48px" style={{ objectFit: "cover" }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: featured ? "#fff" : "#1C1612" }}>{name}</div>
                      <div style={{ fontSize: "0.78rem", color: featured ? "rgba(255,255,255,0.50)" : "rgba(28,22,18,0.60)" }}>{role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND — reuses original hero image ────────────────── */}
      <section style={{ position: "relative", padding: "120px 0", textAlign: "center", overflow: "hidden" }}>
        <Image src="/images/finished/06-img-4702.jpg" alt="Timber frame home" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(20,40,30,0.92), rgba(44,82,65,0.88))" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", color: "#fff", marginBottom: 20, fontWeight: 700 }}>
              Ready to build something that lasts?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.70)", maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.7 }}>
              Get a free, no-obligation consultation with our team. We will listen to your vision and give you a clear, honest picture of what is possible.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <Link href="/gallery" className="btn btn-outline">See Our Work</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
