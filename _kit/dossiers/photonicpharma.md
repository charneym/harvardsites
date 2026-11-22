# Photonic Pharma LLC (slug: photonicpharma) — HOME-ONLY build, batch 2026-11h

- Site: https://www.photonicpharma.com/ (Weebly, read 2026-11-22). Bad-site evidence: obsolete 2000s layout — a narrow centred column with a low-res black banner ("PIONEERING PRECISION IN EARLY-PHASE DRUG DISCOVERY"), a small 2017 video thumbnail, two indented plain-text paragraphs, a bordered plain-text news box; footer "Copyright © 2021"; the footer "Contact" link just points to the home page. Pages read: home, company (About), founders, instruments, news, patents, publications, strategic-collaborators.
- Domain check: company name and logo on every page; news through March 2026 on the site; the Disclosure of Conflict of Interest PDF hosted on the domain names Info@PhotonicPharma.com; NIH RePORTER lists PHOTONIC PHARMA, LLC, Minneapolis MN 55410, UEI GKPTJLFBHYX7, three SBIR awards (contact PI Jennifer Jewell Thomas). No newer site on another domain (the similarly named PhotonPharma Inc., Fort Collins, photonpharmaceuticals.com, is a different company).
- Type: biotech lab platform, FRET biosensors in living cells + high-throughput fluorescence-lifetime screening for small-molecule lead discovery (heart failure, Alzheimer's/Parkinson's, cancer). No pathogens, toxins or biodefence.
- HQ: Minneapolis, Minnesota (NIH record zip 55410).
- Lead: David D. Thomas, PhD — Founder and President (About the Founders; he/his in news items). Greeting: "Dear Dr. Thomas". Co-founder: Jennifer Jewell Thomas, MBA, VP Operations & Business Development (contact PI on all three SBIRs).
- Best published email: info@photonicpharma.com (in the company's own COI disclosure PDF, /uploads/5/2/1/9/52197021/disclosure_of_coi.2019.11.15.pdf). No other email published on the site.

## Activity (pre-screen OK)
- 2026-03-31 (site news + Instruments page): "after nearly twelve years of business", Photonic Pharma donated its FLT-PR and SUPR plate readers to the University of Minnesota (BTC). NOTE for the coordinator: this reads like a wind-down of operations.
- 2026-02-28 (site news): completed the subaward on its fourth NIH grant.
- NCI R01CA255513 (UMN, Photonic Pharma subaward) — NIH RePORTER FY2025 award, project end 2027-02-28.

## Facts used
- Home/About: three steps (biosensor engineering, FLT HTS on a proprietary plate reader developed with Fluorescence Innovations, Inc., secondary functional assays); 30-fold precision; HEK293 stable lines; feasibility established in published work.
- Founders: Thomas (William F. Dietrich Chair, UMN BMBB); FLT throughput ×100,000; company established 2014. Jennifer Jewell Thomas bio. Razvan L. Cornea named a scientific co-founder (news, 2017-03-28).
- Instruments: FLT-PR top-read 1536-well, dual laser 473/532 nm, dual detection channels; SUPR; now at Nils Hasselmo Hall, UMN.
- News/NIH: R43AG063675 ($593,889), R43AG069582 ($499,443), R01CA255513 subaward ($234,000/yr), R43HL162329 ($306,471); BMS collaboration and license 2016–2023; SLAS Discov 2023 (PMID 37307989) and ASN Neuro 2023 (PMID 37428128); 40 Best University Startups 2017 (NCET2); 2018 Tekne finalist.
- Patents: US 8,431,356; 10,281,476; 10,794,898; 11,099,177.

## Palette / type
Logo (1469149346.png): slate #323d47 bold-italic wordmark, orange #f05829 starburst, green #39b549 beam. Ink #0b0f13 (the render ground), accent orange (#c8431b fills, #ff8a5c on dark), green for the donor/fluorescence. Manrope (bold italic wordmark, light display), Roboto body (their site's font). Mark redrawn as SVG (mark.svg) from the starburst.

## Hero
Option (c), a crafted render of the firm's own mechanism: a living-cell FRET biosensor of the type the platform screens — SERCA with phospholamban (PDB 4KYT), a GFP donor (PDB 1EMA) on the actuator domain at the N-terminus and an mCherry acceptor (PDB 2H5Q) at the nucleotide-binding domain (~residue 509), rendered atom by atom by home/photonicpharma/render.py (space-filling, SSAO, depth fog, emissive bloom on the fluorophores, true alpha). Logo colours: slate pump, green donor, orange acceptor. Grepped the repo: no other concept uses these structures.

## Story
One continuous scene: living HEK293 cell with the sensor, magnified biosensor (bilayer, TM bundle, headpiece, donor/acceptor and FRET arc) → 1536-well plate scanned by the laser head → lifetime decay where hit wells light and the hit's decay separates.
