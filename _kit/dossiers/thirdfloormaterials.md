# Third Floor Materials, Inc. — dossier (home-only build, batch 2026-11e, medtech / imaging instrumentation)

Sources, fetched 2026-11-20: thirdfloormaterials.com (home, /research-development/, /services/, /about-modified/, /contact-2/);
NIH RePORTER 1R43GM165166-01 (https://reporter.nih.gov/project-details/11407063); NSF award 2014798 (api.nsf.gov, abstract + project outcomes report).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-thirdfloormaterials.jpg): WordPress "Make" theme; home page is the logo, one heading and two plain sentences on white, then empty space and a "Built with Make. Your friendly WordPress page builder theme." footer; no imagery, no news, no funding, no explanation of the NIH programme; the "R & D" item and "About" live at /research-development/ and /about-modified/ (leftover slug); a dead /r-d/ path 404s.
- Active: NIH NIGMS SBIR Phase I 1R43GM165166-01, $298,111, project start 2026-09-02, "High-throughput snapshot hyperspectral imager for multiplexed fluorescence microscopy", contact PI Edward Sachet.
- Scope: optical imaging / spectroscopy instruments. No pathogens, toxins or biodefence.

## Company
- 2 Davis Drive, Suite 512, Durham, NC 27709 (site contact page; NSF record same). info@thirdfloormaterials.com (site).
- Founded early 2016 as an NC State spin-out by Edward Sachet, Jon-Paul Maria and Christopher T. Shelton (two former grad students and their thesis adviser); enabling material from Sachet's PhD thesis.
- R&D (site): snapshot hyperspectral imaging (thin-film plasmonic filter array, with NCSU, bonded to the sensor, full HSI cube in one snapshot); algorithmic IR spectroscopy (ML, NDIR → spectroscopic); IR optical limiters (ENZ materials, >1 order of magnitude reduction).
- Services (site): thin-film deposition (50+ years combined; sputtering, PA-MBE, PLD, evaporation, MOVPE, CSD); simulation of plasmonic systems / photonic crystals.
- NIH abstract: sHSI captures the full datacube in one exposure of a widefield fluorescence microscope; drop-in replacement for scientific cameras; plasmonic filter arrays on BSI CMOS; compressive sensing; unmixing.
- NSF STTR Phase I 2014798 (2020-06-01, $224,969), with Joshua D. Caldwell (Vanderbilt): algorithmic mid-IR spectroscope with ENZ thermal emitters; CO2 spectrum recovered.

## People
- Edward Sachet, PhD — President and Principal Scientist (site: "Dr. Sachet"); PI on NIH and NSF awards. Greeting: "Dear Dr. Sachet". Email published on the NSF award record: esachet@thirdfloormaterials.com.
- Christopher T. Shelton, PhD — CFO, Senior Scientist. Jon-Paul Maria — co-founder, Professor of MSE.

## Brand
- Live site: white, Josefin Sans headings, Roboto/Open Sans body; logo = 17 spectrum bars #4480fa with two #082ff8, wordmark THIRD·FLOOR·MATERIALS with "IR" in blue (sampled from the logo PNG).
- Concept: ink #070b16, bone #f3f5f9, accent #4f8afa / #2558e6; the logo redrawn as SVG (same bar heights) with a bone wordmark for the dark header.

## Build notes
- Hero (HOME_BRIEF update option b): real photograph of an image sensor seen through an open camera mount, Alexander Andrews on Unsplash, Unsplash License (free, not Unsplash+): https://unsplash.com/photos/uIF40JqldaI (images.unsplash.com/photo-1536702567485-2c5f40fec9c7). Graded by _kit/home/thirdfloormaterials/grade.py: warm reflection on the sensor glass shifted to the logo blue, shadows cooled toward the ink, elliptical alpha feather; caption "An image sensor, where the filter array sits" (no claim it is their device).
- Story: engraved section through the imager: fluorescent sample → plasmonic filter array on the CMOS sensor → one exposure, one intensity per pixel → spectra recovered and unmixed. Schematic.
- Nav: Technology / Programmes / Team / News open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
