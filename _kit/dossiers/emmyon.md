# Emmyon, Inc. — dossier (batch 2026-11e, HOME-ONLY build)

Slug: `emmyon` · built at `/emmyon/` · domain emmyon.com · parts and render in `_kit/home/emmyon/`

## The company
Emmyon, Inc. ("Emmyon Metabolic Health") is a privately held biotechnology company in Rochester, Minnesota. Its
expertise is skeletal muscle biology, metabolism and small molecule discovery. It discovers small molecules that improve
muscle strength, mass and metabolism and commercialises them by out-licensing and R&D collaborations. Natural compounds
(ursolic acid, from apples and other fruits and herbs; tomatidine, from tomatoes) are developed as supplements, functional
foods, pet and livestock nutrition; novel compounds as pharmaceuticals for muscle atrophy, obesity and type 2 diabetes.
Sources: emmyon.com /overview, /platform, /natural-compounds, /novel-compounds, /commercial-applications/*, /patents.

Registered organisation record (NIH RePORTER): EMMYON, INC., Rochester, MN 55902, UEI M8CMYGLPB5H7, DUNS 078498658.
No street address is published on the site; the build shows "Rochester, MN 55902".

## Platform (emmyon.com/platform) — the story
1. Muscle biopsies from people with healthy muscle and with atrophy → mRNA expression signatures of human muscle atrophy.
2. Search for small molecules whose signatures are opposite → candidates (found ursolic acid, then tomatidine).
3. In vivo mouse atrophy models confirm safety/efficacy → nutrition products; leads for a medicinal chemistry programme.
Mechanistic work in parallel (molecular genetics in mouse models).

## Facts used on the page
- ~60 million people in the US affected by skeletal muscle atrophy; no pharmacologic therapy (/commercial-applications/pharmaceuticals, /human-nutrition).
- 27 granted patents, many pending; ursolic acid coverage to 2034 US / 2031 elsewhere; tomatidine 2033 US / 2032 elsewhere (/patents).
- NIDDK SBIR Phase II 1R44DK142200-01, "Development of novel therapeutics for obesity and type 2 diabetes", $1,021,719, notice 2025-07-23 (https://reporter.nih.gov/project-details/11060822); continued as 5R44DK142200-02, $1,021,719, notice 2026-07-23 (appl 11378372).
- NCI SBIR Phase II 1R44CA277853-01A1, "Development of novel therapeutics for cancer cachexia", notice 2023-03-07 (https://reporter.nih.gov/project-details/10692001); -02 2024.
- Earlier NIH awards: NIA (AG044898, AG047684), NIAMS (AR069400). Contact PI Scott M. Ebert on all but 1R41AG047684 (Christopher M. Adams).
- URSOLYX™ Soft Chews (Virbac): dogs, January 2025 (PR Newswire release); cats, January 2026 (Virbac product page).
- June 2026 study, AJP–Cell Physiology, doi 10.1152/ajpcell.00159.2026: ursolic acid preserved muscle mass in all five mouse cachexia models; grip strength and tetanic force improved; persisted with chemotherapy; no change in food intake or tumour growth; inhibited >90% of cancer-induced muscle mRNA changes (Emmyon release, 2026-06-06).
- January 2024: Emmyon and Virbac study in dogs, Animals 14(2):186 (https://www.mdpi.com/2076-2615/14/2/186).
- Team and advisors: emmyon.com/overview/people (names, titles, condensed bios).

## Leadership / outreach
- Lead: **Christopher M. Adams, MD, PhD**, Founder, President & CEO (emmyon.com/overview/people). Greeting: **Dear Dr. Adams**.
- Registry note named Scott M. Ebert (contact PI on the NIH awards; VP Biology). The CEO/founder is Adams.
- Best published email: **emmyon@emmyon.com** (emmyon.com/contact and every commercial-applications page). No personal emails published.

## Activity (latest first)
- 2026-07-23 — NIDDK continues the SBIR Phase II (5R44DK142200-02, $1,021,719), NIH RePORTER appl 11378372.
- 2026-06-06 — cancer cachexia ursolic acid paper (AJP–Cell), emmyon.com/news.
- 2026-01-21 — URSOLYX™ Soft Chews for Cats launch, emmyon.com/news.
- 2025-07-23 / 2025-08-10 — NIDDK SBIR Phase II award, NIH RePORTER 11060822; emmyon.com/news.

## Bad-site evidence
2010s WordPress layout: boxed logo tile overlapping a 1600×500 slider of handwritten chemical structures on paper; small
grey body text; red date-badge news list; stock beach/dogs/livestock banners; news posts authored "By redilson".
Screenshot: `_kit/sourcing/v2-sheets/11e-emmyon.jpg`.

## Design
- Palette: sampled from emmyon-logo.png (pixel counts: #000000, #ffffff, #c1272c). Warm black ink #0e0c0c, logo red
  #c1272c as the accent (solid buttons, rules), #ea6d6f for accent text on dark, bone #f6f3f0.
- Type: Archivo 800 wordmark (their heavy grotesque logo, red rule, "Metabolic Health"), Newsreader display, Archivo text.
- Hero (HOME_BRIEF update 2c, crafted render of the real subject): a cut skeletal-muscle fascicle, ray-marched offline by
  `_kit/home/emmyon/render.py` (Voronoi fibre field, fibre-type mosaic on the cut face, endomysium, peripheral nuclei,
  sarcomere striations), baked with alpha to `emmyon/hero.webp`, slow Ken Burns breath, ink scrim on the headline side.
  No Unsplash/Pexels micrograph of skeletal muscle was found; their own site has only a 1600×500 fluorescence micrograph.
- Story: one continuous scene of their discovery platform: fibre cross-section atrophies, atrophy signature bars rise,
  the compound's mirror-image signature rises, fibres restored and signature falls back.
- Build-out pages: nav Technology / Applications / Team / News open #/more/<item> (lib/buildout.js); Contact scrolls.
