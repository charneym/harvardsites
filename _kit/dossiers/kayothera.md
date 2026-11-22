# Kayothera, Inc. (slug: kayothera) — HOME-ONLY build, batch 2026-11g

- Site: https://kayothera.com/ (WordPress/Divi; read 2026-11-22). Bad-site evidence: stock Divi template; the home hero is a boxed grey panel holding a stock cell render with a centred all-caps four-line headline; the Investors page is an unlabelled wall of seven logo JPG/PNG tiles under "INVESTORS" and an empty "Grant Funding" heading; the team page is a uniform Divi grid of 400x290 photo crops with all-caps names and no bios; Divi's default "Select Page" mobile-menu label; the pipeline is three text paragraphs with no stages.
- Domain check: company name, team, Seattle office/lab and info@kayothera.com on kayothera.com; press releases (2023–2026) on the same domain say "visit www.kayothera.com"; NIH RePORTER lists Kayothera's SBIR awards (R43DK136420, R43CA278127, PI Mark Esposito, org address Princeton, NJ). No newer domain.
- Type: biotech, oral small-molecule inhibitors of the retinoid nuclear receptor pathway (ALDH1A3/ALDH1A2) for type 2 diabetes, obesity, male contraception, cancer immunotherapy research. No pathogens, toxins or biodefence.
- HQ: Seattle, WA. Office 2815 Eastlake Ave East, Suite 300, Seattle, WA 98102; lab CoMotion at Fluke Hall, Rm 304, 4000 Mason Road, Seattle, WA 98195. T 206-957-7300. (NIH grantee address: Princeton, NJ.)
- Lead: Thong Q. Le, President and CEO, Board Member (Team page; also Senior Managing Director of Accelerator Life Science Partners per the 2023-07-19 release). No pronouns or doctorate published: greeting "Dear Thong Le".
- Best email: info@kayothera.com (contact page). No personal address published (searched site, releases, NIH RePORTER, web).

## Activity (pre-screen OK)
- 2026-02-10: Clinical Advisory Board expansion (Buse, Giorgino, Kahn) — https://kayothera.com/kayothera-announces-expansion-of-clinical-advisory-board/
- 2026-01-05: Ludwig Princeton release on retinoic acid and DC vaccines; PubMed 41491403 with company affiliation.
- 2025-10-14 iScience paper; 2025-09-23 KAYO-1732 development candidate; 2025-06-21 ADA Innovation Challenge winner.

## Facts used
Home/Science/Team/News/Contact pages; releases 2023-07-19 ($14M total support; ALSP lead, BioAdvance, Pier 70 Ventures, WRF Capital, NJ Health Foundation; 7G BioVentures from the Investors page logos; NIH SBIR NIDDK/NCI; Andy Hill CARE Fund), 2025-06-21, 2025-09-23, 2025-10-14 (1 of 12 classic NR pathways undrugged; hybrid computational + HTS screen), 2026-01-05, 2026-02-10 (>80% β cell function lost at diagnosis; Banting medals). Pipeline per the Science page (KAYO-1732 diabetes, KAYO-2000 obesity, KAYO-1609 male contraceptive); KAYO-1609 "completed IND-enabling studies" per the 2025-06-21 release.

## Palette / type
Logo Kayothera-Logo-Type.png: "KAYO" #009444, "THERA" #808285, light geometric sans. Ink #07110d, accent #009444 / #5fcf8e, bone #f3f6f4. Montserrat (their site's font) for wordmark/text, Newsreader display.

## Hero
Option (c): crafted render of the firm's real target. Human ALDH1A3 tetramer from RCSB PDB 5FHZ (ALDH1A3 with NAD+ and retinoic acid; https://www.rcsb.org/structure/5FHZ), smooth molecular surface with studio light and AO, rendered offline by `_kit/home/kayothera/render.py` (angles -1.3 1.0 0.1, S=1300); residues within 4.6 Å of the bound retinoic acid in logo green, NAD+ pale green; real alpha, never upscaled; slow drift, no pointer response. Unique in the repo (grep 5FHZ/ALDH1A3: no other site).

## Story
One fine-line cell: membrane, nucleus with DNA and the RAR·RXR pair, ALDH1A3 in the cytoplasm. Source: retinol enters, ALDH1A3 makes retinoic acid. Receptor: RA enters the nucleus, receptors switch on, transcripts leave. Block: a Kayothera inhibitor sits in the enzyme; no ligand, receptors quiet. Schematic.
