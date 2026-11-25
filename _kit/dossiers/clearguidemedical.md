# Clear Guide Medical (batch 2026-11l, home-only)
Slug: `clearguidemedical` · built at `/clearguidemedical/` · domain clearguidemedical.com · parts in `_kit/src/clearguidemedical-parts/`,
assembled by `_kit/src/clearguidemedical.assemble.py` (engine: the gerdcare home-only src), hero rendered by `_kit/src/clearguidemedical.render.html`.

## Domain check
- clearguidemedical.com (WordPress) shows "Clear Guide Medical", © 2026, SCENERGY TP / LUMENA / VisiMARKERs, the team page
  (Paul C Clark CEO/Chairman …), HQ 3600 Clipper Mill Road, Suite 400, Baltimore, MD 21211; sales@/eusales@/media@clearguidemedical.com.
- ClinicalTrials.gov lists "Clear Guide Medical" as sponsor (NCT04031495, NCT02614222 …) and as collaborator on Mayo Clinic's
  NCT05573048; NCT07120906 (Mayo Clinic) evaluates "LUMENA developed by CLEAR GUIDE MEDICAL". No newer domain found
  (scenergytp.com is a product microsite linked from their own site).

## Activity (pre-screen: OK; medtech device guidance, no pathogens/toxins/biodefence)
- Site banner: presenting at iMRI 2026, Boston, Oct 8–9 2026 ("MRI-Guided Hepatic Interventions Using Augmented Reality
  Optical Navigation: Initial Clinical Experience with the LUMENA System").
- Clinical evaluation PDF uploaded Nov 2025 (wp-content/uploads/2025/11/…); NCT04031495 record updated 2026-07-30;
  NCT07120906 (LUMENA, liver, Mayo Clinic) started 2025-07-25, record updated 2026-09-04.

## Lead
- Paul C. Clark, DSc, Chief Executive Officer and Chairman (clearguidemedical.com/team; the page uses "Dr. Clark")
  → "Dear Dr. Clark". Best published email: sales@clearguidemedical.com (no personal address published; media@ for press).
- HQ: Baltimore, Maryland (Johns Hopkins spin-out).

## Bad-site evidence
Screenshot `_kit/sourcing/v2-sheets/11l-clearguidemedical.jpg`: cluttered 2010s WordPress layout, a collage of four procedure
photos as the hero, mixed fonts and weights ("AR AND AI GUIDED PROCEDURES"), small bullet text,
footnote-style captions and a TrustedSite badge over the content.

## Design
- Palette from their logo (black CLEAR GUIDE + needle, grey #828282 MEDICAL + guide lines) and site (headline blue #4969ac,
  slate #1d4354): deep blue-black ink #0c1320, cool bone #f2f4f8, blue #4969ac / #8fabe8 / #3d5c9e as accent, and the
  AR-overlay green #52e08a of their procedure imagery for the guidance ring only. Archivo (display) + Inter (text).
- Logo: their 450x137 PNG traced into filled SVG paths (potracer, 4x upsample), two fills (black/grey → bone/grey on ink).
- Hero (HOME_BRIEF option c): a three.js render of their own product, the SCENERGY TP grid template (A–M / 1–13 hole grid,
  header tab, two optical fiducial markers on posts, knob), with a needle and a second probe and the green AR target ring;
  transparent PNG → hero.webp (963x1553), shown at or below native size right of the headline; a soft green pulse at the ring.
- Story: an axial MR/CT slice in fine line: register (VisiMARKERs + cameras), target (AR ring, planned path), track (needle +
  TipTAG through the grid), treat (second probe + cryoablation zone).
