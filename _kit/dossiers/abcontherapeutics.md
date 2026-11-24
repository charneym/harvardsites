# Abcon Therapeutics (slug: abcontherapeutics) — PRIORITY home build (client in direct talks; not a cold lead, in no CSV)

- Site: https://www.abcontx.com (WordPress, read 2026-11-24; pages Home, About Us, Investors, Leadership (/ledership/), Research & Development, Publications & Press Releases, Contact Us). The company writes its name "Abcon Therapeutics, Inc." (logo "Abcon"), used as such on the concept.
- Type: preclinical biotech; ATX101, a fully humanized anti-CD6 antibody-drug conjugate (MMAE payload) for T-cell lymphoma, and ATX006, the naked anti-CD6 mAb (licensed from the University of Michigan, 2023) for solid tumours and autoimmunity. Out-of-scope check: no pathogens, toxins or biodefence (MMAE is a standard ADC payload).
- HQ: 10000 Cedar Ave., GCIC Building, Cleveland, OH 44106 (site footer). Delaware C-corp, founded 2019 by the Cleveland Clinic and Dr. Feng Lin with Dr. David Fox (site; the Cleveland Clinic newsroom says 2020).
- Lead: Tony Giordano, Ph.D., President and CEO (site Leadership; Cleveland Clinic newsroom 4 Aug 2023). Greeting: "Dear Dr. Giordano".
- Best published email: tgiordano@abcontx.com (the only address on the site, Cloudflare-obfuscated in the footer "Get in Touch"). No other address found.

