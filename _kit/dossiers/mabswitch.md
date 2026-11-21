# Mabswitch, Inc. — mabswitch (home-only concept, batch 2026-11f)

- Site built at `/mabswitch/` (home only, `#/`), source regions in `_kit/home/mabswitch/`, assembled by `assemble.py` from `_kit/src/firelight.src.html` into `_kit/src/mabswitch.src.html`.
- Live site: https://mabswitch.com/ (WordPress, Hestia theme by ThemeIsle).

## Company (every fact from their own site, their press releases or NIH RePORTER)
- Mabswitch Inc is a privately held California biotechnology company, founded to develop and commercialize the invention of affinity switches for antibodies (mabswitch.com/company/).
- HQ: Van Nuys, California (NIH RePORTER organisation record, ZIP 91405-2213). Press releases are datelined Los Angeles, CA.
- Technology: UNASMA™ — Universal Allosteric-linker and Switch Module for Antibodies. An allosteric modulator domain is inserted between the two protein domains of the antibody binding site; a small molecule added or removed modulates the modulator, which changes the geometry of the antigen binding site by allosteric modulation. The antibody domains themselves are unchanged ("plug and play"), the switch works at physiological conditions (no change of pH or ion concentration), ON and OFF switches are both implemented, and all switch modules are fully human proteins (mabswitch.com/technology-2/).
- Pipeline: switchable affinity T-cell engagers (SaefTE™), switchable affinity ADCs (SaefADC), switchable affinity CAR T cells (SaefCAR™), plus bio-separation ligands (mabswitch.com/products/).
- Email published on their site: info (at) mabswitch.com. LinkedIn: https://ie.linkedin.com/company/mabswitch-inc

## NIH awards (NIH RePORTER, org "MABSWITCH, INC.", UEI MZ15MPUFBHN9)
- 1R43CA314526-01, FY2026, $399,992, start 2026-09-10 — "Affinity-tunable Antibody Drug Conjugate (ADC) against High-Grade Serous Ovarian Cancer" (SMART-ADC™). https://reporter.nih.gov/project-details/11405623
- 1R43CA310118-01, FY2026, $399,998, start 2026-09-18 — "Remote-Controlled PC-CAR T-Cell Therapy for Hard-to-Treat Solid Tumors", with Dr. Mark Yarmarkovich's group at NYU. https://reporter.nih.gov/project-details/11313251
- 1R43TR004551-01A1, FY2024, $338,997 — LentiSAFE™ ligands (NCATS).
- 1R43CA281387-01A1, FY2023, $399,958 — SaefCAR™ (NCI).
- Contact PI on all four: Onakunle, Yemi.

## People (mabswitch.com/company/, Amgen Golden Ticket release)
- Dr. Yemi Onakunle — Founding Director and CEO (also described as Co-founder in the BIO-Europe and Golden Ticket releases). 25+ years in biopharma; research and executive business development at Lonza, Diosynth Biotechnologies and Merck; most recently Chief Business Officer at Selexis SA, Geneva (70+ partnership and licensing deals, instrumental to the 2017 acquisition). Board member of VLP Biotech. B.Sc. biochemistry, University of Ibadan; Ph.D. microbiology, University of Kent at Canterbury; MBA, Imperial College Management School.
- Prof. Dr. Stefan Dübel — CTO. One of the inventors of antibody phage display, inventor of the antibody switch, Professor of Biotechnology at Braunschweig University, editor of the Handbook of Therapeutic Antibodies, co-founder of five biotech companies including Yumab. Ph.D. molecular biology, Heidelberg.
- Kai-Thomas Schneider — Head of Protein Engineering (named in the Amgen Golden Ticket release).
- No published pronouns for either leader, so the outreach greeting uses the full name (SPEC greeting rule) — but both are published as "Dr."/"Prof. Dr.", so "Dear Dr. Onakunle" is correct.

