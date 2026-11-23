# SPIMA Therapeutics (slug: spima-therapeutics) — HOME-ONLY build, batch 2026-11h

- Site: https://www.spima-therapeutics.com/ (WordPress, theme by Landmark BioVentures' "lbv-nexus"; read 2026-11-23; pages Home, About Us, Our Technology (/pipeline/), Legal notice). Domain check: company name, logo, address and LinkedIn @spima-therapeutics on every page; legal notice names SPIMA THERAPEUTICS, Siret 92788756200019, publication manager Mohamed Haitham AYAD; the launch release (PR Newswire, 30 Sep 2024) points to www.spima-therapeutics.com and gives haitham.ayad@spima-therapeutics.com. Registry (recherche-entreprises.api.gouv.fr, SIREN 927887562): SPIMA THERAPEUTICS SAS, created 2024-04-30, seat Incubateur Cyborg - IRMB - Hôpital Saint-Eloi, 80 avenue Augustin Fliche, Montpellier; NAF 72.11Z. No newer site on another domain.
- Bad-site evidence: the home hero renders as an empty teal panel (a faded stock protein image, no headline visible: the H1 never appears); the only content below is a low-res pasted slide graphic (three coloured boxes) and two centred sentences; two-link nav; pipeline is a pill table with empty stage bars.
- Type: preclinical biotech, stapled-peptide and peptide-PROTAC immunotherapies against protein–protein interactions (inflammation, oncology). No pathogen/toxin science.
- HQ: 80, avenue Augustin Fliche, 34295 Montpellier, France (IHU Immun4Cure / IRMB, Hôpital Saint-Eloi).
- Lead: Mohamed Haitham Ayad, RPh, PhD — co-founder; "CEO & Co-Founder" in the launch release (Sep 2024); now listed as "Co-founder & Board Member" on the About page and as the website's publication manager (legal notice). Greeting: "Dear Dr. Ayad". NB the registry lists Zaki Sellam as Président (Executive Chairman on the site) and Gary Brandam as Directeur Général; Sellam is the alternative lead ("Dear Dr. Sellam"), no published email.
- Best published email: haitham.ayad@spima-therapeutics.com (PR Newswire launch release, corporate contact). No generic address published on the site.

## Activity (pre-screen OK)
- 2025-10-14: SPIMA Therapeutics among the winners of the national i-Lab 2025 competition (France 2030 / Bpifrance). https://www.umontpellier.fr/en/articles/sept-talents-du-pole-universitaire-dinnovation-de-montpellier-distingues-aux-concours-i-lab-et-i-phd-2025-dont-2-grands-prix
- 2026-01-27: IBMM "Focus on Innovation: SPIMA Therapeutics wins the i-Lab 2025 competition". https://ibmm.umontpellier.fr/en/focus-on-innovation-spima-therapeutics-wins-the-i-lab-2025-competition-with-innovative-immunotherapy-against-inflammation-and-cancer/
- 2026-11: site updated (new team portrait uploaded under /uploads/2026/11/, Hadrien Lanvin as CBO).

## Facts used
- spima-therapeutics.com: "Unlocking Undruggable Targets with Smart Peptides"; smart peptide-based immunotherapies for currently undruggable targets; aggressive inflammatory and neoplastic disorders; 80–85% of targets estimated undruggable (adapted from Neklesa et al. 2017); three barriers (intracellular complexity and membrane barriers; lack of targeting specificity of small molecules; complex delivery of large molecules); stapled peptides as first-in-class therapeutics; α-helical conformation locked by a site-specific chemical brace; enhanced membrane permeability and stability; pipeline SPM001 (stapled peptide, myddosome complex / MyD88, inflammatory disorders (acute pancreatitis)) and SPM002 (PROTAC peptide, undisclosed); PROTAC figure (peptide targeting warhead, linker, E3 recruiting element); team and advisor bios (summaries shortened, nothing added); Landmark BioVentures Nexus; ecosystem IRMB, IBMM, Université de Montpellier, SATT AxLR.
- PR Newswire 30 Sep 2024: incorporated April 2024; global exclusive licence from SATT AxLR for SPM001; nearly €1 million invested by SATT AxLR; based at the IHU Immun4Cure; SPM001 potential in aggressive cancers driven by MyD88 mutations; peptides blend the best qualities of small and large molecules; preclinical stage.
- IBMM 27 Jan 2026: SPM001 a selective inhibitor of myddosome assembly; myddosome a key protein assembly in immune signalling.
- No pipeline stage is claimed (the live site's stage bars are empty).

## Palette / type
Logo SVG (Spima-therapeutics.svg, 150x64): navy #0b3448 (S mark, "Therapeutics"), teal #187488 (hexagon halves, "PIMA"). Site: white ground, teal pill buttons, teal→mint protein image, Public Sans. Mapping: deep navy ink #071b26 (from the logo navy), --acc #187488 on bone, lifted #4cc0cf on ink, cool bone #f3f8f8; one warm amber #e0b36a only for the staple. Type: Public Sans (their face) + IBM Plex Mono labels. Logo: their own SVG paths inline; true colours on the light loader, reversed (bone + lifted teal) in the dark header. Favicon from the logo mark.

## Hero
Option (c), crafted render of their molecule class: one stapled α-helical peptide as a glossy teal cartoon ribbon (3.6 residues/turn proportions) graded to mint, with the hydrocarbon staple as a small amber ball-and-stick chain bridging residues i and i+4 in profile. GLSL raymarch, _kit/home/spima-therapeutics/render.js, real alpha (no box edge); slow breathing drift, no pointer response. Unique to this site.

## Story
One continuous fine-line picture: the cell membrane, the myddosome (MyD88) inside with its broad protein–protein interface. Steps: antibody held outside and small molecule with no pocket; a short linear peptide, floppy; it coils into its α-helix and the staple draws; the stapled helix crosses the membrane and settles on the interface (SPM001).

## Nav
Technology / Pipeline / Team open build-out pages (#/more/<item>, _kit/lib/buildout.js); Contact scrolls to the contact block (mailto, address, LinkedIn).
