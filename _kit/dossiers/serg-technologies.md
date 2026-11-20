# SERG Technologies Ltd — dossier (home-only build, batch 2026-11e, medtech / digital health for Parkinson's)

Sources, fetched 2026-11-20: sergtechnologies.com (home, team, insights, blog-feed.xml); Innovate UK Business Connect, 2025-10-15,
"Biomedical Catalyst investment fuelling innovative healthcare solutions" (https://iuk-business-connect.org.uk/?p=120655);
HRA research summary "SERG ONE DBS" (REC 24/YH/0216); Imperial College London news 2022-07-12 ("£1.6 million raised for Parkinson's Disease continuous monitoring technology").

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-serg-technologies.jpg): Wix Studio template; outlined box logo on a flat indigo bar, purple screenshot banner with "Welcome to", "[ READ MORE ]" bracket links, centred stock-stat line, plain bullet lists for the platform.
- Active: Innovate UK Biomedical Catalyst R&D project "SERG-MED" (announced 2025-10-15); blog posts 2026-02-23 and 2026-03-09 (StimSense at the 3rd Expert Summit on the Future of DBS, Würzburg).
- Scope: wearable sensing + AI for Parkinson's / DBS programming. No pathogens, toxins or biodefence.

## Company
- SERG Technologies Ltd, company no. 11844476 (England & Wales). 124 Barlby Road, North Kensington, London W10 6BL. Tel 0203 105 0903.
- Emails published: info@sergtechnologies.com (site footer); c.kapatos@sergtechnologies.com (HRA study contact, Dr Christos Kapatos, now CBO).
- Platform: symptom tracking (precision scores, at-home monitoring, fluctuations), DBS programming (StimSense), medication (response, dosage & schedule), therapies.
- StimSense: automated assessment tool for DBS programming; physiological sensing suite, proprietary biomarkers, AI calibrated on specialist scoring; edge deployment; tremor, bradykinesia, rigidity. Without it 4–5 h per stimulator. Pilot with Boston Scientific: full automatic programming under 90 min, outcomes comparable to standard of care, median r = 0.74 with specialist.
- Hardware: 2x IMU-MMG wearable (IMU motion capture, 2 MMG channels, wireless streaming, on-board SD). Software: acquisition, device mgmt, assessment selection, clinician annotations, video for remote testing, cloud, AI testing.
- Stats from site: 12,000,000 people live with Parkinson's; 10,000–15,000 receive a DBS system per year.
- History (Imperial 2022): founded on Biomechatronics Lab research by Dr Ravi Vaidyanathan and Dr Samuel Wilson; £1.6m raise incl. £250k Imperial College Innovation Fund; then Kapatos CEO, Wilson CTO.

## People (site, current)
- Dr Samuel Wilson — CEO (co-founder). Greeting: "Dear Dr. Wilson". No personal email published (pattern from HRA would be s.wilson@sergtechnologies.com, unverified — not used).
- Diana Darko COO; Ewan Phillips CFO; Dr Christos Kapatos CBO (co-founder); engineering/clinical team and advisory board as on the site.

## Brand
- Live site CSS: indigo #1A237E (header/logo ground), violet #534BAE (hero banner), Inter / Roboto. Concept: ink #0b0e2c, accent #534bae (light) / #9a92ee (dark), Inter Tight + Inter; their real logo PNG, re-inked white.

## Build notes
- Hero (option a): SERG's own photo of a clinician's hands holding the SERG assessment app ("Exercise Recording") on a tablet (wixstatic 306575_66e49bb7…f000.jpg from their home page), graded by _kit/home/serg-technologies/grade.py into the indigo with a tablet-centred vignette; canvas feathers all inner edges (DJ); tablet right of ~45% under an ink wash (DI); slow Ken Burns drift.
- Story: engraved closed loop: stimulator + lead with four contacts and field → IMU-MMG wearable with IMU/MMG traces → three-arc score gauge (tremor, bradykinesia, rigidity) → algorithmic search back to the next contact. Schematic.
- Team is text-only masthead (portraits exist on their site but no reliable name mapping).
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
