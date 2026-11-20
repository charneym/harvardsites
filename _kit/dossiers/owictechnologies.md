# OWiC Technologies, Inc. — dossier (home-only build, batch 2026-11e, biotech tools / microelectronics)

Sources, fetched 2026-11-20: owictechnologies.com (home, /sense, /specs, /microlinks, /engr, /team); NIH RePORTER (appl 11254075, 11381154);
Cornell Chronicle 2025-01-09 ("Light-activated micro device expands 'green' electrochemistry") and 2026-02-16 ("Cornell partnerships propel semiconductor innovation through NY THRIVE vouchers"); Cornell PCVD startup listing (pcvd.cornell.edu/?p=1471).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-owictechnologies.jpg): Squarespace; oversized faded grey/orange all-caps hero lines overlapping and cut off ("ELECTROSYNTHESIS" clipped under the scroll arrow), tilted photo panel, abbreviated nav (SENSE / SPECs / microLINKs / Engr / Team), "o ptical w ireless ı ntegrated c ircuits" letter-split text, cart icon "0"; no news, no company story beyond three product teasers.
- Active: NIH NIGMS SBIR Fast Track 1R44GM161182-01 ($290,670, notice 2025-07-28) and 4R44GM161182-02 ($1,228,929, notice 2026-08-21, to 2028-07-31), "High throughput electrosynthesis for enhanced drug discovery via light-powered smart microelectronics"; NY THRIVE voucher (Cornell Chronicle, Feb 2026).
- Scope: lab tools for synthetic chemistry / drug discovery and smart ID tags. No pathogens, toxins or biodefence.

## Company
- Offices (site footer): 350 Duffield Hall, Ithaca, NY 14853; 400 Park Offices Dr., Suite 201, Durham, NC 27713. RePORTER org: OWIC TECHNOLOGIES INC, Ithaca NY, UEI QJLKBLFKNJ58.
- Emails published: info@owictech.com (site footer), specs@owictech.com, microlinks@owictech.com. alejandro@owictechnologies.com listed as CEO email on Cornell PCVD (2020 entry, older domain).
- OWiCs: "world's smallest smart microsystems"; electronics for intelligence, sensing, control + optics for power and communication, package the size of a grain of sand.
- SPECS (Small Photoelectronic Electro-Chemical Synthesizers): light-powered chips that turn a well plate into an electrosynthesis lab; for 1 mL inserts and 4 mL vials; Górski et al. Nature 637, 354–361 (2025); quotes: O'Brien & Lennox, Nature News & Views; Phil Baran (C&EN). Cornell: ~2 mm square, 25 silicon photodiodes strung together, fits 20 µL wells; current through solution drives reactions; no wires, no chemical oxidants/reductants. RePORTER: on-chip electrodes, 96- and 384-well plates.
- SENSE: real-time reaction telemetry/calorimetry; 20 mK; 4/24/96 wells; 10–80 °C; SLAS footprint; early access.
- Microlinks: smart ID tags, photovoltaics + IC + laser, read with standard iPhone and OWiC Connect app.
- Engr: heterogeneous integration services; partners X-FAB, X-Celeprint, Dallas Quantum Devices, Cornell NanoScale Facility.

## People (site /team)
- Alejandro Cortese, PhD — Co-Founder, CEO (contact PI on R44GM161182). Greeting: "Dear Dr. Cortese".
- Paul McEuen, PhD — Co-Founder, CTO. Alyosha Molnar, PhD — Co-Founder, IC Design. Kevin Sun — Principal Product Engineer. Michael Reynolds, PhD — Lead Engineer. Song Lin, PhD — Scientific Advisor (co-PI on the NIH award).

## Brand
- Live site: black ground, white Red Hat Display / Red Hat Text, logo orange #f18239 (sampled from the logo PNG). Concept: ink #0c0b0b, bone #f4f2ef, accent #f18239; their real logo PNG in the header and preloader.

## Build notes
- Hero (HOME_BRIEF update option a): OWiC's own photograph of a SPECS chip and a microlink on a fingertip (image inside their homepage lottie, media.owic.io homepage_anim_fingerprint.lottie). Graded: white backdrop un-mixed from the soft finger edge and replaced by the ink, exposure lowered; hero.webp. Chip right of ~65%, ink wash over the headline side, right-edge ink vignette, slow Ken Burns.
- Story: engraved section through a row of a well plate: wells with solution → SPECS chip on the floor (photodiodes, electrode pads) → visible light → current through the solution, gas bubbles. Proportions schematic.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto info@owictech.com + both addresses).
