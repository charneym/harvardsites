# CardioMech (batch 2026-11k, home-only)
Slug: `cardiomech` · built at `/cardiomech/` · domain cardiomech.com · parts in `_kit/home/cardiomech/`

## Domain check
- cardiomech.com shows "CardioMech", "CardioMech AS, 7030 Trondheim, Norway", info@cardiomech.com, the team (Rick Nehm, Jacob Bergsland, Nikolai Hiorth …).
- CardioMech's June 2026 release lists www.cardiomech.com and rick.nehm@cardiomech.com. No newer domain found.

## Activity (pre-screen: OK; medtech, no pathogens/toxins/biodefence)
- 2026-06-24: shareholders appoint Ramin Mousavi as Chairman of the Board (press release, Fridley, Minn./Minneapolis):
  https://www.medtechdive.com/press-release/20260624-cardiomech-shareholders-appoint-ramin-mousavi-as-chairman-of-the-board-1/ ;
  MassDevice https://www.massdevice.com/former-cathworks-ceo-mousavi-chair-cardiomech/
- ClinicalTrials.gov NCT04820764 "EFS of the CardioMech MVRS": start 2021-07-27, active, not recruiting, 35 estimated, 12 US sites,
  record updated 2026-09-25.
- 2024-01-02 PR Newswire: $13M round, $42M total raised.

## Lead
- Rick Nehm, President & CEO (site bio uses "his") → "Dear Mr. Nehm". Email: rick.nehm@cardiomech.com (published as the
  media contact in the 2026-06-24 release). General: info@cardiomech.com.
- HQ: CardioMech AS, 7030 Trondheim, Norway; US site in Fridley, MN.

## Bad-site evidence
Near-empty page (screenshot `_kit/sourcing/v2-sheets/11k-cardiomech.jpg`): two lines of heading text, a thin rule, faint nav,
a black embedded-video box showing "We couldn't verify the security of your connection"; © 2018 footer; partners section
holds a single logo.

## Design
- Palette from their logo (cardiomech.com favicon/logo asset 78is4PxGP): capsule #b82a32 → --acc, gear #ee3232 → --accL,
  warm-black ink #141113 (their site is black type on white), bone light sections. Montserrat (their site's face) for display
  and the spaced wordmark; Inter for text.
- Logo: capsule-and-gear mark redrawn as clean SVG (render/mark.py, compared against the favicon), wordmark CARDIOMECH.
- Hero (HOME_BRIEF update option a, the firm's own photography): cardiomech.com asset A1upBLM7z (1920×1278), the founders in
  scrubs in an interventional suite. Graded with grade.py (third-party hospital signage and scrub print softened, slight
  desaturation, shadows toward the ink). The standing engineer sits at ~64% width, cap ~165px below the top at 1440; ink wash
  over the headline side; Ken Burns only. A three.js render of the logo mark was tried and rejected (read as a toy pill).
  Not captioned with names.
- Story: fine-line long-axis left heart. Seal → broken chord, prolapse and backflow → transseptal catheter → artificial chord
  anchored leaflet-to-ventricle wall, leaflet restored, catheter withdraws.
- Unused images: Norwegian mountain stock photo (stock), individual portraits (inconsistent crops/backgrounds; team shown
  text-only), Innovation Norway logo (set in type as the partner line).

## Gates
smoke OK (7 routes); reveal/anim/clip 1440+390 OK; overlay, masthead (9 rows), mixed, polish, loader, unstyled, cramped,
hoverpad, split, balance, logo OK; buildout-test OK (8 nav clicks); fit-audit OK (5 widths); loader-contrast OK;
textclash OK; entities clean; contrast 1440/390 OK. hero-audit reports "title never uncovered" on #/ (the known tool issue:
the fixed .fieldbg layer counts as a cover, same as on shipped builds); hero entrance checked by eye at 1920×930/1440×900/390.
