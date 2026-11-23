# HekeTiss — dossier (home-only build, batch 2026-11h, biotech)

Sources fetched 2026-11-23: heketiss.ch (Home, About us / Overview, Board of Directors, The unmet medical need, Our solution, News and the linked news items, Awards, logo.svg); ClinicalTrials.gov API, NCT07048054.

## Domain check
- heketiss.ch carries the company name throughout (HekeTiss SA, logo, "Copyright © 2026 Heketiss"), the CEO and board, the office address and the TrophiPatch trial. MX: mta-gw.infomaniak.ch. No newer site found.

## Pre-screen
- Bad site (passes): home page is a raw phone photo of a pink sponge in a petri dish on a steel grid filling the page; tiny red logo and plain template nav; a stray list bullet beside the photo; a contact form instead of an email.
- Active (passes): RESCUE-PATCH Phase I/IIa trial (NCT07048054, first posted 2025-07-02, recruiting, 18 participants planned, sponsor University Hospital Geneva); site news: authorization 14 May 2025, EU patent EP4031201 granted 17 Sept 2025, first patient treated 5 Nov 2025, HUG campaign 1 Jun 2026, 50% recruitment 2026.
- Scope (passes): allogeneic adipose-derived stem cell patch for chronic wounds. No pathogens, toxins or biodefence.

## Company
- HekeTiss S.A., c/o FONGIT, Route de la Galaise 34, 1228 Plan-les-Ouates (Geneva), Switzerland. Founded 2022, spin-off of the University of Geneva (UNIGE) and Geneva University Hospitals (HUG). Tagline "Turning Fat Into Life".
- Email: contact@heketiss.ch (from a Swiss company-listing search result; MX exists; not printed on heketiss.ch, which uses a contact form). CEO's published email: nicolo.brembilla@hug.ch (ClinicalTrials.gov central contact, phone 0041(0)22 3795751).
- Awards: TOP 100 Swiss Startups 2025 (12th among biotech), Prix Strategis 2025, Innosuisse Certificate 2024; de Vigier Award 2023 top 15.

## Science (heketiss.ch)
- Chronic wounds affect ~1–2% of the global population and up to 5% of people over 65; 10–20% of ulcers refractory; advanced wound care market > USD 20 billion.
- TrophiPatch: allogeneic ASCs from healthy donors' fat in an active supporting matrix (gelatin matrix per the HUG news item); cells secrete angiogenic and regenerative growth factors; proprietary technology enhances that activity; restores vascularization. 6+ years of R&D, preclinical safety completed, GMP production at HUG facility (first GMP production Nov 2024).

## People
- Dr Nicolò Costantino Brembilla — CEO, co-founder, BoD member. Greeting "Dear Dr. Brembilla".
- Dr Olivier Preynat-Seauve — CSO, co-founder, BoD. Prof Karl-Heinz Krause — co-founder, BoD. Pascal Pincemin — President, independent BoD. Bernardin Assiene — independent BoD.

## Brand
- logo.svg: red rgb(167,23,37) #a71725, charcoal rgb(35,31,32) #231f20; site font Nunito. Built: warm ink #141011, accent red lifted to #e85a68 on dark, #a71725 on light; Manrope display, Nunito Sans body. The real logo SVG (paths unchanged) is used in the nav, loader (exact colours on a light panel) and footer (reversed).

## Build
- Hero (option c): crafted render of TrophiPatch (_kit/home/heketiss/render.py): porous pink gelatin sponge patch, after their own lab photo; feathered into the ink, slow drift.
- Story: engraved skin section at a chronic wound: wound without vessels → patch with donor stem cells → growth factors → new vessels and tissue.
- Nav items open #/more/<item> via _kit/lib/buildout.js; Contact scrolls to the contact block.
