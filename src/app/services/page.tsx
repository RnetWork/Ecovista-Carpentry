import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Services",
  description: "Eco Vista Carpentry builds timber frame homes, porches, bespoke joinery, extensions, and eco-passive builds across Ireland.",
};

const services = [
  {
    num: "01", icon: "🏡", title: "Custom Timber Homes",
    body: "Full design-and-build service for timber-frame residences. We handle everything from structural engineering and planning permission to interior detailing and landscaping tie-in.",
    tags: ["Design & Build", "Structural Engineering", "Site Management"],
    img: "/images/finished/06-img-4702.jpg",
  },
  {
    num: "02", icon: "🪟", title: "Porches & Outdoor Spaces",
    body: "Covered verandas, wrap-around porches, pergolas, and deck systems that extend your living space into the outdoors — built to withstand every season.",
    tags: ["Bespoke Design", "Hardwood & Softwood", "Weatherproof Finish"],
    img: "/images/finished/09-img-4729.jpg",
  },
  {
    num: "03", icon: "🪚", title: "Bespoke Woodwork",
    body: "Custom cabinetry, staircase systems, structural beams, cladding, and interior joinery — handcrafted to your specification with natural wood species of your choice.",
    tags: ["Workshop Crafted", "Fitted Furniture", "Interior Cladding"],
    img: "/images/finished/14-img-4572.jpg",
  },
  {
    num: "04", icon: "🏗️", title: "Extensions & Renovations",
    body: "Adding timber extensions to existing structures or upgrading aging woodwork. We match original materials where possible and integrate seamlessly with what is already there.",
    tags: ["Architectural Match", "Planning Support", "Structural Integration"],
    img: "/images/finished/16-img-4721.jpg",
  },
  {
    num: "05", icon: "🌿", title: "Eco-Passive Design",
    body: "Passive-house compatible timber-frame builds with superior insulation, natural vapour control, and minimal environmental footprint — comfortable year-round without energy waste.",
    tags: ["Passive House", "MVHR Systems", "Airtight Construction"],
    img: "/images/finished/23-img-4728.jpg",
  },
  {
    num: "06", icon: "📐", title: "Design Consultancy",
    body: "Not ready to build yet? Our timber design consultants will help you plan, specify, and budget your project so you can make confident decisions before ground is broken.",
    tags: ["Feasibility Study", "Material Specification", "Budget Planning"],
    img: "/images/finished/08-img-4713.jpg",
  },
];

export default function Services() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "#1E3A2F", padding: "160px 0 80px", position: "relative", overflow: "hidden" }}>
        <Image src="/images/finished/21-img-4719.jpg" alt="EcoVista timber frame construction" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.25 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p className="section-label" style={{ color: "#E8A558", marginBottom: 20 }}>What We Build</p>
            <h1 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, lineHeight: 1.02, color: "#fff", marginBottom: 24 }}>
              Every project.<br /><em style={{ color: "#E8A558" }}>Every scale.</em>
            </h1>
            <p style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.70)", maxWidth: 540 }}>
              From custom timber-frame homes to bespoke joinery and eco-passive builds — we cover the full spectrum of natural wood construction.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section style={{ background: "#F0E8D8", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="services-grid-responsive">
            {services.map(({ num, icon, title, body, tags, img }, i) => (
              <FadeUp key={title} delay={((i % 3)) as 0 | 1 | 2 | 3}>
                <div className="service-card">
                  <div style={{ aspectRatio: "16/10", position: "relative", overflow: "hidden" }}>
                    <Image src={img} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: 16, left: 16, width: 36, height: 36, borderRadius: "50%", background: "#C8863A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 700 }}>{num}</div>
                  </div>
                  <div style={{ padding: 28 }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{icon}</div>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.3rem", fontWeight: 600, color: "#1C1612", marginBottom: 10 }}>{title}</div>
                    <p style={{ fontSize: "0.88rem", color: "rgba(28,22,18,0.60)", lineHeight: 1.65, marginBottom: 20 }}>{body}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                      {tags.map(t => (
                        <span key={t} style={{ padding: "5px 12px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, border: "1px solid rgba(28,22,18,0.20)", color: "rgba(28,22,18,0.55)", letterSpacing: "0.06em" }}>{t}</span>
                      ))}
                    </div>
                    <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", fontWeight: 600, color: "#3D7A5C", textDecoration: "none" }}>
                      Get a Quote →
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "100px 0", textAlign: "center", overflow: "hidden" }}>
        <Image src="/images/finished/03-img-4632.jpg" alt="Timber frame" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(20,40,30,0.92),rgba(44,82,65,0.88))" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", color: "#fff", marginBottom: 20, fontWeight: 700 }}>
              Not sure which service you need?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.70)", maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.7 }}>
              Book a free consultation. We will listen to your vision and give you a clear, honest picture of what is possible.
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
