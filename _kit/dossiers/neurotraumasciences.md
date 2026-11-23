# NeuroTrauma Sciences, LLC (slug: neurotraumasciences) — HOME-ONLY build, batch 2026-11i

- Site: https://neurotraumasciences.com/ (WordPress, custom "nts" theme, read 2026-11-23; pages Home, Stroke, Science, Pipeline, Publications, News & Events, Connect). Domain check: company name, logo, team, pipeline and press releases on the site; the footer address and info@neurotraumasciences.com match; the sponsor contacts on ClinicalTrials.gov NCT07742098 (sponsor "NeuroTrauma Sciences, LLC") use @neurotraumasciences.com addresses. No newer site on another domain.
- Type: clinical-stage biopharma; neuroprotective therapeutics for acute ischemic stroke and chronic stroke (NTS-104, a water-soluble neurosteroid prodrug of NTS-105; NTS-521 in Phase 2a). Not pathogen/toxin work.
- HQ: 2655 Northwinds Parkway, Suite 5c, Alpharetta, GA 30009; phone 833-278-2888 (site footer).
- Lead: Scot Barry, MS, President (home page team). Greeting: "Dear Mr. Barry".
- Best published email: info@neurotraumasciences.com (site footer and Connect page). Trial contacts on ClinicalTrials.gov: s.oshana@neurotraumasciences.com (Scott C Oshana) and a.ward@neurotraumasciences.com (Allison Ward); no personal address for Scot Barry found.

## Activity (pre-screen OK)
- 2026-08-03: ClinicalTrials.gov NCT07742098 first posted: "A Phase 2a Study to Evaluate the Dose-response, Safety, Tolerability, Efficacy, and Population Pharmacokinetics of Intravenous NTS-521 Infusions in the Early Recovery Treatment From Acute Ischemic Stroke" (ACT-IVATE, a domain within the ACT-GLOBAL platform), sponsor NeuroTrauma Sciences, LLC, not yet recruiting, estimated start 2026-10-31, 140 participants. https://clinicaltrials.gov/study/NCT07742098
- Site copyright 2026; home page says Phase 1 of NTS-104 completes in 2025.

## Bad-site evidence
Stock 3D glowing brain graphic in neon red and pink beside heavy condensed all-caps "TRANSFORMING THE TREATMENT OF STROKE"; a second stock neuron render in a rounded box; pill-shaped buttons; the home copy still says "We are completing Phase 1 ... in 2025"; the latest news item is June 2023 and the "events" list ends in June 2024 (with "San Fransisco" and "Brian Injury" typos); the 2026 Phase 2a trial of NTS-521 does not appear on the site; a third-party BugHerd feedback widget script is loaded on the live site.

## Facts used (neurotraumasciences.com unless noted)
- Home: founded in 2016; clinical stage; focused on improving the lives of stroke patients; lead indications AIS and chronic stroke. Team: Scot Barry, Marc de Somer, Tom Parry, Martin Rabe (summaries shortened, nothing added).
- Stroke page: blood supply disruption; inflammation, edema, cell death; ~800,000 acute strokes a year in the US; tPA the only FDA-approved drug for acute stroke; chronic stroke prevalence ~7–8M in the US, no FDA-approved chronic therapeutics; $103.5B annual direct US cost; microglia and other immune cells perpetuate inflammation; over 100 failed neuroprotection trials, lessons guide NTS strategy.
- Science page: NTS-104 prodrug converts rapidly in plasma to NTS-105, a neuroactive steroid that crosses the BBB; three equipotent receptor interactions: full antagonist at AR, partial agonist at PR-B, full antagonist at MR; anti-inflammatory, anti-apoptotic, anti-edema; tMCAO and eMCAO in multiple independent labs; Stroke (Nov 2022): dose-dependent mNSS improvement, foot faults, adhesive tape removal, infarct size reduction at one month.
- Pipeline page: NTS-104 intravenous, AIS (lead indication) and chronic stroke; next generation candidate subcutaneous/intramuscular, AIS and chronic stroke, expansion indications.
- News: first-in-human dosing of NTS-104 (2023-06-01; 32 participants, four cohorts); key appointments (2023-05-10); Emory worldwide license (2019-12-11). Publication: Zhang et al., Stroke 2022.
- Connect: "Making A Difference For Patients Together"; partnering and working-with-us text.

## Palette / type
Logo logo-header.svg: mark in orange-to-amber (#F36B3A, #F3783A, #F7943C, #F9A136, #FDBC2E), "NeuroTrauma" white, "SCIENCES" grey #888. Live site CSS: navy #0C2047, #07193D, #020C20; orange #F26B3A. Mapping: ink #0a1b3f, accent on dark #f7943c, accent on light #b8461a, amber #fdbc2e for small details. Type: Barlow (their headings are DIN 2014 via Typekit) and Inter (their body is Helvetica Neue). Header and loader use their real SVG logo (logo.svg), favicon their SVG icon.

## Hero
Option (c), a crafted render tied to their science: the human androgen receptor ligand-binding domain (one of NTS-105's three targets, where it is a full antagonist) as a residue-level Gaussian molecular surface from the public crystal structure PDB 2AM9 (chain A; testosterone and sulfate ions omitted), navy > steel blue > pale ice with a warm orange rim. _kit/home/neurotraumasciences/surf.py, env CUTF=2.7 NZ=60 DEP=6 CG=2.6 BB=1.0 PAD=1.6, args 0.3 0.4 0 3400. No other site uses 2AM9.

## Story
One fine-line scene: a blood vessel with the blood-brain barrier beneath it, a neuron (soma, nucleus, dendrites, axon) with three receptor sites, a neighbouring neuron and a microglia. Step 1 (injury): the flow dims, the microglia glows orange, signals drift to the neuron, an edema halo swells. Step 2 (reach): NTS-104 rings turn into solid NTS-105 in the vessel, cross the barrier and seat on the three receptor sites. Step 3 (protect): the glow and edema fade, the receptor sites light amber.
