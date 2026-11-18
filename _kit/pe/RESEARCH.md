# Research subagent prompt (PE template)

Spawn with `Agent(model: "sonnet", subagent_type: "general-purpose")`, ONE per firm, and paste the block below with the
three placeholders filled. It returns the path of the JSON it wrote. Expected cost: ~25–35 tool calls.

---

You are the researcher for a concept website of a US private equity firm. Produce ONE file,
`_kit/pe/data/<SLUG>.json`, that follows `_kit/pe/schema.md` exactly (read it first, then read
`_kit/pe/data/watchtower-capital.json` as the model of a finished file). Firm: **<FIRM NAME>**, slug `<SLUG>`,
site `https://<DOMAIN>/` (from `_kit/sourcing/registry.csv`). Work in the repo at /home/user/harvardsites.

Hard rules
1. **Never invent a fact.** Every name, title, figure, company, date, criterion and quote comes from their site, a
   press release (prnewswire.com, businesswire.com, globenewswire.com) or a credible news page. Add each to
   `sources` as `{fact, url}`. If something is unknown, leave the field out: sections disappear cleanly.
   Copy you write yourself (headlines, lede, story steps, CTA) must only restate sourced facts in plain words.
   Do not invent returns, fund sizes, deal counts, testimonials, client quotes or outcomes.
2. Browser jobs go through the lock: `flock /tmp/pw.lock node …`. Many sites block curl; use Playwright.
3. Do not edit anything except your JSON file. Do not commit.

Steps
1. Crawl: `flock /tmp/pw.lock node _kit/sourcing/deep.js <DOMAIN> /tmp/claude-0/deep` then print the page texts
   (`node -e` over `/tmp/claude-0/deep/<DOMAIN>.json`, key `pages`).
2. Probe the team, portfolio and news pages for images, links and colours:
   `flock /tmp/pw.lock node _kit/pe/probe.js <url> [<url>…]` (prints IMG src|alt|size, A href|text, COLORS).
   Team bios often live on per-person pages or in modals; portfolio details on per-company pages or AJAX modals:
   open them (a small Playwright script that visits each URL and prints `main.innerText` is fine).
3. Releases: fetch the news items they link (and search prnewswire for "<FIRM NAME>" if their news page is thin) to
   confirm dates, the managing partner's title, deal types and add-ons.
4. Verify every image URL you put in the JSON returns 200: `curl -s -o /dev/null -w "%{http_code}" <url>`.
   Logo: find the header logo file. Download it and LOOK at it (Read the PNG; composite on a dark/light ground with
   PIL if it is white or transparent) to decide: `logo.url` (+ `invert:true` if it is dark and the base is dark),
   or a faithful inline `logo.svg` redraw if it is a raster that won't read on the chosen ground, or `logo.text`.
   If their mark is a simple geometric shape, trace it as an SVG path for `hero.module:"emblem"` (`path`, `box`).
5. Palette: from COLORS and the logo pick `ink` (darkest brand colour), `accent` (one brand colour), `paper`.
6. Choose the variant: `fonts`, `layout.base/order/shape`, `hero.module` (see the table in schema.md: tie it to the
   firm's name, logo, region or sectors; for `network` use real portfolio/office coordinates only),
   `story.type` and its labels. Pick a combination that differs from the last few sites (`ls _kit/pe/data`).
7. Write the JSON. Then run `node _kit/pe/gen.js _kit/pe/data/<SLUG>.json` and fix anything it rejects.

Also collect for the builder's report (put them in a final message, NOT in the JSON or the repo; the repo is public):
- HQ city/state; the managing partner / founder (full name, title, source URL)
- every email address found (source URL each)
- activity evidence in the last 12–18 months (date + URL)
- 3+ quoted pieces of bad-site evidence from their current site (e.g. a near-empty home page, stale © year,
  a portfolio of logos with no text, no criteria, missing contact details, reused stock images) with the URL

Return: the JSON path and that report (under 200 words).
