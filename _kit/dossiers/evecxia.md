# Evecxia Therapeutics, Inc. (slug: evecxia) — HOME-ONLY build, batch 2026-11h

- Site: https://evecxia.com/ (WordPress theme "evexcia", read 2026-11-23; pages Home, About Us, Therapeutic Focus, Serotonin Synthesis Amplification, Pipeline, News and Publications, Contact Us, Jobs). Domain check: company name, logo, team, full press-release list and info@evecxia.com on the site; the Business Wire releases (e.g. 15 Sep 2026) give info@evecxia.com as the contact. No newer site on another domain.
- Bad-site evidence: dated layout; raster clip-art-style leaf/molecule logo beside a grey rounded banner box of text; a stock "light-bulb heads" image filling the first screen; lower-case text nav; footer still "© 2021".
- Type: clinical-stage neuroscience; 5-HTP-based Serotonin Synthesis Amplification drugs for psychiatric disease (no pathogen, toxin or biodefence science).
- HQ: First Flight Venture Center, 2 Davis Drive, PO Box 13169, Research Triangle Park, NC 27709 (Contact Us).
- Lead: Jacob Jacobsen, PhD, Co-Founder and Chief Executive Officer (About Us). Greeting: "Dear Dr. Jacobsen".
- Best published email: info@evecxia.com (Contact Us; contact line of the Business Wire releases of 9 Feb and 15 Sep 2026). No personal address published.

## Activity (pre-screen OK)
- 2026-09-15: "Evecxia Therapeutics Announces Positive Clinical Results From a Phase 1b Target Engagement Trial" https://www.businesswire.com/news/home/20260915660437/en/ (also on BioSpace).
- 2026-05-28: article on 50 years of clinical evidence underpinning EVX-101 (J Clin Psychopharmacol 2026 46(4):462-475).
- 2026-02-09: first patient dosed in the Phase 1b brain target engagement study https://www.biospace.com/press-releases/evecxia-doses-first-patient-in-phase-1b-brain-target-engagement-study-of-serotonin-synthesis-amplification-therapy
- 2025-09-22: financing and corporate update, plans for EVX-101 Phase 2 PoC in OCD.

## Facts used
- About Us: founded by the late Prof. Marc Caron, PhD and Jacob Jacobsen, PhD (Duke neuropharmacologists); first company dedicated to Serotonin Synthesis Amplification; team, board and SAB bios (summaries shortened, nothing added).
- Home / Therapeutic Focus: 5-HTP the natural rate-limiting precursor; native 5-HTP too short-acting and poorly absorbed; SSRIs/SNRIs enhance serotonin modestly and inconsistently; "fully two-thirds of patients respond inadequately to first-line antidepressants".
- SSA page: >30 published clinical studies report SSA augments antidepressant efficacy; distinct from SSRIs (remove a brake, SERT very low in human cortex) and psychedelics; activates the full complement of receptors, appears devoid of hallucinations and abuse potential.
- Pipeline: EVX-101 oral gastroretentive slow-release 5-HTP + low-dose carbidopa, ~8 h delivery to the upper intestine, carbidopa raises 5-HTP bioavailability up to 10-fold, breakfast and dinner dosing, expected free of abuse potential; two Phase 1 trials complete; EVX-301 IV 5-HTP up to 24 h, rescue therapy for suicidal ideation, Phase 1 complete; patents US/EU/major markets. Pre-IND meeting Oct 2024.
- 15 Sep 2026 release: Phase 1b, N=18 depression patients on SSRI/SNRI (EVX-301 n=12, placebo n=6), PARC Clinical Research, Adelaide; 5-HTP enters the brain, elevates serotonin synthesis and activity biomarkers beyond the SSRI/SNRI effect; ~100 ng/mL target corroborated; EVX-101 Phase 2 in OCD targeted for 1H 2027; OCD ~2 million US patients, no FDA-approved drugs for inadequate SSRI response.

## Palette / type
Logo (content/themes/evexcia/images/logo.png, 572x231, transparent): green #3eb64b ("evec", "therapeutics" lighter), blue #0e77bc ("xia"), molecular cluster blending blue to green. Site type: Montserrat. Mapping: deep blue-green ink #0a1820, logo green as --accL #5cc66a on ink and --acc #237a30 on bone, logo blue (#0e6fae) for emphasis on light sections, bone #f4f7f5. Type: Montserrat (display), Lato (body), IBM Plex Mono (labels). Logo used as their own PNG, downscaled (never upscaled): 50px in the header, ~124px on the loader, which sits on their own white ground so the mark shows in true colour. Favicon: the molecular cluster cropped from the logo.

## Hero
Option (c), crafted render of their real active compound: the 5-HTP molecule (5-hydroxytryptophan) in glass ball-and-stick, oxygens in the logo green, nitrogens in the logo blue. Geometry from an RDKit MMFF conformer (_kit/home/evecxia/htp.json); rendered by _kit/home/evecxia/mol.py (numpy) on black and drawn additively onto the ink (no image edge). Slow breathing drift, no pointer response. Unique to this site.

## Story
One continuous fine-line serotonin synapse: axon terminal with vesicles and SERT, synaptic cleft, receptors. Steps: an SSRI blocks SERT (brake); 5-HTP arrives along the axon (precursor); the vesicles fill with serotonin (synthesis); more serotonin is released and the receptors light (signal).

## Nav
Science / Pipeline / Team / News open build-out pages (#/more/<item>, _kit/lib/buildout.js); Contact scrolls to the contact block (mailto and address).
