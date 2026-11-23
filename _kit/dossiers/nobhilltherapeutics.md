# Nob Hill Therapeutics, Inc. (slug: nobhilltherapeutics) — HOME-ONLY build, batch 2026-11i

- Site: https://nobhilltherapeutics.com/ (WordPress, JupiterX theme, read 2026-11-23; pages Home, Technology, Applications, Team, News, Contact). Domain check: company name, logo, team, news and the Albuquerque address on the site; ClinicalTrials.gov NCT07864584 lead sponsor "Nob Hill Therapeutics, Inc."; NIH RePORTER org "NOB HILL THERAPEUTICS" (Albuquerque, PI Matthew Reed); PR Newswire release of 18 Jun 2025 points to nobhilltherapeutics.com. No newer site on another domain.
- Type: clinical-stage inhaled drug-device company; the DryNeb dry powder nebulizer (patented platform) and drugs for it: NHT102 (5-azacytidine dry powder, NSCLC) and NH101 (amphotericin B dry powder, ABPA). Pre-screen: no pathogen/toxin/biodefence research (NH101 is an inhaled antifungal treatment), so the build goes ahead.
- HQ: 5901 Indian School Road, Suite 209, Albuquerque, NM 87110 (Contact page). Phone 479.571.2592.
- Lead: Noel Greenberger, CEO (Team page; named CEO in the Aug 2022 release; quoted as CEO in the June 2025 release). No pronouns or doctorate published: greeting "Dear Noel Greenberger".
- Best published email: info@nobhilltherapeutics.com (Contact page). No personal address found (site, NIH RePORTER lists no PI email, press releases).

## Activity (pre-screen OK)
- 2026-10-08: ClinicalTrials.gov NCT07864584 first posted: Phase 1/2 study of NHT102 (5-AZA dry powder for inhalation, DryNeb device) in advanced NSCLC confined to the lung/thorax; not yet recruiting, start 2027-01-11; site Gabrail Cancer Center Research, Canton OH. https://clinicaltrials.gov/study/NCT07864584
- 2025-06-18: PR Newswire, Strategic Advisory Board adds Mark Parry-Billings, PhD and Scott L. Shofer, MD, PhD.
- FY2025: NIH NCI 5R44CA281538-02, "Aerosolized Epigenetic Therapy for Metastatic Lung Cancer" (to 2025-11-30). https://reporter.nih.gov/project-details/10931496
- 2024-08-06: $3M Series A first close led by Tramway Venture Partners, with TCA Venture Group and VIC Technology Venture Development (site News).

## Bad-site evidence
Generic dark stock render of a glowing wireframe human torso and lungs (shutterstock_1707677491) as a short banner, then a plain white block of small grey left-aligned text with a bulleted values list and an empty right half; no imagery of the DryNeb, no programs or pipeline on the home page; the Applications page is a 2024 screenshot of a pie chart pasted as an image (Screenshot-2024-08-01-at-3.05.36-PM.png); News page is a long unformatted list whose latest item is June 2025 and whose dates sit inline in body text; the October 2026 trial registration is not on the site; WordPress "?page_id=" URLs; the logo is a 250×85 raster.

## Facts used
- Home: mission "improve patients’ lives by re-envisioning inhalation medicines and how they are delivered to the lungs ... change the treatment paradigm for high-dose lung delivery ... lung-related diseases that can’t be effectively treated today"; values Deliver results / Act pragmatically / Move fast / Trust and support each other / Do the right thing; part of the VIC Technology Venture Development ecosystem.
- Technology: DryNeb is a patented technology that can deliver drugs to the lungs with higher efficiency than current DPIs; high doses of pure active ingredient; platform; disperses the powder independently from the patient’s inhalation breath maneuver and lung function; emits powder only when a patient inhales, no coordination required; formulation development, proof-of-concept and preclinical animal studies, multiple SBIR grants, first pre-IND meeting with the FDA.
- Applications: LRTI, cystic fibrosis, pulmonary fibrosis, lung cancer, RSV, non-respiratory; small molecules and newer technologies (biologics, vaccines); minimize side effects and toxicities while providing high concentrations at the site of disease.
- NIH 5R44CA281538 abstract: stable dry powder 5AZA (5AZA-DP); DryNeb generates optimal aerosol particle sizes; easy tidal breathing, no forced pulmonary function maneuvers; rat lung tumor model: tidally inhaled 5AZA-DP reduced tumor burden 70–95% vs 32% for systemic injection.
- NIH 5R44HL147749 abstract: NH101, neat dry powder amphotericin B with the DryNeb, outpatient, ABPA in CF and asthma, MDR aspergillus.
- News: HHS Phase II grants Aug 2022 (lung fungal infection, up to $1.73M, new CEO) and Oct 2023 (lung cancer, up to $2M); RIS featured poster May 2023.
- Team: names and titles exactly as on the Team page (Executive team, Board, Strategic Advisory Board, Special advisors). No bios published, so the masthead is name + title only.

## Palette / type
Logo Nob-Hill-Logo_white_lime.png (reversed version used in their header): "nob·hill" white, "THERAPEUTICS" and dots lime #b7d87a; site icon dots lime and navy #183668; live header deep navy (~#0b1124). Mapping: ink #0a1226, accent on dark lime #b7d87a (solid buttons lime with ink text), buttons/labels on light navy #183668, emphasis on bone dark lime #4b7320. Type: Outfit (echoes the rounded geometric wordmark) and Roboto (their body font). Header and loader use the real logo PNG at or below native size (250×85; 56px tall in the header, native in the loader).

## Hero
Option (c), a render of the firm’s own drug: azacitidine (5-AZA), the active ingredient of NHT102, as a glossy ball-and-stick model from PubChem CID 9444’s 3D conformer (aza3d.sdf -> mol3d.json), ray-traced by _kit/home/nobhilltherapeutics/render.py (adapted from the kit’s molecule renderer; args `1300 hero.png 60 10 200`), oxygen in the logo lime, nitrogen in the logo navy-blue lifted for the dark ground, real alpha. No other site uses azacitidine (grep of dossiers).

## Story
One fine-line scene of the airways (front view: trachea with cartilage rings, bronchi branching four times to alveolar clusters, inside an open outline of both lungs). Step 1 Disperse: a cloud of powder forms above the trachea, independent of the breath. Step 2 Inhale: a tidal-breath wave, the powder flows down the trachea and along the branches. Step 3 Deliver: it settles in the alveoli, which light in the logo lime.
