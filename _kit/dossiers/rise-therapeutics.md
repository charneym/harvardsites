# Rise Therapeutics — factual dossier (sources only)

Slug: `rise-therapeutics` · Site: https://risetherapeutics.com/ · Built: `rise-therapeutics/index.html`

## Company
- **Rise Therapeutics, LLC** — privately held, clinical-stage biotechnology company, Rockville, Maryland. Source: https://risetherapeutics.com/news/77-rise-therapeutics-completes-dose-escalation-in-r-5780-phase-1-cancer-trial-advances-to-dose-expansion ("Rise Therapeutics is a privately held, clinical-stage biotechnology company located in Rockville, Maryland…").
- Address: **1405 Research Blvd., Suite 220, Rockville, MD 20850**. Source: https://risetherapeutics.com/contact-us
- Time zone: US Eastern (Rockville, MD).
- Press/contact email published in a release: `hr@risetherapeutics.com` — Source: https://risetherapeutics.com/news/76-rise-therapeutics-completes-enrollment-in-four-week-dose-expansion-cohort-for-the-r-2487-rheumatoid-arthritis-clinical-trial ("Contact: hr@risetherapeutics.com"). LinkedIn: https://www.linkedin.com/company/rise-therapeutics/
- Positioning (their words): "first-in-class **Oral Immune BioModulators**, for the treatment of autoimmune diseases and cancer", with "a fully integrated research and product development infrastructure". Source: https://risetherapeutics.com/about-us

## Platform / science (their site + NIH abstracts)
- Synthetic-biology engineered **live biotherapeutic products**: food-grade *Lactococcus lactis* engineered to express and deliver a protein ligand to the intestinal tract; given orally in enteric-coated capsules. Sources: NIH RePORTER 5SB1DK141356-03, 5R44AI174844-03; ClinicalTrials.gov NCT07791888 intervention description ("R-3750 DP is a live biotherapeutic product consisting of *Lactococcus lactis* engineered to express Surface Layer Protein A (SlpA), formulated in enteric-coated capsules for oral administration").
- Mechanism: the delivered ligand engages **pattern-recognition receptors / dendritic cells lining the intestinal tract**, driving systemic upregulation of regulatory T cells (Tregs) and "bystander tolerance" in autoimmunity, or an anti-tumour T-cell response in oncology. Sources: NIH RePORTER 5R44AI174844-03, 5R44AG084484-04, 5R44CA261509-04; https://risetherapeutics.com/our-science
- SlpA target: "SlpA binds to the C-type lectin … SIGNR3 receptor expressed on dendritic cells lining the gut [and] prevents experimentally induced colitis in multiple models"; protection was lost in Signr3-/- mice. Source: NIH RePORTER 5SB1DK141356-03 abstract.
- SagA: a peptidoglycan-remodelling enzyme from *Enterococcus faecium*; the peptidoglycan metabolites it generates "directly engage host PRRs activating key host immune signaling pathways", and delivering SagA recombinantly from a probiotic potentiated PD-1 checkpoint therapy in murine tumour models. Source: NIH RePORTER 1R44CA306440-01A1 and 5R44CA261509-04 abstracts.
- CFA/I: colonization factor antigen I from human enterotoxigenic *E. coli*, "effective at inducing auto-Ag-specific Tregs when administered orally"; expressed from *L. lactis* as R-2487. Source: NIH RePORTER 5R44AG084484-04 abstract.
- In-house clinical **GMP manufacturing**: "clean space isolator systems and modular GMP clean rooms", "high-throughput automatic encapsulation for drug product manufacturing, followed by packaging, labeling, and distribution to clinical sites nationwide", "advanced analytical systems for validated product release, characterization, and stability assessments", "compliance with 21 CFR Part 11 standards". Source: https://risetherapeutics.com/capabilities
- Manufacturing scale-up motivation (L. lactis bioreactor densities): NIH RePORTER 1R43TR004300-01 abstract.

