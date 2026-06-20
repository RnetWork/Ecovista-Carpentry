import Link from "next/link";

const services = [
  "Timber Frame Homes",
  "Porches & Decks",
  "Bespoke Joinery",
  "Extensions",
  "Eco Passive Builds",
];

const pages = [
  { href: "/services", label: "Services"  },
  { href: "/gallery",  label: "Gallery"   },
  { href: "/journal",  label: "Journal"   },
  { href: "/contact",  label: "Contact"   },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-[3px] mb-6">
              <span className="font-display text-2xl text-paper" style={{ color: "#C4A832" }}>ECO</span>
              <span className="font-display text-2xl text-paper" style={{ color: "#7A9E6E" }}>VISTA</span>
              <span className="font-body text-xs ml-[5px] tracking-widest uppercase text-white/30">carpentry</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium timber frame homes and bespoke woodwork.
              Built with precision, designed to last generations.
            </p>
            <p className="mt-4 font-label text-[10px] uppercase tracking-[0.16em] text-accent">
              English Speaking Team
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-concrete mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-paper/50 hover:text-paper transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-concrete mb-5">Navigate</p>
            <ul className="space-y-3">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-paper/50 hover:text-paper transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-concrete mb-5">Contact</p>
            <div className="space-y-3 text-sm">
              <a href="tel:+35312345678" className="block text-paper/50 hover:text-paper transition-colors">
                +353 1 234 5678
              </a>
              <a href="mailto:hello@ecovistacarpentry.com" className="block text-paper/50 hover:text-paper transition-colors">
                hello@ecovistacarpentry.com
              </a>
              <p className="text-paper/30 text-xs leading-relaxed">
                Co. Wicklow,<br />Ireland
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 gap-4">
          <p className="font-label text-[10px] uppercase tracking-[0.14em] text-white/20">
            © {new Date().getFullYear()} Eco Vista Carpentry Ltd.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((t) => (
              <Link
                key={t}
                href="#"
                className="font-label text-[10px] uppercase tracking-[0.14em] text-white/20 hover:text-white/50 transition-colors"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
