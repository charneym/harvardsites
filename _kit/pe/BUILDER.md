# PE builder session: the exact steps per firm

Every site is a **custom concept**: its own signature hero tied to that firm, its own story diagram, its own type and
composition. Only the invisible plumbing is shared: the engine (`_kit/pe/engine.src.html`: loader, transitions,
masthead and person sheets, footer fit, CU/CV/CW, scrollbar gutter), the hero canvas shell, `gen.js` (data → src),
`qa.sh` (every gate + review images) and the research step. **Do not edit those shared files, `_kit/*.js` or other
sites**; never copy another firm's hero or story. If the plumbing has a bug, work around it in your site's `css` and
report it to the coordinator.

## Once per session
```
cd /home/user/harvardsites/_kit && npm i && rm -rf node_modules/playwright node_modules/playwright-core && cd ..
git pull --rebase origin main
```
Never commit `_kit/package.json` or `_kit/package-lock.json`. Every browser job goes through `flock /tmp/pw.lock`
(qa.sh does this for you).

## Per firm (lean: research in a Sonnet subagent, design yourself, one gate script, two review images)
1. `node _kit/pe/usage.js "<slug> start"` (token meter).
2. **Research → JSON.** Spawn ONE subagent with the prompt in `_kit/pe/RESEARCH.md` (model `sonnet`), filling in the
   firm, slug and domain from `_kit/sourcing/registry.csv`. It writes `_kit/pe/data/<slug>.json` and returns the
   report facts (HQ, managing partner, emails, activity, bad-site evidence). Skim the JSON against `schema.md`:
   facts sourced, stats are published figures, hero title lines short, story labels ≤ 18 characters.
   Check the firm against SPEC §2b (not NY/Boston/California HQ, active in the last 12–18 months, 3+ bad-site
   points, a named partner). If it fails, report it to the coordinator instead of building.
3. **Design the concept** (the part that makes the site worth sending). From the facts, decide what is unique to
   this firm: its name, its mark, its region, its sectors, how it builds companies. Then write:
   - `_kit/pe/sites/<slug>/hero.js`: the signature hero (contract: top of `_kit/pe/field-shell.js` and schema.md).
     A filled focal point the eye can rest on at first sight (CU: never an empty ring/frame), richness from the
     firm's real data (`hero.params`), slow motion, pointer parallax; kept right of the headline on desktop and in the
     top band on phones (CW); it reprises quietly behind the footer (`S.foot`).
   - `_kit/pe/sites/<slug>/story.js`: one pinned diagram (scene + storyDraw) where each step changes one labelled
     part, built from the firm's own approach/criteria/portfolio. Labels ≤ 18 characters.
   - In the JSON: `fonts` (a pairing that suits this brand), `layout` (`base`, `sections` order, `radius`), `logo`,
     and `css` for composition and type details. Read the last few `_kit/pe/data/*.json` so yours doesn't repeat them.
   Read 1–2 approved hand-built sites' field/story code (e.g. `_kit/src/blackford.src.html`, `snow-peak`,
   `heartland-growth`) for technique and quality level, not to copy.
4. **Generate, build, gate:** `bash _kit/pe/qa.sh <slug> --fast` (gen + build + every gate at 1440, one table).
   For quick looks while designing: `node _kit/pe/gen.js … && node _kit/build.js … && flock /tmp/pw.lock node
   _kit/shot.js <slug>/index.html /tmp/claude-0/s/<slug> 1440 900 "#/" 0` and Read the PNG.
5. **Look at the two review images** (Read them):
   - `_kit/pe/review/<slug>-hero.png`: the first screen at 1440. Would a stranger think an image failed to load (CU)?
     Is the logo legible? Does the art stay clear of the headline? Any label collisions?
   - `_kit/pe/review/<slug>-strip.png`: phones 360/390/430 at four scroll positions plus the footer. The hero art
     never crosses the eyebrow, title or copy at any frame (CW); the footer wordmark fits on one line.
   Also open the story at 2–3 progress points with `node _kit/sfxshot.js <slug>/index.html "#story" /tmp/claude-0/s/<slug>-story 8`.
   Fix (hero/story code, JSON copy, css) and re-run step 4 until ALL GATES OK and the images look finished.
6. **Final full run:** `bash _kit/pe/qa.sh <slug>` (adds the 390 passes). Must end with `ALL GATES OK`.
7. **Publish** (only your files; prepush ran inside qa.sh, run it again if you pulled since):
   ```
   node _kit/prepush-check.js
   git add <slug> _kit/src/<slug>.src.html _kit/dossiers/<slug>.md _kit/pe/data/<slug>.json _kit/pe/sites/<slug>
   git commit -m "Add <Firm> concept site"
   git pull --rebase origin main && git push origin main     # on rejection: pull --rebase and retry (2/4/8/16s)
   ```
8. `node _kit/pe/usage.js "<slug> done"`; the per-site cost is the difference between the two lines in
   `_kit/pe/review/usage.log` (report `out` and the cache-write/read totals).
9. **Report** with `send_message` to the coordinator session (id in your prompt), one message per site:
   ```
   SITE DONE: <slug>
   https://charneym.github.io/harvardsites/<slug>/  · commit <hash>
   Report (<120 words, SPEC §7): concept (the custom hero and why it fits the firm), signature moments (hero, story
   diagram, footer bookend, person sheets), content gaps (what was unknown and left out), gates passed.
   Gates: <paste the qa.sh table, or "ALL GATES OK (N checks)" plus any notes>
   HQ: <city, state> · time zone
   Lead: <full name>, <title> (<source URL>)
   Emails: <address> (<source URL>) …  or "none published (contact form only)"
   Activity: <date> <event> (<URL>) …
   Bad-site evidence: 1) "<quote>" (<URL>) 2) … 3) …
   Tokens: <out> output, <cw> cache-write, <cr> cache-read (usage.js)
   ```
10. Next firm. When your list is done, send `BATCH DONE`.

## What you never do
- Invent facts, people, figures, quotes or portfolio outcomes; use stock photos; use a photo that isn't hosted by
  the firm (or its portfolio company) and verified to load.
- Edit the engine or library, weaken a gate, push without `ALL GATES OK`, or push an intermediate state.
- Add sections the data can't fill (leave fields out: sections disappear cleanly).
