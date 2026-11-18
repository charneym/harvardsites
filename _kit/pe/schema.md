# PE site JSON schema (`_kit/pe/data/<slug>.json`)

One JSON file is the whole site. `node _kit/pe/gen.js _kit/pe/data/<slug>.json` writes `_kit/src/<slug>.src.html` and
`_kit/dossiers/<slug>.md`; `bash _kit/pe/qa.sh <slug>` regenerates, builds `<slug>/index.html` and runs every gate.

**Every field except `slug` and `firm` is optional.** Empty or missing data removes its section, its nav link and its
footer link cleanly (no empty headings). Never put a fact in the JSON that you cannot source (RESEARCH.md).

Worked examples: `data/pe-example.json` (Burlington, the approved engine's own facts, every field used),
`data/rox-capital.json` (dark base, network map), `data/watchtower-capital.json` (light base, emblem, sheets).

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

## Look (variants: never reuse the exact combination of the last site you built)
| field | values | notes |
|---|---|---|
| `palette.ink` | hex | their darkest brand colour (navy, ink). Auto-darkened if too light for a ground |
| `palette.accent` | hex | one accent from their logo/site. Contrast-corrected automatically (≥4.8:1) |
| `palette.paper` | hex | light ground, default `#f3f1ec` (warm); use a cool `#f2f4f7` for blue brands |
| `fonts` | `grotesk` `archivo` `sora` (sans) · `garamond` `spectral` `newsreader` `caslon` `instrument` (serif) | approved pairings lifted from live sites |
| `layout.base` | `dark` (default) or `light` | light = Northern Shore / Hidden River light-led ground; footer, CTA and sheets turn brand-dark |
| `layout.order` | `A` `B` `C` | home section order. A: thesis, story, sectors, portfolio, team, news. B: thesis, portfolio, story, team, sectors, news. C: story, thesis, sectors, team, portfolio, news |
| `layout.shape` | `soft` `pill` `square` | buttons, markers, portrait corners, preloader frame |
| `logo` | `{url, height, invert}` or `{svg, height}` or `{text:[lines]}` | `url`: hotlinked file (falls back to a text wordmark on error); `invert:true` turns a dark logo white for a dark base. `svg`: an inline redraw (use `fill="currentColor"`; text gets `font-family` via `css`). `text`: typeset wordmark lines |
| `css` | string | small site-specific CSS (rare; e.g. `.logo.svgl text{font-family:var(--sans)}`) |

## Hero
`hero: {module, params, eyebrow, title, word}` — `title` is an array of *html* lines (2–3 lines, each short enough to
sit on one line at 1024px: ≤ ~18 characters for the long ones). `eyebrow` default "Private equity · <HQ city>".

| module | lifted from | params | use when |
|---|---|---|---|
| `corridor` | Burlington | `lines` (text on the lit mark, default firm name words), `round` | a square/rounded logo frame; general purpose |
| `sun` | Fifth Ocean | — | coast, ocean, horizon, "first light" names |
| `ridges` | Snow Peak | `peak` (0..1) | mountain, peak, summit, ridge, western firms |
| `topo` | Hidden River | `label` (text by the marker) | river, valley, land, conservation |
| `compass` | Northern Shore | — | north, bearing, navigation, "true", star names |
| `network` | Heartland | `hq:[lat,lon,"LABEL"]`, `points:[["LABEL",lat,lon],…]` (real portfolio/office places only, 3–7), `hqShape` circle/hex/square, `labels` | a regional footprint; buy-and-build platforms |
| `growth` | Auxo | — | growth, harvest, agriculture, "seed" names |
| `wedge` | Arkview | `angle` (deg) | an angular/triangular logo; arks, bows, wedges |
| `moon` | Enceladus | `plumes` (bool) | moon, planet, star, celestial names |
| `emblem` | Blackford | `path` (SVG d of their mark), `box:[w,h]`; without a path `hero.word` (≤4 letters) is engraved | they have a strong logo mark you can redraw as a path |

All modules draw a filled focal point (CU), keep to the right columns on desktop, sit in a top band that fades out
before the text on phones (CW), and repeat quietly behind the footer wordmark (BT).

## Copy
| field | type | notes |
|---|---|---|
| `lede` | string | 1–2 sentences under the hero title: who they are, where, whom they partner with |
| `thesisLine` | string | appended to the page title when `meta.title` is absent |
| `thesis` | `{kick, text}` | *html* `text`: the scroll-coloured statement (25–45 words, from their own wording) |
| `stats` | `[{v, sup, k}]` | 2–3 only, **only figures they publish**: `v` short (≤7 chars: "$150M", "2017", "22"), `sup` e.g. "+", `k` label |
| `story` | `{type, kick, title, params, steps}` | pinned diagram. `type`: `hub` (params `center`, `nodes`[3–8 labels]), `poles` (`left`, `right`, `result`), `climb` (`base`, `top`), `layers` (`caption`). `title` *html*. `steps`: 3 or 4 `{tag, title, text}`; `tag` ≤ 16 chars, `text` ≤ 45 words. All labels ≤ 18 characters |
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
