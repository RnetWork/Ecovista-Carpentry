import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";

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
      <section className="relative h-[60vh] min-h-[420px] max-h-[680px] overflow-hidden">
        <Image
          src="/images/finished/06-img-4702.jpg"
          alt="Completed timber frame home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16 px-6 md:px-16 max-w-7xl mx-auto left-0 right-0">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-label text-[9px] uppercase tracking-[0.2em] text-accent">
              Sustainability
            </span>
            <span className="font-label text-[9px] uppercase tracking-[0.16em] text-white/40">
              15 Mar 2024
            </span>
            <span className="font-label text-[9px] uppercase tracking-[0.16em] text-white/40">
              6 min read
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,5rem)] leading-[0.95] text-white tracking-tight max-w-3xl">
            Why Timber Frame Homes Are the Future
          </h1>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Sidebar */}
          <aside className="md:col-span-3 order-2 md:order-1">
            <RevealWrapper>
              <div className="md:sticky md:top-28 space-y-8">
                <div>
                  <p className="font-label text-[9px] uppercase tracking-[0.2em] text-concrete mb-3">
                    Key Stats
                  </p>
                  <div className="space-y-4">
                    {[
                      { num: "0.9T", label: "CO₂ stored per m³" },
                      { num: "1.1T", label: "CO₂ avoided vs concrete" },
                      { num: "30%", label: "Lower energy bills" },
                      { num: "40%", label: "Of global emissions: construction" },
                    ].map(({ num, label }) => (
                      <div key={label} className="border-l-2 border-accent pl-3">
                        <p className="font-display text-[1.4rem] text-ink leading-none">{num}</p>
                        <p className="font-label text-[9px] uppercase tracking-[0.14em] text-concrete mt-1">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="hairline" />

                <div>
                  <p className="font-label text-[9px] uppercase tracking-[0.2em] text-concrete mb-3">
                    Share
                  </p>
                  <Link
                    href="/contact"
                    className="font-label text-[9px] uppercase tracking-[0.16em] text-steel hover:text-accent transition-colors"
                  >
                    Interested in timber? →
                  </Link>
                </div>
              </div>
            </RevealWrapper>
          </aside>

          {/* Body */}
          <RevealWrapper delay={1} className="md:col-span-9 order-1 md:order-2">
            <div className="prose-article">

              <p className="lead">
                There&apos;s a quiet shift happening in how homes get built. More homeowners are
                asking the same question before they break ground: <em>is there a smarter way to
                build this?</em> Increasingly, the answer is timber.
              </p>

              <p>
                Timber frame construction isn&apos;t a trend or a throwback. It&apos;s one of the most
                sustainable, energy efficient, and genuinely livable ways to build a modern
                home. Here&apos;s why it&apos;s becoming the obvious choice for people who care about
                how their home is built, not just how it looks.
              </p>

              <h2>The construction industry has a carbon problem. Wood is the fix.</h2>

              <p>
                Construction is responsible for <strong>nearly 40% of global carbon emissions</strong> —
                more than every car, truck, and plane on the planet combined. Concrete and
                steel are two of the biggest contributors, both incredibly energy intensive
                to produce.
              </p>

              <p>
                Wood works the opposite way. As a tree grows, it pulls carbon out of the
                atmosphere and locks it inside the timber, where it stays locked in for the
                lifetime of the building. Every cubic metre of timber used in construction
                stores around <strong>0.9 tonnes of CO₂</strong>, while avoiding roughly <strong>1.1 tonnes</strong> of
                emissions compared to building the same structure in concrete or steel.
              </p>

              <p>
                To put that in perspective: building an average timber frame home keeps the
                same amount of CO₂ out of the atmosphere as <strong>taking a car off the road for
                several years.</strong> You&apos;re not just choosing a building material. You&apos;re
                choosing a structure that actively works against climate change instead of
                contributing to it.
              </p>

              {/* Pull image */}
              <div className="relative aspect-[16/9] my-10 overflow-hidden">
                <Image
                  src="/images/finished/21-img-4719.jpg"
                  alt="Roof structure in progress"
                  fill
                  sizes="(min-width: 768px) 75vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h2>A home that costs less to heat and cool, every single year</h2>

              <p>
                Wood is a natural insulator. Combined with precision engineered wall systems
                and modern insulation, timber frame construction can cut heating and cooling
                energy use by <strong>up to 30%</strong> compared to traditional masonry homes.
              </p>

              <p>
                In real terms, that&apos;s lower energy bills every month, for as long as you live
                there. Timber frame walls also seal more tightly than masonry, with fewer
                gaps for heat to escape through, so your home holds its temperature better in
                both winter and summer, with less work from your heating and cooling systems.
              </p>

              <h2>Built faster, built more precisely</h2>

              <p>
                Timber frame homes are built from engineered components, designed and
                manufactured off site to exact specifications before assembly even begins.
                Think of it less like traditional bricklaying and more like precision
                assembly, where every piece is made to fit before it ever reaches your site.
              </p>

              <p>
                The result is a construction process that&apos;s faster, more predictable, and
                significantly less wasteful. Fewer surprises, fewer delays, less material
                ending up in a skip. You get a clearer timeline from groundbreaking to move in
                day, and a build that&apos;s more consistent because so much of the precision
                happens before the first piece of timber is even on site.
              </p>

              <h2>It&apos;s not the wooden house you&apos;re picturing</h2>

              <p>
                Older ideas of timber homes tend to picture something rustic or basic. Modern
                timber frame architecture is the opposite. It pairs serious structural
                engineering with clean, contemporary design, creating homes that are warm and
                natural on the inside, but every bit as durable, sophisticated, and
                architecturally striking as anything built in concrete or steel.
              </p>

              {/* Pull image 2 */}
              <div className="relative aspect-[4/3] my-10 overflow-hidden">
                <Image
                  src="/images/finished/09-img-4729.jpg"
                  alt="Completed contemporary timber frame home"
                  fill
                  sizes="(min-width: 768px) 75vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h2>A healthier home to actually live in</h2>

              <p>
                Beyond the numbers, timber does something concrete materials can&apos;t: it makes
                a home feel different to be inside. Wood naturally helps regulate indoor
                humidity, improves acoustics, and creates interiors that feel calmer and more
                comfortable day to day. It&apos;s a material that&apos;s alive in a way concrete never
                is, and that shows up in how a space actually feels to live in, not just how
                it performs on paper.
              </p>

              <h2>The advantages, at a glance</h2>

              <ul>
                <li><strong>Lower carbon footprint</strong> than concrete or steel construction</li>
                <li><strong>Renewable, sustainably sourced</strong> building material</li>
                <li><strong>Up to 30% lower</strong> heating and cooling costs</li>
                <li><strong>Faster, more predictable</strong> construction process</li>
                <li><strong>Precision engineered</strong> for structural reliability</li>
                <li><strong>Healthier indoor environments</strong>, with better humidity and acoustic comfort</li>
                <li><strong>Modern architectural flexibility</strong> with timeless natural aesthetics</li>
                <li><strong>Less construction waste</strong>, less environmental impact</li>
                <li><strong>Built to last</strong> for generations</li>
              </ul>

              <h2>More than a building method</h2>

              <p>
                A timber frame home isn&apos;t just a different way to build. It&apos;s a different set
                of values built into the walls around you. Lower carbon, lower running costs,
                faster construction, and a home that&apos;s genuinely healthier to live in. As the
                world moves toward smarter, lower carbon construction, timber isn&apos;t catching
                up to the future of homebuilding. It already is the future.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-white/30 mb-4">
                Thinking About Building with Timber?
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.94] text-paper">
                At Eco Vista, we design<br />
                <em className="not-italic text-accent">and build it.</em>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-label text-[11px] uppercase tracking-[0.14em] hover:bg-accent/90 transition-colors shrink-0"
            >
              Get in Touch <span>→</span>
            </Link>
          </RevealWrapper>
        </div>
      </section>

      {/* ── BACK TO JOURNAL ──────────────────────────────────────────── */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto py-10">
        <Link
          href="/journal"
          className="font-label text-[10px] uppercase tracking-[0.18em] text-steel hover:text-accent transition-colors flex items-center gap-2"
        >
          ← Back to Journal
        </Link>
      </div>
    </>
  );
}
