# Production brief (client, 2026-11-27): 150+ new sites a day, done well

The client has emailed the 150 fixed sites. New sites now go out at 150+ a day. This brief is the standard for every new site. Where an older brief conflicts with it, this brief wins. **Ignore the v3/v4 sections of WAVE_BRIEF.md entirely.**

## 0. The one non-negotiable: their current site must ACTUALLY be bad
In the client's words: "their site must ACTUALLY BE BAD / NEED A NEW SITE. SERIOUSLY."
- Before building, screenshot their live home page at 1440 and look at it. Ask honestly: would a founder look at our concept and think "we need that"? If their site is clean, modern and decent, **DROP IT**, even if it has small flaws. When in doubt, drop.
- Bad means obviously dated or poor at first glance, for example:
  - a 2005–2015 look: tiny text, tables, bevels, clip art, stock gradients, Flash-era layout
  - a default Wix/Squarespace/WordPress template
  - a broken or thin site: placeholders, lorem ipsum, empty pages, broken images, a one-pager with almost nothing on it
  - not mobile-friendly
  - low-res imagery
  - a cluttered or amateur layout
- Record at least 3 quoted or observed pieces of evidence and keep the screenshot (outside the repo, or in the work dir). The coordinator spot-checks these screenshots.
- The company must also be **real and active**: recent news, a grant, a trade fair, a product launch or hiring in the last ~18 months, with a source. Its CEO, founder or MD must be nameable, with a real email address.

## 1. Who
- Small and early-stage **biotech, medtech, diagnostics, photonics/lasers, sensors, lab instruments and deep-tech** companies. The sent mix was mostly these plus some precision-industrial firms, so industrial is fine but must not dominate.
- Countries: as in the sent batch (US, UK, DE/AT/CH and other EU). Keep their language on non-English sites.
- **Skip:**
  - pathogen, toxin and biodefence companies
  - PE, search-fund and holdco companies
  - anything already in `_kit/sourcing/registry.csv` with status emailed/built/live/blocked/rejected/do-not-send
  - any slug that already has a folder in the repo root, except the held batch listed in the coordinator's prompt
  - the "never pitch again" list in SPEC.md §2

## 2. Build: the SENT template plus the approved top-fix, from the start
Build home-only per `_kit/HOME_BRIEF.md` on `_kit/src/firelight.src.html` (the template already has the approved loader exit and the headline-mask fix). Keep its code, motion, layout and pace exactly. **Don't rewrite motion. Don't add new effects or rules.** On top of that, apply:
1. **One-colour H1.** No italic or accent-coloured second line.
2. **Real brand colours.** Sample them from their logo and live site (hex, with the source). Evolve the brand; never invent an accent. A monochrome brand stays monochrome with at most one restrained accent that comes from their own site.
3. **Hero visual (the approved rule):**
   - **(a) Preferred:** if they have a large, sharp photo of their own product (about ≥1200px, plain or transparent background), cut it out cleanly and place it on the dark studio ground like /tas-chambers/, /mav-prueftechnik/ and /bensonviscometers/:
     - faint soft floor shadow, no frame, no caption, no rectangle or seam
     - shown at or below native size
     - facing the headline (mirror only when it has no lettering)
   - **(b) Otherwise:** a crafted render of their actual product, with variant B lighting (see `_kit/TOPFIX_BRIEF.md` and `_kit/reports/topfix/RECIPE_NOTES.md`; reference /teknomedical/ and /rav-valve/):
     - neutral studio key, fill and rim; faint soft shadow; ~2–3% neutral falloff
     - no glow, halo, beam, bloom or coloured haze
   - **Never:**
     - framed or boxed photos (the client: "so out of place")
     - small photos blown up
     - AI-generated imagery
     - abstract geometry
4. **Hero scroll (step 5).** An object hero scrolls up with the text (the `HY` pattern in RECIPE_NOTES §6). A backdrop hero stays fixed.
5. All gates in HOME_BRIEF/DESIGN_IDEOLOGY §7, plus: H1 never clipped at 1280/1440/1680/1920, and no horizontal overflow at 390.

Invent nothing: every fact, number and name must come from their own site, a press release, a registry or another source.

## 3. Report (one line per site, via send_message to the coordinator)
`SITE DONE: <slug> | <Company> | <live URL> | Lead: <First Last>, <Title> | Email: <address> (source) | HQ: <city, country> | Vertical: <short> | Bad-site evidence: <3 items> | Activity: <item + source> | Palette: <hex> from <source> | Hero: cut-out own photo <url> / render B (reason)`

If you can't build a site safely or well, send `SITE SKIP: <slug> — reason` and move on. Never email anyone; the client does outreach.
