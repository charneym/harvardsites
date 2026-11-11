# Spec: premium concept websites for recently funded biotechs

Paste this whole file into a new chat as the brief. Everything the build needs is in the GitHub repo **charneym/harvardsites**:
- `_kit/`: the build tool, motion libraries and QA scripts
- `_kit/PRINCIPLES.md`: every design rule the client has set
- `_kit/reference/sunflower.src.html`: a complete, approved reference site

---

## 0. Who I am and how to work with me (read first)
- I'm Max Charney, a Harvard undergraduate. I build free concept websites for small, recently funded companies with weak websites, then cold-email the CEO. A real site is about $2k.
- **Don't make me approve each site.** Research, build, QA and publish on your own, then show me each site (send the HTML file) as soon as it's finished.
- **Maximum quality, no compromise, and fast.** Use parallel sub-agents, about 3 sites per agent. Run Playwright jobs one at a time inside each agent, because many browsers at once overload the machine and break timing-based checks.
- **Remember every critique and turn it into a rule for all sites.** When I criticise one site, fix that issue on every site and add a rule to `_kit/PRINCIPLES.md`.
- When you fix a site I've already sent to clients, push it to the **same** folder, so the URL I emailed stays the same.
- Web searches are capped per session, so use them sparingly. Prefer one `allowed_domains` search per company, then WebFetch its pages and its funding release.

## 1. Setup
```bash
git clone https://github.com/charneym/harvardsites.git && cd harvardsites/_kit && npm i
# Playwright + Chromium must be available (preinstalled in Claude cloud sessions; otherwise: npx playwright install chromium)
```
- **Build:** `node _kit/build.js src/<slug>.src.html <slug>/index.html`
- **Markers in the source:**
  - `<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->` inlines GSAP 3.13, Lenis and StoryFX. It also auto-injects two global fixes: the ScrollTrigger sort fix and imgfx, the photo-reveal rule plus safe callbacks.
  - `/*@fonts Name:300,400,400i; Other:400,500*/` inlines woff2 fonts from @fontsource. Use at most 5 font files, and `npm i @fontsource/<kebab-name>` first.
- **Output:** one self-contained HTML file per site, with no external dependencies except hotlinked company images. Each image needs an onerror fallback.
- **Publish:** put the output at `<slug>/index.html` in the repo, then commit and push to `main`. The live URL is `https://charneym.github.io/harvardsites/<slug>/`. GitHub Pages takes about 1–2 minutes to deploy, so tell me to hard-refresh.

## 2. Choosing companies (strict; I want companies that genuinely need a new site)
A company must meet ALL of these rules:
1. **Money:** a small US biotech, therapeutics, diagnostics or medtech company with new funding verified from a release or credible news, within about the last 6 months. Seed, Series A, SBIR/STTR Phase II, DARPA/BARDA and similar all count. The amount must be disclosed.
2. **Bad site, proven:** at least 3 quoted pieces of bad-site evidence. Examples:
   - template leftovers ("blog-post-title-one", "New Page", lorem ipsum)
   - placeholder stats
   - no team page or no news
   - an outdated round
   - a broken or old domain
   - a thin one-pager
   - a Wix/Squarespace default look
   - no explanation of the science
3. **Why now:** their positioning implies they need a better brand right now (new round, rebrand, upcoming partnering or fundraising, a new programme).
4. **Contactable:** the CEO or founder can be named.

**Drop:**
- sites that are already polished
- companies outside the US
- funding outside the window or with an undisclosed amount
- companies whose CEO already got a site from us
- anything a safety filter might block. An oncolytic-virus company was blocked mid-build and dropped.

Save the ranked list with sources and quoted evidence before building.

