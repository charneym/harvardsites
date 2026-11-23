# Creative Bio-Peptides, Inc. (slug: creativebiopeptides) — HOME-ONLY build, batch 2026-11i

- Site: https://creativebiopeptides.com/ (WordPress, Genesis Sample theme, read 2026-11-23; pages Our Company, Our People, Introduction, Receptides, Publications, Therapy Areas, News, Contact). Domain check: company name, logo, team and news on the site; NIH RePORTER org record "CREATIVE BIO-PEPTIDES, INC." (Potomac MD, UEI KXWAKDEXPKM3, PI Michael R. Ruff) matches; the domain has live MX (Proofpoint mx1/mx2-us1.ppe-hosted.com). No newer site on another domain.
- Type: preclinical biotech; small oral peptide chemokine receptor (CCR2/CCR5) antagonists ("Receptides", lead RAP-103) for chronic pain/neuropathy, dementias (ADRD, Parkinson's) and opioid use disorders. Pre-screen note: the peptides descend from Peptide T/DAPTA (an HIV-derived peptide) and a 2020 news item mentions a Leidos/DTRA contract to develop R103 as a nerve-agent countermeasure. The core science and all current NIH work are neurological (pain, dementia, OUD), with no pathogen or toxin work, so the build goes ahead. The concept site leaves out the DoD item and the viral origin story.
- HQ: footer "Creative Bio-Peptides Inc. Rockville, MD USA 20854"; NIH lists Potomac, MD 20854. No street address published.
- Lead: Michael Ruff, PhD, Founder, President and CEO (Our People page; contact PI on all NIH awards). Greeting: "Dear Dr. Ruff".
- Best published email: the Contact page gives "info@creativebioeptides.com", a typo (that domain does not resolve). The intended address is info@creativebiopeptides.com (the real domain has MX). The concept site uses that address. No personal address for Dr. Ruff was found (site, NIH RePORTER, web search).

## Activity (pre-screen OK)
- 2025-05-28: NIH NIA SBIR award 5R44AG074715-03, "A Synapse-Protecting Small Peptide to Treat a-Syn/Tau Mixed Proteinopathies in ADRD", budget period 2025-05-01 to 2026-10-31. https://reporter.nih.gov/project-details/11158833
- FY2024: 5R43AG085779-02, PET imaging to evaluate a novel chemokine antagonist to protect synapses in ADRD (to 2025-06-30). https://reporter.nih.gov/project-details/10934595
- The site's latest news is dated 2024-05-29; copyright reads 2026.

## Bad-site evidence
2017 Genesis Sample WordPress theme: a washed-out 123RF stock banner (gloved hand, test tubes, microscope) behind the headline, an underlined blue "Learn How" text link as the only CTA, three black clip-art icons (light bulb, test tubes, clipboard), and blue italic body text. News ends in May 2024; a news URL begins with a stray "%ef%bf%bc" character; "CPB's research platform" typo on the Introduction page; the Contact page's only email address has a typo (creativebioeptides.com); the logo is a small 2017 raster.

## Facts used (creativebiopeptides.com unless noted)
- Home hero: "Small Oral Peptides to Prevent Synapse Damage in Dementias"; "advances disease-modifying oral chemokine antagonist peptides that repair synapses and regenerate neurons".
- Our Company: started late 2017; over $75M in legacy R&D on the first-generation (non-oral) peptide, safe and effective in multiple controlled trials; RAP-103 near Phase 1 ready, safe in animal toxicity studies with rapid brain entry and stability; current focus PPSP and DPN; R103 blocks chronic pain without opioids and enhances opioid potency; NIDA and NIA funding; next steps human safety and pilot efficacy testing; partnering invitation.
- Introduction: dysregulated innate immune activation underlies chronic pain, dementia, OUD; RAPs re-balance chemokine receptors from neurodegeneration to neuroregeneration; small safe oral peptides for 1x daily dosing; biased antagonists of CCR2/CCR5.
- Receptides: learned from nature; partial antagonists that balance excess immune responses without shutting them down while activating repair; cluster CCR2/5/8, CXCR4; chemokine receptors act on immune cells and neurons to sculpt connections; blocking them inhibits neurotoxic microglial/astrocyte activation to restore synapses and dendritic arbor.
- PPSP page: at least 450,000 people in the US each year. Parkinson's page: cognitive symptoms don't respond to dopamine replacement; earlier clinical Receptides reversed cognitive deficits by blocking CCR5. OUD page: NIH HEAL funding to test whether RAP-103 blocks opioid self-administration in animals.
- News 2024-05-29: Kuhn 2024 (amyloid beta, synapses, rodent and human neurons) and Liz 2024 (alpha-synuclein, CCR5). Publications page: Padi et al., Pain 153 (RAP-103, CCR2/CCR5). News 2020-01-18: R103 oral analog of DAPTA, a pill, replacing the nasal spray.
- Team: as on Our People (summaries shortened, nothing added).

## Palette / type
Logo logo-cbp-homepage.png: CREATIVE cyan #0099cc, arc and BIO-PEPTIDES black, star crimson #b3021f; live site header charcoal #333 with the logo reversed. Mapping: ink #0e1a22, accent on dark #4fc4e8, accent on light/buttons #00739e, crimson only for activation details in the story. Type: Tenor Sans (their heading font) and Open Sans (their body font). Header and loader use their real 500×175 logo with the black parts recoloured white (logo-w.png).

## Hero
Option (c), a crafted render of the real target of RAP-103: the human chemokine receptor CCR5 as a residue-level Gaussian molecular surface from the public crystal structure PDB 4MBS (chain A; rubredoxin fusion and maraviroc omitted), upright as in the membrane, shaded pale ice > logo cyan > deep blue. _kit/home/creativebiopeptides/surf.py, env CUTF=2.7 NZ=60 DEP=6 CG=2.6 BB=1.0 PAD=1.6, args 0.12 0.5 0 3400. No other site uses 4MBS.

## Story
One continuous fine-line scene: a neuron's soma and tapering dendrite with a branch, spines meeting presynaptic boutons, and a microglia below. Step 1: the microglia glows crimson, chemokines drift to receptors on the dendrite, the spines shrink. Step 2: RAP-103 (cyan) seats on each receptor. Step 3: the spines regrow and the synapses light cyan.
