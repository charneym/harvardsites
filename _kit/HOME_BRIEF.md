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

## UPDATE 2026-11-20 (client, binding; overrides anything above)
1. **Nav items open a "build-out" page, not a scroll.** Every nav item except Contact (Approach / Portfolio / Team / News / Technology / Pipeline etc.) opens a short in-site page at #/more/<item> in the same design (header, footer, palette, type). It shows the item's name as the title and this copy (translated for non-English sites):
   eyebrow: "Concept preview"
   H1: "<Item>, built out."
   body: "This is a concept for the home page. If you like the direction, I'd build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there."
   One button, "Back to the home page", plus a quiet secondary link "Or keep scrolling the concept" that returns to the matching home section. No email address and no personal name. Contact still scrolls to the contact block. The browser back button returns home. Home-page CTAs that say "Our approach" etc. still scroll on the page.
2. **Hero: real photography first.** The client questions whether painted landscape scenes look professional. Preference order:
   (a) The firm's own real photography (office, team at work, product, plant), graded to the palette with slow motion such as a subtle Ken Burns drift or parallax.
   (b) A high-quality real photograph of the firm's actual place or subject from Unsplash or Pexels only. Their licences allow commercial use without attribution; no Wikimedia, no Getty, no AI images. Download it into the site folder, grade it, and record the source URL in the dossier.
   (c) Only for science, mechanism or product subjects (biotech, medtech): a crafted render of the real object or mechanism, like /aivocode/, /nanoscope-instruments/ or /craniosure/.
   No painted landscapes, silhouettes or illustrated skylines for PE or wealth firms unless (a) and (b) are impossible.

## UPDATE 2026-11-20 (b): build-out pages v2 (binding)
Do NOT write your own #/more router. Add "buildout" to @libs (and to your assemble.py); the shared _kit/lib/buildout.js now runs the full-site route wipe and builds a real sub-page from your own home sections (sub-page hero from the section heading/intro, the cloned section content, then the concept note). Make sure each nav item's target section has a clear heading and intro, and use the site's SECS map / data-to links so the module can find them. See PRINCIPLES DK.

## UPDATE 2026-11-20 (c): new gate
Also run `node _kit/loader-contrast-audit.js <slug>` (no loader text under 3:1). Scope every loader class under #pre; never reuse a short class name (.pc, .pt) for two components.
