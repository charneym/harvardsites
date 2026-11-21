# Glyciome, LLC — dossier (batch 2026-11c, HOME-ONLY build)

Slug: `glyciome` · built at `/glyciome/` · domain glyciome.com · parts and render in `_kit/home/glyciome/`

## The company
Glyciome® LLC (pronounced GLY-key-ome) is a women-owned bioscience start-up in Spokane, Washington, commercialising
first-in-class urogenital healthcare products: prebiotic medical devices and personal care that support healthy genital
surface function, aimed at the "microbiota-cancer axis" (common genital infections more than double the risk of genital
cancers). Founded 2017 by Joanna Ellington, Dennis Clifton and Rayne Ellington-Lawrence (Spokane Journal, Dec 2025).
Sources: glyciome.com (index, research.html, about.html).

Address on site: 850 E Spokane Falls Blvd, Spokane WA 99202 · 509.828.0655 · info@glyciome.com.
Also: first tenant at Evergreen Bioscience Innovation incubator (10220 N Nevada, North Spokane) per Spokane Journal / Wild & Pure (Nov 2025).
NIH RePORTER organisation city: Valleyford, WA.

## Funding (verified)
- NIH/NCI 5R44CA254543-03, "Cervical Cancer Prevention Prebiotic Device", FY2026, **$1,244,380**, award notice 2026-08-27,
  budget 2026-09-01 to 2027-08-31; PIs Joanna Elizabeth Ellington, Joanna-Lynn C Borgogna. https://reporter.nih.gov/project-details/11419171
- NIH/NCI 2R44CA254543-02A1 (Phase II), FY2025, $1,039,382, notice 2025-09-18. https://reporter.nih.gov/project-details/11254991
- Phase I: 1R41CA254543-01A1 (2021, $399,993) + supplement 3R41CA254543-01A1S1 (2022, $54,975), with Raina Fichorova.
- HSSA Spokane County matching grant $455,000 (2024). "$3.4 million in grants to date" (Spokane Journal, Dec 2025).

## Product / science (RePORTER abstract + research.html)
PreBioGyn: preservative-free prebiotic intravaginal lubricant to prevent bacterial vaginosis (BV), a risk factor for cervical
cancer; for use regardless of HPV vaccination; ~1 in 4 female Americans have BV; ~40% recurrence with current treatments.
Phase I in vitro proof-of-concept for vaginal cell and microbiome safety vs existing BV-relief lubricants. Phase II aims:
commercial manufacturing; biocompatibility for FDA clearance as gamete-safe lubricant, path to pregnancy use; RCT in ≥70
LRS subjects recently treated for BV. Trial sites planned in Spokane and Puerto Rico (2026), partners UW School of Medicine,
Providence Sacred Heart; third-party evaluation by Fichorova lab (Harvard Medical School / Brigham and Women's).
Pipeline: kraft-paper applicator (near-market), mobile app (translational), carbon nanotube BV biosensor (early stage),
Wild & Pure® prebiotic cleansers (on market; 2021 Idaho Innovation Award; EWG Verified). Patents: first US patent 2024,
EcoBalance™ System patent June 2025. Four abstracts (JCO Global Oncology 2022, 2024 ×2; CEBP 2023) with DOIs.

## People
- Joanna Ellington, DVM, PhD, DACT — co-founder & CEO (she/her). Pre-Seed® inventor; 25 issued patents; 2026 Seattle AWIS award.
  Published email: **jellington@glyciome.com** (Glyciome FCOI Policy PDF on glyciome.com, images/Glyciome-FCOI-Policy_09.13.25.pdf).
- Dennis (G. Dennis) Clifton, PharmD — co-founder & COO; former WSU dept chair / interim dean of pharmacy.
- Headshots: glyciome.com/images/JEE.jpg, GDC.jpg (422×580 / 435×580), copied to /glyciome/jee.jpg, gdc.jpg.

## News used (all link out)
Aug 2026 RePORTER (FY2026 award); Feb 2026 AWIS (EIN Presswire); Dec 2025 Spokane Journal trial; Nov 2025 EBI; Jun 2025
EcoBalance patent; Sep 2024 landmark patent (EIN Presswire).

## Brand
Logo glyciome-reg.jpg (124×60): cyan swirl ~#3bb8d8, wordmark warm brown-grey; site link colour #2da0ce, greys #444/#888.
Build: ink #0b1519, accent #3bb8d8 (#74d2e8 on dark, #106c88 on bone), bone #f5f3ef, stoneD #5a514c. Newsreader + Mulish.

## Hero
Option (c), crafted render of the real product: a dollop of clear prebiotic gel (PreBioGyn's form) on a dark glossy floor,
studio soft-box reflections, refraction, cyan caustic, micro-bubbles. Ray-traced by `_kit/home/glyciome/render.py`
(numpy height-field drop, Fresnel/refraction, bisection-refined hits), 1600×1420 with real alpha decomposed against the
ink (all edge alpha 0). Their own site imagery is generic stock (microscope, beaker, test tubes, Spokane at night), so not used;
an Unsplash search could not be run from this session.

## Bad-site evidence (live, 2026-11-21)
1. Dated 2013-era template: jQuery 1.12.4 + jquery-migrate, LayerSlider, flexslider, isotope, selectnav.
2. Generic stock hero (microscope objective "100X/1.25") with text in grey translucent boxes and a yellow gradient "Learn More" button; a carousel spinner icon left in the corner.
3. On phones the nav is a native `<select>` "Menu" dropdown.
4. Only three pages; no pipeline page, no visual of the product, news only as a list on "About Us"; a Spokane-at-night stock photo and an award badge as sidebar art; "Documents" heading with only the FCOI policy.
5. Pipeline, NCI Phase II and trial are buried in one long paragraph of research.html.
