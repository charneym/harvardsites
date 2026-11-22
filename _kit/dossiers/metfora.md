# Metfora Diagnostics (Metfora LLC) (slug: metfora) — HOME-ONLY build, batch 2026-11g

- Site: https://www.metfora.com (Wix; read 2026-11-22). Pages read: home, about, technology, providers, pipeline, news-events, contact, and /bios (404).
- Bad-site evidence:
  - The home hero is a full-screen, AI-style photo of a family walking on a tropical beach, with no logo and no headline over it. The nav floats over the sky.
  - The Providers page carries leftover copy from another company: "Our mission is to harness the biological intelligence of bacteria, further engineered by Actym, to create biologically brilliant therapeutics…"
  - The Pipeline chart shows the placeholder rows "Indication 4" and "Indication 5", and the typo "Commercializaton".
  - Every "View Bio" link on the About page goes to /bios, which returns "Page not found (Error 404)".
  - There is no logo anywhere on the site, the contact page has only a form and no email, and the site uses generic stock imagery (tennis player, hiker, glass molecule).
- Domain check: the company name and the address (9040 S Rita Rd, Suite 1270, Tucson, AZ 85747) appear on metfora.com, and the LinkedIn page linked from the site is /company/metforadiagnostics. NSF award 2212865 (METFORA LLC, performance site 9070 S Rita Rd, Tucson; PI Martin Fuchs) matches. Tech Launch Arizona (2023-03-07) describes Metfora as a University of Arizona startup launched in 2020. No newer site was found.
- Type: diagnostics. A metabolomic (GC-MS plus machine learning) blood test for chronic disease; the lead test is ExpertLungDx for COPD, asthma, pulmonary hypertension and interstitial lung disease. No pathogens, toxins or biodefence.
- HQ: 9040 S Rita Rd, Suite 1270, Tucson, AZ 85747.
- Lead: the About page lists **Diana Morales, CEO** under Leadership Team. Martin Fuchs, CEO in the 2022–2023 coverage and NSF PI, is now listed without a title under "Business and data".
  - Diana Morales could not be corroborated outside metfora.com; two web searches found nothing.
  - Greeting: "Dear Ms. Morales" is not usable, because no pronouns are published, so use "Dear Diana Morales".
- Best email: none published by the company; the site has only a contact form.
  - The only published personal email is mfuchs@tiac.net: Martin Fuchs, PI on NSF SBIR award 2212865 (api.nsf.gov). He is the former CEO.
  - The NSF awardee phone is 520-338-8809.
  - No address for Diana Morales was found.

## Activity (pre-screen OK)
- 2025-08-22: metfora.com News reports that Metfora aligned with the FDA, through the pre-submission process, on the regulatory pathway and intended use of ExpertLungDx.
- 2025-06-18: publication on predictive modelling of ARDS mortality (listed on the Technology page).
- 2025-04-03: presented at Venture Madness 2025 in Tempe, its third selection in four years.
- 2024-12: Arizona Innovation Challenge awardee. 2024-04: Flinn Foundation Bioscience Entrepreneurship Program. 2023-01: NSF SBIR Phase I award, $255,706.

## Facts used
- Home: "Detect early, treat effectively."; the mission question ("What if a single test could catch chronic disease early, before it becomes debilitating?"); the Technology, Providers and Pipeline blurbs; the address.
- Technology: diagnosis can take up to four years; a potential diagnosis in as little as three days; benefits for health systems, physicians and patients (access through primary care physicians and specialists); four publications with dates.
- Providers: GC-MS plus machine learning; the metabolic fingerprint is tightly linked to disease pathology.
- Pipeline: lung diseases (asthma, COPD, ILD, PH), heart disease and diabetes. The site gives no stage in text, so no stage bars are drawn.
- About: the team list, verbatim; the founding scientific team's research at Indiana University. Rafikov and Rafikova as co-inventors come from Tech Launch Arizona (2023). The Fuchs summary comes from TLA 2023 and NSF.
- Programmes: NSF I-Corps, UA Center for Innovation and Arizona FORGE (TLA 2023).

## Palette / type
The Wix theme on the live site: navy #34578f, orange #f7931e, sun yellow #f1d855 (active nav) and teal #2dd1c6. The ink is #0d1626, the accent on dark is the brand orange, and the accent on light is the brand navy. The site has no logo, so the concept uses a simple wordmark ("met" plus "fora" in orange) with a blood-drop mark. Hanken Grotesk stands in for their Helvetica Neue Light; Literata is the display face.

## Hero
Option (c): a crafted render of the sample the test reads. It is a centrifuged blood-collection tube (amber plasma over red cells, with a thin buffy coat), ray-traced with _kit/home/metfora/render_tube.py.
- Rendering: Fresnel glass lit by studio strip lights, Beer-Lambert absorption per layer, a ribbed satin cap in the brand orange, and a paper label with a barcode.
- The tube is generic, with no branding. Output is real alpha at 591×1398.
- It is unique: no other concept uses a blood tube.

## Story
One fine-line scene:
1. Blood tube: metabolites shimmer in the plasma.
2. They run through the coiled GC column and the quadrupole rods, and the chromatogram is written.
3. A panel of peaks lights up in orange and condenses into a fingerprint, set against the four lung diseases.

The scene is schematic and implies no result.
