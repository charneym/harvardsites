# Modulation Therapeutics, Inc. (slug: modulationtherapeutics) — HOME-ONLY build, batch 2026-11f

- Site built: `/modulationtherapeutics/` (home only; nav items open build-out pages via `_kit/lib/buildout.js`)
- Source folder: `_kit/home/modulationtherapeutics/` (assemble.py → `_kit/src/modulationtherapeutics.src.html`; grade.py → hero.webp)
- Live site: https://www.modulationtherapeutics.com (Wix)
- Type: US clinical-stage oncology biotech (SPEC §2b in scope: small molecule, radiopharmaceutical, peptide; no pathogens, toxins or biodefence).

## Domain check (2026-11-21)
- modulationtherapeutics.com carries the company name on every page ("© 2023 Modulation Therapeutics"), the team, the pipeline and a
  Morgantown, WV address; its News page carries the December 2025 MTI-301 Phase 1 announcement, which cites the same NIH grant
  (R44CA272064) that NIH RePORTER lists for MODULATION THERAPEUTICS, INC., Morgantown, WV 26506 (UEI FPRRYGJGEHB1).
- Company emails on the site use the same domain (info@, Timh@). No newer site on another domain was found.

## HQ
- Physical: 781 Chestnut Ridge Road, Suite 1500, Morgantown, WV 26505. Mailing: 40 High Street, Post Box 651, Morgantown, WV 26505
  (their Contact page). Privately held Delaware corporation (Partnering page).

## Lead
- **Lori Hazlehurst, PhD** — Chief Executive Officer and co-founder (About Us page); Professor of Pharmaceutical Sciences, West Virginia
  University; Associate Center Director of Basic Science, WVU Cancer Institute (WVU HSC directory profile 43490, phone 304-293-3398).
  The site uses "she"; greeting **"Dear Dr. Hazlehurst"**.
- Registry's suggested lead, Karen E. Hayes, is contact PI on the R44CA272064 award and is listed on the site as Senior Scientist and
  Project Manager (Biology); the CEO is used as the lead instead.
- Email: no personal email for Dr. Hazlehurst is published (WVU directory hides addresses behind a contact form). Best published
  company addresses: **info@modulationtherapeutics.com** (Contact page) and **Timh@modulationtherapeutics.com** (Tim Hazlehurst, COO,
  named on the Partnering page as the contact for company inquiries).

## Activity (since 2025-05-18)
- December 2025: Phase 1 trial of MTI-301 (oral SCD1 inhibitor) activated in advanced solid tumours; NCT06911008, NCI-2025-01930,
  Mayo MC210103 (News page, https://www.modulationtherapeutics.com/news).
- 2025-08-22: NCI SBIR supplement 3R44CA272064-03S1, $217,685, "Modulation of cancer induced immune suppression via inhibition of SCD1"
  (https://reporter.nih.gov/project-details/11328609).
- NIH total: 24 awards, $11,871,398, FY2012–2025 (RePORTER org search "MODULATION THERAPEUTICS"; includes two NCI contracts).

## Bad-site evidence (live site, 2026-11-21; screenshot _kit/sourcing/v2-sheets/11f-modulationtherapeutics.jpg)
1. Wix template with red pill-shaped nav buttons and a stock blue DNA-helix banner behind a centred logo.
2. Home page is the banner plus three stock photo tiles (lab team, microscope, clasped hands in grass) and the footer; no sentence on
   what the company does beyond "TARGETING CANCER and LIVER DISEASE".
3. Page slugs left from the template: Pipeline lives at /pipeline-test and Partnering at /copy-of-our-science (titled "Investors").
4. The pipeline is a single 2023 JPEG ("pipeline-2023-v3.jpg") that still shows MTI-301 as preclinical although its Phase 1 opened in
   December 2025.
5. Stale footer "© 2023 Modulation Therapeutics"; news post dated "Feb 28" with a "December 2025" heading.

## Brand
- Logo MT_favicon_red.png: one red, #a41e22, on white; wordmark a geometric sans ("MODULATION" caps over "Therapeutics").
- Tokens: ink #0f0a0b (matched to the SEM's black ground), accent #a41e22 (buttons, on bone), #e86b6c for text on dark, bone #f5f1ef.
  Montserrat (wordmark, labels, UI) + Fraunces (display). The brand mark is their own logo, cut out of the PNG's alpha and used as a
  CSS mask (mark.png) in the header, the loader and the favicon.

## Hero
- Real photograph, Unsplash (licence allows commercial use): National Cancer Institute, pseudo-coloured scanning electron micrograph of
  an oral squamous cancer cell (white) being attacked by two cytotoxic T cells (red).
  https://unsplash.com/photos/white-and-red-flower-in-black-background-kWAPbD_zaEU (CDN photo-1581594355548-aab613ebdb69, 4023×3348).
  Tie-in: MTI-301's NCI award is "Modulation of cancer induced immune suppression", and the drug draws activated T cells into tumours;
  the T cells' red is the logo red.
- grade.py: black SEM ground → real alpha (un-premultiplied), greys warmed slightly, reds kept, long eased radial feather; 1800×1569.
  field.js measures the H1/lede end, keeps the subject ≥124px clear of it, centred near 70% width, below the nav, ≤ native size; slow
  Ken Burns breath, no pointer response. Phones: whole subject in a 46svh band above the copy.
- Caption on desktop: "Cytotoxic T cells (red) attacking a cancer cell · electron micrograph, NCI".

## Story
- One engraved tumour-cell cross-section, three steps (NCI SBIR R44CA272064 abstract): SCD1 enzymes make kinked monounsaturated
  fatty-acid chains and lipid droplets → MTI-301 hexagons dock on SCD1, chains and droplets fade, ER folds turn red (ER stress),
  calreticulin marks rise to the surface → three cytotoxic T cells arrive and engage the marked surface.

## Facts used (all sourced)
- About Us: founded 2011 as a Moffitt Cancer Center spinoff; moved to Morgantown 2016; "3 novel 1st in Class therapies targeting 9
  diseases"; team and board bios.
- Partnering: clinical stage; MTI-201 Orphan Drug + Fast Track, companion diagnostic imaging agent; MTI-101 cyclic peptide; Series A;
  Melanoma Research Alliance and Multiple Myeloma Research Foundation support; Delaware corporation.
- News: MTI-301 Phase 1 (NCT06911008); MTI-201 Phase I at Moffitt (225Ac-MTI-201, metastatic uveal melanoma); Feb 2023 Fast-Track SBIR
  up to $2.4M.
- RePORTER abstracts: 10546697 (SCD1 / immune mechanism, anti-PD1 synergy in TNBC and HER2 mouse models), 10693638 (NASH/NAFLD,
  pioglitazone combination), 9775135 / 10080460 (PEGylated MTI-101, dexamethasone synergy), 9576556 (Ac-225 for uveal melanoma).