## Programs — stage verified on ClinicalTrials.gov (API, 17 Nov 2026)
| Candidate | Indication | Trial | Status (CT.gov) | Notes |
|---|---|---|---|---|
| R-2487 (*L. lactis* expressing CFA/I) | Rheumatoid arthritis | NCT05961592, Phase 1 | Recruiting; actual start 19 Oct 2023; est. enrolment 73 | Sites: UC San Diego; St. Jude Clinical Research (Doral FL); AP Medical Research (Miami); Edward Jenner Research (Plantation FL); Altoona Center for Research (Duncansville PA); Prolato Clinical Research Center (Houston) |
| R-2487 | Sjögren's disease | NCT06297213, Phase 1 | Not yet recruiting; est. start Nov 2026; 36 | Sites listed: Johns Hopkins Jerome L. Greene Sjögren's Syndrome Center; University of Michigan |
| R-3750 (*L. lactis* expressing SlpA) | Ulcerative colitis | NCT05666960, Phase 1 | Recruiting; actual start 27 Feb 2023; est. enrolment 36 | Collaborators: Mayo Clinic; University of Colorado, Denver |
| R-3750 | Crohn's disease | NCT07791888, Phase 1 | Not yet recruiting; est. start Nov 2026; 40, randomised 1:1 vs placebo, 12 weeks dosing (9E10 CFU/day), follow-up to ~Day 168 | Funded by the Sept 2026 NIDDK Phase II |
| R-3750 | Late-stage ARDS | NCT07646028, Phase 1 open-label | Not yet recruiting; 20 | 9×10⁹ or 9×10¹⁰ CFU/day, oral capsules or NG/OG tube |
| R-3750 | Mild-to-moderate COPD | NCT07076290, Phase 1 | Not yet recruiting; 27 | Repeat ascending dosing |
| R-5780 (probiotic delivering SagA) | Solid tumours, with a PD-1 checkpoint inhibitor | NCT06398418, Phase 1 | Recruiting; actual start 1 Aug 2025; est. enrolment 33 | Sites: Sarah Cannon Research Institute, Denver and Nashville |
| R-5280 (butyrylated/acetylated high-amylose resistant starch) | Type 1 diabetes | — | NIH abstract: "In our prior Phase 1 clinical trial enrolling adolescents with recent onset of T1D, oral administration of R-5280 increased SCFA production leading to improved overall glycemic control" | Source: NIH RePORTER 5R44DK137649-02 |

API used: `https://clinicaltrials.gov/api/v2/studies?query.term=R-3750` etc.

## Funding (NIH RePORTER; amounts are FIRST-YEAR award amounts)
- **1R44CA306440-01A1** — NCI SBIR Phase II, "Clinical Validation of a Synthetic Biology-Based Microbial Medicine to Treat Immunotherapy Refractory Solid Tumors", **$740,140**, award notice **16 Sep 2026**, project 16 Sep 2026 – 31 Aug 2029, contact PI Gary Fanger. https://reporter.nih.gov/search/?projects=1R44CA306440-01A1
  - Abstract: Phase II "focused on obtaining human validation for R-5780 by completing a first-in-human Phase 1 proof-of-concept clinical trial in ICI refractory solid tumor subjects"; specific aims: assess safety, determine clinical benefit, evaluate pharmacodynamic activity, identify novel biomarker changes, scale-up manufacturing development.
- **1R44DK146369-01** — NIDDK SBIR Phase II, "A Novel Immunological-Directed Live Biotherapy Product for Treating Crohn's Disease", **$1,042,478**, award notice **3 Sep 2026**, project 1 Sep 2026 – 31 Aug 2028, contact PI Christian Furlan Freguia. https://reporter.nih.gov/search/?projects=1R44DK146369-01
  - Abstract facts: "An estimated 800,000 to 1 million adults in the U.S. suffer from CD"; R-3750 is "a SlpA-expressing *Lactococcus lactis*"; the ongoing UC Phase 1 (IND 28994, NCT05666960) "demonstrated excellent safety, with no serious adverse events (SAEs) or drug-related adverse events (AEs)", with "significant improvement of the disease symptoms accompanied by relevant biomarkers changes such as upregulation of Treg".
