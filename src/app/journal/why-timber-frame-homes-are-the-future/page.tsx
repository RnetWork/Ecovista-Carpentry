import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Why Timber Frame Homes Are the Future",
  description:
    "Construction accounts for nearly 40% of global carbon emissions. Timber frame stores CO₂, cuts energy bills by up to 30%, and builds faster. Here's why it's the obvious choice.",
  openGraph: {
    type: "article",
    publishedTime: "2024-03-15",
  },
};

export default function Article() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "60vh", minHeight: 420, maxHeight: 680, overflow: "hidden" }}>
        <Image
          src="/images/finished/09-img-4729.jpg"
          alt="Completed timber frame home"
          fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(20,40,30,0.65)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 64, paddingLeft: 40, paddingRight: 40, maxWidth: 1200, margin: "0 auto", left: 0, right: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <span className="section-label" style={{ color: "#C8863A" }}>Sustainability</span>
            <span className="section-label" style={{ color: "rgba(255,255,255,0.40)" }}>15 Mar 2024</span>
            <span className="section-label" style={{ color: "rgba(255,255,255,0.40)" }}>6 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2.2rem,5vw,4.5rem)", lineHeight: 1.02, color: "#fff", fontWeight: 900, maxWidth: 760 }}>
            Why Timber Frame Homes Are the Future
          </h1>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "80px 0 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 3fr", gap: 64, alignItems: "start" }} className="article-grid-responsive">

          {/* Sidebar */}
          <aside>
            <div style={{ position: "sticky", top: 112 }}>
              <FadeUp>
                <p className="section-label" style={{ color: "rgba(28,22,18,0.45)", marginBottom: 16 }}>Key Stats</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                  {[
                    { num: "0.9T", label: "CO₂ stored per m³" },
                    { num: "1.1T", label: "CO₂ avoided vs concrete" },
                    { num: "30%",  label: "Lower energy bills" },
                    { num: "40%",  label: "Of global emissions: construction" },
                  ].map(({ num, label }) => (
                    <div key={label} style={{ borderLeft: "2px solid #C8863A", paddingLeft: 16 }}>
                      <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.4rem", color: "#1C1612", lineHeight: 1 }}>{num}</div>
                      <div className="section-label" style={{ color: "rgba(28,22,18,0.45)", marginTop: 4 }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(28,22,18,0.12)", paddingTop: 28 }}>
                  <p className="section-label" style={{ color: "rgba(28,22,18,0.45)", marginBottom: 12 }}>Interested in timber?</p>
                  <Link href="/contact" style={{ fontSize: "0.85rem", fontWeight: 600, color: "#3D7A5C", textDecoration: "none" }}>
                    Talk to our team →
                  </Link>
                </div>
              </FadeUp>
            </div>
          </aside>

          {/* Body */}
          <FadeUp delay={1}>
            <div style={{ maxWidth: 680 }}>

              <p style={{ fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(28,22,18,0.75)", marginBottom: 28, fontStyle: "italic" }}>
                There&apos;s a quiet shift happening in how homes get built. More homeowners are asking the same question before they break ground: <em>is there a smarter way to build this?</em> Increasingly, the answer is timber.
              </p>

              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 28 }}>
                Timber frame construction isn&apos;t a trend or a throwback. It&apos;s one of the most sustainable, energy efficient, and genuinely livable ways to build a modern home. Here&apos;s why it&apos;s becoming the obvious choice for people who care about how their home is built, not just how it looks.
              </p>

              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1612", marginBottom: 16, marginTop: 48, lineHeight: 1.2 }}>
                The construction industry has a carbon problem. Wood is the fix.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 20 }}>
                Construction is responsible for <strong style={{ color: "#1C1612" }}>nearly 40% of global carbon emissions</strong> — more than every car, truck, and plane on the planet combined. Concrete and steel are two of the biggest contributors, both incredibly energy intensive to produce.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 20 }}>
                Wood works the opposite way. As a tree grows, it pulls carbon out of the atmosphere and locks it inside the timber, where it stays locked in for the lifetime of the building. Every cubic metre of timber used in construction stores around <strong style={{ color: "#1C1612" }}>0.9 tonnes of CO₂</strong>, while avoiding roughly <strong style={{ color: "#1C1612" }}>1.1 tonnes</strong> of emissions compared to building the same structure in concrete or steel.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 28 }}>
                To put that in perspective: building an average timber frame home keeps the same amount of CO₂ out of the atmosphere as <strong style={{ color: "#1C1612" }}>taking a car off the road for several years.</strong> You&apos;re not just choosing a building material. You&apos;re choosing a structure that actively works against climate change instead of contributing to it.
              </p>

              {/* Pull image 1 */}
              <div style={{ position: "relative", aspectRatio: "16/9", margin: "40px 0", overflow: "hidden", borderRadius: 14 }}>
                <Image src="/images/finished/21-img-4719.jpg" alt="Roof structure in progress" fill sizes="(min-width: 768px) 65vw, 100vw" style={{ objectFit: "cover" }} />
              </div>

              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1612", marginBottom: 16, marginTop: 48, lineHeight: 1.2 }}>
                A home that costs less to heat and cool, every single year
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 20 }}>
                Wood is a natural insulator. Combined with precision engineered wall systems and modern insulation, timber frame construction can cut heating and cooling energy use by <strong style={{ color: "#1C1612" }}>up to 30%</strong> compared to traditional masonry homes.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 28 }}>
                In real terms, that&apos;s lower energy bills every month, for as long as you live there. Timber frame walls also seal more tightly than masonry, with fewer gaps for heat to escape through, so your home holds its temperature better in both winter and summer, with less work from your heating and cooling systems.
              </p>

              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1612", marginBottom: 16, marginTop: 48, lineHeight: 1.2 }}>
                Built faster, built more precisely
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 20 }}>
                Timber frame homes are built from engineered components, designed and manufactured off site to exact specifications before assembly even begins. Think of it less like traditional bricklaying and more like precision assembly, where every piece is made to fit before it ever reaches your site.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 28 }}>
                The result is a construction process that&apos;s faster, more predictable, and significantly less wasteful. Fewer surprises, fewer delays, less material ending up in a skip. You get a clearer timeline from groundbreaking to move in day, and a build that&apos;s more consistent because so much of the precision happens before the first piece of timber is even on site.
              </p>

              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1612", marginBottom: 16, marginTop: 48, lineHeight: 1.2 }}>
                It&apos;s not the wooden house you&apos;re picturing
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 28 }}>
                Older ideas of timber homes tend to picture something rustic or basic. Modern timber frame architecture is the opposite. It pairs serious structural engineering with clean, contemporary design, creating homes that are warm and natural on the inside, but every bit as durable, sophisticated, and architecturally striking as anything built in concrete or steel.
              </p>

              {/* Pull image 2 */}
              <div style={{ position: "relative", aspectRatio: "4/3", margin: "40px 0", overflow: "hidden", borderRadius: 14 }}>
                <Image src="/images/finished/06-img-4702.jpg" alt="Completed contemporary timber frame home" fill sizes="(min-width: 768px) 65vw, 100vw" style={{ objectFit: "cover" }} />
              </div>

              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1612", marginBottom: 16, marginTop: 48, lineHeight: 1.2 }}>
                A healthier home to actually live in
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 28 }}>
                Beyond the numbers, timber does something concrete materials can&apos;t: it makes a home feel different to be inside. Wood naturally helps regulate indoor humidity, improves acoustics, and creates interiors that feel calmer and more comfortable day to day. It&apos;s a material that&apos;s alive in a way concrete never is, and that shows up in how a space actually feels to live in, not just how it performs on paper.
              </p>

              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1612", marginBottom: 20, marginTop: 48, lineHeight: 1.2 }}>
                The advantages, at a glance
              </h2>
              <div style={{ background: "#F0E8D8", borderRadius: 14, padding: "32px 36px", marginBottom: 28 }}>
                {[
                  ["Lower carbon footprint", "than concrete or steel construction"],
                  ["Renewable, sustainably sourced", "building material"],
                  ["Up to 30% lower", "heating and cooling costs"],
                  ["Faster, more predictable", "construction process"],
                  ["Precision engineered", "for structural reliability"],
                  ["Healthier indoor environments", "with better humidity and acoustic comfort"],
                  ["Modern architectural flexibility", "with timeless natural aesthetics"],
                  ["Less construction waste", "less environmental impact"],
                  ["Built to last", "for generations"],
                ].map(([bold, rest]) => (
                  <div key={bold} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid rgba(28,22,18,0.08)" }}>
                    <span style={{ color: "#C8863A", flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(28,22,18,0.75)" }}>
                      <strong style={{ color: "#1C1612" }}>{bold}</strong> {rest}
                    </span>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1612", marginBottom: 16, marginTop: 48, lineHeight: 1.2 }}>
                More than a building method
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(28,22,18,0.65)", marginBottom: 28 }}>
                A timber frame home isn&apos;t just a different way to build. It&apos;s a different set of values built into the walls around you. Lower carbon, lower running costs, faster construction, and a home that&apos;s genuinely healthier to live in. As the world moves toward smarter, lower carbon construction, timber isn&apos;t catching up to the future of homebuilding. It already is the future.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", background: "#1E3A2F", padding: "80px 0", overflow: "hidden" }}>
        <Image src="/images/finished/03-img-4632.jpg" alt="Timber frame construction" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.2 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", flexDirection: "column", gap: 24 }}>
          <FadeUp>
            <p className="section-label" style={{ color: "#E8A558", marginBottom: 8 }}>Thinking About Building with Timber?</p>
            <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 24 }}>
              At Eco Vista, we design<br /><em style={{ color: "#C8863A" }}>and build it.</em>
            </h2>
            <Link href="/contact" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
              Get in Touch →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── BACK TO JOURNAL ──────────────────────────────────────────── */}
      <div style={{ background: "#FAF7F2", padding: "40px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/journal" style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(28,22,18,0.45)", textDecoration: "none" }}>
          ← Back to Journal
        </Link>
      </div>
    </>
  );
}
