# Tecrea Ltd (slug: tecrea) — HOME-ONLY build, 2026-11-20

- Site: https://www.tecrea.com/ (WordPress/Divi + WooCommerce shop). Pages: Reagents (PLASMID, RNA, PRO, SM), Human Health, Animal Health, Drug Formulation, Bioprocessing, Support (Ask a Tecrea Scientist, FAQs), Buy, About (Company Information, Meet the team, Testimonials, Latest news), Contact.
- Type: biotech (nanoparticle drug/nucleic-acid delivery platform "Nanocin", polyhexanide core polymer). UK, not US: assigned by the coordinator in batch 2026-11e. Pre-screen: the UTI and dairy-cow programmes are anti-infective therapies (treatment), not pathogen research, toxins or biodefence.
- HQ: Research & Development, London Bioscience Innovation Centre (LBIC), 2 Royal College Street, London NW1 0NH, UK. Visiting: 4 Royal College Street, London NW1 0TU (enter via RVC reception). UK company no. 07966622 (company-information page).
- Email: info@tecrea.com (site: company information, team, contact, drug-formulation and news pages). No personal addresses are published anywhere I could find (site, news posts, Companies House, web search for "@tecrea.com").
- Lead: Simon Bate, Chief Executive Officer (tecrea.com/meet-the-team; Companies House: BATE, Simon Donald, director since 2018-12-20, no honorific; TheOrg: CEO since June 2022, previously Chief Development Officer). No pronouns published → greeting "Dear Simon Bate". CSO is Dr Liam Good (Companies House lists "Dr"; director since 2012).

## Facts used (tecrea.com unless noted)
- Founded 2012 as a spin-out of the Royal Veterinary College (University of London); privately held, registered in the UK.
- Nanocin: nanoparticle-forming technology; a dynamic system that rapidly self-assembles molecules and packages them into nanoparticles; enhances delivery into mammalian and bacterial cells; >99% cell viability; GMP compliant; "the only transfection reagent that is fully translatable to the clinic"; cargos DNA, RNA, small molecules, proteins, peptides, natural products; core polymer polyhexanide with a long safety record (eye drops to hand wash).
- Reagents: Nanocin PLASMID, RNA, SM, PRO (reagents page lines paraphrased); Nanocin GMP for drug formulation and bioprocessing (scalable AAV and lentivirus production).
- Licensed uses: animal health (otitis externa, mastitis, endometritis), human-health page list (ophthalmology, otitis externa, topical fungal infections, topical anti-inflammation, cosmetics).
- Tagline "We think small so you can work big"; contact headline "Take your research to the next level".
- Testimonials: RVC London, Loughborough University, IDIBELL Barcelona, Newcastle University, PRONEC Ltd (used as an "In use at" line).
- Team (titles exactly as published; no bios published): Liam Good CSO, Simon Bate CEO, Laila El Attar Principal Scientist, Mafalda Castro and Josephous Miculob Research Scientists; advisory & support: Omar A Ibrahimi (Dermatology & Human Health), David Wheeler (Dermatology & Animal Health), Steven van Winden (Livestock), Paul Dick (Animal Health), Liam McIlveen (Legal), Richard Smith (Finances).
- News (all linked): 2025-10-20 Biomedical Catalyst funding for UTI therapy; 2025-07-23 i Paper interview (https://inews.co.uk/news/chronic-uti-cure-hope-treatment-3781326), UTI work with UCL BIIG (Drs Khasriya and Horsley); 2025-06-02 SOFI 2 completed, Sanzone seed coating tested in Zimbabwe and South Africa; 2024-11-22 Accelerating FemTech cohort 2; 2024-07-08 Innovate UK dairy-cow endometritis project with a global veterinary pharma company; 2024-04-16 Phase 2b topical terbinafine (BBTAF202) met primary endpoint.

## Activity (since 2025-05-18)
- 2025-10-15/20: Innovate UK Biomedical Catalyst (FemTech feasibility) award for the recurrent-UTI therapy. https://www.tecrea.com/tecrea-ltd-secures-innovate-uk-biomedical-catalyst-funding-to-advance-groundbreaking-uti-therapy/ and https://iuk-business-connect.org.uk/?p=120655
- 2025-07-23 i Paper coverage; 2025-06-02 SOFI 2 completion; team page updated with new research scientists (photos uploaded 2026-03).

## Bad-site evidence
- Divi template with a row of multicoloured block nav buttons (green, navy, blue, dark green), Oswald condensed caps everywhere.
- Hero is a low-poly clip-art running man on a flat dark-green slab, with a rotating slider of four generic "LEARN MORE" slides.
- Footer "©2024 Tecrea Ltd."; purple WooCommerce currency banner across the page; URL typo "/drug-forumlation/"; news posts all "by admin | Uncategorized"; one news slug misspelt ("successful-hase-2b").

## Design
- Palette from logo.svg: green #5a9300 (→ --ember; lifted #a3d14a for accents on dark; #3f7000 for text/buttons on light), teal #00e5c4 (THINK SMALL), dots #009b34; ink #06140e from the site's #001600 hero ground. Their logo used as-is, recoloured lighter for the dark header (tecrea/logo.svg).
- Type: Newsreader (display), Schibsted Grotesk (text), Big Shoulders Display (footer wordmark, a nod to their condensed type).
- Hero (option b, real photograph): National Cancer Institute, "a close up of a cell phone case" (actually a fluorescence micrograph of cultured cells), Unsplash License: https://unsplash.com/photos/a-close-up-of-a-cell-phone-case-sIqWYiNLiJU — CDN https://images.unsplash.com/photo-1576086639808-ddfd21aa668c (2400 px). Regraded by _kit/home/tecrea/grade.py (channels remapped: membranes logo green, puncta logo teal, nuclei deep teal), feathered to transparent on every edge (DJ), right of ~50% with an ink scrim on the copy side (DI); slow Ken Burns drift; caption says illustrative photograph.
- Story: engraved target cell (bilayer, nucleus, ER, mitochondria); cargo → Nanocin self-assembly into nanoparticles → uptake across the membrane → delivery with the cell intact (>99% viable).
- Nav: Technology / Reagents / Programmes / Team / News open build-out pages (_kit/lib/buildout.js); Contact scrolls to the contact block.