- Earlier awards by org search (`org_names: ["RISE THERAPEUTICS"]`, 49 records, 2018→2026), selected:
  - 1R43AI138681-01 (NIAID, 2018, $299,953) C. difficile · 1R43DK117726-01A1 (NIDDK, 2018, $480,497) IBD
  - 1R44AI157031-01 (NIAID, 2021, $1,000,000) rheumatoid arthritis · 1R44CA261509-01 (NCI, 2021) checkpoint potentiation
  - 1R44DK133061-01A1 (NIDDK, 2022) ulcerative colitis · 1R44DK134274-01 (NIDDK, 2022, $1,021,316) type 1 diabetes
  - 1R44AI174332-01 (NIAID, 2023) viral-induced ARDS · 1R44AI174844-01A1 (NIAID, 2023) multiple sclerosis
  - 1R44AG084484-01 (NIA, 2023) rheumatoid arthritis, renewed 5R44AG084484-04 (28 Jul 2026, $967,715)
  - 1SB1DK141356-01 (NIDDK, 2024) ulcerative colitis, renewed 5SB1DK141356-03 (16 Jul 2026, $811,362)
  - 1UG3DE034134-01A1 (NIDCR, 14 Aug 2025) Sjögren's, transitioned 4UH3DE034134-02 (1 Sep 2026, $549,833)
  - 1R43TR004300-01 (NCATS, 2022) oral probiotic drug-delivery platform manufacturability
  - Awarding institutes represented: NCI, NIDDK, NIAID, NIDCR, NIA, NCATS.

## People (names, titles and bios from their own pages; headshots company-hosted)
- **Gary Fanger, PhD** — Founder, President & CEO. 20+ years in biotech; director on the board of Virtici and formerly OncoImmune ("$425M acquisition by Merck in 2020"); previously SVP & COO at Amplimmune ("$500 million acquisition by Medimmune/AstraZeneca in 2013"), VP Business Development at MacroGenics, business development/antibody programme leadership at Corixa. 35 patents; 45–50+ peer-reviewed articles, book chapters and reviews. MBA Seattle University; PhD Molecular and Cellular Biology, Dartmouth Medical School; BS Chemistry, Denison University. Sources: https://risetherapeutics.com/about-us and https://risetherapeutics.com/about-us/our-team. Headshot: https://risetherapeutics.com/images/2022/02/03/gary-fangerfinal.jpg (700×842)
- **Christian Furlan Freguia, PhD** — Senior VP of Research. 10+ years in biotech; previously Director of Research at Synthetic Biologics, Director of Immunology at ImQuest Biosciences; inventor on several patents; 15+ research and review articles; PhD molecular biology and biochemistry, University of Ferrara. Contact PI on the Sept 2026 NIDDK Phase II. Headshot: https://risetherapeutics.com/images/2022/02/03/christianfinal.jpg
- **Sathya Janardhanan, MS** — VP of Manufacturing. Decade-plus setting up drug development programmes into Phase I/II; multiple IND and EMA filings; cGMP manufacturing planning, facility development, CDMO management; founded Apsis Healthcare; previously senior scientist at NextCure; MS Chemical Engineering, University of Maryland. Headshot: https://risetherapeutics.com/images/2022/02/03/sathyafinal2.jpg
- **Janet Stephens, PhD** — Senior VP of Operations (the team page states "Senior VP of Clinical Operations"; the About page states "Senior VP of Operations"). 30+ years of operational experience in healthcare and medical research; previously executive roles in Operations, Quality Assurance, Risk Management, Clinical Trials Management; Certified Healthcare Risk Manager; member of RAPS, SOCRA, ASHRM. Headshot: https://risetherapeutics.com/images/2024/02/23/janet.jpg
- **Sophie Chapelle, MS** — VP of Business Development. 25+ years building biotech businesses through product development, partnering and fundraising; previously Sherlock Biosciences, Scipher Medicine, President, Clinical Trials at CogState, business development at Pfizer, Global Marketing & Sales for UCB's biologics contract manufacturing division; engineering degree University of Brussels (ULB), masters in medicinal chemistry University of Lille. Headshot: https://risetherapeutics.com/images/2025/02/19/sophie.jpg
- Source for all five: https://risetherapeutics.com/about-us/our-team

