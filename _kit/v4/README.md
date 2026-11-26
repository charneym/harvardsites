# v4 starter kit

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
| `#pre > [data-v4-logo]` + `[data-v4-brand]` | Logo-lockup intro in ≤1.2 s: a clip-path unmask, then the logo lifts into the header logo. No counter. Plays once per session (`sessionStorage.v4intro`), only on a plain `#/` load. The head snippet adds `html.intro`. |
| `#hdr[data-v4-header]` | Gets `.solid` after 8px of scroll. CSS condenses `--hh` to `--hhs` and the logo shrinks. |
| (always) | Lenis smooth scroll (`window.V4lenis`), the phone menu (`#burger`, `#mm`, `#burgerLab[data-open][data-close]`), and section routes `#/<key>`, which also handle the pin spacer. `#/more/*` belongs to buildout. |
| `[data-v4-first]` | Hero plus fact strip. v4.js measures `--v4-vh` (innerHeight; on phones it ignores URL-bar resizes), and CSS sets the height to `--v4-vh - --hh`. The hero flexes, so the strip ends exactly at the fold. |
| `[data-v4-hero]` | Its `h1` rises line by line out of a mask (SplitText lines). `[data-in]` items before the h1 start with it and the rest fade up after. |
| `[data-v4-photo]` | The hero figure wipes in from the right (clip-path) while its img eases from 1.12 to 1.04. It then drifts slowly (1.04 to 1.09, 18 s, yoyo) and parallaxes on scroll. The figcaption slides up. |
| `[data-v4-strip]` | The strip items slide up one after another. |
| `[data-split]` | Headings rise line by line on scroll. One colour only: the CSS does not style lines. |
| `[data-up]`, `[data-up="stagger"]` | Fade up on arrival, either the element or its children in turn. |
| `[data-rv]` (+ `[data-px]`) | Clip-path reveal of an image frame (+ inner parallax at scale 1.08). |
| `[data-count]` | Counts up once and keeps any prefix or suffix ("40+", "24 h"). Use only for genuinely notable figures. |
| `section.story[data-v4-story]` | The pinned photo story. One markup: `.rail > i + li*` and `.steps > li.step > figure(.fi > img, figcaption) + .st(.num, h3, p)`. At ≥1024×620 it pins for `n×80%` of scroll, photos crossfade and zoom (1.14 to 1), and the rail fills. Step text and captions switch with a gap and are **never** visible two at once. Inactive steps get `aria-hidden`. Below that size it is a stacked sequence with reveals. buildout turns it into numbered steps on the sub-pages. |
| hover (CSS) | `.card` lifts and its photo zooms. Nav links and `a.ul` draw their underline. |

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
