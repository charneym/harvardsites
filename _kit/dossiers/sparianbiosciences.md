# Sparian Biosciences, Inc. (slug: sparianbiosciences) — HOME-ONLY build, batch 2026-11i

- Site: https://www.sparianbiosciences.com/ (WordPress, Salient theme, read 2026-11-23; pages About, Leadership (/team/), Pipeline, Publications, Newsroom (/news/), Contact). Domain check: company name, logo, team, pipeline and press releases on the site; press releases list contact@ and annie@sparianbiosciences.com; NIH award 1UG3DA064392-01 named in the SBS-147 release. No newer site on another domain.
- Type: clinical-stage CNS biopharma (pain and substance use disorders); first-in-class arylepoxamide receptor (AEAr) agonists SBS-1000 (IV/SC) and SBS-147 (oral), both Phase 1; SBS-226 (OUD/OWS), SBS-518 (stimulant use disorder), SBS-371 (opioid overdose). Pre-screen: no pathogen, toxin or biodefence work. The U.S. Army (USAISR) collaboration is a battlefield-pain study of SBS-1000 (an analgesic), not biodefence.
- HQ: Cure, 345 Park Avenue South, 2nd Floor, New York, NY 10010; also Broadhollow Bioscience Park, 3 Bioscience Park Drive, Farmingdale, NY 11735, and Cambridge Innovation Center, 1 Broadway, 14th Floor, Cambridge, MA 02142 (Contact page).
- Lead: Jeffrey B. Reich, MD, Co-Founder & Chief Executive Officer. Greeting: "Dear Dr. Reich".
- Best published email: contact@sparianbiosciences.com (Contact page, Newsroom media contact). The COO and media contact Annie Pasternak's annie@sparianbiosciences.com is in the 2026 press releases. No personal address for Dr. Reich was found on the site or in the press releases.

## Activity (pre-screen OK)
- 2026-10-15: US Army Institute of Surgical Research study of SBS-1000 for battlefield pain. https://www.sparianbiosciences.com/news/us-army-study-evaluates-sbs-1000-for-battlefield-pain/
- 2026-04-09: Phase 1 SAD/MAD of SBS-147 starts, funded by a $15M NIH/NIDA HEAL grant (1UG3DA064392-01). https://www.biospace.com/press-releases/sparian-biosciences-announces-initiation-of-phase-1-clinical-trial-of-sbs-147-next-generation-arylepoxamide-agonist-for-the-treatment-of-pain-funded-by-a-15m-nih-grant

## Bad-site evidence
The home page is near-empty: one centred heading, one sentence and a small "Our Story" button over a faint stippled brain on white, plus a cookie banner; no pipeline, news or team on the home page. The logo "SVG" is only a wrapper around embedded PNGs.

## Facts used (sparianbiosciences.com unless noted)
- About: clinical-stage CNS company; co-founders Jeff Reich, MD, and Gavril Pasternak, MD, PhD, neurologists and neuroscientists; initial focus pain and substance use disorders; five assets; compounds from the Pasternak Lab (MSK), Majumdar Lab (UHSP/Washington University), Rutgers, USC Michelson Center, University of Florida; NIH/NIDA HEAL grants worth nearly $75M; U.S. Army ISR collaboration; offices as above.
- Pipeline page: programs, mechanisms, indications and stages; SBS-226 based on kratom; SBS-371 prevents and reverses synthetic opioid overdose; SBS-518 reduces cocaine self-administration.
- Releases: 2024-11-12 SBS-1000 Phase 1 results (no SAEs, respiratory parameters normal at all doses, Cold Pressor positive trend, no pupillary constriction; "AEAr ... widely distributed throughout the brain and spinal cord ... believed to modulate pain signaling and pain perception"); 2024-11-14 $19.5M grant SBS-226; 2023-08-08 $19M grant SBS-518; 2026-04-09 SBS-147 Phase 1 (durable responses to 24 h; no respiratory depression or abuse liability vs morphine); 2026-10-15 boilerplate: spun out of MSK, five NIH/NIDA grants nearly $75M.
- Team: Leadership page (summaries shortened, nothing added). Ashley McCord has no published bio, so her row shows the role only.

## Palette / type
Logo (Sparian-Logo-v2.svg, embedded PNG 3660x1372): navy #031f43 / #052e65, blue #2d83f4, pale blue #b9d6fb; live site headings #273b7b, buttons/links #1863dc, white ground, Inter. Mapping: ink #071630 (logo navy, deepened), accent on dark #7fb3f8, accent on light/buttons #1863dc. Type: Inter (their font) and Inter Tight for display. Header and loader use their real logo with the navy parts recoloured white (logo-w.png, 1000px from the 3660px source).

## Hero
Option (c), a crafted render of the organ their medicines act on, echoing the brain illustration on their own home page: the human cerebrum from the FreeSurfer fsaverage pial surface (nilearn fetch_surf_fsaverage('fsaverage')), front-left, slightly above, satin shading in the logo blues, real alpha. _kit/home/sparianbiosciences/brain.py <fsaverage dir> hero.png 1400 (YAW=-32 PIT=14), saved to hero.webp. No stock or AI imagery; no other concept uses this render.

## Story
One continuous fine-line drawing: the same brain (left hemisphere, lateral, traced by linebrain.py with TH=-0.3 MINL=14, args 470 200 22 -> brainpath.js), cerebellum, brainstem and spinal cord. Step 1: a pain signal rises up the cord to the sensory cortex. Step 2: AEAr sites through the brain and cord light in Sparian blue, and the signal fades. Step 3: the brainstem breathing centre holds steady ("breathing maintained"). Schematic; the AEAr sites stand for "brain and spinal cord", not mapped anatomy.
