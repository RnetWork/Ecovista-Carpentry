import Link from "next/link";

const services = ["Custom Timber Homes", "Porches & Decks", "Bespoke Joinery", "Extensions", "Eco-Passive Builds", "Design Consultancy"];
const company  = ["About Us", "Our Process", "Portfolio", "Sustainability", "Journal"];
const contact  = [{ label: "Get a Free Quote", href: "/contact" }, { label: "hello@ecovistacarpentry.com", href: "mailto:hello@ecovistacarpentry.com" }, { label: "+353 1 234 5678", href: "tel:+35312345678" }, { label: "Co. Wicklow, Ireland", href: "#" }];

const colTitle: React.CSSProperties = { fontFamily: "var(--font-cinzel), serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24 };
const colLink: React.CSSProperties = { fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", display: "block", marginBottom: 12, transition: "color 0.2s", textDecoration: "none" };

export default function Footer() {
  return (
    <footer style={{ background: "#111A15", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 }} className="footer-grid-responsive">

          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "#C8863A", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>🌲</div>
              <div>
                <div style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>EcoVista</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Carpentry</div>
              </div>
            </Link>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 280, marginBottom: 28 }}>
              Master timber builders serving Ireland and beyond. English-speaking craftsmen, sustainable materials, 18 years of proven expertise.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["f", "in", "ig", "yt"].map(s => (
                <div key={s} style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={colTitle}>Services</p>
            {services.map(s => <Link key={s} href="/services" style={colLink}>{s}</Link>)}
          </div>

          <div>
            <p style={colTitle}>Company</p>
            {company.map(s => <Link key={s} href="#" style={colLink}>{s}</Link>)}
          </div>

          <div>
            <p style={colTitle}>Contact</p>
            {contact.map(({ label, href }) => <Link key={label} href={href} style={colLink}>{label}</Link>)}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.30)" }}>© {new Date().getFullYear()} Eco Vista Carpentry Ltd. All rights reserved.</p>
          <div style={{ display: "flex", gap: 28 }}>
            {["Privacy Policy", "Terms of Service"].map(t => (
              <Link key={t} href="#" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.30)", textDecoration: "none" }}>{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
