# Serentrix, LLC — dossier (batch 2026-11f, HOME-ONLY build)

Slug: `serentrix` · built at `/serentrix/` · domain serentrix.com · parts and render in `_kit/home/serentrix/`

## Domain check
serentrix.com (WordPress/BeTheme, "© 2018 Serentrix") names the company and its founder Kumaril Bhargava on /the-team/;
NIH RePORTER lists SERENTRIX, LLC (Exton, PA 19341, UEI EFCFK1FD41P5) with Kumaril Bhargava as contact PI, "CEO and Chief
Scientific Officer", on all three awards; serentrix.com has an MX record. No newer site found. Not pathogens/toxins.

## The company
Non-opioid pain biotech developing modality-selective TRPV1 antagonists. Lead compound formerly PHE377, acquired from
PharmEste (NIH abstract 10916997); called SER114 on serentrix.com/science and in the burn-pain abstract, SER-014 in the
endometriosis abstract and on the pipeline table (Ser-014 neuropathic pain). It has no potent effect on the proton
activation mode and so no effect on body temperature; 35-subject Phase 1, no increase in body temperature (serentrix.com/science).
Sources: serentrix.com (/, /science, /pipeline, /the-team, /working-together); NIH RePORTER 10821060, 10916997, 11329917.

## Facts used on the page
- Tagline "Targeted small molecule therapy for innocuous pain relief without the worry of addiction" (home).
- TRPV1 science, first-generation failures (hyperthermia, raised heat pain threshold), SER114 modality selectivity (/science).
- Pipeline table (/pipeline, table.png): Ser-014 neuropathic pain (through Phase 1), Ser-114 dry eye/pain/inflammation,
  Ser-224 IBD, Ser-334 acute pancreatitis, Ser-444 vulvodynia (preclinical); Ser-777 uveitis in horses (animal health).
- NIGMS SBIR Phase I 1R43GM150295-01A1, topical burn pain, $340,685, notice 2024-07-23; TABA supplement
  3R43GM150295-01A1S1, $6,500, notice 2025-09-02 (https://reporter.nih.gov/project-details/11329917).
- NICHD STTR Phase I 1R41HD115418-01, SER-014 for endometriosis, $384,418, notice 2024-08-29; collaborators Dr. Michael
  Rogers (Boston Children's / Harvard Medical School), Dr. Megan Falsetta (URMC). Endometriosis ~10% of women.
- $731K = sum of the three awards. Burns 5–20% of post-WWII military casualties (abstract, not used on page).
- Team from /the-team/ (Bhargava's title per NIH: CEO; site: Founder).
- Address: 1 E Uwchlan Ave #301, Exton, PA 19341 (SAM.gov registration, via GovTribe listing).

## Leadership / outreach
- Lead: **Kumaril Bhargava, PhD, MBA, RPh**, Founder; CEO and Chief Scientific Officer (NIH RePORTER). Greeting: **Dear Dr. Bhargava**.
- Best published email: **Info@PharmaCatlyst.com** (serentrix.com/working-together, the only address published). NOTE: the
  domain pharmacatlyst.com does not resolve (NXDOMAIN); it looks like a typo of pharmacatalyst.com (which has Yahoo MX, owner
  unverified). No @serentrix.com address published anywhere found; NIH records carry no email.

## Activity
- 2025-09-02 — NIGMS SBIR TABA supplement 3R43GM150295-01A1S1, NIH RePORTER 11329917.
- 2024-08-29 — NICHD STTR award (10916997); 2024-07-23 — NIGMS SBIR award (10821060).

## Bad-site evidence
2018 BeTheme template: boxed fixed-width layout on grey, centred logo over a black bar, "Welcome To Serentrix", hexagon
stock-photo collage (lab-coat stock, DNA, man with arms out by a lake), home page has one sentence; pipeline is a pasted
Word-table PNG; "Contact" page is a single line with a misspelt, non-resolving email; footer "© 2018".
Screenshot: `_kit/sourcing/v2-sheets/11f-serentrix.jpg`.

## Design
- Palette from logo.png pixel counts (#88c038 lime, #2080c0 blue, black outline) and the site's black masthead: blue-black
  ink #091119, lime #8bc23c accent, logo blue #2282c4 for the mark, #1d6fa8 for accents on light, cool bone #f2f5f7.
- Type: Raleway 700 wordmark (their logotype is a rounded geometric sans) with a redrawn eye mark; Newsreader display; Raleway text.
- Hero (update 2c, crafted render of the real mechanism): TRPV1 from cryo-EM structure PDB 5IS0 (rat TRPV1 + capsazepine in a
  nanodisc, Gao et al. Nature 2016), space-filled by `_kit/home/serentrix/render.py`, subunits in the two logo blues, the
  antagonist in lime, baked with alpha to `serentrix/hero.webp`, slow Ken Burns breath.
- Story: TRPV1 in a nerve-ending membrane; three activation modes; first-generation blockers stop firing but raise body
  temperature; the selective compound spares the proton mode and temperature holds.
- Build-out pages: Science / Pipeline / Team open #/more/<item> (lib/buildout.js); Contact scrolls.
