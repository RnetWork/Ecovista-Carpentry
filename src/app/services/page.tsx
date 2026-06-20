import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eco Vista Carpentry builds timber frame homes, porches, bespoke joinery, extensions, and eco passive builds across Ireland.",
};

const services = [
  {
    num: "01",
    title: "Timber Frame Homes",
    body: "Full design and build of precision timber frame homes. From site survey to final handover — we manage the entire process, engineering the structure off-site to exact tolerances before assembly begins on your land. Faster, cleaner, and built to last generations.",
    tags: ["Design & Build", "Structural Engineering", "Site Management"],
    img: "/images/finished/06-img-4702.jpg",
    imgAlt: "Timber frame home exterior",
  },
  {
    num: "02",
    title: "Porches & Decks",
    body: "Bespoke timber porches and outdoor decking designed to extend your home into the landscape. Every piece is dimensioned and finished to work with your existing structure, with material choices that weather beautifully over time.",
    tags: ["Bespoke Design", "Hardwood & Softwood", "Weatherproof Finish"],
    img: "/images/finished/09-img-4729.jpg",
    imgAlt: "Timber porch structure",
  },
  {
    num: "03",
    title: "Bespoke Joinery",
    body: "Crafted woodwork made to your exact specification — fitted furniture, staircase details, window surrounds, interior cladding, and more. Each piece is made by hand in our workshop and installed by the same team that built it.",
    tags: ["Workshop Crafted", "Fitted Furniture", "Interior Cladding"],
    img: "/images/finished/14-img-4572.jpg",
    imgAlt: "Interior joinery detail",
  },
  {
    num: "04",
    title: "Extensions",
    body: "Timber frame extensions that feel like they were always there. We match architectural rhythm, material palette, and proportions to your existing home — adding space without losing character.",
    tags: ["Architectural Match", "Planning Support", "Structural Integration"],
    img: "/images/finished/16-img-4721.jpg",
    imgAlt: "Timber frame extension",
  },
  {
    num: "05",
    title: "Eco Passive Builds",
    body: "High-performance buildings designed around passive house principles — airtight envelopes, optimised thermal mass, and mechanical ventilation with heat recovery. Lower energy bills. Healthier air. A home that performs on paper and in practice.",
    tags: ["Passive House", "MVHR Systems", "Airtight Construction"],
    img: "/images/finished/23-img-4728.jpg",
    imgAlt: "Eco passive build exterior",
  },
];

export default function Services() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        <RevealWrapper>
          <p className="font-label text-[10px] uppercase tracking-[0.22em] text-concrete mb-6">
            What We Do
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.92] text-ink tracking-tight max-w-3xl">
            Timber.<br />
            <em className="not-italic text-accent">Built right.</em>
          </h1>
          <hr className="hairline mt-10 max-w-xl" />
        </RevealWrapper>
      </section>

      {/* ── SERVICE ENTRIES ─────────────────────────────────────────── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
        {services.map((svc, i) => (
          <RevealWrapper key={svc.num} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-16 border-b border-steel/15 ${i === 0 ? "border-t" : ""}`}>
              {/* Number */}
              <div className="md:col-span-1 flex md:block items-baseline gap-4">
                <span className="font-label text-[clamp(1.2rem,2vw,1.8rem)] text-concrete/50 leading-none">
                  {svc.num}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-5">
                <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] text-ink mb-5">
                  {svc.title}
                </h2>
                <p className="text-steel leading-relaxed mb-6 max-w-sm">
                  {svc.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label text-[9px] uppercase tracking-[0.16em] text-concrete border border-steel/20 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden">
                <Image
                  src={svc.img}
                  alt={svc.imgAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </RevealWrapper>
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-ink text-paper py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper>
            <p className="font-label text-[10px] uppercase tracking-[0.22em] text-white/30 mb-6">
              English Speaking Team
            </p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,6rem)] leading-[0.94] text-paper mb-10 max-w-2xl">
              Let&apos;s talk about your project.
            </h2>
            <hr className="hairline border-white/10 mb-8" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-label text-[11px] uppercase tracking-[0.14em] hover:bg-accent/90 transition-colors"
            >
              Get a Quote <span>→</span>
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
