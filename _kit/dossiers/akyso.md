# Akyso Therapeutics (slug: akyso) — HOME-ONLY build, batch 2026-11i

- Site: https://akyso.com/ (single-page Bootstrap template behind a Cloudflare challenge, read 2026-11-23). Domain check: company name, logo, team, Salisbury MD address, NIH RePORTER project links (11011821, 11082099), ClinicalTrials.gov links (NCT06216132, NCT07064564) and the footer "Drug Delivery Company, LLC DBA Akyso Therapeutics" are all on akyso.com; the 29 July 2025 Business Wire release names akyso.com. No newer site on another domain.
- Legal entity: Drug Delivery Company, LLC dba Akyso Therapeutics (site footer). HigherGov's federal record lists AKYSO THERAPEUTICS, LLC in Saint Petersburg, FL; the site and the release give 26627 Pemberton Drive, Salisbury, MD 21801, which the concept uses.
- Type: clinical-stage drug-delivery biotech; bioabsorbable subcutaneous implants (iSTEP) for opioid use disorder, alcohol use disorder and (preclinical) GLP-1 weight loss. No pathogen, toxin or biodefence work.
- Leads: Jeffrey Benner, MD, and Steven Cohen, MD, co-founders and co-CEOs (akyso.com Our team). The site calls both "Dr." → "Dear Dr. Benner" / "Dear Dr. Cohen".
- Email: none published (akyso.com uses a reCAPTCHA contact form; web searches for an @akyso.com address found nothing). Phone (727) 270-0659 from the 29 July 2025 Business Wire release (via search summary; release page blocks automated reads). The concept's contact block links to their contact form and the phone; no email is invented.

## Activity (pre-screen OK)
- Q1 2026: akyso.com news, "iSTEP-G: An ultra-long acting GLP-1 agonist" — formulation R&D commenced in Q1 2026.
- 2026: akyso.com states the Phase 1b 12-month PK study (NCT07064564) will commence in Q1 2026.
- 2025-07-29: Business Wire, "Akyso Therapeutics Expands Pipeline with New NIH Grant for Buprenorphine Implant Following Successful Phase 1a Trial of Naltrexone Implant". https://www.businesswire.com/news/home/20250729152776/en/
- August 2025: NIDA/NIH funding for the buprenorphine implant (akyso.com).

## Bad-site evidence
Dated template: the hero is a flat grey slab with a giant raster logo and a thin pale "TUNABLE" caption over it; cramped small nav; stock photos (blueprint, lab coat, nanotube clip art, a woman on a path); a hit counter widget in the footer; typos ("It's beachhead product", "FDA Liason", "ISTEPTM)"); site sits behind a bot-check interstitial.

## Facts used (akyso.com unless noted)
- iSTEP = Implantable, Subcutaneous, Tunable, Extended-release, Polymeric implant; six to twelve months of delivery; inserted subcutaneously in the office through a small incision under local anesthesia; bioabsorbable, does not need removal; stable at room temperature; any size; release rate set by the ratio of two control-release polymers used in FDA-approved devices for decades. Patents 9,452,083, 9,445,941, 11,197,819.
- iSTEP-N: 10 cc solid bioabsorbable implant, 4.8 g naltrexone; Phase 1 completed April 2025; Phase 1b 12-month PK study commencing. In vitro near-linear release over 12 months. Phase 1a: excellent PK, no serious adverse events, acceptable adverse events. 9-month GLP toxicology.
- Pipeline (site table): iSTEP-N OUD (preclinical and Phase 1a done, Phase 1b active); iSTEP-B OUD (preclinical active; seamless 1a/1b/2 planned); iSTEP-N AUD (same bars as OUD); iSTEP-G GLP-1 (preclinical). All investigational.
- Working in sustained-release drug delivery since 2014; NIDA grant April 2019 (HEAL); $15M multi-year NIH/NIDA grant (Benner bio).
- Team summaries shortened from the site bios, nothing added.

## Palette / type
Logo (img/demo/banner.jpg, 1920×1080): navy #264e72, mint leaf #abd6cc; site header navy #254e72, text #333. Mapping: ink #10233a (deepened logo navy), accent on dark = logo mint #abd6cc, buttons/emphasis on pale = logo navy #264e72. Type: Figtree (geometric, close to the wordmark) for display; Open Sans for text (their site font). Header and loader use their real logo unmixed from the 1920px banner with real alpha (logo-w.png, 702×430): wordmark, head and left leaf in white, right leaf in the logo mint.

## Hero
Option (c): a crafted render of their real payload, naltrexone (the drug in iSTEP-N), as a glossy ball-and-stick model of its heavy atoms from the PubChem 3D conformer CID 5360515 (naltrexone-5360515.sdf), carbon pale satin, oxygen in logo mint, nitrogen light blue. Rendered offline by _kit/home/akyso/mol.py (args: SDF hero.png 1300 20 -30 0), real alpha. No other concept in the repo renders naltrexone.

## Story
One fine-line section through skin, dermis, subcutaneous fat and muscle with the implant in the fat, and the release curve below. Step 1: incision and insertion track; step 2: drug (logo mint) leaves the implant and the near-linear 12-month in-vitro curve draws to its end; step 3: the implant is absorbed and fades. The implant outline is schematic; its exact shape is not published.
