# Iluminos Therapeutics, LLC — dossier (home-only concept, batch 2026-11f)

- Site built: `/iluminostherapeutics/` (home only, build-out pages via `_kit/lib/buildout.js`)
- Source folder: `_kit/home/iluminostherapeutics/` (assemble.py → `_kit/src/iluminostherapeutics.src.html`)
- Live site: https://www.iluminostherapeutics.com (Wix), domain confirmed: the live page is titled "Home | Iluminos
  Therapeutic" and describes "small molecule Dyrk1a kinase inhibitors" for Alzheimer's disease, Down syndrome and
  tauopathies, which matches the NIH record.
- HQ: Tucson, AZ 85755 (NIH RePORTER organisation record: ILUMINOS THERAPEUTICS, LLC, zip 857556552, UEI QZG3UBAV73G9).
  No street address published.
- Public email: none. The site is a placeholder with a newsletter form. The concept's contact block has no mailto
  (as on earlier sites with no published company email); it shows the LLC, Tucson and the NIH link.

## Lead (verified)
- **Travis Dunckley, PhD**, Co-Founder (MassBio company profile lists "Travis Dunckley, PhD, Co-Founder" and
  "Christopher Hulme, PhD, Co-Founder"). Contact PI on all three Iluminos NIH awards (R42/R44NS129400); the NIH abstract
  names "Iluminos co-founders Dr. Travis Dunckley and Dr. Christopher Hulme". No CEO title is published anywhere, so
  the title used is Co-Founder.
- Best published email: **Travis.Dunckley@gmail.com**, the corresponding-author address on Molecular Neurobiology 2019
  (PMID 31240602, "Chronic Dyrk1 Inhibition Delays the Onset of AD-Like Pathology in 3xTg-AD Mice"). He is no longer in
  the ASU directory (no asu.edu address found).
- Greeting: "Dear Dr. Dunckley" (PhD). The Harrington Discovery Institute profile refers to "his team" (third-party, not
  his own bio).
- Other co-founder: Christopher Hulme, PhD, professor of medicinal chemistry, University of Arizona (Pharmacology and
  Toxicology, BIO5); previously Eli Lilly and Amgen.

## Activity (most recent first, all sourced)
- 2026-08-25: Research Square preprint, "Elevated DYRK1A in Primary Tauopathies and Therapeutic Targeting with the
  Brain-Penetrant Inhibitor DYR533" (Velazquez … Hulme, Dunckley), PMID 42687920.
- 2026-01-23: bioRxiv preprint, "Dyrk1a inhibition with the Novel Compound DYR533: A Cross-Disease Therapeutic Strategy…"
  (Bartholomew … Hulme, Dunckley, Velazquez), PMID 41648480.
- 2025-08-14: NIH NINDS SBIR Phase II, 5R44NS129400-03, $1,428,499, "Commercialization of Selective Dyrk1a Inhibitors for
  Down Syndrome", https://reporter.nih.gov/project-details/11194266 (project period 2022-09-15 to 2027-08-31).
- 2024-09-17: 4R44NS129400-02, $1,496,403, https://reporter.nih.gov/project-details/10709750
- 2022-09-13: 1R42NS129400-01 (STTR Phase I), $498,634, https://reporter.nih.gov/project-details/10545138
- Total NIH to Iluminos: $3,423,536 (shown as $3.4M).
- 2022-11-17: ASU News, "ASU researchers developing pioneering drug to treat Alzheimer's disease in Down syndrome patients".
- 2018-04-25: Tech Launch Arizona, "Startup Iluminos licenses Arizona-invented treatment for Alzheimer's disease".

## Bad-site evidence (iluminostherapeutics.com, viewed 2026-11-21)
1. The whole home page is a Wix "Coming Soon" placeholder: giant "Coming Soon" over a stock blurry colour-gradient video.
2. Only content is a newsletter blurb ("Be the first to discover… Join our newsletter to stay informed about our upcoming
   launch"); no team, pipeline, science explanation, funding, news or address.
3. Wix template leftovers in the header: site search box, "Log In" member widget, "Blog" and "Events" links; page title
   truncated to "Home | Iluminos Therapeutic".
4. No mention of DYR533, the NIH SBIR Phase II, or the 2026 data.

## Brand
- Palette sampled from the live site: header gradient indigo `#0d072d` → green `#286953`; hero gradient amber `#f7a664`.
  Tokens: ink `#0d072d`, accent `#2a6b54` (`#68c79c` on dark), bone `#f3f2f8`, amber kept for the inhibitor.
- Type: Questrial (their wordmark's geometric sans) for display; IBM Plex Sans for labels/body.
- Mark: their white four-petal flower redrawn as four overlapping circles.

## Hero (option c: crafted render of the real mechanism)
- Space-filling render of the DYRK1A kinase domain from crystal structure PDB 8T2H ("DYRK1A complex with DYR530",
  1.85 A, Montfort & Basantes, University of Arizona; RCSB), chain A with the DYR-series inhibitor (ligand XIR) in the
  ATP pocket. Rendered offline by `dyrk.py` (sphere shading, depth AO, N-lobe/C-lobe in the header greens, inhibitor in
  the site amber), transparent ground → `hero.webp` 958×1266. Caption on the page names the structure.
  DYR530 is not claimed to be DYR533.

## Story
- One engraved scene: three chromosome 21s with the DYRK1A locus (21q22) → the kinase's two lobes and ATP pocket →
  tau gathering phosphates → DYR533 seats in the pocket and the phosphates fall away. Schematic.
