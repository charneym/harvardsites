# Cugene Inc. (slug: cugene) — HOME-ONLY build, batch 2026-11i

- Site: https://www.cugene.com/ (WordPress + Elementor, read 2026-11-23; pages Home with About/Pipeline anchors, Careers, News, Contact). Domain check: company name, logo, address and news on the site; ClinicalTrials.gov NCT07946302 names "Cugene Inc." as sponsor with contact admin@cugene.com and the same phone (781) 893-5800 as the site footer; the AbbVie release on PR Newswire links www.cugene.com. No newer site on another domain.
- Type: clinical-stage biotech; engineered cytokine immunotherapies (Treg-selective IL-2 CUG252 for autoimmune disease; TILKine and VitoKine TIL-targeting bispecific/masked cytokines for solid tumors). No pathogen, toxin or biodefence work.
- HQ: 130 Turner Street, Suite 702, Waltham, MA 02453 (site footer and Contact page). The site calls itself "Boston-based".
- Lead: Luke Li, M.D., Chief Executive Officer (AbbVie and Cugene release, PR Newswire, 16 May 2022: "Luke Li, M.D., Chief Executive Officer of Cugene Inc."). Secondary profiles also call him founder. Greeting: "Dear Dr. Li".
  - Note: the registry row names "Roger Mulholland PhD, Founder & CEO". That name comes from a hidden popup on cugene.com whose bio is template placeholder text (fictional companies "BlipblopDx" and "Airbubbles, Inc.", "backed by Chevrolet", "Neuropsychobiology from MIT"). It is not a real Cugene executive and is not used.
- Best published email: info@cugene.com (General Inquiries, Contact page); ir@cugene.com (investors). ClinicalTrials.gov lists admin@cugene.com as the study contact. No personal address for Dr. Li found (site, PR Newswire, ClinicalTrials.gov, web search).

## Activity (pre-screen OK)
- 2026-11-18: ClinicalTrials.gov NCT07946302 first posted: "A Phase I Dose-Escalation Study of CUG279 in Participants With Select Advanced or Metastatic Solid Tumors"; status Recruiting; actual start 2026-11-05; IND 179862. https://clinicaltrials.gov/study/NCT07946302
- 2026-01: updated pipeline chart on the site ("Updated-Pipeline-2026").

## Bad-site evidence
Sparse page: a centred thin grey serif headline over a faint generic blue stock swirl, an orange cookie bar across the bottom of the first screen, a hidden leadership popup containing placeholder "lorem" bio text (fictional companies, "backed by Chevrolet") under a fake name, a pipeline shown only as a flat PowerPoint-style image, and news that stops at April 2024 (the November 2026 Phase 1 start of CUG279 is not on the site).

## Facts used (cugene.com unless noted)
- "Pioneering innovation by harnessing the human immune system"; Boston-based clinical-stage biotechnology company developing next-generation medicines for cancer and autoimmune diseases.
- Innovation / Immunology / Oncology statements; CUG252 text (tolerance, Tregs, Teffs, B cell autoantibodies, IL-2 survival factor; Treg-selective long-acting IL-2 abolishing effector binding, full agonist activity on IL-2α; restores Treg function, suppresses autoantibodies).
- TILKine/VitoKine text; the four oncology claims (dual/tri mechanisms; precision immuno-engineering; complete tumor regressions in multiple cold and hot mouse models with efficacy superior to ICIs; aiming for first-line monotherapy for solid tumors).
- Mission sentence; the four Cugene Pillars; "One passion, many cures".
- Pipeline chart 2026: CUG252 Treg-selective IL-2 (autoimmune; bar through Phase 1); CUG279 VitoKine-2 and CUG288 TILKine-2 (solid tumors; IND); CUG185 TILKine-15, CUG115 VitoKine-15, CUG105 long-acting IL-15 (NMIBC, solid tumors), CUG172 innate immune target, CUG222 checkpoint inhibitor (lead optimization). CUG279 shown as Phase 1 recruiting from ClinicalTrials.gov.
- News: 2024-04 VitoKine-2 at AACR; 2023-04 CUG252 Phase 1b in mild-to-moderate SLE; 2022-05 AbbVie option ($48.5M upfront, PR Newswire); 2021-11 TILKine-2 at SITC; 2021-09 FDA clearance of the Phase 1a healthy-volunteer study.

## Palette / type
Cugene-Logo.svg: letters blue #3c72a3, N and dot orange #ff673e to #ff9533; live site navy #004e80, orange #fd5c34, Prata headings, Source Sans body. Mapping: ink #0d1b2a, accent on dark #ff7a4d (logo orange), on light #004e80 / #1d5f96. Type: Prata (display) and Source Sans 3 (text). Header and loader use their real SVG logo with the blue letters reversed to white (logo-w.svg).

## Hero
Option (c), a crafted render of Cugene's own molecule class: human IL-2 seated on IL-2Rα (CD25), the interaction CUG252 keeps, as a residue-level Gaussian molecular surface from the public crystal structure PDB 1Z92 (IL-2 chain A in logo orange, IL-2Rα chain B in logo blue). _kit/home/cugene/surf.py, env BB=0.55 PAD=1.6, args 0.35 2.4 0 2400. No other site uses 1Z92 (immunova's nanolipogel uses 1M47 only as small cargo).

## Story
One fine-line scene: a regulatory T cell with its IL-2 receptors, effector T cells and a B cell. Step 1: effectors multiply, autoantibodies appear, the Treg dims. Step 2: CUG252 (orange) drifts past the effectors and seats only on the Treg's receptors. Step 3: the Treg lights, extra effectors and antibodies recede.