## News (real links used on the site)
- 22 Sep 2026 — "Rise Therapeutics Completes Dose Escalation in R-5780 Phase 1 Cancer Trial, Advances to Dose Expansion": https://risetherapeutics.com/news/77-rise-therapeutics-completes-dose-escalation-in-r-5780-phase-1-cancer-trial-advances-to-dose-expansion
  - Quote used (Gary Fanger, President and CEO): "Completing dose escalation for R-5780 is a meaningful step in translating our novel immunotherapy approach into a potential option for people fighting cancer."
  - Facts: independent Data Monitoring Committee supported advancing into dose expansion; trial enrols up to 33 participants; "R-5780 is one of three Rise Therapeutics programs, all based upon its proprietary oral biologics drug delivery platform, that are now in clinical testing, alongside ongoing studies in ulcerative colitis, rheumatoid arthritis, and Sjögren's disease."
- 2 Jun 2026 — "Rise Therapeutics Completes Enrollment in Four-Week Dose Expansion Cohort for the R-2487 Rheumatoid Arthritis Clinical Trial": https://risetherapeutics.com/news/76-rise-therapeutics-completes-enrollment-in-four-week-dose-expansion-cohort-for-the-r-2487-rheumatoid-arthritis-clinical-trial
  - Facts: Phase 1b trial NCT05961592; "the expansion cohort enrolled 40 patients"; trial targets intervention "before patients begin treatment with biologics or JAK inhibitors"; DMC reviewed and recommended progression; "completion of enrollment positions the company to advance R-2487 into Phase 2 clinical development".
- 23 Sep 2025 — "Rise Therapeutics Secures New Funding to Advance First-in-Class R-2487 Oral Immune Biomodulator into Sjogren's Disease Clinical Testing": https://risetherapeutics.com/news/72-rise-therapeutics-secures-new-funding-to-advance-first-in-class-r-2487-oral-immune-biomodulator-into-sjogrens-disease-clinical-testing
- 13 Jan 2025 — "Rise Therapeutics Receives FDA IND Clearance to Initiate Clinical Testing of R-5780 in Cancer": https://risetherapeutics.com/news/70-rise-therapeutics-receives-fda-ind-clearance-to-initiate-clinical-testing-of-r-5780-in-cancer
- 7 Apr 2025 — "Rise Therapeutics Reports Ulcerative Colitis Dose Escalation Clinical Results for R-3750 at the Digestive Disease Week (DDW) Conference in San Diego May 3-6": https://risetherapeutics.com/news/71-rise-therapeutics-reports-ulcerative-colitis-dose-escalation-clinical-results-for-r-3750-at-the-digestive-disease-week-ddw-conference-in-san-diego-may-3-6
- NIH RePORTER award records (linked as news/funding): the two 2026 Phase II awards above.

## Brand (PRINCIPLES BK — palette from the logo)
- Logo file: https://risetherapeutics.com/images/logo.png (209×85 PNG, white-on-transparent "RISE" with olive "THERAPEUTICS" beneath). Pixel sampling (photo-inventory) returns exactly two inks: `#ffffff` and `#828d0e` (olive). The live site's accent in computed CSS is `rgb(132, 141, 46)` = `#848d2e`; its darkest surface is `rgb(0, 13, 22)`.
- Mapping used in the concept:
  - logo olive `#828d0e` → `--acc` (mid), `--accL #b7c452` for dark bands, `--accD #5f6a0a` for light bands
  - logo white `#ffffff` → `--paper #f4f2ea` (warm bone) and paper tints
  - dark base derived as a deep neutral carrying the olive undertone: `--ink #171a13`, `--ink2 #1e2219`, `--ink3 #252a1e`, `--deep #0e100a`
  - stone greys `--stone #a6a99a`, `--stoneD #5f6355` (neutral, permitted)
  - No hue outside the logo's olive and neutrals is used anywhere, including canvas constants.