**Already done, never repeat:** abram, aeris, aim, anodyne, atticus, aurenar, brainspec, caravel, cavilinq, ceretype, cerevasc, dacapo, deck-bio, enclear, estrigenix, expression, gelmedix, goldenrod, heranova, holobiome, inomagen, jacsten, kalivir, lifeseal, longhouse, merakris, modulight, numiera, omega, phoenixnest, remedium, reprogram, retham, reveal-pharma, rxmp, sanaheal, saros, senticell, sereneuro, sinopia, sunflower, tempo, veramorph, veritas, vincere, vinci, violet-therapeutics/violet-tx, plus the PE sites (riverlake, leavitt-equity, capital-concepts, silver-peak). **Already emailed with a website pitch (from my sent mail; never pitch again):** INIA Biosciences, Onvector, FBRA, Robigo, Quiver Bioscience, Caldera Therapeutics, City Therapeutics, HyperLight, LifeMine, Fieldstone Bio, Stipple Bio, Bambusa Therapeutics, CavilinQ, Broadway Bicycle School, AiM Medical Robotics, Anodyne Nanotech, Aurenar, Capital Concepts, Caravel Bio, CereVasc, Estrigenix, Expression Therapeutics, GelMEDIX, Inomagen, Jacsten, KaliVir, Leavitt Equity Partners, Life Seal Vascular, Longhouse Partners, Merakris, Numiera, Omega Ophthalmics, Remedium Bio, Retham Technologies, Riverlake Partners, Senticell, SereNeuro, Silver Peak Partners, Sinopia, Sunflower, Tempo, VeraMorph, Vincere, Vinci, Violet Therapeutics. Also skip the PE/advisory firms I contacted separately ("Harvard student interested in …"), e.g. 424 Capital, AGC, Ampersand, Artemis, Avista, Bowen, Brightstar, Clearhaven, Cohere, Consonance, Copley, Cornell Capital, Exaltare, Fort Point, Gamut, Gemspring, Heritage Holding, Hildred, JEGI LEONIS, Lee Equity, Long Ridge, Madison Park, Mill Point, New Heritage, New State, Nonantum, Provident, Shea & Co, Siris, Staple Street, SteelBow, Stellex, TAP Advisors, Tenex, Tully & Holland, Turnspire, Union Park, Webster, Yellow Wood.
Also skip: U.P. Oncolytics (blocked), Stem Pharm (same CEO as Retham), Antogen, Levee Medical, Linshom, Opal.

## 3. Research (accurate; never invent)
- Use WebSearch with `allowed_domains=[their domain]`, then WebFetch their pages, the funding release and credible news.
- **Collect:**
  - mission
  - science and mechanism
  - platform and pipeline (programmes, indications, stage)
  - team and board with titles and bios (plus headshot URLs)
  - investors and the round
  - news items with URLs
  - partners
  - location and contact
  - logo URL and brand colours (hex values from CSS, theme-color, logo)
- Save a dossier per company.
- **Facts must match sources exactly.** Unknown means leave it out. Never invent data, results, quotes, trial outcomes or people. Paraphrasing marketing copy is fine.

## 4. Build
**Read `_kit/PRINCIPLES.md` in full first.** Every rule in it is a hard requirement the client found by hand. Study `_kit/reference/sunflower.src.html` and reuse its proven systems:
- the loader warm-up
- the reload veil with invisible scroll restore
- masked line reveals with correct padding
- the 2.5s failsafe
- the button system
- the page-transition cover
- the global reveal helper
- StoryFX in its pinned section

**Concept per company:**
- **Signature hero:** a composition unique to that company's mechanism, beautiful and scientifically credible. Calm, premium, no neon or sci-fi clichés. Never reuse a generic ring, orb or comet across companies. Hero text gets a calm scrim over any busy visual.
- **Pinned "how it works" story:** 3–5 steps explaining the science clearly to an investor.
- **Brand:** evolve their existing colours and logo, never replace them. If their palette is garish, use a refined neutral base with their colour as the accent. Every colour, including shader constants, comes from their palette.
- **Pages (hash routing):**
  - Home: hero, mission, science story, pipeline/platform, team preview, investors/news, CTA
  - Science/Platform
  - Pipeline (only if programmes exist)
  - Team: bio overlays; Close returns to the page, Prev/Next uses replaceState, Esc closes
  - News (only items with real links)
  - Contact: a front-end form with a thank-you state
- **People:** if a headshot is missing, show a refined text card, never monogram tiles.
- **Mark it as a concept:** add `<meta name="robots" content="noindex,nofollow">`.

**3D (for the more ambitious heroes): it must look insanely sharp AND run smoothly on any computer.**
- Pre-render (bake) the scene offline, e.g. three.js in Playwright, into a WebP frame sequence (Apple-style).
- Render frames at **at least 2× their display size**, at WebP quality ≥ 0.90, with dithering to kill banding and plenty of anti-aliasing. Embed them as data URIs.
- At runtime, only `drawImage` the frames at native devicePixelRatio. Drive them with scroll, an idle drift and a light pointer response.
- **NEVER lower resolution or devicePixelRatio on slow machines.** The client was emphatic: picture-clear on every computer.
- Verify by zooming into 2× DPR crops at 1920 and 1440 widths. You should see no blockiness, banding or jaggies.
- Keep the whole frame sequence fully on screen at every width.

**Motion (non-negotiable):**
- **EVERYTHING animates in as it scrolls into view, on every page:**
  - headings, paragraphs, list items
  - cards, stats, labels
  - buttons, images, figures
  - table rows, footer columns
