# Phi Diagnostics ApS — dossier (batch 2026-11f, HOME-ONLY build)

Slug: `phidiagnostics` · built at `/phidiagnostics/` · parts and render in `_kit/home/phidiagnostics/`

## Domain and identity (registry said "lead to confirm")
- phidiagnostics.com answers with HTTP 301 to https://phi-dx.com/, the company's live Squarespace site ("Phi Diagnostics
  formerly CARE-DNA"). Same company, same address and email on every page, so domain ownership is confirmed.
- Lead confirmed on phi-dx.com/team: "CEO - Kenneth Graabek Johansen". phi-dx.com/about: "The founders are now Kenneth G.
  Johansen (CEO), Roald Forsberg (CTO), in addition to Sefa Alizadeh (COO), and Birgitte Regenberg (CSO)."

## Pre-screen
- Bad site (phi-dx.com, screenshot `_kit/sourcing/v2-sheets/11f-phidiagnostics.jpg`): a holiday-style beach snapshot
  (a person in shorts walking on a dune path, file name 20220605_120720.jpg) as the hero, with the two-line bold caption
  "Thousands of Second Chances" / "- One Blood Test Away" centred over it; a tiny nav on a flat blue bar; a default
  Squarespace template (the page title still reads "Phi-Dx | Circle-Pure & Magnetic Rack" from a product listing); the home
  page has one text block and a quote, no explanation of the science or of the test; the LinkedIn link still points to
  "care-dna", the old name.
- Active: EU Horizon EIC Transition project 101213445 "Circular DNA in screening and prognosis of pancreatic cancer",
  1 June 2025 – 30 November 2027, coordinated by Københavns Universitet (https://cordis.europa.eu/project/id/101213445);
  news posts of Aug 2025 (BII Venture Lab, 4M DKK loan), Nov 2025 (Rigshospitalet symposium) and Sep 2026 (one of eight
  UCPH spinouts of 2026; name change from CARE-DNA IP in September 2026).
- Scope: cancer diagnostics (circular DNA in plasma). No pathogens, toxins or biodefence. Non-US (Denmark): sourced by the
  coordinator for the EU EIC batch.

## Company facts used (sources)
- phi-dx.com (home): PDAC 5-year survival 12%, more than 400,000 annual deaths; "We aim to give patients with PDAC a better
  chance at life through early diagnosis"; address Gammel Kalkbrænderivej 8, 3 TV, DK-2100 Copenhagen Ø; connect@phi-dx.com.
- phi-dx.com/about: Danish spin-out founded 2024, formerly CARE-DNA IP; 8 years of research and 7.8 million € of funding in
  circular DNA analysis in the Regenberg Lab (University of Copenhagen); goal of a non-invasive, sensitive, specific test,
  IVDR-approved; most patients diagnosed at stage IV; history 2017 discovery, 2019-2022 Innovation Fund project CARE-DNA with
  Herlev and Gentofte Hospital, 2020-2024 CIRCULAR VISION, 2023 CARE-DNA ApS (Sefa Alizadeh, Birgitte Regenberg; first
  company affiliated with UCPH), Dec 2024 CARE-DNA IP formed, Mar/Apr 2025 Danish Tech Challenge win (500,000 DKK), Apr 2025
  18M DKK EIC Transition with UCPH, Jun 2025 first employee and 4M DKK incubator, Sep 2026 renamed Phi Diagnostics and
  finished the BII incubator programme.
- phi-dx.com/team: the nine names and roles shown in the Team section.
- CORDIS 101213445 objective: circular DNA from chromosomes as a tumour biomarker; purification from tumour and plasma,
  computational mapping, machine-learning classifier; validation of screening (plasma) and prognosis (tumours) on ~1000
  individuals; TRL5; IVDR pathway; early commercial activities with hospitals in Denmark; fund-raising.
- DTU Science Park (Apr 2025): Danish Tech Challenge winner, Jyske Bank Startup Award 500,000 DKK; Birgitte Regenberg is
  professor (Ecology and Evolution) at the University of Copenhagen; potential to screen lung, liver, uterine and bladder
  cancer.
- KU Innovation (Sep 2026): among eight new UCPH spinouts; non-invasive diagnostics based on circular DNA.

## Build
- Hero: a crafted render of the real subject (HOME_BRIEF update 2c): a closed 168 bp circle of double-stranded DNA (16 whole
  B-DNA turns, 10.5 bp/turn, 3.4 Å rise, gentle writhe) as a space-filling coarse-grained model, backbone in the logo gold,
  bases pale slate. `ring.py` (pure numpy sphere splats, exact normals, SSAO, satin shading, real alpha) → hero.webp.
- Story: plasma DNA (linear fragments + circles) → circles purified → circles mapped to a 1–22, X genome ideogram, counts
  rise, classifier bracket. The per-chromosome profile is illustrative, not data.
- Palette: from phi-dx.com CSS (darkAccent hsl 212 100% 27%, accent hsl 211 79% 37%) and the logo gold (#c8922a, #e3b558);
  fonts Barlow Semi Condensed (their site font) + Barlow.

## Contact
- Lead: Kenneth Graabek Johansen, Co-founder & CEO. No pronouns or title published → greeting "Dear Kenneth Graabek
  Johansen" (flag).
- Best published email: connect@phi-dx.com (the only address on the site; none for the CEO on the site, CORDIS, DTU or
  UCPH pages).
