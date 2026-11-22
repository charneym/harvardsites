# Intrinsic LifeSciences LLC (slug: intrinsiclifesciences) — HOME-ONLY build, batch 2026-11g

- Site: https://www.intrinsiclifesciences.com/ (WordPress/Beaver Builder + WooCommerce; read 2026-11-22). Bad-site evidence: grey utility bar with "Checkout / Sign In/Register" and a rounded cyan pill "Ask for a Quote"; centred logo over a three-link menu; a full-width teal gradient strip "FIRST IN HEPCIDIN AND ERYTHROFERRONE"; a small 912x250 banner carousel (logo + La Jolla beach photo with a ribbon graphic) with dot pager; three rounded pill buttons with soft shadows; two text columns in pale teal headings; no imagery of the product or the science; management page still uses 2013 bio images and shows the late founder as President & CEO.
- Domain check: company name, products, La Jolla address and "© Copyright Intrinsic LifeSciences 2021 - 2026" on the site; the same street address (505 Coast Boulevard South, Suite 408, La Jolla) on the June 2026 PubMed affiliation and the NIH SEED success story; NIH RePORTER org "INTRINSIC LIFESCIENCES", La Jolla; NIH contact email @intrinsiclifesciences.com. intrinsicdx.com is its clinical-lab sister site (IntrinsicDx, "by Intrinsic LifeSciences"), equally dated, not a newer corporate site.
- Type: diagnostics/research tools (hepcidin and erythroferrone ELISA kits, assay services, CLIA lab). No pathogens, toxins or biodefence.
- HQ: 505 Coast Boulevard South, Suite 408, La Jolla, CA 92037. Phone 858-459-7788. Email info@intrinsiclifesciences.com (decoded from the site's quote mailto); IntrinsicDx clientservices@intrinsicdx.com.
- Lead: Eileen Westerman, CEO and Manager of the Board of Directors since 2017 (company bio page /eileen-westerman/; NIH SEED story calls her "Dr. Eileen Westerman", but the company bio lists no doctorate — greeting chosen: "Dear Ms. Westerman").
- Best email: no personal address published for her. info@intrinsiclifesciences.com (site). vostland@intrinsiclifesciences.com (Vaughn Ostland, Ph.D., COO; NIH SEED success story contact, https://seed.nih.gov/sites/default/files/2024-06/Intrinsic-Lifesciences-NIH-success-story-20240628.pdf).

## Activity (pre-screen OK)
- 2026-06: PubMed 41951114, "Competitive enzyme-linked immunosorbent assay to quantify hepcidin in horse serum", J Equine Vet Sci; Han H, Valenzuela M, Ostland VE with Intrinsic LifeSciences LLC affiliation (with NC State).
- NIH SBIR R44DK135139 (urinary hepcidin point-of-care device for iron deficiency in children), project period 2022-09-25 to 2026-08-31 (RePORTER 10597914 / 10709598).
- Site footer © 2021–2026; product store live.

## Facts used
- Home: The BioIron Company™; "First in hepcidin and erythroferrone"; world's first validated hepcidin assay; IntrinsicDx CLIA certified, CAP accredited, exclusive provider of the Intrinsic Hepcidin IDx™ test; RUO kits for human and pre-clinical models.
- Kits and specs (Intrinsic Products, Product Catalog): ICE-007, HMC-001, PHC-001, RHC-007, ERF-001, ERF-200 with ranges/sensitivities as listed; catalogue includes antibodies, standards, biotin conjugates, SA-HRP, TMB substrate, stop solution.
- Hepcidin FAQs: patented tracer + competitive ELISA (patents 7,723,063 and 7,745,162); only CLIA-certified immunoassay for hepcidin.
- Hepcidin Utility/Function: plasma iron 10–30 µM; diagnostic utilities; disease table (adapted from Ganz & Nemeth 2011). ERFE Utility/Function: EPO → erythroblasts → ERFE suppresses hepcidin.
- Clinical research services: thousands of hepcidin assays for Phase I–III trials; RUO assay menu.
- Team (Management page, Eileen Westerman page, Mark Westerman bio): founded 2006 by Mark Westerman with Tomas Ganz and Elizabeta Nemeth; Mark died Aug 30, 2017; bass hepcidin discovery; bios condensed.
- News: PubMed 41951114, 34002695, 32674118; RePORTER 10597914; NIH SEED story PDF.

## Palette / type
Live logo SVG (IntrinsicLifeSciences-BioIron-Logo.svg): black type rgb(35,31,32), cyan rgb(0,176,226), blue rgb(0,145,205), teal rgb(33,182,182), ribbon gold rgb(212,199,151); site accent #20C3EE. Ink #071219, accent #0091cd / #20c3ee, gold #d4c797 for the hero italic. Cinzel for the wordmark (their classical capitals with the tall I), Raleway (their site face) for text, Cormorant Garamond display.

## Hero
Option (c): crafted render of their real product, a 96-well ELISA microplate (SBS footprint, 9 mm pitch) mid-assay with TMB developing blue; standards in columns 1–2 deep to pale as in a competitive assay; samples in duplicate. _kit/home/intrinsiclifesciences/render.py (numpy sphere tracing, real alpha, 1512x988). Unique to this firm (no stock photo).

## Story
Two wells in cross-section with antibody-coated floors: sample hepcidin and biotinylated tracer compete → wash, bound stays (low-hepcidin well mostly tracer, high-hepcidin well mostly hepcidin) → TMB colour deep vs pale, with the inverse standard curve.
