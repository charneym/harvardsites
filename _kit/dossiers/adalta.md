# AdAlta Limited (slug: adalta) — HOME-ONLY build, batch 2026-11i

- Site: https://adalta.com.au/ (WordPress, read 2026-11-23; Home, Corporate overview, Management, Board, East to West strategy, East to West product pipeline, AD-214, Fibrosis, i-bodies, Contact). Domain check: company name, logo, ABN 92 120 332 925 and enquiries@adalta.com.au on the site; the domain is the one printed on every ASX announcement ("www.adalta.com.au"); investor hub at investorhub.adalta.com.au. No newer site on another domain.
- Bad-site evidence: dated WordPress theme; hero slider with the headline cut off under the nav ("AdAlta's 'East to West' strategy" clipped at the top) over a generic stock cell render; cramped small-text columns; plain outlined input-style buttons ("More Info", "Subscribe here"); the "Latest News" block prints a raw shortcode "[irmlist=199]"; footer shows both "© 2026" and "© 2016 AdAlta Limited"; the management intro still says the team is "focused on progressing the lung fibrosis therapy, AD-214, into the clinic".
- Type: ASX-listed (1AD) clinical-stage biotech, cellular immunotherapies for solid cancers ("East to West" strategy), lead CAR-T EW-001 (formerly BZDS1901, mesothelin) in mesothelioma; AD-214 (anti-CXCR4 i-body Fc-fusion) for IPF/kidney fibrosis available for partnering. The legacy anti-malaria asset WD-34 is NOT shown on the concept (pathogen science excluded).
- HQ: Suite 1.01, 117 Camberwell Road, Hawthorn East VIC 3123, Australia (Melbourne); China representative office, Room 2263, 22/F Tower 3 Raffles City Changning, 1193 Changning Road, Shanghai.
- Lead: Dr Tim Oldham (PhD), CEO & Managing Director (since Oct 2019). Greeting: "Dear Dr. Oldham".
- Best published email: ir@adalta.com.au (contact line of the ASX announcements, under Tim Oldham, CEO & MD, P: +61 403 446 665); general enquiries@adalta.com.au (Contact page). No personal address published.

## Activity (pre-screen OK)
- 2026-09-02 ASX: partner to provide BZDS1901 CAR-T to advanced mesothelioma patients under a special access scheme in China. https://announcements.asx.com.au/asxpdf/20260902/pdf/073m7zkv9p1mn6.pdf
- 2026-08-10 / 08-05 ASX: EW-001 survival updates (two-year CR milestone). https://announcements.asx.com.au/asxpdf/20260805/pdf/072fjx713n8gbs.pdf
- 2026-05-25 FDA advisors; 2026-05-04 A$2.5m placement; 2026-04-29 first Australian manufacturing work order; 2026-04-01 clinical update.

## Facts used
- Site: East to West strategy text; in-license clinic-ready products from Asian originators, FDA-acceptable manufacturing, first studies under FDA IND largely in Australia, on-license; 90% of cancers are solid tumours; Asia leads in clinical trials (61%); CAR-T description; pipeline under exclusive negotiation (lung, colorectal, gastric, other solid tumours); AD-214 anti-CXCR4 i-body Fc fusion, Orphan Drug Designation (IPF, 2017); team and board bios (shortened, nothing added).
- ASX 1 Apr 2026: mesothelin target; IITs run by Shanghai Cell Therapy Group; 14 Gen 2 patients; 50% ORR and 20% CR at higher doses (10 patients); Gen 2 process under two days, 5–10% of Gen 1 dose. ASX 5 Aug 2026: renamed EW-001; first CR two years without recurrence; manufacturing transfer to Cell Therapies Pty Ltd and pre-IND meeting, both H2 CY2026; AD-214 two successful Phase I studies, available for partnering; IIT caveat quoted.

## Palette / type
Logo (wp-content/uploads/2025/10/AdAlta-Logo4-1-scaled.jpg, 2560x767): slate ground ~#2d3e46, peak mark red #ed1c24 with deeper facets ~#b2282f/#a0262e, white geometric wordmark. Site: white ground, slate nav #32373c. Mapping: slate ink #1c272d, accent red #d9161e / #c0141b on light and #f2575b on ink. Type: Jost (geometric, like the Futura-style wordmark), Lato body, IBM Plex Mono labels. Logo redrawn as filled SVG paths by _kit/home/adalta/logo.py (potrace of the 2560px original, mark in its three reds). Favicon from the mark.

## Hero
Option (c), crafted render: a single T cell in the look of a scanning electron micrograph (sphere with microvilli, cool slate light), z-buffer of spheres rendered by _kit/home/adalta/cell.py on black, drawn additively onto the ink (no image edge). Slow breathing drift. Unique to this site.

## Story
CAR-T in four steps on one fine-line scene: T cell collected; CARs appear; expanded copies; CAR-T moves to the mesothelin-bearing tumour cell, binds, the cell breaks down.

## Nav
Strategy / Pipeline / Team / News open build-out pages (_kit/lib/buildout.js); Contact scrolls to the contact block.
