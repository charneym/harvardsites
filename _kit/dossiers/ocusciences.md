# OcuSciences, Inc. (slug: ocusciences) — HOME-ONLY build, batch 2026-11j

- Site: https://ocusciences.com/ (Squarespace template, read 2026-11-23; pages Our Company, Leadership, OcuMet Beacon, OcuMet Mariner, Our Science, Contact Us). Domain check: the page title is "OcuSciences: Functional Retinal Imager In Ann Arbor, MI"; the company name, team, products and HQ address are on the site; the press contact in both 2025 Business Wire releases is info@ocusciences.com; the FDA 510(k) letter (21 April 2025) is addressed to OcuSciences. No newer site on another domain.
- Type: medtech, ophthalmic imaging (OcuMet Beacon, a confocal scanning ophthalmoscope for infrared and autofluorescence retinal imaging). Out-of-scope check: no pathogens, toxins or biodefence.
- HQ: 2890 Carpenter Road, Suite 1800, Ann Arbor, MI 48108, USA. Telephone (734) 623-9434 (media contact, Business Wire, 15 Oct 2025).
- Lead: Kurt Riegger, CEO and President (Leadership page; quoted as CEO in both 2025 releases). No pronouns published. Greeting: "Dear Kurt Riegger".
- Best published email: info@ocusciences.com (media contact for Kurt Riegger in the 1 May 2025 and 15 Oct 2025 Business Wire releases). No personal address found.

## Activity (pre-screen OK)
- 15 Oct 2025: EU CE clearance of the OcuMet Beacon; units deployed at research institutions, hospitals and ophthalmic centres in Germany, England and Wales. https://www.businesswire.com/news/home/20251015617583/en
- 1 May 2025: FDA marketing clearance announced at ARVO 2025. https://www.businesswire.com/news/home/20250501118944/en
- 21 Apr 2025: FDA 510(k) letter, https://www.accessdata.fda.gov/cdrh_docs/pdf24/K241931.pdf

## Bad-site evidence
Stock Squarespace template: a pale-blue announcement bar, a small product image beside a short text block, then large empty pastel areas; the Investors link and /contact return "We couldn't find the page you were looking for"; "Our Science" is a single sentence asking visitors to contact them; the spec table contradicts the copy (pupil 2.5 mm vs 3.5 mm) and lists "Auto-focusing adjustment range" twice; the contact form shows the placeholder "user@domain.com"; copyright 2025.

## Facts used
- Home/Our Company: "See Beyond Structure"; developing novel ocular imagers to detect and monitor eye diseases; published and patented OcuMet autofluorescence technology; mission "To help physicians and their patients detect ocular diseases earlier to prevent loss of vision"; born out of the University of Michigan; HQ Ann Arbor; interdisciplinary team from the ophthalmic and diagnostic industries and leading healthcare institutions.
- OcuMet Beacon page: only ocular imaging device with OcuMet autofluorescence; colour-coded AF image; fully automated, touch-based tablet, minimal training; 3–5 minutes for most patients; clinician report; specs (white LED 460–480 nm, IR LED 825–870 nm, 5 Mpixel sensor, 17 µm optical resolution on the retina, 28 mm working distance, auto-alignment/focus/exposure/capture, PNG/PDF/DICOM export, USB/Gigabit Ethernet, 360 × 590 × 620 mm, 25 kg); disclaimer "not intended to diagnose, treat, cure, or prevent any disease or health condition".
- OcuMet Mariner page: preclinical imager for small laboratory animals, with a strategic partner, assessing ocular metabolic health without sacrificing the animals.
- Leadership page: seven names and titles (no bios published).
- Releases: confocal scanning ophthalmoscope, IR and AF imaging with or without a mydriatic agent; natural fluorescence captured with proprietary illumination and detection; functional image signature; no injections, dyes or contact with the eye.

## Palette / type
Logo navy #002551 (sampled from Blue500px.png); OcuMet blue (#1f4e9a, accents on the light ground); their periwinkle button #87a0cb lightened to #9fb5dc on navy bands; the OcuMet green for the retina glow in the story. Ground #f3f5f9, the ground of their product image. Poppins throughout (their site face). Logo: their only logo is a 500×72 raster; logo.py upsamples its alpha 2x and re-sharpens the edge (single flat colour), shown at ≤500px CSS.

## Hero
Option (a): OcuSciences' own product image of the OcuMet Beacon (ocusciences.com, squarespace OcuMet+Beacon+v5.png, 2500×1097). render.py removes the green/teal wave backdrop by colour unmixing, maps the white studio ground onto the page ink, keeps the real soft shadow, feathers the edges; lossless WebP at native resolution. Not used by any other concept.

## Story
One fine-line section of the eye with the Beacon's objective: (1) blue and infrared light pass through the pupil and scan the retina; (2) the retina's natural autofluorescence glows and returns through the pupil; (3) a round colour-coded functional image signature appears beside the eye.
