# Biolight Engineering (slug: biolightengineering) — HOME-ONLY build, 2026-11-20

- Site: https://biolightengineering.com/ — the whole homepage is the company's "Financial Conflict of Interest (FCOI) Policy" (effective July 20, 2026): a navy header band, a serif policy text with an 18-item table of contents, and a .docx download. Screenshot: _kit/sourcing/v2-sheets/11e-biolightengineering.jpg.
- Type: US medtech startup (SPEC §2c). Ophthalmic imaging (pediatric fundus camera for retinopathy of prematurity). No pathogens, toxins or biodefence.
- HQ: Biolight Engineering LLC, 506 Wedgewood Ct, Hinsdale, IL 60521 (published in the FCOI policy, section 18; same address on SBIR records).

## Bad-site evidence
1. The homepage is only an FCOI compliance policy (42 CFR Part 50 Subpart F), posted for NIH public-accessibility rules.
2. No product (PedCam is never named), no technology, team, news or company description anywhere on the site.
3. No navigation beyond in-page anchors to the policy's 18 sections; the only contact is the policy's point of contact.

## Activity (since 2025-05-18)
- 2026-07-07 (notice; project 2026-07-01 to 2028-05-31): NEI Direct-to-Phase II SBIR 1R44EY039153-01, $906,443, "A Low-Cost, Ultra-Widefield, Nonmydriatic Retinal Imager for Pediatric Eye Care and ROP Screening" — https://reporter.nih.gov/project-details/11405867
- 2026-07-20: FCOI policy effective (the current homepage).
- Earlier NEI awards (RePORTER): 1R43EY026265-01 (2016, $205,632, holographic waveguide low-vision eyewear), 1R43EY028786-01A1 (2018, $233,488), 2R44EY028786-02 (2020, $583,243), 5R44EY028786-03 (2021, $583,244) — portable ultra-widefield fundus camera for ROP. Total NEI SBIR $2,512,050 since 2016 (page stat "$2.5M since 2016").

## People
- Taeyun (Tae Yun / Taeyoon) Son, PhD — contact PI on all four PedCam awards (RePORTER). Research Assistant Professor, Richard and Loan Hill Department of Biomedical Engineering, UIC (bme.uic.edu/profiles/son-tae-yun; tyson08@uic.edu). Title at Biolight not published; UIC 2020 news calls Biolight "a startup company" partner, Son lead PI. Greeting "Dear Dr. Son" (PhD).
- Jia Ren, CPA — Chief Financial Officer (FCOI policy, section 18).
- Xincheng Yao, PhD — PI on the award; Hill Professor, UIC Biomedical Engineering; co-inventor of US 11,154,193.
- R. V. Paul Chan, MD — PI on the 2020+ awards; UIC Ophthalmology & Visual Sciences (UIC 2020 news).
- Email: BiolightEng@gmail.com (published in the FCOI policy as the point-of-contact address; Cloudflare-obfuscated on the page).

## Science (used on the page; from the 1R44EY039153-01 abstract unless noted)
- PedCam: ultra-widefield (200°), nonmydriatic pediatric fundus camera using patented trans-pars-planar illumination; target cost <$25,000.
- Problem: existing pediatric fundus cameras: field ≤130°, cost >$70,000, need pharmacologic dilation, poor adaptability to newborn anatomy. Premature infants ≈10% of newborns; ROP a leading cause of childhood blindness; ROP often involves the peripheral retina.
- Preliminary: handheld and smartphone-based prototypes, full retinal coverage, high image fidelity.
- Aims: (1) five MVP systems with pupil-matching control, adjustable illumination, autofocus, HDR; (2) clinical validation at UIC, UChicago, CHLA: >360 image sets, >180 patients, vs RetCam and indirect ophthalmoscopy; (3) safety testing + FDA 510(k) documentation (success criterion: 510(k) submission). In parallel: deep learning classification of ROP severity and plus disease, toward telemedicine.
- US 11,154,193 "Fundus imaging apparatus with trans-pars-planar illumination", issued 2021-10-26, assignee Biolight Engineering LLC, inventors Devrim Toslak, Xincheng Yao — light delivered through the pars plana (patents.justia.com/patent/11154193).
- Toslak, Chau, Erol, Liu, Chan, Son, Yao, "Trans-pars-planar illumination enables 200° ultra-wide field pediatric fundus photography for easy examination of the retina," arXiv:1910.07002 (2019).

## Brand
- No logo published. Colours sampled from the live site's CSS: --accent #1f4e79 → --acc; --ink #1a2332 deepened to #0c121b for the dark ground; --bg-soft #f5f7fa → bone; --rule #d9dee6 → bone3; --muted #5a6577 → stoneD; --accL #82aad3 is a light tint of #1f4e79 for accents on dark.
- Type: their headings are serif (Georgia) over a sans body → Source Serif 4 + IBM Plex Sans. Text wordmark "BIOLIGHT ENGINEERING" with a small lens/pupil mark.

## Hero
- No Unsplash/Pexels fundus photograph exists (searched "retina", "fundus"; Unsplash results were iris close-ups, and Edge Eye Labs already uses a child's-eye photo, CX). So HOME_BRIEF update 2c: a crafted render of the real subject, the image PedCam captures — a 200° ultra-widefield colour fundus of an infant's right eye (disc nasal, macula temporal, arcades to the periphery, choroidal pattern to the vortex veins). home/biolightengineering/fundus.py (seeded) → hero.webp with a feathered transparent rim (DJ), graded copper and low. Right of the headline with an ink wash on the text side (DI); slow breath, no pointer motion (CZ). Captioned "A rendering … Illustration, not patient data."
- Story: one engraved eye cross-section facing a camera: shared pupil and ≤130° cone → light guides at the pars plana fill the eye → full pupil, 200° field → peripheral retina and the captured widefield image. "SCHEMATIC · NOT TO SCALE".
