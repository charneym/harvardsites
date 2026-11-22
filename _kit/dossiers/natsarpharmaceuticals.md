# Natsar Pharmaceuticals, Inc. (slug: natsarpharmaceuticals) — HOME-ONLY build, batch 2026-11h

- Site: https://natsarpharmaceuticals.com/ (Webflow one-pager, read 2026-11-22). Bad-site evidence: template look — a stock doctor-and-little-girl photo cut diagonally against a flat blue band, small italic Lato tagline ("Where Innovation Ignites Hope") and a rounded orange pill button; a flat orange "Who is Natsar?" band with clip-art line icons in circles; ALL-CAPS thin nav with a pill highlight; leadership bios behind modal "View Bio" buttons; news as a long list of PDF links. No street address anywhere on the site.
- Domain check: company name on the page; contact mailtos vraman@natsarpharmaceuticals.com and kkuipers@natsarpharmaceuticals.com; the company's own press releases (Sept 2025, Jan 2026, Sept 2026) are hosted on the site's Webflow CDN and datelined Ellicott City, MD; NIH RePORTER lists NATSAR PHARMACEUTICALS, Ellicott City MD 21043. Investor address is on a second domain (investors@natsarpharma.com) but there is no newer site — natsarpharma.com is mail only as far as the releases show.
- Scope: oncology (RK-33, DDX3 inhibitor, solid tumours). The old news list also mentions host-targeted antiviral studies (SARS-CoV-2, HIV latency, 2021–22); those are not pathogen/toxin/biodefence work by the company and are left off the concept, which presents the oncology programme only.
- HQ: Natsar Pharmaceuticals, Inc., Ellicott City, Maryland (press-release datelines; NIH org record zip 21043-6762).
- Lead: Venu Raman, PhD — co-founder, Director and Chief Scientific Officer ("Founder & Director" on the site; "Founder and Chief Scientific Officer" in the Sept 2025 release; "Co-founder" in the Sept 2026 IND release). Professor of Radiology and Oncology, Johns Hopkins. Pronouns on the site: "His research…". Greeting: "Dear Dr. Raman".
- Best published email: vraman@natsarpharmaceuticals.com (site contact block and privacy policy). Also: investors@natsarpharma.com (investor/partnership inquiries, site + Jan 2026 release); kkuipers@natsarpharmaceuticals.com (a site mailto, person not named on the page).

## Activity (pre-screen OK)
- 2026-09-17: NCI award 5R44CA295155-02 ($615,189), "Drug development of RK-33 for breast cancer treatment", PI Farhad Vesuna — https://reporter.nih.gov/project-details/11419762
- 2026-09-10: press release — IND for NSF-1 (RK-33 I.V. formulation) in effect; Phase 1 dose escalation in solid tumours, then a sarcoma expansion arm.
- 2026-01-30: press release — Cancer Letters paper "Targeting the DDX3/PAF1 Axis Enhances Chemotherapy Efficacy in Pancreatic Ductal Adenocarcinoma" (PubMed 41581643).
- 2026-01-08: Biotech Showcase 2026 presentation; raising Series A for Phase 1.
- 2025-09-22: $2.25M NCI SBIR Direct-to-Phase II (1R44CA295155-01A1).

## Facts used
Site: DDX3 DEAD-box RNA helicase (transcription, splicing, mRNA export, translation), overexpressed in many tumour types, lower survival in lung cancer (Bol 2015); identified in a microarray screen of breast cancer cells exposed to cigarette smoke (Botlagunta 2008); proliferation, anti-apoptosis, motility, hypoxia/HIF-1α, Wnt/β-catenin (CK1 activator). RK-33: first-in-class, rational drug design, binds DDX3 and abrogates activity; cell-death activation, Wnt inhibition, abrogation of NHEJ; G1 arrest, apoptosis, radiosensitisation; synergy with radiation; 70 human cancer cell lines with NCI independent confirmation; models: sarcoma, brain, pancreatic, lung, TNBC, breast cancer bone metastasis; durable responses. Clinical: Phase 1A safety/MTD in solid tumours, Phase 1B sarcoma expansion. Releases: NSF-1 I.V. formulation for hospital/infusion settings; all RK-33 IP licensed; investigational, not FDA-approved. Team per site (Raman, Loeb; SAB Tran, van Diest, Stearns, Cho) + NIH PI Vesuna.

## Palette / type
Logo: white italic striped "Natsar" wordmark (natsar-logo.png, used as-is in header and loader) and navy #003b7f mark tile (natsar-lg.png). Site: #003b7f header band, #eb8308 orange buttons/band. Mapping: ink #04122a (deep navy, the render's own ground), --acc #eb8308 (site orange; buttons with ink text), --accL #f5a142 (orange for text on dark), --rd #003b7f (logo navy, emphasis and buttons on light). Raleway display + Lato text, as on their site.

## Hero
Option (c), a crafted render of the firm's real target: human DDX3X — PDB 6O5F, "Crystal structure of DEAD-box RNA helicase DDX3X at pre-unwound state" (RCSB) — two DDX3X molecules clamped on an RNA duplex, rendered atom by atom by _kit/home/natsarpharmaceuticals/render.py (space-filling, wrap lighting, multi-scale AO, depth fog, true alpha) at 1100×1008; protein in the logo navy (lifted) and a pale steel, RNA in the site orange. Grepped the repo: no other concept uses DDX3/6O5F. Slow breath/drift, no pointer parallax (CZ).

## Story
One continuous tumour-cell scene: DDX3 (two RecA-like lobes) unwinds RNA → RK-33 diffuses in and seats in the cleft, unwinding stops (G1 arrest) → radiation breaks the nuclear DNA, repair blocked, membrane blebs (cell death).

## Photos
Original site imagery: a stock doctor/child photo (stock, skipped), clip-art icons (skipped), "thetarget-graphic.jpg" (low-res diagram, superseded by the story scene), headshots at 420×420 (840×1008 for Loeb) in mixed styles and only for some of the team — team shown as the text masthead (CI/CL) for one consistent format.
