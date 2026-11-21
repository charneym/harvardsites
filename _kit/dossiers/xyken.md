# Xyken, LLC (slug: xyken) — HOME-ONLY build, batch 2026-11f

- Site: https://www.xyken.com/ (Wix; read 2026-11-21). Early-2010s look: tab-bar nav (Home / Products / R&D / Careers / About), boxed hero panel, underlined link lists, "© 2023". Pages read: home, About, Missions, R&D (capabilities), Careers, Contact, SnugFit O&P 3D Scanner, SureScan Mirror, Performance/Accuracy.
- Product storefront on a second domain: https://www.snugfitsolutions.com/ (also Wix, a product-brand shop for the SnugFit apps; apps are "licensed by Xyken, LLC DBA SnugFit Solutions"). Not a newer corporate site, and itself a busy template, so the build goes ahead on xyken.com.
- Domain check: company name, address and NIH funding statements on xyken.com; NIH RePORTER org XYKEN, LLC, McLean VA 22102 (same address); info@xyken.com on product pages.
- Type: medtech, mobile 3D imaging for orthotics & prosthetics (O&P) and custom-fit hearing aids. No pathogens, toxins or biodefence.
- HQ: 7921 Jones Branch Dr., #392, McLean, VA 22102 (site footer).
- Email: info@xyken.com (xyken.com/snugfit, /mcure, /gisentinel pages). No personal email published.
- Lead: Dr. Steven Yi, contact PI on every Xyken NIH award since 2010 (RePORTER). Third-party listings call him CEO (event listing) or President & CTO (RocketReach, MyVisaJobs "President"); the site names no one, so the concept shows "Principal investigator, NIH SBIR awards". Ph.D. EE, Penn State (RocketReach; not used on the site). Greeting: "Dear Dr. Yi".

## Activity (pre-screen OK)
- 2026-05-18: NIH NIDCD SBIR Phase II, year 2, 5R44DC022803-02, $674,475, "Smartphone based custom-fit and low-cost hearing aids manufacturing system" (project 2025-04-15 to 2028-03-31). https://reporter.nih.gov/project-details/11320732
- 2025: 1R44DC022803-01, $673,350 (same project).
- 2021–2024: NIA SBIR 1R44AG069564 / 4R44 / 5R44 "A low cost and effective foot orthotics fabrication framework" (to 2026-05-31).
- Earlier NIH (RePORTER, PI Steven Yi): wound management 1R44AG067799 (2020–22), wound healing tracking R44AR072014 (2017–19), hearing aid shell R44AG058268 (2018–20), capsule endoscopy 720-degree R43AG058269 (2017–18), endoscopic 3D imaging R43AG056172 (2017–18), 3D imaging guided ART R43TR001285 (2015–16), capsule endoscopy video analysis R44DK091964 (2011–13), hearing aid shell digitizing R43DC011199 (2010), capsule endoscopy R43RR031309 (2010–11), endoscopic instrument R43DK088555 (2010).

## Facts used (site copy)
- "Leveraging our patented 3D and artificial intelligence technologies, we deliver customized, personalized solutions for clients worldwide in orthotics and prosthetics (O&P) and personalized sportswear."
- Stats (home): 8500+ clinic users; 5 star app rating; 1 hour customer response time; 25 countries with users.
- "We do not use third-party SDK as we own our IPs." Truly real-time capture, accuracy up to 0.2 mm, no losing track during scan.
- Scans FO, AFO, KAFO, knee, torso and head with the TrueDepth iPhone or iPad sensor, 5 to 25 seconds. Features: initial position indicator (green shade overlay or haptics); move freely, no losing track; sub-mm accuracy; no manual noise clean; auto accuracy setting per scan type; one-click upload of scans and prescription; records on device.
- Accuracy (performance page): ground truth from an industrial scanner (to 10 micron), foot model average error < 0.4 mm, torso < 0.5 mm; third-party evaluation, 35+ scans; Xyken 50+ scans.
- SureScan Mirror: patent-pending attachment (U.S. 29/866,037) lets the front TrueDepth (FaceID) camera capture full-colour scans while the user sees the screen; 53 g; developed through NIH support; "over 500" sold.
- SnugFit SDK (own app), Order-N-Scan (customers order custom footwear online), Deep Link (integrate an app with the SnugFit scan interface).
- R&D: 3D mobile imaging algorithms, specialized optics, embedded DSP/FPGA hardware; developing a high-resolution rear-camera 3D scanner. Industrial: SureScan 3D used for online inspection and robotic automation.
- All3DP named SureScan 3D Scanner app one of the best general-purpose 3D scanner apps: https://all3dp.com/2/best-3d-scanner-app-iphone-android-photogrammetry/
- "Established in 2016" (About) conflicts with SAM (2010) and NIH awards from 2010; no founding year is shown on the concept.

## Hero
Crafted WebGL render of the real product output (HOME_BRIEF option c): a SnugFit-style AFO scan (lower leg and foot, weight-bearing, flat sole) as a faceted scan mesh, a slow scan line passing over it. Geometry is generated in the page (signed-distance foot, surface nets). Palette: Xyken blue from the live site (#00699d hero band, logo gradient #2d74aa / #6ea8d8).
