"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#about",   label: "About"     },
  { href: "/services", label: "Services"  },
  { href: "/gallery",  label: "Portfolio" },
  { href: "/#why",     label: "Why Us"    },
  { href: "/contact",  label: "Contact"   },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || pathname !== "/";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "0 40px",
      background: solid ? "rgba(30,58,47,0.97)" : "transparent",
      backdropFilter: solid ? "blur(12px)" : "none",
      boxShadow: solid ? "0 2px 24px rgba(28,22,18,0.2)" : "none",
      transition: "background 0.35s ease, box-shadow 0.35s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>

        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{ width: 40, height: 40, background: "#C8863A", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
            🌲
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-cinzel), Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>EcoVista</div>
            <div style={{ fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Carpentry</div>
          </div>
        </Link>

        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 40 }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.80)", fontSize: "0.88rem", fontWeight: 500, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8A558")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden md:inline-flex"
          style={{ background: "#C8863A", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: "0.85rem", fontWeight: 600, transition: "background 0.2s", textDecoration: "none" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#E8A558")}
          onMouseLeave={e => (e.currentTarget.style.background = "#C8863A")}
        >
          Get a Quote
        </Link>

        <button className="md:hidden" style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", padding: 8 }} aria-label="Open menu">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
