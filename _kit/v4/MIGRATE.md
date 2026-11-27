# Migrating a v4 site to the sent sites' motion

Since 2026-11-27 the kit's motion (`v4.js` + `v4.css`) is ported verbatim from the sites the client was already sent (/desoutter/, /lightel/, /viamed/, /sentec/; source `_kit/src/desoutter.src.html`). A v4 site keeps its look (colours, photos, layout, type). Only the motion changes. **Do not touch content, facts, photos or colours.**

What the client gets after migrating:

| Before (v4) | After (the sent sites) |
|---|---|
| Logo clip-path wipe that lifts into the header | Lockup fades and rises in as one unit, progress bar, lockup rises out (desoutter's char tween as one unit), panel lifts away (flow .85 s), header drops in, hero plays at .95 s. No counter. Once per site per session, then a .5 s veil. |
| Nav click: no visible wipe (GSAP read the CSS `translateY(101%)` as a fixed `y`, so the curtain stopped one viewport down) | Full-screen curtain with the page name rising letter by letter (`gsap.set(#xc,{y:0,yPercent:101})`, `#xlab` label) |
| Photos wipe in with clip-path, inner parallax, hero drift | Global reveal: text and cards fade up 24px, headings rise line by line, framed images fade from scale 1.06. Hero photo fades in. Only parallax: the hero h1 drifts up and fades. |
| Story: photo crossfade + zoom 1.14 → 1, scrubbed | desoutter's pin (2.8 viewports, scrub .6). Step changes are TIME-based: outgoing photo fades .6 s, incoming rises from y 24 over .9 s (silk); text the same, the new text after the old is gone. No scale, no blur, no ghost at a settled position (check.js fails on two photos mid-fade). |
| Strip slides in | Strip fades with the hero copy. Remove per site with `data-v4-strip="off"`. |
| Lenis lerp .1 | lerp .09, lagSmoothing(120,33); eases `flow` / `silk` |
| Hovers: lift + shadow, bg colour swap | Button fill from below + arrow nudge, drawn underlines, photo 1.035, rows shift 6px |

## A. Kit-built sites (`_kit/home/SLUG/v4.src.html` with an `<!--@v4-->` marker)

Nothing to edit. `build.sh` now injects `v4.css` and the loader classes into `<head>`, and adds `CustomEase` to the `@libs` marker.

```bash
git pull --rebase
_kit/v4/build.sh SLUG
git diff --stat SLUG/          # only SLUG/index.html may change
node _kit/v4/check.js SLUG     # first screen, story overlap, upscale, overflow
(cd _kit && node buildout-test.js "$PWD/../SLUG/index.html")
_kit/v4/gates.sh SLUG          # the full gate set, if time allows
```

To check that a rebuild changes only motion, build the same source with the previous kit (`git worktree add /tmp/wt HEAD~N`, link `_kit/node_modules`, run `build.sh` there) and diff that against the committed page. It must be identical. Every site in the first batch reproduced byte for byte.

Optional, per site, in the source:
- Remove the fact strip: `data-v4-strip="off"` on the `[data-v4-strip]` section (or delete the section).
- `<script>window.V4={tagline:"..."}</script>` before `<!--@v4-->` changes the loader's bottom-left line (default: the part of `<title>` after the dash). `V4.site` sets the curtain label (default: the brand link's aria-label without ", home").

## B. Hand-written sites (`_kit/home/*/` assembled pages, `_kit/src/*v3*`, or a `v4.src.html` without `<!--@v4-->`)

These carry their own motion script. Replace it with the kit's:

1. **Libs.** The `@libs` marker must be `gsap ScrollTrigger SplitText CustomEase lenis buildout` (keep `fit`, etc. if present).
2. **Script.** Delete the site's own motion code (loader, Lenis, reveals, story, menu, route curtain wiring). Put `<!--@v4-->` after the libs and `<!--@nssfix-->` after that. Build with `_kit/v4/build.sh SLUG`. If the page has its own assembler, inline `_kit/v4/v4.js` in a `<script>` instead.
3. **Head.** Before `</head>`, add the loader-class snippet and `<style>` + the contents of `_kit/v4/v4.css`. `build.sh` does this for you: copy its `HEAD=` block if you assemble the page by other means.
4. **Hooks** (add the attributes; no content changes):
   - `#pre` with the logo lockup in `<div data-v4-logo>` (the same lockup as the header). Remove any counter (`.cnt`) and stroke/letter split.
   - the header `id="hdr" data-v4-header`, its logo wrapper `data-v4-brand`, `#burger`, `#burgerLab[data-open][data-close]`, `#mm`.
   - `<div id="view">` around the page sections (the footer may be inside or after it).
   - the first screen `[data-v4-first]`, the hero `[data-v4-hero]` (its h1, and `data-in` on the kicker, lede, buttons), the photo `[data-v4-photo]`, the strip `[data-v4-strip]`.
   - section headings: `data-split`.
   - a pinned story: `section.story[data-v4-story]` > `.rail > i + li*` and `.steps > li.step > figure + .st`. Map an existing `.pstep` story onto that markup, keeping its text and photos.
   - section routes: `var SECS={navKey:"sectionId"}` (buildout reads it).
   - `#xc/#xt/#xtt` can stay or go: `v4.js` creates any that are missing, plus `#xlab`.
5. **CSS.** Delete the site's clip-path reveal rules, `[data-rv]` wipe styles, story zoom rules and any `#xc{transform:...}` that is not `translateY(101%)`. Keep the look.
6. **Gates.** `_kit/v4/gates.sh SLUG`. Then compare against /desoutter/ by eye: the loader at 0.2–2.5 s, a nav click at 0.3/0.6/0.9/1.3 s, a mid-entry scroll reveal, and the story steps. Frame sheets at the same timestamps: `node _kit/v4/motionframes.js desoutter OUT/desoutter; node _kit/v4/motionframes.js SLUG OUT/SLUG; python3 _kit/v4/motionsheet.py OUT/desoutter OUT/SLUG OUT/sheets` (loader fresh + repeat 0.8–2.0 s every 100 ms, nav 0.9–2.0 s, story change every 150 ms for 1.2 s). Spacing: `node _kit/v4/spacing.js SLUG` (empty li/p, touching blocks). Eurospray's sheets: `_kit/reports/motion-fix/v2/`.

## Notes
- The loader's session key is per site (`<slug>-pre`), because all sites share one origin.
- Reduced motion: no loader, Lenis, pin or reveals; everything is static and visible. No JS: everything is visible, and the CSS fallbacks clear `intro`/`v4-wait` after 4 s.
