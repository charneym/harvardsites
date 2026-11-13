# Design and QA principles: HARD rules for every site
These came from the client's critiques over several batches. The newest are at the top. Every rule applies to every site. Paths like `kit/x.js` refer to the `_kit` folder of github.com/charneym/harvardsites.

# v13 (latest; HARD rules from the Nov 2026 batch review)
**BH. Zero cut-off glyphs, proven by pixels, not by eye.** Line masks (overflow:hidden / clip-path wrappers used for reveals) cut italic tails, swashes and descenders when the text is at rest (ImmuneBro "first-in-human.": the italic f tail was sliced off). Rules: (1) a mask clips ONLY while its reveal is moving: on the reveal's onComplete set the wrapper to `overflow:visible; clip-path:none` (or unwrap it); (2) masks get padding `.16em .14em .26em` with matching negative margins (italic/display serifs need the full amount); (3) never set `line-height` below 1.0 on a clipped wrapper. Gate: `node _kit/clip-audit.js <file> "<route>" 1440 900` and `... 390 844` on EVERY route (plus `--bios` on the people route) must print `OK`. Its INK check unclips each wrapper and compares pixels, so it catches what rectangles miss.
**BI. Bio overlays are a centred person sheet that scrolls with the wheel.** The right-edge drawer is retired (stylistically odd, and its long bios could only be scrolled by dragging the scrollbar, because Lenis swallows wheel events while stopped). Use `_kit/components/person-sheet.html`: a centred two-column sheet (portrait or typographic plate left, scrollable bio right) over a dimmed, blurred page, and a bottom sheet on mobile. The scroll column carries `data-lenis-prevent` plus `overscroll-behavior:contain`. Close returns to the page, Prev/Next use replaceState, Esc closes, focus is trapped. Gate: `node _kit/overlay-audit.js <file> "<people route>"` must print `OK`. ANY other scrollable panel (menus, modals, tables) also needs `data-lenis-prevent`.
**BJ. Use their real photos, the ones THEY would consider important.** Before designing, run `node _kit/photo-inventory.js <their site> <outprefix> <built file>` and LOOK at the contact sheet. Include every meaningful company image: team headshots (always), product/device photos, lab/facility/team-at-work photos, published figures/data images, event photos, partner/investor/award logos. Skip generic stock and AI filler (the tool flags likely stock). Treat photos as the brand would: consistent crops/ratios, the site's grade, imgfx reveal, onerror fallback. A product/device photo, when one exists, appears on the home page. Re-run the tool at the end: every UNUSED non-stock image needs a reason (duplicate, too small, off-topic), recorded in the dossier.
**BK. The palette comes from their logo.** photo-inventory prints the logo's pixel-sampled colours. Their main logo hue is the accent; its deep shade or a neutral is the base; tints and shades for hierarchy; never introduce a hue that is not in their logo or site (neutrals excepted). Record the mapping (`logo #a81878 → --accent; …`) in the dossier. A person who knows the company should recognise it instantly from colour alone.
**BL. One scene = one continuous animation.** When the pinned story's steps are states of the SAME scene (one device, one anatomy, one cell), build a single figure whose parts move, actuate, draw and morph along the scrubbed timeline (camera moves, the needle advances, the arms close, the catheter deploys), never separate near-identical figures cross-dissolving (TrueCath "Arm the vacuum" → "Deploy, single wall" flickered through fades). Cross-dissolve only between genuinely different scenes. Check the sfxshot frames: two ghosted copies of the same object in one frame = fail.
**BM. Hero composition is designed, not left over.** The text block, the visual and the header share one grid: the text column starts on the header's left edge, the visual is anchored to the opposite columns with a deliberate relationship to the text (overlap under a scrim, or a clear gutter), and empty space is intentional on BOTH sides at 1440 and 1920 (Fzata: art bled to the right edge while a wide dead band sat left of the text). Compare the 1920 and 1440 screenshots against the question "would Pentagram/Locomotive ship this exact composition?" and fix anything that reads as accidental.
**BN. A design critic signs off before anything ships.** After all gates pass, a separate reviewer (a fresh sub-agent given only the screenshots, the rule list and the company's original site screenshot) reviews every route at 1920/1440/390 plus the story frames and the person sheet, hunting for the client's past critiques: clipping, misalignment, accidental whitespace, missing photos, off-brand colour, slideshow-like stories, cramped or tiny elements, typos. Every finding is fixed or explicitly rejected with a reason. The client should never be the first to find a flaw.

**BO. Stroke draw-ins with `vector-effect:non-scaling-stroke` measure dash lengths in SCREEN units.** Compute `getTotalLength()` × the SVG's screen/viewBox scale, or the stroke renders as a stub plus a detached run (found on AAL and Highland). Also: screenshots for review must wait for the loader and transition cover to clear (`_kit/shot.js` now does); frames captured under load create phantom defects.

**BP. Grouped reveals finish fast.** A batched row (cards × figure/heading/role/link) must START within ~0.3s total: cap the batch stagger, and let each split heading lift the moment its trigger fires. Long stagger chains (16 × .07s) leave the last items mid-animation for 2s+ and fail reveal-audit. **No research scaffolding on the page:** never print source lines ("Sources: …", "Profile drawn from…") inside bios; provenance lives in the dossier. One template's source string leaked another company's name onto two sites.

# v12 (HARD rules)
**BF. Transition covers: one source of truth for position.** Never put `transform:translateY(101%)` in CSS and then animate yPercent with GSAP: the two add up (202%) and the cover never actually covers. Then the new page shows uncovered (background before text) and the cover flashes in and out. Set the starting offset with `gsap.set(cover,{y:0,yPercent:101})` only. Verify by recording the transition and looking at the frames: full cover with the page name, the content swaps under full cover, the cover slides smoothly off the top, and the title rises as it's uncovered.
**BG. Every colour in a site comes from that site's palette,** including shader constants in WebGL transitions and canvases that were copied from another site's template (a green transition shader was left inside a red brand).
**BE. Page transitions must survive everything.** Any callback that touches a view (scrubbed timelines, StoryFX, canvas hooks) must no-op once that view is torn down. The kit wraps eventCallback in try/catch, but the gate is `node kit/navtest.js <file>`: real header clicks from a scrolled home, between sub-pages, logo home, and browser back. It must print OK, with no JS errors and no blank page.
**BB. Reveals must fire IN VIEW in real scrolling.** Content after a pinned section used to reveal off-screen because its triggers were measured without the pin spacer. The kit now sorts ScrollTriggers before every refresh (build.js STFIX), but the gate is ground truth: `node kit/reveal-audit.js <file> "<route>" 1440 900` scrolls with real wheel input and compares every element before it enters the viewport with after it settles. It must print `OK` on every route. Sub-page first screens must animate in too.
**BC. Photos never rise, slide or wipe in.** Photos, headshots, logos and any card built around a photo fade in while settling from scale 1.035 to 1, in place, over about 1.35s with power2.out. The kit enforces this globally (imgfx.js, injected after GSAP). Never add y/x/clip reveals to images.
**BD. Pinned step sections are continuous, never a slideshow.** Figures cross-dissolve with rise, scale and a slight focus pull. Each figure's SVG builds in (strokes draw, fills grow, radially) and drifts gently while held. Stacked step text crosses over line by line; side-by-side steps brighten and lift continuously. A progress rail fills with scroll. Use `<!--@libs ... storyfx-->` plus `var fx=StoryFX({section,figs,steps}); tl.eventCallback("onUpdate",()=>fx(tl.progress()))` on the SCRUBBED timeline. No class-toggled instant swaps.

# v11 (client found these in the biotech batch; HARD rules)
**AZ. EVERYTHING animates in.** Every heading, paragraph, list item, step, card, stat, label/eyebrow, button, link-pill, image, figure, canvas, table row and footer column must enter with a reveal (masked line rise, offset-and-fade, or clip unmask) as it scrolls into view. This applies on every route, including sub-pages, bio overlays, inactive steps in pinned stories, and list/grid items (stagger them). Nothing may sit pre-rendered and static waiting for the user. The QA gate is `node kit/anim-audit.js <file> <route> 1440 900` on EVERY route, and it must print `OK`. Fix every line it reports. (A parent container may stay visible if its children animate.)
**BA. No count-ups, ever.** Never animate numbers from 0 (no "0", "$0.0M" or "0%" visible at any moment, including before the trigger). Stats reveal as their final value with the same masked rise as text. anim-audit flags any ZERO-VALUE COUNTER.

# ⛔ v10: REGRESSIONS THE CLIENT CAUGHT. Hard rules for EVERY site.
AW. **Test BOTH paths, every time.**
   - (a) First visit (fresh context, loader plays).
   - (b) Reload with the session flag set (loader skipped). Also check route changes.
   - In every path, every hero element (title, line, description, buttons) must END fully visible, with its reveal actually playing.
   - Elements hidden for rule AU must always have a tween that reveals them in every path, plus a failsafe: if anything is still hidden 2.5s after the page shows, force it visible.
   - Capture settled screenshots for both paths at 1440 and 390 and LOOK at them.
AX. **Reveals must never overlap neighbouring elements mid-animation.**
   - Masks must not use huge bottom padding that lets rising text paint over the paragraph below.
   - Use modest mask padding (about .18em bottom, enough for descenders), start offsets just past it, and an opacity fade synced to the rise. Or reveal lines with clip-path inset on the line wrapper.
   - Capture mid-animation frames to confirm nothing overlaps.
AY. **Never change approved layout or scale while fixing something else.** If a fix requires layout movement, keep the approved type sizes and proportions. Compare a before/after screenshot of the hero at 1440 and confirm that only the intended change happened.

---

# 🔴🔴🔴🔴🔴 v9 (apply to EVERY site)
AU. **Masked reveals must stay fully hidden before they play.** The AD mask padding (especially bottom padding) creates room inside the mask, so a line, word or char that starts at yPercent:100–120 sits partly inside the padded area and its tops peek out before the animation. That looks terrible.
   - Set the start offset beyond the padding: y = (1 + bottom padding + a little) × line height, e.g. yPercent:180 or y:'1.7em'.
   - Or use opacity 0 until the tween starts.
   - Verify with a frame captured in the 100ms before each hero and section reveal: nothing may be visible.
AV. **Hero CTAs sit inside the composed hero block.** Order: headline, sub-copy, buttons directly below the sub-copy. The whole block is vertically centred. Buttons must never float in a separate corner or collide with the scroll cue.

---

# 🔴🔴🔴🔴 v8 ROUND (apply to EVERY site)
AQ. **Cards in a row align.** Siblings share the same top edge. No staggered or offset columns (e.g. the middle card sitting higher) unless that is a real, meaningful layout.
AR. **No obvious meta-labels or counters** such as "3/2 focus areas", "01 / 06" or "6 items". They state the obvious; remove them.
AS. **Remove redundant marquees.**
   - A scrolling keyword marquee that repeats words already shown above or below, or that is oversized, reads as filler. Remove it.
   - Keep one only if it says something new, at a modest size. Default to removing.
AT. **Scroll and drag tracks must never jitter or go back and forth.**
   - If a drag/scroll track fights Lenis or ScrollTrigger (e.g. wheel input moving it both ways), replace it with a calm, non-scrolling layout: a grid, or rows with a grouped entrance.
   - Test with real wheel input in Playwright (mouse.wheel in small steps), checking that position only moves monotonically.

---

# 🔴🔴🔴 v7 ROUND: MORE CLIENT RULES (apply to EVERY site, with all rules below)
AD. **Zero glyph clipping anywhere.** Check every masked or overflow-hidden text wrapper, including SplitText masks, transition titles, bio headers and counters.
   - Descenders (g, j, p, y) must not be cut at the bottom.
   - Left and right overhangs (J, italic f, swashes) must not be cut at the sides.
   - Give masks padding on ALL sides (e.g. padding: .12em .1em .18em, with matching negative margins).
   - Scan screenshots of every route, every bio and the transition overlay for cut letters.
AE. **The loader-to-hero handoff is one clean continuous move.**
   - No flicker or back-and-forth between loader and hero.
   - Keep the hero canvas at opacity 0 until its first frame has rendered (after two rAFs), then reveal it once.
   - Never toggle visibility twice.
AF. **NEVER regress.** Fixing one thing must not remove existing polish.
   - Every heading, paragraph and section group must still have its refined entrance (rule G).
   - Before finishing, diff your build against your previous version to make sure no entrance or scroll animation was lost. Restore any that were.
AG. **Sub-page intros must sit deliberately on the grid.** Page title plus intro paragraph form one composed block: the same alignment axis (both left-aligned on the container edge, or both centred), a sensible measure (~52–62ch) and consistent spacing under the title. Never let the intro float in an arbitrary column.
AH. **Buttons use one sizing system site-wide.** Minimum height 48px (44px on mobile), consistent padding and type size. No tiny or mis-sized buttons anywhere ("Send a note" was tiny). Audit every button and link-button on every route.
AI. **CTA blocks need typographic hierarchy.** The key line ("Let's talk.") is the hero of the block. The supporting question is clearly secondary: smaller, wider measure, balanced wrapping, using the width well. No narrow, top-heavy stacks.
AJ. **Hero vertical composition is balanced.** Space the eyebrow, headline, sub-copy and CTA with intent, and centre the block optically in the space between the header and the bottom of the viewport. No cramped gaps (e.g. headline jammed under the eyebrow) or random leftover space.
AK. **Decorative markers align exactly.** Dots, ticks and progress heads on lines sit precisely on the line's start or current point, never floating ahead of it.
AL. **Cards with a primary action are fully clickable.** Use a stretched link over the whole card with keyboard focus styles, not just a small "Read bio" link.
AM. **Vertical centring in rows applies to every column,** including small labels such as state tags, badges and dates.
AN. **Text-only cards need sophisticated hover too.** No crude box or flat fill. Use refined moves:
   - a hairline drawing along the top edge
   - the name sliding slightly, with an accent underline drawing
   - an arrow easing in
   - a whisper-soft tonal gradient rising from the bottom
   - a subtle lift and shadow

   Elegant and quick, at the premier bar.
AO. **No redundant frames.** Don't box content with rules above and below when they collide with or crowd decorative elements (e.g. stat rows plus a heartbeat line). Remove the frame instead.
AP. **Backgrounds stay continuous.**
   - No solid rectangles sliding over a gradient background at the page end or in transitions.
   - Transition panels must fully clear.
   - The footer and end sections must keep their intended gradient or tone.

---

# 🔴🔴 v6 ROUND: MORE RULES FROM CLIENT CRITIQUE (apply to EVERY site, together with A–P below)
Q. **Spacing must breathe; never cramped.**
   - D's "consistent rhythm" doesn't mean tight. Section padding should be generous and premium (about clamp(112px, 14vh, 200px) top and bottom, equal).
   - Each distinct content group gets its own space: a sub-group such as the "four qualities" row under criteria needs its own breathing room and an entrance. It should never be crammed against the block above.
   - Account for visual mass: if a decorative element (waves, a drawing) makes a gap look bigger or smaller than it is, adjust so the *perceived* gap is right.
R. **Transition pacing.** Page transitions should feel unhurried and luxurious, about 1.6–1.9s total (cover ≈0.7s, title hold ≈0.4s, reveal ≈0.7s). Never rushed, never sluggish, never frozen.
S. **Loaders must never overlap their own elements.** Counter numerals must not touch or cross the progress line. Give them clear space and baseline alignment.
T. **Scroll-driven sections must be smooth on the FIRST pass.**
   - Integrate Lenis correctly: lenis.on('scroll', ScrollTrigger.update), gsap.ticker.add(t => lenis.raf(t*1000)), gsap.ticker.lagSmoothing(120,33). NEVER lagSmoothing(0): a heavy route swap then makes every animation jump ahead (transition cover vanishes in a flash, text desyncs from background).
   - Animate only transform and opacity, with will-change: transform on moving tracks.
   - No filter, blur, mask or clip-path animation on large moving elements.
   - No layout reads in onUpdate.
   - Pre-decode images (img.decode()) before the section is reached.
   - Pause the hero WebGL while it's off-screen.
   - Use anticipatePin: 1 and invalidateOnRefresh.
   - If a pinned horizontal track can't be made truly smooth, replace it with a non-pinned layout (refined grid or list, or a native-scroll drag carousel). Jank is worse than no gimmick.
U. **Accent and highlight colours must be legible on every background they appear on.** Use a lighter tint of the accent on dark sections and a deeper one on light sections.
V. **Remove filler.** Small secondary copy blocks with a hairline above them that just restate the section (e.g. "The name is the operating model…") should be cut. Anything kept gets its own space and an entrance animation. Nothing may "appear out of nowhere".
W. **Cards in tracks stay whole.** No crop-then-expand or clip reveals on track cards; they slide in fully formed.
X. **Scroll restoration must be INVISIBLE.**
   - Set history.scrollRestoration='manual'.
   - Keep the page covered or hidden (the quick reload fade or veil) until the position is restored and ScrollTrigger has refreshed, then fade in.
   - The user must never see the page at the top and then jump.
   - If the position can't be restored invisibly, don't restore it at all.
Y. **The footer must be visually distinct from the content above it.** Use its own background tone (e.g. deep brand colour) or a clear separating band, so contact and footer never merge into one large empty space. Keep the space above the footer wordmark proportionate, not excessive.
Z. **Alignment inside components.**
   - Logos are centred vertically and horizontally in their plates.
   - Hover backgrounds and highlights have padding on all sides, so labels and tags (e.g. "Present", "Previous") never sit flush against the edge of a hover fill.
AA. **No duplicated content across pages.** If the home page shows a component (e.g. the advantage wheel), the inner page presents that content differently and better, never the same thing twice on one page.
AB. **No layout shift after the loader.** Hero text must not move (e.g. "ealthcare" sliding into place next to "H").
   - Wait for document.fonts.ready before SplitText.
   - Split once.
   - Don't re-split on resize unless the width actually changed.
   - Animate only transform and opacity within fixed positions.
AC. **People hover reference: the client LIKES Leavitt's team-card hover.** Use it as the model on every site with portraits, adapted to each palette:
   - the card lifts about 6px
   - the photo scales about 1.045 inside its frame
   - a colour layer reveals over the grayscale via a circular clip-path expanding from the pointer position
   - a soft shadow deepens
   - the name shifts to the accent colour

   All over about 0.3–0.45s ease-out, starting instantly on pointer-enter.

---

# 🔴 v5 ROUND: NEW RULES FROM CLIENT CRITIQUE (applies to EVERY site, on top of everything below)
The client liked v4's spectacle ("amazing", "insanely good"), so KEEP it. These are polish failures the client found by hand. Each one is now a universal rule. Fix every instance on your site, even if the client didn't mention your site.

A. **CONTRAST IS NON-NEGOTIABLE.**
   - Every piece of text (headings, accent/italic words, body, buttons, nav/menu, footer, captions) must be clearly readable against what is ACTUALLY behind it, in every section and every animation end-state.
   - Examples of failures:
     - a dark accent word ("worth") on a dark background
     - white text over a busy, light photo or shader
     - a button whose label vanishes against its own fill
     - the fixed nav becoming invisible over light or mid-tone sections
   - The header must stay legible over EVERY section. Swap header colour per section (with ScrollTrigger toggles), or add a subtle backdrop.
   - Text over imagery always gets a proper scrim.
   - Verify it: write a script that, for every visible text element on every route at each scroll step, compares its computed colour with the nearest opaque ancestor background. Flag anything below WCAG AA (4.5:1 body, 3:1 large text). Then eyeball the screenshots, because shader and image backgrounds need a visual check.
B. **No empty or pointless elements.**
   - No blank strips or bands (e.g. a beige strip with nothing on it).
   - No vague static rectangles or "glass panels" that never change or say anything.
   - No leftover spacer sections.
   - Every visual element must carry content or meaning.
C. **No giant ghost or watermark text.** Remove ALL oversized background words ("Fifteen investments", "The firm", "The partners", etc.) floating behind or overlapping page content on any page. They read as a bug.
D. **Consistent vertical rhythm.**
   - Use one spacing scale for section padding (e.g. clamp(96px, 12vh, 160px)), with equal space above and below every section's content.
   - No huge gaps after quotes or CTAs.
   - Measure it: in screenshots, the space above a block ≈ the space below it.
E. **No harsh colour flips.**
   - Section background changes must never be sudden, blinding or flashy.
   - Avoid full-screen dark↔light snaps mid-section entirely.
   - Prefer keeping a section's background fixed. If a tonal shift is used, it must be small in tonal distance, eased and gentle.
   - No colour change for its own sake.
F. **Page transitions: continuous and polished.**
   - The sequence is: a cover moves in, the content swaps under full cover, then the cover moves out.
   - Motion never freezes or stalls (no "dynamic, then static" glitch), and there's no white flash or hard cut.
   - The next page's title appears promptly, within about 0.3s of full cover, and leaves with the cover.
   - Total ≤ about 1.4s. Test it by capturing frames every 80ms during a transition and checking them.
G. **Every section animates in cleanly.** Headings, paragraphs, stat or criteria grids, quotes, lists and CTAs all get a refined entrance (mask/line reveals, rises, fades), triggered at 'top 85%'. Nothing just sits static while other sections animate.
H. **Horizontal tracks only for real, concrete items** (companies with names, logos or photos).
   - Never use one for abstract categories or areas; use a calmer, richer layout instead.
   - Tracks must scroll buttery-smooth: ScrollTrigger scrub ~1, no snapping jank, sensible length, and no fighting with Lenis.
   - Long lists (≈15–20+) shouldn't force an endless scroll: use a compact grid or list with a nice entrance, or a shorter track.
I. **Counters.**
   - They must render correctly at EVERY width, including half-screen (~960px) and tablet. Never break, blank or show garbled digits.
   - In a range like "$1–20M", only the meaningful bound rolls ("20"); the "1" stays still.
   - Counters settle on exact final values.
J. **Hover states respond instantly.** They start on pointer-enter (no delay, no "appears after"), are clearly noticeable but refined (~0.3s ease-out), match the element bounds, and revert cleanly.
K. **Overlays and bios.**
   - "Close" closes the overlay entirely and returns to the page underneath.
   - Prev/Next replaces the current bio (history.replaceState), never stacking history.
   - Esc closes the overlay too.
L. **A reload keeps the scroll position.** If the user reloads mid-page, restore that position (save scrollY per route in sessionStorage on pagehide; restore after layout and after ScrollTrigger.refresh). Never jump back to the top.
M. **Text measure and alignment.**
   - Multi-line body paragraphs are left-aligned inside a centred container. No centred ragged paragraphs.
   - Use text-wrap: pretty for paragraphs and balance for headings, so there are no orphan or widow words.
   - Quotes get a comfortable measure (~22–34ch at display size). Never squished narrow columns or one word per line.
N. **Sizing restraint.**
   - Names in lists and grids are modest (e.g. 22–34px), with tight line heights (no tall, airy rows).
   - Vertical or stacked display letters are not oversized.
   - Timeline lines are fine hairlines (1px), never fat bars.
O. **The hero must look like a premier studio made it for a serious firm.** Refined, restrained luminance (not too bright, not toy-like), on-brand.
P. **QA widths now include 960x1080 (half screen) and 1024x768**, in addition to 1920, 1440, 1280, 768 and 390. Check every route at each, including the footer, which must be centred at every width.

---

# ⚠️ READ FIRST: v3 overcorrected. The client is furious that the sites "lost ALL the premier design, pizzazz and jaw-droppingness."

The principles below fix BUGS and TASTE. They do NOT mean "make it plain". Restraint means on-brand and bug-free, not minimal. The v3 sites became generic, quiet templates, which is a failure as serious as the v2 bugs.

**Required: bring back the full v2 spectacle, executed on-brand and flawlessly:**
- **A cinematic hero that stops people in their tracks.**
  - A rich, beautiful, clearly visible real-time WebGL scene: depth, light, motion and mouse reactivity.
  - It must be visually *impressive*, not a nearly invisible dark gradient with faint lines.
  - It still must be on-brand, professional (think luxury watch, Porsche, or Apple product-film quality), legible and cheap to run.
  - Pair it with dramatic display typography at big editorial scale (headline ~7–12vw on desktop, as in v2), with masked line or character reveals.
- **The preloader is a premium moment, and scrolling is LOCKED during it.**
  - Set html/body overflow:hidden, call lenis.stop(), and block wheel/touch/keys until it finishes; restore all of these afterwards.
  - Show it once per session; on reload, do a fast branded fade-in with scroll available immediately.
- **Scroll choreography (at least 4 moments, all bug-free):**
  - a manifesto paragraph that lights up word by word
  - a pinned storytelling section (no clipped text; settle each state fully)
  - a horizontal portfolio track
  - clip-path image or section unmasks
  - parallax depth
  - dark/light section inversions
  - a refined marquee at sensible size (~4–6vw)
  - scrubbed line drawings
  - counters
- **Page transitions:** curtain/panel wipes with the next page's title animating in.
- **Rich hover states** on cards, team portraits (grayscale→colour, slight scale) and buttons (magnetic is fine if reliable). Still no cursor-following popups or custom cursor labels.
- **Visual richness everywhere:**
  - film grain
  - fine hairlines
  - layered depth
  - generous but purposeful scale contrast between huge display type and small refined text
  - colour inversions between sections

Every section should have a reason to look at it.

**Benchmark:** if a partner at the firm wouldn't say "holy sh*t" on first load, it isn't done. 

---

# Design principles (v3, from client critique). These apply to EVERY site.

The client is sharp and critical. Each critique below came from one site but applies to all. Treat them as hard rules .

## Brand fidelity and professionalism
1. **Match the firm's existing brand.** The founders chose their logo and colours; keep them. Derive the palette from their logo and current site, e.g. a black/white/blue firm gets a black/white/blue site, and a monochrome firm stays essentially monochrome with at most one restrained accent. To find colours, ask WebFetch on the firm's pages for "hex colours in inline styles/CSS, theme-color meta, logo filename and alt" (use the allowed_domains WebSearch trick if needed), and use the client hints in your site notes. Evolve their brand; don't replace it.
2. **The hero background must suit a serious investment firm.** It should be restrained, calm and premium: something a bank, law firm or top-tier PE fund would run. No flames, slime, glowing lava, gamer neon, or monster-truck energy. Good options include subtle light fields, fine line work, slow gradients, refined topography, architectural light, and soft water or mist. It must fit their brand colours.
3. **Make the hero image-perfect and light to run.**
   - Render WebGL at devicePixelRatio (cap 2), so nothing looks blurry or low-res.
   - Add a tiny dither/noise to kill colour banding, and keep lines anti-aliased (fwidth/smoothstep).
   - Keep the shader cheap: no heavy raymarch loops, at most ~4 noise octaves. Pause when off-screen or the tab is hidden, and keep a static fallback.
   - Crisp SVG/CSS is a valid alternative.
4. **Text over the hero must always be legible.** Check every headline word against what sits behind it (e.g., a word over a bright moon or sun is unreadable). Move the bright element, add a soft scrim, or reposition the text.

## Layout and centering
5. **No section-number eyebrows or label gutters.** Remove "01", "(03)", "02 / THESIS", "01 —", "07 NEWS", "SHEET A-02" and similar. Never reserve a left column for a small label that pushes the real content off-centre. Content sits in a centred max-width container (e.g. 1200–1320px) with symmetric margins. A short heading above a section is fine if it is centred or aligned with the content.
6. **Everything must actually be centred, vertically and horizontally, at every size.**
   - Text inside cards, rows, pills and buttons is vertically centred, with equal padding top and bottom. It never touches or overlaps a rule or border.
   - Hero composition (title, description, CTA) must be deliberately aligned on a grid at 1920, 1440, 1280, 1024, 768 and 390 widths. Nothing should float in random spots or collide at large screens.
7. **Nothing oversized.**
   - Portraits are modest, e.g. a 4-up grid at desktop with each card about 260–300px wide; never giant.
   - Marquees and display rows stay reasonable; huge scrolling marquee text is out.
   - The footer wordmark must not clip.
8. **No clipped type.** Ascenders and descenders must never be cut off. Mask/overflow wrappers need padding or line-height room, especially for vertical stacked letters and SplitText masks. Check this in screenshots.

## Intentionality
9. **Every element earns its place.**
   - No decorative blank panels (e.g., a big "The Front Range" contour image).
   - No generic placeholder thumbnails or boilerplate template art.
   - No sections with nothing to say. If a news/updates section has only 1–3 items with no links, remove it or fold the facts into the About copy. Show news only if items link somewhere real (the dossier's URLs).
10. **Emphasis goes on the meaningful word.** Italic or accent styling should highlight the insight. For example, in "measured in decades", emphasise "decades", not "measured".
11. **Real photos or none.**
   - If the firm has real photos (headshots, portfolio photos, logos), use them: small sources get small, elegant presentation (logos on uniform plates, sized to their resolution), grayscale that blooms to colour on hover. The client likes this treatment.
   - If there are no headshots, do NOT make giant monogram or initial tiles. Use a refined text-only team layout: name, title, short bio, "Read bio".
   - Find every image the firm provides. Re-check their portfolio and team pages via WebFetch for img src URLs, because earlier dossiers may have missed some.

## Motion and interaction
12. **Show the preloader only when it's needed.** At most once per browser session: set a sessionStorage flag, wrapped in try/catch. Never on reload or route change; reloads go straight to the page with a quick fade-in. Keep it at 1.2s or less.
13. **No cursor-following image popups.** Remove all "hover a list row and a big logo or image follows the mouse" effects. Also remove contextual custom-cursor labels ("View", "Read bio", "Firm profile"); they get stuck. Use the native cursor, or at most a tiny, reliable dot. Nothing may ever stick to the mouse.
14. **Groups reveal together.** Team grids, card grids and stat rows fade/rise in as one group (or with a very small uniform stagger, ≤0.04s, in reading order). Never random or scattered timing. Avoid gimmicky "cards flying in" or stamped-plate animations; prefer refined fades, rises and mask reveals.
15. **Reveals must be reliable and consistent.**
   - Trigger a reveal when its section enters (start 'top 85%' or so), never after the user has scrolled past while the next section is already showing.
   - Call ScrollTrigger.refresh() after fonts load, images load (debounced), route changes and pinned-section setup.
   - Every section gets the same quality of entrance; none should sit static while others animate.
   - If reveal-on-scroll is risky for a section, show it immediately.
16. **Keep hover affordances tight.** No hover boxes that extend beyond their row or linger after the pointer leaves. Hover states must match the element bounds exactly.

## Responsive QA (mandatory before you finish)
- Use `node kit/shot.js <file> <prefix> <w> <h> "<route>" <steps>`.
- Check every route at 1920x1080, 1440x900, 1280x800 and 768x1024, and at 390x844 with scroll steps. Also run one sweep at width 1024.
- View the screenshots and fix anything off-centre, colliding, clipped or overflowing, e.g. the "Start a conversation / Contact us" CTA breaking at small widths.
- Run a script check for horizontal overflow (document.documentElement.scrollWidth > innerWidth).
- Check a reload with sessionStorage set, to confirm the loader is skipped.
- Report what you verified.
