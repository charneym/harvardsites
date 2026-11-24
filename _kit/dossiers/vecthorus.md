# Vect-Horus (slug: vecthorus) — HOME-ONLY build, batch 2026-11k

- Site: https://www.vect-horus.com (SPIP/Bootstrap 3 site by Contingences, read 2026-11-24). Domain check: company name, logo, team, Marseille address and phone, legal notice ("Ce site est publié sous la responsabilité de Vect-Horus"), dpo@vect-horus.com; the 30 June 2026 GlobeNewswire release (Servier) gives contact@vect-horus.com. No newer site on another domain.
- Type: French drug-delivery biotech; VECTrans® molecular vectors (peptides and camelid single-domain antibodies) for transport across the blood–brain barrier and other biological barriers. Spin-off of NICN (CNRS / Aix-Marseille University), now INP. No pathogen, toxin or biodefence work.
- HQ: Faculté de la Timone, 27 boulevard Jean Moulin, 1er étage aile Verte, 13005 Marseille, France. Tel +33 (0)4 91 69 87 81 (Contact page). The legal notice still lists an older address (Faculté de Médecine Nord, 51 bd Pierre Dramard); the concept uses the Contact page.
- Lead: Alexandre Tokay, CEO and co-founder (vect-horus.com Company; quoted as CEO in the 2026 releases). No title "Dr." published → "Dear Mr. Tokay".
- Email: contact@vect-horus.com (GlobeNewswire release, 30 June 2026, Servier). Site publishes only dpo@vect-horus.com (data protection). BD contact in that release: Emmanuelle Bettendorf, BD & Alliance Management.

## Activity (pre-screen OK)
- 2026-06-30: research evaluation and exclusive licence option agreement with Servier (oligonucleotides, rare CNS diseases). GlobeNewswire + vect-horus.com News.
- 2026-05-26: bioRxiv preprint, "Harnessing TfR1 for Cross-Species Systemic Delivery of siRNAs to Deep Brain Regions Using Single-Domain Antibodies".
- 2026-03-10: Claudia Fromond appointed Director of R&D. 2026-02-03: OliX Pharmaceuticals MTA/evaluation (GlobeNewswire).
- 2025-09: first patient dosed with 203Pb-RMX-VH-PIB (RadioMedix, GBM and PDAC); Nature Biopharma Dealmakers article.

## Bad-site evidence
Dated 2010s SPIP/Bootstrap 3 template: hero is a stock photo of a red dart in a dartboard with the tagline in a translucent dark-red box; news carousel with clipped red headlines ("ounces collaboration and license option...", "Harnessing TfR1 f(...)"); small cramped uppercase nav; EU/Région Sud logos crowding the header; French cookie bar on an English site; science explained only by pasted PowerPoint slides (pipeline-web.png, slide_bbb.png, with a red spell-check squiggle under "ePhase 1"); stale company page (38 employees vs 45 in the 2026 release; pipeline slide still shows MDimune). Screenshot: _kit/sourcing/v2-sheets/11k-vecthorus.jpg.

## Facts used
vect-horus.com Technology, Partnering, Company, News and Contact pages; GlobeNewswire releases of 3 Feb 2026 and 30 Jun 2026 (founded 2005; 45 employees mostly in R&D; €42M in equity and subsidies). Partners: Servier (option, 2026), OliX (evaluation, 2026), Ionis (global licence, Jan 2024), Novo Nordisk (global licence, Oct 2023), RadioMedix (co-development and licence, theranostic in early clinical trials). Région Sud REACT-EU grant > €1M. Team names and titles verbatim from the Company page; no bios invented.

## Palette / type
Logo PNG (squelettes/img/logo_vecthorus.png): red #ee2e24, black. Live site: white ground, red accents, Raleway. Mapping: ink #121214, accent red #ee2e24 (#ff5a4c for small text on dark, #cf261d / #c8241b on bone), bone #f6f4f1. Raleway display, Source Sans 3 text, Oswald for the logo lockup. Logo mark redrawn as clean SVG (check stroke, two uprights, red dot) from the 198×100 PNG; wordmark set in Oswald.

## Hero
Option (c): crafted render of their product class: a camelid single-domain antibody (VHH), space-filling model of PDB 1MEL chain A (cAb-Lys3, RCSB), a representative VHH, not Vect-Horus' proprietary sequence. Framework in porcelain, the three CDR loops (CDR1 26–35, CDR2 50–58, CDR3 97–122) in the logo red. Rendered offline by _kit/home/vecthorus/vhh.py (args 1.2 0.4 0.75 2600), real alpha, 1166×1202 webp shown below native size. No other concept renders 1MEL (grep). Slow breathing drift, no pointer response.

## Story
One fine-line section through a brain capillary: far wall, blood with red cells, endothelial cells with nuclei, tight junctions and receptors, basement membrane with astrocyte end-feet, brain tissue with two neurons and an astrocyte. Step 1: a free drug reaches the wall and is turned back. Step 2: a vector carrying the drug binds a receptor and is taken up in a vesicle. Step 3: transcytosis; the complex leaves the base of the cell and its track draws to a neuron. Schematic, after the company's own BBB slide.

## Build
Base: _kit/home/akyso structure (firelight regions), all content, field, story and styling replaced. Nav: Technology / Partnering / Company / News + Contact (build-out pages via lib/buildout.js; Company opens the team section). nssfix inlined by assemble.py.
