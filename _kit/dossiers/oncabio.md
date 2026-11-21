# Onca Bio (slug: oncabio) — HOME-ONLY build, 2026-11-21, batch 2026-11f

## Domain check (first step, passed)
- Registry domain oncabio.com is the company's own: the page carries the company name and logo, the tagline "Taming peptide discovery." and `hello@oncabio.com`; the NIH RePORTER organisation record for the award is "ONCA BIO, INC.", Richmond VA 23221 (UEI V8VCVK9FA4Y8); the award abstract names "Onca Bio" in its own text; federal-award business records list oncabio.com as the company website (Whiteford Research Biobase profile). No newer, better company site found on any other domain.
- Scope (SPEC §2b/§2c): US biotech, peptide discovery platform. No pathogens, toxins or biodefence.

## What the site is now (bad-site evidence)
- oncabio.com is a one-screen placeholder: the dotted-cheetah logo, the wordmark, the line "Taming peptide discovery.", one mailto link, and a © line, on white, with small outlined circles falling down the page as the only motion. `html,body{overflow:hidden}` — the page cannot scroll because there is nothing to scroll to.
- No nav, no technology page, no team, no pipeline, no news, no address. The $348,848 NCATS award is not mentioned anywhere.
- Total page weight 5.3 KB of HTML; the only other asset is logo.png.

## Facts used (every one sourced)
- NIH RePORTER 1R43TR005911-01 (https://reporter.nih.gov/project-details/11255473): NCATS SBIR Phase I, award amount $348,848, award notice date 2025-09-12, project start 2025-09-15; organisation Onca Bio, Inc., Richmond, VA 23221; contact PI Tyler Scott Stukenbroeker, title recorded as CEO; title "Segmented In Vitro Translation for Expanding Peptide Library Diversity".
- Award abstract (same record), used for the story, the stats, the aims and the applications rows: mRNA display generates large protein-peptide binding datasets and de novo peptide therapeutics; macrocyclic peptide drugs that started there include MK-0616 (cholesterol management, Phase III), RYZ101 (cancer radiotherapy, Phase III) and zilucoplan (myasthenia gravis, approved); all took years of additional screening from display hit to lead; precursor peptides are synthesised with two fixed residues, a chloroacetyl and a thiol amino acid, that spontaneously react to form cycles, so libraries have zero diversity at two positions; SIVT reassigns mRNA codons to different amino acids multiple times within a single transcript, so the codon table is defined locally by position rather than globally; aims = develop SIVT, design the libraries and the non-natural substrates, then benchmark in selections against "undruggable" targets; goal is to boost chemical space coverage by an order of magnitude.
- Their site: wordmark, cheetah mark, tagline, `hello@oncabio.com`, palette and fonts (below).
- Tyler Stukenbroeker: Ph.D., Stanford University, January 2016, "Organocatalyzed ring opening polymerization and the design of materials for topological trapping" (https://stacks.stanford.edu/file/druid:jd110qd1669/dissertation_stukenbroeker012716-augmented.pdf). Perspective "From De Novo to Xeno: Advancing Macromolecule Design beyond Proteins", ACS Synthetic Biology 13(8):2271-2275, 2024-08-16 (https://doi.org/10.1021/acssynbio.4c00179; PubMed 39148431). The paper's affiliation is Telescope Scientific Consulting, Richmond VA, so the site does not attach it to Onca Bio — it is listed in News under his own name.
- NOT used (unverified aggregator claims): founding date (October 2024 / 2025), employee count, BIO 2026 attendance, any investor.

## Activity (since 2025-05-18) — passes
- 2025-09-12: NCATS SBIR Phase I award 1R43TR005911-01, $348,848. https://reporter.nih.gov/project-details/11255473 (project start 2025-09-15).

## Lead
- Tyler Stukenbroeker, Ph.D. — Chief Executive Officer (title recorded as CEO on the NIH award; his LinkedIn headline says co-founder and CEO of Onca Bio).
- Greeting: "Dear Dr. Stukenbroeker" (doctorate is public; no pronouns are published).
- Best published email: hello@oncabio.com (the only address published anywhere: their site's one link; no personal address appears in RePORTER, the paper or any press item).
- HQ: Richmond, Virginia, United States (RePORTER org record, zip 23221). No street address is published, so the site gives city and state only.

## Palette and type (brand fidelity)
- Sampled from oncabio.com's own CSS custom properties: `--ink #0a2230` (page ink), `--deep #027097` (→ --acc, accents and solid buttons on the light band), `--sky #2eaaff` (→ --accL, accents on dark; the logo's cheetah blue), `--slate #5f9598` (→ --ember, the wordmark's second word), white → --bone #f4f8fa.
- Their own fonts kept: Fraunces (display/serif) and Inter (sans).
- The cheetah mark is their own logo, extracted from logo.png by dropping every component that belongs to the wordmark (mark.png), used in the header, the loader and the favicon shape.

## Hero (HOME_BRIEF update 2026-11-20, option c)
- A crafted render of the real object their libraries are made to find: a macrocyclic peptide bound in a groove on its protein target, drawn atom by atom from the 2.0 Å crystal structure PDB 9Y6C (RCSB) — the cyclic peptide Ra30303, closed through a xylene bridge between two cysteines and carrying non-natural residues, on the TE domain of human complement C5. That structure was chosen because zilucoplan, named in their own award abstract, is a macrocyclic peptide inhibitor of complement C5.
- mac.py renders it offline (sphere shading, rim light, depth ambient occlusion, supersampled ×2) on a transparent ground; peptide in the logo's sky blue, non-natural residues in ice, target in the logo's slate. hero.webp, 1412×1846, q90.
- Placed centred in the open area right of the copy (~72% of the content width), whole, well clear of the H1, fully below the nav at 1920/1440/1280 and on phones; the ground is the page ink with a long eased halo, so there is no box edge (DJ/DP). Slow Ken Burns drift, no pointer response (CZ).
- No photography of the company, its people or its lab exists (the site has only a logo), and no Unsplash/Pexels photograph depicts this subject, hence option (c).

## Story (pinned, DB)
- One engraved composition for all three steps: a fifteen-residue macrocycle above the mRNA message that encodes it. Step 1 marks the two residues a standard library has to fix and draws the thioether bridge between them; step 2 brackets the message into three segments, each with its own codon table, lighting the arc it writes; step 3 opens the two fixed positions and the whole ring lights. Schematic; residue count and positions are illustrative.

## Build-out pages
- Nav: Technology / Applications / Team / News (each opens #/more/<item> through _kit/lib/buildout.js) plus Contact, which scrolls to the contact block. SECS maps technology/applications/team/news/contact, and science → the story section for the hero CTA.

## Gates (2026-11-21)
- See the session report. hero-audit reports "no title found", the same result it returns on shipped sites (olmedabio, dotyscientific, nephrodi): an environment-wide audit issue, not a page defect.
