"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/logo/Ecovista_Logo_transparent.png"
            alt="EcoVista Carpentry"
            width={140}
            height={56}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
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
