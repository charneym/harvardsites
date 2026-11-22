# Orphagen Pharmaceuticals — dossier (batch 2026-11g, HOME-ONLY build)

Slug: `orphagen` · built at `/orphagen/` · domain orphagen.com · parts and render in `_kit/home/orphagen/`

## Domain check
orphagen.com (WordPress/Divi) carries the company name and logo, team, pipeline, news to Dec 2024, the address
Orphagen Pharmaceuticals, Inc., 9276 Sorrento Valley Rd, Suite 500, San Diego, CA 92121 and info@orphagen.com.
NIH RePORTER org record ORPHAGEN PHARMACEUTICALS, San Diego (contact PI Scott McNear Thacher, title CEO) matches.
No newer site found. Scope: nuclear receptor small molecules for cancer and IBD (no pathogens/toxins/biodefence).

## The company (orphagen.com Home, Our Science, Pipeline, OR-449, OR-812, RORβ, Team, News)
- Pioneering small molecule therapies for cancer and other serious diseases that block unexplored (orphan) members of the
  nuclear receptor superfamily; programmes internally conceived and developed.
- OR-449: first-in-class, orally bioavailable SF-1 (NR5A1) antagonist; adrenocortical cancer (ACC); potential expansion in
  head & neck, lung squamous and other SF-1-high cancers. FDA Rare Pediatric Disease Designation (Jan 2023). CPRIT
  $10.2M product development award over three years toward IND filing and Phase 1 in adult ACC, depending on matching
  funds (Nov 2024); "has practically completed IND-enabling studies"; MD Anderson "would be" a major Phase 1 site;
  Orphagen to raise matching funds and move HQ to Texas in 2025 (release). Metastatic ACC 5-year survival ~10–20%.
  SF-1 binding to super-enhancers markedly increased in tumours; OR-449 and other SF-1 antagonists inhibit tumour DNA
  synthesis in preclinical models; selectivity for a narrow set of tissues including adrenal.
- OR-812: selective oral RARα antagonist for UC/Crohn's; blocks CCR9 and α4β7 induction; reduced T-cell infiltration and
  tissue damage in mouse colitis; possible GVHD. NIDDK SBIR up to $1.7M (release Dec 2024).
- RORβ antagonists/agonists: SCLC and certain leukaemias; open to collaboration.
- Partnering since 2008 (RORγ antagonists for autoimmune disease).

## NIH RePORTER (org ORPHAGEN PHARMACEUTICALS)
- 2025-07-16 5R44DK136458-02 ($634,145) "A novel, pleiotropic oral drug class that inhibits gut migration of activated T cells", https://reporter.nih.gov/project-details/11184207
- 2024-09-05 1R44DK136458-01A1 ($1,078,081), appl 10823015
- Earlier: R44CA265639 (OR-449, 2021–2022), R44HD100256, R43s back to 2013.

## Leadership / outreach
- Lead: **Scott Thacher, PhD**, Founder and Chief Executive Officer. Referred to as "Dr. Thacher" in the Dec 2024
  release → greeting **Dear Dr. Thacher**.
- Best published email: **smt@orphagen.com** (listed as "Company Contact: Scott Thacher, Ph.D., CEO" in the CPRIT release,
  Nov 2024). General: info@orphagen.com.
- HQ: 9276 Sorrento Valley Rd, Suite 500, San Diego, CA 92121 (site; RePORTER 2025 still San Diego). A move to Texas was
  announced as planned for 2025 in the CPRIT release; not confirmed on the site.

## Activity
- 2025-07-16 — NIH 5R44DK136458-02 ($634,145), https://reporter.nih.gov/project-details/11184207

## Bad-site evidence
Dated Divi template: italic small-caps headline "Drug Hunters. Exploring the Unexplored." in a translucent grey band over a
stock 3D cell render, small JPG logo, thin condensed body text, generic "Read More" blocks, news last updated Dec 2024.
Screenshot `_kit/sourcing/v2-sheets/11g-orphagen.jpg`.

## Design
- Palette sampled from Orphagen-Logo-NEW.jpg (median saturated pixels): deep green #066727, bright #06b63c, grey #808080.
  Ink #071a10, button accent #077a2e, on-dark accent #4fd27a, bone #f4f6f1. Arimo (their site's face) + Newsreader display.
- Wordmark redrawn as type ("ORPHAGEN" + "PHARMACEUTICALS") with the green sphere mark.
- Hero (update 2c, crafted render of their real target; unique per DQ, no stock photo): the SF-1 ligand-binding domain from
  RCSB PDB 1YOW chain A (human SF-1 LBD; co-crystallised phospholipid P0E space-filled in the pocket; cofactor peptide
  omitted), cartoon ribbons point-splatted by render.py with SSAO, haze and slight DOF, alpha webp, Ken Burns breath.
  The ligand is the crystal's phospholipid, not OR-449 (no claim made on the page).
- Story: tumour-cell DNA with three SF-1 receptors (driver, lit, transcripts) → OR-449 settles into the pocket (block) →
  transcripts fade (effect: tumour DNA synthesis inhibited in preclinical models).
- Build-out pages: Science / Pipeline / Team / News via lib/buildout.js; Contact scrolls.
