# JuneBrain, Inc. (slug: junebrain) — HOME-ONLY build, batch 2026-11h

Slug `junebrain` · built at `/junebrain/` · parts, hero processing and story in `_kit/home/junebrain/`.

## Domain check
- junebrain.com (Wix, read 2026-11-23): company name, logo, team, products, "© 2026 By JuneBrain Inc", info@junebrain.com, "Baltimore, MD"; blog posts through 30 Sep 2026; LinkedIn linkedin.com/company/junebrain. No newer site on another domain.
- NSF award records (2053315, 1819326): awardee JUNEBRAIN, INC., 101 W Dickman St Ste 703, Baltimore MD 21230, UEI J1KGJ1C8CS36, PI Samantha I Scott, samantha.scott@junebrain.com (same domain).
- Type: medtech (OCT retinal imaging device + AI segmentation software). No pathogens, toxins or biodefence.

## Bad-site evidence
- Stacked centred text bands on white/grey, then a saturated blue strip with a boxed "Learn More" button; the hero is a headline with a short rule and a paragraph, no image (screenshot _kit/sourcing/v2-sheets/11h-junebrain.jpg).
- The product appears as a small image in a pasted grey panel below the fold; a blank white band sits between sections.
- The home page carries an embedded video with the note "*Be sure to unmute to hear the audio."; the home news feed has a single item, which links to a Google Drive file; the About page lists 15 people with no bios.

## Activity (pre-screen OK)
- July 2026: People's Choice Award, Accelerate Breakfast Series (home news feed, Drive link).
- 2026-01-09: Governor Wes Moore visits LaunchPort and meets JuneBrain (junebrain.com post 22 Jan 2026).
- 2025-12-08: winner, NOBIC BioChallenge 2025 — https://neworleansbio.com/wearable-otc-device-for-retinal-brain-health-meet-biochallenge-2025-winner-junebrain/
- NSF STTR Phase II 2053315 "A novel retinal imaging device" active to 12/31/2026, latest amendment 12/15/2025, $1,932,986 obligated; SBIR Phase I 1819326 (2018, $225,000).
- 2024-09: MDIC Advanced Manufacturing Clearing House award, $300,000.

## Lead
- Samantha Scott, PhD — Founder & CEO (About Us; NSF PI). Greeting: "Dear Dr. Scott".
- Best published email: samantha.scott@junebrain.com (NSF award records, PI email). General: info@junebrain.com (site).
- HQ: 101 W. Dickman Street, Suite 703, Baltimore, MD 21230 (NSF; LaunchPort); site says Baltimore, MD.

## Facts used
- Home: "develops telehealth OCT devices and AI software to optimize remote monitoring of neurological and retinal diseases"; portable, user-friendly; "Investigational use only. Not for clinical diagnosis."
- About: mission; "Nearly 1 billion individuals worldwide live with retinal and neurological diseases like MS and AMD"; infrequent clinical visits and imaging exams; HQ Baltimore; collaborations with Johns Hopkins and UMB (plus Texas A&M in collaborators); WBENC-certified women's business enterprise; team names and titles; advisors.
- Neuro-i page: automation for minimally trained users; weekly/monthly data collection; lightweight, affordable; AI report to providers; designed to match clinical devices.
- Reading Center + 2026 pilot: segmentation of up to 8 / 8+ layers; QC by an experienced clinician; JDAe (AI segmentation; Cirrus, Spectralis, Neuro-i; 9 ETDRS subfields; PDF/CSV), JAM (manual correction); free analysis of one de-identified volume, next-day report; Med Image Anal 2021 paper (He, Carass, Liu et al.).
- NOBIC Q&A: wearable headset keeping laser light aligned with the eye; reports tailored (ophthalmologists: detailed images and metrics; neurologists: specific biomarkers).
- NSF: $225,000 + $1,932,986 = $2.16M → "$2.1M in NSF SBIR and STTR awards".

## Palette / type
Site theme colours --color_17 #2f3b97 (navy) and --color_18 #5fb7e7 (sky); logo brain icon gradient #243090→#60c0e4; wordmark grey #6d6e71. Mapping: navy #2f3b97 → --acc (buttons, footer wordmark); logo mid-blue → --accL #2f5fae (eyebrows/italics on light); sky #5fb7e7 → --accD/--rd (accents on the deep-navy bands); deep navy #141942 → text/--bone; page ink #edf0f7 = the flat ground of their own product render. Type: Outfit (close to BR Omny, their heading face) + Poppins (their body face). Logo: their own PNG (2550px source) cropped and resized to 760px, shown at ~190px in the nav and ~300px in the loader.

## Hero
Option (a): JuneBrain's own product render of the Neuro-i SS-OCT (base unit with touchscreen + wearable headset), junebrain.com home, wixstatic 0d31fb_1415125e9bbf45d4977a7e00d7db583d~mv2.png (1600x900). render.py crops it from its #edf0f7 studio band (equal to the page ink), flattens a faint lighter panel and dot pattern in the source backdrop while keeping the real shadows, and feathers every edge; drawn at ≤ native size; slow Ken Burns drift plus a faint sky glow on the headset light band. Unique: not used by any other concept.

## Story
One fine-line scene: headset → sagittal eye → OCT cross-section inset. (1) Align: headset comes up, beam reaches the retina; (2) Scan: the beam sweeps the macula and the B-scan builds behind the scan line; (3) Segment: the boundaries are traced in the logo blues, key layers named; (4) Report: ETDRS thickness map and a scan-by-scan trend (no values).
