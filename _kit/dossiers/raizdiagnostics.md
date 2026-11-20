# Raiz Diagnostics (slug: raizdiagnostics) — HOME-ONLY build, 2026-11-20

- Site: https://raizdiagnostics.com/ (Squarespace; www.raizdx.com serves the same page). Whole content: the logo on white, one headline on a black band ("An end-to-end, treatment-defining lymphoma diagnosis. World-class expertise, built into the method."), "Updated site coming soon.", a newsletter sign-up, and footer links "Contact Us • Limited Beta Access • FCOI Documentation". /contact returns "The page you are looking for has been moved or deleted."
- Type: US diagnostics startup (SPEC §2c). Gene expression diagnosis of lymphoma (oncology). No pathogens, toxins or biodefence.
- HQ: Raiz Diagnostics, Inc., Boston, MA 02111 (NIH RePORTER organisation record, UEI TFZ3K4BJD662). No street address is published.

## Bad-site evidence
1. "Updated site coming soon." — a placeholder with one headline and no other content.
2. No science, product, team, news or investor information anywhere on the site; LymphomaDx is not named.
3. The "Contact Us" link goes to a 404 ("The page you are looking for has been moved or deleted."); no email address on the site.

## Activity (since 2025-05-18)
- 2026-08-26: NCI SBIR Phase II year-2 award 5R44CA310364-02, $520,000 — https://reporter.nih.gov/project-details/11417251
- 2025-09-16: NCI SBIR Phase II award 1R44CA310364-01, $1,770,000, "Scaling Lymphoma Diagnosis: A Cost-Effective Gene Expression Assay for Broad Implementation" — https://reporter.nih.gov/project-details/11314071 (project 2025-09-17 to 2027-08-31)
- 2025-09-12: FCOI policy effective (raizdiagnostics.com/s/Raiz_Diagnostics_FCOI.pdf)

## People
- Timothy Guyon — CEO & Co-Founder (FCOI policy, point of contact). PI (non-contact) on the NCI award. Co-author of Valvert et al., Blood Advances 2021 (then at DxTerity Diagnostics). No pronouns or degree published → greeting "Dear Timothy Guyon".
- Edward Briercheck — contact PI on the NCI award (RePORTER). Co-author of the 2021 paper (then University of Washington / Fred Hutchinson Cancer Research Center). Title at Raiz not published.
- Email: compliance@raizdx.com (the only published address; FCOI contact).

## Science (used on the page, all from the award abstract unless noted)
- LymphomaDx: low-cost, same-day assay; presence and subtype of lymphoma; gene expression profiling of FFPE core needle biopsies; proprietary chemical ligation probe amplification (CLPA) + locked machine-learning algorithm; no pathology morphology review.
- Preliminary data: 94% concordance with expert consensus, outperforming individual reviewers; works with low-input tissue.
- Exclusive rights to core IP; secured access to >2,500 annotated biopsy specimens across multiple institutions.
- Problem: iterative IHC, turnaround of weeks, discordance >20%; community hospitals lack hematopathologists.
- Aims: (1) 2,500-case training/validation, benchmarks ≥95% sens/spec, ≥90% top-1 in key subtypes (DLBCL, FL, HL, CLL/SLL); (2) CLIA LDT validation; (3) QSR development and FDA Q-sub toward an IVD kit.
- Valvert et al., Blood Advances 5(10):2447–2455, 2021, doi:10.1182/bloodadvances.2021004347: CLPA with PCR and capillary electrophoresis readout (story step 3).

## Brand
- Logo (Squarespace Raiz-logo-v.png): black line mark (root lines in an oval) + "RAIZ / DIAGNOSTICS"; one pixel-sampled hue, cyan rgb(0,174,239) = #00aeef (the dot).
- Mapping: logo black → --ink #0a0c0f; #00aeef → --accL (accents on dark); deep shade #00739f → --acc (fills, accents on light; 4.9:1 on white); white ground → --bone #f3f5f6. Site fonts Montserrat + Source Serif 4 (italic) kept.
- Mark and wordmark are the real logo, extracted to alpha masks (mark.png, word.png); the dot is redrawn in cyan.

## Hero
- Real photograph (HOME_BRIEF update 2b): Pexels photo 36816507, "blue-stained microscope slide of tissue sample" — https://www.pexels.com/photo/blue-stained-microscope-slide-of-tissue-sample-36816507/ (Pexels licence). Graded by home/raizdiagnostics/grade.py (saturation .55, nudged toward the logo cyan, darkened), clipped to its eyepiece circle, right of ~50% and bleeding off the right edge, strong ink scrim on the left. Slow Ken Burns breath, no pointer motion.
- Story: one schematic bench kept on screen: FFPE cassette with core biopsy → CLPA probe pairs joining on RNA → copies to a readout trace → locked classifier bars, one subtype called. Labelled "SCHEMATIC · NOT PATIENT DATA".
