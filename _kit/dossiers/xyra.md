# XYRA (xyra) — home-only concept, batch 2026-11h
Slug: `xyra` · built at `/xyra/` · domain xyra.us (company name, logo and press@xyra.us on the site; the XYRA press releases (PR Newswire, PharmaShots) cite www.xyra.us) · parts in `_kit/home/xyra/`

## Company
XYRA LLC, Los Altos, California: a private biopharma company developing budiodarone (a mixed ion channel blocker metabolised by esterases) for paroxysmal and persistent atrial fibrillation, dose-adjusted against rhythm data from implantable and wearable AF monitors.
- Lead: Peter G. Milner, MD, FACC, founder and managing member ("Dear Dr. Milner").
- Email: press@xyra.us (site footer; media/IR contact in the 31 Aug 2026 release). No personal address is published.
- Activity: 31 Aug 2026, first patient dosed in Europe (Poland) in the Phase 2/3 HARBOR-AF study (NCT07792239): https://newswire.pharmashots.com/?p=4990 . Also: US patent 12,551,706 (March 2026), a fifth US patent (24 Apr 2025), FDA End of Phase 2 agreement (26 Feb 2024).
- Bad site: a near-empty site-builder one-pager: a small raster logo, an abstract red stock image (images-unsplash-com.jpeg), an e-mail sign-up box, and team, science and news pages that are only lists.

## Design
- Palette from the logo: rust #bb4c39 (deepened to #b4462f/#b0432d for text and buttons), the pale pink of the pulse (#f0a493 on charcoal), warm white ground #faf7f4. Poppins, as on xyra.us.
- Logo: the mark redrawn as clean SVG circles plus the pulse (from their 906×810 WebP); wordmark XYRA in Poppins 700, as on their site.
- Hero, option (c): their own molecule, budiodarone (PubChem CID 9833332, 3D conformer), ray-traced as a glossy ball-and-stick model by `_kit/home/xyra/render.py` (numpy, soft shadows, AO) and baked with alpha to `xyra/hero.webp` (1450×1100). Slow breathing drift, no pointer response. Unique to this site.
- Story: "Dosed by the rhythm": a heart, a wearable AF monitor's rhythm strip, a 24-hour AF-burden line and a six-month dose staircase. Monitor (AF, a long episode over 5 h), then titrate (200 mg BID rising in 200 mg steps toward the 800 mg ceiling), then safe harbor (sinus rhythm, no episode over 5 h).
- Sections: hero, aim + stats, story, science (budiodarone), pipeline (HARBOR-AF CLN-209, CLN-210, FDA EoP2), team (xyra.us team page + release names), news (4 linked releases), contact. Nav items open build-out pages (buildout.js).

## Sources
xyra.us (home, /team/); PR Newswire 26 Feb 2024 and 24 Apr 2025; PharmaShots / Medianet 31 Aug 2026; Newswire.ca patent release (Mar 2026); PubChem CID 9833332.
