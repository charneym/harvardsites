# BTB Therapeutics, Inc. — dossier (home-only concept, batch 2026-11h)

- Site built: `/btbtherapeutics/` (home only, build-out pages via `_kit/lib/buildout.js`)
- Source folder: `_kit/home/btbtherapeutics/` (assemble.py → `_kit/src/btbtherapeutics.src.html`)
- Live site: https://www.btbtherapeutics.com (English pages under /en/)
- Domain check: company name, team, pipeline and news on the page; info@btbtherapeutics.com published on its About page
  (Company Profile); the Business Wire release of 2025-02-24 links back to the company. No newer domain found.
- HQ: Escondido, California (About page: "now ... located in Escondido, CA with its operating subsidiary in Kyoto, Japan").
  Form D lists 26281 Wyndemere Court, Escondido, CA 92026, (858) 945-3733 (https://formds.com/issuers/btb-therapeutics-inc);
  not used on the page (it looks residential). Operating subsidiary: BTB Therapeutics GK, Kyoto.
- Public email: info@btbtherapeutics.com (About → Company Profile).

## Lead
- **Takashi Kiyoizumi, MD, PhD, MBA** — CEO and Director of the Board, BTB Therapeutics, Inc.; CEO, BTB Therapeutics GK
  (About → Management Team). Founder and former CEO of MediciNova. Greeting: "Dear Dr. Kiyoizumi".
- Best published email: info@btbtherapeutics.com (no personal address published; searched site, Business Wire, BIO listings).

## Activity (most recent first)
- 2026 — BIO International Convention 2026 (San Diego) session listing for BTB Therapeutics, Kiyoizumi as CEO
  (https://convention.bio.org/2026-sessions-and-courses/btb-therapeutics); About page updated with new advisor photos (uploads 2026/05).
- 2025-08-22 — "New publication in PNAS on BTB-101": Hagiwara et al., "Discovery and development of an oral analgesic targeting
  the α2B adrenoceptor", https://www.pnas.org/doi/10.1073/pnas.2500006122 (company news).
- 2025-06-15 — Innovator's Pitch Challenge, RESI Boston 2025. 2025-05-16 — advisor Garcia-Blanco elected to the NAS.
- 2025-02-24 — Board: David R. Snyder and Nobuhiro Yagi (Business Wire). January 2025 — US corporate inversion.
- 2024-04-30 — Phase II part of an investigator-initiated trial of the new analgesic started (Kyoto University Hospital).

## Bad-site evidence (viewed 2026-11-23)
1. Hero is a stock blue gradient with a network-line overlay and six stair-stepped acronym banners ("Bench To Bedside",
   "Bedside To Bench", "Beyond Traditional Benchmark"...): no sentence says what the company develops.
2. WordPress theme "btb2024" on Bootstrap 4.1.3 (2018), slick carousel, Font Awesome 4.2 and 6.1 loaded together.
3. Japanese strings leak onto English pages ("ページトップ" beside "Page Top" on every page).
4. Recruit page reads "Under construction."; Contact is a bare form with no address or email.
5. Pipeline is a pasted JPEG chart (pipeline_en-scaled.jpg) and the mechanism is a pasted slide (endopin_en.jpg).
6. Home page lists the same three news items twice; stale footer "© BTB Therapeutics, Inc. 2024".
7. Stock lab photo (pipette and vials) as the "About" image.

## Brand
- Logo PNG (wp-content/uploads/2024/10/logo.png) sampled: navy #1b3077 → --acc/--accD (emphasis on light); cyan #179fcd
  → --flame, lifted to #46b8e4 (--accL) on dark; ink #0a1030 is the deep shade of the navy. Neutrals only besides.
- Nav/loader logo: their real raster lockup, recoloured for dark (navy → bone #f0f4fb, cyan kept), native 676×176
  shown at 44px (nav) and 64–84px (loader): crisp, not upscaled. Footer wordmark in Source Sans 3 600 (their wordmark is a
  humanist sans of that family).

## Hero
- Option (c), crafted render of the firm's own subject (render.py, numpy only): a transverse section of the spinal cord under
  fluorescence immunostaining — butterfly grey matter (neurons in logo cyan, large motor neurons in the ventral horns),
  myelinated white matter (logo navy lifted), bone-white noradrenergic fibres in the dorsal horns where BTB-101 acts,
  central canal, ventral median fissure. On pure black, composited additively (no edges). No other concept uses a
  spinal-cord hero (grep of dossiers).

## Story
- The dorsal horn synapse from their ENDOPIN figure: pain signal crosses and climbs; descending noradrenergic bouton with
  α2B autoreceptors (negative feedback); BTB-101 blocks α2B, more noradrenaline acts on α2A, the signal fades.

## Photos (BJ/BR)
- Team headshots exist on their About page but vary in crop, background and quality (259×340 up to 1707×2560; one a
  speaking photo with a microphone); used the text masthead instead (CL). Stock lab photo and the gradient eyecatch: stock,
  unused. Pipeline chart and ENDOPIN slide: redrawn as the pipeline rows and the story, not pasted.
