# Eco Vista Carpentry — Website Brief
*For Claude Code. Paste this whole doc as your first prompt, or feed it section by section.*

---

## 0. Project Setup Instructions (give this to Claude Code first)

```
Initialize a new web project for "Eco Vista Carpentry" — a premium carpentry brand.
Scaffold using whichever modern framework you judge best for a fast, image/video-heavy
marketing site with strong animation (Next.js App Router is a safe default if unsure).

Asset source: Google Drive folder
https://drive.google.com/drive/folders/15OsB9FhMxqBPtGBbZf1b6E_p2UsIcghb

This folder contains ~95 raw, unconverted files (HEIC photos + MOV/MP4 video clips,
straight off an iPhone, no naming convention). Your first job before any UI work:

1. Pull the folder via the Google Drive API/MCP connection available in this environment.
2. Convert all .HEIC -> .jpg (or .webp) at high quality, and re-encode .MOV -> .mp4 (h264)
   + a compressed .webm, generating poster-frame stills for each video.
3. Sort/triage into two buckets based on visual content: "finished work" (clean shots of
   completed carpentry pieces, close-ups, staged) vs "process" (job-site, in-progress,
   tools, raw materials). Mark anything blurry, duplicate, or low-quality for exclusion.
4. Output organized assets into /public/images/finished, /public/images/process,
   /public/video, with descriptive filenames (not IMG_4631.jpg).
5. There is also a single logo image (extracted separately, attached/described below —
   ask the user to drop it into /public/logo/ if not already there).

Do not proceed to building pages until asset triage is done and you've shown the user
a summary of what's usable.
```

---

## 1. Creative Direction: "Modern Architecture Firm"

Reference points: Bjarke Ingels Group (BIG), high-end architecture/design studio
portfolios, gallery-style photography presentation. The carpentry is treated like
exhibited work, not stock decoration. Confidence through restraint — let big, bold
type and full-bleed photography/video do the talking. Minimal ornamentation.

**Mood:** precise, structural, monochrome-led, occasional sharp accent. Premium
through *editing*, not embellishment — what's left OUT matters as much as what's in.

---

## 2. Color Palette

```
--ink:        #0B0B0C   /* near-black, primary text & dark sections */
--paper:      #F7F6F3   /* warm off-white, NOT pure white — primary background */
--concrete:   #B8B5AE   /* warm grey, secondary text on light bg */
--steel:      #4A4A48   /* mid grey, dividers, muted UI */
--accent:     #C45A2E   /* burnt-orange/rust — sparingly, CTAs + key accents only.
                            Echoes raw wood tones without going "warm rustic" cliché */
--white:      #FFFFFF   /* pure white, used only for contrast moments */
```

Rule: 90% of the site is ink-on-paper or paper-on-ink. The accent color appears in
maybe 3–5 places total (CTA buttons, one underline detail, hover states). Never
gradient. Never multiple accent colors competing.

---

## 3. Typography

```
Display/Headlines:  A bold, slightly condensed grotesque — e.g. "Archivo Black" /
                     "Neue Haas Grotesk Display" / "General Sans" (weight 700–900).
                     Set BIG. Headlines can break grid, overlap image edges slightly.

Body:                A clean, neutral grotesque at lighter weight — e.g. "Inter" or
                     "General Sans" (400–500). Generous line-height (1.6+).

Numerals/Labels:     Monospace for small metadata (project numbers, dates, tags) —
                     e.g. "JetBrains Mono" or "Space Mono" at small size, uppercase,
                     letter-spaced. This is the "architecture studio" signature touch
                     (think drawing-set annotations).
```

Type scale should be dramatic: hero headlines 80–140px desktop, collapsing hard on
mobile but staying bold (not timid). Avoid mid-size in-between headers — go big or
go small, skip the safe medium.

---

## 4. Layout & Grid Principles

- **Asymmetric grid.** Avoid centered-everything. Let images bleed to one edge,
  text block offset, intentional negative space pockets.
- **Full-bleed photography/video** between sections — no padding/margin on hero
  and gallery imagery. Let the work breathe at full width.
- **Thin hairline dividers** (1px, --steel at low opacity) instead of heavy
  section backgrounds to separate content — architectural drawing language.
- **Generous whitespace** — err toward too much negative space over too little.
- Grid-based gallery (not a slideshow/carousel) — like a portfolio wall.

---

## 5. Motion Language

- Scroll-triggered reveals: text and images fade/slide up subtly (200–400ms,
  ease-out) as they enter viewport. Restrained — never bouncy, never playful.
- Large hero video/image with slow, almost imperceptible parallax on scroll.
- Page transitions: simple cross-fade, no flashy slide/wipe effects.
- Hover states on gallery items: subtle scale (1.02–1.04) + slight brightness
  shift, accent-color underline on links.
- Respect `prefers-reduced-motion`.

---

## 6. Site Structure (v1, 4 pages)

### Home
1. **Hero** — full-bleed video (best process or finished-work clip) or large still,
   massive headline overlay (e.g. "Crafted Structure." with one word in accent
   color or italic), minimal subtext, single CTA.
2. **Intro statement** — short, confident brand statement (2–3 sentences max,
   large type, lots of whitespace around it). What Eco Vista does and the
   philosophy behind it (craftsmanship, sustainability/material honesty if
   that's part of the brand — confirm with Noah).
3. **Featured work grid** — 4–6 best finished-work images, architectural gallery
   grid, links through to Gallery/Services.
4. **Process strip** — 2–3 process shots/video clips, smaller scale, showing the
   craft behind the result (contrast to the polished hero).
5. **CTA section** — dark (ink background), large type, contact prompt.
6. **Footer** — minimal, monospace labels, contact info, socials.

### Services
- List of services as large, numbered editorial entries (01 / 02 / 03 style,
  monospace numerals) rather than icon-cards. Each with a short description and
  a supporting image. Avoid generic 3-icon-grid template look entirely.

### Gallery
- Full portfolio grid of finished work, filterable if there's enough volume
  (e.g. by project type). Clicking an image opens a focused lightbox/detail view,
  not a busy modal — full-bleed image, minimal caption.

### Contact
- Simple, confident — large headline ("Let's build something."), direct contact
  form, address/service area, maybe an embedded map styled to match the dark/
  monochrome palette (avoid default colorful Google Maps styling — use a custom
  dark map style or a static styled map image).

---

## 7. Technical Notes

- Mobile-first responsive, but this design direction reads best with real
  attention to desktop large-screen impact too (big hero moments) — test both.
- Video: always provide a poster image, lazy-load below the fold, compress
  aggressively (target <3MB per hero video segment, use webm + mp4 fallback).
- Use `next/image` (or framework equivalent) for all images — no raw `<img>`.
- Bilingual note: previous Eco Vista site was EN/PT. Confirm with Noah whether
  v1 of this rebuild needs both languages or just English for now.
- Logo: single mark, located in the Drive folder as a Google Doc titled "Logo"
  (1501×865px source image). Extract and place in /public/logo/. If it doesn't
  suit a dark-background placement (e.g. it's a dark mark with no light variant),
  flag this back to the user — may need a reversed/white version for dark sections.

---

## 8. What to avoid

- No stock-photo-style rounded cards with drop shadows
- No generic 3-column icon+text "features" sections
- No carousel/slideshow for the gallery
- No gradient backgrounds, no glassmorphism, no neumorphism
- No centered-everything layouts
- No more than one accent color
- Nothing that looks like a Squarespace/Wix template default
