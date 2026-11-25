# Gibson Oncology flagship: build notes (Nov 2026)

Source of truth for facts: `materials.md` (deck + letters), gibsononcology.com, Purdue release 25 Feb 2026.
Build: `_kit/home/gibsononcology/assemble.py` → `_kit/src/gibsononcology.src.html` → `node _kit/build.js … gibsononcology/index.html`.
Full site on the template's own router (no build-out module): #/ science pipeline partners team investors news contact.
Every sub-page head sits over the ghosted hero render (data-field), reached through the template's route wipe (DT/DK).

## Palette (BK)
Logo GO-logo-jpg.png: ribbon teal #62b4ca → --accL; ribbon mint #9edad0 → --rdL; wordmark charcoal → bone on ink.
Site teal #0e8f85 → --acc (solid buttons). Ink #07141a.

## Logos
- Gibson: `img/logo-gibson.png`, their GO-logo-jpg.png with the wordmark recoloured to bone, ribbon colours kept, tagline line removed (header + loader).
- NINDS: ninds.nih.gov header PNG (1837px), recoloured to one tone with the NIH letters knocked out.
- Duke: tischbraintumorcenter.duke.edu `tisch-logo-blue.svg`, fill → one tone.
- Children's National: childrensnational.org `shared-horizontal-logo.svg`, fill → one tone.
- Mayo Clinic: mayoclinic.org blocks automated access (403); the shields + MAYO CLINIC wordmark paths were taken from Mayo's own
  official SVG on college.mayo.edu (MCCMS_Logo_Black_New.svg), with the "College of Medicine and Science" line removed and the
  wordmark centred on the shields.

## Photos (all from gibsononcology.com wp-content/uploads, graded offline: gradient map ink→teal→bone, 20% original kept; never upscaled, max 2000px)
Used: brain-scan visualisation (home band), multi-well DNA plate (designations), microscope vertical (contact), studying-virus lab
(science band), pipetting tray (pipeline), clinical-lab researchers (team band), woman holding research (investors), the
dual-action mechanism figure, LMP744 and LMP400 structures, all 7 leadership headshots, 9 collaborator headshots (Cushman is in leadership).
Graded but not placed (removed from img/): MRI close-up, microscope lab, chemical lab, microbiologist, scientist, 333025492 lab photo, scans (near-duplicates of the lab photos used, or too small at 750–800px for a band). Gel electrophoresis is used on Science.
Not used: abstract particles render and colourful DNA helix (stock filler, the hero already renders DNA); FDA/NIH/Duke/Purdue logo
tiles (low-res, replaced by official files or type); GBM MRI image002 (alarming, DT); BBB clipart (low quality); old pipeline PNGs
(superseded by the coded chart); brain-on-body render (stock).

## Not on the site, deliberately
Teddy Solomon's personal email (deck: use company contact). Burn-rate figures (deck gives none). Any animal result without the preclinical/PDX label.

## v2 (Nov 25, client refinements via coordinator)
Type: one restrained scale (at 1440: H1 63px, section heads 43px, big numbers 56px; TOPO 1 / cMYC display 95px, down from 152).
Re-crawled every page in the WP REST page list and sitemap: home, brain-cancer, lead-program-glioblastoma, additional-clinical-programs,
our-pipeline (an image, oncology.png, read by eye), publications, news-and-events, news-and-events-2 ("Breaking news"),
leadership-team, board-of-directors, scientific-collaborators, contact-us.

Added: six-programme pipeline (DC-101 to DC-106) grouped as on their chart; Publications page (56 unique papers from their list,
in their 9 headings merged to 8, journal read from each link); Breaking news (3 items); all 13 dated news items (v1 missed the
Oct 2018 NCI canine lymphoma study and the Sep 2018 Linus Oncology acquisition); a dated Milestones line (their news + deck);
the seven-requirement brain-cancer rationale; class mechanisms (HRD/SLFN11, PARP synergy, efflux transporters, activity after 7–8
failed drugs, PTEN-deficient tumors, LMP400 + niraparib); composition-of-matter patents and Aza oral patents; phone 305-674-7072;
board membership for all seven leaders.

### Site vs deck / internal conflicts (deck wins where newer; nothing here is shown wrongly on the site)
- DC-101 footnote "NIH initiating Phase II" → deck: Phase 2 started June 2026. Site shows "under way since June 2026".
- DC-103 LMP400 indication "Grade 3, Grade 4 astrocytoma", arrow to end of Phase 1 → deck adds Duke's planned Phase 2 in resistant
  grade 3 astrocytomas ($15M SPORE filed). Shown as "Phase 2 planned"; indication kept as their chart has it.
- DC-102 footnote "response rate of over 30 percent, with two partial responses" vs Purdue release (Feb 2026): "two patients'
  tumors shrank by at least 30%; 35% stable up to 18 months". Site uses the Purdue wording (a 30% response rate is not supported).
- DC-105 (LMP776) carries the same footnote as DC-104 ("PTEN Endometrial PDX is now done"), almost certainly a copy error; shown on DC-104 only.
- Lead Program page: GBM market "$900 million in 2024, several billion by 2031" vs deck "$3.2B (2025) → $6.9B (2035)". Deck used.
- Lead Program page: median survival "14–20 months" with surgery, radiation and TMZ; deck: 6–10 months in recurrent disease. Both
  are different measures; only the deck figure is shown.
- Azas: May 2020 release says 56 compounds; deck says 700+. Deck used; the 2020 news item keeps its own 56.
- Publications page lists "p53 and Pten control neural and glioma stem/progenitor cell renewal…" as Zheng 2014 and Zheng 2008;
  the linked paper (Nature) is 2008. Shown once, 2008.
- Board of Directors page (orphan page): "Randall B. Jackson" and "non-opioid … chronic pain" copy are errors on their site; not used.
- Contact Us page gives "Miami Beach, FL 33109"; footer everywhere says "Miami, FL 33109". Footer form used.
