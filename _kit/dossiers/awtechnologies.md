# AW Technologies — dossier (batch 2026-11i, HOME-ONLY build)

Slug: `awtechnologies` · built at `/awtechnologies/` · domain awtechnologies.dk · parts, logo and hero processing in `_kit/home/awtechnologies/`

## Domain check
awtechnologies.dk (Wix) carries the company name and logo, the company history (Dr. Alberto Zanella, TrachFlush), a news page
with press-release PDFs through 2026-07-16, and the footer "AW Technologies ApS, Amalienborgvej 57, 9400 Nørresundby, Denmark ·
T: +45 7777 4048 · E: info@trachflush.com · © 2025 AW Technologies ApS". The press releases give info@awtechnologies.dk and
CVR 39 99 73 55. The FDA 510(k) K261499 applicant "Aw Technologies Aps" is at the same address. The product site trachflush.com
(same owner, © AW Technologies ApS) is also a basic Wix site, not a newer decent company site. Not pathogen/toxin related
(ICU airway device).

## The company
Danish medical device company, established late November 2018 (press releases), founded by Italian intensivist Dr. Alberto
Zanella with four MedTech entrepreneurs (awtechnologies.dk). Product: TrachFlush™, CE marked and launched mid-2020, FDA
clearance April 2023; further 510(k) K261499 (Cuff, Tracheal Tube, Inflatable, BSK, 21 CFR 868.5750), decision 2026-08-13.
- Cuff Control: maintains and adjusts the actual cuff pressure breath by breath; fast deflation for safe extubation; increased
  cuff pressure for a user-defined period (e.g. patient positioning) (trachflush.com).
- Flush Control: on the Flush button, synchronises with the ventilator, deflates the cuff during the inspiratory cycle, uses
  the airflow from the lungs and ventilator to push secretion from above and below the cuff into the mouth, re-inflates the
  cuff before expiration, avoiding PEEP loss (press releases 2026).
- Works with any endotracheal or tracheostomy tube. Four clinical references listed on trachflush.com/flush-control.
- Distribution partners: Asahi Kasei Medical (Japan, 2024-03-28), Grupo Moravi (Mexico), DIAMED (Germany), Duomed (Benelux),
  Medicare Hellas (Greece & Cyprus), Val-Tech (Kuwait), Central Medical Supplies (UK), Movi (Italy), Renovate Biologicals
  (India), Arabian Trade House (Saudi Arabia), Paragon Care (Australia & NZ), 2026-02-05 to 2026-07-16.

HQ: Amalienborgvej 57, 9400 Nørresundby, Denmark.
Lead: Adam Hansen, Chief Executive Officer — "MR. ADAM HANSEN, Chief Executive Officer of AW Technologies ApS" in the 2026
press releases (e.g. Paragon Care 2026-07-16, Arabian Trade House 2026-07-06); also CEO in the Asahi Kasei release 2024.
Greeting: "Dear Mr. Hansen".
Other people: Theis Thomsen, Regional Sales Manager, EMEA & Indian Subcontinent (press releases 2026-04-20, 2026-05-01);
Jorgen Hansen, FDA 510(k) contact (K261499, title not given).
Email: info@awtechnologies.dk (press releases); info@trachflush.com (site footer). No personal address published.

## Activity
- 2026-08-13: FDA 510(k) K261499 TrachFlush, substantially equivalent — https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K261499
- 2026-07-16: Paragon Care distribution, Australia & NZ — https://www.awtechnologies.dk/_files/ugd/25fb86_0a8a8848e498436988af31c8c6a06c39.pdf
- 2026-02 to 2026-07: ten further distribution releases on https://www.awtechnologies.dk/news

## Bad-site evidence
1. Home page is one long block of plain text ("The History of AW Technologies...") with a scanned patent-style line drawing and a
   phone photo of the prototype; no visual hierarchy, no product imagery up front.
2. Three-page Wix site (About / News / Contact); no team, no product page (it points out to trachflush.com, also basic Wix).
3. Typos and stale copy on the home page ("Artifical", "the results was published", "innovating"); copyright "© 2025".
4. The news page is a bare list of dated links to PDFs; the footer email is the product domain, not the company's.

## Build notes
- Hero: the TrachFlush device, the company's own product image (trachflush.com, "TrachFlush Picture - On-Off Bottom.png",
  2982x7218 RGBA), downscaled onto the page ink with a soft teal light and contact shadow (render.py). One calm object (DS).
- Logo: mark redrawn as SVG triangles with gradients sampled from the logo PNG; wordmark kept as the real lettering (alpha mask
  from the PNG, filled with currentColor) (mklogo.py).
- Palette: page ink #06192a from the mark's navy; accents #6fc4a0 (mark green, lightened) and #1f6e67 (mark teal); story
  secretion in the mark's yellow-green #c9bf1c. Fonts: Titillium Web (their headings) + Source Sans 3.
- Story: section through the airway (trachea, endotracheal tube, cuff, pilot line, secretion): the cuff / pressure / deflate /
  flush, schematic, drawn 1.8x wide.
