# Design ideology of the concept sites sent out (Nov 2026 batches)

How the concept websites that were actually sent to companies are designed and why. The reference build is **/desoutter/** (https://charneym.github.io/harvardsites/desoutter/). Others from the same template: /lightel/, /viamed/, /sentec/, /bitmos/, /charlesausten/ (sent version), /teknomedical/ (sent version).

All of these, and nearly every concept site in the repo (about 650, including /limaxbio/ and /gibsononcology/), are assembled from **one shared template, `_kit/src/firelight.src.html`**, plus each site's own parts in `_kit/home/<site>/`. See section 11 before editing anything.

This describes the sent template. It does **not** describe the later "v3/v4" rebuilds (light split hero with a coloured fact strip, a hand-written motion kit). Those drifted from this and were rejected; see the last section.

---

## 1. Purpose and audience

- **What it is:** a free, unsolicited concept redesign of a company's home page. It is emailed to the founder or CEO with a link to a live page.
- **Who it's for:** small and early-stage biotech, medtech, photonics and deep-tech companies whose current site is clearly dated or poor, and which show recent activity (funding, grants, news, trade fairs).
- **The bar:** on first load a founder should think "holy sh*t, that's us, but premium". The page must look expensive, feel alive, stay true to their brand, and contain only their real facts.
- **Scope:** home page only, in full-site quality. Nav items open a "build-out" page that shows what the rest of the site would look like.

## 2. Non-negotiables

- **Invent nothing.** Every fact, number, name and claim comes from their own site, press releases, filings or registries. Keep their own language on non-English sites.
- **Brand fidelity.** Take colours from the company's own logo and current live site, sampled as hex. Evolve their brand; never replace it. A monochrome firm stays monochrome with at most one restrained accent. Never invent an accent such as a teal for a red brand.
- **Their logo** is rebuilt crisply (SVG) and is always legible: in the loader, the header and the footer.
- **Professional, calm, premium.** Nothing gimmicky, alarming, neon or "gamer". It should be something a serious bank, law firm or top-tier fund would run.
- **Square corners** on buttons, cards, tags and inputs (border-radius 0, at most 2px).

## 3. Page structure (home)

The sections run in this order, alternating dark and light grounds for rhythm:

1. **Header.** Logo left; nav items right in small, letter-spaced uppercase (11px, ~.16em); an outlined Contact button with an arrow. Fixed. It turns solid after 24px of scroll, hides on scroll down and returns on scroll up.
2. **Hero, full first screen.**
   - Text block on the left: a small accent eyebrow (e.g. "POWERED SURGICAL INSTRUMENTS · ASTON CLINTON, UK"), a large display H1 of 2 lines at most, a short lede, and a primary plus an outline button.
   - The signature visual sits on the right in the open area (~62–75% of the width), whole, never cut by the nav or the edge: a crafted render or graded real photo of their actual product or subject, on a living canvas/WebGL "field".
3. **Manifesto + stats (dark).** One statement on the left (~60%, readable line length) with 3–4 stat numerals stacked on the right. Never a lone statement with an empty column.
4. **Pinned story (dark).** "How it works".
   - The section pins for about 2.8 screen heights while you scroll.
   - On the left: a heading, a 4-step rail (labels plus a progress line) and the active step's title and text.
   - On the right: a fine-line drawing of their product or mechanism that draws in and changes state per step, with live labels/readouts.
   - On phones the art stacks above the text and fills the width.
5. **Light section** with content such as in-house capabilities or technology.
6. **Products / programmes / pipeline (dark).** Real items. Product and news rows get a hover rule animation, but **not pipeline or progress charts**: the client found the rule distracting on the Gibson pipeline.
7. **Company (light).** Story, team (real portraits if they exist, grayscale to colour on hover; otherwise a refined text-only team, never monogram tiles), certifications.
8. **Events / news (dark).** Only items that link to real sources.
9. **CTA + contact (light).** A large invitation, mailto and address.
10. **Footer.** Legible wordmark, with the hero's living visual quietly echoed behind it.

**Layout rules:**
- Centred max-width container (1320px, widening to ~1600 on very large screens), symmetric side gutters `max(gut, (100% - maxw)/2)`.
- Generous section padding (`clamp(112px,14vh,200px)`).
- No section-number eyebrows ("01 —", "(03)").
- No empty columns, no clipped type, no orphan words in headings.
- Multi-column rows stack full-width below ~860px.

## 4. Typography

- **Display:** one geometric/neo-grotesque display face (Desoutter uses Montserrat) at big scale contrast.
  - `.d1` is `clamp(50px,7.6vw,150px)`, line-height .98, letter-spacing -.045em.
  - `.d2` is `clamp(40px,5.2vw,96px)`.
- **Body:** a clean humanist sans (Open Sans) at a comfortable reading size.
- **Labels:** small uppercase, letter-spaced (11px, .14–.16em).
- **Emphasis** goes on the meaningful word. The sent template sets the H1's second line in the accent colour, italic. **The client later flagged that italic accent-coloured second line as an "AI tell".**

## 5. Motion (the part the client cares about most)

All motion uses GSAP + ScrollTrigger + SplitText + Lenis, with two custom eases:
- `flow` = cubic-bezier(.65,.05,.2,1)
- `silk` = cubic-bezier(.22,1,.36,1)

Smooth scroll is Lenis with `lerp: 0.09`.

**Loader.** Once per browser session (sessionStorage flag); never on reload or route change. About 1.2s.
- Deep ground. The logo lockup draws in or rises in as one unit.
- A thin progress bar fills. A small place line sits bottom-left. The sent version also had a 000→100 counter bottom-right; the client later called the counter out.
- **Exit:** the wordmark rises out (yPercent -120, power3.in, small stagger). Mark, bar and labels fade (.3s). The whole panel slides **up** off the screen (`yPercent:-100`, `flow`, .85s). The header drops in (`silk`, .7s). The hero entrance starts at ~.95s.
- It never just fades.

**Hero entrance.**
- The H1 rises line by line out of a mask (SplitText lines, yPercent 100→0, `silk`, 1.1s, .08 stagger).
- **If a headline has designed line breaks, write the lines into the markup** and animate those fixed lines. SplitText measures where the browser wrapped the text; in Safari that measurement split the Limax H1 into "Engineering the / future / of / hydrogel therapeutics." and froze it that way.
- Eyebrow, lede and buttons rise from y:22 (.9s, .04 stagger), starting while the headline is still settling.
- On scroll the H1 drifts up and fades slightly (parallax).

**Global scroll reveals (every section, consistently).**
- Headings rise line by line out of masks.
- Text, list items, cards and buttons rise from y:24 and fade in (1s, `silk`).
- Images rise from y:36. Images inside a cropped frame fade in from scale 1.06 to 1.
- Batched as groups in reading order (staggers mostly .04–.08, never above .1), triggered at "top 90%".
- Content is never left invisible: a failsafe reveals anything still hidden.
- **No clip-path "crop-up" image wipes.** The client dislikes them.

**Page transitions (nav items).**
- A full-screen curtain in the brand ground slides up from the bottom (.7s, power3.inOut).
- The page name rises letter by letter in the centre, large, with a small company label above it.
- The page swaps underneath.
- The title fades (.3s) and the curtain continues up and off the top (.7s).
- The build-out page then shows a sub-page hero (eyebrow, H1, lede), the matching home section's real content, and the concept note ("I'd build out this page and the rest of the site in the same style... Reply to the email this link came in").

**Pinned story.** Scrubbed by scroll (scrub ~.6) over ~2.8 screen heights.
- Step text and the rail switch at step boundaries. Two step texts are never visible at once.
- The drawing animates smoothly between states.
- Calm, never flashy.

**Hover.**
- Buttons and links: underlines draw in.
- Product and news rows: the divider rule draws across in the accent colour (not on pipeline/progress charts; see section 3).
- Team portraits: grayscale to colour with a slight scale.
- Hovers stay tight to element bounds.
- No cursor-following images, no custom cursor labels.

**Living visual.** The hero field is a subtle, cheap animation (WebGL or canvas, DPR-capped, dithered, paused off-screen), echoed faintly behind the footer wordmark.

## 6. Hero visual rules

- **It is a real, recognisable thing:** their product, device, molecule or place. A visitor must be able to name it in one second. It must never be abstract geometry, network lines, charts, UI rows, tunnels or concept mash-ups.
- **Preference order:**
  1. Their own good photography, graded.
  2. A real Unsplash/Pexels photo of the actual subject.
  3. A crafted render of their actual product or mechanism, matching it exactly.
- **Never alarming:** no wounds, blood or diseased organs. Never AI-generated imagery.
- Never a pasted rectangle or a seam. Nothing bright behind the headline. At least 100px between the H1 and the subject.
- Sharp: shown at or below native resolution.
- Unique: never reuse another concept's hero image.

## 7. Quality gates used on every build

Before a site goes out:
- No horizontal overflow at 360/390/414.
- No hidden content after a fast scroll.
- Text contrast of at least 3:1 everywhere, including the loader.
- No raw HTML entities on screen.
- No orphan words in headings.
- No squeezed columns at 390/768.
- No text touching strokes or icons.
- Every nav item opens its build-out page.
- Loader frames checked by eye, every story step checked by eye, and the hero checked at 1920/1440/390.
- Headlines checked at in-between widths too (e.g. 474, 948, 1100), not only at breakpoints, and in Safari where possible.
- The rebuilt page is checked against what is deployed (section 11).

## 8. What the client flagged afterwards (fix these; don't reinvent anything else)

From the client's review of the sent Tekno site, these read as **"clearly AI"**:
- a dark navy page with a **floating cut-out product render with a glow**
- the **italic accent-coloured second line** in the H1
- **accent colours that don't match the brand** (Tekno is red; the site used teal)

The client also suggested **using a real product picture if the company has one**. It was a suggestion, not a hard requirement.

Small composition notes from the client:
- The subject should face into the page, toward the text.
- No confusing blurred foreground blobs.
- Don't let the image push the text block around or create odd white space.

## 9. What NOT to do (lessons from a failed redesign)

After that feedback, a "v3/v4" redesign was attempted and **rejected**. Avoid all of this:
- Rewriting the motion layer from scratch. The loader exit became a fade, page transitions stopped working, text stopped animating, images "cropped up" with clip-path wipes, and pinned-story photos crossfaded and zoomed ("sickening") or hard-cut ("brash, hurts my eyes").
- Adding rules the client never asked for: a forced light page, mandatory real photos, a "no story diagrams" rule.
- Narrowing sourcing to whoever had photos. That shifted the pipeline from biotech/medtech startups to industrial manufacturers.
- Inventing new effects such as sideways galleries, marquees or magnetic buttons when asked for "premium".

**Principle:** keep the sent template's code, structure, motion and pace exactly. Change only what the client explicitly asks for, and confirm before generalising a suggestion into a rule.

## 10. Lessons from the Limax and Gibson reviews (Nov 25–26)

These came from the client's line-by-line review of /limaxbio/ and /gibsononcology/. They apply to every site.

**Progress and phase bars**
- A marker sits in the middle of the current phase. A fill that ends exactly on a phase boundary reads as "between phases" or "finished".
- Phase labels are centred between their dividers.
- Status text ("Phase 2", "Phase 1 complete") never sits on top of a track line. Either drop the grey track and put the status beside the marker, or move the status off the line.
- No hover rule on these rows.

**Balance and white space**
- No empty quadrants beside or under a heading, not only "no empty column beside a statement".
- Paired columns stay balanced. Moving content from one column to the other must not leave a hole under the shorter one.
- An attribution sits with its quote, never stranded in another column with empty space between.
- Remove white space by recomposing (moving content into the empty area, equal columns, compact lists), **never by enlarging text**.
- Tables and lists use the page grid: values line up with the right-hand column, not pushed to the far edge.

**Hero**
- The hero visual stays within the height of the text block. It never runs down into a partner/credit strip; that strip is the hero's footer, ruled across the full width under both columns.
- Gradient or tinted headline text must stay readable where it crosses the living visual. Lift the colours and/or add a soft dark text-shadow.

**Labels and wording**
- Labels don't use the link/button accent colour; that reads as clickable and competes with the real links.
- Wording matches what is shown: "Each Gibson drug hits both targets" above three drugs, not "One molecule hits both".
- When the data has no figure for one side of a pair, don't invent one to balance it; fold the other side's figure into its sentence instead.

## 11. Where the code lives and how to change it

The chain for every Firelight-based site (nearly all of them):

```
_kit/src/firelight.src.html      shared template (all ~650 sites)
  + _kit/home/<site>/*           that site's parts: views.js, extra.css, field.js, site.js, content.js, story.js, root.css, ...
  → python3 _kit/home/<site>/assemble.py      writes _kit/src/<site>.src.html
  → node _kit/build.js _kit/src/<site>.src.html <site>/index.html      inlines libraries and fonts
```

- **Edit the parts in `_kit/home/<site>/`, then assemble and build.** Never hand-edit `<site>/index.html` or `_kit/src/<site>.src.html`; the next assemble or build overwrites them. (This week's Limax and Gibson fixes were first made in `index.html` and had to be ported back.)
- `_kit/src/desoutter.src.html` is generated too. The template itself is `firelight.src.html`.
- **Changing `firelight.src.html` changes every site.** For a site-only change to template behaviour, add a hook in that site's `site.js` (it runs after the libraries load and before the page's animations). The Limax hero uses one to give the template's hero entrance its fixed lines.
- A few sites have no `_kit/home/` folder and are built straight from `_kit/src/<site>.src.html` (e.g. /limax/, now a redirect to /limaxbio/).
- `_kit/` needs `npm i` once before building.
- Before pushing, rebuild and compare with what is deployed (`cmp`). Other sessions push to `main` often: fetch and rebase just before pushing.

The design rules are in `_kit/PRINCIPLES.md`, `_kit/HOME_BRIEF.md` and `_kit/SPEC.md`. Ignore the later v3/v4 sections at the end of `_kit/WAVE_BRIEF.md`.
