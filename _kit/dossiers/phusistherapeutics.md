# PHusis Therapeutics (slug: phusistherapeutics) — HOME-ONLY build, 2026-11-20

- Site: https://phusistherapeutics.com/ (static 2014 HTML by Tribe Design). Only the home page loads; every sub-page (About, Technology, PH-Domains, Product Pipeline, PDK1 Inhibitor PHT-427, RAS Inhibitors, Platform Programs, Management Team, Contact Us) returns the server's "Page Not Found" text. Wayback copies exist (2024–2026) but web.archive.org is blocked from this environment, so no archived text was used.
- Type: US biotech (SPEC §2c). Small-molecule oncology: inhibitors of pleckstrin homology (PH) domains. Lead PHT-427 (dual AKT/PDK1 inhibitor), topical, for actinic keratosis. Non-infectious; no pathogens, toxins or biodefence (in scope).
- HQ: La Jolla, California (NIH RePORTER org record for the 2025 award: La Jolla, CA 92037). The live footer still shows "3210 Merryfield Row | San Diego, CA 92121" (2014); not used as it may be stale.
- Email: info@phusistherapeutics.com (the live footer's "Email us" mailto; the only published address).
- Lead: Lynn Kirkpatrick, Ph.D., President & CEO (TheOrg profile, https://theorg.com/org/phusis-therapeutics/org-chart/lynn-kirkpatrick: "President & CEO"; former co-founder of ProlX Pharmaceuticals and Professor of Chemistry and Biochemistry at the University of Regina). Greeting: "Dear Dr. Kirkpatrick". The registry's provisional lead, Garth Powis, is the contact PI on the 2025 award and a co-founder ("Dear Dr. Powis" if the outreach goes to him).

## Facts used
- Tagline and description (live home page): "PHusis Delivers Precision Medicines for the Treatment of Cancer"; "developing novel targeted small molecule therapeutics that bind and block the pleckstrin homology (PH)-domain of critical signaling proteins involved in driving cancer cell growth and survival in patients with limited treatment options"; banner "Technology that focuses on creating exceptional products". Nav names: PDK1 Inhibitor PHT-427, RAS Inhibitors, Platform Programs.
- PHT-427 / actinic keratosis (NIH RePORTER abstract, 1R44CA306740-01, https://reporter.nih.gov/project-details/11256599): AK affects more than 58 million people in the US; up to 10% progress to cSCC; 5FU/imiquimod creams have significant toxicity and clearance "not much greater than placebo"; oncogenic PI-3-kinase mutated in half of AK and cSCC; PHT-427 a lipophilic dual inhibitor of AKT1/2/3 and PDPK1 that blocks membrane binding of their PH domains; topical PHT-427 decreased size and number of UV-B induced AK lesions in mice; readily permeates the stratum corneum, high skin concentrations, low transdermal absorption, minimal toxicity in mice and rabbit skin; Direct-to-Phase II SBIR to run a Phase IA safety/PK trial. $2,085,765; notice 2025-09-08; project 2025-09-15 to 2027-08-31.
- RAS programmes: 1R43CA171345-01A1 (2013, CNKSR1 PH domain, mut-KRAS; https://reporter.nih.gov/project-details/8589456) and 1R43CA186292-01A1 (2014, PLEKHA7 PH domain; 1.4 Å crystal structure; https://reporter.nih.gov/project-details/8777034). PI: Lynn Kirkpatrick.
- Platform: 7R01CA216424 (ALDOA, pancreatic cancer; allosteric lead probe at Cys289; https://reporter.nih.gov/project-details/10357451 and /10494262) and 7R21CA244691 (ERK5, colorectal cancer; /10357462), both with PHusis as grantee from FY2021, PI Garth Powis.
- Co-founders Drs. Kirkpatrick, Powis, Meuillet and Zhang: from the TheOrg profile (via search summary).
- Story mechanism: PI3K → PIP3 → AKT/PDK1 docking by PH domains is textbook PI3K signalling; the PHT-427 step is the abstract's wording.

## Activity (since 2025-05-18)
- 2025-09-08: NIH NCI SBIR Phase II award 1R44CA306740-01, $2,085,765, "Clinical evaluation of a novel AKT/PDK1 inhibitor, PHT-427, for the treatment of multi-field actinic keratoses". https://reporter.nih.gov/project-details/11256599

## Bad-site evidence
- 2014-era fixed-width (1024px) centred box on a grey background, small text, "© 2014 PHusis Therapeutics Inc." footer.
- Every nav link (About, Technology, Pipeline, PHT-427, RAS Inhibitors, Platform Programs, Management Team, Contact Us) leads to "Page Not Found ... We cannot locate the page you're looking for".
- The home page source carries ~110 injected spam links (e.g. "prada runway glasses", "instagram followers manager", a coupon site), a sign of a compromised site.
- Nothing about PHT-427's 2025 NCI Phase II award, actinic keratosis, or the team is reachable.

## Palette
- Logo (Phusis_header.gif, pixel-sampled): red #8b0b04 -> --acc / --rd (solid fills and emphasis on cream); logo tints #c58582 / #a84843 -> --rdL (buttons on dark, brand "PH") and --accL #d4958d (accents on dark). Site cream #f8f6ec (header) and #dddbd1 (page) -> --bone / --bone3. Ink: a warm red-black #170c0b derived from the logo red. The grey "Therapeutics" (#8f8a86) -> --gy / stone tones.

## Hero
- Crafted render (HOME_BRIEF update 2c): engraved block of human skin (surface relief, stratum corneum, epidermis, dermis with capillary loops, two follicles with sebaceous glands, sweat gland, arteriole/venule, subcutaneous fat) with a topical film whose molecules enter only the stratum corneum. skin.py -> skin.svg -> render.js -> hero.webp (2240x2400). No photography exists on the firm's site beyond three 1024x289 slideshow banners (a micrograph with molecule line art, stock lab glassware); not used (low resolution, BR).

## Gates (2026-11-20, #/)
smoke OK; reveal 1440/390 OK; anim 1440/390 OK; clip 1440/390 OK; overlay OK (no sheets); masthead OK; mixed OK; polish OK; loader OK; unstyled OK; cramped OK; hoverpad OK; split OK (after moving the pipeline indication out of the h3); balance OK; logo OK; hero-audit cold load OK (its second pass re-visits the same #/ route, which never re-renders on a home-only page, so it reports "no title found"); buildout-test OK (8 nav clicks, 1440 + 390). Hero and every story frame checked by eye at 1440 and 390.
