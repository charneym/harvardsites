# Manzanita Pharmaceuticals (slug: manzanitapharmaceuticals) — HOME-ONLY build, 2026-11-21 (batch 2026-11f)

- Site: https://www.manzanitapharmaceuticals.com/ (Wix). Domain confirmed: company name on every page, contact@manzanitapharmaceuticals.com, address 2995 Woodside Road, Suite 400, Woodside, CA (matches the NIH RePORTER org record: Manzanita Pharmaceuticals, Inc., Woodside, CA 94062-2446, UEI J4S6AKLE7EC5). Site footer "© 2024"; no newer domain found.
- Type: US biotech/medtech (SPEC §2c): neurotrophin conjugates; first product NerveLight (800-rhNGF), an intra-operative NIR nerve imaging agent for radical prostatectomy. No pathogen/toxin/biodefence science (a board member's past virology career is mentioned on their About page only; not used).
- HQ: 2995 Woodside Road, Suite 400, Woodside, California 94062 (site shows "9406", zip completed from RePORTER).
- Email: contact@manzanitapharmaceuticals.com (the only published email; every page footer).
- Lead: Constance McKee, MBA — co-founder, President & CEO (About Us; "Ms. McKee"). Greeting: "Dear Ms. McKee". Stephen B. Kahl, PhD (contact PI on the awards) is CSO, VP & Principal Scientist.

## Facts used
- Home: core technology attaches small molecule dyes or drugs to rhNGF / rhBDNF; first product 800 nm NIR dye on human NGF (800-rhNGF) for prostate cancer; cavernous nerves at risk, known since 1982, no FDA-approved nerve imaging agent; 800 nm avoids autofluorescence; detected in the "ICG channel" of systems in 99% of surgical suites (their claim); intraneuronal, does not bind myelin; applied interstitially once at the start, illuminates nerves to at least 5 cm (their claim); procedure averages ~2 h.
- Product Pipeline: two parts, nerve imaging agents (dye-neurotrophins) and drug candidates (drug-neurotrophins). Market-size figures not used.
- RePORTER 5R44CA295214-02 abstract/narrative: no linker; ~15 min application then wash; rhNGF binds TrkA at distal nerve endings, endocytosis, retrograde axonal transport; n=103 rat studies, 46 in radical prostatectomies; GLP tox in rat and dog; next a Phase 1 SAD (three doses) in men undergoing radical prostatectomy.
- About Us: McKee (founded 2007, co-inventor, Stanford honors, Yale MBA, Cambridge Quantum Fund I, $3.3M nondilutive, ~$750K angel); Kahl (PI on NCI SBIR and DoD grants, retired Vice Chair Pharmaceutical Chemistry UCSF, compound into Phase 1 for PDT of malignant glioma); board of five of eleven private investors: McKee, Thomas Knobel, Robert Dalziel PhD (Chair SAB; his lab's in vivo pain studies with the neurotrophin-targeted glucocorticoid), Robert Webb PhD (co-founder), Gary Blair MD. Knobel/Blair chair titles conflict on their page, so no chair title is shown.
- News & Publications: Kahl et al. 2024 review; Liu et al. SPIE BiOS 2020 (Mohs lab, UNMC); Kahl et al. MHSRS 2019 (BDNF to optic nerve, b-ITON, with Absorption Systems); Walters et al. MHSRS 2018 (targeted glucocorticoids, non-opioid, UTHealth Houston). PDFs linked from the news list and pipeline rows.
- RePORTER awards: 2013 R43 $288,301; 2017 R44 $1,220,153; 2018 $752,754; 2024 $905,526; 2025 $1,090,970 ($2.0M across 2024–25).

## Activity (since 2025-05-18)
- 2025-08-20: NIH NCI SBIR Phase II award 5R44CA295214-02 ($1,090,970), "Toxicology (IND-enabling) studies for a novel nerve imaging agent for prostate cancer". https://reporter.nih.gov/project-details/11187227

## Bad-site evidence
- The homepage hero is a dense wall of six paragraphs of small white text pasted over an orange stock neuron image with bokeh; no headline hierarchy beyond "NerveLight".
- The only real figure (their NIR merge surgical image) is a 380px thumbnail; the pipeline page is two lines of text and a table image; footer zip is truncated ("9406"); © 2024.

## Palette
- Sampled from the live site (computed styles): headings navy rgb(18,34,46) → --ink #0e1a23; wordmark/heading maroon rgb(131,50,47) → --acc #83322f; steel blue rgb(76,109,135) → --stoneD; pale blue rgb(207,221,233) → --bone3; teal of their own "COLOR + NIR MERGE" image → --accL #8fd0cc. Fonts: their Futura → Jost; logo is live italic serif text → Newsreader italic 600 wordmark with spaced caps.

## Hero / story
- Hero (update option c): a crafted render (render.py, numpy sphere tracing, real alpha) of a peripheral nerve: epineurium sleeve with bands of Fontana and a vasa nervorum vessel, cut back to ten fascicles whose cut faces show myelinated axons, glowing teal (the ICG-channel false colour of their own NIR image), fading back up the nerve. No photo used: the site's only photography is a stock neuron image and a small surgical figure; Unsplash search was unavailable in this session.
- Story: one engraved neuron (cell body, myelinated axon, terminal endings in the wound bed): (1) 800-rhNGF applied and settling at the endings; (2) binding TrkA, endocytosis; (3) retrograde transport lights the axon to the cell body. Schematic geometry.
