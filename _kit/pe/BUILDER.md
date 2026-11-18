# PE builder session: the exact steps per firm

You build private equity concept sites from data, not code. The engine, heroes, stories and every central fix live
in `_kit/pe/` and are already approved; **do not edit `_kit/pe/*.js`, `_kit/pe/engine.src.html`, `_kit/*.js` or other
sites.** If the template has a bug, work around it in your JSON (`css` field) and report it to the coordinator.

## Once per session
```
cd /home/user/harvardsites/_kit && npm i && rm -rf node_modules/playwright node_modules/playwright-core && cd ..
git pull --rebase origin main
```
Never commit `_kit/package.json` or `_kit/package-lock.json`. Every browser job goes through `flock /tmp/pw.lock`
(qa.sh does this for you).

## Per firm (target: ~1/5 of a hand-built site's tokens; no critic subagent, no screenshots beyond the two below)
1. `node _kit/pe/usage.js "<slug> start"` (token meter).
2. **Research → JSON.** Spawn ONE subagent with the prompt in `_kit/pe/RESEARCH.md` (model `sonnet`), filling in the
   firm, slug and domain from `_kit/sourcing/registry.csv`. It writes `_kit/pe/data/<slug>.json` and returns the
   report facts (HQ, managing partner, emails, activity, bad-site evidence). Skim the JSON against `schema.md`:
   facts sourced, stats are published figures, hero title lines short, story labels ≤ 18 characters.
   Check the firm against SPEC §2b (not NY/Boston/California HQ, active in the last 12–18 months, 3+ bad-site
   points, a named partner). If it fails, report it to the coordinator instead of building.
3. **Generate, build, gate:** `bash _kit/pe/qa.sh <slug> --fast` (gen + build + every gate at 1440, prints one table).
4. **Look at the two review images** (Read them):
   - `_kit/pe/review/<slug>-hero.png`: the first screen at 1440. Ask: would a stranger think an image failed to
     load (CU)? Is the logo legible? Does the art stay right of the headline? Any label collisions?
   - `_kit/pe/review/<slug>-strip.png`: phones 360/390/430 at four scroll positions plus the footer. The hero art
     must never cross the eyebrow, title or copy at any frame (CW); the footer wordmark fits on one line.
5. **Fix** by editing the JSON only (shorter title lines, a different `hero.module` or params, `logo.invert`,
   `logo.height`, palette, labels) and re-run step 3 until the table says ALL GATES OK and both images look right.
   Common fixes: TITLEFIT/OVERFLOW → shorten a title line; logo unreadable → `invert:true` or an `svg` redraw;
   crowded network labels → fewer `points` (drop the outliers); empty-looking hero → another module.
6. **Final full run:** `bash _kit/pe/qa.sh <slug>` (adds the 390 passes). Must end with `ALL GATES OK`.
7. **Publish** (only your files; prepush ran inside qa.sh, run it again if you pulled since):
   ```
   node _kit/prepush-check.js
   git add <slug> _kit/src/<slug>.src.html _kit/dossiers/<slug>.md _kit/pe/data/<slug>.json
   git commit -m "Add <Firm> concept site (PE template)"
   git pull --rebase origin main && git push origin main     # on rejection: pull --rebase and retry (2/4/8/16s)
   ```
8. `node _kit/pe/usage.js "<slug> done"`; the per-site cost is the difference between the two lines in
   `_kit/pe/review/usage.log` (report `out` and the cache-write/read totals).
9. **Report** with `send_message` to the coordinator session (id in your prompt), one message per site:
   ```
   SITE DONE: <slug>
   https://charneym.github.io/harvardsites/<slug>/  · commit <hash>
   Report (<120 words, SPEC §7): concept (hero module + why it fits the firm), signature moments (hero, story
   type, footer bookend, person sheets), content gaps (what was unknown and left out), gates passed.
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
