# BioInVision, Inc. (bioinvision.com): home-only concept, batch 2026-11e

## Company
- Cleveland, Ohio CWRU spinout. CryoViz™ cryo-imaging (block-face sectioning plus bright-field and multi-spectral fluorescence imaging of whole mice and organs), developed at Case Western Reserve University and licensed exclusively to BioInVision. Sold as an instrument and as a fee-for-service imaging service. It also offers image analysis services and makes IschemiaViz™, AI software for cardiac CT perfusion. Sources: /about/, /cryoviz/, /cryo_service/, /analysis/, /ischemiaviz/.
- HQ: 781 Beta Dr. Ste E, Cleveland, OH 44143. Tel 216-373-1500. Email: inquiry@ and support@bioinvision.com (/contact/).
- Stats on the home page: 120TB+ imaging data library, 33M+ images processed, 75+ publications, 100+ contract imaging customers.

## People
- Debashish Roy, PhD: President and CEO, co-inventor (/about/; EIN Presswire 17 Nov 2025). **Lead.** Greeting: "Dear Dr. Roy".
- David Wilson, PhD: founder and CTO, Herbold Professor of Biomedical Engineering at CWRU, formerly of Siemens Medical Systems (/about/).
- Madhu Gargesha: Vice-President of Research and project PI (EIN Presswire). The registry listed him as the lead "to confirm". The site names Roy as CEO, so Roy is the lead.

## Activity
- 2025-07-30: NIH NIGMS SBIR Phase II award 2R44GM145205-02, $1,221,189 in the first year (https://reporter.nih.gov/project-details/11068695).
- 17 Nov 2025: the company announced the "$2.5M SBIR Phase 2" two-year award for AI tissue detection with CWRU (Brady-Kalnay, Wald) (https://www.einpresswire.com/article/867948657/bioinvision-awarded-sbir-grant-to-develop-ai-based-3d-microscopic-imaging).
- 1 Dec 2025: Cleveland.com coverage. The company also exhibited at booth 603 at ISSCR 2026 in Montreal, 8–10 July 2026 (home page).

## Bad-site evidence (live, 2026-11-20, 1440px)
1. On the home page, the "Learn More" button is overlapped by the dark "Receives Grant" news banner. The layout collides.
2. The home page hero is a clip-art mouse anatomy illustration with a cartoon magnifying glass, set over flat navy. Below it sit diagonal grey shapes and bold orange buttons.
3. The same grant headline is repeated twice in the slider. The page shows a stale SCCT 2025 "thank you for joining" block and a typo ("powrful").
4. There is no team page: the leadership appears only as a paragraph on About. The email is obfuscated ("[inquiry] at [bioinvision.com]"), and the contact form uses a "4 + 1 =" captcha.

## Build
- Palette: sampled from the logo PNG. Navy #343895 (deepened to ink #11143a), green #0b9948 (accent, #5fd08d on dark), red #ed1e24 (swoosh only). The orange #ff6900 buttons on the live site were not used.
- Logo: the wordmark is redrawn as SVG in Sora 700: BIO / IN in green / VISION, with the red swoosh.
- Hero (HOME_BRIEF option c): a crafted three.js render of their real mechanism, baked offline at 3200×1800 and embedded as WebP. It shows a frozen specimen block on the cryostat stage under the CryoViz objective, with the microtome knife at the back edge. The block face carries the company's own block-face cryo-image (bioinvision.com/wp-content/uploads/2025/07/2DMouse.png), re-toned as a fluorescence channel with illustrative green labelled cells. It drifts slowly in a Ken Burns motion. Bake scripts are in the session scratch (bake.html, face.py).
- Story: an engraved line drawing in four steps, Freeze → Section → Image → 3D. The mouse outline is traced from the same image. Specs come verbatim from /cryoviz/.
- Nav: Technology, Products, Team and News open #/more/<item> build-out pages. Contact scrolls to the contact block.
