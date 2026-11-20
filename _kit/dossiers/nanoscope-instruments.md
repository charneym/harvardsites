# Nanoscope Instruments: dossier (home-only build, batch 2026-11c)

**Company:** Nanoscope Instruments, Inc. Biomedical imaging and vision-testing instruments for ocular research. Part of the Nanoscope family of companies (Nanoscope Diagnostics, Nanoscope Technologies, Nanoscope Therapeutics). Source: nanoscopeinstruments.com/about/.
**HQ:** 1312 Brown Trail, Suite D, Bedford, TX 76022 (Dallas–Fort Worth). Source: MLSDT brochure 2025 and LVMPT quick start 2025 (both PDFs on their site); NIH RePORTER org record (Bedford, TX 76022-6410).
**Contact:** info@nanoscopeinstruments.com · 1 (817) 719-2692 (both from their 2025 PDFs). Demo booking: calendly.com/nanoscopeinstruments/meeting (homepage). LinkedIn: linkedin.com/company/nanoscope-instruments/.

## Funding (why now)
- NIH NEI SBIR **1R44EY038605-01**, "Development of Multi-Luminance Shape Discrimination Test for Assessment of Functional Vision". $1,019,678, notice 2026-08-19, project 2026-09-01 → 2028-06-30. PI: Sang Hoon Kim. https://reporter.nih.gov/project-details/11316377
  - Aims (abstract): 1) refine and verify MLSDT for shape and object discrimination; 2) retest variability and repeatability across ranges of visual acuity; 3) correlative measurements (ETDRS, visual field) and validation in GA, wet AMD, RVO and DME populations.
  - Abstract: "The MLSDT has been instrumental in evaluating the impact of MCO-010"; "A shift of two or more luminance levels in MLSDT ... has been found to correlate with improved independence and daily functioning". PHR: patients "with vision worse than 20/800"; aim to serve "as a primary endpoint in clinical trials evaluating vision restoration therapies".
- Latest activity: exhibited at the 2026 ARVO Annual Meeting, Denver (homepage). FCOI policy PDF uploaded 2026-07.

## Products (their site + datasheets)
- **NS-NEEL**: simultaneous retinal imaging (OCT) and electrophysiology (ERG). Datasheet: SD-OCT 870 nm (~140 nm bandwidth); transverse resolution 8 µm mouse / 11 µm rat / 20 µm large animal; depth resolution ~2 µm; 512×512 px; 80 fps; 100 dB sensitivity; stimulation ~450/520/638 nm, 1 mW; pulse 0.1 ms to minutes; proprietary corneal contact electrode; USB, Windows; ~14″×12″×8″, ~10 lb.
- **NS-TARA**: OCT-guided laser micro-irradiation and gene delivery platform.
- **NS-KAYRA**: simultaneous OCT imaging, electrophysiology and laser micro-irradiation; visible lasers for stimulation, NIR laser for ablation/alteration of tissue.
- **MLSDT** (Multi-Luminance Shape Discrimination Test): nine 3D shapes (cube, pyramid, sphere, ellipsoid, cylinder, rectangular prism, bowl, torus, cone), six sizes each; 3D luminance 0.2, 0.65, 2.1, 6.7, 21 lux; pressure sensor input; audio cues; voice assistant English/Spanish; laptop software; 20/200 or better can do all tests.
- Instruments page: interchangeable micro-focal lenses for mouse/rat to rabbit, pig, NHP eyes; OCT-guided spatially targeted stimulation for mfERG/VEP; budget-friendly vs buying OCT, ERG and gene delivery separately. Homepage: size of a PC, Windows software, USB, one-year warranty.

## Team (about page; titles verbatim)
- Dr. Samarendra Mohanty, CEO (headshot DRMohanty-Headshots.jpg, 442×588)
- Dr. Sang-Hoon Kim, Head Engineer (600×800)
- Michael Carlson, Lead Software Engineer (600×800)
- Michael Aldape, Project Engineer (480×640)

## Publications / news used (all link out)
- 2026-08-19 NIH RePORTER award (above)
- 2026 ARVO Annual Meeting, Denver (homepage; no date given on site → shown as year only)
- 2022-03-07 Scientific Reports: "OCT guided micro-focal ERG system with multiple stimulation wavelengths for characterization of ocular health" (Carlson, Kim, … Mohanty) https://www.nature.com/articles/s41598-022-07622-5
- 2021-10-04 Frontiers in Neuroscience: "Monitoring visual cortical activities during progressive retinal degeneration using functional bioluminescence imaging" https://www.frontiersin.org/articles/10.3389/fnins.2021.750684/full
- 2021-02-01 NEI challenge winning team (citybizlist) https://citybizlist.com/article/649487

## Palette (BK; logo pixel-sampled + live site CSS)
- logo blue #0a72b4 → --acc / --accD (light grounds)
- logo cyan (wordmark "nanoscope") #3aa2c2 → --accL
- logo lime ("INSTRUMENTS") #8cd80c → --lime (small accents on dark only: luminance readout, delivered-gene glow)
- deep navy ink #0b1820 derived from the logo blue (site footer #2c3e50-ish slate); hero sky fill = logo blue.

## Bad-site evidence (quoted)
1. News page ends in 2022: latest item "March 2, 2022. Nanoscope announced as a finalist for the TechFW 2021 Impact Award".
2. "Upcoming Conferences" still lists "(ARVO) Denver, CO. May 1-4, 2022 at Booth 2824" and ASRS July 2022.
3. Contact page is a form only ("For general and investor information please complete the form below."): no email, phone or address anywhere in the site HTML; still offers "LVMPT" though the product is now MLSDT.
4. Stock-template WordPress (WPBakery + Slider Revolution) with a moiré-patterned hero slider; About header image named "NSCOPEINS_HEADER_AboutDRAFT".
5. Nav label "MLSDT" points to /lvmpt-2/ (WordPress duplicate slug).

## Photo inventory (BJ/BR)
Used: four team headshots. Not used: HP_image1/2 and NANOINS_OCTtesting (stock: a woman at a clinical OCT, not their instrument), About header (stock lab), logo PNG (redrawn as SVG).

## Hero / story concept
- Hero: an offline ray-traced still life of the nine MLSDT shapes on a table, under a lamp that steps through the test's five luminance levels (0.2 → 21 lux). Two pre-rendered frames are cross-faded; the readout shows the level.
- Story: one eye in cross-section, one continuous camera: Image (OCT) → Target → Stimulate → Record (ERG) → Deliver (NIR micro-irradiation).
