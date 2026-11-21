# Immunova (slug: immunova) — HOME-ONLY build, 2026-11-21

- Site: https://immunova.com/ (links to www.immunova.net; read 2026-11-21). One static Bootstrap page: green-circle logo, one right-aligned paragraph beside a small 685x300 artist's render (text baked into the image), then phone, email and copyright. No navigation, no science, pipeline, team, news or address.
- Type: US biotech, nanomedicine (nanolipogel drug delivery for oncology / immune-modulating drugs) plus a lipid neurogenic therapy for age-related cognitive decline. No pathogens, toxins or biodefence.
- HQ: New Canaan, Connecticut (MTEC member profile, https://mtec-sc.org/life-sciences/immunova ; UF Innovate calls it "a private Connecticut-based biotechnology company" and "a UF startup"). NIH RePORTER lists the awardee Immunova, LLC at Gainesville, FL 32608 (UEI CMM4T5EJAFH4).
- Email: info@immunova.net (their home page, assembled by script; same on the MTEC profile). Phone (203) 716-6369.
- Lead: Brian Horsburgh, PhD, CEO of Immunova (quoted as such in Portage Biotech's 2024-12-17 release; UF Innovate repost). Greeting: Dear Dr. Horsburgh.
- Also: Stanislav I. Svetlov, Chief Scientific Officer (title per NIH RePORTER PI record on 1R43AG102094-01). Degree not confirmed, so shown without one.

## Facts used
- Their home page: "Immunova is a clinical stage oncology company, using proprietary nanotechnology, to develop first in class medicines capable of attacking multiple targets at once. The result: better outcomes for patients." Image caption: "Artist's impression of a nanolipogel 'smart bomb'". Footer: Immunova, LLC.
- Portage Biotech, 2020-05-05 (PR Newswire, https://www.prnewswire.com/news-releases/portage-makes-an-additional-investment-in-saugatuck-therapeutics-after-achieving-proof-of-concept-301052356.html): NLG platform "invented in the lab of Dr. Tarek Fahmy at Yale University" and "commercially developed by our joint venture partner, Immunova"; Saugatuck "acquired an exclusive license from Yale University via Immunova" to deliver DNA aptamers; "formulate a proprietary PD1 aptamer in the NLG formulation"; initial proof of concept achieved; "Immunova is developing a pipeline of NLG drugs focused on cytokine and other immune modulating drugs."
- Portage Biotech, 2024-12-17 (UF Innovate repost, https://innovate.research.ufl.edu/portage-biotech-announces-letter-of-intent-with-immunova-for-an-option-to-acquire-iox-therapeutics-ltd/): LOI to negotiate an option for Immunova or an affiliate to acquire iOx Therapeutics (liposomal iNKT agonists; lead PORT-2 "promising preliminary clinical activity"); Immunova is a JV partner of Portage's subsidiary Saugatuck Therapeutics; Brian Horsburgh, PhD, CEO of Immunova.
- Yale patent family (e.g. US9603800B2, US10195144B2, US12156939B2 "Nanolipogel vehicles for controlled delivery of different pharmaceutical agents"): Immunova LLC licensee of Yale's rights; nanolipogel = lipid bilayer surrounding a hydrogel core, which may hold a cyclodextrin or ion-exchange resin; sustained delivery of one or more active agents; a claim covers a cytokine plus a growth factor.
- NIH RePORTER 1R43AG102094-01 (https://reporter.nih.gov/project-details/11395066): NIA SBIR Phase I, notice 2026-09-17, $459,616, "Mitigating Age-Related Cognitive Decline through a First-in-Class Lipid Neurogenic Therapy"; patented brain-penetrant Lipid Ether Amide (LEA) hybrids with dopamine and serotonin; dual targets TLX and GPR6.
- Not used: "Immunova Therapeutics, LLC" (Monrovia, CA; NCI SBIRs to Yicheng Wang) is a different company.

## Activity (since 2025-05-18)
- 2026-09-17: NIH NIA SBIR Phase I award 1R43AG102094-01, $459,616 (NIH RePORTER, link above).

## Bad-site evidence
- One-page site: clip-art green circle logo, a single right-aligned paragraph beside a low-resolution artist render with its caption burned into the image, then phone/email as the only content.
- No navigation, no description of the platform, programmes, partners, team, address or news (the 2026 NIH award, the Portage/iOx LOI and the Saugatuck JV are absent).
- Copyright year written by document.write; mixed Roboto Slab / Noto / Times fallback typography.

## Palette
- Logo PNG (images/logo-immunova@2x.png): green #76B643 (wordmark), lime-to-green sphere; text charcoal #403939 (styles.css); fonts Roboto Slab + Noto Sans (styles.css Google Fonts import). Ground: green-black ink #101512; --accL #8cc653 on dark, --acc #3f7a1f on bone. Their logo PNG used as the header mark.

## Hero / story
- Hero (update option c; their own photography is a 685x300 artist's render with text baked in; no Unsplash/Pexels photo of a nanolipogel exists): crafted render of their real platform, _kit/home/immunova/render.py, adapted from delbios: lipid bilayer built bead by bead, one octant cut away, lumen filled with a crosslinked hydrogel network holding protein (atoms of human IL-2, RCSB PDB 1M47, as a representative cytokine) and small-molecule cargo. Illustrative, not to scale; captioned as such. Placed centred right of the H1 (~68% width), >=110px clear of the H1, below the nav; soft green glow, long ink scrim on the headline side.
- Story: one engraved nanolipogel in section. (1) the lipid bilayer shell; (2) the hydrogel core with two kinds of cargo; (3) both agents released together, over time. Schematic.
