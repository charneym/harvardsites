# HOME-ONLY build (client-approved fast format, 2026-11-19)
The client needs 80–100+ sites a day. Build ONLY the home page, but in the full-site look and quality: the multi-page engine's styling, type, buttons, motion, hero and story (as on rock-hill, tonka-bay, holleway, serata and firelight). Imagine the other pages exist. This is NOT the retired one-page format (ONEPAGE_BRIEF.md): its styling is banned ("everything down to even the styling of buttons, text size... just worse").

## What to build
- Base: copy the regions of `_kit/src/firelight.src.html` (marked /*<R:name>*/) with a small Python assemble script. Swap content, views (vHome only), field (hero) and story. Never hand-edit the big file.
- One route, `#/` (home). The nav shows the usual items (e.g. Approach / Portfolio / Team / News, or Technology / Pipeline / Team / News for biotech) plus Contact. Each item smooth-scrolls to its matching section on the home page; nothing may 404 or show an empty view. Contact goes to the CTA/contact block, which has a mailto and the address.
- Home sections, in the full-site style: hero, manifesto + stats, pinned story (DB), what-we-do / criteria (or technology + pipeline), portfolio (PE) or programmes (biotech), team (portraits or refined text-only; no bio sheets, at most an inline expand), news (only if items link out), CTA + contact, footer.
- No sub-pages, no bio-sheet routes, no #/team/<slug>.

## Rules
- Every rule in `_kit/PRINCIPLES.md`, newest first. In particular:
  - DG: no generic skylines. If the original site has real professional photography, use it (graded) rather than a cartoon scene.
  - DH: portfolio rows animate their rule on hover.
  - DE: square corners. DF: legible footer wordmark.
  - DC/DD/DA: the hero is a real, recognisable, beautiful subject.
  - DB: the story fills its frame.
- Colours come from the company's own logo and site (brand fidelity). The client just got a request from a company (Limax) to match their colour theme, so sample their CURRENT live site, not only the dossier.
- Invent nothing. Every fact comes from their site, press, filings or registries.
- Keep the firm's language for non-English sites.

## Efficiency (hard)
One company per session, lean context. Grep the reference src, don't cat it. Target about 90 minutes.

## Gates
Run as one sequential background script on `#/` only:
- smoke
- reveal / anim / clip at 1440 and 390
- overlay, masthead, mixed, polish, loader, unstyled
- cramped <slug>, hoverpad <slug>
- split, balance, logo, hero-audit
- prepush-check after `git pull --rebase`

Then:
- Click every nav item at 1440 and 390 and confirm each scrolls to a real section. navtest does not apply.
- Check the hero and every story frame by eye at 1440 and 390.

## Pre-screen first (5 minutes)
Open their live site at 1440. Skip it if any of these is true:
- the site is actually decent or professional
- the company shows no sign of activity since 2025-05-18 (no news, funding, grant, deal, hire or post)
- it is out of scope per SPEC §2b

To skip, send the coordinator "SKIPPED: <slug> — reason" and stop.

## Report
`send_message` to the coordinator (session_014388NFYUsdqRg21Sq5nZUz):

"SITE DONE: <slug> (home)", followed by:
- URL
- hero (what it is)
- palette source
- gates
- HQ
- lead name + title + greeting (Dr./Mr./Ms. Last; full name if no pronouns are published)
- best published email
- latest activity + source
- bad-site evidence

Then stop.
