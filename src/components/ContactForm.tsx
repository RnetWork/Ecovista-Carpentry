"use client";

import { useState } from "react";

type Field = { label: string; name: string; type: string; required?: boolean; options?: string[] };

const fields: Field[] = [
  { label: "Your Name", name: "name", type: "text", required: true },
  { label: "Email Address", name: "email", type: "email", required: true },
  { label: "Phone Number", name: "phone", type: "tel" },
  {
    label: "Project Type",
    name: "project",
    type: "select",
    options: [
      "Timber Frame Home",
      "Porch or Deck",
      "Bespoke Joinery",
      "Extension",
      "Eco Passive Build",
      "Other",
    ],
  },
  { label: "Tell us about your project", name: "message", type: "textarea", required: true },
];

const inputBase =
  "w-full bg-transparent border-b border-steel/30 py-3 text-ink placeholder-concrete/60 focus:outline-none focus:border-accent transition-colors text-[15px]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="py-16">
        <p className="font-label text-[10px] uppercase tracking-[0.22em] text-accent mb-4">
          Message Sent
        </p>
        <p className="font-display text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1.1]">
          Thank you. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {fields.map((f) => (
        <div key={f.name}>
          <label
            htmlFor={f.name}
            className="font-label text-[9px] uppercase tracking-[0.2em] text-concrete block mb-1"
          >
            {f.label}
            {f.required && <span className="text-accent ml-1">*</span>}
          </label>

          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              name={f.name}
              required={f.required}
              rows={5}
              placeholder="Describe your project…"
              className={`${inputBase} resize-none`}
            />
          ) : f.type === "select" ? (
            <select
              id={f.name}
              name={f.name}
              className={`${inputBase} appearance-none cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled>Select a service…</option>
              {f.options?.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              className={inputBase}
              placeholder={f.label}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-label text-[11px] uppercase tracking-[0.14em] hover:bg-accent/90 transition-colors disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
        {!sending && <span>→</span>}
      </button>
    </form>
  );
}
