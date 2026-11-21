# Artiam Bio Inc. — artiambio (home-only concept, batch 2026-11f)

- Site built at `/artiambio/` (home only, `#/`), source regions in `_kit/home/artiambio/`, assembled by `assemble.py` from `_kit/src/firelight.src.html` into `_kit/src/artiambio.src.html`.
- Live site: https://artiambio.net/ (WordPress, GeneratePress theme). Domain confirmed: the site names Artiam Bio Inc., its CB1 programmes match the NIH RePORTER records for org "ARTIAM BIO INC." (Cary, NC), and the team page lists the RePORTER PIs (Seltzman, Willette).

## Company (every fact from artiambio.net or NIH RePORTER)
- Biotechnology company developing refined type 1 cannabinoid receptor (CB1) antagonists (artiambio.net home, Company).
- Mailing address: P.O. Box 624, Morrisville, NC 27560 (site footer). NIH RePORTER organisation city: Cary, NC (ZIP 27513-2754).
- Email published on the site: contact@artiambio.net. Contact form: artiambio.net/contact-artiam-bio/.
- Claims on the site: patented portfolio of 400+ small molecules; indications NASH, cannabis use disorder, Prader-Willi syndrome (orphan); first-generation blockers (rimonabant) caused adverse psychiatric effects; Artiam's compounds do not produce adverse psychiatric effects in animal studies.
- From the NIH abstracts: partial inverse agonists / neutral antagonists with limited brain penetration that preserve the receptor's basal activity; first-generation blockers produced adverse psychiatric effects in ~6% of patients; rimonabant was approved in Europe as an anti-obesity agent and later discontinued; the CUD lead produced no dysphoria/anhedonia in rodent studies.

## NIH awards (NIH RePORTER, org "ARTIAM BIO INC.")
- 5R41AG090138-02 (NIA STTR, award notice 2026-06-19, $279,513) and 1R41AG090138-01A1 (2025-09-19, $292,279) — "Validation of APT101 for the Treatment of SSc-ILD in an Aging Murine Model". PI Robert N. Willette (contact), with Rachel S. Knipe. The project narrative names APIE Therapeutics as the developer of APT101 (an apelin receptor agonist). https://reporter.nih.gov/project-details/11419003
- 1R41AA031392-01 (NIAAA STTR, 2023) — Therapy for alcohol use disorder, with UNC's Bowles Alcohol Research Center. PI Herbert H. Seltzman.
- 1R43DA057168-01 (NIDA SBIR, 2022) — Treatment for cannabis use disorder. PI Seltzman.
- 1R41DK130765-01 (NIDDK STTR, 2021) — Therapeutic strategy for NASH. PI Seltzman.

## People (artiambio.net/about-artiam-bio/)
- Ronnie Maitra, PhD — Founder & President (lead). PhD Pharmacology & Toxicology, Dartmouth Medical School; postdoc at NIH. No pronouns published; title "Dr." published ("Dr. Maitra founded Artiam Bio…") → "Dear Dr. Maitra".
- Herb Seltzman, PhD — Vice President. Robert Willette, PhD — BOD, Chief Technology Advisor. Joshua Higgin, PhD, JD — legal. Marilyn Thompson, BA — CFO.
- Scientific advisors: Brad Walters, Ryan Vandrey, Mike Statnick, Arun Sanyal.

## Activity (latest)
- 2026-06-19: NIA STTR award 5R41AG090138-02 (continuation year). https://reporter.nih.gov/project-details/11419003

## Bad-site evidence (artiambio.net, seen 2026-11-21)
1. Off-the-shelf WordPress theme credited in the footer ("Built with GeneratePress"), with two conflicting copyright lines ("© 2024 Artiam Bio Inc." and "© 2026 Artiam Bio").
2. Hero is a stock photo of lab flasks under a flat teal overlay with an all-caps, heavily drop-shadowed generic slogan ("Breakthrough, novel technology meets unrivaled development potential").
3. Patient figures rendered without units ("30 PATIENTS", "4 PATIENTS", "350 PATIENTS" for NASH, CUD, PWS), and generic clip-art icons.
4. No news, no pipeline view, and no mention of the company's NIH awards (2021–2026) or the alcohol-use-disorder and APT101 programmes; the contact link in one menu points at a Google Sites page.

## Design decisions
- Palette (brand fidelity): logo leaf teal #116a75 and tints #4a8e96/#78aab1 (sampled from the logo PNGs), site accent orange #ed7d31 (hero rule, outlines). Ink is a teal-black #0b1b1e.
- Type: Krona One for the wordmark (wide geometric, close to the logo lettering), Sora display, Fraunces italic accents, Public Sans text.
- Hero (option c, mechanism subject; their only photo is a stock flask shot): `cb1.py` renders the real crystal structure PDB 5TGZ (human CB1 receptor bound to the antagonist AM6538, Hua et al., Cell 2016) — receptor residues 99–306 and 332–412 as a smooth C-alpha tube in the logo teals, the antagonist space-filling in orange; the flavodoxin fusion, lipids and waters are removed. Transparent ground (no box edge).
- Story: an engraved membrane with the seven-helix receptor; endocannabinoid switches it on, rimonabant silences even basal signalling, Artiam's compound blocks over-activation while preserving basal activity.
