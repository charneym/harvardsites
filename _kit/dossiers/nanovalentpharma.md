# NanoValent Pharmaceuticals, Inc. (slug: nanovalentpharma) — HOME-ONLY build, batch 2026-11g

- Site: https://nanovalentpharma.com/ (WordPress, GoDaddy-hosted; read 2026-11-22). Bad-site evidence: stock blue "network of spheres" banner inside a boxed panel, with large right-aligned white headline over it and a two-line italic subhead set right-aligned over the busy image; a large cookie-consent card and a TrustedSite badge cover the first screen. Pages read: home, about-us, contact-us, news-press-releases, our-pipeline, platform-technology, scientific-advisory-board.
- Domain check: company name, team and Bozeman address on nanovalentpharma.com; the older domain nanovalent.com redirects to nanovalentpharma.com; MX for both domains is Microsoft 365 (nanovalentpharma-com.mail.protection.outlook.com); NIH RePORTER org "NANOVALENT PHARMACEUTICALS, INC.", Bozeman MT (R42CA281707, R44CA233128). No newer site.
- Type: biotech (antibody-targeted nanoparticle cancer therapeutics). No pathogens, toxins or biodefence.
- HQ: 351-B Evergreen Dr., Bozeman, MT 59715 (contact page). Phone +1 (406) 586 8420.
- Lead: Mark Lewis, Chief Executive Officer (About Us, "Our Executive Leadership"; bio uses "Mr. Lewis"). Greeting: "Dear Mr. Lewis".
- Best email: none published for Mr. Lewis or the company on the current site (contact form only). Most recent published company address: time@nanovalent.com (former CEO Timothy Enns, 2020 patent press release, https://nanovalent-pharmaceuticals.reportablenews.com/pr/nanovalent-pharmaceuticals-announces-the-publication-of-us-patent-targeted-polymerized-nanoparticles-for-cancer-treatment). Contact form: https://nanovalentpharma.com/contact-us/

## Activity (pre-screen OK)
- 2026-01-06: bioRxiv preprint (PubMed 41542564, PMC12803216), "CD99Targeted Irinotecan Containing Nanoparticles Show Twenty-Fold Greater Anti-Tumor Effect Than Free Irinotecan For Treatment of Ewing Sarcoma"; Upton and Nagy affiliated with NanoValent. https://pubmed.ncbi.nlm.nih.gov/41542564/
- 2026-01-21: pipeline page and chart updated ("Last updated on January 21, 2026").
- 2025-12: bioRxiv preprint "Targeted Nanoparticles: an Innovative Modality in the Treatment of Cancer", doi 10.64898/2025.12.01.691687 (cited on Platform Technology page).
- NIH: 5R42CA281707-03 (FY2025), "Tumor Antigen Targeted Nanoparticle Therapy for Glioblastoma (GBM)", PI Jon Owen Nagy, project end 2027-07-31.
- 2025-04-21: AACR (Chicago) GBM data (news page).

## Facts used
- Home: privately held; collaborates with US and international academic and industry partners; HPLN platform; nADC/TNS; lead NV103/NV105 approaching IND, CD99 tumour models (GBM, pancreatic, ovarian, Ewing sarcoma); BBB crossing; unmet need, ADC performance limited.
- Platform Technology: preferential delivery, lower systemic dose; greater on-target DAR, 1,000s of drug molecules per nanoparticle-conjugated antibody vs 2–8 per ADC antibody; polyvalency raises avidity; drug not chemically conjugated, no in situ decoupling; ~60,000 drug molecules per nADC/TNS; ~20 IgGs per nADC/TNS; mAbs, peptides, other agents; cross-linking and polymer content tune release; aqueous and cationic lipid cores; mechanism: released in the lysosome, diffuses to the nucleus, DNA damage.
- Our Science figure: targeted nanospheres (NV103) → endophagocytosis → endosome → lysosome → nuclear release and DNA damage, vs untargeted liposomes (story).
- Pipeline chart (2026-01-21) and text: NV103/NV105 CD99/irinotecan in Ewing sarcoma, GBM and CD99-expressing tumours (IND enabling); NV104 B7H3/irinotecan GBM, NV106 B7H3/temozolomide GBM, NV102 CD19/doxorubicin leukemia, nucleic-acid TNS (preclinical); ≥75% of common cancers improved survival in PDX models with NV103/NV105.
- About: Jon Nagy PhD (CSO/President, co-founder), Timothy Triche MD PhD (CMO, co-founder), Mark Lewis (CEO) bios.
- News page items with links (AACR 2024 abstract, Onco'Zine 2021, ADC Review 2018 SBIR, ADC Review 2017 CHLA licence). 2023-08 STTR award in GBM.

## Palette / type
Logo (Nanovalent-Logo-N.png): navy #123e89, sky #40ade8, mid-blue #2b79c0. Ink deep navy #07122a; accent #2b79c0 (#72c4f0 on dark). Figtree (their site font) for body, Spectral for display, Questrial for the wordmark (Lexend-like; not installed locally).

## Hero
Option (c): crafted molecular render (render.py: numpy sphere-splatting, depth-darkening AO, alpha) of NanoValent's own nADC/TNS, modelled on their schematics: phospholipid/cholesterol shell with polymerized PCDA domains, ~20 IgGs on PEG tethers, cut-away octant showing the bilayer and an irinotecan-filled aqueous core. Not a stock image; unique to this firm (DQ).

## Story
Fine-line cell: nanosphere docks on CD99 at the membrane → membrane folds round it, endosome pinches off → lysosome releases the drug, which reaches the nucleus; DNA strands break. Schematic, after their own figure.
