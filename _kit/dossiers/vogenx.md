# Vogenx, Inc. (slug: vogenx) — HOME-ONLY build, batch 2026-11i

- Site: https://vogenx.com/ (WordPress + Smart Slider; read 2026-11-23; pages Home, Management Team, Board of Directors, Scientific Advisors, Pipeline, Post Bariatric Hypoglycemia, Gastroparesis, News; IR at investor.vogenx.com). Domain check: company name, logo, team, address and info@vogenx.com on the site; the 15 Oct 2026 Newswire release says "For more information, please visit https://vogenx.com"; investor.vogenx.com links back to it as the "Corporate Website". No newer site on another domain (the IR subdomain is an investor portal only).
- Type: clinical-stage biopharma (Nasdaq: VOGX); mizagliflozin, oral minimally absorbed SGLT1 inhibitor acting in the intestinal lumen, for post-bariatric hypoglycemia (PBH), gastroparesis, GIP-dependent Cushing's syndrome; VGX-2857 for metabolic disease. No pathogens, toxins or biodefence.
- HQ: 3901 Barrett Drive, Suite 300, Raleigh, North Carolina 27619 (site footer, IR site). The site header still shows an older Durham address (3920 South Alston Ave), not used.
- Lead: James Green, Chief Executive Officer and Chairman (Management Team page; quoted in the Oct 2026 release). Site uses "Mr. Green" → "Dear Mr. Green".
- Best published email: no personal address found (site, releases, web search). General info@vogenx.com (site footer); investors IR@vogenx.com; clinical investigator.inquiries@vogenx.com. Phone (+1) 919.659.5677.

## Activity (pre-screen OK)
- 2026-10-15: Newswire, "Vogenx Initiates Phase 2b EMERGE Study of Mizagliflozin for Post-Bariatric Hypoglycemia" (VGX-001-013; NCT07760961; ~36 adults, ~10 US sites). https://www.newswire.com/news/vogenx-initiates-phase-2b-emerge-study-of-mizagliflozin-for-post-bariatric
- Also: Nasdaq listing (VOGX; IR site, S-1 linked) and "Vogenx Appoints Ken Toombs to Board of Directors" (Newswire); dates not checked.

## Bad-site evidence
Template WordPress site: a stock lighthouse photo slider ("Welcome to VOGENX") with rounded green/navy pill buttons and slider arrows; leftover template content on the live home page: "Lorem ipsum dolor sit amet…" under "Transforming lives of Patients with rare Disease", cards "Product Pipeline — Sampling at your address", "R&D Locations — State-of-the-art technology", and a header link "Book Free Home Samples"; two different addresses (Durham header vs Raleigh footer); dead Facebook/Twitter/YouTube/Instagram icons; news last updated April 2025 though the company IPO'd and started Phase 2b.

## Facts used (vogenx.com unless noted)
- Mizagliflozin: investigational first-in-class oral small molecule SGLT1 inhibitor, site of action intestinal lumen; reduces postprandial glucose absorption and insulin and GIP secretion; SGLT1 is the primary glucose/galactose transporter in the small intestine (Pipeline). Minimally absorbed, acts locally unlike systemic SGLT inhibitors (Oct 2026 release).
- PBH: bariatric patients overexpress SGLT1; GIP may be responsible for 60–80% of postprandial insulin effect; no FDA-approved therapies; hypoglycemia 1–3 h after eating; 25–75% of bariatric patients wearing CGMs exhibited PBH in recent studies.
- VGX-001-012: single-blind, randomized, placebo-controlled, ascending-dose crossover, 15 participants; 5 & 10 mg TID combined: nadir +56% (+20 mg/dL; p=0.028), glucose peak −34% (p=0.031), insulin peak −64% (p=0.03) in the hypoglycemic subgroup during MMTT.
- >500 subjects across 10 clinical studies; well tolerated, no drug-related SAEs (Oct 2026 release).
- Gastroparesis: >5 million in the US as of 2024 (company estimate); IND planned 2026, then Phase 2 PoC in idiopathic gastroparesis, primary endpoint gastric emptying breath test.
- VGX-2857: metabolic disease indications incl. weight maintenance after substantial weight loss.
- Team, board and SAB as on the site (summaries shortened, nothing added).

## Palette / type
Logo (logo.png / Logo-TM-wht.png): green #6bbc44, navy #003463, light gloss #90cc74. Mapping: navy → ink #061d33; logo green → accent on dark #7fcb57; deep green #3a7d1f for buttons on the pale ground #f4f7f2. Inter Tight + Inter. Header and loader carry their real logo (800px raster, Logo-TM-wht.png) with the navy V and dot turned white for the dark ground (logo-w.png, 749×286, shown at 40–46px in the header, ~300px wide in the loader).

## Hero
Option (c): crafted render of their real target, human SGLT1, as a Gaussian molecular surface from the public cryo-EM structure PDB 7WMV (chain A only; MAP17 and the bound ligand omitted), shaded logo green → deep blue. Rendered offline by _kit/home/vogenx/surf.py (adapted from nzymebio/surf.py; BB=0.62, args 0.25 0.55 0.12 2400), real alpha. No other site uses SGLT1/7WMV.

## Story
One fine-line scene: intestinal villi with SGLT1 transporters at the tips, capillary loops and the bloodstream, and the blood-glucose curve after a meal against the 54 mg/dL line. Step 1 glucose floods in through SGLT1 and the curve spikes; step 2 insulin (amber) rises and the curve crashes below the line; step 3 mizagliflozin (logo green) caps each transporter, glucose waits in the lumen, and a gentler green curve stays above the line.
