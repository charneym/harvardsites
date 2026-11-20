# Smart Breast Corporation (SmartBreast™) — dossier (batch 2026-11e, HOME-ONLY build)

Slug: `smartbreast` · built at `/smartbreast/` · domain smartbreast.com · parts and grading script in `_kit/home/smartbreast/`

## The company
Smart Breast Corporation (SmartBreast™; NIH record "SMART BREAST CORPORATION D/B/A SMART BREAST CORP"), founded May 2019
"to become the first and only dense breast management company" (smartbreast.com/about-us). Vision: "to empower women
with dense breasts to defeat breast cancer". Products: Eve Clear Scan™ molecular breast imaging (MBI) systems; the
Eve Suite™ (AI software, CDS software and dense-breast scanners: stated as their mission). Logo: Eve, an owl in flight.
HQ: 14930 Ventura Blvd, Ste 325, Sherman Oaks, CA 91403 · +1-724-584-3266 · info@smartbreast.com (contact-us).
Also on site: sales@, customersupport@, patientsupport@smartbreast.com. 2020–21 releases were datelined Pittsburgh.

## Facts used on the page (sources)
- 94% of all cancers in dense breasts detected by SmartBreast MBI vs 30% for mammograms (smartbreast.com home claim).
- 217 MBI installation sites worldwide, majority in North America and Asia-Pacific (smartbreast.com/locations).
- MBI mechanism, Tc-99m sestamibi (mitochondria, neoangiogenesis), CZT detectors, density-independent functional
  imaging (smartbreast.com/mbi-technology); procedure, ~1/3 of mammography force (smartbreast.com/comfort).
- NCI SBIR Phase II 1R44CA315543-01, "Commercial-Ready Molecular Breast Imaging (MBI) for Biopsy Guidance",
  $945,687, notice 2026-09-17, project 2026-09-18 to 2028-08-31, contact PI James W Hugg (CEO/President)
  https://reporter.nih.gov/project-details/11410559. Aims, Phase I VASH results and "why now" figures from its summary.
- ClinicalTrials.gov NCT07114679 "Molecular Breast Imaging (MBI)-Guided Biopsy": sponsor Smart Breast Corp., UT
  Southwestern Medical Center, Dallas, 250 participants, not yet recruiting, start 2027-06.
- 2020-12-29 PR Newswire: acquired Dilon 6800, GammaLoc® MBI-guided biopsy, VASH collimator, MBT software; D6800
  FDA-cleared, also for MBI-guided biopsy, 176 sites in >10 countries.
- 2021-02-08: acquired GE Healthcare Discovery NM750b MBI assets (rebranded EVE CLEAR SCAN e750).
- 2021-02-09: manufacturing partnership with FoxSemicon Integrated Technologies (FITI); D6800 rebranded e680.
- Team and Medical Advisory Board: smartbreast.com/about-us (Chi-Hua Tung is commented out of the live page; omitted).

## Leadership / outreach
- Lead: **James W. Hugg, PhD**, Co-founder & Partner, CEO & President, Board member (about-us; NIH contact PI).
  Greeting: **Dear Dr. Hugg**.
- Best published email: **james.hugg@smartbreast.com** (media contact in the Dec 2020 and Feb 2021 PR Newswire
  releases). General: info@smartbreast.com.

## Activity
- 2026-09-17 — NCI SBIR Phase II award $945,687 (NIH RePORTER 11410559).
- ClinicalTrials.gov NCT07114679 (MBI-guided biopsy, planned 2027).

## Bad-site evidence
- Dated WordPress layout: purple header bar with spaced-caps wordmark, thin caps nav, all-caps centred claim above two raw
  scan images (screenshot `_kit/sourcing/v2-sheets/11e-smartbreast.jpg`).
- "Sales and Service": "We are currently working on this page. Get back to this page again for updates."
- Locations: "A list of MBI sites will be shared here soon."
- The 2026 NCI Phase II award does not appear anywhere on the site; generic stock photography of smiling women.

## Design
- Palette from SmartBreastLogo.webp (pixel count: #60356f dominant, #ffffff) and site CSS (#8c4682, #d7a3ca):
  logo violet #60356f → --acc (solid buttons), lilac #d7a3ca → --accL (accent text on dark), plum #8c4682 → --rd (on
  bone), aubergine ink #120a16, bone #f6f2f4.
- Type: Jost (wide-tracked wordmark like their logo, body), Cormorant Garamond display.
- Brand: the Eve owl mark extracted from their logo-light-medium.jpg as a mask, beside a Jost "SMARTBREAST™" wordmark.
- Hero (HOME_BRIEF update 2a, the firm's own imagery): their Eve Clear Scan™ MBI image (smartbreast.com home banner
  HOME-BANNER-1-WITH-LABEL.jpg, left panel), colour map inverted to counts and re-graded to the logo violets by
  `_kit/home/smartbreast/grade.py`, caption removed, mirrored so the chest wall anchors the right edge, transparent
  ground (no seams). Slow Ken Burns breath, soft lilac glow over the lesion. Credit line "Eve Clear Scan™ MBI image".
- Story: one continuous side elevation of an MBI exam (tracer → gentle immobilisation → photons to detectors → uptake
  profile with the cancer called out).
- Build-out pages: nav Technology / Products / Team / News open #/more/<item> (lib/buildout.js); Contact scrolls.
