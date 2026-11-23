# Thiogenesis Therapeutics, Corp. (slug: thiogenesis) — HOME-ONLY build, batch 2026-11h

- Site: https://thiogenesis.com/ (Webflow, read 2026-11-23; pages Home, About, Science, Pipeline, Investors, Contact). Domain check: company name, logo, team, news releases and info@thiogenesis.com on every page; news-release PDFs served from the site. No newer site on another domain.
- Bad-site evidence: template look, a full-bleed stock doctor-and-child photo with a thin grey caption floating on the right; small 210x72 raster logo; plain text pages.
- Type: clinical-stage biopharma, cysteamine prodrug TTI-0102 (cysteamine-pantetheine mixed disulfide) for nephropathic cystinosis and mitochondrial disease (Leigh syndrome spectrum, MELAS, pediatric MASH). The pipeline page also carries an old coronavirus section; it is not used on the concept (no pathogen science shown).
- HQ: operations in San Diego, California; corporate head office 4 King Street West, Suite 401, Toronto, ON M5H 1B6 (Contact page). TSXV: TTI, OTCQB: TTIPF.
- Lead: Patrice P. Rioux, MD, PhD, Co-Founder, Director and CEO (About page). Greeting: "Dear Dr. Rioux".
- Best published email: info@thiogenesis.com (Contact page; contact line of the 22 Oct 2026 news release, under Brook Riggins, Director & CFO). Phone (888) 223-9165. No personal address published.

## Activity (pre-screen OK)
- 2026-10-22: "Thiogenesis Announces FDA Clearance of IND for Nephropathic Cystinosis" (IND 184780, Study May Proceed 16 Oct 2026; TTI-CYST-001 at Emory / Children's Healthcare of Atlanta under Dr. Larry Greenbaum). https://cdn.prod.website-files.com/6324f3c1cd40a857e0ea27a4/6ae4c83388eb625d1f0c2a8e_NR%20261022%20Thio%20Announces%20CYS%20IND%20Cleared.pdf
- Also 2026: RPD designation for Leigh syndrome (13 Jul), $9.0m private placement closed (3 Jun), investigator-initiated cystinosis study (2 Feb; newsfilecorp release 282105).

## Facts used (thiogenesis.com Science, Pipeline, Investors, About, Contact; NR 22 Oct 2026)
- TTI-0102: patented next-generation cysteamine prodrug, NCE; sustained-release delivery, flatter PK, avoids the spike behind GI side effects and body odour; higher doses; potential once-daily; water-soluble oral powder, no enteric coating; converted in the GI tract into two cysteamine + one pantothenic acid (B5).
- Phase 1 (healthy volunteers vs generic cysteamine): up to 2400 mg cysteamine equivalent (4x the 600 mg standard), Cmax never above 600 mg generic, therapeutic levels over 24 h, only mild body odour at the highest dose, no GI side effects.
- Cysteamine approved twice for cystinosis; cystinosis from CTNS mutations, toxic cystine buildup, kidney damage; 2,000-2,500 patients worldwide; WBC cystine surrogate endpoint (Procysbi 2012).
- Cysteamine raises intracellular cysteine (rate-limiting for glutathione), metabolised into taurine and CoA.
- Leigh syndrome: FDA-cleared IND for Phase 2a with a leading U.S. children's hospital; RPD designation 13 Jul 2026; ~75,000 U.S. patients with primary mitochondrial disease. MELAS Phase 2 (EU, from May 2025) complete. Pediatric MASH: EMA guidance supporting an IMPD for Phase 2a. 505(b)(2) pathway.
- Team, board and SAB from the About page (summaries shortened, nothing added).

## Palette / type
Logo (6324fab41bacf051e67681e5_thiogenesis.png, 210x72): ink #010101, red #da2e2d (the H and final S, the thiol "SH", and the bracket rules). Site: white ground, Lato. Mapping: warm ink #141112 for dark sections, logo red as --acc #c82726 / --rd #b8201f on bone and #f2645b on ink, solid buttons #da2e2d; bone #f7f4f0. Type: Archivo (display), Lato (body, their site face), IBM Plex Mono (labels). Logo redrawn as clean filled SVG paths by _kit/home/thiogenesis/logo.py (Liberation Sans Bold, Arial-metric, at the original's wide set), bone letters with red S/H and bracket on ink. Favicon: their own 32px favicon.

## Hero
Option (c), crafted render: a human cell as a confocal fluorescence image (mitochondrial network in the logo red, nucleus in dim DAPI blue, lysosomes as pale puncta), rendered by _kit/home/thiogenesis/cell.py (numpy) on black and drawn additively onto the ink (no image edge). Slow breathing drift, no pointer response. Unique to this site. (A cystinosin molecular-surface render from PDB 8DKM and a crystal render were tried and dropped as too toy-like.)

## Story
One continuous fine-line cell: lysosome with cystinosin exporters (shown defective), stored cystine, nucleus, mitochondrion. Steps: cystine trapped; cysteamine arrives as a steady stream; cystine depleted and carried out; glutathione, taurine, CoA, the mitochondrion lights.

## Nav
Science / Pipeline / Team / News open build-out pages (#/more/<item>, _kit/lib/buildout.js); Contact scrolls to the contact block (mailto, phone, both addresses).
