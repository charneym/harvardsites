# Life Recovery Systems HD, LLC (slug: liferecoverysystems) — HOME-ONLY build, batch 2026-11h

- Site: https://www.life-recovery.com/ (read 2026-11-23; Home, About, Management Team, News, Products, Cooling Performance, Clinical, Heatstroke, FAQ, Contact). Domain check: company name, logo, ThermoSuit product pages, team bios and info@life-recovery.com on the site; the company's PR Newswire release of 2 Mar 2026 gives www.life-recovery.com and @life-recovery.com contacts. No newer site on another domain.
- Bad-site evidence: obsolete 2000s design: fixed-width page with gradient blue banner, clip-art body figure, a stock surgeon photo, tiny cramped text boxes, iframe news panel, raster ~330x62 header logo; /site/investors link in the footer returns 404.
- Type: medtech, ThermoSuit System (rapid non-invasive therapeutic hypothermia by thin liquid convection / water immersion). Not pathogen-related.
- HQ: Research, Development and Manufacturing, 170 Kinnelon Road, Suite 5, Kinnelon, NJ 07405; Corporate Offices, 711 Kimball Avenue, Alexandria, LA 71301 (Contact page). Phone 973-283-2800.
- Lead: Matt Center, CEO (Management Team page; PR 2 Mar 2026). No pronouns published: greeting "Dear Matt Center".
- Best published email: mcenter@life-recovery.com (investment inquiries contact, PR Newswire release 2 Mar 2026). General: info@life-recovery.com (Contact page; media contact Robert Schock).

## Activity (pre-screen OK)
- 2026-03-02: "LRS Secures IDE to Study Its Thermosuit Cooling Device in a Pivotal Trial of Ischemic Stroke Patients" (PR Newswire): up to 160 patients, up to 8 hospitals, cooling to 32 ± 1°C, primary endpoint PSCI. https://www.prnewswire.com/news-releases/lrs-secures-ide-to-study-its-thermosuit-cooling-device-in-a-pivotal-trial-of-ischemic-stroke-patients-302701125.html
- 2025-11-07: Salerian et al., SISCO pilot study, Front Neurol 16:1611794 (PMID 41281552).

## Facts used
- life-recovery.com: founded 2003; mission; ThermoSuit developed with NIH NHLBI funding; FDA 510(k) for temperature reduction where clinically indicated (e.g. hyperthermic patients) and temperature monitoring; Medical Design Excellence Award 2009; suit features (porous lining, Velcro sealing, gussets, head positioning indicator; disposable, used on a conventional gurney); TSP50 pump (touch screen, casters); 33°C in about 30 minutes; patient access (pause top sheet); cooling performance (37 min median to 34°C, 27 min with propofol, 100% vs 71%/50% within 4 h, slowest 81 min; Howes 2010 vs Heard 2010); heatstroke (iced water immersion); team bios (Center, Freedman, Schock, Knight).
- PR 2 Mar 2026: IDE details, ~800,000 Americans suffer strokes each year (Schock quote), typically cools to target in 40 minutes, water and patient removed at about 33°C, maintained 24 h with conventional surface cooling.
- News links: PR Newswire; Frontiers in Neurology; CEEM 2024 doi 10.15441/ceem.24.291; ISC 2024 abstract doi 10.1161/str.55.suppl_1.WP30; LRS/FDA agreement 12 Jun 2023 (life-recovery.com page).

## Palette / type
Logo (images/header1.jpg): blue wordmark #0070bf, red ECG trace #e3202a forming the "i". Mapping: deep cold navy ink #08141f, --acc #0070bf (buttons), #62b6ec lifted on ink, ECG red only in the logo, cool bone #f4f7fa. Type: Sofia Sans (display; the logo is a semi-condensed bold italic humanist), Source Sans 3 (body), Red Hat Mono (labels). Logo redrawn as clean SVG by _kit/home/liferecoverysystems/logo.py (Sofia Sans 700 italic glyph paths + red ECG stroke); full colour on the cool-white loader, white wordmark with red trace in the nav.

## Hero
Option (c), crafted render: cold water, the ThermoSuit's medium: a single drop lifting off a still surface on its jet, rings spreading (drop.py, numpy raymarched SDF with Fresnel reflection and two-interface refraction), on black, drawn additively onto the navy (no edges). Unsplash search was not available in this session. Slow breathing drift, no pointer response. Unique to this site (the jet + drop also echoes the logo's ECG "i").

## Story
One fine-line side elevation: patient in the ThermoSuit on a conventional gurney, TSP50 pump on casters, core-temperature readout and cooling curve. Steps: in the suit; cold water over the skin, cycled by the pump (suit fills, flow particles); core temperature 37 → 33°C (curve draws to its end, body tint cools); water drawn off, held at target.