## Activity
- Cleveland Clinic newsroom, 14 Mar 2025: profile of Dr. Feng Lin; "The company recently secured funding support from the National Cancer Institute (NCI) for pre-IND studies"; plans a pipeline of ADCs. https://newsroom.clevelandclinic.org/2025/03/14/innovation-in-immunology-cleveland-clinic-researcher-advances-next-generation-biologics-through-innovation-and-industry-partnerships
- Patsnap Synapse lists ATX-101 and ATX-006 as preclinical, pipeline snapshot dated 27 Jun 2026 (aggregator, not used on the page).
- Cleveland Clinic newsroom, 4 Aug 2023: NCI NExT accepts ATX101 (IND-enabling tox, scale-up and cGMP at Frederick National Laboratory's BDP).
- NIH RePORTER: 1R41EY033243 (NEI, FY2021, uveitis, PI Feng Lin, $255,388) and 1R41CA275639 (NCI, FY2022, TCL ADC, PI Feng Lin, $402,680), org Abcon Therapeutics, Cleveland.
- Site says the company is raising its Series A (Investors page; the site footer is © 2023).

## Bad-site evidence (for the record; the sourcing gate was waived)
Template WordPress site, © 2023; stock antibody renders; a 169×70 raster logo; the CEO's photo is 276px; the "Leadership" URL is misspelt /ledership/; the email is hidden behind Cloudflare obfuscation; About and Home describe the first product differently (ATX101 vs ATX006); no pipeline view.

## Facts used (abcontx.com unless noted)
- Home: "Advanced Cancer Treatment"; ADC targeting CD6 on T cells.
- About: first-in-class therapeutics for cancer and autoimmunity; ATX006 fully humanized anti-CD6 mAb, pM affinity, rapidly internalised; ATX101 = ATX006-based ADC; TCL models: tumour shrinkage and inhibition of metastasis; eliminates activated proliferating non-malignant T cells; uveitis and GVHD models; NCI NExT does non-GMP and GMP manufacturing, tox, PK and PD; same linker and payload technology as FDA-approved ADCs; history (2019, Cleveland Clinic, Feng Lin, David Fox, NEI and NCI STTRs, NExT, Giordano recruited 2021, Cleveland Clinic Foundation funding 2022, ATX006 licensed 2023).
- R&D: CD6 discovered over 30 years ago; found almost exclusively on T cells; MMAE; kills dividing T cells, spares non-dividing normal T cells; CD6 on almost all patient TCL biopsies; peripheral and cutaneous TCL models; ATX006 caps and internalises CD6, does not deplete lymphocytes; activates killer lymphocytes; should suppress rather than induce autoimmunity; TNBC, prostate, NSCLC models; RA, MS, uveitis models.
- Investors: Cleveland Clinic spin-off, initial investment; Series A; STTRs; milestone-driven NExT partnership.
- Cleveland Clinic newsroom 2023: Feng Lin quote that TCL is aggressive and current therapies "are not very effective" (used in paraphrase in the manifesto).
- Leadership: Tony Giordano (President and CEO; Management & Board), Feng Lin (CSO, Founder), David Fox (Professor of Rheumatology and Internal Medicine, U Michigan; Co-founder & Scientific/Clinical Advisory Board), Brian Hill (Cleveland Clinic; Clinical/Scientific Advisory Board), Eric Hsi (Mayo Clinic; Chair, Dept of Lab Medicine and Pathology — shown as "Advisor · Mayo Clinic"), Paolo Caimi (Cleveland Clinic; Clinical/Scientific Advisory Board), Kyle Chan (Chairman), Joe Rich (Cleveland Clinic; Board). Portraits are theirs (matched by page order), cropped 4:5 at native resolution; Giordano's source is only 276px.
- Publications: the seven key manuscripts their site lists, journal/year/first author from PubMed (33497367, 37573404, 36275816, 38280067, 29472120, 32307907, 28209777).

## Palette / type
Logo teal #107480 → --acc (on bone); THERAPEUTICS mint #78d0c0 → --accL (on dark); red drop #e8191f → the payload in hero and story, logo only otherwise; antibody greys → story ADC strokes; ink #04181b derived from the teal. Raleway (display) and Montserrat (text), two of the three fonts their site loads.
Logo: redrawn as clean vector (mark.py) from their 169×70 raster: the teal A with the grey antibody Y and red drop, geometric "bcon" with the red dot in the c, letterspaced THERAPEUTICS. Full colour on the bone loader (tagline deepened to #3f9f91 for contrast), reversed for the dark header (A #2a9faa, wordmark bone). Favicon: the A mark.

## Hero
Option (c), crafted render of the firm's own product class: an antibody-drug conjugate like ATX101, as a smooth coarse Gaussian surface of the intact human IgG1 crystal structure PDB 1HZH (symmetrised, as kalitherapeutics did), heavy chains logo teal, light chains pale mint, with a linker-payload ending in the logo's red drop at the hinge (H242), where the logo places it; illustrative geometry. surf.py env: COARSE=1 CR=2.8 BB=0.45 CUTF=3.2 PAD=2.4 DEP=9 NZ=72 ZUP=1.8 PR=4.2 KR=1.5, args 0.15 -0.25 0 2400 → hero.webp 900×994, real alpha. 1HZH is also used by kalitherapeutics and another concept, but in a different surface treatment, palette and composition (smooth sculpted surface, teal/mint, single red drop).
Their own imagery (two stock antibody renders, a 486px mechanism diagram, an NCI SEM) was not good enough for the hero: stock and low-res; the mechanism diagram became the story instead.

## Story
Their own R&D figure, redrawn in fine line: a dividing T lymphoma cell (spindle) and a resting normal T cell, both carrying CD6. 1 ATX101 (antibody Y with red payload) binds CD6 on both; 2 internalised in vesicles, payload released; 3 the dividing cell fades back to a faint outline, the resting cell is spared and brightens.

## Photo inventory
Used: logo (redrawn), 8 leadership portraits. Unused: 841_main.jpg and resize.jpeg (stock antibody renders, 740/1200px), IMG_3866.png (their mechanism diagram, used as the basis of the story), national-cancer-institute-scaled.jpg (NCI SEM of T cells, generic, and DQ forbids the NCI T-cell SEM).
