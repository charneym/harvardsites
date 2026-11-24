# Synvivia, Inc. — dossier (batch 2026-11i, home-only concept build)

## Domain check (first step, passed)
- Registry domain `synvivia.com` resolves to a live Wix site whose only page is titled **SYNVIVIA**, with the
  wordmark and the line "Synvivia engineers molecules to reprogram cells." and three `@synvivia.com` addresses.
- NIH RePORTER organisation record: **SYNVIVIA, INC.**, Emeryville, CA — three awards (2016, 2025, 2026).
- Y Combinator company page lists website `synvivia.com`, Summer 2016 batch, status Active, founder Gabriel Lopez.
- UC Berkeley IPIRA startup page names Synvivia, Gabriel Lopez and the licensed Berkeley IP.
- No newer or better company domain found. → **Build.**

## Who they are
- Synvivia, Inc. Founded 2015; Y Combinator Summer 2016; team size 4 (YC). Incubated at the QB3-East Bay
  Innovation Center, Berkeley (IPIRA). NIH records give the business address as Emeryville, California.
- YC description (verbatim): "Synvivia applies chemical control over cell behavior." / "This allows us to
  optimize biomanufacturing of high-value biopharmaceutical products."
- Their own site (verbatim): "Synvivia engineers molecules to reprogram cells."
- IPIRA: "optimizes cell behavior for gene therapy manufacturing"; foundational technology co-invented by
  Gabriel Lopez as a UC Berkeley Bioengineering PhD student and extended as a postdoc in John Anderson's lab;
  developed at UC Berkeley "with grants from the NSF and DARPA"; exclusive licence in all fields of use;
  "Backed by Y Combinator, the National Institutes of Health, and industrial partnerships."

## Science (all from the NIH SBIR project abstract, 5R44GM158472)
Direct-to-Phase II SBIR: "Platform for Optimizing Yield and Quality of Therapeutic AAV Vector Manufacturing
via Synthetic Helper Genes".
- Problem: AAV manufacturing is constrained by poor scalability of cell culture systems, low yield of
  functional vectors, high loss of functional vectors downstream, and limited mechanisms for optimising
  product yield or quality.
- Platform: "a massively multiplexed synthetic helper gene cell-control strategy" that identifies and
  delivers molecules to vector packaging cells to optimise the cell's state for biomanufacturing. A
  competitive enrichment process selects members of a cyclic peptide (CP) library that improve vector yield
  and/or quality inside a manufacturer's own process.
- Preliminary data: a **~50M-member CP Discovery Library**; proof of concept across **three** clinically
  relevant AAV serotypes. Of thousands of CPs with beneficial effects, 36 were randomly selected for
  characterisation: most increased both physical and functional titre by **up to 10-fold**, and most
  eliminated **90% to 95%** of full but non-functional capsids, improving transduction efficiency by
  **up to 17-fold**.
- Aims: (1) show the library contains CPs relevant across multiple manufacturing contexts; (2) validate lead
  CPs in vitro and in vivo; (3) show bioreactor-scale gains and better in vivo performance.

## Activity (most recent)
- **2026-05-07** — NIH SBIR Phase II year-2 award 5R44GM158472-02, $856,268 (NIGMS).
  https://reporter.nih.gov/project-details/11242079
- 2024-12-06 — 1R44GM158472-01, $1,640,169. (Phase II total to date ≈ $2.50M.)
- 2016-09-22 — 1R43DK112475-01, $295,172, PI Gabriel Alfredo Lopez (earlier biosafety work).

## People (only what is published)
- **Gabriel Lopez** — Founder & CEO (Y Combinator company page; UC Berkeley IPIRA; theorg.com "CEO, Founder").
  Co-invented the foundational technology as a UC Berkeley Bioengineering PhD student; postdoc in John
  Anderson's lab at UC Berkeley. Pronouns not published → greeting "Dear Gabriel Lopez".
- **Charlie Huang** — contact Principal Investigator on the current NIH SBIR Phase II (RePORTER). No title
  published beyond PI, so the site says exactly that.
- (theorg.com also lists a research scientist; title not verifiable from a primary source, so left out.)

## Contact
- Published on their own site as an image: careers@synvivia.com, investors@synvivia.com,
  partnership@synvivia.com. Best for the CEO: **partnership@synvivia.com** (business enquiries).
- HQ: Emeryville, California (NIH RePORTER org record).

## Bad-site evidence (quoted / measured from www.synvivia.com, 23 Nov 2026)
1. The entire site is **one Wix page** — the page JSON contains a single `"pageUriSEO":"home"` and no menu
   items at all. No navigation, no team, no science, no pipeline, no news.
2. The only headline is the wordmark **"SYNVIVIA"** set directly on top of a faint grey molecular line
   drawing, so the drawing runs straight through the letterforms.
3. The page is **2,618px tall at 1440 wide** and roughly **1,100px of it is empty white**, broken only by a
   **12×19px broken-image placeholder labelled "FCOI_POLICY"** floating in the middle of nothing.
4. The contact block is a **flat PNG image** (`c61ee1_44010da790c…mv2.png`, 239×100) of three email
   addresses — not selectable text, not mailto links — beside the word "Contact:" set about twice their size.
5. Nothing on the site mentions the **$2.5M NIH SBIR Phase II**, the cyclic-peptide platform, AAV
   manufacturing, Y Combinator or any person at the company.

## Palette (brand fidelity)
Their identity is pure black on white: a filled black icosahedron mark (favicon, 301×311) and a heavy
neo-grotesque wordmark. The only colour anywhere is the cool grey of the molecular drawing
(sampled #9fa9b4 / #c1c6ca / #4c4c4f). So the site stays essentially monochrome:
- `#9fa9b4` (their drawing's cool grey) → `--acc` steel accent / `--accD` on light sections
- black mark → `--ink` deep ground; white page → `--bone`
Logo redrawn as crisp filled SVG geometry (a true icosahedron wireframe, same projection as their favicon),
because their only file is a 301px raster (PRINCIPLES DR.2).

## Hero
A crafted render of **a cyclic peptide** — the molecule class their Discovery Library is built from and the
thing the platform delivers to a packaging cell. Real conformer: **cyclosporin A**, the cyclic peptide of the
cyclophilin A complex **PDB 1CWA** (Mikol, Kallen, Pflugl, Walkinshaw, 2.1 A), chain C, waters dropped, shown
as its macrocycle (backbone ring, carbonyls and first side-chain atoms) so the ring reads as one calm object
rather than a tangle. Rendered by `pep.py` as a glossy ball-and-stick model: atoms and bonds rasterised as one
sphere set (a bond is a dense sphere sweep, so its surface normals are exactly the capsule's), z-buffered
orthographically, with screen-space AO, a satin highlight and real alpha. Tilted well off the ring plane so it
reads as a solid object with depth, never an empty outline (CU). Captioned on the page: "Cyclic peptide,
illustrative - cyclosporin A, PDB 1CWA".

The first version of this hero was a render of the AAV2 capsid (PDB 1LP3, 60 BIOMT matrices, `capsid.py`).
The coordinator rejected it under DT: the knobbly grey shell read at a glance as "a virus", which the client
finds alarming. `capsid.py` and `1lp3.pdb` are kept in the build folder; the capsid still appears, small and
schematic, as the fifteen vectors of the batch in the story scene.

No stock photo is reused from any other concept site.

## Images not used
Their three site images: the molecular line drawing (low-contrast grey sketch, superseded by the real
cyclic peptide render), the email PNG (replaced by real mailto links), the broken FCOI_POLICY placeholder.
