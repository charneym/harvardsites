# Exavir Therapeutics, Inc. — dossier (facts with sources)

## Company
- Legal name: Exavir Therapeutics, Inc. · San Francisco, CA (Pacific time). Sources: NIH RePORTER org record; Business Wire releases (San Francisco dateline).
- Website: https://www.exavirtherapeutics.com/ (Webflow). Contact: media@exavirtx.com (site mailto link and Business Wire releases).
- Positioning (site): "We are transforming the standard of care in long-acting antivirals."
- Boilerplate (Business Wire, 2023/2024): develops ultra-long-acting therapeutics with best-in-class product profiles; proprietary prodrug and formulation technology to extend half-life; aims for dosing as infrequently as once every six months or even once a year.

## Funding (verified)
- NIH NIAID SBIR, 1R44AI195119-01 (appl 11254817), notice 2026-08-04, first-year amount **$998,034**, PI Brian Kearney. Title: "Development of an Ultra-Long-Acting, Self-Administered, Dolutegravir-Based Treatment Regimen for HIV-1 and HIV-HBV Co-infection". Project 2026-08-04 → 2029-07-31. https://reporter.nih.gov/project-details/11254817
  - Abstract (summary): Direct-to-Phase II; aqueous formulations of dolutegravir and tenofovir prodrugs for low-volume IM and/or SC injection; aims: optimise formulation, scale up manufacturing, additional in vivo proof of concept vs. target product profile, readiness for GMP manufacturing and IND-enabling GLP toxicology; then toward Phase 1. Unmet need: only LA complete regimen (CABENUVA) uses agents less potent than guideline-preferred oral agents; IM by provider every 1–2 months; HIV-1 more susceptible to primary resistance to CAB and LEN; no LA/ULA agent treats HIV/HBV co-infection; no single-injection or self-administered LA regimens.
- Earlier: NIAID SBIR 1R44AI179564 (2023–2025; $1,049,975 / $1,000,000 / $1,000,000 by fiscal year), "XVIR-110 an ultra-long-acting INSTI for HIV pre-exposure prophylaxis in IND-enabling studies", PI Brian Kearney. https://reporter.nih.gov/project-details/10764186 ; Business Wire 2023-08-22 "receives $3M award from NIH/NIAID": https://www.businesswire.com/news/home/20230822179307/en/
- License: Business Wire 2024-05-22 — litigation settlement and license agreement with ViiV Healthcare for ultra-long-acting HIV compounds; upfront and milestone payments, tiered royalties low-to-mid single digits (amounts undisclosed). https://www.businesswire.com/news/home/20240522307113/en/ (read via BioSpace mirror).

## Pipeline (company site)
- VH-310 (previously XV-110 / XVIR-110): ultra-long-acting prodrug of cabotegravir, expected dosing every six months or longer; developed by partner ViiV Healthcare (GSK subsidiary), in a Phase 1 study; Exavir receives milestones and royalties.
- XV-122: long-acting prodrug of dolutegravir; therapeutic DTG concentrations up to once-every-fourth-month dosing; compatible with self-administration by auto-injector.
- XV-207: long-acting prodrug of tenofovir (active metabolite tenofovir-diphosphate) for HIV, HBV and HIV/HBV co-infection; partner agent to XV-122.
- Posters (links from the site): GSK medinfo PDF (cabotegravir prodrug, >6 months), CROI 2024 #656 (XVIR-110), CROI 2025 #705 (dolutegravir prodrug homodimer), CROI 2025 #710 (tenofovir prodrug nanosuspension).

## People (only as stated in sources)
- **Alborz Yazdi — Co-founder & CEO** (Business Wire 2023 and May 2024). Credentials not stated. Quote (2024): "We are excited to reach an agreement with the scientific and market leader in long-acting injectables for HIV."
- Brian Kearney — Chief Scientific Officer (2023 release); PI on NIAID awards (RePORTER). Described XVIR-110 as "the first Q6M+ INSTI".
- Mark Cockett — Chief Scientific Advisor (2023 release): attenuated injection-site reactions vs commercially available Q2M cabotegravir in animal studies.
- No headshots exist on the company site → text cards / typographic plates.

## Brand (BK)
- Logo: red awareness-ribbon/pin mark + white "exavir therapeutics" (webp, white text). Pixel sample: logo red **#d93930**.
- Mapping: logo #d93930 → --sin (accent); tint #f26a5f → --sinL (on dark); shade #b3261e → --sinD (on light); site near-black → --ink #0f0b0b base; neutrals bone #f6f2ef. Logo redrawn as inline SVG (ribbon path + Sora wordmark) so it works on both dark and light headers.

## Photo inventory (BJ)
- Used: ViiV Healthcare logo (VIIV.png, partner plate in pipeline).
- Unused, with reasons: logo webp (white-on-transparent raster; redrawn as SVG for light/dark headers); "EPIDEMIC (1).png" and "LONG-ACTING (1).png" (text-as-image headings, no content); virus-3d-red.webp and DNA hero render / "Light background.webp" (generic decorative 3D renders, not company work, and off-brand neon); arrow/down-arrow SVG icons (UI chrome).

## Bad-site evidence (verified 2026-11-12, Playwright)
1. Single page (~2.3k characters); nav items HOME / PROBLEM / PIPELINE / NEWS are same-page anchors.
2. No team or leadership section anywhere; no names on the site.
3. News stops at "May 24, 2024" (ViiV license); the 2026 NIAID award is absent. Footer "Copyright © 2025".
4. Stats rendered without their numbers ("UP TO … Risk reduction with long-acting PrEP"; headline text as images "ENDING THE" + EPIDEMIC PNG).
5. No explanation of the prodrug/formulation science beyond one-line program blurbs.

## Design critic (BN) dispositions
- Fixed: story rail/class collision and clipped THRESHOLD label (from early frames), depot label now fades with the depot, larger mobile figure type, hero gutter + stronger scrim + calmer oral band, mobile eyebrow on one line, accent moved to logo red (#e84a40 on dark / #c42e26 on light, AA-checked), duplicated $998K stat replaced, one dosing claim, ViiV logo on a dark chip, sub-page heads share one baseline and no longer sit on the canvas, science dark sections merged, filler map removed, no-break on program codes, team cards tightened.
- Rejected: use the site's 3D virus/DNA renders (generic decorative renders, neon/off-brand; BJ says skip stock); "front-end concept form" note and bio source lines kept (honesty/provenance).
