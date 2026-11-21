# OmicXHealth (slug: omicxhealth) — HOME-ONLY build, 2026-11-21

- Site: https://www.omicxhealth.com/ (Wix, "Wix.com Website Builder" generator). Nav: Home / About / Our Work / Company One Pager (a PDF) / Contact Us / Blog / Interest List Sign Up.
- Type: US diagnostics startup (SPEC §2c). OmicXScreen: cfDNA methylation + AI/ML blood test for early cancer detection (liver cancer first). Oncology diagnostics; no pathogens, toxins or biodefence.
- HQ: San Ramon, CA 94582 (NIH RePORTER org record, OMICXHEALTH, INC., UEI C5ZJMW81QNK5); the site footer says "San Francisco Bay Area, CA, USA".
- Email: info@omicxhealth.com (site footer and one-pager). No personal address found on the site, PMWC page, NIH record or accelerator listings.
- Lead: Mythili Subharam, MS, Founder and CEO (PMWC 2026 speaker page https://pmwcintl.com/speaker/mythili-subharam-514_omicxhealth_2026sv; contact PI on NIH 1R43CA310377-01A1). The PMWC bio uses "her". Greeting: "Dear Ms. Subharam".

## Facts used
- NIH RePORTER 1R43CA310377-01A1 (NCI SBIR Phase I), "OmicXScreen: AI/ML-Powered, DNA Methylation Profiling Test for Early HCC and Esophageal Cancer Detection": $405,305, award notice 2026-08-06, project 2026-09-01 to 2027-08-31. https://reporter.nih.gov/project-details/11404601. Abstract: WGBS + patent-pending "Sequence Once, Analyze Many Times"; ~90% accuracy for HCC on public datasets; Aim 1 HCC validation on 100 biobank plasma samples (40 HCC, 40 esophageal, 20 healthy) via a CLIA partner; Aim 2 esophageal (primarily EAC) classifier on the same samples; ultrasound + AFP and endoscopy have low sensitivity.
- omicxhealth.com 2026 updates: TechCrunch Disrupt 2026 Startup Battlefield 200 (Health and wellness); NIH/NCI SBIR grant funding a blinded validation study of OmicXScreen for early liver cancer detection at UT Southwestern; lung cancer classifier completed (second validated type after HCC); platform PoC expanded to six cancer types (MCED roadmap); peer-reviewed manuscript in Military Medicine; CVC HCC Biomarker Symposium talk "Sequence Once, Detect Many"; PMWC 2026 showcase; AASLD 2026 poster. 2025: patent filed; NSF I-Corps and NCI STEP; SCU Bronco Ventures Accelerator 2025 cohort; MHSRS.
- One-pager (PDF, Oct 2026): "Catch Cancer Early. Save Lives."; multiple orthogonal signals (methylation, fragmentomics, copy number) from a single WGBS run; new signals ship as a model update, not a new wet-lab assay; transparent signal-level results; off-the-shelf reagents, no owned lab, licensable to large labs after regulatory approval; NCI SBIR-backed; 90% vs 14% five-year survival localized vs distant (NCI SEER).
- PMWC bio: 25+ years building and scaling data-driven software platforms in enterprise and consumer technology.
- Blog posts (Aug 2026): Battlefield 200; AASLD 2026 abstract "Early HCC Detection Using Multi-Expert Machine Learning on Cell-free Whole Genome Bisulfite Sequencing Data"; PMWC 2026 reflections.

## Activity (since 2025-05-18)
- 2026-08-06: NCI SBIR Phase I award, $405,305 (NIH RePORTER).
- Aug 2026: TechCrunch Startup Battlefield 200; AASLD 2026 poster acceptance (company blog).
- Nov 5–9, 2026: AASLD poster presentation.

## Bad-site evidence
- Wix template site; the "About" section carries an AI-style cartoon illustration of a researcher; the hero is a stock "blue-futuristic-waves-background-with-computer-code-technology" image (that is its file name).
- Outdated copy: "By the end of 2024, we aim to have a generalized model ready for clinical trials" is still on the home page in late 2026; the "Our Story" text still describes only the early public-dataset work.
- No team page and no named people anywhere on the site; contact page is a form at /contact-8-1 (template slug); "Company One Pager" in the main nav is a raw PDF link; mixed fonts in the milestone list.

## Palette
- Sampled from the live site: hero ground #091225 → --ink #081022; wordmark and section-band blue #0052aa → --acc; lifted #6aa6f5 → --accL on navy. Wordmark face Caudex (their own). Logo mark (magnifier with ribbon) cut from their logo JPG and recoloured white.

## Hero / story
- Hero (update option c, crafted render of the real mechanism): space-filling nucleosome core particle from RCSB PDB 1KX5 (1.9 Å; https://www.rcsb.org/structure/1KX5), rendered offline by home/omicxhealth/nucleosome.py (sphere shading, depth AO; DNA in brand blue, histones slate; disordered histone tails trimmed). Caption ties it to cfDNA. Unsplash/Pexels were not reachable from the build environment (401/403), so no photo was used.
- Story: one engraved cfDNA double helix, kept on screen for three steps: draw (fragment ends), bisulfite sequencing (methyl marks; unmethylated C reads as T), analysis (methylation, fragment length, copy number → models). Sequence illustrative.
