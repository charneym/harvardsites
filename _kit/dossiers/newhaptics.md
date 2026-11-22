# NewHaptics (slug: newhaptics) — HOME-ONLY build, 2026-11-22 (batch 2026-11g)

- Site: https://www.newhaptics.com/ (Webflow, footer "© 2024 NewHaptics Corp."). Domain confirmed: "NewHaptics" title and logo on every page, contact@newhaptics.com on the home page; NSF awards 2153384, 2348165 and 1913671 list the PI as alex@newhaptics.com (awardee NEWHAPTICS CORP., UEI SHYSY6SH8DL8, the same UEI as the NIH RePORTER org record); PR Newswire releases point to newhaptics.com. No newer domain found.
- Type: US medtech / assistive technology (refreshable multiline braille and tactile graphics displays). No pathogen, toxin or biodefence work.
- HQ: 2890 Carpenter Rd, Ann Arbor, MI 48108 (NSF awardee address "2890 CARPENTER RD STE 1300"; performance site "Suite 1700"; NIH RePORTER: Ann Arbor, MI 48108). The page uses the street address without a suite.
- Email: contact@newhaptics.com (site). Lead's email alex@newhaptics.com (NSF award records, PI contact).
- Lead: Alexander (Alex) Russomanno, CEO and co-founder (newhaptics.com/our-team "CEO"; NIH RePORTER PI, title CEO; PR Newswire 2023 "co-founder Alex Russomanno"). Ph.D. in mechanical engineering, University of Michigan; greeting "Dear Dr. Russomanno".
- Team (newhaptics.com/our-team): Sile O'Modhrain (CXO), Brent Gillespie (CTO), Thomas Simpson (Head of Product), Collin Rich (Senior R&D Engineer), Greg Pool (Mechanical Engineer), Hrishi Rao (UX Researcher).

## Activity
- 2026-09-10: NIH award notice 2R44EY030385-04 (SBIR Phase IIB, $1,045,938, budget start 2026-09-15, to 2028-05-31), "Microfluidic technology for a full-page braille and graphical tactile display". https://reporter.nih.gov/project-details/11409085
- 2026-08-07: NIH 5R61EY037521-02 ($503,472), TITO: A Touch-In-Touch-Out Tactile Display. https://reporter.nih.gov/project-details/11365199
- 2026-02-23: NSF SBIR Phase II 2153384 amendment, FY2026 $187,472 obligated (to 2027-08-31).
- 2024-08-01: NSF 2348165 (with UIUC), AudioTactile Data System, $741,159.
- 2024-03-26: CSUN AT Conference booth (site news). 2023-06-20: Accelerate Blue Fund venture round (PR Newswire).

## Facts used
- Site: mission, "$5-10 per page of embossed braille"; about: Holy Braille Project at U-M, NSF-funded, spin-off 2018, federal and state grants, batch-manufactured components "similar to how computer chips are made", dots like pixels; codex page: 4 lines × 32 characters, 10-point touchpad, Perkins-style 8-dot keyboard with split spacebars, thumb keys, reading keys, line selectors, D-pad, USB-C/USB-A/SD, Wi-Fi 5, Bluetooth 5.1, JAWS, 4.42 lb, $9,995 + shipping and taxes, air-driven pins that refresh under the finger; team bios; news links.
- NIH 2R44 summary: 30 × 96 grid, multi-touch sensing, microfluidic chips that process and store pneumatic signals from a few electronic valves to many dots, layered acrylic board analogous to a PCB, education market, portable. NIH R61 abstract: touch sensing, pins raised under the finger, drag-and-drop, draw, resize, BVI co-designers, screen-reader developer support.
- NSF 2153384: microfluidic substrate replaces electromechanical drive functions; half a page of braille in a tablet-sized device. NSF 2348165: UIUC collaboration, audio + touch data tools for BLV faculty, staff, postdocs, grad students in STEM.
- "$4M+ NIH since 2019" = sum of the six NIH RePORTER awards (224,957 + 905,987 + 823,561 + 559,871 + 503,472 + 1,045,938 = $4,063,786).

## Bad-site evidence
- Home hero is a plain product photo (Codex on a cloth next to a potted plant) with a black caption bar "Experience the Codex" as the only content; below it one mission sentence, a row of press logos and a contact form.
- Stale: footer "© 2024"; the news page stops at March 2024, missing the 2025 NIH R61 TITO award, the 2026 NIH Phase IIB award and the NSF/UIUC award; lowercase-only nav, typo "avalible" on the news page.
- Team page uses mixed headshots and a "Chief Happiness Officer" dog entry; no product photography beyond the hero.

## Design
- Palette: logo charcoal #373435 deepened to ink #1a191a; bone #f4f1ea (white pages, ivory keys); accent mauve-grey #cdb9be / #6e5a5f sampled from the cloth in their own Codex product photo (newhaptics.com hero IMG_4625.JPG). Wordmark in Comfortaa (their logotype) with the logo's braille dots redrawn as SVG; Fraunces display, Figtree text, IBM Plex Mono labels.
- Hero (option c, DQ unique): crafted three.js render of their own product, a Codex-style four-line braille display (black body, ivory keys, 4 × 32 eight-dot cells whose raised pins spell real Grade 1 braille, line selectors, Perkins keys, split spacebars, D-pad), _kit/home/newhaptics/render.js, real alpha; no stock photo used.
- Story: one continuous fine-line plan of a tactile pin array: four components tile the screen → a few valves feed air through a layered board → pins rise as braille ("newhaptics", "braille") and a tactile graph.
