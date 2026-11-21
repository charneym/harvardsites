# Cascade Metrix, Inc. — dossier (home-only concept, batch 2026-11c)

- Site built: `/cascade-metrix/` (home only, build-out pages via `_kit/lib/buildout.js`)
- Source folder: `_kit/home/cascade-metrix/` (assemble.py → `_kit/src/cascade-metrix.src.html`)
- Live site: https://cascademetrix.com (viewed 2026-11-21)
- HQ: 11650 Olio Road, Suite 1000-110, Fishers, IN 46037-7619 (their own footer; NIH RePORTER org record, Fishers IN 46037)
- Public email: info@cascademetrix.com (their site footer, Cloudflare-obfuscated)

## Lead
- **Kislaya Kunjan, PhD, MBA** — Co-Founder and CEO (their Team page); PI on all three NIH SBIR awards.
  The site uses "He" → greeting **"Dear Dr. Kunjan"**.
  Best published email: **info@cascademetrix.com** (no personal address found on their site or in the NIH records;
  RePORTER does not publish PI emails).
- Other named people (their Team page): Frank Lloyd, Jr., MD, MBA — Co-Founder, Chief Engagement Officer;
  David T. Giddings — Co-Founder, Chief Development Officer; advisors Peter Rule and Raj Kapoor, MD, MBA, FCCP.

## Activity (most recent first, all sourced)
- 2026-08-28 — NIH NIGMS SBIR Phase II continuation, 5R44GM146498-03, $897,537, "Automated Multiplex Analyzer for
  Sepsis and Beyond" (project period to 2028-08-31) — https://reporter.nih.gov/project-details/11406343
- 2025-08-28 — SBIR Phase II award, 2R44GM146498-02, $720,920 — https://reporter.nih.gov/project-details/11256350
  (also the "Latest Update" on their home page)
- 2022-08-02 — SBIR Phase I, 1R43GM146498-01, $349,917, "A Multiplex Analyzer for Sepsis Management"
  — https://reporter.nih.gov/project-details/10483277
- Elevate Ventures non-dilutive matching funds (their home page; undated).
- NIH total 2022–2026: $1,968,374 (site stat shows "$1.97M").

## Pre-screen
- Science: an automated bedside blood analyzer (lactate, glucose, hematocrit). It measures blood chemistry, so there is no pathogen, toxin or biodefence work → in scope.
- Activity since 2025-05-18: yes (2025 and 2026 NIH awards).

## Bad-site evidence (cascademetrix.com, viewed 2026-11-21)
1. Stock Joomla 4/5 "Cassiopeia" template (`/media/templates/site/cassiopeia/`), olive header bar, default search box.
2. A public **Login / "Sign in with a passkey" / Forgot your password?** panel takes the right column of the home page.
3. Joomla breadcrumb "You are here: Home" and an underlined blue "Welcome!" article title as the headline.
4. Hero is a word-cloud PNG ("Hyperglycemia", "SEPSIS"); the logo still reads "Cascade Metrix, llc." in a script
   font, though the footer says "Cascade Metrix, Inc.".
5. Broken image: the NIH logo is hot-linked from Wikimedia and renders as alt text ("File:NIH Master Logo Vertical").
6. Typos in body copy ("preclinial", "plataform", "known of have"). Only three pages: Home / Solution / Team.

## Hero
Option (c): an offline three.js render (`render.js`, graded by `grade.py`) of a generic closed-loop flow cell. It shows
blood drawn from a central line, passed over three sensor wells on a gold-electrode board, and returned.
The render depicts the mechanism described on their Solution page and in the NIH abstract; it is NOT their prototype,
and the caption says so. It has real alpha with a long eased radial falloff and no box edge (×6 luminance check done).
Their own `autoplexer-illustration.png` looks AI-generated, so it was not used.

## Palette
Logo red #f50002 (accent #ff6b6b on dark, #b3121f fills, #a3101c on bone) and the navy ink family from their own
template colour `--template-special-color:#001B4C` (ink #0a1226).

## Gates (2026-11-21)
smoke OK (7 routes) · clip 1440 OK · clip 390 OK · buildout-test OK (8 nav clicks) · fit-audit OK (5 widths) ·
loader-contrast-audit pass (no text under 3:1). hero-audit reports "no title found" on #/; it reports the same on
the /dotyscientific/ reference, so it's a tool limitation on home-only builds. The hero was checked by eye at 1920×930,
1440×900 and 390.
