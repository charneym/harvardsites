# Micro Medical Solutions (slug: micromedicalsolutions) — HOME-ONLY build, 2026-11-23 (batch 2026-11h)

- Site: https://micromedicalsolutions.net/ (custom WordPress theme "micromedical", uploads dated 2026-08/10, behind a bot-check interstitial). Domain confirmed: "Micro Medical Solutions" throughout the page, "© 2026 Micro Medical Solutions", info@micromedicalsolutions.net on the contact page, and the same leadership as the press releases. The 2025-07-22 press release names www.micromedicalsolutions.com, but that domain is only a parked lander page (redirects to /lander), so .net is the live site. No newer domain found.
- Type: US medtech (SPEC §2c): the MicroStent™ Peripheral Vascular Stent System for below-the-knee interventions in critical limb-threatening ischemia (CLTI). No pathogens, toxins or biodefence.
- HQ: 175 New Boston Street, Suite H, Woburn, MA 01801 · 877-760-0677 (contact page).
- Email: info@micromedicalsolutions.net (the only address published on the site; the press release lists no contact).
- Lead: George Quinoy, President and CEO (About Us; the site uses "Mr. Quinoy"). Greeting: "Dear Mr. Quinoy".

## Facts used (micromedicalsolutions.net unless noted)
- Home: "Leave the RIGHT thing behind™"; mission to reduce preventable amputations and the morbidity, mortality and burden of CLTI in people living with PAD; >21 million people in the U.S. with PAD; 2.0–3.4 million in the US with CLTI; 150K amputations per year in the US, 44–85% diabetes related may be preventable; CLTI: poor quality of life, mortality above every other form of occlusive cardiovascular disease, spiralling economic burden; 25% of CLTI patients require an amputation within a year of diagnosis.
- Product: 48 woven strands, self-expanding nitinol; permanent crush-resistant scaffold, improves luminal diameter; 4 Fr introducer sheath; antegrade, retrograde or pedal approach; pin & pull delivery; radiopaque shaft markers; 0.014" guidewire; 40 or 120 cm shaft; sizes 3.0/3.5/4.0/4.5 mm × 15/25/40/60 mm (all available); platinum core in each strand (<50 microns); low chronic outward force; optimised radial resistive force. FDA caution text (pending PMA).
- About Us: leadership (Quinoy, Dennis, Jacob, Goodman, Thornton, Hogan, Brown, Campanella, Duany) and board (Quinoy, Dahldorf, Burgess, Fletcher, Solar), bios condensed. B/W portraits are the site's own (uploads/2026/10).
- News: rows link to the company's own news posts and to BioSpace.

## Activity (since 2025-05-18)
- 2025-07-22: George Quinoy appointed President and CEO. https://www.biospace.com/press-releases/micro-medical-solutions-appoints-george-quinoy-as-president-ceo-to-accelerate-commercialization-and-drive-value-creation
- 2026: site rebuilt (uploads 2026/08 and 2026/10); David Goodman joined as VP of Global Marketing in April 2026 (About Us).

## Bad-site evidence
- The hero is a stock-looking grey 3D render of a stent tied into a loop, with a red italic slogan on a plain grey page; the product block on the home page is an empty image frame, and a large blank grey band follows it.

## Palette
- Their CSS: ink #272222 (dark band) → page ink; red #cf1820 → --acc, red-dark #a91117 → --accD; on-dark eyebrow #e8434b → tint #ee5a61 for --accL; surface #f5f5f5 → --bone. Fonts are their own: PT Serif (headings), Roboto (body; bold italic for the logo). Logo raster-only (179×45), so it is redrawn as an SVG: three interlaced red ribbon arches over "micro medical" / "solutions".

## Hero / story
- Hero (option c, product render): home/micromedicalsolutions/render.py renders a braided 48-strand nitinol stent (one over / one under weave, z-buffered strands, polished-metal shading, far wall hazed), with real alpha. Not stock; no reuse.
- Story: an engraved lower leg (side view) with the popliteal and tibial arteries plus "Detail A" of the artery in section: occlusion and the foot at risk → 4 Fr sheath and 0.014" guidewire → stent placed (radiopaque markers, pin & pull) and self-expanding → permanent scaffold, flow reaching the foot. Schematic.
