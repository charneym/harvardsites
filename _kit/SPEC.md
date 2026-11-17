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
- **Never say a site is done, ready or fixed unless you have looked at it.** Automated checks only catch problems that have been seen before. A layout can pass every check and still look wrong (a heading squeezed into five lines, a hover fill flush against text, a section floating in empty space). Before reporting a site as finished, do the visual review in §5b yourself. If something hasn't been checked, say so plainly.
- **Every fix must be checked on every site it touches.** Shared fixes have caused new bugs before (the loader timing change broke every hero background). After a site-wide change, record the affected moment on all sites and look at them.
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
- companies (or CEOs) I've already emailed
- anything a safety filter might block. An oncolytic-virus company was blocked mid-build and dropped.

Save the ranked list with sources and quoted evidence before building.

**Never pitch these again: I've already emailed them (from my sent mail).** Companies I built a site for but never emailed are fine to use. INIA Biosciences, Onvector, FBRA, Robigo, Quiver Bioscience, Caldera Therapeutics, City Therapeutics, HyperLight, LifeMine, Fieldstone Bio, Stipple Bio, Bambusa Therapeutics, CavilinQ, Broadway Bicycle School, AiM Medical Robotics, Anodyne Nanotech, Aurenar, Capital Concepts, Caravel Bio, CereVasc, Estrigenix, Expression Therapeutics, GelMEDIX, Inomagen, Jacsten, KaliVir, Leavitt Equity Partners, Life Seal Vascular, Longhouse Partners, Merakris, Numiera, Omega Ophthalmics, Remedium Bio, Retham Technologies, Riverlake Partners, Senticell, SereNeuro, Silver Peak Partners, Sinopia, Sunflower, Tempo, VeraMorph, Vincere, Vinci, Violet Therapeutics. Also skip the PE/advisory firms I contacted separately ("Harvard student interested in …"), e.g. 424 Capital, AGC, Ampersand, Artemis, Avista, Bowen, Brightstar, Clearhaven, Cohere, Consonance, Copley, Cornell Capital, Exaltare, Fort Point, Gamut, Gemspring, Heritage Holding, Hildred, JEGI LEONIS, Lee Equity, Long Ridge, Madison Park, Mill Point, New Heritage, New State, Nonantum, Provident, Shea & Co, Siris, Staple Street, SteelBow, Stellex, TAP Advisors, Tenex, Tully & Holland, Turnspire, Union Park, Webster, Yellow Wood.
Also skip: U.P. Oncolytics (blocked), Stem Pharm (same CEO as Retham), Antogen, Levee Medical, Linshom, Opal. Safety-filter blocked mid-build in the Nov 2026 batch (do not retry): Enable Life Sciences, Allinaire Therapeutics, Somatolynk, SelSym Biotech, Vecgen.
Also being built in a parallel session (do not pick or rebuild): materialize, channelrobotics, qualiaoto, synkopi, acqumen, headstrait, ciconia, flowmedical, bullseye, kinetitec, oralkleen, virchow, vegasurgical, enable-life-sciences, capienda, platform-therapeutics, intus, archean, koos, meteora3d; spares Parallel Robotics and EndoEvolve.
Built in the Nov 2026 batch (not yet emailed; do not rebuild): truecath, onvagus, origin-endoscopy, mark-therapeutics, immunebro, oak-therapeutics, romix, cellectgen, ridgeline, artificial-axon-labs, jillion, highland-instruments, vasoptic, elements-endoscopy, mucommune, fzata, via-therapeutics, haima, maxq, bridgesource, virtus.


## 2b. Private equity firms (a separate track; currently 50 of each batch of 150)
A PE firm must meet ALL of these rules:
1. **Who:** a US private equity firm (buyout, growth, search-fund-backed holding company, independent sponsor or family office that does control deals), small or lower-middle market. **Not** headquartered in New York, the Boston area or California (any other state is fine).
2. **Active:** evidence of activity in roughly the last 12–18 months: a closed fund, a platform or add-on acquisition, a new hire or a press release. Source it.
3. **Bad site, proven:** at least 3 quoted pieces of bad-site evidence (template look, broken or empty pages, outdated portfolio or team, no stated investment criteria, a one-page site, missing contact details, stale copyright year).
4. **Contactable:** a named managing partner, founder or principal.

