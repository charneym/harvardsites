# Manhattan BioSolutions, Inc. (slug: manhattanbiosolutions) — HOME-ONLY build, batch 2026-11h

- Site: https://manhattanbiosolutions.com/ (WordPress; read 2026-11-22 through a fetcher, as the host's ModSecurity returns 406 / resets direct requests). Bad-site evidence (v2 sheet 11h-manhattanbiosolutions.jpg): the hero is an empty slate-blue block with a loading spinner and an all-caps headline ("REDEFINING ADC PRECISION: NATURE'S BLUEPRINT, OUR BREAKTHROUGH"); below it a translucent text panel overlaps a blurred protein image; the 150×45 logo is low-resolution; the Team page shows 2 portraits for 16 people (the rest are blank placeholder GIFs) and several people have no bio.
- Domain check: company name, logo and products on the page; investor email published on the site at the domain (borys.shor@manhattanbiosolutions.com); RDAP: registered 2016-01-02, renewed to 2027, InMotion Hosting nameservers; MX → Google Workspace; PubMed 42447867 (July 2026) affiliation "Manhattan BioSolutions, Inc., New York, NY, USA". No newer site on another domain.
- Type: biotech, antibody-drug conjugates for cancer. No pathogen, toxin or biodefence programme in the current platform (a 2020 COVID-19 vaccine collaboration and 2021 synthetic-microbial work appear only in old news; the business is ADCs).
- HQ: JLABS @ NYC, 101 6th Avenue, 3rd Floor, New York, NY 10013; laboratory 80 5th Avenue, Suite 1007, New York, NY 10011 (Contact page). The registry row says Fort Lee, NJ; the site and the 2026 paper say New York.
- Lead: Borys Shor, PhD — Chief Executive Officer (press releases 2024–2025, "Dr. Borys Shor, Chief Executive Officer of Manhattan Bio"; founder and CEO per the 2024 OS Therapies advisory-board release; listed as "Director" on the site's Team page). Also spelled "Boris" in the May 2025 release. Greeting: "Dear Dr. Shor".
- Best published email: borys.shor@manhattanbiosolutions.com (Contact page, for accredited investors; otherwise a contact form).

## Activity (pre-screen OK)
- 2026-07-21: Cell Reports Medicine, "Targeted antibody-drug conjugates for rhabdomyosarcoma and other FGFR4-expressing cancers" (PubMed 42447867), company affiliation.
- 2025-05-08: REACH award (Stony Brook Center for Biotechnology) for the TxD ADC collaboration with Prof. Iwao Ojima (1stoncology.com/blog/?p=103038).
- 2025-04-08: expanded rights to the legumain-cleavable TOP1i ADC platform after validation in three programmes (1stoncology.com/blog/?p=102357).
- 2025-01-30: NCI PIVOT collaboration in pediatric cancers (site News).

## Facts used
- ADCs page: legumain-activated linker, stable in circulation, cleaved by lysosomal legumain after internalisation; legumain upregulated in many cancers; high-throughput FRET screen for cleavable linkers; exatecan-derivative TOP1 payloads (irreparable DNA double-strand breaks); in-house linker and payload libraries, synthetic chemistry, bioconjugation; drawbacks of GGFG and val-cit cathepsin-cleavable linkers.
- April 2025 release: validated across three oncology programmes, first with auristatin then exatecan-derived TOP1i payloads; complete tumour regression with strong durability in several xenograft models; single- and dual-payload designs.
- June 2024 / May 2025 releases: Stony Brook ICB&DD fluorine-containing taxoid payloads; proprietary ADC programme against a tumour-associated glycoprotein highly expressed across aggressive solid tumours.
- 2026 paper: FGFR4 ADCs on the NCI's 3A11 antibody (also used in an NCI CAR T trial, NCT06865664); MMAE and exatecan versions; the exatecan ADC controlled RMS559, RH4, a PDX and MDA-MB-453 breast models (the "4 models" stat).
- Team page: names, titles and the bios condensed (Yu, Psaltos, Mohr, Easton, Raines); advisors Tumey, Shah, Kadouche. Zev Gechtman and Agnes Westelinck have no bio on the site, so their rows show only name and title.

## Palette / type
Logo (mbs-logo-3.png, 150×45): periwinkle wordmark #9ca8c4, green #329832 antibody mark and BIOSOLUTIONS. Ink #0b0f1c (the render's ground), accent green #2b8a30 on light / #74cf78 on dark, periwinkle for the antigen glyphs and secondary tones. Poppins (their site's face) for display, Inter for text. The logo is too small to reuse, so the header carries a redrawn mark (green antibody Y with the periwinkle sphere, as in their logo) beside a typeset "Manhattan / BIOSOLUTIONS".

## Hero
Option (c), a crafted render of the firm's own product class: an antibody-drug conjugate. The antibody is the intact human IgG1 crystal structure PDB 1HZH (RCSB), rendered atom by atom by render.py (space-filling, wrap-lit, SSAO, depth fog, true alpha) at 1145×911; heavy chains in the logo periwinkle, light chains paler, glycans warm grey; four linker-payloads (DAR 4) on surface lysines in the logo green, each a generic camptothecin-class pentacyclic scaffold on a short linker (illustrative geometry, not a disclosed structure). Grepped the repo: no other concept uses 1HZH. Slow breath/drift, no pointer parallax (CZ).

## Story
One continuous scene: ADCs flow intact through a capillary and one docks on a tumour antigen → it is internalised in an endosome and carried to the lysosome, where legumain waits → legumain cuts the linker and the two payloads cross to the nucleus, where the DNA breaks.
