# Aelis Farma (slug: aelisfarma) — HOME-ONLY build, batch 2026-11i

- Site: https://www.aelisfarma.com/ (Nuxt, "web design by Kaarma Digital", read 2026-11-23; pages Mission/Science, Pipeline, About us, Partners, News/blog, Contact, Imprint, Investors). Domain check: company name, logo, team, news and press releases on the site; imprint names AELIS FARMA, SA, RCS 797 707 627, VAT FR03797707627, 1 rue Lafaurie de Monbadon, 33000 Bordeaux, contact@aelisfarma.com, content owner Pier Vincenzo Piazza; press releases (ISIN FR0014007ZB4, ticker AELIS) link to the same site. No newer site on another domain.
- Type: clinical-stage biotech (Euronext Growth Paris); CB1 receptor signaling specific inhibitors (CB1-SSi) for brain diseases. No pathogen/toxin/biodefence work.
- HQ: 1 rue Lafaurie de Monbadon, 33000 Bordeaux, France. Lab: IECB, 2 rue Robert Escarpit, 33607 Pessac. Tel +33 5 54 54 23 27.
- Lead: Pier Vincenzo Piazza, CEO (and Director). The site's news calls him "Dr. Piazza" (2019 posts). Greeting: "Dear Dr. Piazza".
- Best published email: contact@aelisfarma.com (site footer, contact page, imprint). Investor relations via NewCap: aelis@newcap.eu (imprint). No personal address found.

## Activity (pre-screen OK)
- 2026-11-16: second positive IDMC recommendation for the Phase 2b study of AEF0217 in Down syndrome (74 participants analysed; results expected by end of 2027). aelisfarma.com/blog
- 2026-11: positive results of the retrospective study AEF0217-001. aelisfarma.com/blog
- 2026-07-15: IDMC recommends continuing the Phase 2b of AEF0217. https://www.businesswire.com/news/home/20260715592557/en/
- 2026-03 recruitment start; 2026-01 EMA PDCO positive opinion on the PIP; 2025-12-02 Phase 2B approvals (188 participants, 16–32 years, France/Italy/Spain).

## Bad-site evidence
A row of eight tiny multicoloured nav tiles (black, cyan, orange, teal, red, navy, grey, navy) with text crammed at their bottoms; a hero that is a collage of cropped stock "glass molecule" squares beside a hexagon-wireframe background; the headline "Opening a new frontier in pharmacology" stair-stepped in three sizes under a second copy of the logo; the pipeline page still says AEF0217 "will enter Phase 1/2 ... before end of 2022" and AEF0117 "entered a phase 2b ... in Q2 2022"; home-page news shows truncated titles ending in "Down ..."; "Visite our news page" typo; the imprint's cookie section names a different domain (aelis-finance.com).

## Facts used (aelisfarma.com unless noted)
- Hero tagline "Opening a new frontier in pharmacology"; "A pipeline of pharmacological inhibitors with a unique mechanism of action"; "Targeting disease states of the brain while preserving normal behavior".
- Mission quote (Pier Vincenzo Piazza, CEO); Science page on CB1, CB1-SSi, the previous antagonists, the natural defence mechanism (Science, 2014), no behavioural side effects identified to date; COO quote ("one goal: transform innovation into reliable therapeutic solutions for diseases with unmet medical needs").
- Pipeline: AEF0117 (open FDA IND, NIDA-NIH grants), AEF0217 (EU H2020 grant 899986; Down syndrome, Fragile X, ageing models), new CB1-SSi (discovery).
- Press releases on the blog: Phase 2B AEF0217 design (Dec 2025), IDMC reviews (Jul and Nov 2026), EMA PDCO (Jan 2026), Phase 1/2 results (Nov 2024), AEF0117 Phase 2b randomisation of 333 patients in 11 US centres (Jan 2024), Nature Medicine 2023 publication; blog text names pregnenolone as the brain's own CB1 brake from which CB1-SSi derive.
- Team: as on About us (management, board, SAB; SAB affiliations as written there).

## Palette / type
Logo af_logo.png (987×517 RGBA, used cropped at native resolution in header and loader): ribbon mark cyan #4cc2de → #1e718f → navy #083652, wordmark grey #adafb0. Live site: navy headings, orange Science tile. Mapping: ink #0a1a2a, accent on dark #4cc2de, on light #1a6c8e, the orange #e38a3a/#f09a4c only for the pathological pathway in the story. Type: Montserrat (display, close to the geometric wordmark) and Lato (their site font).

## Hero
Option (c), a crafted render: pregnenolone (PubChem CID 8955 3D conformer, hydrogens omitted) as a glass ball-and-stick model, the two oxygens in the logo cyan, echoing the glass-molecule imagery on their own site. `_kit/home/aelisfarma/mol.py 0.35 0.25 0.85 2600 hero.png` → hero.webp (1151×1301, real alpha). Unique in the repo (artiambio uses a CB1 receptor tube render; nothing else uses pregnenolone).

## Story
One fine-line scene: a membrane, the CB1 receptor's seven helices, an agonist in the pocket, three signalling paths (two "normal functions" in cyan, one "hyperactivity" in orange). Step 1 every path active; step 2 an antagonist takes the pocket and every path goes quiet; step 3 the agonist returns, a CB1-SSi seats on the receptor and only the hyperactivity path goes quiet.