## Activity (latest)
- 2026-09-22: second NCI SBIR Phase I award, remote-controlled PC-CAR T-cell therapy, with NYU. https://mabswitch.com/mabswitch-receives-second-nci-sbir-phase-i-award-to-advance-programmable-therapeutics/
- 2026-09-10: NCI SBIR Phase I award for the SMART-ADC™ platform. https://mabswitch.com/mabswitch-receives-nci-sbir-award-to-advance-next-generation-smart-adc-platform/

## Bad-site evidence (mabswitch.com, seen 2026-11-21)
1. Off-the-shelf WordPress theme, credited in the footer of every page: "Hestia | Developed by ThemeIsle".
2. Hero is a garish red/blue molecular render with a pure-white display headline over it and a red block button; the body text under it is tiny and set full width.
3. Stretched display wordmark: the logo file `mabswitch_logo_3vector-463-40.png` is a 463×40 image whose letterforms are horizontally compressed.
4. Dead/placeholder routing: the Company menu item points at `https://mabswitch.com/493-2/`, a page whose entire content is one line ("Switchable Antibodies for Next-Generation Immunotherapy and Bio-Separation applications") plus three links; the Technology link in the nav is `technology-2`.
5. The news page still leads with event posts from 2024 above the two 2026 NCI awards, and the home page's video credit line ("*Video contains stock footage provided by Videvo, Patramansky Oleg, Freepik and Pressmaster, downloaded from videvo.net") is printed as body copy on the page.

## Design decisions
- Palette (BK, brand fidelity): sampled from their logo and live site. Logo red #e81e1e → `--red`/`--acc` (#c8141a) with `--accL` #ff3b35 for lit accents; favicon red #f80818; site body near-black #262626/#363537 → `--ink` #121215; the white half of the wordmark #f8f8f8 → `--bone` #f3f1ee; the switch toggle's silver → `--sil`. Gold (`--gold` #dea840) appears only as the antigen in the hero render and the story figure.
- Type: Archivo (display), Newsreader italic (accents), IBM Plex Sans (text) — a clean grotesque in place of their stretched display face.
- Hero (HOME_BRIEF update 2026-11-20, option c — science/mechanism subject; no own photography beyond a stock molecular render, and no Unsplash/Pexels photograph of an antibody–antigen complex exists): a crafted render of the real object. `_kit/home/mabswitch/ab.py` (adapted from gammabiotherapeutics/ab.py) builds a space-filling model atom by atom from the real crystal structure **PDB 1VFB** (RCSB, D1.3 antibody Fv in complex with hen egg-white lysozyme): light chain in grey/silver, heavy chain in the Mabswitch red, antigen in gold, Lambert + rim + specular shading with depth-based ambient occlusion, rendered at 3800px and downsampled to `hero.webp` (1356×1716) on a **transparent** ground, so the image ground is real alpha and no box edge exists at any width (DJ/DP).
  `field.js` measures the right edge of the H1 and lede and fits the model whole between that + 100px and the right content margin, centred at 68–72% of the width, never above native resolution, with a long radial ember of the brand red behind it and a very slow drift; no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). Checked at 1920×930, 1440×900 and 390.
- Story (DB/BY/BL): one continuous engraved scene, four steps — the binding site's two domains gripping the antigen → the UNASMA switch module inserted between them → a small-molecule trigger docking into it → the site opening and the target released. Every label sits in the empty margins so no leader crosses the figure (CY).
- Build-out pages: shared `_kit/lib/buildout.js` ("buildout" added to @libs); Technology / Pipeline / Team / News open #/more/<slug>, Contact scrolls.
- Nothing invented: every programme, award, date and biography above comes from the sources listed here.

## Images from their site (BJ/BR)
- UNUSED: `IgG-redgrey-smol.jpg` (the current hero's red/blue molecular render — a stock-style render the new hero replaces); `SwichTechnology_Web.001-1024x395.png` and `image-2.jpg` (low-resolution diagram and molecular model on the Technology page); news thumbnails (event banners, SBIR logos, Golden Ticket photos — low-res, third-party branding); `ONAKUNLE-Yemi-headshot-110421-nrw.jpg` and `Stefan_Dubel-Library-web.jpg` (portraits: the home-only format uses the refined text-only team rows, per BV/CI).
