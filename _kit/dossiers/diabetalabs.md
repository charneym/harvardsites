# Dia Beta Labs Ltd — dossier (batch 2026-11h, HOME-ONLY build)

Slug: `diabetalabs` · built at `/diabetalabs/` · domain diabetalabs.com · parts and render in `_kit/home/diabetalabs/`

## Domain check
diabetalabs.com is the company's own site: page title "Dia Beta Labs Ltd – Target-Led Management of Metabolic Disease",
company name and logo on every page, contact page lists ryan@diabetalabs.com and info@diabetalabs.com and the Belfast postal
address, news posts dated 2024-10 to 2026-09. No newer domain found.

## The company
UK biotech, spin-out of Ulster University's (Peter Flatt) Diabetes Research Group, founded 2022 (StartupHub.ai), building on
30+ years of translational research; works in the DRG labs in Coleraine. Develops peptide therapeutics (re-designed human hormone
receptor activators) acting at previously untapped receptors on the beta-cell surface: rest beta-cells, improve function,
increase beta-cell mass, prevent/reverse decline; more sustainable, quality weight loss. Three peptides in preclinical
development; lead programme in IND-enabling toxicology (Sept 2026 news). Validated in cellular and rodent models (islet
structure restored after 28 days in a beta-cell-toxin model). Non-incretin approach (AIMS news).
Sources: diabetalabs.com (home, /about, /our-approach, /beta-cell-health, /dbl-team, /news, /contact).

## Facts used on the page
- 537M adults with diabetes (642M by 2040), 90% type 2, $966bn cost in 2021, >80% from complications (diabetalabs.com home).
- Candidate properties: peptide analogues, enzyme resistant, receptor selectivity, excellent solubility (home).
- Team, scientific committee, seed investors (DSW Ventures, QUBIS Ltd, Clarendon Fund Managers NI; seed closed Jan 2025) (/dbl-team).
- Postal address: Dia Beta Labs Ltd, 4 Murray House, Murray Street, Belfast, BT1 6DN (/contact). HQ Coleraine (site header, AIMS release).

## Leadership / outreach
- Lead: **Dr. Ryan Lafferty**, Founder & CEO (diabetalabs.com/dbl-team; "Co-Founder and CEO, Dr Ryan Lafferty" in the AIMS release). Greeting: **Dear Dr. Lafferty**.
- Best published email: **ryan@diabetalabs.com** (diabetalabs.com/contact: "contact Dr. Ryan Lafferty directly via the details below"); general info@diabetalabs.com.

## Activity (latest first)
- 2026-09-15 — wins AIMS Summit 2026 Shark Tank (IDA Ireland, Dublin, 26 Aug); lead programme in IND-enabling toxicology. diabetalabs.com/dia-beta-labs-wins-aims-summit-2026-shark-tank-competition/
- 2025-08-28 — raises €1.4M (StartupHub.ai, https://www.startuphub.ai/news/dia-beta-labs-raises-14m-for-diabetes-cell-therapies)
- 2025-06-17 — Prof. Peter Flatt MBE (diabetalabs.com news)
- 2024-10-10 — INVENT 2024 overall winners (diabetalabs.com news)

## Bad-site evidence
WordPress "Created for free using WordPress and Colibri" theme: dark stock cell-microscopy hero with small white centred text,
generic three-icon card row (lightbulb / target / first-aid kit clip-art), purple body links on white, top bar with
address/email/privacy links. Screenshot `_kit/sourcing/v2-sheets/11h-diabetalabs.jpg`.

## Design
- Palette sampled from their logo PNG (Dia-Beta-FC.png pixel counts: #225662 wordmark, #2098a1 molecule/LABS) and their live
  site's dark hero: ground #06161b, bone #f2f6f6, accents #2098a1 / #43b9c1 / #5cc9d0.
- Type: Roboto Slab (display; their wordmark is a slab serif), Open Sans (their site's text face).
- Logo: their own PNG lockup (4520×2827), recoloured dark-teal→bone for the dark ground and downsampled (crisp): full lockup in
  the loader, mark + wordmark crops in the header.
- Hero (update option c, crafted render): ray-cast cartoon + side-chain sticks of an illustrative alpha-helical peptide
  (ideal geometry, generic sequence; captioned "Illustrative, not a DBL candidate"), echoing the ball-and-stick molecule of their
  logo; `_kit/home/diabetalabs/render.py` -> hero.webp (real alpha). Not reused elsewhere (insulin hexamer = amidebio, islet = paulexbio).
- Story: one pancreatic islet in cross-section (beta-cell core, alpha-cell mantle): distorted with lost/overworked beta-cells ->
  peptides dock at beta-cell receptors -> insulin granules refill -> lost cells replaced -> circular, pre-diabetic islet.
- Build-out pages: nav Approach / Beta-cell health / Team / News open #/more/<item> (lib/buildout.js); Contact scrolls.
