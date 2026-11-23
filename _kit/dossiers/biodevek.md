# Biodevek, Inc. (slug: biodevek) — HOME-ONLY build, batch 2026-11i

- Site: https://www.biodevek.com/ (Squarespace one-pager, read 2026-11-23; sections Our Mission, The Problem, Our Technology, Meet the Team, Our Support and Partners, contact; sub-pages /publications, /pub-instant-adhesion, /pub-targeted-transparent). Domain check: company name, logo, GastroShield and team on the page; contact email talent@biodevek.com on the domain; domain registered 2014-05-15 (Verisign RDAP), live Google Workspace MX; NIH RePORTER org record "BIODEVEK INC" (Cambridge MA, PI Gonzalo Muñoz Taboada) matches; LinkedIn linkedin.com/company/biodevek. No newer site on another domain.
- Type: medtech; GastroShield, a sprayable two-component hydrogel sealant (amine-terminated Poloxamer + oxidized Dextran, per NIH abstract) for endoscopic management of GI bleeding and shielding of high-risk lesions. No pathogen/toxin work.
- HQ: LabCentral, 700 Main St, Cambridge, MA 02139 (site footer).
- Lead: Gonzalo Muñoz Taboada, PhD, MBA, CEO (site team; contact PI on the NIH award). Greeting: "Dear Dr. Muñoz Taboada".
- Best published email: talent@biodevek.com (the only address on the site). No personal address found (site, NIH RePORTER).

## Activity (pre-screen OK)
- 2025-08-14: NIH NIDDK SBIR Phase II 5R44DK139828-02, "Production of a Hydrogel-based Mucosal Sealant for Gastrointestinal Bleeding Prevention", $1,094,074, project to 2027-03-31. https://reporter.nih.gov/project-details/11092336
- 2024-05-20: 1R44DK139828-01 (direct-to-Phase II), $977,992.
- Site rebuilt on Squarespace in Nov 2025 (asset dates), still a template one-pager.

## Bad-site evidence
Stock Squarespace one-pager: one green speckled texture banner with "OUR MISSION" and two bold text blocks, clip-art line icons (Instant hemostasis / Durable / Protective / Transparent), a "+500,000 ... +2 MILLION" stat strip, a ten-person headshot grid with "Read Bio" pop-ups, grey partner logos; no story of how GastroShield works beyond three numbered paragraphs; "Procedure inefficiencies — Procedure inefficiencies" duplicated heading text; "designed for challenging environment" typo; the only contact is a talent@ hiring address.

## Facts used
- biodevek.com: mission sentence; GastroShield description; four properties; The Problem stats (500,000 admissions, 2M hospital days, $5B direct costs) and three problem rows; Our Technology points 1–3 (decade of MIT materials science; two liquid components that mix at the catheter tip, adhere even with blood, moisture, motion; transparent, durable, tunable degradation); team names, credentials and roles; support/partners logos (NIH, NSF, ARPA-H, LabCentral, Harvard Innovation Labs); LabCentral address; partner invitation.
- NIH RePORTER abstract (5R44DK139828): sprayable biocompatible adhesive biomaterial; cross-linked biodegradable polymer solutions; easy to use, fast, less operator-dependent; de-risking milestones (formulation, mechanics/spraying, acid and catabolic protection, biocompatibility, acute hemostatic effect and chronic submucosal protection in a pilot porcine model); Phase II aims I–IV (scale-up + QC, GLP safety, FDA pre-sub for 510(k) predicate/model, efficacy vs predicate).

## Palette / type
Logo BioDevek_logo.white.png: white wordmark, lime gel sphere #73c42a with stretching strands; site bands #163635 / #133e37, mint headings #8dd5a7. Mapping: ink #0f2826, accent on dark #8fd14f, on light #3c7811. Type: Roboto Condensed + Montserrat (both from their site). Header and loader use their real white logo (logo-w.png, 1327×230).

## Hero
Option (c), a crafted render of the product and its delivery: a clear lime-tinted hydrogel bead forming at the tip of a slim endoscopic spray catheter, echoing the gel sphere in their logo. _kit/home/biodevek/render.py (numpy SDF ray-march: refraction, Beer-Lambert tint, Fresnel studio reflections, real alpha; catheter feathers out at the top), `python3 render.py 900 1184 out.png`, cropped to x 218–682. Calm, no tissue, no blood (DS/DT). Unique to this site.

## Story
One continuous fine-line scene: a section of GI wall (mucosa with glands, muscularis line, submucosa) with a shallow resection site, and a two-lumen catheter above it. Step 1: components A and B flow down the two lumens. Step 2: fine spray; the thin lime hydrogel layer spreads over the lesion from the centre. Step 3: the catheter withdraws, the clear layer stays, glands re-form beneath it.
