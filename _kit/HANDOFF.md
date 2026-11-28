# Handoff for a fresh coordinator chat (written 2026-11-28)

This file is for a new chat that takes over from the previous coordinator. That coordinator drifted. Build on what the client liked **before** the drift, as described below.

## The business
Max (Harvard College) emails a free concept redesign of a company's home page to its founder or CEO. Sites live at https://charneym.github.io/harvardsites/<slug>/ in this repo (charneym/harvardsites). Max sends the emails himself. The coordinator never emails anyone.

## Who the client wants (the original target; keep to it)
- **Primarily small biotech and medtech startups**, with **some private equity / small investment firms** (see `_kit/SPEC.md` §2 for startups and §2b/§4b for PE).
- Startup criteria from SPEC §2:
  - new funding verified and disclosed (seed, Series A, SBIR/STTR Phase II, etc.)
  - a genuinely bad current site, with at least 3 quoted pieces of evidence
  - a "why now"
  - a nameable CEO or founder
- **English-speaking countries.** The client saw lower open and click rates from non-English recipients.
- The previous coordinator **drifted** away from this on 2026-11-27/28. Do NOT repeat it:
  - industrial machine shops, CNC subcontractors and component makers
  - EU and German-language sites
  - hardware companies chosen because they had product photos

  The client called the resulting sites "really bad... completely different from the style way before that I liked."

## The look the client liked
- The **original sent template**: `_kit/src/firelight.src.html` / `_kit/src/desoutter.src.html`, home-only per `_kit/HOME_BRIEF.md`. Reference builds: /desoutter/, /lightel/, /viamed/, /sentec/, /bitmos/, /charlesausten/, /teknomedical/.
- Read `_kit/DESIGN_IDEOLOGY.md` in full. §9 covers what the failed "v3/v4" redesign got wrong.
- Approved fixes after the client's review, in `_kit/TOPFIX_BRIEF.md` "variant B" + step 5:
  - one-colour H1, no italic accent line
  - real brand colours
  - no glow, halo or beam behind the hero subject; neutral studio lighting
  - the hero object scrolls with the text
  - the loader logo rises out instead of fading
  - the H1 mask fix in the template
- **Real photos:** the client approved /tas-chambers/ (their own large product photo cut out on the dark ground). Framed or boxed photos were rejected. Do not force photos; a good render of their actual product/science, as in the original sent sites, was the norm.
- **Unknown, so ask the client first:** exactly which earlier sites define "the style I liked". Show 3–4 of the reference builds above, plus 2 of the 2026-11-27 builds, and let them point.

## Hard rules (client's standing instructions)
- Invent nothing. Every fact must be sourced.
- Don't add rules the client never asked for. Confirm before turning a suggestion into a rule.
- Verify by eye before calling anything done.
- CSVs with emails stay in the coordinator's scratchpad, never in the repo.
- Greeting is "Dear First Last", unless a source gives a title (Dr.).
- Skip:
  - pathogen, toxin and biodefence companies
  - PE search funds and holdcos
  - anyone in `_kit/sourcing/registry.csv` with status emailed/built/rejected
  - the "never pitch" list in SPEC §2
- Don't touch the 24 PE sites, biredimaging, sharpvue or m-one.
- **Send rule:** CSV in groups of 50. If the client hasn't confirmed sending the previous group, the next CSV is cumulative.
- **Usage:** the account has a 5-hour cap. The client dislikes heavy usage. Run few sessions.
- Commit trailer: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

## State at handoff
- **150 "top-fixed" sent sites:** emailed by the client (registry status emailed).
- **2026-11-27 batch of 48 new sites:** CSV given to the client; not confirmed sent. 37 are in US/UK/IE and 11 are EU. These are mostly photonics, instruments and industrial, which is the drift.
- **2026-11-28 round 2:** 8 sites, all industrial or instruments: tomco, raloidtool, randa-engineering, colpa-precision, paramountmachine, primemachine, surfaceengineering, tt-precision. **No CSV was sent** (the client stopped the round). Treat these as off-target.
- **The registry** records ~2,000 screened companies with reasons. Check it by domain and slug before picking anyone.
- **Sourcing tools** are in `_kit/sourcing/`; see the README. NIH RePORTER, NSF and PRNewswire funding releases suit biotech/medtech startups.
- `_kit/PROD_BRIEF.md` is the drifted production brief. Its §0 (the site must ACTUALLY be bad) and its gates are fine. Its industrial/EU widening (§0b, §1) is NOT what the client wants.
