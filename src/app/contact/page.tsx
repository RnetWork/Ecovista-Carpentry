import type { Metadata } from "next";
import RevealWrapper from "@/components/RevealWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Eco Vista Carpentry. We build timber frame homes across Ireland and speak your language — English only, no language barriers.",
};

export default function Contact() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <RevealWrapper>
          <p className="font-label text-[10px] uppercase tracking-[0.22em] text-concrete mb-6">
            Get in Touch
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink tracking-tight max-w-4xl">
            Let&apos;s build<br />
            <em className="not-italic text-accent">something.</em>
          </h1>
          <hr className="hairline mt-10 max-w-2xl" />
        </RevealWrapper>
      </section>

      {/* ── CONTACT GRID ────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

          {/* Left: Info */}
          <div className="md:col-span-4">
            <RevealWrapper>
              <div className="space-y-10">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-concrete mb-3">
                    Phone
                  </p>
                  <a
                    href="tel:+35312345678"
                    className="font-display text-[1.4rem] text-ink hover:text-accent transition-colors"
                  >
                    +353 1 234 5678
                  </a>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-concrete mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:hello@ecovistacarpentry.com"
                    className="font-display text-[1.1rem] text-ink hover:text-accent transition-colors break-all"
                  >
                    hello@ecovistacarpentry.com
                  </a>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-concrete mb-3">
                    Location
                  </p>
                  <p className="text-steel leading-relaxed">
                    Co. Wicklow,<br />Ireland
                  </p>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-concrete mb-3">
                    Working Hours
                  </p>
                  <p className="text-steel leading-relaxed text-sm">
                    Monday – Friday<br />8:00 – 18:00
                  </p>
                </div>

                <hr className="hairline" />

                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                    English Speaking Team
                  </p>
                  <p className="text-sm text-steel leading-relaxed">
                    No language barriers. We communicate clearly throughout your entire project.
                  </p>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-8">
            <RevealWrapper delay={1}>
              <ContactForm />
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
