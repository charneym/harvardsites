# Enyx Therapeutics, LLC — dossier (batch 2026-11e, HOME-ONLY build)

Slug: `enyxtherapeutics` · built at `/enyxtherapeutics/` · domain enyxtherapeutics.com

## The company
Enyx Therapeutics, LLC is an early-stage biotechnology company in New York, NY, developing in vivo gene
therapy for hereditary disorders of unmet medical need. Every programme is run in collaboration with the
laboratory of Dr. Ronald G. Crystal in the Department of Genetic Medicine at Weill Cornell Medicine, and
every one to date has been funded by an NIH STTR award to the company.

Source for the description, the programmes and all preclinical statements: the NIH RePORTER abstracts of
Enyx Therapeutics, LLC's own awards (api.reporter.nih.gov, org_name "ENYX THERAPEUTICS"). Nothing on the
site comes from anywhere else; the company publishes no content of its own (see "bad-site evidence").

Registered organisation record (NIH RePORTER): ENYX THERAPEUTICS, LLC, New York, NY, zip 10021-5351,
UEI PP93C8GM4JM5, DUNS 118569572.

## Programmes (all from NIH RePORTER abstracts)
| Programme | Vector | Indication | Award |
|---|---|---|---|
| ENX03 | AAVrh.10hALDH2 | Osteoporosis of ALDH2 deficiency in post-menopausal East Asian women | 2R42AA028465-02A1 (NIAAA, STTR Phase II) |
| ENX05 | AAVrh.10hC1EI | Hereditary angioedema | 1R41AI181097-01 (NIAID, STTR Phase I) |
| ENX02 | Ad5VEGF-All6A+ | Survival of transplanted autologous fat | 1R41HL170928-01A1 (NHLBI, STTR Phase I) |

Not used on the site: 1R41AI165000-01A1 (anti-eosinophil gene therapy for eosinophilic esophagitis). NIH
RePORTER lists Enyx as the organisation, but the abstract itself describes LEXEO Therapeutics as the
developer, so the attribution could not be verified and the programme was left out.

ENX03 preclinical findings quoted on the site, all from the abstract of 2R42AA028465-02A1:
- ALDH2 deficiency is hereditary, affects 8% of the world population and 35–45% of people of East Asian background.
- Heterozygotes have <50% ALDH2 activity, homozygotes <4%, because the mutant subunit is dominant negative in the tetramer.
- Acetaldehyde with ethanol suppresses early osteoblast progenitor formation, leading to decreased bone formation, osteopenia and osteoporosis.
- In two mouse models of ALDH2 deficiency on chronic ethanol, pretreatment with intravenous ENX03 markedly prevented the bone abnormalities (quantified by micro-CT and histology).
- In alcohol-consuming mice with pre-existing osteopenia, ENX03 increased cortical bone thickness: it both prevents and reverses the loss.
- Phase II aims: a pre-IND meeting with the FDA, clinical-grade manufacture, a safety/toxicology study, and an IND.

## Activity (latest first)
- **2026-08-13** — NIAAA continues the ENX03 STTR Phase II award for FY2026, $791,929 (5R42AA028465-03):
  https://reporter.nih.gov/project-details/11402253
- **2025-08-27** — NIAAA STTR Phase II award 2R42AA028465-02A1, $1,253,597:
  https://reporter.nih.gov/project-details/11256090
- 2024-04-25 — NHLBI STTR Phase I, ENX02: https://reporter.nih.gov/project-details/10912162
- 2024-03-15 — NIAID STTR Phase I, ENX05: https://reporter.nih.gov/project-details/10818251

Well inside the 2025-05-18 activity cut-off.

## Lead
**Dr. Ronald G. Crystal, M.D.** — contact principal investigator on every Enyx award (NIH RePORTER).
Titles, verbatim from his Weill Cornell department page: Chair of Genetic Medicine; Bruce Webster Professor
of Internal Medicine; Professor of Medicine; Professor of Genetic Medicine.
https://geneticmedicine.weill.cornell.edu/faculty-staff/chair

