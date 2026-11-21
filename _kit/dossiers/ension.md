# Ension, Inc. — dossier (home-only build, batch 2026-11f, medtech / pediatric circulatory support)

Sources, fetched 2026-11-21: ension.com (home; every sub-page 404s); NIH RePORTER (Ension, Inc., Butler PA, UEI Y4P6UDJLXLN3:
5R44HL178134-02 appl 11261620, 1R44HL178134-01 appl 11069156, R42HL134455, R44HL131338, R44HL117480 appl 8453138, R43HD085600,
R44HL083563, contracts N01HV48189 and 268201000012C "PumpKIN PreClinical", earliest R43HL059810 1998); Gartner et al., NHLBI Pediatric
Circulatory Support Program 5-year summary (PMC3066431); Cahalan et al. J Biomed Mater Res B 2023 (10.1002/jbm.b.35130), Front
Cardiovasc Med 2025 (10.3389/fcvm.2025.1578538), Biomater Adv 2022 (10.1016/j.bioadv.2022.213014, affiliation "508 Pittsburg Road,
Butler, PA 16002"); GovTribe/SAM (508 Pittsburgh Rd, Butler, PA 16002).

## Pre-screen
- Domain: ension.com footer "COPYRIGHT © 2026 ENSION, INC."; same company as the NIH grantee (Butler, PA). Confirmed.
- Bad site (screenshot _kit/sourcing/v2-sheets/11f-ension.jpg): obsolete 2000s fixed-width (777px) box, image-sprite tab nav
  (Core Competencies / Design Portfolio / Spin Outs / Blood Compatibility Testing / About Us) whose pages ALL return 404; a
  stock ink-in-water photo; leftover Flash (SWFObject) title code; legacy urchin ga.js; footer address is a placeholder in the HTML
  ("123 Street Road, Philadelphia, PA 19123 P. 215.555.1212") and an old Pittsburgh address in the footer image; one sentence of copy.
- Active: NIH NHLBI SBIR Phase II 5R44HL178134-02, $1,025,048, notice 2026-05-07 (project 2025-02-01 to 2028-01-31),
  "Bearingless flux reversal motor for neonatal and pediatric extracorporeal life support applications".
- Scope: pediatric ECLS device, blood compatibility testing, surfaces. No pathogens, toxins or biodefence.

## Company
- "Ension is a product design and development company with particular expertise in the clinical translation of medical
  technologies. We maintain strict compliance to the requirements outlined in the FDA design controls and ISO standards." (site)
- pCAS (RePORTER 5R44HL178134): bearingless pediatric cardiopulmonary assist system; ACE (advanced compact ECLS) system with a
  bearingless flux reversal motor (FRM), topology patent pending; single-use pump (+ oxygenator or integrated pump-oxygenator),
  system controller on AC or internal rechargeable batteries, touchscreen console, reusable motor stator; target 5–15 kg.
  R42HL134455: maglev motor moves the costly rare-earth magnetic elements from the disposable to the reusable stator; replaces
  bearings, shaft and blood seal. PMC3066431: pCAS "a next-generation ECMO system", 2–25 kg, Ension Bioactive Surface.
- Ension Triad System (R44HL131338): bench-top blood circulation loop, five ISO 10993-4 categories, Virchow variables, aim FDA MDDT.
- Surfaces: pediatric oxygenator coating (R44HL083563), infection-resistant VAD driveline (R44HL117480), bioactive surface for
  pediatric hemodialysis catheters (R43HD085600).
- No general email published anywhere (site, RePORTER, papers). Older corresponding-author addresses only: ahussain@ension.com
  (2016 paper), gjohnson@ension.com (2013). The concept's contact block therefore carries the HQ address, ension.com and a map link,
  with no invented mailto.

## People
- Mark J. Gartner, PhD — President ("Dr. Gartner is the President and retains ownership interest in Ension, Inc.", PMC3066431;
  LinkedIn company page lists him as President). PI on the PumpKIN contract. Lead. Greeting: "Dear Dr. Gartner".
- Patrick Thomas Cahalan — contact PI on 5R44HL178134 and earlier awards (aggregators list Senior Scientist; not used on the page).
- Linda Cahalan — co-author, "Research, Ension, Inc." (2023 paper).

## Brand
- Live site: warm bone #f7f6f5 ground, logo of three translucent aqua squares (#a4dadf, #afe6ee, #d8eaeb) and a geometric
  wordmark; nav art teal #4da0b2. Concept: ink #0b1315, bone #f7f6f5, accent aqua #8fcfd6 (dark), teal #1f7383 (light bands);
  Montserrat + Figtree; the mark redrawn as SVG.

## Build notes
- Hero (HOME_BRIEF update 2c, crafted render of the real mechanism): the pCAS bearingless motor, exploded: a reusable stator
  ring with 12 copper-wound teeth and the single-use impeller (curved vanes, iron rotor rim with salient slots) levitated above
  the bore. Numpy sphere-traced by home/ension/render.py, alpha-baked to ension/hero.webp; slow Ken Burns; aqua glow over the
  whole canvas; eased scrims (no line ends). Schematic, illustrative (caption says so).
- Story: engraved section of the pump head in the stator bore over the system controller: stator → impeller → levitation
  (field across the gap) → circuit (inlet, outlet, oxygenator, back to the patient).
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
