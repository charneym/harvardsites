# XCellAssay — dossier (home-only build, batch 2026-11e, biotech)

Sources fetched 2026-11-20: xcellassay.com (single page; /technology, /our-people etc. return an Azure Static Web Apps 404); NIH RePORTER API (org XCELLASSAY, INC.); UCSF Profiles (https://profiles.ucsf.edu/fred.schaufele).

## Pre-screen
- Bad site (passes): (1) hero is an AI-generated image of a deer, rabbits and a waterfall inside a kitchen window behind a faucet; (2) clip-art "XCellAssay Living Healthier" logo, template look; (3) every nav item is a one-page anchor and the direct URLs (/technology, /our-people, /press-releases, /contact-us) return "Azure Static Web Apps - 404: Not found"; (4) stale: "© 2024 XCellAssay", newest press release April 2024, nothing on the 2025 NIDA award or the July 2026 Phase II; (5) science explained in one paragraph.
- Active (passes): NIH NIEHS SBIR Phase II 2R44ES036049-02, $1,135,244, award notice 2026-07-10 (https://reporter.nih.gov/project-details/11407237). Also NIDA 1R43DA059306-01A1 $306,872 (2025-01-24, /11004021); NIEHS 1R43ES036903-01 $306,872 (2024-08-19, /11006684); NIEHS 1R43ES036049-01 $295,923 (2024-03-04, /10819976). Total $2,044,911.
- Scope (passes): cell-based nuclear receptor BioAssays for chemical pollutants (endocrine disruptors) in drinking water, and androgen doping. No pathogens, toxins or biodefence.

## Company
- XCellAssay Inc., 2630 Bancroft Way, Berkeley CA 94704 (site; Bakar Labs). NIH lists the org in San Francisco, CA. Email Fred@XCellAssay.com. Tagline "Living Healthier".
- Site: "We Monitor Drinking Water for Chemical Pollutants"; 10 trillion lbs of 84,000 chemicals manufactured yearly; EPA mandates >90 contaminants; >100,000 chemicals made in bulk; "Low-cost, robotic detection of chemical-induced change in engineered BioAssay cells"; How it works: fill an XCellAssay-provided vial, mail it, view results.
- Press (site): Feb 2024 selected for Bakar Bioenginuity Hub at QB3, resident lab; Apr 2024 NIEHS SBIR; validating on samples from California State water agencies.

## Science (NIH abstracts)
- R44ES036049: chemically agnostic BioAssays detect any chemical that alters a protein sensor; customers pay >$350/sample per BioAssay; innovation = multiplexed 'bar-coded' BioAssays co-plated in 384-well dishes; Phase I sensitivity/precision/accuracy exceeded non-multiplexed competitors; contamination above toxicologic thresholds found in municipal and private-tap samples. Aim 1: 10-minute protocol on mailable 2 mL (vs 2-day, 2 L). Aim 2: 13 multiplexed BioAssay cell lines. Lead customers: California water districts.
- R43ES036903: hand-held 1 x 1.5 cm strip with 20 sensor proteins, smartphone read.
- R43DA059306: Androgen Receptor BioAssay quantifying androgens in µl of dried blood; proprietary Internal Control Receptor; youth/amateur athletes.

## People (site)
- Fred Schaufele, PhD — CEO and Director of Scientific Operations; contact PI on all four awards; UCSF Professor Emeritus, Ob/Gyn, Reproductive Sciences (nuclear receptors). No pronouns published; greeting "Dear Dr. Schaufele".
- Irina Krylova, PhD — Director of Environmental Studies. HaiGuang Zhang, PhD — Director of Technology. Mei Ling — Director of Consumer IT. Headshots from xcellassay.com.

## Brand
- Logo PNG sampled: teal #388baa, black #242424. Site CSS: #275f8b (navy), #28A2BC, #55bdd3 (top bar), #9FCCE4, #cf91de. Built: ink #0b1319 (matched to the hero photograph), accent teal lifted to #5fb3cf on dark, navy #275f8b on light; pale blue and lilac only in the story. Mark redrawn as SVG (X figure with head); wordmark Cabin bold italic, "Cell" bone + "Assay" teal.

## Build
- Hero (option b): Unsplash photo by Eva Kristensen, "water pouring into glass with bubbles", https://unsplash.com/photos/water-pouring-into-glass-with-bubbles-Ir9g382pfUs (images.unsplash.com/photo-1794575115718-01257785faaf), Unsplash License. Graded toward teal, feathered into the ink on every edge, Ken Burns drift.
- Story: one well of a 384-well dish, top view: sample drop → sensor cells → bar-coded multiplex (dish + legend) → one BioAssay lights up, bars vs threshold.
- Their own cell-line micrograph (xcellassay.com/cell-line.png, 350px) in the partners section.
- Nav items open #/more/<item> via _kit/lib/buildout.js; Contact scrolls to the contact block.