- Because the logo file is white-on-transparent (illegible on light surfaces, PRINCIPLES BW), the concept hotlinks it only where the header is dark and falls back to a faithful inline SVG wordmark ("RISE" + letterspaced olive "THERAPEUTICS") for the light header state and for the footer/preloader.

## Photo inventory (PRINCIPLES BJ/BR) — `node _kit/photo-inventory.js https://risetherapeutics.com/ …`
42 meaningful images across 25 crawled pages; 0 flagged as stock. **Used in the concept:**
- The five company headshots (700×842, sharp, consistent white-ground studio crops): gary-fangerfinal.jpg, christianfinal.jpg, sathyafinal2.jpg, janet.jpg, sophie.jpg — portrait grid plus person sheets.
- In-house GMP manufacturing photographs (1110×600, real facility and staff at work): web1, web3, web4, web5, web6, web7 (`/images/igallery/resized/bioservices-1/…`) — two are used beside the manufacturing section; they show something the custom visuals cannot (the real clean room, isolator and operators).

**Unused non-stock images, with reasons:**
- `/images/2025/09/04/pipeline2025-09a2.jpg` (6000×2846 pipeline chart) — the same information is set as live, readable type in the concept's pipeline table; a flattened chart image would be unreadable and off-standard (BW).
- `/images/features/feature-bg.jpg`, `/images/2022/01/22/our-team-bg.jpg`, `/images/blog-bg.jpg`, `/images/2022/02/03/our-capabilities-bg2.jpg`, `/images/banners/banner.jpg`, `/images/2022/01/25/banner1.jpg`, `/banner4.jpg`, `/banner6.jpg`, `/images/2022/02/03/careers-banner.jpg`, `/science-banner.jpg`, `/images/2022/02/15/pills7.jpg`, `/images/2022/02/01/contact.jpg`, `/images/2022/04/12/rise-bioservices3.jpg`, `/images/2022/04/10/one-stop-shop-bg.jpg` — decorative page-banner backgrounds (generic lab/starfield/pills imagery); they carry no information the page does not already have (BR).
- `/images/scie1.jpg`, `/images/scie2a.jpg`, `/images/scie3.jpg`, `/images/2025/03/15/visual1a.jpg`, `/images/2025/11/07/visual2aa.jpg`, `/images/2025/03/15/visual3.jpg` — stylised 3-D renders (a dendritic cell with a USB plug; a capsule at a mouth). The concept's own hero and pinned story show the same mechanism accurately, so repeating a render would weaken it (BR).
- `/images/2022/01/22/gary-fanger.jpg`, `/chris.jpg`, `/sathia.jpg` — duplicate, slightly older crops of headshots already used.
- `/images/2025/02/19/…` numeral tiles (`1`,`2`,`3`, 224×224) and `/images/2022/…/rise-bioservices` wordmark — BioServices sub-brand furniture, outside the scope of this concept.
- `/images/2024/…/33 1446×179 "ENABLING PATH TO CLINIC"` strip — a low-resolution text graphic; set as type instead.

## Bad-site evidence (verified by viewing the live site in Chromium, 17 Nov 2026) — repo is public, so kept factual
1. Footer on every page: "Rise Therapeutics © 2022".
2. Footer navigation ends with a link labelled "Search Icon" pointing at https://risetherapeutics.com/search-icon.
3. The Pipeline page carries its whole pipeline as one 6000×2846 JPG (`/images/2025/09/04/pipeline2025-09a2.jpg`, alt="Image"), with the programme copy below it using emoji bullets ("🔹 Interested in participating?").
4. Pipeline copy is behind the company's own announcements: it says R-2487 will enrol "Up to 36 participants" (ClinicalTrials.gov NCT05961592 lists 73) and lists only three programmes, with no mention of the Crohn's, ARDS, COPD or Sjögren's studies the company has registered.
5. Team headshots are served with `alt="Image"` on the About page; page `<title>` of the home page is just "Home"; `<meta name="generator">` is "Helix Ultimate - The Most Popular Joomla! Template Framework."; one page carries `<meta name="author" content="Robert Fanger">`.
6. The Contact page shows the postal address and a "SEND" form only — no email address or phone anywhere on the site.
