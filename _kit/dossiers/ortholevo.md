# Ortholevo — dossier (home-only build, batch 2026-11c, biotech)

Sources fetched 2026-11-21: ortholevo.com (/, /our-publications); NIH RePORTER API (org ORTHOLEVO, INC.); SBIR company profile (inknowvation.com/node/190814); Unsplash photo page.

## Pre-screen
- Bad site (passes): (1) JustHost/site-builder template: gradient nav bar, hero splits a cropped stock vial photo against a white column of centred text; (2) stale: newest news item August 2024, nothing on the July 2025 and July 2026 NIH continuation awards; "To stay in the loop on opportunities with Ortholevo this fall"; (3) broken copy: "When occurring in the shoulder, it's known as" followed by nothing; phone exposed only as a dialpad:// link; no email anywhere (Contact is a newsletter form); (4) the mechanism is explained in two paragraphs with no diagram.
- Active (passes): NIH NIAMS 5SB1AR084380-03, $490,333, award notice 2026-07-14 (https://reporter.nih.gov/project-details/11377370). Also 5SB1AR084380-02 $504,601 (2025-07-21, /11162423); 1SB1AR084380-01A1 $504,965 (2024-08-06, /11007103); 5R44AR079326-02 $914,843 (2022, /10448418); 1R44AR079326-01A1 $786,298 (2021, /10323754).
- Scope (passes): sustained-release relaxin-2 microparticles for joint stiffness (arthrofibrosis, frozen shoulder). No pathogens, toxins or biodefence.

## Company
- Ortholevo, Inc., Lynnfield, MA 01940 (NIH RePORTER, current). The 2024 SBIR profile lists 36 Muzzey Street, Lexington, MA 02421, (617) 721-2091 and info@ortholevo.com; founded 2016 per that profile. Site: "© 2020-2026 Ortholevo, Inc."
- Site claims used: grant-funded therapeutics startup spun out of Boston University and Harvard Medical School (Beth Israel Deaconess Medical Center); preclinical; locally acting injectable treatments for fibrotic diseases; patented sustained-release relaxin formulations effective in preclinical studies; five product development grants totalling $6M; frozen shoulder typically takes 6–12 months to resolve and stiffness often remains; relaxin is a peptide hormone in all women and men, upregulated in pregnancy, loosens joints via an antifibrotic mechanism.
- News (site): NIH CRP $1.5M (Aug 2024); Judges' Choice Winner, 2024 MA Life Sciences Innovation Day (Jul 2024); MassVentures START $100,000 (May 2024); US patent on treatment methods (Aug 2023); US patent on drug formulations (Sep 2022); Blavatnik Therapeutics Challenge Award $1M (Sep 2021); DoD CDMRP $1.7M (Sep 2021); NIH SBIR $1.7M (Jun 2021).
- NIH abstract (SB1AR084380): 9 million people in the US with shoulder arthrofibrosis, >1.6 million seeking surgery per year; injectable polymeric microparticle sustained-release relaxin-2; relaxin downregulates collagen and upregulates matrix metalloproteases; aims: pilot-scale drug substance, tox batch, rat GLP local toxicology, pre-IND meeting and IND submission.
- Publications (site): Sci. Transl. Med. 2022, 14, eabo3357 ("Minimally invasive, sustained-release relaxin-2 microparticles reverse arthrofibrosis"); PNAS 2019, 116, 12183; plus reviews.

## People
- Benjamin Cooper, PhD — Co-founder and CEO (site); NIH contact PI (title "Head of R&D"). Bio uses no pronouns. Greeting: "Dear Dr. Cooper".
- Ophélie Puisségur, MS, PhD — Assoc. Director, Clinical Development. Phillip Harding, MS — Assoc. Director, Drug Development.
- Scientific founders: Mark Grinstaff, PhD (BU); Ara Nazarian, PhD (BIDMC / HMS); Edward Rodriguez, MD, PhD (Chief, Orthopedics, BIDMC).
- Email: no personal address found (site, RePORTER, web search); best published: info@ortholevo.com (SBIR company profile).

## Brand
- Logo PNG sampled: navy #1f4a70 wordmark, red-orange #fc2400 dots. Site body font Lato.
- Built: ink #07111c (navy-black matched to the graded X-ray), accent red-orange #f2401c (#ff6a4d on dark, #c4290c on light), navy/steel in the story. Logo recoloured to bone with the red dots kept. Display Newsreader, text Figtree.

## Build
- Hero (option b): Unsplash photo cbdRcyFsCwI, "X-ray of a human shoulder and upper arm" by Stefani Medina, Unsplash License: https://unsplash.com/photos/x-ray-of-a-human-shoulder-and-upper-arm-cbdRcyFsCwI (CDN https://images.unsplash.com/photo-1769204978162-55d6fdb408ce). _kit/home/ortholevo/grade.py: crop to the joint, padded with the film's own black, rib cage sunk, tritone ink→navy→bone, long eased elliptical alpha mask reaching zero inside the image on every side. Placed at ~72% of the content width, never upscaled, slow Ken Burns; scrims are eased multi-stop gradients in the page ink. x6 luminance check: no straight edge.
- Story: one engraved coronal schematic of the shoulder: fibrotic capsule thickens and contracts → one injection places relaxin-2 microparticles in the joint → particles release relaxin (sustained vs bolus inset) → collagen loosens, capsule thins, arc of motion opens.
- Build-out pages: _kit/lib/buildout.js (@libs buildout). Technology / Pipeline / Team / News open #/more/<item>; Contact scrolls.
- Gates: smoke, clip 1440+390, buildout-test, fit-audit, loader-contrast, reveal/anim 1440+390, overlay, masthead, mixed, polish, loader, unstyled, cramped, hoverpad, split, logo all OK. balance-audit flags the DN statement+stats row and hero-audit reports "no title found"; both flags are identical on the approved champaign-imaging build.
