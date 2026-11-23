# Amporin Pharmaceuticals AG (slug: amporin) — HOME-ONLY build, batch 2026-11h

- Site: https://amporin.com/ (edit.site builder, read 2026-11-23 in a browser; curl gets 403; pages Home, Company, Science, Strategy, Pipeline, Partnering, News, Contact). Domain check: company name, logo, team, news and footer "© 2026 Amporin Pharmaceuticals AG | Oberwilerstrasse 54, 4054 Basel | Company No. CHE-337.200.500" on every page; the Venture Kick one-pager (June 2026) gives www.amporin.com and info@amporin.com. No newer site on another domain.
- Bad-site evidence: amateur look; rainbow pore logo pasted over a pastel collage banner of protein renders; a purple strapline bar; dense bold purple text blocks; a strip of numbered step icons; cookie bar over the content.
- Type: preclinical biotech, oral small molecules that block or eliminate toxic membrane pores formed by misfolded protein oligomers (Parkinson's, Alzheimer's, Type 2 diabetes; future ALS, PSP, FTD, HD). No pathogen, toxin or biodefence science.
- HQ: Tech Park Basel, Hochbergerstrasse 60C, 4057 Basel; registered office Oberwilerstrasse 54, 4054 Basel (Contact page). Tel +41 78 749 49 36.
- Lead: Kelvin Stott PhD, CEO and Co-founder (Company page). Greeting: "Dear Dr. Stott".
- Best published email: kelvin.stott@amporin.com (Amporin 1-pager, 4 June 2026, Venture Kick: https://www.venturekick.ch/demandit/files/M_BB941CC4DCEF687AD98/dms//File/Amporin-1-pager-4June2026.pdf). General: info@amporin.com (same document). The website itself has only a contact form.

## Activity (pre-screen OK)
- 2026-10-07: "Amporin presents its unique seed investment opportunity at 26th Annual Biotech in Europe Forum during Sachs Autumn Life Sciences Week in Basel" (amporin.com, News).
- Also 2026: strategic focus update (1 Jul), SynSmart collaboration (20 Apr), board appointments RJ Tesi and Torben Skarsfeldt (13 Mar), University of Waterloo collaboration with Prof. Zoya Leonenko (26 Feb).

## Facts used (amporin.com Home, Company, Strategy, Pipeline, News, Contact)
- Founded in Basel in 2024 (incorporated 18 Apr 2024) by Kelvin Stott, Hervé Schaffhauser and Daniel Umbricht; "more than 80 years of collective R&D leadership experience".
- Mechanism: pores in cell and mitochondrial membranes; ionic short circuit; uncontrolled calcium influx; mitochondrial dysfunction, oxidative stress, cell death. Strategy: block or eliminate pores, restore membrane integrity, stop calcium influx, rescue mitochondria, restore homeostasis and function; viable but dysfunctional cells; rapid biomarker-based proof of concept; puncture/road analogy.
- Pipeline: AMP-PD (αSyn), AMP-AD (Aβ/tau), AMP-DM (IAPP), all Screening / Hit Identification; AD and DM available for partnering; future ALS, PSP, FTD, HD.
- Recognition: Venture Kick final stage (CHF 150K), Kickfund (CHF 100K), Venture Leaders Biotech 2025, 3rd place Venture 2022.
- Team and board summaries shortened from the Company page, nothing added.

## Palette / type
Logo emblem SVG (amporin.com/__static/.../Amporin-Emblem-Clear.svg): purple ring #5f2987 with rainbow arrows (#0070c0, #00b0f0, #92d050, #ffff00, #ffc000, #ff6600, #c00000). Site: white ground, purple #5f2987 headings, Montserrat. Mapping: violet-black ink #130e19, accent #5f2987 on light, lilac #b98de0 on ink, solid buttons #7a3fa8, lavender bone #f6f3f9. Type: Montserrat (display), Open Sans (body; the logo's face), IBM Plex Mono (labels). Logo redrawn by _kit/home/amporin/logo.py: their own emblem SVG paths in place of the O, AMP/RIN in Open Sans Bold and "Pharmaceuticals" in Open Sans Regular, matched to the logo PNG's layout; letters in currentColor (bone on ink). Favicon rendered from the emblem.

## Hero
Option (a): the firm's own render of a toxic membrane pore (amporin.com, Amporin-Pore-2(2).png, 756x720, a ring of oligomer subunits in the emblem's rainbow on black), drawn additively onto the ink at or below native size (no image edge), turning a few degrees and breathing very slowly; no pointer response.

## Story
One fine-line membrane cross-section: lipid bilayer, calcium ions outside, two mitochondria inside. Steps: oligomer subunits assemble into a pore; calcium streams through and overloads the mitochondria; an Amporin inhibitor docks in the pore and the stream stops; the mitochondria recover.

## Nav
Science / Pipeline / Team / News open build-out pages (#/more/<item>, _kit/lib/buildout.js); Contact scrolls to the contact block (mailto info@amporin.com, phone, both addresses). News rows link to amporin.com/news.
