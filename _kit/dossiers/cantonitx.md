# Cantoni Therapeutics B.V. (slug: cantonitx) — HOME-ONLY build, batch 2026-11h

- Site: https://cantonitx.nl/ (WordPress, read 2026-11-23; Home with Indications/Science anchors, Team, News & events). Domain check: company name, logo, team, news posts and info@cantonitx.nl on every page; the BioSpace release of 16 Sep 2025 gives info@cantonitx.nl as the company contact. No newer site on another domain.
- Bad-site evidence: dated look; a washed-out stock lab photo (man at a microscope) behind a heavy condensed "ABOUT US" heading, an embedded video player box sitting over the text; raster logo; red-link nav.
- Type: preclinical biotech, small-molecule bisubstrate NNMT inhibitors for obesity and its cardiometabolic complications. Spun out of Leiden University (2022). No pathogen/toxin science.
- HQ: Pivot Park, RK-Building, Kloosterstraat 9, 5349 AB Oss, the Netherlands (site footer; release dateline "OSS, Netherlands"). Registry note said Leiden; the company's own address is Oss.
- Lead: Annegret van der Aa, PhD, CEO and Executive Director (Team page; joined July 2024). Greeting: "Dear Dr. van der Aa".
- Best published email: info@cantonitx.nl (site; BioSpace release contact line "info@cantonitx.nl, Annegret Van der Aa, CEO & Executive Director, +32 473 525 648"). No personal address published.

## Activity (pre-screen OK)
- 2025-09-16: financing (lead investor Libertatis Ergo Holding, with BOM, an angel investor and Brabant Startup Fund) to advance the lead asset into IND-enabling studies; Novo Nordisk validatioNN grant. https://cantonitx.nl/cantoni-therapeutics-secures-financing/ and https://www.biospace.com/press-releases/cantoni-therapeutics-secures-financing-to-advance-novel-non-incretin-obesity-drug-into-ind-enabling-phase
- 2026-05: BioEquity Europe (Prague) and preclinical poster PO1.073 at ECO 2026, Istanbul. https://cantonitx.nl/cantoni-on-the-road-in-may/
- Also Oct 2025 Obesity Drug Development Summit Barcelona; Nov 2025 BIO-Europe, LSX (Series A fundraising).

## Facts used
- About, Indications (obesity, CVD, insulin resistance, high triglycerides, low HDL; 65% discontinue incretin AOMs within a year; WHO/WOF prevalence figures), Science (NNMT: NA + SAM -> MNA + SAH; NAD+ and methionine cycles; bisubstrate inhibitors bind SAM and NA pockets, most potent described to date), financing release (fat mass reduced without loss of lean mass, increased energy expenditure, preclinical), Team page (management, board, SAB; summaries shortened, nothing added; NWO Open Technology grant of 1 M€ from van Haren's bio).

## Palette / type
Logo (wp-content/themes/cantoni/img/logo.png, 1257x450): wordmark black, atoms red #eb0000, bonds grey #7d7d7d. Mapping: cool graphite ink #121315, accent #d10000 (buttons), #c20000 on bone, #ff4d40 on ink; bone #f6f4f1. Type: Barlow Semi Condensed (display, after the condensed wordmark), Inter (body), IBM Plex Mono (labels). Logo redrawn as SVG by _kit/home/cantonitx/logo.py: molecule with gradients at the measured centres/radii; wordmark Antonio Bold (closest Google match) fitted to the original ink boxes.

## Hero
Option (c), crafted render of their own mark as a real object: the logo's ball-and-stick molecule (glossy red atoms, steel bonds) turned in 3D under a studio softbox, ray-traced by _kit/home/cantonitx/hero.py (numpy) on black and drawn additively onto the ink (no image edge). Slow breathing drift. Unique to this site.

## Story
One fine-line drawing: fat cell (lipid droplet, nucleus at rim), zoom on NNMT with its SAM and NA pockets, NAD+ and methylation cycles. Steps: NNMT overexpressed; SAM + NA -> SAH + MNA, cycles drained; bisubstrate inhibitor in both pockets; droplet shrinks (fat mass down, lean mass kept, preclinical), cycles run again.

## Nav
Science / Indications / Team / News open build-out pages (#/more/<item>, _kit/lib/buildout.js); Contact scrolls to the contact block (mailto, address, LinkedIn).
