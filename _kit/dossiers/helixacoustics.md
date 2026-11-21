# Helix Acoustics — dossier (home-only build, batch 2026-11f, medtech / life-science tools)

Sources, fetched 2026-11-21: helixacoustics.com (placeholder page); NSF Award Search / api.nsf.gov award 2537879;
Holmes et al., "Focused ultrasound extraction (FUSE) for the rapid extraction of DNA from tissue matrices", Methods in Ecology
and Evolution (2020), doi 10.1111/2041-210X.13505 (VTechWorks record 78fa357e…); A. D. Stettinius, PhD dissertation, Virginia Tech
(VTechWorks items/0670cb61-6807-4d0c-b4a7-887d04745056); Virginia Tech TUSL lab alumni page (ultrasound-lab.bme.vt.edu/tusl-alumni.html);
Virginia Tech BEAM faculty page for Adam Maxwell.

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11f-helixacoustics.jpg): Zyro/Hostinger "Coming soon" placeholder: grey gradient,
  logo, "Watch this space, we're creating something special.", an email-subscribe box. Page title "Home". No product, team,
  science or contact page.
- Active: NSF STTR Phase I award 2537879, $304,948, award date 2026-06-17 (start 2026-07-01, to 2027-06-30),
  "STTR Phase I: The Development of a Benchtop Focused Ultrasound Transducer Array for Rapid DNA Extraction".
- Scope: lab instrumentation for DNA sample preparation (diagnostics, agriculture, food safety, forensics). The abstract mentions
  "complex bacteria" among tough samples and "strengthening biosecurity and defense" as one broader impact; the science itself is
  general sample prep, not pathogen, toxin or biodefence research. The concept site does not use the biosecurity framing.

## Company
- HELIX ACOUSTICS, LLC (NSF awardee name; also "HELIX ACOUSTICS, INC."), 709 S Jefferson St, Ste 3, Roanoke, VA 24016. UEI L9G7XXAMMDK4.
- Email published on their site: astettinius@helixacoustics.com. NSF PI email: astettinius03@gmail.com.
- Technology (NSF abstract): DNA extraction platform powered by a focused ultrasound transducer array; high-pressure focused
  ultrasound pulses generate a dense cavitation "bubble cloud" that mechanically disintegrates samples into acellular debris;
  simultaneous tissue homogenization and cell lysis in a compact integrated system; replaces multi-step chemical workflows.
  Phase I: scalable, power-efficient transducer array; driving electronics with stable, repeatable output; modular lab prototype;
  characterise electrical output, pressure profiles, cavitation; correlate with DNA yield, purity, amplification efficiency.
  Sectors: diagnostics, agriculture, food safety, forensics. Tough samples: plant material, dense tissues, complex bacteria.
- Science lineage: FUSE (Virginia Tech, 2020 paper: Atlantic salmon tissue, species-identifiable sequences and shotgun reads).

## People
- Alexia Stettinius, PhD — PI on NSF 2537879 (lead). PhD Biomedical Engineering, Virginia Tech, conferred Dec 2024; dissertation
  "The Exploration and Development of Focused Ultrasound Extraction (FUSE) for the Rapid Release of DNA from Complex Tissue Matrices".
  The TUSL alumni page has listed her current position as both "Postdoctoral Research Associate, Virginia Tech" and "Senior Research
  Engineer, HistoSonics" (two mirrors), so no current title is used. Company title (CEO/founder) not published. Greeting: "Dear Dr. Stettinius".
- Adam Maxwell, PhD — co-PI on the award (admaxwell@vt.edu); Research Associate Professor, Biomedical Engineering and Mechanics,
  Virginia Tech; cavitation, lithotripsy, focused ultrasound surgery. On the dissertation committee.

## Brand
- Logo PNG (assets.zyrosite.com …/logo_update-A3Q79JG7lyiM3ZBP.png): navy #10488a wordmark "HeliX Acoustics", the X drawn as a
  green #a8d078 / navy DNA twist. Live page otherwise white/grey. Concept: navy-black ink #070d17, cool bone #eef2f7, green on dark,
  navy on light; logo recoloured to bone + green for the dark header. Hanken Grotesk with IBM Plex Mono labels.

## Build notes
- Hero (HOME_BRIEF update option c): their site has no photography and no free Unsplash/Pexels photo shows a focused ultrasound
  array, so a crafted render of the real mechanism: a concave transducer array (58 elements, machined flange, bolts) focused on a
  sample tube with the cavitation bubble cloud at the focus. Ray-traced by _kit/home/helixacoustics/render.py, alpha hero.webp.
  Labelled "illustrative render" in the caption.
- Story: engraved section through the array: sample tube with tough tissue → focused elements and converging pulses → bubble cloud
  → released DNA and debris. Proportions schematic.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto + Roanoke address).
