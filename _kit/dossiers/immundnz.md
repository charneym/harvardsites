# Immundnz (slug: immundnz) — HOME-ONLY build, 2026-11-21 (batch 2026-11f)

- Site: https://immundnz.com/ (WordPress/Divi). Domain confirmed: "Immundnz" logo and name on every page, Kent Science Park address in the footer, Calendly "immundnz/30min", blog posts through 2024; CORDIS lists the participant as IMMUNDNZ LIMITED, Building 400 The Ventures Building, Kent Science Park, Sittingbourne (SME). MTEC life-sciences directory lists info@immundnz.com and the same company. No newer domain found.
- Type: UK specialist immunology CRO (in vitro / ex vivo human immune models and assays for drug discovery). No pathogen, toxin or biodefence work (the site mentions infection only as one application area and a cytokine-storm risk case study; no pathogen handling).
- HQ: Building 400 (Ventures Building), Kent Science Park, Sittingbourne, Kent, ME9 8EF, UK (site footer). Phone +44 (0)7878 279127. Founded 2016 at Alderley Park.
- Email: info@immundnz.com (MTEC directory, https://mtec-sc.org/life-sciences/immundnz). The site itself only has a contact form; no personal addresses published.
- Lead: Dr. Ir. Robert-Jan Lamers, Founder and Company Director ("Our Story", https://immundnz.com/assays/company/). Greeting: "Dear Dr. Lamers".
- Others: Dr. Masih Alam, Co-Founder; Dr. Rawshan Choudhury, Principal Scientist.

## Facts used
- Home: "The Immune Response Company"; specialist immunology CRO; customised solutions, translational human data; oncology, immuno-oncology, neuro-immunology, cardiovascular, respiratory, metabolic, autoimmune; "we are scientists who enjoy hiking and research", "off the beaten track"; routes (target, cell-based, functionality, therapeutic area) to first-in-man; free consult.
- Solutions (7) and case studies from /insights/ (cytokine-storm vaccine-protein risk, tissue damage, anti-cancer drug on M1 polarisation, Th17 IL-17/IL-22 inhibition, modified macrophage medium, mRNA nanoparticle into DCs, heat-shock protein diabetes model).
- Assays: M1/M2 (CD14, CD11c, HLA-DR, CD80, CD86, SIRPα; flow, IHC, microscopy), ADCP (microscopy co-localisation + flow phagocytosed vs non-phagocytosed), CRA (PBMC + own cell line-based CRA), DC maturation, Th17 (PBMC or TALL-1, IL-17/IL-22, 96-well), immune & protein-based.
- Our Story: founded 2016 at Alderley Park by Masih Alam and Robert-Jan Lamers; 2017 fully equipped in vitro immunology lab at Alderley Park; additional 13-channel high-throughput flow cytometer; Eurostars 2016, H2020, Innovate UK grants; founders' bios.

## Activity (since 2025-05-18)
- 2025-07-22: EU Horizon Europe MSCA Staff Exchange grant agreement signed, project 101236487 TUMORGPLAT "Making patient-derived tumor organoids a reliable cancer therapy testing platform" (2026-01-01 to 2029-12-31; Immundnz net EU contribution €15,030; coordinator CSIC; partners FRCB-IDIBAPS, UPV, Fondazione IRCCS Istituto Nazionale dei Tumori, Università di Pavia). https://cordis.europa.eu/project/id/101236487

## Bad-site evidence
- Hero is an unrelated green hillside landscape photo (a hiking metaphor) with a red-to-purple rounded "pill" banner reading "The Immune Response Company" and a floating white box ending "Explore us and let's go for a hike!".
- Generic Divi template with a red chat bubble; the "About Us" nav link goes to a "No Results Found" 404 page; that 404 page shows sidebar headings in Dutch ("Meest recente berichten", "Recente reacties"); the founders' story lives under /assays/company/; latest blog post July 2024.

## Palette
- Sampled from the live site CSS and logo: site navy #001427 → ink #04121f; banner/logo crimson #ca1532 → --acc #b3122c (solid buttons, text on light) and --accL #f2566a (on dark); site blue #2ea3f2 → --ember #5cb6ee (M2, secondary). Their own fonts: Alegreya (display) + Alegreya Sans. Logo redrawn as SVG: antibody "Y" mark, "immundnz" wordmark, chromatogram peak trace.

## Hero / story
- Hero (update option b, real photograph): National Cancer Institute on Unsplash, Unsplash License (free, not Unsplash+): https://unsplash.com/photos/kWAPbD_zaEU (CDN https://images.unsplash.com/photo-1581594355548-aab613ebdb69, downloaded at 3000 px). Pseudo-coloured scanning electron micrograph of an oral squamous cancer cell (white) under attack by two cytotoxic T cells (red). Graded by _kit/home/immundnz/grade.py: black SEM ground keyed to real alpha, long elliptical feather on every edge, greys cooled slightly, T cells pulled toward the logo crimson; 1800 px webp. Placed right of the measured H1/lede (≥120px clear), slow drift; phones: top band. Caption credits NCI and says only what it shows. Not Immundnz's own image. (The site's own images are stock 3D renders and a hillside, not usable.)
- Story: one engraved culture well. (1) Model: six monocytes become macrophages, polarised M1 (crimson) / M2 (blue); (2) Challenge: antibody-coated target cell; the nearest M1 macrophage closes in and engulfs it (ADCP, Fc–FcR); (3) Read out: flow cytometry dot plot, phagocytosed population gated. Schematic, illustrative.

## Build-out pages
- Nav Solutions / Assays / Team / Insights → #/more/* via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto info@immundnz.com, address, phone, Calendly).
