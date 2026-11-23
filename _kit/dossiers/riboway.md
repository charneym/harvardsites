# Riboway Therapeutics (slug: riboway) — HOME-ONLY build, batch 2026-11h

- Site: https://riboway.com/ (hand-written HTML + leverna.css; read 2026-11-23). Bad-site evidence: a placeholder page: the logo over one plain text column, a horizontal rule, four paragraphs, a "deck@riboway.com" link, an embedded Microsoft Forms contact iframe, and an address line. No navigation, no other pages, no images besides the logo.
- Domain check: "Riboway Therapeutics" in the page title, logo and footer address (700 Main Street, North, Cambridge, MA 02139) on riboway.com; the published contact deck@riboway.com is on the domain; LinkedIn company page (linkedin.com/company/riboway) and the BIO 2025 Start-Up Stadium profile (bio.news) name the same company and CEO. No newer site found.
- Type: biotech (AI-guided RNA-targeting antisense oligonucleotides, neurodegenerative and metabolic disease). No pathogens, toxins or biodefence.
- HQ: 700 Main Street North, Cambridge, MA 02139 (riboway.com footer).
- Lead: Qinghong (Avery) Yan, PhD, Founder and CEO (bio.news 2025-09-05, "Dr. Qinghong (Avery) Yan"). Greeting: "Dear Dr. Yan".
- Best email: deck@riboway.com (the only address published, on riboway.com: "To receive a copy of our deck, please email deck@riboway.com"). No personal address found on the site, press or registries.

## Activity (pre-screen OK)
- 2025-06 (BIO International Convention, Boston): winner of the seed category of the BIO 2025 Start-Up Stadium; profile published 2025-09-05, https://bio.news/?p=5725.
- LinkedIn company posts mention JPM Week 2026 (undated in search results; not used on the page).

## Facts used
- riboway.com: "AI-Powered RNA-Targeting to Make Every Target Druggable"; decoding RNA to precisely control protein expression/function; upregulate, downregulate, activate or inhibit; AI-based platform decodes RNA regulation to identify druggable angles; 5 of 5 targets validated; assets in neurodegenerative and metabolic diseases; first-ever ASO to activate a high-value, previously undruggable transcription factor; lead program SCA2, a year to IND upon funding; deck@riboway.com; address.
- bio.news 2025-09-05: Smart ASO platform works through the cell's own RNA regulatory pathways (unlike traditional ASOs/siRNAs); SCA2 has no approved disease-modifying therapy; future indications neurodegenerative, autoimmune, metabolic incl. ALS and Alzheimer's; team advanced 20+ INDs and contributed to five approved drugs; founders Yan (Stony Brook, Columbia, Amgen, venture incubation, BioSpark Group co-founder), Sebastien Weyn PhD (co-founder, RNA computation lead), Lijun Wu (co-founder and advisor); quote "make every therapeutic target druggable".
- Not used: market-size estimates; the undated "first pharma partnership" LinkedIn mention.

## Palette / type
From Logo.png and leverna.css: RIBO light blue #50b0d0 -> --acc #56b6de; WAY navy #2d378f and swoosh cyan #1fa3e3 (kept in the logo); body slate #49545c; link blue #6ab0d4; link orange #f19e4b -> the ASO colour (hero render, story ASO, stage tags). Ground: deep navy #070c20 derived from the WAY navy so the reversed logo reads. Libre Franklin throughout (their site font). Logo: their real Logo.png, reversed for the dark ground by _kit/home/riboway/logo.py (RIBO kept light blue, WAY -> near white, THERAPEUTICS -> light grey, swoosh navy lifted), crisp from the 3107 px source.

## Hero
Option (c): a crafted render of their mechanism, _kit/home/riboway/render.py: a smart ASO (orange) hybridised to its target mRNA (logo blues) as an A-form heteroduplex, with the single-stranded mRNA running on either side; space-filling, shadow-mapped, SSAO, real alpha. Unique to this firm (DQ). Slow drift, no pointer response.

## Story
Fine-line messenger RNA with two ribosomes translating it: decode (a read-head sweeps the strand and brackets one druggable site) -> bind (the orange ASO comes down and base-pairs with the site) -> control (nascent chains lengthen and more folded protein gathers above).
