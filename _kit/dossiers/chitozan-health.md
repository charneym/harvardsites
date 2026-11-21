# Chitozan Health LLC — dossier (home-only concept, batch 2026-11c)

- Site built: `/chitozan-health/` (home only, build-out pages via `_kit/lib/buildout.js`)
- Source folder: `_kit/home/chitozan-health/` (assemble.py → `_kit/src/chitozan-health.src.html`; hero.py grades the hero)
- Live site: https://www.chitozanhealth.com (Squarespace; also served at dwightaustin-vanhorn-4ret.squarespace.com)
- HQ: 143 Helena Park Dr, Summerville, SC 29486-0427 (site footer; NIH RePORTER organisation city Summerville, SC)
- Phone: 904-729-6126 (site footer)
- Public email: avanhorn@chitozanhealth.com (site footer on every page, and the Barrier Packaging page)

## Lead
- **Austin Van Horn**, founder and President ("President ... Austin is the founder of Chitozan Health", https://www.chitozanhealth.com/the-team).
  The team page uses he/his ("His passion for solving challenges with chitosan technology"). Halo lists him as CEO,
  Dealroom as President; the company's own page says President.
- Greeting: **Dear Mr. Van Horn**
- Best published email: **avanhorn@chitozanhealth.com**
- Others: David Juhas, Chief Scientist (formerly at Kodak; contact PI on 1R41AI197639-01); Matthew Taylor, President Europe;
  Alan Taylor, Inventor; Dana Oliver, contact PI on the 2022 award (no title published, not shown on the site).

## Activity (most recent first, all sourced)
- 2026-09-01: NIAID STTR Phase I 1R41AI197639-01, $320,600, "Innovative Flame-Retardant Antimicrobial Textiles for Healthcare
  and Protective Applications", with the University of Georgia (https://reporter.nih.gov/project-details/11315042)
- FY2023: NIAID supplement 3R41AI172693-01S1, $55,000 (https://reporter.nih.gov/project-details/10825963)
- 2022-07-12: NIAID STTR Phase I 1R41AI172693-01, $254,157, chitosan-supported silver textile finish (https://reporter.nih.gov/project-details/10546228)
- Total NIH: $629,757 across three awards (shown on the site as "$630K")
- The 2026 abstract mentions an NIH I-Corps project "last year" (no separate record or link)

## Bad-site evidence (live site, screenshot 2026-11-21 at 1440)
- Stock Squarespace template; the hero is a generic chitosan chemical-structure diagram under two lines of black heading
- A bright yellow grant-disclaimer banner across the top of every page, plus a cookie bar
- The logo appears twice on the first screen (header plus a second copy floating beside the diagram)
- A nine-item, two-row nav in tracked capitals
- Typos and inconsistencies: "provding", "Stablize", "Chitozn Health", "tendancy", "afer", "anti-fugal", "Psudomonus",
  "manufacturers ofskin sereums", "chief scientist at kodak. he is an Experienced ..."; the technology is called both
  "Patented" and "patent pending" on the same page
- Raw phone number "9047296126"; no news page, despite three NIH awards

## Build notes
- Palette: their logo (CH-LOGO-RGB.jpg): navy #001647 and lime #95c94a. Page ink #07102a, accent #95c94a on dark, #4f7f1c on light.
  Jost (close to their geometric headings) plus IBM Plex Sans.
- Hero (HOME_BRIEF update 2b, option (b)): Ian Talmacs (@iantalmacs), "White old fabric on dark background", Unsplash License
  (free): https://unsplash.com/photos/a-close-up-of-a-white-curtain-on-a-black-background-h17PgQfCMqI. CDN
  https://images.unsplash.com/photo-1677285192836-55fcda3b8fba (downloaded at 2400 px). A macro of the cut edge of a white
  woven textile, the fibres lit against black. Portrait crop on the fringe, graded black → navy → cool white, with an eased
  elliptical feather on every edge (hero.py). A first attempt, a procedural woven-swatch render, looked synthetic (DI) and was dropped.
- Story: an engraved weave cross-section. The chitosan finish and silver chloride particles coat the weft, wash water
  passes over, then microbes land and break apart.
- Pre-screen: the antimicrobial textile/materials work was judged in scope (infection-control materials science, not pathogen
  research or biodefence; cf. /tecrea/).
