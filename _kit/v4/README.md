# v4 starter kit

> **MOTION FIX (2026-11-27).** All motion is now ported verbatim from the sites the client was already sent (/desoutter/, /lightel/, /viamed/, /sentec/): loader, Lenis, line/element/image reveals, parallax, hovers, the #xc/#xt route curtain, the pinned story (StoryFX). `v4.css` (injected by `build.sh`) holds the motion hooks. The table of hooks below the fold is updated; the old clip-path wipes, photo zoom/drift, slide-in strip and count-ups are gone. Migrating an existing site: `MIGRATE.md`.

Build a concept home page to the current standard in `_kit/WAVE_BRIEF.md`: STRUCTURE v3, COMPOSITION BASICS, PREMIUM MOTION v4 with its CORRECTION, and the no-overlap story rule. You write content, tokens and page-specific CSS. The kit supplies the motion layer and the gates.

The kit is distilled from the three approved references (/drn-engineering/, /teknomedical/, /charlesausten/). `/_v4demo/` is DRN's content rebuilt with the kit (throwaway, not linked anywhere). Its source is `_kit/home/_v4demo/v4.src.html`.

| File | What it is |
|---|---|
| `v4.js` | The whole motion layer, driven by data attributes (list below). It is inlined by `build.sh`. Do not fork it per site. |
| `starter.html` | A light skeleton with brand tokens (CSS custom properties) and every v3 section pattern, already wired with the attributes. |
| `build.sh SLUG` | Builds `_kit/home/SLUG/v4.src.html` into `SLUG/index.html`, a single file: fonts, gsap, Lenis, buildout, v4.js and nssfix are all inlined. |
| `gates.sh SLUG` | Runs every gate plus the new v4 checks, then prints a PASS/FAIL table. |
| `check.js SLUG [first,story,upscale,overflow]` | The new automated checks on their own. |
| `prepush1.sh FILE` | prepush-check's per-page checks for one file. |

## Build a site in 6 steps

```bash
mkdir -p _kit/home/SLUG SLUG/img && cp _kit/v4/starter.html _kit/home/SLUG/v4.src.html
```

1. **Photos.** Put their real photos in `SLUG/img/` as webp, and write the true `width` and `height` on every `<img>`. Each one must be at least 1/1.2 of its rendered size: the hero column (about 960px at 1920), the story frame (up to 700px wide, and it zooms to 1.14), and the cards. Gate (c) catches any you get wrong.
2. **Tokens.** In the `TOKENS` block, set `--brand`, `--brandD`, `--brandT`, `--onBrand2`, the greys, `--head` and `--body`, `--hw` and `--r`. Take colours from their logo pixels or their CSS. Then fix the `/*@fonts ...*/` line (names from `_kit/node_modules/@fontsource`; `cd _kit && npm i @fontsource/<name>` for a new one).
3. **Logo.** Save the SVG as `_kit/home/SLUG/logo.svg` with `class="logo"` and `aria-hidden="true"`, then use `<!--@inc logo.svg-->` in `#pre [data-v4-logo]`, in `#brand [data-v4-brand]` and in the footer. The intro lifts the `#pre` copy into the header copy, so both must be the same lockup.
4. **Content.** Fill every `{{slot}}` from their own site. `build.sh` warns about any slot left over. Make the nav their real menu, with one `href="#/<key>"` per item. A key that matches a section id scrolls there and builds out. A key with no section gets buildout's concept page automatically. **Delete the sections you don't use**, and vary or extend the layouts for their content (v3 rule 5). Put page-specific CSS at `/*@site-css*/`.
5. **Build:** `_kit/v4/build.sh SLUG`
6. **Gates:** `_kit/v4/gates.sh SLUG`. Then look at 1440, 1920 and 390 (COMPOSITION BASICS 6): the hero, a mid-intro frame, and the story at a few scroll positions. Commit, then `node _kit/prepush-check.js`, `git pull --rebase` and push.

## The attributes (`v4.js`)

