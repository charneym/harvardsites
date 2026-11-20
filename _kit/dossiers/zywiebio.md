# Zywie LLC (Zywie Bio) — dossier (batch 2026-11e, HOME-ONLY build)

Slug: `zywiebio` · built at `/zywiebio/` · domain zywiebio.com · parts and render in `_kit/home/zywiebio/`

## The company
Zywie LLC ("Zywie Bio, LLC." on the logo) is a therapeutics company developing ambroxol and stabilised ambroxol analogs
that stimulate TFEB and the autophagy–lysosomal clearance of misfolded proteins (amyloid beta, tau). It moved its strategy
from Gaucher disease to Alzheimer's about two years before the site text was written. Sources: zywiebio.com home,
/drug-development/drug-development-overview, /drug-development/clinical-status, /about-us/*, /contact-us.

HQ: Reno, NV (NIH RePORTER org record "ZYWIE LLC, RENO, NV"; the contact page's mailing address 2205 Trakehner Lane,
Reno, Nevada 89521 is inside an HTML comment, so the build shows only "Reno, Nevada"). The live footer still shows an older
Princeton, NJ address (155 Lambert Drive). Phone 609.924.2575 (visible on site).
Email: info@zywiebio.com (also bd@ and jobs@) appears only in the contact page source inside an HTML comment; used for the CTA.

## Activity
- 2025-09-16: NIH NIA SBIR Phase I 1R43AG097283-01, $496,600, "Developing Novel Ambroxol Analogs as Disease-Modifying
  Therapies for Alzheimer's Disease and Related Dementias", contact PI Robert Johnston, project end 2027-04-30
  (https://reporter.nih.gov/project-details/11256934). Abstract: analogs ZW-002 and ZW-010 with improved metabolic
  stability; Aim 1 non-GLP scale-up, Aim 2 short-term tox in mice, Aim 3 efficacy in 3xTg AD model.

## Facts used
- Ambroxol: crosses the BBB, 20-year safety history, used in pregnancy (clinical-status page); autophagy-lysosomal effects,
  suppresses inflammation; chaperone in Gaucher and Parkinson's (overview page).
- Patents filed on deuterated and halogenated forms of ambroxol (home page).
- Clinical: Phase 1/2 in Prof. Schapira's lab, London (Mullin 2020, JAMA Neurology, doi 10.1001/jamaneurol.2019.4611);
  Pasternak PDD Phase II NCT02914366 (start 2015-11); ongoing studies in Canada and Norway.
- Team and SAB from /about-us/management and /scientific-advisory-board.

## Visuals
- Palette: logo.png green #00682e, swoosh grey #8f9194; header rule gold #ebbc54 (sampled from the live site); ink #0a1510.
- Hero: crafted render (HOME_BRIEF 2c) of ambroxol, PubChem CID 2132 3D conformer (ambroxol.sdf), numpy ray tracer render.py.
  No stock photography used.
- Story: engraved neuron; aggregates build up → TFEB into nucleus + lysosomes multiply → lysosomes clear aggregates.

## Bad-site evidence
2000s fixed-width WordPress page: pipe-separated tiny nav under a script logo, cramped tiny body text beside an iStock photo,
broken image placeholder ("SWOOSHsilo"), contact details commented out, conflicting Princeton/Reno addresses.
