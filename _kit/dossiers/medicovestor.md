# Medicovestor (slug: medicovestor) — HOME-ONLY build, 2026-11-23 (batch 2026-11h)

- Site: https://medicovestor.com/ (React SPA template). Domain confirmed: "Medicovestor, Inc." name and logo on every page, info@medicovestor.com, and the company's own press releases (GlobeNewswire/BioSpace) link www.Medicovestor.com and use @medicovestor.com contact emails. No newer domain.
- Type: US biotech (SPEC §2b): antibody-drug conjugates for cancer (pancreatic, ovarian, solid tumours), endometriosis, autoimmune disease. No pathogens, toxins or biodefence.
- HQ: New York, NY (dateline of every press release). No street address published. Operations in China and Malaysia (team titles on /about-us).
- Email: info@medicovestor.com (site footer and /expanded-access-policy). Press contact: Lin.Ong@medicovestor.com (Lin Hu Ong, CA, COO; IND and ODD releases). No published email for the CEO found (site, press releases, web search).
- Lead: Seah H. Lim, MD, PhD, Founder and Chief Executive Officer (/about-us; press releases). Greeting: "Dear Dr. Lim".
- Others (/about-us): Benjamin Vali (CRO), Lin Ong (COO), Eujern Lim (CITO), Jianbin Qi (COO China), Chit Loh (Chairman, Medicovestor Malaysia).

## Facts used
- /platform: gaps in current ADCs; ADoBind (dimeric antibody to a B-cell epitope), ADoTope (two IgG1 antibodies E1/E2 to non-overlapping epitopes); highlights table (payload kill, bystander, ADCC, ADCP, CDC); ADoBind FRα longer half-life and AUC than monomer; pancreatic and platinum-resistant ovarian SCID-mouse data.
- /pipeline: ADoBind — pancreatic cancer (MC001) FRα ADC; solid tumours (MC002) CT22 ADC; colorectal cancer FRα naked Abs; endometriosis FRα; autoimmune diseases CD38 ADC. ADoTope — ovarian cancer (MC003) FRα ADC. (Stage bars did not render; stages not shown. Codes for the colorectal and endometriosis rows conflict with the newsroom, so they are omitted.)
- /about-us: mission ("supercharge ADCs ... intrinsic killing functions of the antibody backbone"), vision, team.
- Press: ODD 2025-06-17; IND clearance 2026-10-05; Fast Track 2026-10-20; 3 USPTO patents 2024-10-28 ("agnostic to antigen, antibody, indication, and payload"); Next Star first place 2025-09-24; Sanyou partnership; seed round 2023-11-20.

## Activity (since 2025-05-18)
- 2026-11-05: CEO on panel at ADC Payload Summit (newsroom).
- 2026-10-20: FDA Fast Track for MC001. https://www.globenewswire.com/news-release/2026/10/20/3384282/0/en/medicovestor-announces-fda-fast-track-designation-for-mc001-its-first-in-class-chemoimmunotherapy-adc-for-pancreatic-cancer.html
- 2026-10-05: FDA IND clearance for MC001. https://www.biospace.com/press-releases/medicovestor-announces-fda-ind-clearance-for-mc001-advancing-to-an-international-phase-1-study
- 2025-09-24: first place, Next Star North America Biomedical competition.

## Bad-site evidence
- Home is near-empty: one rounded stock DNA banner with "Learn More", then a bare three-column footer. Generic template (rounded pill buttons, rounded panels); "© Copyright 2025"; the pipeline table renders blank until scrolled; the platform page is a stack of pasted diagrams.

## Palette
- Logo SVG: navy #002262, blue #4777D1, silver #B1BBC3. Navy turned into the ink #040c22 and the logo reversed (navy parts to white, blue ring kept). Accent tint #8fb0ee/#a9c3f3. Gold only for drug payloads in the art (their own diagrams draw payloads yellow). Poppins = their site face.

## Hero / story
- Hero: crafted render (option c) of their own molecule, the ADoBind backbone: two intact IgG1 antibodies (PDB 1IGT atom coordinates, from files.rcsb.org) joined Fc tip to Fc tip, as on their /platform figure, with schematic payloads. _kit/home/medicovestor/ab.py → hero.webp (real alpha). 1IGT is also used by cancure/gammabio/impactproteomics/lifordi as a single antibody; this is a different object (the dimer) and render.
- Story: tumour cell with FRα receptors → three ADoBind dimers dock → payloads spread, cell dims → immune effector cell arrives, Fc receptors reach the joined Fc stems (ADCC/ADCP/CDC).
