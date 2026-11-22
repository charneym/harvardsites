# Verra Therapeutics — dossier (home-only build, batch 2026-11g, biotech)

Sources fetched 2026-11-22: verratherapeutics.com (single GoDaddy Website Builder page); NIH RePORTER API (org VERRA THERAPEUTICS); PubMed 41063509 (efetch XML); FCOI policy PDF linked from the site.

## Domain check
- verratherapeutics.com belongs to the company: the page names Verra Therapeutics, its leadership (Christopher Prince, Marcia Moss), the address 1939 East Shore Drive Suite 5, Lansing NY 14882, and links its own FCOI policy PDF (Nov 2022). NIH RePORTER lists VERRA THERAPEUTICS, Lansing, with Christopher Lucas Prince as contact PI. Searches show no newer domain (search results only return the unrelated Vera Therapeutics, veratx.com).

## Pre-screen
- Bad site (passes): GoDaddy Website Builder template; stock blurred lab-glove photo hero with a heavy all-caps headline repeated four times in the markup; small script logo; the whole company on one long page with no navigation; team section duplicates names (each bio card repeats other names); contact is a bare form ("Name / Email* / Send"); "Powered by GoDaddy" footer.
- Active (passes): Klapproth E, ..., Rasmussen F, Mejia F, Moss ML, Prince C (Verra Therapeutics, Lansing NY), ..., El-Armouche A. "Leveraging the ADAM10 prodomain for selective inhibition to enhance recovery after myocardial infarction." Br J Pharmacol 2026 Mar;183:990-1008 (online 2025-10-08). https://pubmed.ncbi.nlm.nih.gov/41063509/ . Site footer © 2026.
- Scope (passes): protease inhibitors for heart, lung and kidney disease. No pathogens, toxins or biodefence.

## Company (site)
- Privately held, near Ithaca NY, founded 2017; mission: transform the treatment of protease-driven diseases with an innovative small protein platform.
- Preclinical candidates for COPD, heart attack recovery, heart failure prevention and kidney injury, adapting nature's inhibitor sequence for two key targets.
- Platform: native peptide sequences, selective where small molecules fail; VTH144 and VTH245 block only the intended activity; subcutaneous; simply manufactured; better than antibodies (an order of magnitude smaller, good half-life, faster tissue penetration, rapid SC release); unlike RNAi/degraders they don't eliminate the target; "promise ... reduced immunogenicity".
- VTH245 (COPD): protease linked with emphysema, small airway narrowing and mucus hypersecretion; six-month gold-standard mouse studies; reduces mucus overproduction, emphysema, elastin degradation; well tolerated; favourable PK, SC.
- VTH144 (post-MI): target up-regulated in heart muscle of MI patients; cuts heart-function losses by 75% vs controls; reduces interstitial fibrosis by 70%. Paper: ADAM10 prodomain-derived; FRET selective for ADAM10 sparing other metalloproteases; attenuates CX3CL1 shedding, neutrophil infiltration, IL-1β-driven inflammation; dosed 4 h and 48 h after LAD ligation; preserves cardiac function by reducing scar size; no short-term toxicity in cardiac, pulmonary, hepatic, renal systems.

## Grants (NIH RePORTER, NHLBI, "A Disease-Modifying Protein Therapeutic for the Treatment of COPD", PI Prince)
- 1R43HL149580-01, $391,023, notice 2019-09-13 (appl 9847210)
- 2R44HL149580-02, $1,364,498, notice 2022-12-15 (appl 10602047)
- 5R44HL149580-03, $635,475, notice 2023-11-29 (appl 10754961); project end 2025-04-30. Total $2,390,996.

## People (site)
- Christopher Prince, PhD — Co-founder / President (lead). No pronouns published; greeting "Dear Dr. Prince".
- Marcia Moss, PhD — Chief Scientist (ex-GSK Oncology Project Lead). Jeffrey Calkins, MBA — Interim CFO.
- Advisors: Jeanine D'Armiento MD PhD (Columbia), Prof. Dr. med. Ali El-Armouche (TU Dresden), Yohannes Tesfaigzi PhD (Brigham and Women's / HMS).
- Email: none published (site has a contact form only; RePORTER lists no PI email; FCOI PDF has none). The CTA links to the site's form; no address invented.

## Brand
- Logo (Logo.tiff via wsimg) sampled: navy #001a91, red ribbon #de4353, gold stroke ~#f2d08a, grey "Therapeutics" #a8a8a8. Built: ink #060a22, buttons navy lifted #2b44c8, gold accent on dark, red #c8303f on cream, cream #f6f4ee. Type: Newsreader (italic wordmark echoes the script logo) + Montserrat (their site's sans). Mark redrawn as SVG (navy V swoosh, gold arc, red ribbon).

## Hero
- Crafted render (HOME_BRIEF 2c) of Verra's real target: human ADAM10 ectodomain, PDB 6BE6 (RCSB, Seegar et al., Cell 2017), chain A, space-filling; metalloprotease domain navy, disintegrin + cysteine-rich gold, residues within 9 Å of the catalytic zinc red. _kit/home/verratherapeutics/render.py (python3 render.py 1100 hero.png 2 -0.25 0.2 0, cropped to 757x1098). No other concept uses 6BE6/ADAM10 (DQ).
- Story: engraved membrane schematic: ADAM10 sheds CX3CL1 and neutrophils arrive; VTH144 caps only ADAM10 (other metalloprotease untouched); shedding stops.
