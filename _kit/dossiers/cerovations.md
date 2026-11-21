# Cerovations, LLC — dossier (home-only build, batch 2026-11c, medtech / neurocritical care)

Slug `cerovations` · built at `/cerovations/` · domain cerovations.com · parts in `_kit/home/cerovations/`
Sources, fetched 2026-11-21: cerovations.com (home, /osmoflo, /team, /contact); NIH RePORTER (U44NS121557 appl 10646176, 11019123, 10358331; R43NS113655 appl 9844124, 10169627; R41DK126586 appl 10149887); Medical Alley, "Cerovations receives 2nd NIH grant award for peritoneal dialysis innovation" (2020-09).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11c-cerovations.jpg): Squarespace template; footer "©2024 Cerovations,LLC" (stale year); hero is a flat royal-blue band with a stock glowing-brain render cropped by the right edge; stock surgery photo with text overlaid ("Neurocritical care teams need better tools for severe TBI cases"); "The Latest on the OsmoFlo System" is three undated bullets; FDA "BREAKTHROUGH DEVICE" shown as a clip-art stamp graphic; Team page shows only 2 people although "founded by three medical device executives"; no news page, no street address or phone (email only); "Contact" page has no form.
- Active: NIH NINDS SBIR Fast Track 5U44NS121557-02, FY2026, $1,499,369, award notice 2026-09-18, project to 2027-01-31 (RePORTER appl 10646176), "Pilot Clinical Study to Assess Safety and Efficacy of External Ventricular Drainage with Cerebrospinal Fluid Water Removal Osmotherapy for Traumatic Brain Injury-Induced Cerebral Edema". Site: "$8M grant from the NIH SBIR program", FDA Breakthrough Device designation.
- Scope: medical device for TBI cerebral edema. No pathogens, toxins or biodefence.

## Company
- RePORTER org: CEROVATIONS, LLC, Woodbury, MN 55129 (UEI WB4JGBGKLCA1). Site: "a Minnesota-based medical device company focused on bringing innovations to neurocritical care"; "founded by three medical device executives".
- Email published: info@cerovations.com (site header, contact page). No phone or street address published.
- OsmoFlo™ Bimodal EVD System (under development, not for sale): removes water from CSF as water vapour (pervaporation: dry air through permeable membrane fibres in the catheter), raising CSF osmolarity so water moves from tissue to CSF, reducing edema and ICP; mode 1 vapour removal, mode 2 standard EVD drainage; placed like a standard EVD. FDA breakthrough device designation; $8M NIH SBIR (NIH #NS121557); near-term first-in-human trials planned with TRACK-TBI.
- NIH abstract: Phase 1 first-in-human safety study, 10 severe TBI patients; Phase 2a randomised controlled pilot, 40 patients 3:1 vs standard EVD; objective: enable an SBIR Phase III pivotal study. PIs: Rick Odland (contact), Geoffrey T. Manley, David O. Okonkwo.
- Other programmes (RePORTER): dual-lumen CSF shunt, R43NS113655 (2019, PI Tom Viker); contamination-resistant peritoneal dialysis interconnection, R41DK126586 (2020, PI Tom Viker; UMN licence, Medical Alley).
- Stats used (site, with its references): 200,000+ TBI hospitalisations and 60,000+ deaths a year in the U.S. (CDC WONDER); 10% good outcomes for severe treatment-resistant ICP (Hutchinson et al., NEJM 2016).
- Memberships (team page): Medical Alley Association; University Enterprise Labs; UMN Office for Technology Commercialization's Business Advisory Group; AUTM.

## People (site /team)
- Jim Stice — President (lead). Decades launching medical devices and healthcare startups; former leader of FlexMedics Corp. and Twin Star Medical; former chairman of Medical Alley. No pronouns published → greeting "Dear Jim Stice" (flag).
- Rick Odland, MD — Medical and Technical Director; inventor of OsmoFlo; 33 patents; senior staff surgeon at HCMC; professor, Dept. of Otolaryngology, UMN.
- Also on RePORTER: Joe Hofmeister (PI on the 2024 supplement), Tom Viker (VP R&D per Medical Alley 2020); not shown on the concept (no current role published on the site).

## Brand
- Logo PNG: royal blue #3853a4 wordmark, green #0d9347 "C" stroke and tagline "innovations in neurocritical care". Site uses Futura-style text and a serif for headings.
- Concept: ink #0a0f24 (navy from the blue), bone #f3f4f8, blue #3853a4 accent on light bands, green lifted to #43c07c on dark; Newsreader + Jost. Logo recoloured for the dark header (blue → bone, green kept/lifted).

## Build notes
- Hero (HOME_BRIEF update option b): Unsplash photo of an anatomical brain model in sagittal section, https://unsplash.com/photos/photo-1559757148-5c350d0d3c56 (Robina Weermeijer; Unsplash licence). Cut out from its blurred background, graded to the navy with the ventricle-region structures in ivory; hero.webp 1460×1250, shown below native size, centred at ~70% width, whole at 1920/1440/390.
- Story: engraved coronal section of the head (skull, gyral cortex, lateral and third ventricles): edema dots + pressure arrows → OsmoFlo catheter into the right lateral ventricle with membrane fibres → dry air in / water vapour out → water drawn from tissue into the ventricles. Schematic.
- Nav: Technology / Programs / Team / News open build-out pages (_kit/lib/buildout.js); Contact scrolls to the contact block (mailto info@cerovations.com, Woodbury, Minnesota).
