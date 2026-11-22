# Ionwerks, Inc. (slug: ionwerks) — HOME-ONLY build, batch 2026-11g

- Site: https://www.ionwerks.com/ (read 2026-11-22). Bad-site evidence: early-2000s table layout, a narrow fixed-width
  (~700px) white page floating on a khaki (#cbc8ae) background, image-text GIF nav buttons, six tiny 108x134 product
  thumbnails in rounded tiles, product pages naming Windows NT/9X/2000 software, "web site design by cccengineering",
  StatCounter badge, patents listed up to 2004 as the latest "News".
- Domain check: company name, Houston TX and al@ionwerks.com on every page; the founder's 2026 JASMS paper gives
  "Ionwerks, Inc., Houston, Texas"; NIH RePORTER org IONWERKS, INC., Houston TX (UEI XFHSJJLN7ZQ7). No newer site found.
- Type: lab tools — time-of-flight mass spectrometry instruments, ion detectors, ion beam lines, timing electronics. No
  pathogens, toxins or biodefence.
- HQ: Ionwerks, Inc., Houston, Texas (no street address published; ZIP 77005 in NIH/PNAS records, 77030 in the 2026 JASMS
  affiliation). Phone (832) 758-1834.
- Lead: Dr. J. Albert Schultz (John Albert Schultz), founder and President (home page signature "J. Albert Schultz,
  President, Ionwerks Inc."; NIH lists him as PI / Director of Research). Greeting: "Dear Dr. Schultz".
- Best email: al@ionwerks.com (on every page of ionwerks.com). support@ionwerks.com is for site problems.

## Activity (pre-screen OK)
- 2026-03-04: Schultz A (Ionwerks, Houston) co-author, "In Memory of Dr. Amina S. Woods…", J Am Soc Mass Spectrom 37(3):811-816,
  doi 10.1021/jasms.5c00379, PubMed 41777162.
- 2024-07-30: PNAS "Shot noise-mitigated secondary electron imaging with ion count-aided microscopy" (Ionwerks, BU, Rutgers),
  doi 10.1073/pnas.2401246121.
- NIH SBIR R44GM106507 "Nanoparticulate Coatings Enhance Ion Detection": Phase II 2021 (appl 10259237), FY2022 $799,545
  (10486065), FY2023 equipment supplement (10883978), project end 2024-08-31.

## Facts used
- ionwerks.com home/company: founded 1986 by Dr. J. Albert Schultz for surface analysis systems; systems delivered at NIH,
  Argonne, Los Alamos, Texas A&M, Battelle, UVA, UNC Chapel Hill, Wright-Patterson AFB, IBM Yorktown, NRL, Oxxel (Bremen),
  JEOL (Tokyo); 1997 R&D 100 for MSRI with Argonne; 26 Phase I SBIR projects; DoD/DOE/NASA/NIH/NSF funding; CRADA with
  Argonne; near Rice and University of Houston; segmented ion detectors + multichannel TDCs; "We look forward to hearing
  about your application!"
- Products pages: MSRI detector system, compact ortho-TOF, TDCx8 (8 channels, multistop, ~33 MB/s, TOF MS and LIDAR),
  pulsed alkali ion beam lines (Na+, K+, Cs+, to 10 keV, 1/4" source, three-stage optics).
- News page: patents 5,087,815 (1992), 5,644,128 (1997), 6,008,491 (1999), 6,639,213, 6,646,252 (2003), 6,683,299 (2004);
  MRS vol 569 co-edited by Schultz with Auciello, Krauss, Irene.
- NIH abstract: MCP nanoparticulate thin films; Ionwerks NanoRBS spectrometer on a Zeiss Orion helium ion microscope at Rutgers.

## Palette / type
Logo (products/temp/logo.gif): navy #003476 serif caps "IONWERKS", blue triangle with white spectral peaks over a grey bar.
Ink #0a1322 (deep navy), accent #003476 on bone / #7ea6e6 on dark, grey #a7adb6, bone #f2f0e9 warmed toward their khaki.
Cinzel for the wordmark (their Trajan-like caps), Spectral display, Inter Tight text, JetBrains Mono labels.

## Hero
Option (c), crafted render of their real product: a microchannel-plate ion detector stack (anode plates, alumina spacers,
MCP with edge electrode, retaining ring, threaded posts, hex nuts) on a polished 6" ConFlat flange with bolt circle and
knife-edge recess, like the round flange-mounted detectors in their product thumbnail p4 and the MCP detectors of their NIH
programme. Ray-traced by `_kit/home/ionwerks/render.py` (numpy SDF), 1018x707 with real alpha, captioned "Illustrative render".
Their own photos are 108px thumbnails, unusable. No stock photo, so no reuse across concepts (DQ).

## Story
Engraved reflectron TOF schematic: pulse from the sample (start) → packets separate by mass in the drift region → reflectron
turns and refocuses → MCP detector + TDCx8 time each arrival, spectrum inset gains light/medium/heavy peaks.
