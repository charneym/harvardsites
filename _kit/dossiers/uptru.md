# UPTru Inc. (slug: uptru) — HOME-ONLY build, batch 2026-11i

- Site: https://www.uptru.com/ (WordPress, read 2026-11-23; pages Home, About, Our Team, R&D, Patents, Contact). Domain check: the company name, founder quote, team, patents, trials and info@uptru.com are on the site, © 2026 UPTru; ClinicalTrials.gov lists "UpTru Inc." as lead sponsor of NCT07356349 with Mark Dubé as central contact; EvoClinical's release (22 Jan 2026) names UPTru and quotes Mark Dubé. No newer site on another domain.
- Type: healthtech / diagnostics; a patented point-of-care method based on oral fluorescein sodium that labels a patient's urine so specimens falsified by substitution are identified (fluorescence read with a fluorometer). Out-of-scope check: no pathogens, toxins or biodefence.
- HQ: Ontario, Canada (site says Canada; NOHFC support implies Northern Ontario; the Phase I site was Medicor Research, Greater Sudbury, and the trial contact phone 705-522-2263 is a Sudbury number, so likely Greater Sudbury, but not stated as HQ). The page says "Ontario, Canada" only.
- Lead: Mark Dubé, MD, CCFP(EM,PC,AM), FCFP, CISAM, President and Founder. Greeting: "Dear Dr. Dubé".
- Best published email: info@uptru.com (Contact page). ClinicalTrials.gov lists "mark.dube@upreu.com" for the Phase III contact, which looks like a typo of uptru.com and is unverified.

## Activity (pre-screen OK)
- ClinicalTrials.gov NCT07356349, ATTESTED, Phase III, randomised, triple-masked, placebo-controlled; first posted 2026-01-21, last update 2026-01-23; 114 participants (estimated); 100 mg fluorescein sodium in Gatorade, mid-stream urine 15 minutes later, Qubit fluorometer. https://clinicaltrials.gov/study/NCT07356349
- EIN Presswire, 22 Jan 2026: EvoClinical selected as statistical and data management partner for UPTru's Phase III trial; thanks NOHFC. https://www.einpresswire.com/article/885594047/evoclinical-selected-as-statistical-partner-for-groundbreaking-urine-drug-testing-authentication-trial
- Site home: ATTESTED "set to begin enrollment in December 2025", Health Canada approved; thanks NOHFC.
- Phase I NCT04071080, completed 2019, 40 participants, Greater Sudbury; published Clinical Medicine and Diagnostics 2020, 10(2):27-37.
- Patents: Canadian Patent No. 2,998,031; US 2024/0053347 A1 (15 Feb 2024), "Methods for labeling urine in a subject with fluorophores".

## Bad-site evidence
Hero is a stock cracked-concrete/marble texture with a large raster logo pasted in the middle, a small centred "Learn More" button and a generic "Advancing Innovation in Healthcare" line; amateur WordPress template layout, no product imagery, a stock hiking photo beside the founder quote.

## Build
- Palette: uptru.com CSS and logo: navy #0b2a60 / #0a1460, gold #cfb017. Ink #0a1234, gold accent #e3c94a on dark, navy on the cool white ground. Fonts: Montserrat (their headings) and Noto Sans (their body).
- Logo: their own 2229px PNG (uptru.com/wp-content/uploads/2020/12/UPTru-Logo-Home.png), letters U and Tru recoloured to white for the navy ground, P and the glass mark untouched; downscaled, never upscaled.
- Hero: crafted render (vial.py, pure numpy ray tracing) of a capped glass specimen vial whose sample glows with fluorescein under a blue excitation light, on a dark glossy surface; two layers (absorption + additive light) with real alpha, no box.
- Story: fine-line bench scene: drink, two capped vials, fluorometer light source. Swap / Mark / Confirm.
