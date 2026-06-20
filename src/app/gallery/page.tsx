import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse completed Eco Vista Carpentry projects — timber frame homes, porches, and bespoke woodwork across Ireland.",
};

const portfolio = [
  { src: "/images/finished/06-img-4702.jpg", alt: "Completed home exterior",       tag: "Timber Home — Wicklow",    title: "The Hargreaves Residence", wide: true },
  { src: "/images/finished/23-img-4728.jpg", alt: "Roof framing",                  tag: "Bespoke Interior — Cork",  title: "Oakwood Library & Study",  tall: true },
  { src: "/images/finished/11-img-4573.jpg", alt: "Exterior cladding",             tag: "Porch — Kerry",            title: "Lakeside Veranda" },
  { src: "/images/finished/16-img-4721.jpg", alt: "Interior timber frame",         tag: "Eco Home — Galway",        title: "Passive Timber Farmhouse" },
  { src: "/images/finished/14-img-4572.jpg", alt: "Architectural corner detail",   tag: "Joinery — Dublin",         title: "Heritage Staircase" },
  { src: "/images/finished/21-img-4719.jpg", alt: "Roof structure in progress",    tag: "Extension — Limerick",     title: "Garden Room Addition" },
  { src: "/images/finished/09-img-4729.jpg", alt: "Finished home exterior",        tag: "Timber Home — Wexford",    title: "The O'Sullivan Residence", wide: true },
  { src: "/images/finished/08-img-4713.jpg", alt: "Carpentry in progress",         tag: "Joinery — Cork",           title: "Custom Staircase & Hall" },
  { src: "/images/finished/03-img-4632.jpg", alt: "Frame assembly on site",        tag: "Frame Build — Wicklow",    title: "Oak Frame Assembly" },
  { src: "/images/finished/18-img-4706.jpg", alt: "Home facade",                   tag: "Timber Home — Kildare",    title: "Contemporary Farm House",  tall: true },
  { src: "/images/finished/07-img-4720.jpg", alt: "Cladding detail",               tag: "Cladding — Clare",         title: "Cedar Rainscreen" },
  { src: "/images/finished/24-img-4946.jpg", alt: "Exterior cladding pattern",     tag: "Porch — Tipperary",        title: "Wraparound Veranda" },
  { src: "/images/finished/25-img-4704.jpg", alt: "Side elevation",                tag: "Extension — Meath",        title: "Single-Storey Extension" },
  { src: "/images/finished/26-img-4731.jpg", alt: "Entry detail",                  tag: "Joinery — Waterford",      title: "Bespoke Entrance Frame",   wide: true },
  { src: "/images/finished/28-img-4723.jpg", alt: "Completed project overview",    tag: "Timber Home — Carlow",     title: "The Brennan House" },
];

export default function Gallery() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "#1E3A2F", padding: "160px 0 80px", position: "relative", overflow: "hidden" }}>
        <Image src="/images/finished/09-img-4729.jpg" alt="EcoVista portfolio" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.25 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p className="section-label" style={{ color: "#E8A558", marginBottom: 20 }}>Our Work</p>
            <h1 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, lineHeight: 1.02, color: "#fff", marginBottom: 24 }}>
              Projects we are<br /><em style={{ color: "#E8A558" }}>proud of.</em>
            </h1>
            <p style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.70)", maxWidth: 540 }}>
              18+ years of timber craftsmanship across Ireland. Homes, porches, extensions, and bespoke interiors — all built to last.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FILTER ───────────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "60px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {["All Projects", "Timber Homes", "Porches", "Interiors", "Extensions"].map((f, i) => (
                <span key={f} style={{ padding: "9px 22px", borderRadius: 100, fontSize: "0.82rem", fontWeight: 500, border: `1.5px solid ${i === 0 ? "#1E3A2F" : "rgba(28,22,18,0.30)"}`, background: i === 0 ? "#1E3A2F" : "transparent", color: i === 0 ? "#fff" : "rgba(28,22,18,0.60)", cursor: "pointer" }}>{f}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ───────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "52px 0 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridAutoRows: 280, gap: 16 }} className="portfolio-grid-responsive">
            {portfolio.map(({ src, alt, tag, title, wide, tall }) => (
              <div key={title} className="portfolio-item" style={{ gridColumn: wide ? "span 2" : undefined, gridRow: tall ? "span 2" : undefined, position: "relative" }}>
                <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                <div className="portfolio-overlay">
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#E8A558", marginBottom: 6, fontWeight: 500 }}>{tag}</div>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>{title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: "#1E3A2F", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p className="section-label" style={{ color: "#E8A558", marginBottom: 16 }}>Ready to Build</p>
            <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", fontWeight: 700, marginBottom: 20 }}>
              Seen enough?<br /><em style={{ color: "#E8A558" }}>Let&apos;s talk.</em>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Tell us about your project and get a free, no-obligation consultation from our English-speaking team.
            </p>
            <Link href="/contact" className="btn btn-primary">Start a Project</Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
