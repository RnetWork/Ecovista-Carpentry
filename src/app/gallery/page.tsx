import type { Metadata } from "next";
import RevealWrapper from "@/components/RevealWrapper";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse completed Eco Vista Carpentry projects — timber frame homes, porches, and bespoke woodwork across Ireland.",
};

const ALL_IMAGES = [
  { src: "/images/finished/01-img-4722.jpg", alt: "Timber frame structure" },
  { src: "/images/finished/02-img-4715.jpg", alt: "Structural timber detail" },
  { src: "/images/finished/03-img-4632.jpg", alt: "Frame assembly on site" },
  { src: "/images/finished/04-img-4631.jpg", alt: "Roof frame construction" },
  { src: "/images/finished/05-img-4635.jpg", alt: "Timber wall framing" },
  { src: "/images/finished/06-img-4702.jpg", alt: "Completed home exterior" },
  { src: "/images/finished/07-img-4720.jpg", alt: "Cladding detail" },
  { src: "/images/finished/08-img-4713.jpg", alt: "Carpentry in progress" },
  { src: "/images/finished/09-img-4729.jpg", alt: "Finished home exterior" },
  { src: "/images/finished/10-img-4712.jpg", alt: "Structural joint detail" },
  { src: "/images/finished/11-img-4573.jpg", alt: "Exterior cladding" },
  { src: "/images/finished/12-img-4629.jpg", alt: "Ridge beam installation" },
  { src: "/images/finished/13-img-4725.jpg", alt: "Window framing" },
  { src: "/images/finished/14-img-4572.jpg", alt: "Architectural corner detail" },
  { src: "/images/finished/15-img-4944.jpg", alt: "Exterior finish" },
  { src: "/images/finished/16-img-4721.jpg", alt: "Interior timber frame" },
  { src: "/images/finished/17-img-4633.jpg", alt: "Eave detail" },
  { src: "/images/finished/18-img-4706.jpg", alt: "Home facade" },
  { src: "/images/finished/19-img-4727.jpg", alt: "Garden elevation" },
  { src: "/images/finished/20-img-4726.jpg", alt: "Rear elevation" },
  { src: "/images/finished/21-img-4719.jpg", alt: "Roof structure in progress" },
  { src: "/images/finished/22-img-4634.jpg", alt: "Timber beam connection" },
  { src: "/images/finished/23-img-4728.jpg", alt: "Roof framing" },
  { src: "/images/finished/24-img-4946.jpg", alt: "Exterior cladding pattern" },
  { src: "/images/finished/25-img-4704.jpg", alt: "Side elevation" },
  { src: "/images/finished/26-img-4731.jpg", alt: "Entry detail" },
  { src: "/images/finished/27-img-4703.jpg", alt: "Soffit and fascia detail" },
  { src: "/images/finished/28-img-4723.jpg", alt: "Completed project overview" },
];

export default function Gallery() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <RevealWrapper>
          <p className="font-label text-[10px] uppercase tracking-[0.22em] text-concrete mb-6">
            Portfolio
          </p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.92] text-ink tracking-tight">
              Our Work
            </h1>
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-concrete mb-2">
              {ALL_IMAGES.length} Projects
            </p>
          </div>
          <hr className="hairline mt-6" />
        </RevealWrapper>
      </section>

      {/* ── GALLERY GRID ────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
        <GalleryGrid images={ALL_IMAGES} />
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-white/30 mb-4">
                Ready to Build
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.94] text-paper">
                Seen enough?<br />
                <em className="not-italic text-accent">Let&apos;s talk.</em>
              </h2>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-label text-[11px] uppercase tracking-[0.14em] hover:bg-accent/90 transition-colors shrink-0"
            >
              Start a Project <span>→</span>
            </a>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
