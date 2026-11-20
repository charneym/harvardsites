# Neurospheric Pty Ltd — dossier (home-only build, batch 2026-11e, medtech / neurosurgical devices)

Sources, fetched 2026-11-20: neurospheric.com (home, /about, /blog, post "Making Neurological Interventions Safer and More Effective" 2024-04-01; /contact is a 404);
WA Government "Biomedical Industry Innovation Booster Grant 2025 recipients" (last updated 2025-11-14); WA Government "Meet the recipients of key health and medical life sciences grants" (2026-04-08);
Curtin University news "iPREP internship opens the door…" (2025-06-27); ABN Lookup 48 673 261 473; St John of God "find a specialist" (Ramakonar, Director at Neurospheric, Nedlands WA); Whiteford biobase profile (secondary).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-neurospheric.jpg): Wix template; clip-art blob logo over a white strip; black wavy-line dividers; centred white body text over a glowing stock brain-network image (low contrast); /contact returns "404 Error: Page Not Found"; team page renders empty in plain HTML; only blog post dated Apr 2024; no email, phone or address anywhere on the site.
- Active: WA Biomedical Industry Innovation Booster Grant, A$40,000, project "Smart Neurosurgery: Adaptive Robotic Morphing Technology to Revolutionise Brain Surgery" (page updated 2025-11-14); Entrepreneur in Residence Scheme A$10,000, Dr Greydon Gilmore (2026-04-08); ABN record updated 13 May 2026.
- Scope: neurosurgical devices (epilepsy, brain tumour). No pathogens, toxins or biodefence.

## Company
- Neurospheric Pty Ltd, ABN 48 673 261 473 / ACN 673 261 473, active from 8 Dec 2023, GST from 1 Apr 2024; main business location WA 6009 (Nedlands/Crawley). HQ: Nedlands, Perth, Western Australia.
- Mission (site): transforming drug-resistant epilepsy, brain tumour and other deep-seated conditions requiring surgery through minimally invasive surgical techniques; "precision and flexibility"; "Neurosurgery has not significantly changed in 40 years, we are here to change that."; tagline "Precision in healing, compassion in service".
- Supporters (logos on site): CERI, Perth Biodesign, Perron Institute for Neurological and Translational Science.
- Email: none published (site, WA grant pages, Curtin article, web search all checked). Contact block uses the founders' LinkedIn profiles linked from their own site.

## People
- Assoc. Prof. Hari Ramakonar — Co-Founder, Co-CEO & Chief Medical Officer (site); neurosurgeon, UWA Medicine (Hons); fellowships Toronto (complex spine), Western Ontario (epilepsy), RCH Melbourne (paediatric). Greeting: "Dear Dr. Ramakonar".
- Roshan De Silva — Co-Founder, Co-CEO & Chief Technical Officer; mechanical engineering, robotics, control systems.
- Stephen Alfrich — Business Development Manager. Glen Ross — Advisor (State Sales Manager, Lifehealthcare). Dr Greydon Gilmore — Entrepreneur in Residence (WA scheme).

## Brand
- Logo PNG: near-black #111 wordmark + blue #0f81c7 blob mark; site CSS lighter blue #3d9be9, ink #161616. Concept: navy-black ink #0b0c18 (the hero photo's theatre), bone #f2f4f7, accent #0f81c7 / #3d9be9; their logo recoloured (wordmark to bone) in header and preloader. Hanken Grotesk / Inter / IBM Plex Mono.

## Build notes
- Hero (HOME_BRIEF update option b): Pexels, "Surgeons Performing Surgery in Operating Room" by Fernando Capetillo, https://www.pexels.com/photo/surgeons-performing-surgery-in-operating-room-40482075/ (free licence). Their own photos (pitch photo, OR selfie) are under 1000px wide with a bright white wall. Graded into hero.webp: lamps/gloves compressed, exposure down, shadows to the ink. Right of ~40%, ink wash over the headline, slow Ken Burns.
- Story: engraved coronal section of the head (skull, cortex folds, ventricles, brainstem): deep-seated target → rigid straight path → adaptive jointed path (schematic; no device design is public) → small opening, target reached.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (location, ABN, founders' LinkedIn; no mailto since no email is published).
