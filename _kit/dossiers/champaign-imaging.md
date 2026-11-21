# Champaign Imaging — dossier (home-only build, batch 2026-11c, medtech)

Sources fetched 2026-11-21: champaignimaging.com (/, /nextgen-neuroimaging/, /team/, /news/, /contact/); NIH RePORTER API (org CHAMPAIGN IMAGING, LLC); Europe PMC (affiliation "Champaign Imaging").

## Pre-screen
- Bad site (passes): (1) stock Divi/WordPress template (centred logo over nav, stock brain-scan banner with a translucent box behind the hero text, "Select Page" mobile menu label); (2) stale: footer "© 2024 Champaign Imaging", newest news post Aug 13, 2022, nothing on the Aug 2024 Phase II or the 2025 and 2026 NIMH continuation awards; (3) sloppy copy: the product is "GenNext NP" in the nav but the page URL is /nextgen-neuroimaging/ and its title "NextGen Neuroimaging"; heading "Quite Sequencing" (sic); phone written as "+00.1.651.505.3674"; (4) science explained only in marketing bullets; no technology diagram; stock photos of a child and a doctor.
- Active (passes): NIH NIMH SBIR Phase II 5R44MH122028-05, $1,580,718, award notice 2026-09-03 (https://reporter.nih.gov/project-details/11387527). Also 5R44MH122028-04 $1,358,125 (2025-08-07, /11168945); 2R44MH122028-03A1 $1,390,948 (2024-08-13, /11008691); 3R43MH122028-02S1 $407,385 (2022); 5R43MH122028-02 $524,149 (2021); 1R43MH122028-01A1 $523,149 (2020); 1R43MH115885-01A1 $238,517 (2017). Total ≈ $6.02M (site: "4 NIMH grants to date, totaling over $6 million"). Paper: Chen Y ... Corum CA ... Jacob M, "Accelerating 3D radial MPnRAGE using a self-supervised deep factor model", Magn Reson Med 2025 (PMID 40457622, affiliation Champaign Imaging LLC, Shoreview, Minnesota).
- Scope (passes): MRI hardware/sequences/software for pediatric neuroimaging. No pathogens, toxins or biodefence.

## Company
- Champaign Imaging LLC, Shoreview, Minnesota 55126 (NIH RePORTER; Europe PMC affiliation). No street address published. Phone 651-505-3674 ("651.505.fMRI"), email info@champaignimaging.com (contact page). Formally incorporated 2015. Medical Alley member (footer logo).
- Site claims used: 2 US patents, more pending; in-licensed/optioned a University of Minnesota patent (news: option signed March 18, 2022); investigator site University of Iowa (MRRC tie-up, news Oct 2020); ScanMed selected for pediatric hardware (news Oct 2020); advisory board of MRI clinicians and industry experts.
- GenNext NP (site): head-only coil of proprietary ultra-low MR background material, fits GE Signa MR750 and Signa 3T; quiet sequencing (ZTE, MB-SWIFT, gently ramped gradients), deployed via the GE console; standalone software with motion correction and "ImageSmart Learning"; workstation scan-quality tool with green/yellow/red status. "System in Development. Not for sale."
- Stats (site, with its references): 38% of pediatric neuro MRIs up to age 4 have motion artifacts rendering them unusable (Jaimes et al., AJR 2021); re-scans up to $300,000 per MRI machine per year (Slipsager et al., JMRI 2020).

## People
- Curtis A. (Curt) Corum, Ph.D. — Co-Founder & CEO (team page; bio says President and Co-Founder; NIH: PRESIDENT/CEO, contact PI). Pronouns: site bio uses "He". Greeting: "Dear Dr. Corum".
- Stephen Otto — VP, Business Development (team page).
- Carl J. Snyder — Vice President, PI on the NIMH Phase II (NIH RePORTER only; not on the site).
- Email: no personal address found in the site, RePORTER, Europe PMC or web search; best published: info@champaignimaging.com.

## Brand
- Logo PNG sampled: teal #44887b (upper brain lobe), slate #4a6a8c (lower lobe), black wordmark (Raleway-like light caps). Site accent rgb(68,136,123) = #44887b.
- Built: ink #0a1517 (matched to the graded hero), accent teal lifted to #7dbfb0 on dark, #2f6b60 on light; slate in the story. Mark: the logo's brain cropped from their PNG (pulse line knocked out); wordmark Raleway CHAMPAIGN / IMAGING. Display Literata, text Figtree.

## Build
- Hero (option b): Pexels photo 7089013 by MART PRODUCTION (an MRI scanner: gantry, bore and table), Pexels licence: https://www.pexels.com/photo/photo-of-ct-scan-medical-equipment-7089013/ (CDN https://images.pexels.com/photos/7089013/pexels-photo-7089013.jpeg?w=2600). Pexels titles it "CT scan" but it is an MRI scanner. Not the same frame as omnecoil's 7089017 (front bore close-up); this is the side view with the whole gantry. _kit/home/champaign-imaging/grade.py: maker lettering and model plate softened, light falls off from the bore, tonal tritone to teal/slate, long eased superellipse alpha mask. Placed centred at ~73% of the content width, never upscaled; measured H1/lede-to-first-pixel gap 144px at 1280, 224px at 1440, 227px at 1920x930 and 1920x1080; x6 luminance check: no straight edge (mask floor equals the page ink). Slow Ken Burns; no pointer. Phones: top band fading above the text.
- Story: one engraved axial schematic of a child's head in the head-only coil: loud gradient fronts → gentle ramp (ZTE/MB-SWIFT) → head moves, ghosts, 3D radial spokes and k-space inset → corrected slice and green scan-quality light.
- Build-out pages: _kit/lib/buildout.js (@libs buildout). Technology / GenNext NP / Team / News open #/more/<item>; Contact scrolls.
- Gates: smoke, reveal/anim/clip 1440+390, overlay, masthead, mixed, polish, loader, unstyled, cramped, hoverpad, split, logo, buildout-test, fit-audit, loader-contrast all OK. balance-audit flags the statement as off-centre (the DN statement+stats row; same flag on the approved xcellassay); hero-audit "no title found" (same on xcellassay).
