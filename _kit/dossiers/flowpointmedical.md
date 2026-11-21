# Flowpoint Medical Inc. — dossier (home-only build, batch 2026-11f, medtech / hemodialysis vascular access)

Slug: `flowpointmedical` · built at `/flowpointmedical/` · domain flowpointmedical.com · parts and render in `_kit/home/flowpointmedical/`

Sources, fetched 2026-11-21: flowpointmedical.com (Carrd one-pager: home, about, contact form); NIH RePORTER 1R43DK141421-01
(appl 11013179) and 3R43DK141421-01S1 (appl 11237368); SBIR.gov award 213501; Google Patents US 2024/0238575 A1;
Startland News 2025-03-12 ("Roster filled: 32 Kansas startups march into Round 2..."); Harvard PGP team page (pgp.med.harvard.edu/team).

## Domain check
- flowpointmedical.com shows "Flowpoint Medical", "Copyright 2026 Flowpoint Medical Inc", and team (Jason Bobe, Co-Founder and CEO).
- Registered 2023-08-01 (Verisign RDAP), last changed 2026-07-02; MX Zoho (mx.zoho.com). LinkedIn: Jason Bobe, Flowpoint Medical Inc.
- NIH RePORTER org FLOWPOINT MEDICAL, Overland Park KS 66221-8036; SBIR.gov: Flowpoint Medical Inc, 11320 W 144th St, Overland Park, KS 66221.
- No newer site found.

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11f-flowpointmedical.jpg): Carrd one-pager, flat periwinkle background with animated white
  streaks, pill-shaped HOME/ABOUT/CONTACT buttons, a 155px product photo in a circle, the name and the tagline "The future of
  hemodialysis vascular access", nothing else on the home page; About is four small mixed-style headshots with one-line titles;
  contact is a bare form. No description of the product, no news, no address, no email.
- Active: NIH NIDDK SBIR Phase I 1R43DK141421-01, $324,836, 2024-09-17 to 2026-09-16; supplement 3R43DK141421-01S1, $55,000,
  award notice 2025-05-27. Site copyright 2026, domain updated 2026-07. Startland News, March 2025 (Gamechangers & Champions Round 2).
- Scope: implantable medical device for hemodialysis. No pathogens, toxins or biodefence.

## Company / product (RePORTER abstract, patent)
- Implantable vascular access device: 3D-printed titanium shell guides the hemodialysis needle to the correct insertion point;
  titanium-nitride coated valve stops bleeding immediately on needle removal. Minimises infection, incorrect needle placement and
  excessive bleeding. Phase I: refine manufacturability and operational parameters; large-animal preclinical study (function,
  tissue integration, inflammatory profile, infection and bleeding risks); next GLP-certified animal study and first-in-human trial;
  could facilitate wider adoption of home hemodialysis.
- Context (abstract): >500,000 Americans with ESKD, most need hemodialysis 3x a week; life expectancy 5–10 years; dialysis patients ~1%
  of Medicare population, >7% of the Medicare budget; "the single most important problem ... is safe and reliable cannulation".
- Patent US 2024/0238575 A1 "Vascular access devices with self-sealing valves" (Azeloglu, Lima; assignee Icahn School of Medicine at
  Mount Sinai; filed 2022-05-27, published 2024-07-18): base ~23 x 6 x 5–9 mm, open-cell / fenestrated titanium for tissue ingrowth,
  suture flanges, needle channel at a fixed angle, valve displaced perpendicular to the needle axis, closes on withdrawal; implanted
  under the skin directly over the AV fistula.

## People (site About)
- Jason Bobe — Co-Founder and CEO; contact PI on R43DK141421; Associate Professor, Icahn School of Medicine at Mount Sinai (PGP page,
  "he"; no degree listed). Greeting: "Dear Mr. Bobe".
- Evren U. Azeloglu, PhD — Co-Inventor, Assoc. Professor at Mount Sinai (co-PI on the NIH award).
- Alan Benvenisty, MD — Vascular surgeon, Professor at Mount Sinai.
- Eric Lima, PhD — Co-Inventor, Tenured Professor at Cooper Union.
- Email: jasonbobe@gmail.com (SBIR.gov award 213501, PI and business contact). No address on the site.

## Brand
- Live site: periwinkle #BFD6FF ground, slate type, Source Sans Pro, letter-spaced caps. No logo (text wordmark only).
- Concept: navy ink #0a1120, bone #f2f5fa, accent their periwinkle #bfd6ff (deepened #3f63b8 / #2e4d94 on light bands),
  gold #d9a441 only for the TiN valve; Source Sans 3; a small line mark (device outline + slanted needle) drawn for the concept.

## Build notes
- Hero (HOME_BRIEF update option c, crafted render of their real product): the only product photo on their site is 540 px, too small.
  `_kit/home/flowpointmedical/render.py` ray-traces an SDF model of the device (fenestrated titanium body, gold valve, slanted needle
  channel, suture flanges) to hero.webp with alpha; sits right of the text with a soft periwinkle glow, slow float/push-in.
- Story: engraved longitudinal section through the access arm: fistula → guide implanted over the vessel → needle down the fixed
  channel pushing the valve aside → valve closes on withdrawal. Schematic.
- Team: masthead text list (portraits on the live site are small and mixed in style).
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
