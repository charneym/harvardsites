# Magellan Biomedical (slug: magellan-biomedical) — HOME-ONLY build, 2026-11-20

- Site: https://magellanbiomedical.com/ (WordPress, GoDaddy-style template). Pages: Home, Team, Technology (two lines of text), Contact (a form).
- Type: medtech (CathPilot catheter steering, tracking and navigation system for cardiovascular interventions). Canadian. No pathogens, toxins or biodefence.
- HQ: Magellan Biomedical Inc., Richmond Hill, Ontario L4C 5X4, Canada (NRC IRAP grant record; no street address published). CDL lists the company under its Toronto site.
- Phone: 647 241 0540 (site contact page).
- Email: info@magellanbiomedical.com (site contact page; the only address on the company domain). Lead's published university address: ali.tavallaei@torontomu.ca (TMU faculty listing).
- Lead: Ali Tavallaei, PhD, PEng — President, Co-founder and Director (site team page); "co-founder & CEO" in the NGBI Lab podcast (ngbideas.transistor.fm, S3 E13). Canada Research Chair (Tier II) in Systems and Devices for Cardiovascular Interventions, Toronto Metropolitan University. Greeting: "Dear Dr. Tavallaei".

## Facts used
- Site home: value-driven solutions for unmet clinical needs in minimally invasive cardiovascular therapy and diagnosis; collaboration with leading research institutions and hospitals; image-guided cardiovascular interventions; team expert in biomedical engineering, cardiovascular imaging and image-guided therapies. Technology page: "we help save the limbs of those with critical limb ischemia".
- Team page (all six people, roles and one-line summaries): Tavallaei; Andrew Dueck, MD (Head of Vascular Surgery, Sunnybrook; Professor of Surgery, U of T); James Zhou, MSc (former R&D engineer, Medtronic aortic division, 7+ years); Graham Wright, PhD (CRC Tier I, Imaging for Cardiovascular Therapeutics; Senior Scientist, Sunnybrook Research Institute); Trisha Roy, MD, PhD (vascular surgeon and scientist, Houston Methodist; PAD characterization pioneer); Daniel Hawkins (business advisor; co-founder & CEO of Shockwave Medical and Calibra Medical; 140+ patents).
- TMU research news, 2024-10-01 (https://www.torontomu.ca/research/news-events/2024/10/tmu-professor-steers-a-novel-cardiovascular-device-to-market): steering and tracking, 3D visualization relative to the anatomy vs 2D X-ray; self-expandable frame contracts/deploys to pass narrow vessels with precise tip control; CIHR Project Grant with industry partner Magellan Biomedical Inc. for design finalization, preclinical and clinical usability studies.
- TMU Magazine ("Zeroing in on a deadly disease"): 10M+ catheter procedures a year, up to 30% fail or repeat; full working prototype; first clinical use peripheral arterial angioplasty; targets coronary/peripheral angioplasty, aneurysm repair, cardiac ablation.
- Creative Destruction Lab (Toronto, 2018/19, Health): tip control of guidewire or catheter, tracking relative to anatomy, real-time 3D; applications peripheral angioplasty, endovascular and intracardiac imaging, EVAR, cardiac angioplasty.
- Zhou et al., IEEE TBME 70(11):3116–3125, 2023, doi 10.1109/TBME.2023.3276199: phantom targets 100% vs 69% (steerable) vs 31% (non-steerable), larger workspace, up to 4x guidewire force delivery and pushability; ex vivo CTO crossing 83% fresh, 100% fixed; porcine aorta in vivo, no coagulation or wall damage; safe and feasible.
- Device appearance for the hero render and the story: Magellan's own product render (magellanbiomedical.com/wp-content/uploads/2024/09/image-1024x567.jpg): blue sheath, nitinol petal-loop frame, central blue catheter, gold tendons from petal apexes to the tip and around the apex ring.
- Not used: Cath-Eye (a TMU lab device, link to Magellan unconfirmed); Vital Biomedical Technologies (another Tavallaei company); the site's stock heart graphic.

## Activity (since 2025-05-18)
- 2025-10-01: NRC IRAP contribution, $74,984 (2025-10-01 to 2026-05-06), "Design revisions for the manufacturing of CathPilot" (redesign for molding, optimized assembly). https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2025-2026-Q2-1034384%2Ccurrent
- Site team page has a 2025/10 upload (Daniel Hawkins portrait), i.e. updated in Oct 2025.

## Bad-site evidence
- GoDaddy/WordPress builder page: near-black hero with a blurry clip-art star and "Welcome to MAGELLAN BIOMEDICAL Inc." as the only headline; three-item nav plus a pill Contact button; "Our TeAM" (sic) heading; "Our Technology" heading with nothing under it; Technology page is two lines of text; a TrustedSite badge; © 2024.

## Palette
- Sampled from the logo PNG (uploads/2024/09/logo2-1.png): blue #285f97 → --acc/--ember (lifted to #3a77b4 for the mark on dark), mint #a1d1d5 → --accL; the live site's teal-black hero ground → --ink #07161c. Compass-rose mark redrawn as SVG (ring, two-tone cardinal points, blue diagonals, quartered centre).
- Type: Newsreader (display), Hanken Grotesk (text), Montserrat 600 for the wordmark (matches the logo's geometric sans).

## Hero
- Option (c): crafted render of the real product, `_kit/home/magellan-biomedical/render.py` (numpy tube shading with z-buffer: polished nitinol with a studio environment, clear-coat blue polymer, satin gold tendons), RGBA with the sheath feathered out; placed right of the copy with an ink scrim; slow drift, no pointer response.

## Build
- Gates (2026-11-20): smoke, reveal 1440/390, anim 1440/390, clip 1440/390 (390 fixed after shortening team summaries), overlay, masthead, mixed, polish, loader, cramped, hoverpad, split, balance, logo, buildout-test (8 nav clicks) all OK; hero-audit prints "no title found", as it does on the biomatcan and bmseed references.
- Parts in `_kit/home/magellan-biomedical/`, assembled from firelight regions by `assemble.py` into `_kit/src/magellan-biomedical.src.html`, built with `node _kit/build.js` to `/magellan-biomedical/index.html` (+ hero.webp). Build-out pages via `buildout` in @libs for Technology / Applications / Team / News.
