# UN&UP (Un&Up LLC / UNANDUP, LLC): dossier (home-only build, batch 2026-11f, medtech)

Slug `unandup` · built at `/unandup/` · domain unandup.com · parts in `_kit/home/unandup/`
Sources, fetched 2026-11-21: unandup.com (home, /about, /team, /theralode, /corbot, /thrombot, /press, /contact); NIH RePORTER (PI search "Creighton, Francis", org UNANDUP, LLC, Saint Louis; abstracts of appl 10693650, 11318520, 10897294, 11077590).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11f-unandup.jpg): Squarespace (WOTW) template; nav wraps onto two lines (HOME … PRESS / CONTACT FCOI); centred multi-line hero text beside a stock glowing light-swirl image; boxed logo; technology pages are only a sentence plus three "Learn More" toggles; contact page is just "CONTACT US" with no email, address or phone; no general company email anywhere (only staff mailtos on /team).
- Active: NIH NCI SBIR Phase I 1R43CA310649-01, $405,753, start 2026-09-01, "Improved Magnetomotive Embolization for Hepatocellular Carcinoma" (RePORTER 11318520). Also NHLBI 5R43HL178364-02 FY2026 ($289,177); site press posts through 2026-11-09 (SVIN 2026 pitch competition).
- Scope: medical devices / magnetic nanoparticle thrombolysis, embolization, robotics. No pathogens, toxins or biodefence.

## Company
- Founded 2018. Offices in the Cambridge Innovation Center, St. Louis, Missouri; ~2,500 ft² robotics lab in St. Louis Midtown; wet lab contracted at the St. Louis BioGenerator (site /about). No street address published.
- RePORTER: 26 award rows to UNANDUP, LLC FY2019–FY2026 totalling $12,067,038 (NINDS, NHLBI, NCI, NIMHD). Pulse Therapeutics (2014–15) awards to the same PI excluded; the JHU K08 rows are a different Creighton.
- Platforms (site): TheraLode™ (thrombolysis, 250× lower thrombolytic dose, 10× more stroke patients treatable), CorBot™ (magnetic EP navigation, ~50× smaller magnets, angio-suite compatible, no shielding), ThromBot™ (radial-access MeVO thrombectomy). RePORTER: R44NS132605 low-dose magneto-thrombolysis (350× faster than diffusion, ~250× lower alteplase dose); R44HL147745 robotic EP; R43CA310649 magnetic embolization beads (MR-safe) steered with UN&UP's magnet system; R43HL178364 magnetic rotational platform for coronary lesions; SB1NS139910 FAST System commercialization readiness pilot (FY2025).
- Press 2026: LSI USA '26 (ThromBot unveiled), MedTech Innovator Radar Forum (Apr), STL CAPS partnership, WashU BME Day capstone, SVINnovation pitch (Nov 9).

## People (site /team)
- Dr. Francis M. Creighton, PhD: Co-Founder, CEO & President (lead). Email fmc@unandup.com (mailto on /team). Greeting "Dear Dr. Creighton". Press posts call him "Duke Creighton".
- Peter S. Finley (Co-Founder, COO, psf@unandup.com); Michael E. Sabo (Chief Program Officer); Nicholas O. Jensen, PhD (Director of Science & Robotics); Leah Morrell (Director of Product Management); David C. Greenspan, PhD (Consultant & Lead Material Scientist); plus engineers. 18 clinical investigators (8 stroke, 5 EP/cardiology, 5 cancer).

## Brand
- Squarespace accent hsl(182.86,81.22%,35.49%) ≈ #119da4; custom CSS #119da4, #13505b, #0c7489, #d7d9ce; pure black ground; white boxed U/N/&/U/P logo; fonts Adrianna (headings), Aktiv Grotesk (body).
- Concept: ink #04080a, teal #119da4 (#45c6cb on dark, #0b6f83 on light), bone #eef1ec; Red Hat Display + Inter. Logo redrawn as SVG.

## Build notes
- Hero (HOME_BRIEF update option c): crafted render (render.py) of a nickel-plated bar magnet with iron filings tracing its computed dipole field (chains along evenly spaced field lines), graded teal on black, real alpha; hero.webp 1300×1300, centred at ~72% width on desktop, whole in a top band on phones. No Unsplash photo used (search not reachable from the build environment).
- Story: TheraLode mechanism, engraved artery with clot: blood stalls / alteplase diffuses → portable magnet turns, nanoparticle chains convey alteplase to the clot face → clot lyses, flow returns; bars for time-to-clot (diffusion vs >350× faster) and dose (approved vs ~250× lower). Schematic.
- Nav: Technology / Programs / Team / News open build-out pages (_kit/lib/buildout.js); Contact scrolls to the contact block (mailto fmc@unandup.com, Cambridge Innovation Center, St. Louis).
