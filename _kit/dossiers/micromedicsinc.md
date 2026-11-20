# Micromedics Inc. — dossier (home-only build, batch 2026-11e, medtech: bioartificial pancreas)

Sources, fetched 2026-11-20: NSF Award Search / api.nsf.gov award 2537342; Tech Briefs "Create the Future" contest entries by Mordechai Nosrati (2025 #13374, 2020 #10124) and his contest profile (contest.techbriefs.com/profile?user=94434); micromedicsinc.com (parked).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-micromedicsinc.jpg): micromedicsinc.com is an unbuilt Hostinger parking page ("Parked Domain name on Hostinger DNS system", "Registered at Hostinger / Start your online journey", noindex). No logo, no content, no contact details.
- Active: NSF SBIR Phase I award 2537342, $304,926, start 2026-06-25 (award date), expires 2027-06-30, "Design and Development of the mPancreas: A Wearable Biomimetically Designed Microfluidic BioArtificial Pancreas". NSF TIP / Start-ups and Small Businesses. https://www.nsf.gov/awardsearch/showAward?AWD_ID=2537342
- Scope: cell-based diabetes therapy device (islets, membranes, microfluidics). No pathogens, toxins or biodefence.

## Company
- Micromedics Inc., 24548 Eilat St #A2, Woodland Hills, CA 91367-1029 (NSF awardee and performance address). Phone (213) 804-5096 (NSF awardee phone).
- Email: micromedicsinc26@gmail.com (NSF PI email; the only published address found).
- NSF abstract: bioengineered platform to support insulin-producing cells outside the body; transplantation can restore natural glucose control but is limited by poor survival of transplanted cells and lack of technologies maintaining oxygen and nutrient delivery; miniature device with thin permeable membranes and precisely controlled fluid channels regulating oxygen, nutrients and metabolic products; Phase I: fabricate prototypes, characterise membrane transport, lab studies of oxygen delivery and metabolic exchange; outcome: controlled microenvironment sustaining viable functional insulin-producing cells; could reduce dependence on insulin injections. (Abstract also says "compact implanted bioengineered device"; the award title says wearable — the site uses the title's "wearable".)
- Tech Briefs 2025 (May 5, 2025): wearable bio-artificial pancreas; human islets in a central bioreactor chamber; MCAL microfluidic chipset; polyethersulfone immunoisolating membranes; biosensors for glucose, oxygen and lactate; AI-driven insulin and glucagon release; tunneled central line catheter; COMSOL Multiphysics/CFD modelling; aim: no injections and no immunosuppressive drugs.
- Tech Briefs 2020 (Apr 13, 2020): channels sealed with semipermeable membranes "to mimic all-important capillaries"; three-layer biochip (central reservoir holding islets, flanked by two capillary-like layers); ten chips in parallel form a module, modules combine in a cartridge, a failed module can be changed; releases insulin on demand and glucagon if blood sugar dips to dangerous levels.

## People
- Mordechai S. Nosrati — contact PI on NSF 2537342; Tech Briefs profile: Engineer/Designer, Micromedics Inc., Woodland Hills; "26 years of academic and clinical experience in treating diabetes and diabetic nephropathy". No degree or company title published (CEO/founder unconfirmed); site calls him "Principal Investigator, NSF SBIR". No pronouns or title published → greeting "Dear Mordechai Nosrati".

## Brand
- No logo or colours exist (parked domain). Concept palette: slate ink #0b1215, bone #f2f0eb, medical teal #2b8f88 (#6cc6bc on dark, #1f6c66 on bone). Literata + Instrument Sans. Text wordmark with a two-ring mark (concept only).

## Build notes
- Hero (HOME_BRIEF option c; no own photography; no suitable Unsplash/Pexels photo of a microfluidic islet device found): a three.js render (`_kit/home/micromedicsinc/render.js`) of a clear moulded microfluidic biochip whose channels branch like a capillary bed into a central reservoir of islets resting on a membrane, with three gold biosensor electrodes at the outlet. Generic illustration of the described principle, not their prototype. Rendered on the page ink, edge-feathered, hero.webp; slow Ken Burns, teal glow screened over the whole canvas; phones: whole chip in a 41svh top band.
- Story: engraved cross-section of the three-layer biochip (channel / membrane / islet reservoir / membrane / channel) + blood glucose trace; steps Hold / Feed / Respond.
- Programme section: the four NSF Phase I work items from the abstract. News: NSF award, Tech Briefs 2025 and 2020 entries.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto + address + phone).
