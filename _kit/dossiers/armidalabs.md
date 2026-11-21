# Armida Labs, Inc. — dossier (batch 2026-11f, HOME-ONLY build)

Slug: `armidalabs` · built at `/armidalabs/` · domain armidalabs.com · parts and render in `_kit/home/armidalabs/`

## Pre-screen
- Bad site: armidalabs.com is a Squarespace "under construction" placeholder: the domain name in white over a stock aerial
  photo, the line "We're under construction. Please check back for an update soon.", and nothing else (no logo, no
  company description, no team, no contact). Screenshot: `_kit/sourcing/v2-sheets/11f-armidalabs.jpg`.
- Active: NIH NCI SBIR award 5R44CA277917-03, notice 2026-09-02, $1,088,000, "Targeting pancreatic cancer metastases with
  Targefrin" (https://reporter.nih.gov/project-details/11413836).
- Scope: oncology small-molecule/peptide therapeutic. No pathogens, toxins or biodefence.

## The company
Armida Labs, Inc. is a pharmaceutical startup founded about 2021 (EurekAlert, Oct 2023: "founded two years ago"; CB
Insights: 2021) by Maurizio Pellecchia and Carlo Baggio. It started in UC Riverside's EPIC Life Sciences Incubator
(Multidisciplinary Research Building, Riverside), "the first UCR faculty biopharmaceutical company in the City of
Riverside". NIH RePORTER now lists the organisation as ARMIDA LABS, INC., SAN DIEGO, CA (all four award records), so the
build shows San Diego, CA. No street address is published.

## People
- Maurizio Pellecchia, PhD — co-founder and president (2023 release: "founder and president"; 2025: "co-founder").
  Distinguished Professor of Biomedical Sciences, UCR School of Medicine; Daniel Hays Endowed Chair in Cancer Research;
  director, Center for Molecular and Translational Medicine. Main inventor of Targefrin, discovered in his lab.
  Email mp@armidalabs.com (published as the expert contact in the EurekAlert release of 2 Oct 2023).
- Carlo Baggio, PhD — co-founder, chief technology officer and director of chemical biology; contact PI on all NCI SBIR
  awards; leads the IND studies; formerly a senior scientist in the Pellecchia group. No published email found
  (searched site, NIH RePORTER, EurekAlert, UCR News, web).

## Science (story + technology sections)
- EphA2 (ephrin type-A receptor 2) is abundant on metastatic pancreatic cancers and other solid tumours (breast, lung,
  prostate, ovarian, renal: abstract); frequently overexpressed in pancreatic, prostate, lung, breast, ovarian and
  colorectal cancers (UCR 2025). It helps cancer cells migrate from the primary tumour into circulation and attach to
  other tissues. Tumour suppressor when bound to ephrin ligands; pro-oncogenic when overexpressed without enough ligand.
  Baggio: patients with high EphA2 levels tend to have a poor prognosis.
- Targefrin(-dimer): a synthetic dimeric peptide mimetic that imitates the ephrins; induces EphA2 dimerisation and its
  removal from the cell surface (dimer essential); causes EphA2 degradation; "the most effective agonistic agent reported
  to date" (abstract). Iterative design for affinity and specificity (UCR 2025).
- Phase I results (abstract): remarkably effective EphA2 degradation in several pancreatic cancer cell lines; suppressed
  pancreatic cancer cell migration; favourable pharmacokinetics and safety in vivo. Intended in combination with
  standard of care.
- Phase II: manufacturing and IND-enabling studies for an IND filing and subsequent phase I/II trials in pancreatic cancer.
- Targefrin is patented by UCR.

## Funding (NIH RePORTER, org ARMIDA LABS, INC.)
- 1R43CA277917-01A1, FY2023, $400,000, notice 2023-09-14 (Phase I)
- 3R43CA277917-01A1S1, FY2024, $187,500, notice 2024-09-03 (supplement)
- 2R44CA277917-02, FY2025, $1,162,000, notice 2025-09-10 (Phase II; UCR: "$2.25 million")
- 5R44CA277917-03, FY2026, $1,088,000, notice 2026-09-02

## News (all link out)
- Sep 2026 — NIH RePORTER 11413836
- 17 Sep 2025 — https://news.ucr.edu/articles/2025/09/17/ucr-startup-secures-grant-advance-cancer-therapy
- 2 Oct 2023 — https://www.eurekalert.org/news-releases/1003476
- 2018 — Gambini, ..., Baggio, ..., Pellecchia, ACS Chem Biol 13:2633, doi 10.1021/acschembio.8b00556 (PDB 6B9L)

## Brand
No logo or brand colours exist (placeholder page). Palette taken from the placeholder's only image: slate-grey braided
channels and ochre sediment → ink #0b0e13, receptor slate, accent ochre #d9a54a (#8a5f17 for accent text on bone).
Type: Spectral (display), IBM Plex Sans (text). Wordmark set in type ("Armida | LABS").

## Hero
Option (c) (no firm photography; DP: no sharp Unsplash/Pexels photo fit as a whole subject — NCI's pancreatic cancer
micrograph on Unsplash is low-resolution, and the sharp NCI SEMs are immune cells or edge-to-edge fields). A crafted
render of the real subject: a smooth Gaussian molecular surface of the EphA2 ligand-binding domain (chain A) with agonist
peptide 135E2 (chain E) in its ephrin-binding pocket, computed from the crystal structure PDB 6B9L
(https://www.rcsb.org/structure/6B9L; the founders' own EphA2 agonist series that led to Targefrin). Rendered offline by
`_kit/home/armidalabs/surf.py` (pure numpy; real alpha) → hero.webp 1261×1216. Caption on the page names the source.

## Story
Membrane with EphA2 receptors → Targefrin-dimers bridge pairs → pairs internalised and degraded (from the abstract and
UCR 2025 mechanism description).
