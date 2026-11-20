# Averto Medical, Inc. — dossier (home-only build, batch 2026-11e, medtech)

Sources, fetched 2026-11-20: avertomed.com (avertomedical.com serves the same Wix site): home, /about, /news-1 and its four posts, /blank-1 (contact);
ClinicalTrials.gov API: NCT06402188, NCT07429110; NIH RePORTER API (org "AVERTO MEDICAL"); PR Newswire release of 2025-02-13.

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-avertomedical.jpg): the hero tagline is faint grey text, nearly invisible over a blurry stock photo of sand dunes; the home page has two lines of copy and a four-link nav; the about page is a grid of headshots and investor logos with no text about the product; no product, mechanism, trial or contact details on the home page; the news and contact links of the old domain (avertomedical.com/news, /contact) return the Wix 404 page.
- Active: NIH NIDDK SBIR Phase II 1R44DK143876-01, $1,192,362, project start 2025-09-19 (https://reporter.nih.gov/project-details/11184789); $2.1M NIH grant release 2025-10-06; Fierce 15 (2025); pivotal study NCT07429110 started 2026-06-19 (actual), registry updated 2026-10-13.
- Scope: medical device for colorectal surgery; no pathogens, toxins or biodefence.

## Company
- "Averto Medical is a privately held clinical stage medical technology company focused on solutions for patients suffering from gastrointestinal diseases" (site footer). Home H1: "Finding a better way for patients facing colorectal surgery" (used as the hero H1).
- Formerly Savage Medical, Inc. (Series A release). Founded 2016 (Fierce 15).
- HQ: 1100 Island Drive, Suite 202, Redwood City, CA 94065 (privacy notice on the contact page, "last updated November 2026"). Releases say San Francisco Bay Area; NIH RePORTER lists Fremont, CA (older grantee address). Email: info@avertomed.com (contact page; the only published address).
- Product: ColoSeal™ Intraluminal Colonic Diversion (ICD) System = ICD Device + ICD Delivery System. Intended "to protect a damaged segment of colon such as a surgical anastomosis, anastomosis leak, or perforation from contact with fecal flow for up to 14 days" (NCT06402188). Inserted, advanced and positioned transanally; anchor placed >5 cm and ideally 10–20 cm above the anastomosis, in healthy bowel; external portion sutured to the skin; collection bag attached; in place 10 ± 3 days; leak test before removal (NCT06402188).
- Mechanism quotes (Fierce 15 write-up reposted on avertomed.com): "creates a vacuum around its circumference to hold it in place without disrupting the blood supply"; removal "takes about five minutes"; anchoring site "completely indistinguishable from the tissue" histologically; can be placed with a minimally invasive endoscope; used in about 40 patients (2025); pursuing a de novo clearance. Ostomy reversal "has an 18% complication rate, a half-a-percent mortality rate"; many patients live with "temporary" ostomies for life.
- Market: "potential to help over 100,000 patients annually who undergo colorectal surgeries" (Series A release). Fierce: about 130,000 patients a year (not used).

## Regulatory, clinical, funding
- FDA Breakthrough Device Designation, announced 2025-02-13 (PR Newswire 302383711).
- NCT06402188 European ColoSeal ICD System Safety and Feasibility Study: two prospective multicenter single-arm studies, rectal and rectosigmoid cancer, est. 90, recruiting; sites Yerevan, Tbilisi, Tashkent.
- NCT07429110 Anastomotic Protection Pivotal Study: randomized vs protective diverting ostomy, rectal cancer, est. 250; start 2026-06-19; collaborator NCI; sites Orlando Health, Cleveland Clinic Florida, Ohio State, MUSC, Vanderbilt, University of Utah, Otago (Christchurch, Dunedin), Waikato. CMS lists IDE G250282.
- NIH: R43CA246987 (2021, NCI), R44CA287615 (2024–25, NCI, rectal cancer), R44DK143876 (2025, NIDDK, diverticular disease). Contact PI on all: Kenton Dodyan Fong.
- $2.1M NIH grant release 2025-10-06: diverticulitis indication; Dr. Ankit Sarin (Chief of Colorectal Surgery, UC Davis) leading the investigation.
- Series A $30.5M, oversubscribed, 2024-05-07: led by Cormorant Asset Management; Venrock Healthcare Capital Partners, LifeSci Venture Partners, CVF and others.

## People (about page; bios from the Series A release and Fierce 15)
- Management: Kenton Fong (Chief Executive Officer; "Kenton Fong, MD, Founder and Chief Executive Officer"; trained as a plastic and reconstructive surgeon; co-founded Spiracur), Andy Uchida (Sr. VP, R&D), Anna Gawlicka (Sr. VP, Clinical & Regulatory), Brian Talbert (Sr. VP, Finance), Tanya Shalem (Head of Quality & Regulatory Affairs).
- Board: Ken Song (Executive Chairman; physician scientist, former gastroenterologist; led Ariosa Diagnostics, Omniome, RayzeBio), Bihua Chen (Director; Portfolio Manager, Cormorant Asset Management), Dan Puckett (Director; former CFO, Shockwave Medical), Kenton Fong.
- Lead: Kenton Fong, MD, Founder & CEO. Greeting: "Dear Dr. Fong".

## Brand
- Logo (wixstatic db094b_78e32c…jpg): "AVERTO" in graphite #666666 with a gold-gradient ring in the O and the A (#8f6a00 → #f6c800), "MEDICAL" spaced in olive-gold #ac9200. Site: white with olive-gold body copy.
- Concept palette: ink #141414 (graphite deepened), bone #f4f2ec, gold #e8b800 on dark / #7f6400 on light, graphite #8c8c8c in the mark. Type: Newsreader + Sora (geometric, close to the logo).

## Build notes
- Hero (HOME_BRIEF update option c): crafted render of the product in place, generated by `_kit/home/avertomedical/colon.py` (engraved large intestine with the gold ColoSeal anchor in healthy colon above the stapled anastomosis, sheath out through the rectum), rasterised by render.js at 1.6x to /avertomedical/hero.webp; slow Ken Burns breath and a gold pulse at the anchor. The company publishes no product photography (its only images are a stock sand-dune photo, headshots and investor logos). No stock, no AI imagery.
- Story: longitudinal section of colon and rectum: join → ostomy → anchor (with section A–A) → diversion.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
