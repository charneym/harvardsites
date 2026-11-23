# Linio Biotech Oy (slug: liniobiotech) — HOME-ONLY build, batch 2026-11i

- Site: https://linio-biotech.com/ (Webflow "linio-biotech-v3", read 2026-11-23; pages Home, About, Tissue establishment, Science, Partnering, News, Contact). Domain check: company name, vector logo, team, addresses and info@linio-biotech.com on every page; the Tience® vial label prints "www.linio-biotech.com"; ClinicalTrials.gov sponsor "Linio Biotech Oy". No newer site on another domain (tience.com is the product site).
- Type: regenerative aesthetics / tissue product. Tience®, a cell-free allogeneic adipose tissue product (no pathogen/toxin work).
- HQ: Linio Biotech Oy, Tehtaankatu 27–29 A, 00150 Helsinki, Finland. Tissue establishment: Finn-Medi 5, Biokatu 12, 33520 Tampere.
- Lead: Karita Reijonsaari, PhD (Industrial Engineering), CEO (About, Contact). Greeting: "Dear Dr. Reijonsaari".
- Best published email: info@linio-biotech.com (Contact page lists it for both the CEO and the CTO). No personal address published (site, web search).

## Activity (pre-screen OK)
- ClinicalTrials.gov NCT07368764 "The Suitability of Tience® for Treating Acne Scars", sponsor Linio Biotech Oy, first posted 2026-01-27, intradermal injections, Helsinki. https://clinicaltrials.gov/study/NCT07368764
- Site news: 29.5.2026 Damernas Värld feature; 3.3.2026 Aftonbladet; 12.2.2026 LSI top 500; 22.1.2026 IMCAS 2026; 1.1.2026 JPM 2026; 12.11.2025 EATCB award.

## Bad-site evidence
Sparse white Webflow page with tiny letter-spaced mono caps, a small lobby video thumbnail with the logo pasted onto the glass behind a play button, small thumbnails and large empty areas; "Clincal advisors" typo in the About menu; footer reads "© 2014" though the company was established in 2017.

## Facts used (linio-biotech.com unless noted)
Home (regenerative platform, activate the body's own regenerative mechanisms, ready-to-use; Tience used by clinicians in the Nordics; >€10M raised through equity and public grants). Science (Tience: first-of-its-kind cell-free tissue product, ~40 clinics in the Nordics, only bioactive substances, skin condition/structure/elasticity, comparable to autologous methods without their burden; indications scar, post-surgical, soft tissue defects; hybrid injectable for volume restoration in scarred or fibrotic tissue, immediate lift + endogenous soft-tissue formation; proof-of-concept, pre-clinical; MDR/FDA pathways; ~2,500 treated patients post-market). Tissue establishment (TE4008, Fimea 2021; EU GMP A/C; QC sterility/endotoxin/protein; directives list). Partnering ($23.8B injectables, ~11% CAGR; regenerative ~20%/yr; investor attributes). About (founding story 2005 Tampere University, Ylikomi and Uusmies; leadership and board bios, shortened; timeline 2005–2025). ClinicalTrials.gov for the acne-scar study design.

## Palette / type
Live CSS tokens: --black #221e20, --sienna #804736, --peru #c17c57, greys #e7e7e7/#ccc/#666, white page. Inverted-palette build: ground #e5e4e3 (the vial photo's flattened studio grey), ink #221e20, accents sienna on light and peru on the near-black bands. Their type is Styrene A + Disket Mono; DM Sans + DM Mono stand in. Header/loader/footer use their real vector logo (inline SVG from the site).

## Hero
Option (a): Linio's own product photograph of a Tience® vial (linio_tience_bottle2.webp, 2500×1409, from linio-biotech.com/science). Crop 745,140–1745,1240; backdrop estimated by masked normalized-convolution inpainting and subtracted onto a constant #e5e4e3; everything outside the vial/shadow silhouette set exactly to the ground; alpha eased over 90px; lossless WebP. Script: /tmp flat3.py (logic recorded here). Drawn at ≤ native scale. Unique to this site.

## Story
Skin in section (epidermis with one shallow acne scar, dermis with collagen bundles, adipose tissue). 1: fat cells warm and bioactive substances appear. 2: a needle delivers Tience intradermally under the scar. 3: new collagen draws in across the gap and the scar levels.
