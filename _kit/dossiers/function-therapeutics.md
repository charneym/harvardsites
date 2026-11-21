# Function Therapeutics (home-only concept, batch 2026-11f)
- Site: https://www.functiontx.com/ (canonical; https://function-therapeutics.com serves the same Wix site, same logo asset eb0c4f_6990e6…). Ownership confirmed: the domain in the registry row redirects/serves the company's own site.
- HQ: Milwaukee, Wisconsin (NIH RePORTER org city/state; company partner of the Milwaukee Institute for Drug Discovery, UWM).
- Lead: Chris Dockendorff, Ph.D. — Founder, CEO and CSO (functiontx.com/team: "CSO & CEO"; founder per home page). Greeting: "Dear Dr. Dockendorff".
- Email: contact@functiontx.com (site footer on every page; the Contact page also shows contact@function-therapeutics.com). No personal address published.
- LinkedIn: https://www.linkedin.com/company/function-therapeutics/

## Activity (NIH RePORTER, org "FUNCTION THERAPEUTICS, INC.", Milwaukee WI)
- 2026-09-18: 5R43NS143450-02 (NINDS SBIR Phase I, continuation year), $200,070, "Parmodulins without Abuse Potential for the Treatment of Neuropathic Pain". https://reporter.nih.gov/project-details/11415152
- 2025-09-11: 1R43NS143450-01, $499,863 (same title); site release "receives SBIR award to study neuropathic pain" (up to $699,933; "6th competitive research grant ... since it started operations in 2022").
- 2025-09-11: 5R43DK141373-02 MASH ($39,740); 2025-07-02: 5R43DK138702-02 AKI ($88,907); 2024: 1R43DK141373-01 MASH ($463,714), 1R43DK138702-01A1 AKI ($325,000); 2023: 1R43HL169107-01 sickle cell ($299,790).

## Science / content sources
functiontx.com Home, Science, Projects (pipeline FTX-1 CKD, FTX-2 AKI, FTX-3 sickle cell & vascular, FTX-4 neurodegenerative), Team, News posts (neuropathic pain, MASH, obese mice / J Thromb Haemost, AKI, Wisconsin CTC). UWM MIDD post on the AKI award.

## Bad-site evidence (seen 2026-11-21)
1. First screen is a blurred stock lab photo under a flat blue overlay with a wave shape and no headline, copy or call to action (Wix).
2. "Careers" is in the main nav and footer, and the Contact page says "Please see our Careers page", but /careers returns "404 Error: Page Not Found".
3. Two domains serve the same site with two different contact emails (contact@functiontx.com in the footer, contact@function-therapeutics.com on Contact).
4. Home "Impact in Numbers" cites 2017 statistics ("698 million cases of chronic kidney disease recorded in 2017"); the newest news item shows no year ("Jan 6").
5. Typos on the Science page: "Beth Israel Deaconness", "toxicolology"; footer menu text breaks mid-word ("HO ME", "TEA M").

## Design decisions
- Palette from the logo: wordmark navy #2c5094 → --acc; the logo arrow red #e8302a → blue #1f4ee8 → --red/--blue and the red-to-blue gradients (brand arrow, loader bar, story rail, receptor colouring); live site's blue overlay → navy ink #0b1226; --accL #7ea2ff for lit accents on dark.
- Type: Source Serif 4 (light, italic accents, after the logo's italic serif), IBM Plex Sans text.
- Hero (HOME_BRIEF option c, mechanism subject): `par1.py` (adapted from mabswitch/ab.py) renders a space-filling model of human PAR1 atom by atom from crystal structure PDB 3VW7 (RCSB; T4 lysozyme fusion, vorapaxar, lipids and ions removed), coloured along the chain from logo red (N-terminus, extracellular, up) to logo blue, AO + rim + specular shading, transparent ground (real alpha, no box edge). Fitted whole right of the measured H1/lede + 140px, centred at 68–72% width; slow drift, no pointer response. Checked 1920×930, 1440×900, 390.
- Story: one engraved scene, four steps: PAR1 (seven helices in the membrane) cut by thrombin → red inflammatory signal → a parmodulin binds at the inner face → signal redirected (red dims, blue protective signal drawn). Schematic.
- Build-out pages via _kit/lib/buildout.js; Science / Programs / Team / News; Contact scrolls.
- Nothing invented; the "0 FDA-approved drugs" stat was replaced by a counted "4 pipeline programs" (anim gate).