- Build ONE global reveal helper that auto-applies to all of these, with staggers for groups, and triggers when an element enters the viewport (about 85–90%).
- **No count-ups.** Stats rise in at their final value, and their captions reveal after the numbers.
- **Photos** fade in while settling from scale 1.035 to 1, in place. They never rise, slide or wipe in (enforced by imgfx).
- **Pinned step sections are continuous, never a slideshow.** Use StoryFX: `var fx=StoryFX({section,figs,steps}); tl.eventCallback("onUpdate",()=>fx(tl.progress()))` on the **scrubbed** timeline.
  - Figures cross-dissolve while their SVG strokes draw in.
  - Step text crosses over line by line.
  - A progress rail fills as you scroll.
  - On mobile, the steps stack in one slot and cross-fade.
- **Page transitions:**
  1. A cover in the brand colour slides up over the page with the page name rising in it.
  2. The content swaps under full cover.
  3. The cover slides smoothly off the top while the new title rises as it's uncovered. Never a flash, and text never before its background.
  - Set the cover's off-screen offset with `gsap.set(cover,{y:0,yPercent:101})` only, never a CSS translate as well.
  - About 1.6–1.9s total.
- **Lenis + ScrollTrigger:** `lenis.on('scroll',ScrollTrigger.update)`, `gsap.ticker.add(t=>lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(120,33)`. **Never lagSmoothing(0).** Don't combine Lenis with CSS scroll-snap.
- **Callbacks after teardown:** any callback that touches a view must no-op after the view is torn down.

## 5. QA gates (every site must pass all of them before you show it to me)
Run each on every route (home plus every sub-page) at 1440×900, and the home page at 390×844:
1. `node _kit/reveal-audit.js <file> "<route>" 1440 900` must print `OK`. It scrolls with real wheel input and confirms every element animates while in view.
2. `node _kit/anim-audit.js <file> "<route>" 1440 900` must print `OK`. It checks that everything is pre-hidden and that there are no zero counters.
3. `node _kit/navtest.js <file>` must print `OK`. It clicks the menu from a scrolled home, moves between sub-pages, goes home via the logo and uses browser back, failing on any JS error or blank page.
4. `node _kit/sfxshot.js <file> "<pinned section selector>" <outprefix> 12`, then LOOK at the frames. You must see mid-blend transitions, with no hard swaps and no blank stage.
5. Record a page transition (Playwright `recordVideo`, then extract frames with ffmpeg) and look at it: full cover with the title, a smooth exit, and text after its background.
6. Screenshots via `node _kit/shot.js <file> <prefix> <w> <h> "<route>" <steps>` at 1920, 1440, 1280, 1024, 960×1080, 768 and 390. Check both first visit and reload, plus mid-animation frames.
   - nothing overlaps, peeks, clips glyphs, overflows horizontally or sits off-centre
   - contrast passes WCAG AA against what's actually behind the text
   - the mobile hero is settled when the loader hands off
   - stats sit inside the gutter
   - no duplicate or filler stats
   - no orphaned captions
   - WebGL sprites have no square edges (check a 2× crop)

If a check is flaky because the machine is overloaded, re-run it when the machine is quiet. Never weaken the check.

## 6. Outreach (after sites are live)
- **Emails:** use my Hunter.io account (Harvard login, few searches left) for CEO emails. Otherwise use emails listed on their site or in their releases. Note confidence and catch-all status.
- **Mailmeteor CSV** columns: `Email, Greeting, Company, URL, Notes`.
- **Greeting** is formal: `Dr.`/`Mr.`/`Ms.` + surname. Use Dr. only if they hold a PhD or MD.
- **First email (exact template; no fee quote, no extra lines):**
```
Subject: Quick question from Harvard student about {{Company}}'s website

Dear {{Greeting}},

I'm Max Charney, an undergraduate at Harvard College.

I love creating websites, and just put together a new concept idea for {{Company}}. If you have the time, I'd be very grateful if you could take a look at it: {{URL}}

The colors and content are just my first take, and I'd be happy to adapt everything to your brand.

Would this be of interest, or perhaps would you be open to a quick call about it?

Thank you very much and best regards,
Max Charney
914-200-8081
Schedule a meeting: https://calendly.com/maxcharney/30min
```
- **Follow-up 1:** about 3–4 days later, as a reply in the same thread. A short nudge with the URL and an offer of a 15-minute call.
- **Follow-up 2:** about a week after follow-up 1. A one-line close-the-loop.
- **Timing:** send Tuesday–Thursday mornings in the recipient's time zone.

## 7. Report per site (under 120 words)
Include: the live URL, the concept, the signature moments, content gaps (anything unknown that was left out), and which QA gates passed.
