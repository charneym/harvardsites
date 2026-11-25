# Galaxy Therapeutics (batch 2026-11l, home-only)
Slug: `galaxytherapeutics` · built at `/galaxytherapeutics/` · domain galaxytherapeutics.com · parts in `_kit/src/galaxytherapeutics-parts/`,
assembled by `_kit/src/galaxytherapeutics.assemble.py` (engine: the gerdcare home-only src, same pattern as clearguidemedical),
hero rendered by `_kit/src/galaxytherapeutics.render.html`.

## Domain check
- galaxytherapeutics.com (WordPress/Elementor) shows "Galaxy Therapeutics, INC.", the SEAL™ device, the 2026 CE-mark banner,
  team (Dr. Sam Zaidat President & CEO, Jim Twitchell COO, Ryan Chittaro CFO, Dr. Michael Alexander CMO), founders/board
  (Zaidat, Thomas Wolfe, Aamir Badruddin, Edgard Pereira), HQ 803 Ames Avenue, Milpitas, CA 95035, Contact@gtseal.com
  (gtseal = the SEAL product domain used for the company inbox). Uploads dated 2025-02, 2025-06 and 2026-05.
- ClinicalTrials.gov: Galaxy Therapeutics sponsors NCT05831202 (SEAL IT pivotal), NCT05880680 (SEAL ME registry),
  NCT05686733 (Pre-SEAL IT, first in human). No newer company domain found.

## Activity (pre-screen OK: neurovascular implant, no pathogens/toxins/biodefence)
- 2026-08-04: SEAL Embolization System CE marked under EU MDR 2017/745 (notified body DQS); phased European introduction in
  preparation; US PMA under review. https://evtoday.com/news/galaxy-therapeutics-seal-embolization-system-gains-ce-mark
  (also BioWorld 733099).
- 2025-12-31: SEAL IT pivotal trial completed enrollment, 279 patients at 50 US sites (WNBA, sidewall, ruptured cohorts; PIs
  David Altschul MD, Brian Jankowitz MD). https://evtoday.com/news/galaxys-pivotal-trial-of-seal-device-for-brain-aneurysms-completes-enrollment
- PR Newswire: Dr. Michael Alexander appointed Chief Medical Officer (Cedars-Sinai Professor and Vice Chair of Neurosurgery,
  past SNIS president); company "founded by four practicing neurointerventional physicians", Milpitas, CA.

## Lead
- Osama (Sam) Zaidat, MD, President & CEO (galaxytherapeutics.com; "Dr. Sam Zaidat") → "Dear Dr. Zaidat".
- Best published email: Contact@gtseal.com (on the site's home, contact, HCP and patient pages; no personal address published).
- HQ: Milpitas, California.

## Bad-site evidence
Screenshot `_kit/sourcing/v2-sheets/11l-galaxytherapeutics.jpg`: dated Elementor layout; a raster logo; a plain text banner
over a stock-looking cath-lab photo; a cramped purple panel of centred, ragged gold text cut off by a chevron; boxed
small news text lower down.

## Design
- Palette from the logo and site: purple #582c5f (deep #3a1840), rosette/THERAPEUTICS gold #efa002 and amber #d68b14, on a
  deep aubergine ink #170d1c with lilac bone #f6f3f7; gold #f0b43c accent on dark, purple #6a3473 on light.
- Type: Jost (close to the site's Avenir Next) for display, Inter for text; Krona One for the redrawn logo.
- Logo: redrawn as clean SVG (spirograph rosette of 14 purple + 14 gold circles through the centre, "GT" monogram, GALAXY in
  an extended sans, spaced THERAPEUTICS), solid and crisp; their mark is only a 509px raster.
- Hero (option c): a three.js render of the SEAL implant itself, a dual-layer braided nitinol/platinum lattice whose wires
  converge at one proximal hub (after the SEAL ARC artwork on their site), on true alpha over the page ink; slow float/breath.
  Not reused from any other concept.
- Story: a fine-line parent artery with an aneurysm sac at the fork; steps size (ARC/BASE, 2–19 mm), enter (microcatheter,
  atraumatic tip), deploy (dual layer opens from the hub), divert (flow to the branches, sac settles).
- Sections: hero, manifesto + stats (279 / 2–19 / CE), story, technology (the six "SEAL advantage" claims with their own
  footnotes and the EU/US regulatory statements), clinical (SEAL IT, SEAL ME, Pre-SEAL IT, pre-clinical), team (text-only),
  news (all link out), contact. Nav items → build-out pages via _kit/lib/buildout.js.
