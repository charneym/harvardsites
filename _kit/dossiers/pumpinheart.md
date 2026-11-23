# Pumpinheart — dossier (batch 2026-11h, HOME-ONLY build)

Slug: `pumpinheart` · built at `/pumpinheart/` · domain pumpinheart.com · parts, logo trace and hero processing in `_kit/home/pumpinheart/`

## Domain check
pumpinheart.com (GoDaddy Website Builder) carries the company name, logo, team, events through 2026 and the footer
"Pumpinheart Ltd, registered in Ireland at 12 Prince Edward Terrace Lower, Blackrock, Co Dublin, A94W3V1, Company No. 712811;
directors A Hameed, D A Hickey (Man. Dir. & Co. Sec.), A J Malone; © 2026 Pumpinheart Ltd". MX records on the domain
(ppe-hosted). LinkedIn: linkedin.com/company/pumpinheart (linked from the site). No newer site found.

## The company
RCSI (Royal College of Surgeons in Ireland) spinout developing PReduction (patent pending): an ECG-gated implantable
diastolic pump in the left ventricle that reduces left atrial pressure during diastole, for advanced HFpEF; delivered by
catheter via femoral venous access in the cath lab; powered by a subdermal battery/motor/control unit below the left clavicle
(torque cable, pressure and ECG sensors via a lumen in the left subclavian vein) and TETS. Pre-clinical; "at least seven
years" of research and trials needed (their wording). Sources: pumpinheart.com home and /team; Irish Times 2023-04-06.

HQ: 12 Prince Edward Terrace Lower, Blackrock, Co Dublin A94 W3V1, Ireland (registered office; Health Wildcatters lists Galway).
Lead: Donald Hickey, Co-founder and CEO (pumpinheart.com/team). No pronouns published: greeting "Dear Donald Hickey".
Email: info@pumpinheart.com (pumpinheart.com/contact-us). Phone +353 86 839 1435.

## Activity
- 2026-04-16: CEO presented at the Big Tree Innovation Fund Academy Investor Showcase, Boston & San Diego (pumpinheart.com home).
- 2026-04-28/30 MedTech Strategist Dublin; 2026-06-11 Mayo Clinic summit; 2026-06-21 Innovation in Women's Health pitch (home page, events 2026).
- 2025-09-04: joined Health Wildcatters 13th cohort (https://www.healthwildcatters.com/news/6cle2ipv9j9dg5wnszlz2wczgk6dkg).

## Bad-site evidence
GoDaddy template: dark grey bar with faint nav, a white page with a stock-style heart render and a catheter cut-out, red
cookie box over the hero, events and awards as one long undifferentiated list (screenshot _kit/sourcing/v2-sheets/11h-pumpinheart.jpg).

## Build notes
- Hero: their own render (heart cut-away with the anchor and pump), poster frame of the home-page video
  (https://player.vimeo.com/video/944880384, poster i.vimeocdn.com/video/1850000774-...d_1920x1080). White ground turned
  into real alpha (render.py), shown at or below native size. Not used on any other concept.
- Logo: their header raster ("Pumpinheart Logo for Website with Flesh Red I.tiff", 884x125) redrawn as filled SVG paths
  (tracelogo.py); heart #d04a4b, wordmark #333 (their own light variant appears on the MedTech Innovator graphic).
- Palette: logo flesh red #d04a4b (deepened to #b83436 for text/buttons), header charcoal #333, render white -> #f8f6f4.
- Story: fine-line cut-away heart; delivery catheter, ECG-gated diastolic pumping, subdermal unit + TETS (all from their copy).
- Facts: €3.14M DTIF (2021–22, consortium with Boston Scientific, Gentian Health, RCSI); €500k Enterprise Ireland
  Commercialisation Fund to RCSI (2019); invented 2018 by Dr Aamir Hameed; awards as listed on their home page.
- Gate note: hero-audit reports "title never uncovered" on #/; the reference light build mommdiagnostics reports the same
  (the fixed .fieldbg ground reads as a curtain to the audit). Hero entrance checked by eye.
