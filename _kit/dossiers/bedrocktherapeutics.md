# Bedrock Therapeutics, Inc. — dossier (home-only concept, batch 2026-11e)

- Site built: `/bedrocktherapeutics/` (home only, build-out pages via `_kit/lib/buildout.js`)
- Source folder: `_kit/home/bedrocktherapeutics/` (assemble.py → `_kit/src/bedrocktherapeutics.src.html`)
- Live site: https://bedrocktherapeutics.com
- HQ: Chapel Hill, NC 27514 (NIH RePORTER organisation record, zip 27514-3621)
- Public email: info@bedrocktherapeutics.com (footer of their own site)

## Lead
- **Matthew Hirsch, PhD** — CEO & Co-Founder (title from their own Leadership Team page).
  Associate Professor of Ophthalmology, UNC-Chapel Hill, joint appointment in Microbiology & Immunology
  (https://www.med.unc.edu/molecularmedicine/people/matthew-hirsch-phd).
  Best published email: **mhirsch@email.unc.edu** (UNC Molecular Medicine faculty page, listed publicly).
  No pronouns published → greeting "Dear Matthew Hirsch".
  Alternate company address: info@bedrocktherapeutics.com.
- Other named people (their site): Brian Gilger, DVM, MS, DACVO — CMO & Co-Founder (Professor of Ophthalmology,
  NC State); Jackie Bower, PhD — CFO (Research Assistant Professor, UNC); Chengwen Li, MD, PhD — Co-Founder;
  Roger "Bryan" Sutton, PhD — Co-Founder.
- Registry's suggested lead, Junjiang Sun, is the contact PI on the 2025 NIAMS award but is not listed on the
  company's leadership page; the CEO is used as the lead instead.

## Activity (most recent first, all sourced)
- 2025-09-19 — NIAMS STTR Phase I, 1R41AR086050-01A1, $304,502, "Intramuscular Administration of AAV Vectors
  Encoding soluble PD-L1 for Rheumatoid Arthritis Treatment" — https://reporter.nih.gov/project-details/11252985
- 2025-08-01 — NEI STTR Phase I, 1R41EY036318-01A1, $310,952, "Vector mediated anti-vascular and
  anti-inflammatory therapy for AMD" — https://reporter.nih.gov/project-details/11068416
- 2025 — NEI STTR Phase II continuation, 5R42EY031625-03, $793,930 (AAV-BDRK-401, corneal transplant rejection)
  — https://reporter.nih.gov/project-details/11180103
- 2025-03-18 — UNC Ophthalmology: "UNC-NCSU Team Discovers Genetically Engineered Pathway to Decrease Rejection
  of High-Risk Corneal Transplantation" — https://www.med.unc.edu/ophth/2025/03/unc-ncsu-discovery-genetically-engineered-pathway-decreased-rejection-corneal-transplantation/
- 2024-11-06 — Molecular Therapy, PMID 39245940 (Gilger, Hasegawa, Sutton, Bower, Li, Hirsch)
- Total NIH SBIR/STTR awarded: $3,473,311 across nine project years, 2020–2025 (RePORTER, org "Bedrock Therapeutics").

## Bad-site evidence (bedrocktherapeutics.com, viewed 2026-11-20)
1. W3.CSS / Font Awesome 4.7 template: `styles/w3_modded.css`, `w3-content w3-container w3-padding-64`,
   default tab-style top bar with glyph icons ("Home / Technologies / Team").
2. The whole first screen is a 1105×731 logo PNG on white (`images/bedrockHero.png`); no headline, no sentence
   saying what the company does.
3. "Technologies" is two headings and two bare PubMed IDs ("PMID: 32637455", "PMID: 39245940") — no explanation
   of the science, no links.
4. No pipeline, no news, no funding, no address; contact is one line of text in the team grid.
5. Team portraits are inconsistent crops and resolutions (215×215, 345×345, 376×376, 512×512) in a plain grid.
6. A second video block is commented out in the markup (`<!-- <video id="bgVideo" ... scimII_4-24.mp4`), and that
   file 404s (returns an HTML error page).
7. Stale copyright: "All material © copyright 2025 Bedrock Therapeutics".

## Brand
- Palette sampled from their own logo PNG: navy `#072d51`, teal `#198285` on white. Site tokens: ink `#061020`,
  accent `#17807e` (`#4cbcb3` on dark), bone `#f2f6f7`. Display type Newsreader (their wordmark is a lowercase
  serif); Archivo for labels.

## Hero
- Real macro photograph of the human iris, Unsplash: `photo-1705071393219-7c0c65afa314`,
  "a close up of an eye with a black background" by Anastasiya Badun,
  https://unsplash.com/photos/a-close-up-of-an-eye-with-a-black-background-2wDxCCw83HM (Unsplash licence).
  Cropped to the iris, graded to the logo's teal/navy (gradient map, original chroma partly retained), radially
  feathered to transparent → `bedrocktherapeutics/hero.webp` (1900×1900, below native resolution).
  The eye is the company's own subject: lead programme BDRK-401 treats the donor cornea, and the AMD and ocular
  GvHD programmes are ocular too.

## Story scene
- Custom engraved scene: donor corneal graft in a dish → AAV capsids taken up ex vivo → secreted scIM halo holds
  off new vessels after transplant. Facts from RePORTER R42EY031625 and PMID 39245940.

## Gates
smoke OK · reveal OK · anim OK · overlay OK · mixed OK · unstyled OK · split OK · logo OK · masthead OK ·
polish OK · loader OK · loader-contrast OK · fit OK · cramped OK · hoverpad OK · clip 1440 + 390 OK ·
buildout-test OK (8 nav clicks). balance-audit's CENTRE note on sub-routes also fires on the approved
reference /emmyon/ (build-out overlay artifact); hero-audit's "title never uncovered" likewise.
