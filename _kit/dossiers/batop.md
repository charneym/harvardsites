# BATOP GmbH (slug: batop) — HOME-ONLY build, batch 2026-11l

- Site: https://www.batop.de/ (hand-built w3.css pages; read 2026-11-25: home, About BATOP, Contact, Impressum, Sales offices, Products, Saturable absorber, Terahertz, Laser, Custom devices, Information, How does a SAM work?, News history, Jobs).
- Domain check: company name, address, Impressum (managing director Dr.-Ing. Andreas Richter, Amtsgericht Jena HRB 112769, VAT DE 813698804) and info@batop.de are all on batop.de; the same HRB number is in the registry row's source. batop.cn is only their China mirror. No newer site on another domain.
- Type: deep tech; semiconductor optoelectronic devices (III-V epitaxy). Out-of-scope check: no pathogens, toxins or biodefence.
- HQ: Stockholmer Str. 14, 07747 Jena, Germany. Tel +49 (0)3641 634009 0. Own building since March 2017; founded 2003 (About BATOP).
- Lead: Dr.-Ing. Andreas Richter, Chief Executive Officer / Geschäftsführer (Contact page, Impressum). Greeting "Dear Dr. Richter". CTO: Rico Hohmuth.
- Best published email: andreas.richter@batop.de (Contact page, written "andreas.richter at batop.de"); general info@batop.de.

## Activity (pre-screen OK)
- Exhibitor at LASER World of PHOTONICS 2025, Munich, 24–27 June 2025, stand A2.428: https://exhibitors.world-of-photonics.com/ausstellerportal/2025/aussteller/ausstellerdetails/batop-gmbh/?elb=178.1100.1688.1.111 (verified 2026-11-25).

## Bad-site evidence
- Hand-built 2000s look: blue w3.css bar, underlined blue link headings ("Saturable Absorber", "Terahertz Devices"), boxed product thumbnails with link lists under them.
- News history stops in 2018 (latest "2018-02-11: Resonant saturable absorber in transmission…"); Impressum © 2022.
- Low-res raster logo (400×119 JPG), 132×147 px portraits, a 300×200 product photo; no team section, no explanation of the company on the home page beyond "Semiconductor optoelectronic devices".

## Palette / type
Logo blue #017cc2 (sampled from logo.jpg), site bar blue. Mapping: deep blue-black ink #0b1520, logo blue #017cc2 on pale and buttons, lifted blue #4fb0ec for accents on dark, bone #f4f6f8. Type: Cabin (display; humanist sans close to their Gill-like wordmark), Source Sans 3 (text), IBM Plex Mono (labels). Logo redrawn as filled SVG: the stacked-layer mark as paths, wordmark set in Cabin.

## Hero
Crafted render (HOME_BRIEF 2c) of their own product: a 4″ LT-GaAs wafer with customized metal structures (batop.de Custom devices photo). three.js physical materials, offline (home/batop/render/wafer.html, params in render/params.txt), matted from black/white renders into real alpha (render/comp.py). Unique in the repo (no other wafer render hero).

## Story
How a saturable absorber mirror works (batop.de "How does a SAM work?"): AlAs/GaAs Bragg mirror + LT-GaAs absorber grown on GaAs; weak light absorbed, intense pulse saturates the absorber and reflects; passive mode-locking with a stable pulse repetition rate.

## Gates (2026-11-25)
smoke OK (6 routes); reveal/anim/clip 1440+390 OK; overlay, masthead, mixed, polish, loader, unstyled, cramped, hoverpad, split, balance, logo OK; buildout-test OK (6 nav clicks); fit-audit OK (5 widths); loader-contrast OK (no flags); textclash OK; entities clean; contrast 1440/390 OK; hidden.js lists only the inactive story steps. hero-audit reports "title never uncovered" (the known fixed .fieldbg cover issue); hero entrance checked by eye at 1920×930, 1440×900 and 390. Hero ×6 luminance: no box edge; wafer ~190px clear of the H1 at 1440. Loader frames 200–2000 ms at 1440/390: whole logo or nothing.
