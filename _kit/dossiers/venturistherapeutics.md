# Venturis Therapeutics, Inc. (slug: venturistherapeutics) — HOME-ONLY build, batch 2026-11h

- Site: https://www.venturistherapeutics.com/ (Webflow, read 2026-11-23; pages Home, Leadership, Pipeline, Investors, News; /contact-us is a 404). Domain check: company name, logo, pipeline and news on every page; company press-release PDFs (letterhead "www.VenturisTherapeutics.com") served from the site's own Webflow asset folder. No newer site on another domain.
- Bad-site evidence: dated Webflow template; a boxed overview panel of small grey text and a cramped news list over a pale stock molecule background; embedded YouTube clip; the Contact nav item is a 404; the Leadership page still lists the old team under "A new leadership team will shortly be announced".
- Type: clinical-stage biopharma, FGF-1 (human fibroblast growth factor 1) protein therapy VT-141 (Vascu-Grow™) for therapeutic angiogenesis. Not pathogen science (a 2020 release mentions patent applications for angiogenesis in illnesses related to COVID-19; not used on the concept).
- HQ: moving from Dallas (2626 Cole Ave., Suite 300, Dallas, TX 75204) to Chicago, IL (release 24 Aug 2026; no Chicago street address published).
- Lead: UNCERTAIN. The 24 Aug 2026 release says all former directors and management (incl. Calvin A. Wallen III, Chairman/CEO/President, the registry lead) have resigned and the new team will be announced soon. A LinkedIn profile lists Stuart Cornew as Chief Executive Officer of Venturis Therapeutics (Skokie, IL; undated; not confirmed by the company). Greeting if used: "Dear Stuart Cornew" (no pronouns published).
- Best published email: none found (site, releases, web search). Published contact: Amy Gordon, (714) 280-6028 (site footer). Old Dallas line (972) 681-9368 on 2021 releases.

## Activity (pre-screen OK)
- 2026-08-24: "Venturis Therapeutics Announces New Leadership Team and Corporate Headquarters Move to Chicago" https://cdn.prod.website-files.com/5d929ea754fd0f4955087956/6a8f98da71e7c5e130e87415_Updated%20Change%20of%20control%20press%20release%20V3.pdf
- 2026-05-18: agreement with Pradaxis, Inc. to develop additional indications using Venturis' API, with milestone payments https://cdn.prod.website-files.com/5d929ea754fd0f4955087956/6a0b3d7d73c9ddb920895f1a_Pradaxis%20Press%20Release%20May%2018%202026.pdf

## Facts used
- Home: clinical-stage; diabetic wounds, severe ischemic heart disease, PAD; preclinical ED, infarct stroke, degenerative disc disease, Parkinson's; targeted delivery; FGF family human proteins; lead candidate stimulates growth of new blood vessels in ischemic organs and tissues. AHA 2018 statistics (92.1M US adults with CVD; 2,300 deaths a day, one every 38 s) as cited on Home.
- Pipeline: 3 open INDs with FDA and 4 preclinical programmes; VT-141 Vascu-Grow™ DFU (Phase 1), CAD (Phase 2), PAD (Phase 2) — statuses in table order; VT-141ED, VT-141S, VT-141D, VT-141P.
- Releases: API is FGF-1; neovascularization with evidence of increased blood flow (Aug 2026); US patent for angiogenic treatment of ischemic heart disease issued 6 Apr 2021 with 15 claims; Armstrong affiliation (Jun 2023); Prevail InfoWorks / Prevail Partners alliance for the CAD trials with an in-principle seven-figure investment (Sep 2021); ED patents (US Oct 2019; US and Australia Mar 2020).
- No people listed as a team (former team resigned per the company's own release).

## Palette / type
Logo (62c49ef8fb86dc58d097bf5b_Venturis-therapeutics-logo.png, 1641x1000): wordmark blue #1226aa, dot gradient green #20b239 / #75bc21 to blue. Mapping: navy ink #0a0f2e (deep shade of the wordmark blue), --acc #1226aa on light grounds, --accL #8fd673 (logo green lifted) on the ink, bone #f6f7fb. Logo on the ink: their 1641px master with the wordmark set in bone and blue dots lifted (logo-w.png, 656x400). Crimson only in the vessels (their site's own red vascular-tree imagery). Type: Archivo (display), Lato (body, their site face), IBM Plex Mono (labels).

## Hero
Option (c), crafted render of their mechanism's subject: a single arterial tree of glossy crimson vessels (Murray's-law branching, height-field shading, real alpha, trunk base fading out), rendered by _kit/home/venturistherapeutics/vessels.py (seed 11). Slow breathing drift, no pointer response. Unique to this site.

## Story
One continuous fine-line scene: artery with a blockage, the branch feeding ischemic tissue. Steps: flow stops / tissue starved; VT-141 (FGF-1) delivered into the tissue; new vessels sprout from the artery into the tissue; blood reaches the tissue through them.
