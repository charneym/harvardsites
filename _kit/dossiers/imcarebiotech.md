# ImCare Biotech, Inc. — dossier (home-only build, batch 2026-11e, diagnostics / liver cancer)

Sources, fetched 2026-11-20: imcarebiotech.com (home, /about-us/, /imcare-team/, /research/, /news-events/, /contact-us/, /careers/, post of 2026-05-19 "Imcare Biotech Showcases LC-SPIK ... at the CVC HCC Biomarker Symposium", post list); NIH RePORTER (org IMCARE BIOTECH: R43/R44CA165314 2012–2023, SB1CA165314 2021, 1R43CA302053-01 2025).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-imcarebiotech.jpg): stock template; hero slider of a yellow flower in grass with round arrow buttons and a white headline; duplicate logo in a grey world-map address block; no product imagery; several pages intermittently return "Service Unavailable" (team, research, news all failed on first fetch 2026-11-20).
- Active: NIH NCI SBIR Phase I 1R43CA302053-01, $364,763, notice 2025-06-20, "A novel multi-analyte algorithmic assay diagnostic for hepatocellular carcinoma (HCC)" (contact PI Bobby Kumar Biswal, VP Engineering): https://reporter.nih.gov/project-details/11181451. Also: site post 2026-05-19 (CVC HCC Biomarker Symposium, Dallas, May 16, 2026); blog post 2025-09-23.
- Scope: cancer diagnostics (blood test) and a small-molecule anti-cancer programme. Early-career publications concern hepatitis B/C biology, but no pathogen, toxin or biodefence work is offered or developed. In scope.

## Company
- Founded 2011 by Dr. Xuanyong Lu, formerly a professor at Drexel University's Institute for Biotechnology and Virology. Main R&D centre: 3805 Old Easton Road, Doylestown, PA 18902 (lab for molecular biology and tissue culture). Phone (+1) 215-489-4906. Email info@imcarebiotech.com (the only published address).
- Mission (site): quality diagnostic and pharmaceutical products for cancers and long-term illnesses. Vision: a leading biomedical technology company in liver disease and liver cancer.
- Seravue®: liver cancer diagnostic kit, quantitative assessment of LC-SPIK (liver cancer-specific serine protease inhibitor Kazal), "secreted only in cases of liver cancer"; for HCC and ICC; vs AFP "superior accuracy and broader applicability"; available as RUO kit. FDA Breakthrough Device Designation (May 2026 post). Aggregated data from over 1,200 patients across multiple cohorts (May 2026 post).
- Seravue AI (RePORTER 1R43CA302053 abstract): LC-SPIK + AFP + DCP measured by ImCare's ELISA assays, AI algorithm with clinical information, simple blood sample; 300 serum samples planned.
- Drug development: SPIK binds granzyme A and suppresses GzmA cytolysis; compounds IMB101 and IMB102 inhibit SPIK in vitro, IC50 ~1 µM, CC50 >100 µM.
- Funding history: NCI SBIR Phase I 2012, Phase II 2015–2018, Phase IIB Bridge Award up to $4M (Oct 2021 post), SB1 2021, R43 2025.
- Publications: Diagnostics 2024 14(7):725 (doi 10.3390/diagnostics14070725); Clin Transl Gastroenterol 2020 11(12):e00271; Univ. of Turin study in Current Oncology (Aug 2022 post).

## People (site /imcare-team/)
- Aaron Yefei Lu — Chief Executive Officer (MBA LBS, BA Stanford; ex-McKinsey). Bio uses "his". Greeting: "Dear Mr. Lu".
- Xuanyong Lu, PhD — President & Co-Founder. Karteek Kadimisetty, PhD — CSO. Matthew Lee — COO. Bobby Biswal — VP of Engineering (contact PI on the 2025 NCI award).

## Brand
- Live site: white, logo purple #7030a0 and lavender #d5b8ea (sampled from the logo PNG; custom.css also #9a57cd, #f3ecf9). Concept: deep plum ink #140c1c, lavender-white bone #f6f2f9, accent lavender #d5b8ea on dark and logo purple #7030a0 on light. Logo reversed for the dark ground (purple -> #f3ecf9, lavender kept). Figtree type (rounded humanist, close to the logo lettering).

## Build notes
- Hero (HOME_BRIEF update option b): National Cancer Institute, "Six blood samples in test tubes" (title "White and red plastic tools"), Unsplash License: https://unsplash.com/photos/white-and-red-plastic-tools-9k4Fglw6eFQ — CDN https://images.unsplash.com/photo-1581594693702-fbdc51b2763b (2800 px). Graded by _kit/home/imcarebiotech/grade.py (global colour remap: yellow rack -> plum, lavender caps kept near the logo lavender; edges feathered to transparent) to imcarebiotech/hero.webp. Tubes centred ~70% width right of the text, ink wash on the headline side, slow Ken Burns. ImCare's own photos (lab 3-panel 1024 px, stock microscope/pills) are too small/stock for option (a).
- Story: engraved schematic accumulating liver with tumour -> LC-SPIK into a blood sample (serum over cells) -> ELISA well with capture antibodies holding LC-SPIK -> LC-SPIK, AFP, DCP bars combined into Seravue AI.
- Nav items (Technology, Pipeline, Team, News) open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto info@imcarebiotech.com, address, phone).