Greeting: **"Dear Dr. Crystal"**.
Best published email: **rgcryst@med.cornell.edu** (Weill Cornell directory profile,
https://directory.weill.cornell.edu/person/profile/rgcryst).
Department phone and address (from the chair page): (646) 962-2672; Department of Genetic Medicine,
1305 York Ave, 13th Floor, New York, NY 10065.

No CEO, president or other officer of Enyx Therapeutics, LLC is published anywhere that could be verified;
the site therefore names Dr. Crystal only, with his real title ("Contact Principal Investigator") and no
invented company role.

## HQ
New York, NY (NIH RePORTER organisation record).

## Bad-site evidence (enyxtherapeutics.com, checked 2026-11-20)
1. The live site is an unconfigured WordPress install on the default Twenty Twenty-Two theme. Page title and
   meta description are both the stock placeholder: `<title>enyxtherapeutics - Just another WordPress site</title>`,
   `<meta name="description" content="Just another WordPress site" />`.
2. The only post is WordPress's default sample content: "Hello world!" / "Welcome to WordPress. This is your
   first post. Edit or delete it, then start writing!", dated February 24, 2023.
3. The only navigation item is the theme's default "Sample Page"; the hero is the theme's stock illustration
   of a bird on a dashed line. There is no company content at all: no mission, science, pipeline, team,
   address or contact details.
4. The Yoast schema block describes the home page as a `CollectionPage` named "enyxtherapeutics - Just
   another WordPress site" — the site has never been configured beyond installation.

Screenshot: `_kit/sourcing/v2-sheets/11e-enyxtherapeutics.jpg`.

## The concept site
- **Palette (brand fidelity).** Sampled from the live site's own CSS custom properties: its theme primary
  `#1a4548` (deep teal) and secondary `#ffe2c7` (cream), on a near-black teal ink `#0b1516` derived from the
  theme's black header band. Type: Source Serif 4 (display, italic accents) + Inter Tight.
- **Hero (HOME_BRIEF update 2c, a crafted render of the real subject).** No usable free photograph of
  trabecular bone exists on Unsplash or Pexels (searched; every result was Science Photo Library, iStock or
  Alamy, none of which the brief allows), so the hero is an offline ray-marched render: a cylindrical core of
  trabecular bone with its front quarter cut away, showing the lattice of struts inside the cortical shell —
  exactly the structure the ENX03 abstract measures ("quantified by microcomputed tomography (µCT) ... bone
  volume/total volume, cortex thickness, trabecular number and thickness") and that ENX03 preserves and
  rebuilds. Rendered by `_kit/home/enyxtherapeutics/render.py` (numpy sphere tracing of a warped,
  load-aligned gyroid network, ambient occlusion, soft shadows, bone-ivory albedo with cortical porosity),
  baked to `hero.webp`; the hero canvas gives it a slow Ken Burns breath and no pointer response (CZ). The
  core sits right of 55% with a teal wash across the headline side, so nothing busy sits behind the H1.
  **rev2 (coordinator review):** the render is saved with an **alpha channel** and no ground of its own, so
  only the bone composites onto the page and no edge of the image rect can read as a pasted box; the ambient
  teal glow that used to sit inside the render is now painted by the live canvas across the whole viewport,
  and the core is seated lower (ky 0.53 → 0.585 of the viewport height) so its top rim is not crowded by the
  header. Verified by pixel scan at 1440 (no step at the former seams x≈695 and y≈36) and by eye at 1440,
  1920 and 390. The 16px strip at the extreme right is the reserved scrollbar gutter (`scrollbar-gutter:
  stable`, rule CT) and behaves identically on the shipped /phusistherapeutics/.
- **Story (pinned, DB).** One engraved section of trabecular bone over the blood stream, held for all three
  steps: acetaldehyde accumulates → the struts thin and break → one dose of ENX03 is taken up, ALDH2 appears,
  the acetaldehyde clears and the lattice is rebuilt.
- **Nav build-out pages.** Technology / Pipeline / Team / News open `#/more/<item>` through
  `_kit/lib/buildout.js` ("buildout" added to @libs); Contact scrolls to the contact block.
- **Sources folder:** `_kit/home/enyxtherapeutics/` (parts + `render.py`), `_kit/src/enyxtherapeutics.src.html`.

## Not invented
Everything on the page is from NIH RePORTER abstracts for Enyx's own awards, the Weill Cornell department
page and directory, or the company's own live site (palette). No funding round, investor, headcount, office
photograph, trial result or officer title has been asserted anywhere.
