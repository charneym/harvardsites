# PE site JSON schema (`_kit/pe/data/<slug>.json`)

One JSON file is the whole site. `node _kit/pe/gen.js _kit/pe/data/<slug>.json` writes `_kit/src/<slug>.src.html` and
`_kit/dossiers/<slug>.md`; `bash _kit/pe/qa.sh <slug>` regenerates, builds `<slug>/index.html` and runs every gate.

**Every field except `slug` and `firm` is optional.** Empty or missing data removes its section, its nav link and its
footer link cleanly (no empty headings). Never put a fact in the JSON that you cannot source (RESEARCH.md).

Worked examples: `data/pe-example.json` (Burlington's facts, every field used), `data/rox-capital.json` (dark base),
`data/watchtower-capital.json` (light base, bios and person sheets), each with its `sites/<slug>/` hero and story.

Text fields marked *html* may contain `<em>…</em>` for the accent words (one accent per heading, at the end).
Everything else is plain text (it is escaped).

## Identity
| field | type | notes |
|---|---|---|
| `slug` | string, required | kebab-case; the folder name and the URL |
| `firm` | string, required | full name, e.g. "Watchtower Capital" |
| `short` | string | one word for the preloader and transition label; default: first distinctive word |
| `legal` | string | footer © line; default `firm` |
| `wordmark` | string | giant footer wordmark; default `firm` (fitted by viewBox, never stretched: CV) |
| `site` | url | their current site (dossier only) |
| `hq` | `{city, state, src}` | HQ; used in eyebrow, preloader tag, footer |
| `email`, `emailSrc` | string, url | a firm email published on their site or releases |
| `meta` | `{title, description}` | page title and meta description |

## Look (chosen fresh for each firm: there are no presets)
| field | values | notes |
|---|---|---|
| `palette.ink` | hex | their darkest brand colour (navy, ink). Auto-darkened if too light for a ground |
| `palette.accent` | hex | one accent from their logo/site. Contrast-corrected automatically (≥4.8:1) |
| `palette.paper` | hex | light ground, default `#f3f1ec` (warm); a cool `#f2f4f7` suits blue brands |
| `fonts` | `{spec, disp, serif, sans, mono, kind, weight400, flatAccent}` | any families installed under `_kit/node_modules/@fontsource` (add one with `npm i --no-save @fontsource/<name>`). `spec` is the build.js string, e.g. `"Newsreader:300,300i; Figtree:400,500; IBM Plex Mono:400"`. `kind:"serif"` applies the serif-display fixes; `weight400` for display faces without a 300; `flatAccent` makes `<em>` accents upright |
| `layout.base` | `dark` (default) or `light` | colour plumbing only: light = page ground light, footer/CTA/sheets brand-dark |
| `layout.sections` | array, required | home order, any of `thesis story sectors portfolio team news` |
| `layout.radius` | px | corner radius for buttons, markers, portraits (999 = pills) |
| `logo` | `{url, height, invert}` or `{svg, height}` or `{text:[lines]}` | `url`: hotlinked file (text fallback on error); `invert:true` turns a dark logo white on a dark base. `svg`: a faithful inline redraw (`fill="currentColor"`). `text`: typeset wordmark lines |
| `css` | string | the site's own CSS: composition, type details, anything that makes it this firm's site |

## Hero and story: the firm's own code
Each firm gets a **new** hero and story, designed for it, in `_kit/pe/sites/<slug>/`:
- `hero.js` defines `var HM={geo(L), build?(G,ST,E), draw(c,S,E), mask?}` (contract at the top of
  `_kit/pe/field-shell.js`). The shell does the plumbing: canvas sizing, intro, pointer, dimming, the desktop fade over
  the headline column, the phone top band (CW) and the footer bookend (`draw` is called again with `S.foot=1` at the
  footer's size). `hero.params` in the JSON reaches it as `E.P` (put the firm's real data there: counts, coordinates,
  a traced logo path). Colours arrive as `E.C` (`fg`, `acc`, `hi`, `gr` rgb strings) so light and dark bases work.
- `story.js` defines `function scene()` (returns the SVG for the pinned diagram) and `function storyDraw(svg)`
  (returns `function(p,b)`: p = pinned progress 0..1, b = build-in). Use the engine's scene classes
  (`frm frm2 ln-a flow node own join`, `text.w/.a/.big`) and `seg(p,a,b)`.
- Examples to learn the contract from (never to copy): `sites/rox-capital` (hexagon lattice from their mark; six levers
  as the hexagon's sides), `sites/watchtower-capital` (a lookout beam over their two platforms; Ally Services built step
  by step), `sites/pe-example` (Burlington's corridor and owner-to-firm bridge).
- `hero: {params, eyebrow, title, word}`: `title` is an array of *html* lines (2–3 lines, each short enough to sit on
  one line at 1024px). `eyebrow` default "Private equity · <HQ city>".

## Copy
| field | type | notes |
|---|---|---|
| `lede` | string | 1–2 sentences under the hero title: who they are, where, whom they partner with |
| `thesisLine` | string | appended to the page title when `meta.title` is absent |
| `thesis` | `{kick, text}` | *html* `text`: the scroll-coloured statement (25–45 words, from their own wording) |
| `stats` | `[{v, sup, k}]` | 2–3 only, **only figures they publish**: `v` short (≤7 chars: "$150M", "2017", "22"), `sup` e.g. "+", `k` label |
| `story` | `{kick, title, steps}` | the pinned section's copy; its diagram is `sites/<slug>/story.js`. `title` *html*. `steps`: 3 or 4 `{tag, title, text}`; `tag` ≤ 16 chars, `text` ≤ 45 words |
| `focusTitle`, `focusIntro` | *html*, string | Focus page head |
| `criteria` | `[{k, v}]` | investment criteria, **only what they publish** (size, EBITDA, EV, geography, deal type, ownership) |
| `sectors`, `sectorsTitle`, `sectorsText` | string[], *html*, string | industries list (home shows the first 9) |
| `models`, `modelsLabel` | string[], string | a sentence list under the sectors (business models, value-creation playbook) |
| `pillars` | `[[title, text], …]` | 2–4 principles/values (Focus page) |
| `portfolio`, `portfolioTitle`, `portfolioIntro` | see below | |
| `team`, `teamTitle`, `teamIntro` | see below | |
| `news`, `newsIntro` | see below | |
| `cta` | `{kick, title (html), text, button}` | closing band on every page |
| `contact` | `{title, intro, note, phone, offices:[{label, city, lines:[address lines]}]}` | |
| `sources` | `[{fact, url}]` | goes to the dossier; one source URL per fact |

### portfolio `[{name, desc, loc, year, status, url, pr, src}]`
`status`: `current` (default) or `realized`. `year`: "2023" or "2021 to 2026" (leave out if unknown). `url`: the
company's site, `pr`: the deal release. Home shows up to 5 current ones; the Portfolio page splits current/realized.

### team `[{name, title, group, photo, bio, sum, email, src}]`
`photo`: a company-hosted headshot URL (verify it returns 200). If at least half have photos the team renders as the
portrait grid (CI), otherwise as the masthead list (CL). `bio`: array of paragraphs; **if every person has a bio,
every row opens a person sheet** (CL: all rows behave the same). `sum`: one line for the masthead (default: first
sentence of the bio). `group`: e.g. "Partners", "Operating advisors" (people of one group must be adjacent).

### news `[{date, source, title, url}]`
`date` is `YYYY-MM-DD` (gen fails otherwise). Real items with working links only. Sorted newest first automatically.
