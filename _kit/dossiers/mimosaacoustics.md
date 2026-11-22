# Mimosa Acoustics, Inc. (slug: mimosaacoustics) — HOME-ONLY build, batch 2026-11h

- Site: https://www.mimosaacoustics.com/ (hand-built static HTML, Templates/ma_layout.css, read 2026-11-22). Bad-site evidence: obsolete 2000s layout — a row of green/teal rounded pill tabs for the nav (HOME / PRODUCTS / SUPPORT / RESOURCES / CLINICIANS / CONTACT / SEARCH), small Lato text columns, a lime "Enquire Now" pill, a newsletter sign-up box with teal-filled inputs in the right rail, thumbnail product photos and stock clinician-guide photos in a four-column grid, Facebook/YouTube icon images; "Meet the team" heading on the About page with nothing under it; /news.html 404s.
- Domain check: company name, "© 2026 Mimosa Acoustics, Inc." and the address 335 Fremont St., Champaign, IL 61820 on the page; the same street address and pierre@mimosaacoustics.com in PubMed 20004714 author affiliation; PubMed 41449584 (Ear Hear, epub 2025-12-26) lists "Mimosa Acoustics, Champaign, Illinois, USA"; NIH RePORTER lists MIMOSA ACOUSTICS, Champaign, with 12 award records 1996–2021 under PI Patricia S. Jeng; University of Illinois Research Park startup-graduate profile (founded 1994 by Patricia Jeng, EnterpriseWorks 2003–2009) links mimosaacoustics.com. No newer site on another domain.
- Scope: medtech, auditory diagnostic instruments (wideband acoustic immittance / OAE). No pathogens, toxins or biodefence (the DoD SBIR grants are hearing diagnostics).
- HQ: Mimosa Acoustics, Inc., 335 Fremont St., Champaign, IL 61820, USA; +1 (217) 359-9740.
- Lead: Patricia Jeng — founder (Research Park profile: "started in 1994 ... by Patricia Jeng"); contact PI on every NIH award (RePORTER, "JENG, PATRICIA S"). Current title and pronouns not published; PhD (registry) not independently confirmed. Greeting: "Dear Patricia Jeng" (or "Dear Dr. Jeng" if the PhD is confirmed).
- Emails published: info@mimosaacoustics.com (site-wide), sales@mimosaacoustics.com, support@mimosaacoustics.com (contact page); judi@mimosaacoustics.com (site HTML author meta, Judi Lapsley Miller). No personal email for Patricia Jeng is published; do not guess one.

## Activity (pre-screen OK)
- 2025-12-26 (epub): Lapsley Miller JA, Reed CM, Perez ZD, "Improving Distortion-Product Otoacoustic Emission Test-Retest Reliability With Forward-Pressure Level Calibration on Clinical Equipment", Ear Hear 2026 May-Jun (PubMed 41449584), Mimosa affiliation.
- Site: OtoStat 3.3 monaural and binaural releases listed as latest news; footer © 2026.
- 2021-08-05: NIDCD Phase II continuation 5R44DC016780-03 ($787,151), "Middle-ear reflex testing using wideband acoustic immittance" (RePORTER appl 10260596), project to 2024-08-31.
- 2023-07 (epub): MOCR assay paper, Ear Hear 2024 (PubMed 37475147).

## Facts used
- Home/Products/OtoStat/OtoStat binaural/HearID/MEPA/DPOAE/Clinicians/Support/About pages: as quoted in views.js and content.js (OtoStat 3.3 FDA 510(k) for MEPA and DPOAE, research modules, binaural research-only, GPIO lines, Development Kit pre-order, HearID 5.1 510(k), MEPA 200–8000 Hz ~4 s without changing ear-canal pressure, first to bring WAI to clinicians, CUBeDIS/AT&T Bell Labs heritage, Made in the USA, distributors Starkey (USA, Germany) and J. Morita (Japan), numerous NIH and DOD SBIR/STTR grants, UIUC proximity).
- "Up to 20 dB" stimulus level errors with SPL calibration: abstract of PubMed 41449584.
- Team: only Patricia Jeng (founder, NIH PI) and Judi A. Lapsley Miller (Mimosa-affiliated first author 2018/2024/2026). Titles not published, so none invented.

## Palette / type
Logo (Mimosa-Logo_1LINE_RGB-01.webp): blue #0054a6 wordmark, sage-green concentric sound arcs. Site CSS: #4C99A6/#80BBC7 teal, #B2BB1C lime, #0054A4. Ink #06121e, accent #0054a4 on light, #80bbc7 on dark, lime for the emission. Lato (their site font) display, Source Sans 3 text. The mark is redrawn in SVG from the logo's sound arcs.

## Hero
Option (c): crafted render of the subject they measure — the human bony labyrinth (cochlea ~2.6 turns, vestibule, superior/posterior/lateral semicircular canals with ampullae), modelled and rendered offline by _kit/home/mimosaacoustics/render.py (swept-tube sphere z-buffer, bone pores and grain in normals/albedo, warm translucency, teal fill, SSAO, depth fog, true alpha) → hero.webp 1300×1053. Grepped the repo: no other concept uses a labyrinth render (tingtherapeutics uses hair cells, haystack-medical microneedles). Slow breath, no pointer parallax (CZ).

## Story
Fine-line ear cross-section (probe + foam tip in the canal, eardrum, ossicles, oval/round window, cochlea) with a readout band: 1 chirp in / reflection out → absorbance curve; 2 standing wave → SPL (null) vs FPL (level); 3 f1/f2 tones through the ossicles into the basal turn, place lights, 2f1−f2 emission returns → DPOAE spectrum.
