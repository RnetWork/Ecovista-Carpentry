import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";

const FEATURED = [
  { src: "/images/finished/06-img-4702.jpg", alt: "Timber frame structure exterior" },
  { src: "/images/finished/09-img-4729.jpg", alt: "Completed home exterior" },
  { src: "/images/finished/14-img-4572.jpg", alt: "Architectural detail" },
  { src: "/images/finished/16-img-4721.jpg", alt: "Interior timber frame" },
  { src: "/images/finished/23-img-4728.jpg", alt: "Roof framing" },
  { src: "/images/finished/11-img-4573.jpg", alt: "Exterior cladding detail" },
];

const PROCESS = [
  { src: "/images/finished/03-img-4632.jpg", alt: "Frame assembly on site" },
  { src: "/images/finished/08-img-4713.jpg", alt: "Carpentry in progress" },
  { src: "/images/finished/21-img-4719.jpg", alt: "Roof structure in progress" },
];

export default function Home() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] max-h-[1080px] overflow-hidden">
        <Image
          src="/images/finished/06-img-4702.jpg"
          alt="Eco Vista timber frame home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 max-w-7xl mx-auto left-0 right-0">
          <p className="font-label text-[10px] uppercase tracking-[0.22em] text-white/50 mb-5">
            Timber Frame Construction
          </p>
          <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] text-white tracking-tight mb-8 max-w-4xl">
            Crafted<br />
            <em className="not-italic text-accent">Structure.</em>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 bg-accent text-white px-7 py-3 font-label text-[11px] uppercase tracking-[0.14em] hover:bg-accent/90 transition-colors"
            >
              View Our Work <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/35 text-white px-7 py-3 font-label text-[11px] uppercase tracking-[0.14em] hover:bg-white/10 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO STATEMENT ──────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto">
        <RevealWrapper className="max-w-4xl">
          <p className="font-label text-[10px] uppercase tracking-[0.22em] text-concrete mb-8">
            What We Build
          </p>
          <p className="font-display text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.12] text-ink">
            We build timber frame homes that work as hard for the planet
            as they do for the people living in them. Every cubic metre
            of timber we use stores roughly{" "}
            <span className="text-accent">0.9 tonnes of CO₂</span>, while
            cutting energy bills by up to{" "}
            <span className="text-accent">30%</span> compared to traditional
            construction. Modern architecture, built from a material that
            gives back more than it takes.
          </p>
        </RevealWrapper>
      </section>

      {/* ── 3. FEATURED WORK GRID ───────────────────────────────── */}
      <section className="pb-0">
        <div className="px-6 md:px-16 max-w-7xl mx-auto mb-8">
          <RevealWrapper>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] text-ink">Selected Work</h2>
              <Link
                href="/gallery"
                className="font-label text-[10px] uppercase tracking-[0.18em] text-steel hover:text-accent transition-colors flex items-center gap-2"
              >
                Full Gallery <span>→</span>
              </Link>
            </div>
            <hr className="hairline mt-4" />
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-12 gap-1 md:gap-2">
          <RevealWrapper className="col-span-12 md:col-span-7 relative aspect-[4/3]">
            <Image src={FEATURED[0].src} alt={FEATURED[0].alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
          </RevealWrapper>
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-1 md:gap-2">
            {FEATURED.slice(1, 3).map((img, i) => (
              <RevealWrapper key={img.src} delay={i + 1} className="relative aspect-video md:aspect-auto">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
              </RevealWrapper>
            ))}
          </div>
          {FEATURED.slice(3).map((img, i) => (
            <RevealWrapper key={img.src} delay={i + 1} className="col-span-12 md:col-span-4 relative aspect-[4/3]">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── 4. STAT STRIP ───────────────────────────────────────── */}
      <section className="bg-ink text-paper mt-1 md:mt-2">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { num: "0.9", unit: "Tonnes", label: "CO₂ Stored", sub: "per cubic metre of timber" },
              { num: "1.1", unit: "Tonnes", label: "CO₂ Avoided", sub: "vs concrete or steel" },
              { num: "30%", unit: "",       label: "Lower Energy", sub: "heating & cooling bills, up to" },
            ].map(({ num, unit, label, sub }, i) => (
              <RevealWrapper key={label} delay={i + 1} className="py-10 md:py-0 md:px-10 first:pl-0 last:pr-0">
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/25 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-[clamp(2.8rem,5vw,5rem)] leading-none text-paper">{num}</span>
                  {unit && <span className="font-label text-sm uppercase tracking-widest text-concrete">{unit}</span>}
                </div>
                <p className="font-label text-[11px] uppercase tracking-[0.16em] text-accent">{label}</p>
                <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/25 mt-1">{sub}</p>
              </RevealWrapper>
            ))}
          </div>
          <hr className="hairline border-white/10 mt-12 mb-8" />
          <RevealWrapper className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="font-label text-[11px] uppercase tracking-[0.12em] text-white/30 max-w-lg leading-relaxed">
              The construction industry accounts for nearly 40% of global emissions.
              Timber is how we build against that, not with it.
            </p>
            <Link
              href="/journal/why-timber-frame-homes-are-the-future"
              className="font-label text-[10px] uppercase tracking-[0.18em] text-concrete hover:text-accent transition-colors flex items-center gap-2 shrink-0"
            >
              Read why timber is the future <span>→</span>
            </Link>
          </RevealWrapper>
        </div>
      </section>

      {/* ── 5. PROCESS STRIP ────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <RevealWrapper className="mb-10">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-concrete mb-3">The Craft</p>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] text-ink">How it gets built</h2>
            </div>
          </div>
          <hr className="hairline mt-4" />
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
          {PROCESS.map((img, i) => (
            <RevealWrapper key={img.src} delay={i + 1} className="relative aspect-[3/4] overflow-hidden group">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink/50 to-transparent">
                <p className="font-label text-[9px] uppercase tracking-[0.2em] text-white/50">
                  {String(i + 1).padStart(2, "0")} / {String(PROCESS.length).padStart(2, "0")}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── 6. CTA ──────────────────────────────────────────────── */}
      <section className="bg-ink text-paper py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper>
            <p className="font-label text-[10px] uppercase tracking-[0.22em] text-white/30 mb-6">
              Ready to Build
            </p>
            <h2 className="font-display text-[clamp(2.8rem,7vw,7rem)] leading-[0.94] text-paper mb-12 max-w-3xl">
              Let&apos;s build<br />
              <em className="not-italic text-accent">something.</em>
            </h2>
            <hr className="hairline border-white/10 mb-10" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-label text-[11px] uppercase tracking-[0.14em] hover:bg-accent/90 transition-colors">
                Start a Conversation <span>→</span>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-3 border border-white/25 text-white/70 px-8 py-4 font-label text-[11px] uppercase tracking-[0.14em] hover:border-white/50 hover:text-white transition-colors">
                Our Services
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
