# ThromBio (slug: thrombio) — HOME-ONLY build, batch 2026-11j

- Site: https://www.thrombio.com.au/ (React single-page app, read 2026-11-24; pages About, Leadership (Board, Senior Management, Corporate Advisors), Technology (Lead Candidate, Lead Indications), Clinical Trial (STARS, Co-STARS), Publications, Media, Contact). Domain check: the og/twitter tags, logo, team, TBO-309 programme and media pages are ThromBio's; the bundle carries info@thrombio.com.au; LinkedIn company "thrombioholdings" is linked; ClinicalTrials.gov lists "ThromBio Pty. Ltd." as lead sponsor of NCT06813651. No newer site on another domain.
- Type: clinical-stage biotech; TBO-309 (formerly AstraZeneca's AZD6482), an antiplatelet PI3Kβ inhibitor, as an adjunct to reperfusion therapy in acute ischaemic stroke. Out-of-scope check: no pathogens, toxins or biodefence.
- HQ: Sydney, NSW, Australia (BIO convention company listing, Dealroom, PharmaCompass; the site gives no street address, the contact page is a form only). Legal name on the site: ThromBio Holdings Pty Ltd.
- Lead: Peter Bush, Chief Executive Officer (site, Senior Management; BIO 2024 listing). No pronouns or title published: greeting "Dear Peter Bush".
- Best published email: info@thrombio.com.au (in the site's code, the only address published). No personal address found (site, ClinicalTrials.gov lists only investigators, web search).

## Activity (pre-screen OK)
- ClinicalTrials.gov NCT06813651 (Co-STARS), ThromBio Pty Ltd lead sponsor, Phase 2, first posted 2025-02-07, started 2025-10-04, recruiting, 78 patients (est.), last update 2025-11-25. https://clinicaltrials.gov/study/NCT06813651
- ClinicalTrials.gov NCT05363397 (STARS), Florey Institute sponsor, Phase 2, recruiting, last update 2025-12-01.
- Site Media: 5 Jul 2026 Gordon Research Conference keynote (Shaun Jackson); 29–30 Apr 2026 Newcastle Herald and NBN News on STARS results and the NSW Premier's visit to John Hunter Hospital; 20 May 2025 Nature paper.

## Bad-site evidence
Near-black page with a blurry low-resolution logo raster (with a baked drop shadow) beside a white clip-art brain outline with a red cerebellum, and almost nothing else above the fold; content is buried in drop-down sub-pages; inconsistent headings ("Our Lead Candidate" vs "Our Leading Candidate"), typos ("Unexpectantly", "thrombvectomy"), contact page with a form but no address or email.

## Facts used (thrombio.com.au unless noted)
- Mission: advance the global standard of care for stroke with novel anti-thrombotic drugs of unprecedented safety and efficacy; "Innovators in Stroke Therapy" (their tagline, used as the H1).
- Technology: PI3Kβ critical regulator of platelet function and thrombosis (Jackson et al, Nature Medicine 2005); shear-dependent platelet activation (Nesbitt et al, Nature Medicine 2009); TBO-309 (AZD6482) inhibits arterial thrombus formation dose-dependently without a major increase in bleeding; combinable with other antithrombotics; two Phase I trials (AstraZeneca), plus combination Phase I studies.
- Lead Indications: >85% of strokes caused by blood clots; no new approved pharmacological therapy for stroke in 17 years; rtPA limits (4.5 h, recanalisation as low as 20% in LVOs, rethrombosis up to 50%, 6–8% sICH; given to 10–13% of patients).
- STARS page: 40 years of failed attempts because of brain bleeding; blocks only the abnormal clotting process, leaving normal clotting intact; 30 years of Australian research; NSW, Victoria, South Australia. Co-STARS page and CT.gov: IV aspirin + TBO-309 in carotid stenting, two doses, up to 78 patients. NBN News page: nearly 30 patients treated in STARS (April 2026).
- Team: Board (David Mazzo, Independent Director; Shaun Jackson, Founder and Director), Senior Management (Peter Bush CEO; Simone Schoenwaelder Head, Biology; Simon Jackson CIO; Dr Sundeep Dugar Drug Discovery; Amos Meltzer Corporate Development). No bios invented.
- News items link to ThromBio's own media pages.

## Palette / type
Live site: page ground #021012, theme-color #183E4C, logo navy #193e4d, logo rings #e41e26, stylesheet cyan #61e4ff and pale blue #c3eefd. Mapping: ink #04161a, accent on dark #61e4ff, accent on light #136a80, bone #f3f8f9, brand red only for the logo rings and TBO-309 in the story. Type: Syne (display) and Barlow Semi Condensed (text), the two fonts their site loads. Logo: their only logo is a soft ~460px raster with a drop shadow, so it was redrawn crisp (heavy oblique wordmark in Archivo 800 italic, close to the original, white for the dark header, with the four red rings drawn as clean vector circles clear of the letters; the loader version keeps their "Innovators in Stroke Therapy" descriptor). Rendered at 3x to logo-h.png / logo-s.png. Favicon: their own apple-touch-icon ring.

## Hero
Option (c), a crafted render of TBO-309's target: human PI3Kβ (p110β catalytic subunit) as a residue-level Gaussian molecular surface from the public crystal structure PDB 2Y3A (chain A; the p85β iSH2 fragment and the bound GDC-0941 omitted), shaded pale ice (#c3eefd family) > steel blue > navy. _kit/home/thrombio/surf.py, env ZUP=1.6 CG=3.3 CUTF=2.7 NZ=72 DEP=7.5 BB=0.85 PAD=1.8, args 0.2 0.3 0 2000, downsized to 900px hero.webp. No other site uses 2Y3A.

## Story
One fine-line artery narrowed by a plaque (nothing drawn as blood, DT). Frame 0: flow runs, resting platelets travel with it. Step 1: platelets gather on the plaque, activate (arms) and block the artery; flow downstream stops. Step 2: TBO-309 (the logo's red ring) arrives with the blood, given intravenously, and settles on each platelet; the arms retract. Step 3: the clot clears and the platelets travel on; flow returns.
