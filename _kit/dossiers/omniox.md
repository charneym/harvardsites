# Omniox — dossier (batch 2026-11g, HOME-ONLY build)

Slug: `omniox` · built at `/omniox/` · domain omniox.com · parts and render in `_kit/home/omniox/`

## Domain check
omniox.com carries the company name and logo, the management team (Jonathan Winger, Julia Simmons), the address 181 2nd
Street, San Francisco, CA 94105, info@omniox.com and 650.654.7873 ("Copyright © Omniox, 2019", designed by OntosLogos).
NIH RePORTER org record OMNIOX, San Francisco, CA, contact PI Jonathan A. Winger (CEO), matches. No newer site found
(news.html and pipeline.html return 404 on the live site). A third-party directory (MTEC) lists San Carlos; the site and
NIH both say San Francisco, which the page uses.

## The company
IND-stage biotherapeutics company developing its H-NOX platform into first-in-class and best-in-class OMX oxygen delivery
vehicles (omniox.com home). Founded on H-NOX technology from Michael Marletta's laboratory at UC Berkeley (About). Funding
from NCI, NINDS, the Wellcome Trust and private investors (About). Lead H-NOX candidate OMX-4.80 for hypoxic cancers
(glioblastoma, metastatic brain cancer, head-and-neck, pancreatic, lung, prostate) with radiation/chemotherapy (home).
Technology page: H-NOX properties (stable, non-reactive, tunable O2 affinity, reduced NO reactivity, negligible
hypertension risk), OMX products sized for efficacy with engineered half-life and penetration, mechanism (O2 retained
until hypoxic microenvironments; red cells release at venous levels and are depleted before reaching them).

## Facts used on the page
- NIH RePORTER (org OMNIOX): 27 awards FY2008–2025 totalling $18,183,104 from NCI, NINDS, NICHD, NIGMS.
- 5R44HD094414-07 (NICHD, notice 2025-09-05, $991,379, appl 11167638): oxygen delivery biotherapeutic for preserving
  myocardial function during pediatric cardiopulmonary bypass. Abstract: ~40,000 children born annually with CHD, ~10,000
  need urgent surgery; up to 60% of infants on CPB have post-operative complications; collaborators Drs. Fineman and
  Maltepe (UCSF, neonatal and pediatric care intensivists); Phase IIB aims include an IND for a Phase 1 trial in neonates.
- 2R44HD094414-05 (2023-08-29, appl 10761664), 5R44HD094414-06 (2024-08-11, appl 10915621).
- 1R01CA204723-01A1 (NCI, 2017-04-27, appl 9240463): PET imaging biomarkers for glioblastoma radiotherapy enhanced by an
  H-NOX oxygen carrier.
- 2R44NS076272-02A1 (NINDS, 2016-07-28, appl 9142199): reducing brain injury after focal ischemia; NINDS stroke SBIRs 2012–2017.
- Team: names, titles and bio facts from omniox.com Management only.

## Leadership / outreach
- Lead: **Jonathan Winger, PhD**, Co-Founder and CEO → greeting **Dear Dr. Winger**.
- Best published email: **info@omniox.com** (site footer and contact page). No personal email found (site, NIH, web search).
- HQ: 181 2nd Street, San Francisco, CA 94105. Phone 650 654 7873.

## Activity
- 2025-09-05 — NIH 5R44HD094414-07 ($991,379), https://reporter.nih.gov/project-details/11167638

## Bad-site evidence
Dated 2010s Bootstrap template: boxed sky-blue pill nav buttons on a flat blue bar, a single molecule render on a blurred
blue molecule backdrop, small text block, "Copyright 2019"; Pipeline and News pages 404. Screenshot
`_kit/sourcing/v2-sheets/11g-omniox.jpg`.

## Design
- Palette: logo PNG (white "Omni", #66ccff "ox") and darkblue.css (#507191, #3c5670, #5BC2F2). Navy ink #08131f, #66ccff on
  dark, #2b7bb9 on bone. Jost (thin geometric, like the wordmark) + Newsreader display. Wordmark redrawn as type.
- Hero (update 2c / DQ, crafted render of the firm's own molecule): the H-NOX domain with heme and bound O2 from its real
  crystal structure, PDB 1U55 (https://www.rcsb.org/structure/1U55, T. tengcongensis H-NOX, oxygen complex), rendered by
  render.py as a pearl glass shell over the sky-blue backbone tube and crimson heme; alpha webp, Ken Burns breath, heme glow.
  Unique in the repo (no other site uses this structure).
- Story: capillary + tissue cells out to a hypoxic core; hypoxia gradient → red cells release O2 early while OMX carriers
  (three linked domains) travel on → OMX releases O2 in the core, core oxygenated.
