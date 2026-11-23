# SNC Therapeutics, Inc. (slug: snctherapeutics) — HOME-ONLY build, batch 2026-11h

- Site: https://snctherapeutics.com/ (Squarespace, read 2026-11-22; one page only). Bad-site evidence: a single scrolling page with a dark purple/green stock microbiology render behind thin white centred text, then a full-bleed lime-green block carrying huge purple display type ("Disruptive nanotechnology") beside a paragraph of body copy, a "Meet the Team" strip of four headshots with raw email addresses, no technology, pipeline, news or contact page, no publications, no address.
- Domain check: the company name, logo and team are on the page, and all four team emails are @snctherapeutics.com; NIH RePORTER lists SNC THERAPEUTICS, INC., Evanston IL (UEI YNQPL17KGWA6) as the awardee organisation on 1R41DK142265-01, with Evan Alexander Scott as contact PI; Northwestern's INVO startup page lists SNC Therapeutics as a 2022 spin-out of Scott's laboratory. No newer site on another domain.
- Type: biotech — tolerogenic nanotherapy (rapamycin-loaded polymersomes) for type 1 diabetes and transplantation, plus nonviral gene delivery. No pathogens, toxins or biodefence.
- HQ: Evanston, Illinois (NIH awardee record; zip 60201). No street address published.
- Lead: Evan Scott, PhD — Founder (site "Meet the Team"; NIH abstract: "founder and CEO of SNC Therapeutics Inc."). Pronouns not published on the site; the NIH abstract uses "his". Greeting: "Dear Dr. Scott".
- Best published email: evan.scott@snctherapeutics.com (published on the company's own team section).

## Activity (pre-screen OK)
- 2025-07-25: NIH STTR Phase I award 1R41DK142265-01, $350,000, NIDDK, "Tolerogenic Nanotherapy to Delay Type I Diabetes", project period to 2026-07-24. https://reporter.nih.gov/project-details/11066586

## Facts used
- Site copy: "A next generation gene & drug delivery platform"; "SNC Therapeutics Inc. employs a disruptive drug and nonviral gene delivery platform technology for rational immunotherapy. Our synthetic nanocarriers (SNCs) permit scalable, versatile, and controlled drug delivery to and/or transfection of diverse cell populations while minimizing toxicity and side effects."; team: Evan Scott PhD (Founder), Jeffrey Hubbell PhD (Co-Founder), Jacqueline Burke PhD (CSO), Sean Allen PhD (Director of R&D), with their portraits (reused, graded to greyscale) and emails.
- NIH 1R41DK142265 abstract: rapamycin-loaded polymersomes (rPS) given subcutaneously; target antigen-presenting cells, raise MHC II and lower coreceptor expression; CD4+ costimulation blockade and CD8+ regulatory T cells; antigen-specific tolerance without identifying the autoantigens; delay T1D onset in NOD mice; no direct modification of T cells; redosing not associated with an adverse immune response; Aim 1 dosing optimisation benchmarked against anti-CD3 (Tzield), Aim 2 GLP scale-up; goal an IND. Also: T1D raises cancer risk +25% and cardiovascular disease risk +200%; only treatment is lifelong insulin.
- Burke JA, …, Scott EA. "Subcutaneous nanotherapy repurposes the immunosuppressive mechanism of rapamycin to enhance allogeneic islet graft viability." Nature Nanotechnology 17, 319–330 (2022). doi 10.1038/s41565-021-01048-2 (PubMed 35039683): polymersomes drain to the lymph node, donor-specific suppression in a mixed lymphocyte reaction, improved normoglycaemia in fully MHC-mismatched islet transplantation.
- Northwestern INVO: founded 2022, "rational immunotherapy platform utilizing scalable versatile synthetic nanocarriers (SNCs)".
- Hubbell: member of the National Academy of Sciences, founding figure in immunoengineering (no current affiliation stated on the site, so none is claimed on the concept).

## Palette / type
Logo (SNC logo transparent background.png): navy #2b388f wordmark and a lime #97c63d quartered-sphere mark; live site pairs navy display type on a lime ground. Ink #0a0f26 navy-black, accent #a9d24e (lime) on dark, #2b388f (navy) for buttons and emphasis on bone. Outfit + Inter. Their own mark PNG is the header and loader mark.

## Hero
Option (c), crafted render of the firm's real product: a rapamycin-loaded polymersome in cutaway, so the block-copolymer bilayer (hydrophilic leaflets, hydrophobic core with drug specks) is seen in section, with intact vesicles drifting around it — ray-marched offline by _kit/home/snctherapeutics/render.py (pearl polymer, wrap diffuse and subsurface, studio reflections, soft shadows, SDF ambient occlusion, depth of field, faint hydrophilic corona, true alpha). Unique to this concept (no stock photo).

## Story
One continuous fine-line scene: skin in section with the subcutaneous injection, the draining lymphatic with its valves, and the lymph node with an antigen-presenting cell and the T cells around it. Step 1 the needle enters and leaves a depot of polymersomes; step 2 they travel the lymphatic into the node; step 3 the cell's surface markers change and the T cells it meets become regulatory.
