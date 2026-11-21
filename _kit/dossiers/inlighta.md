# InLighta BioSciences (slug: inlighta) — home-only build, batch 2026-11c

- Site: https://www.inlighta.com/ (screenshot 2026-11-21, 1440 wide)
- HQ: InLighta BioSciences L.L.C., Atlanta, GA 30303 (contact page); NIH RePORTER lists the organisation in Marietta, GA
- Lead: Dr. Jenny J. Yang — Founder, Principal Scientist and Acting Chief Scientific Officer (company profile). Now Professor and Presidential Faculty Scholar, Division of Hematology and Oncology, University of Alabama at Birmingham (Emory Winship release, 2026-09-19); formerly Regents' Professor of Chemistry, Georgia State University (AJC, 2020).
- Greeting: Dear Dr. Yang
- Email: JJYang@inlighta.com (contact page and FAQ); phone +1 404-429-1434

## Funding / activity
- NHLBI STTR Phase II 5R42HL170898-03, "Precision MRI with Protein Contrast Agent for Noninvasive Detection of Lung Fibrosis", FY2026, $1,026,874, award notice 2026-09-11, budget start 2026-09-01 (NIH RePORTER appl 11402700). Covers toxicology/PK of ProCA32.collagen (INL-101).
- Prior: 2R42HL170898-02 FY2025 $1,026,874; 1R41DK139927-01A1 FY2024 $323,743; 1R44CA268403 SBIR Phase II 2022-23 ($954,220 + $1,000,000); earlier NCI/NIAAA STTRs back to 2014.
- 2026-09-09 Science Advances, "Early detection of invasive lung cancer and multiorgan metastasis by a collagen-targeted protein MRI contrast agent" (doi 10.1126/sciadv.adz6815); press: GSU 2026-09-09, Emory Winship 2026-09-19, UAB O'Neal 2026-09-19, Inside Precision Medicine 2026-10-11.

## Bad-site evidence (live, 2026-11-21)
1. Company Profile: "Business Advisory Board — TBA" and "Science Advisory Board — TBA", in a carousel that reads "slide 6 to 8 of 5" and repeats every card three times.
2. Contact FAQ is stale: "Phase I clinical trials are planned for the second quarter of 2024".
3. Investors page "Sponsors/Investors" list stops at 2019 and the "Market projection" heading repeats the products blurb; the 2025-26 NHLBI Phase II is not mentioned.
4. Home: three product cards are empty boxes with titles only ("Blood Pool Agents", "Targeted Contrast Agents"); news carousel mixes 2020 items with 2026 and duplicates each item in the markup.
5. Generic stock hero (glowing holographic liver) and stock lab video thumbnail; footer credit "Small business marketing agency"; brand typo "ProCa®" vs "ProCA®"; targets list includes "CXCR12" (sic).

## Build notes
- Palette sampled from live CSS: navy #051622 (--ink), green #80cc48 (--accL), #56ad2a darkened to #3b7a1c (--acc), teal #7ebec5. Wordmark in Lato italic like the logo PNG (https://www.inlighta.com/wp-content/uploads/2024/01/Logo.png).
- Hero (option c): crafted render of human alpha-parvalbumin, PDB 1RJV (RCSB, NMR model 1), the scaffold ProCA32 is derived from (inlighta.com Investors overview). Rendered offline by _kit/home/inlighta/pv.py, real alpha, no box edge.
- Story: fine-line chest schematic; ProCA particles travel the vessel tree, blood-pool contrast, collagen-targeted nodules (schematic, illustrative).
