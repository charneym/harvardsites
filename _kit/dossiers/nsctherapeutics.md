# NSC-Therapeutics GmbH (slug: nsctherapeutics) — HOME-ONLY build, batch 2026-11i

- Site: https://www.nsctherapeutics.com/ (WordPress site-builder template, read 2026-11-23; pages About Us, Scientific Advisory Board, Contact, Imprint, Privacy Policy). Domain check: the company name, team, lead compound and contact details are on the site; the Imprint names NSC-Therapeutics GmbH, Company Register FN 482035 a (Landesgericht für ZRS Graz), VAT ATU72826748, responsible person Manfred Windisch; the domain has live MX (Microsoft 365, nsctherapeutics-com.mail.protection.outlook.com); ClinicalTrials.gov lists NSC-Therapeutics as lead sponsor of NCT06995573 with Windisch as study chair. No newer site on another domain.
- Type: clinical-stage biotech; NSC001 (AF267B), a rigid, orthosteric, highly specific muscarinic M1 receptor agonist for Alzheimer's disease and related disorders, licensed from Life Sciences Research Israel. Out-of-scope check: no pathogens, toxins or biodefence.
- HQ: Willersdorferstraße 7, 8061 St. Radegund (near Graz), Austria. Telephone +43 664 888 699 05.
- Lead: Manfred Windisch, PhD, CEO and President. Greeting: "Dear Dr. Windisch".
- Best published email: office@nsctherapeutics.com (Contact and Imprint pages). No personal address for Dr. Windisch was found (site, ClinicalTrials.gov, which lists only NeuroScios study contacts, web search).

## Activity (pre-screen OK)
- ClinicalTrials.gov NCT06995573, "A Study to Assess Safety and Tolerability and to Explore Efficacy of NSC001 in Mild to Moderate Alzheimer's Disease", Phase 1/2, first posted 2025-05-29, started 2025-08-25, recruiting, last update 2026-04-17; 90 patients (estimated), 10 sites in Austria and Germany; arms NSC001 40 mg QD, NSC001 + trospium 20 mg, placebo. https://clinicaltrials.gov/study/NCT06995573
- Site: $5 million from the Alzheimer's Drug Discovery Foundation in 2024 for Phase 2 proof of concept (ADDF portfolio: https://alzdiscovery.org/research-and-grants/portfolio-details/22428888).

## Bad-site evidence
Dated grey-teal site-builder template: a blurry low-resolution logo (hexagon with a neuron) baked into a header background image, a heading reading "NSC - Therapeutics GmBH" (wrong capitalisation), a framed generic neon stock neuron image, long grey text blocks, typos ("differnt", "tolarated", "BIOAVAILIBILITY", "T hese"), a truncated "Scientific Advisory ..." nav item, German-only cookie and translator banners on an English site, copyright 2024.

## Facts used (nsctherapeutics.com unless noted)
- About Us: semi-virtual company in St. Radegund/Graz; NSC001 (AF267B) rigid, orthosteric, highly specific M1 agonist, licensed from LSRI; close to the CRO NeuroScios; led by Manfred Windisch (40 years in AD research), supported by Abraham Fisher (inventor of NSC001); preclinical: cognitive deficits, beta-amyloid, tau, alpha-synuclein; PrPc shedding; TREM2; Phase 1 safety; ADDF $5M in 2024. "The Leading Company In Development Of Muscarinic Agonists"; "Fast cognitive improvement and long term disease modification"; alpha-secretase, GSK3-beta, TREM-2; high M1 selectivity, oral bioavailability, BBB penetration, linear PK.
- Mechanism of Action: early basal forebrain cholinergic degeneration, ACh deficit, post-synaptic M1 preserved; M1 activation effects (list). Clinical Studies: tested in 5 Phase 1 trials, well tolerated.
- Team bios and SAB (Nitsch, Giacobini, Cummings, Schmitz) shortened, nothing added. (Their site spells "Chambers-Gundy"; the UNLV centre is the Chambers-Grundy Center, used here.)

## Palette / type
Live site: header teal #215968 (logo background), theme accent3 #157372, button teal #22a6a4, pale mint ground #e4f0ed, navy #2c344c; logo: warm grey hexagon (#cfccc4) with a white neuron. Mapping: ink #0f2a30, accent on dark #4fc9c4, accent on light #157372, bone #f2f7f5. Type: Merriweather (their page heading font) for display, Inter for text. Logo: their only logo is a blurry ~90px raster inside a header background image, so the mark was redrawn as clean filled vector (mark.svg) and set with the name "NSC-Therapeutics GmbH" in Inter 500 as on the original (logo-h.png horizontal for the header, logo-s.png stacked as the original for the loader; rendered at 3x).

## Hero
Option (c), a crafted render of NSC001's target: the human M1 muscarinic acetylcholine receptor as a residue-level Gaussian molecular surface from the public cryo-EM structure PDB 6OIJ (chain R; G protein, scFv and iperoxo omitted; cut ICL3 helix ends 213-227 and 360-366 and the C-terminal tail >438 trimmed), upright as in the membrane, shaded pale mint > brand teal > deep teal. _kit/home/nsctherapeutics/surf.py, env CUTF=2.7 NZ=60 DEP=6 CG=2.6 BB=1.0 PAD=1.6, args 0.12 -0.6 0 2800, downsized to 900px hero.webp. No other site uses 6OIJ.

## Story
One fine-line cholinergic synapse: presynaptic terminal with vesicles, cleft, post-synaptic membrane with five M1 receptors. Step 1: acetylcholine fades, the terminal dims, receptors remain. Step 2: NSC001 (the logo hexagon, teal) seats on each receptor, which lights. Step 3: signals run to three effects (alpha-secretase up / less beta-amyloid; GSK3beta down / less tau; TREM2 / microglia).
