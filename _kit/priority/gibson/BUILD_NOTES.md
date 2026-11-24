# Gibson Oncology flagship: build notes (Nov 2026)

Source of truth for facts: `materials.md` (deck + letters), gibsononcology.com, Purdue release 25 Feb 2026.
Build: `_kit/home/gibsononcology/assemble.py` → `_kit/src/gibsononcology.src.html` → `node _kit/build.js … gibsononcology/index.html`.
Full site on the template's own router (no build-out module): #/ science pipeline partners team investors news contact.
Every sub-page head sits over the ghosted hero render (data-field), reached through the template's route wipe (DT/DK).

## Palette (BK)
Logo GO-logo-jpg.png: ribbon teal #62b4ca → --accL; ribbon mint #9edad0 → --rdL; wordmark charcoal → bone on ink.
Site teal #0e8f85 → --acc (solid buttons). Ink #07141a.

## Logos
- Gibson: `img/logo-gibson.png`, their GO-logo-jpg.png with the wordmark recoloured to bone, ribbon colours kept, tagline line removed (header + loader).
- NINDS: ninds.nih.gov header PNG (1837px), recoloured to one tone with the NIH letters knocked out.
- Duke: tischbraintumorcenter.duke.edu `tisch-logo-blue.svg`, fill → one tone.
- Children's National: childrensnational.org `shared-horizontal-logo.svg`, fill → one tone.
- Mayo Clinic: mayoclinic.org blocks automated access (403); the shields + MAYO CLINIC wordmark paths were taken from Mayo's own
  official SVG on college.mayo.edu (MCCMS_Logo_Black_New.svg), with the "College of Medicine and Science" line removed and the
  wordmark centred on the shields.

## Photos (all from gibsononcology.com wp-content/uploads, graded offline: gradient map ink→teal→bone, 20% original kept; never upscaled, max 2000px)
Used: brain-scan visualisation (home band), multi-well DNA plate (designations), microscope vertical (contact), studying-virus lab
(science band), pipetting tray (pipeline), clinical-lab researchers (team band), woman holding research (investors), the
dual-action mechanism figure, LMP744 and LMP400 structures, all 7 leadership headshots, 9 collaborator headshots (Cushman is in leadership).
Graded but not placed (removed from img/): MRI close-up, microscope lab, chemical lab, microbiologist, scientist, 333025492 lab photo, scans (near-duplicates of the lab photos used, or too small at 750–800px for a band). Gel electrophoresis is used on Science.
Not used: abstract particles render and colourful DNA helix (stock filler, the hero already renders DNA); FDA/NIH/Duke/Purdue logo
tiles (low-res, replaced by official files or type); GBM MRI image002 (alarming, DT); BBB clipart (low quality); old pipeline PNGs
(superseded by the coded chart); brain-on-body render (stock).

## Not on the site, deliberately
Teddy Solomon's personal email (deck: use company contact). Burn-rate figures (deck gives none). Any animal result without the preclinical/PDX label.