| Hook | Effect |
|---|---|
| `#pre > [data-v4-logo]` | The sent sites' loader: the lockup fades and rises in as one unit, a progress bar fills, then the panel lifts away (flow, .85 s), the header drops in and the hero plays at .95 s. No counter. Full once per site per session; later loads get the short veil fade. |
| `#hdr[data-v4-header]` | Gets `.solid` after 8px of scroll. CSS condenses `--hh` to `--hhs` and the logo shrinks. |
| (always) | Lenis (lerp .09) as `window.V4lenis`, the phone menu (clip-path circle, links rise), section routes `#/<key>` (1.5 s scroll). `#/more/*` belongs to buildout, whose curtain (#xc/#xt/#xlab; created if missing) now actually shows. |
| `[data-v4-first]` | Hero plus fact strip, sized to one viewport (`--v4-vh`). |
| `[data-v4-hero]` | h1 lines rise (silk 1.1 s), `[data-in]` follow (y 22, .9 s); the h1 drifts up and fades as the hero scrolls away (desktop). |
| `[data-v4-photo]` | Fades in like the sent hero visual (filter opacity, 1.8 s). No wipe, no zoom, no drift. |
| `[data-v4-strip]` | Fades in with the hero copy (no slide). `data-v4-strip="off"` removes it. |
| `[data-split]` | Heading lines + words rise out of a mask (silk 1.15 s). |
| everything else in `#view` + footer | The sent global reveal: headings line by line, text/cards/figures fade up 24px, images in a clipping frame fade from scale 1.06. `[data-up]`, `[data-rv]`, `[data-px]`, `[data-count]` are accepted but add nothing. |
| `section.story[data-v4-story]` | Pinned for 2.8 viewports (scrub .6) at ≥1024×620; StoryFX crosses the steps over (never two at once); photos change at the step boundary (the new one fades in on top over 0.1 of a step, opacity only), so a settled position never shows two photos; captions switch like the steps. check.js fails on two photos mid-fade. Stacked with reveals below that size. |
| hover (v4.css) | Buttons fill from below and the arrow nudges; nav links and `a.ul` draw a line; cards: photo 1.035 + heading colour; news rows shift 6px and draw a rule. |

Optional config goes before the `<!--@v4-->` marker: `<script>window.V4={secs:{key:"sectionId"},pinFrom:"(min-width:1100px) and (min-height:640px)",stepVh:90}</script>`. A `var SECS={...}` map works too, and buildout reads it.

**Reduced motion:** no intro, Lenis, pin, parallax or reveals. Everything is static and visible. **No JS:** everything is visible. The story is stacked, and the first screen is still sized by `100svh`. If v4.js never runs, the `html.intro` and `v4-wait` states time out in CSS after 2.5 s.

## What the gates check (`gates.sh`)

PASS/FAIL table; logs are in `/tmp/v4gates-SLUG/`. `-j 1` runs the gates one at a time on a slow machine.

- **Existing gates:** entities, contrast 1440/390, hidden 1440/390, squeeze 390/768, textclash, orphans, buildout-test, and prepush for this page only: `prepush1.sh` runs prepush-check's per-page checks (inline-script syntax, navtest, smoke). Before pushing, still run the repo-wide `node _kit/prepush-check.js`.
- **New (a), first screen:** at 1440×900, 1920×1080 and 390×844, the bottom of the first screen = the viewport bottom (±1px). It also checks that the strip sits on the hero, that the photo fills its frame down to the strip, that the hero content fits, and that the next section starts at the fold.
- **New (b), story:** at 1440 and 1920, it samples 21 settled scroll positions (every 5% of the pin) and sweeps the scrubbed timeline at 1% steps. It fails if more than one step text, or more than one caption, is visible at once.
- **New (c), upscale:** at 1440, 1920 and 390, it scrolls the whole page and fails if any image renders above 1.2× its native pixels. It accounts for object-fit cover/contain and for transforms (hero drift, parallax, story zoom).
- **Overflow:** at 360, 390 and 414, nothing may stick out past the right edge.
- **Not run:** the loader, loader-contrast and storyfx audits test components that v3 removed.

`check.js` also works on hand-built pages (it falls back to `.first`/`.hero`/`.strip` and `.pstep`). It flags the DRN reference's story: during each change, the outgoing and incoming text show for a moment (around 21–24% and 44–47% of the pin).

## Time saved per build

On the references, the motion layer, first-screen sizing, story choreography and build-out CSS were written by hand each time. That was about 8–10 KB of JS and 6 KB of CSS, plus several rounds of fixing overlap and band defects by eye. With the kit, a build is content, tokens, photos and page-specific CSS.