**Drop:** polished sites, the firms already contacted (the PE/advisory list in §2), and any firm whose site or people cannot be verified.

## 2c. Biotech startups
Biotech/medtech startups can be anywhere in the US (no state restriction); everything else in §2 applies.

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


## 4b. Building a PE firm site
Everything in §4 (motion, loader, transitions, people list, quality bar) applies, adapted to a firm rather than a science company:
- **Pages:** Home (hero with the firm's thesis in one line, what they invest in, how they partner with owners, selected portfolio, team preview, news/insights, contact CTA); Approach or Strategy; Investment criteria (only figures they publish: revenue/EBITDA range, sectors, geography, deal types, check size); Portfolio (only real companies with real descriptions and links; current vs realised only if they state it); Team (people list from `_kit/components/masthead.html`, or portraits when they have real headshots); News or Insights (only real items with links); Contact (front-end form, office address).
- **Hero:** calm and editorial, no science visuals. A signature element tied to the firm (its region, sectors or name), e.g. a refined map of their home region, an abstract built from their sector icons, or typography-led composition. Never stock photography of handshakes or skylines.
- **Audience:** business owners selling their company and intermediaries (bankers, brokers). Lead with how they treat owners and what they look for; keep the copy plain and confident. Never invent returns, fund sizes, deal counts, testimonials or portfolio outcomes.
- **Brand:** evolve their logo and colours; finance sites suit restrained palettes (ink, bone, one accent from their logo).
- The report (§7) adds: firm HQ city/state, the managing partner's name and title, and the activity evidence.

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

7. Also run, one at a time, on every site (each must print OK or every flag must be judged a false positive after looking at it):
   `mixed-audit` (a section animates as a whole), `masthead-audit` (people lists), `polish-audit` (overflow, clipping, pop-ins, hover, links), `loader-audit`, `smoke`, `split-audit`, `balance-audit`, `clip-audit`, `unstyled-audit` (classes with no CSS), `cramped-audit` (headings squeezed into a narrow column), `hoverpad-audit` (hover fill flush with text), `bar-audit` (progress bars grow when their own row comes into view, never off-screen), and `prepush-check` before every push.
8. Title fit: at 1024, 1280, 1366, 1536, 1920, 2560 and 390 wide, no heading line runs past its box (a capped box clips the last word during the entrance).
9. Opening, recorded as video at 4× CPU throttle and on a throttled network, with real scrollbars: the loader clears fully, then the title (whole lines), its copy and the nav arrive together within ~0.6s, and the hero background fades and builds in after the loader, never under it. Nothing shifts sideways when the scrollbar appears.

### 5b. Visual review (mandatory, by eye)
Capture every page of the site (home and every sub-page) scrolled through, at 1440 and 390. Hide the transition layer (`#xc,#xt{display:none}`) in full-page captures, or it shows as a large block. Look at every section and check: nothing floating in empty space; headings wrap naturally (no 4–5 line stacks beside a big gap); every block has its intended styling; buttons are sized to their text; rows and cards align; hover fills leave space around their content; people rows are vertically centred. Fix, recapture, and look again. Only then report the site.

If a check is flaky because the machine is overloaded, re-run it when the machine is quiet. Never weaken the check.

## 6. Outreach (after sites are live)
- **Emails:** use Hunter.io for CEO emails. The API key is read from the environment variable `HUNTER_API_KEY` (never ask me to paste it): use Email Finder with the CEO's name and domain, then Domain Search if the CEO is unknown. Otherwise use emails listed on their site or in their releases. Otherwise use emails listed on their site or in their releases. Note confidence and catch-all status.
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

## 8. Scaling up (toward 150 sites a day)
- Build from the shared, tested section types in `_kit/components/` (people list: `masthead.html`). Don't hand-write a new version of a common section (section header, funding block, news rows, cards). Most defects have come from one-off copies of these.
- Roll out in stages: a batch of 5, which I score, then 20, then larger, and grow only once I'm finding nothing. Each batch report lists every site's gate results and states that the §5b review was done.
- Give every worker session an hourly resume task so a usage-limit stop doesn't stall it, and delete each task when its sites are done.
- Have a separate reviewer session, which didn't build the site, do the §5b review against `PRINCIPLES.md` before anything is shown to me.
