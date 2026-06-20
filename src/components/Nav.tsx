"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery",  label: "Gallery"  },
  { href: "/journal",  label: "Journal"  },
  { href: "/contact",  label: "Contact"  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-paper border-b border-steel/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Wordmark */}
        <Link href="/" className="flex items-baseline gap-[3px] leading-none select-none">
          <span
            className="font-display text-xl md:text-2xl tracking-tight"
            style={{ color: transparent ? "#F7F6F3" : "#8B7A1A" }}
          >
            ECO
          </span>
          <span
            className="font-display text-xl md:text-2xl tracking-tight"
            style={{ color: transparent ? "#E8E4DC" : "#4A6741" }}
          >
            VISTA
          </span>
          <span
            className={`font-body text-xs md:text-sm ml-[5px] tracking-widest uppercase ${
              transparent ? "text-white/60" : "text-concrete"
            }`}
          >
            carpentry
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-label text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 ${
                transparent
                  ? "text-white/70 hover:text-white"
                  : pathname === href
                    ? "text-accent"
                    : "text-steel hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center h-9 px-5 text-[11px] font-label uppercase tracking-[0.14em] transition-all duration-200 ${
            transparent
              ? "border border-white/40 text-white hover:bg-white/10"
              : "bg-accent text-white hover:bg-accent/90"
          }`}
        >
          Get a Quote
        </Link>

        {/* Mobile menu placeholder */}
        <button
          className={`md:hidden p-2 ${transparent ? "text-white" : "text-ink"}`}
          aria-label="Open menu"
        >
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
