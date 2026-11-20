# REX Ortho Pty Ltd — dossier (home-only build, batch 2026-11e, medtech / orthopaedics)

Sources, fetched 2026-11-20: rexortho.com (home, /about, /products, /careers, /contact; HTML text, the live page renders blank);
WA Government, Biomedical Industry Commercialisation Bridge Grant 2025 recipients (last updated 14 November 2025);
Auscelerate (formerly MTPConnect) CTCM project page "REX Screw: a novel expandable screw to improve surgical outcomes for hip fracture patients…";
NHMRC 10 of the Best (15th edition, June 2024) "Australian innovators create superior surgical screws for orthopaedic surgeries" (search snippet; page 503 at fetch);
AO Foundation news 2024 "AO innovation resources support development of new spinal screw" (search listing; page 403 at fetch);
Curtin espace 20.500.11937/94391, "Development of an Expandable Screw for Hip Fracture Fixation to Improve Patient Outcome" (abstract via search snippet).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-rex-ortho.jpg, confirmed live 2026-11-20): Divi/WordPress; logo + nav over an entirely blank white homepage, no hero or content renders (the content is in the HTML but never appears); grey empty band below; footer "Copyright © . All rights reserved." with the year missing; Products page is three image tiles with no copy; no news page; email addresses hidden behind Cloudflare obfuscation.
- Active: WA Biomedical Industry Commercialisation Bridge Grant 2025, $200,000, "Next generation expandable orthopaedic screw platform technology" (wa.gov.au, updated 2025-11-14). Earlier: CTCM grant $500,000 + $200,000 industry, June 2024 to September 2025.
- Scope: orthopaedic implant (expandable bone screw). No pathogens, toxins or biodefence. Note: Australian company (outside SPEC §2 US rule), assigned by the coordinator.

## Company
- Address: Suite 4, 245 Churchill Ave, Subiaco WA 6008 (Perth office); mail PO Box 250, Subiaco WA 6904.
- Emails published: hello@rexortho.com (every page); matt@rexortho.com (careers page, "get in touch with Matt Oldakowski").
- Founded 2017; Curtin University spinout (surgeons + biomedical engineering researchers). REX = Removable EXpandable. Lead indication F-REX Screw (proximal femoral fractures); second L-REX Screw (lumbar spine) in development; future indications.
- Home-page stats: $1.4B total health burden in established economies from hip fractures; 6–10% cut-out occurrence in unstable fractures; $100M potential savings each year in the USA from 0.1% reduction in cut-out; 40% of patients don't return to presurgical mobility.
- Pillars: Commercial / Surgical / Clinical (quoted on the home page). Values: Innovation, Dynamism, Collaboration, Curiosity.
- Partners (logo strip): 4Medical, Curtin University, Murdoch University, Royal Perth Hospital, St John of God, Uppsala University, UWA, Perth Biodesign.
- Thesis abstract: F-REX showed significant improvement in fixation strength in a clinically relevant testing construct and safe removal after medium-term animal in-vivo implantation.

## People (rexortho.com/about)
- Management: Ian Brown (CEO; also Executive Chair on the board), Philip Procter (Head of Business Development), Dr Intan Oldakowska (CSO, co-founder), Dr Matt Oldakowski (CTO, co-founder).
- Board: Ian Brown (Executive Chair), Lucas Kong, Rohan McDougall, Dr Richard Hopkins (NEDs). Advisors: Philip Hardcastle (spinal surgeon), Gabriel Lee (neurosurgeon & spine).
- Lead (registry): Dr Matthew Oldakowski, co-founder & CTO. Greeting: "Dear Dr. Oldakowski". Email: matt@rexortho.com (published on the careers page).

## Brand
- Live site: white, logo blue #016faf (sampled from logo-rex-ortho.png), link blue #2ea3f2, navy #002341, Poppins. Concept: ink #07101a (the graded ground of their own animation), bone #f3f5f7, accent #016faf / #2ea3f2 on dark; Poppins + Encode Sans Semi Condensed labels (both on their site). Their real logo (white version, mark tinted #2ea3f2) in header and loader.

## Build notes
- Hero (HOME_BRIEF update option a/c): REX Ortho's own render "Bone Compression" (rexortho.com/wp-content/uploads/2023/04/Bone-Compression-Web.mp4): the F-REX Screw expanding in a sectioned femoral head. hero.mp4 = steady-camera stretch 20.5–27.6 s at 24 fps, forward + reverse loop (14.25 s, 650 KB); burned-in title and logo inpainted; the 12 px of head cut by the original frame restored (polar copy of the rim); curves grade; grey studio ground flattened per pixel to the ink so the frame has no edge. hero.webp = still for poster / reduced motion. Drawn on the hero canvas right of the measured headline + 110 px, left/base faded into the ink.
- Story: engraved section through a proximal femur: fracture → REX Screw placed through the neck into the head → leaves expand → leaves fold back and the screw draws out. Schematic.
- News rows link out (WA Gov, Auscelerate, NHMRC, AO Foundation).
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto hello@rexortho.com + both addresses). Footer carries their Acknowledgement of Country (shortened from their own text).
