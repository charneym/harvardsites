# BMSEED LLC — dossier (home-only build, batch 2026-11e, medtech / life-science instrumentation)

Sources, fetched 2026-11-20: bmseed.com (home, /about-us, /contact, /news, /patents, /flexible-stretchable-multielectrode-array-mea,
/3d-microelectrode-array-mea); NIH RePORTER API (org BMSEED, 16 awards 2014–2026; appl 11311188); ASU profile search.asu.edu/profile/1312487.

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-bmseed.jpg): Squarespace; nav of 8 items wrapped onto two lines ("CONTACT" alone on the
  second line); stock purple-nitrile-glove photo behind the bold black centred headline; product video framed in a heavy grey box; mixed type
  (bold/italic Arial headline, light logo type); no team page (About Us names no people); home "About Us" block is a raw a)–e) list of cell types
  with a typo ("long-term potentiation (LTD)").
- Active: NIH NINDS SBIR Phase II 2R44NS124469-02, $700,518, notice 2026-09-17, "The first adaptable 3D-formfitting microelectrode array for
  organoid-based models of neurological and neurodegenerative diseases" (https://reporter.nih.gov/project-details/11311188). Also US 12,533,673 B2
  granted (news 2026-03-24), Biophysical Society 2026 (2026-02-21), The Mesa Pitch winner (2025-11-06).
- Scope: in vitro electrophysiology / cell-stretching instruments (TBI, neurodegeneration, organoids, cardiac). No pathogens, toxins or biodefence.

## Company
- Name: BioMedical Sustainable Elastic Electronic Devices (BMSEED), LLC. HQ: Mesa Center for Higher Education, LaunchPoint Accelerator,
  245 W 2nd St, Suite 51, Mesa, AZ 85201 (site). RePORTER lists the org in Tempe, AZ (older address).
- Phone +1 (609) 532 9744. Emails: info@bmseed.com (site footer/contact); oliver@bmseed.com (contact page: "email it to oliver@bmseed.com").
- Products: MEASSuRE all-in-one (MEA ephys + cell stretching + imaging), stand-alone modules, stretchable MEAs (sMEAs: 28+2 / 56+4 electrodes,
  up to 50% strain at 90/s; single- or six-well), organoid MEAs (3D pocket 1–5 mm dia, 0.3–1.5 mm deep; 32/60 ch), glass MEAs, microfluidic chips.
- Patents: US20240082843A1 / US 12,533,673 B2 (sMEA with 3D pocket + microfluidic channel), US20220401746A1 (peripheral nerve interface), exclusive
  licence to Princeton US7491892B2 (Wagner, Lacour, Suo). Inventors O. Graudejus, C. C. Rowan, T. M. Otchy.
- Testimonials (home): A. Patino PhD (ASU), M. K. Dwyer MS (Columbia), A. Pybus PhD (Georgia Tech). Image credits: Emory (J. Guo), ETH Zurich, Rutgers.

## People
- Oliver Graudejus, PhD — Founder (NIH RePORTER PI title "FOUNDER"; contact PI on all 16 awards). PhD Chemistry, Justus Liebig-Universität Gießen
  1996; adjunct faculty, ASU (joined 2009); founded BMSEED to commercialise his sMEA technology (ASU profile). No pronouns published → greeting
  "Dear Dr. Graudejus" (PhD).
- Cami Rowan — news author and named co-inventor; role not published (not shown as team on the concept).

## Brand
- Logo: gold sunburst #c7a93f→#ebda6d (sampled from logo PNG) + grey type #818285. Concept: ink #0c0c0d, bone #f0ede6, accent #deca5d (dark) /
  #9c8226 (light); logo PNG with grey type recoloured to bone for the dark header. Type: Jost (close to the logo's thin geometric) + Inter.

## Build notes
- Hero (option a): BMSEED's own photograph of its sMEA from above (sMEA_gen6b_top_compressed.jpg, bmseed.com home). Graded: blue PCB pulled to
  graphite, exposure lowered and warmed, radial fade into the exact page ink (no seam); right of ~70% under an ink wash; slow Ken Burns drift.
- Story: one engraved section through an sMEA (grips, silicone substrate, gold leads/electrodes, culture well) → cells on the electrodes →
  continuous scrubbed stretch (grips, substrate, electrodes, cells all spread) → objective above + spike trace. Schematic proportions.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto info@bmseed.com, Mesa address, phone).
- Gates: all OK except hero-audit "no title found" (reproduces identically on /owictechnologies/; home-only harness limitation).
