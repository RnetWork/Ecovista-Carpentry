import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Insights on timber frame construction, sustainable building, and the future of eco-friendly homes from the Eco Vista Carpentry team.",
};

const posts = [
  {
    slug: "why-timber-frame-homes-are-the-future",
    title: "Why Timber Frame Homes Are the Future",
    date: "2024-03-15",
    dateLabel: "15 Mar 2024",
    excerpt:
      "Construction accounts for nearly 40% of global carbon emissions. Timber is how we build against that — not with it. Here's why timber frame is becoming the obvious choice.",
    img: "/images/finished/06-img-4702.jpg",
    imgAlt: "Completed timber frame home exterior",
    category: "Sustainability",
    readTime: "6 min read",
  },
  {
    slug: "the-passive-house-standard-explained",
    title: "The Passive House Standard, Explained",
    date: "2024-02-08",
    dateLabel: "08 Feb 2024",
    excerpt:
      "Passive house isn't a trend. It's a precise engineering standard that cuts energy use by up to 90% compared to a conventional build. We break down what it means in practice.",
    img: "/images/finished/23-img-4728.jpg",
    imgAlt: "Eco passive build exterior",
    category: "Building Science",
    readTime: "5 min read",
    comingSoon: true,
  },
  {
    slug: "bespoke-joinery-what-to-expect",
    title: "Bespoke Joinery: What to Expect from the Process",
    date: "2024-01-20",
    dateLabel: "20 Jan 2024",
    excerpt:
      "From first sketch to final installation, bespoke joinery involves more collaboration than most clients expect. Here's how we approach it at Eco Vista.",
    img: "/images/finished/14-img-4572.jpg",
    imgAlt: "Timber joinery detail",
    category: "Craft",
    readTime: "4 min read",
    comingSoon: true,
  },
];

export default function Journal() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <RevealWrapper>
          <p className="font-label text-[10px] uppercase tracking-[0.22em] text-concrete mb-6">
            Writing
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.92] text-ink tracking-tight">
            Journal
          </h1>
          <hr className="hairline mt-8" />
        </RevealWrapper>
      </section>

      {/* ── POST LIST ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
        <div className="space-y-0">
          {posts.map((post, i) => (
            <RevealWrapper key={post.slug} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-steel/15 group">
                {/* Image */}
                <div className="md:col-span-4 relative aspect-[4/3] overflow-hidden">
                  {post.comingSoon ? (
                    <div className="absolute inset-0 bg-concrete/10 flex items-center justify-center">
                      <p className="font-label text-[9px] uppercase tracking-[0.2em] text-concrete">
                        Coming Soon
                      </p>
                    </div>
                  ) : (
                    <Link href={`/journal/${post.slug}`} tabIndex={-1}>
                      <Image
                        src={post.img}
                        alt={post.imgAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </Link>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-label text-[9px] uppercase tracking-[0.18em] text-accent">
                      {post.category}
                    </span>
                    <span className="font-label text-[9px] uppercase tracking-[0.14em] text-concrete">
                      {post.dateLabel}
                    </span>
                    <span className="font-label text-[9px] uppercase tracking-[0.14em] text-concrete">
                      {post.readTime}
                    </span>
                  </div>

                  {post.comingSoon ? (
                    <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] text-ink/50 mb-3">
                      {post.title}
                    </h2>
                  ) : (
                    <Link href={`/journal/${post.slug}`}>
                      <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] text-ink mb-3 hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                  )}

                  <p className="text-steel leading-relaxed text-sm max-w-xl mb-5">
                    {post.excerpt}
                  </p>

                  {!post.comingSoon && (
                    <Link
                      href={`/journal/${post.slug}`}
                      className="font-label text-[10px] uppercase tracking-[0.18em] text-steel hover:text-accent transition-colors flex items-center gap-2 w-fit"
                    >
                      Read Article <span>→</span>
                    </Link>
                  )}
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>
    </>
  );
}
