# CreoSalus — dossier (home-only build, batch 2026-11f, peptide CDMO / medtech)

Sources, fetched 2026-11-21: creosalus.com (home, /about, /divisions, /divisions/occam-design, /divisions/thorn-bioscience, /services,
/aseptic-manufacturing, /cgmp-contract-manufacturing, /research-development, /resources/news, /contact, /careers, /covid-19-update);
NIH RePORTER API (org CREOSALUS, INC.); MarketScreener insider profile "David Young Phelps" (aggregator).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11f-creosalus.jpg): WordPress/Beaver Builder; heavy outlined white display text with
  drop shadow over a washed-out lab photo, slanted white cut across the hero, stale "CreoSalus and Covid-19 - Click here for our update"
  button in the header on every page (2020 page), "Request Complementary Quote" typo (vs "Complimentary" elsewhere), "White Papers - Coming
  Soon!", newest news item April 2020, "Image already added" placeholder text on the Thorn BioScience page.
- Active: NIH NIBIB STTR Phase I 1R41EB038861-01, "Point of Care Differential Scanning Calorimetry", $314,359, start 2026-09-01
  (https://reporter.nih.gov/project-details/11316332); NIH NCI SBIR R44CA295197 (FY2024 $857,315, FY2025 $682,122, through 2028-08-31).
- Scope: peptide CDMO (personalized peptide cancer vaccines, peptide APIs, sterile injectables, veterinary peptide drugs), medical devices,
  DSC heart-attack diagnostic, brain-infusion catheter. A 2020 COVID page offers peptide-vaccine manufacturing in general terms; not used.
  No pathogen, toxin or biodefence science in the build.

## Company
- CreoSalus, Inc., 1044 East Chestnut Street, Louisville, KY 40204. Phone 502-515-1100 | 800-456-1403. Email contact@creosalus.com
  (contact page; the only published email). UEI CBL5M5DKH3K7.
- History (/about): Thorn BioScience co-founded 1998 by Barry W. Simon, DVM (peptide veterinary drugs: reproductive management,
  therapeutics, vaccines of domestic animals); ~70 investors plus David Phelps form the current ownership; May 2005 acquired ACT Holdings
  (Advanced ChemTech, founded 1983) and Thuramed Devices; June 2005 renamed CreoSalus ("to create good health"); Occam Design founded 2009
  as an outgrowth of the TETRAS synthesizer work.
- Mission: "Improving the quality of life for people and animals through technological innovations in peptides, pharmaceuticals, and
  medical devices."
- Since 2016: thousands of personalized peptide vaccines for multiple clinical trials, 100% patient order success rate (home).
- cGMP (/cgmp-contract-manufacturing): 6 in-house custom synthesizers (mg to g, up to 100 peptides simultaneously), 8 prep-LC/MS
  purification systems (mass-precision auto-collection), 4 lyophilizers (10 L each), 2 ISO 5 filling chambers; UPLC/MS, HPLC, KF, IR,
  GC, UV-VIS, elemental analysis; hundreds of API peptides monthly; lyophilized powder or aseptically filled cryovials; IND/INAD.
- Aseptic (/aseptic-manufacturing): fill batches up to 15,000 units; Chase Logeman line in ISO 5 enclosure, 2–100 mL vials; gamma
  terminal sterilization with Steris Isomedics (20 years); in-house WFI, depyrogenation, autoclave, QC and micro labs.
- Divisions: Thorn BioScience (drug developer, manufacturer, wholesaler); Occam Design (ISO certified device R&D and manufacturing;
  TETRAS, Cobra Introducer, Ouchless™ Needle, MB Device).
- NIH: 1R41EB038861 (contact PI Michael Wilson, CreoSalus dba Occam Design; PIs Thomas Roussel, Nichola Garbett, University of
  Louisville); R44CA295197 PBIC convection-enhanced delivery first-in-human study in recurrent GBM (PI Vasiliy Abramov, Vice President);
  R44NS084701 catheter for large-volume intraparenchymal brain therapies (2014–2024, PI Abramov).
- Lead: David Y. Phelps, President & CEO (MarketScreener insider profile; the company's /about names David Phelps with the investors as
  the foundation of its ownership and credits his medical-instrument expertise and IP). No pronouns published → "Dear David Phelps".
  Alternative technical contact: Michael Wilson (contact PI on the 2026 STTR; title not published).

## Brand
- Logo PNG (wp-content/uploads/2019/03/logo.png): navy #002860 serif wordmark, slate #405860 and cream #f0e0c8 rings; site rule blue
  ~#1d4fa0. Concept: ink #071c3a, bone #f6f0e4, accent on dark #e8cf9f (logo cream deepened), on light #1d4fa0. Type: Spectral (echoes
  the logo's classical serif) + Public Sans. Logo recoloured for the dark header (navy → bone, slate lightened), lossless.

## Build notes
- Hero (HOME_BRIEF update option c, crafted render of the real subject): space-filling model of a peptide chain, glucagon (29 residues),
  X-ray structure RCSB PDB 1GCN (https://www.rcsb.org/structure/1GCN), rendered offline by home/creosalus/peptide.py (sphere shading,
  depth AO, spec, rim; carbon ivory, nitrogen blue, oxygen sand) on real alpha → hero.webp 1404×1806. Caption says only "A peptide chain,
  space-filling model" (CreoSalus is not claimed to make glucagon). Centred ~71% width, slow float, no pointer response.
- Story: one engraved bench drawing, "sequence to needle": sequence outline → resin + chain filled residue by residue → prep-LC/MS
  chromatogram with the collected peak → vial with lyophilized cake under a needle. A faint ghost of the whole bench under every step.
- Sections: hero, mission + stats + three services, story, Services (6 rows), Divisions (5 rows), Research (3 NIH awards linking to
  RePORTER), History (1983–2026), CTA/contact. No team section (no team published on the site); no news (newest item 2020).
- Nav items Services / Divisions / Research / History open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
