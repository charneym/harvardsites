# Design and QA principles: HARD rules for every site
These came from the client's critiques over several batches. The newest are at the top. Every rule applies to every site. Paths like `kit/x.js` refer to the `_kit` folder of github.com/charneym/harvardsites.


# v24 (coordinator review, 2026-11-25)

**DX. Multi-column rows stack on phones; no squeezed columns.** Found on crystalgmbh, gctool and lilotree. On a 390 phone the product/pipeline rows kept their desktop columns because a desktop grid rule was declared after the phone rule and overrode it. The result: the small category label sat on top of the product name, names wrapped one word per line in a column about 60px wide, long German words overflowed into the description, and descriptions became narrow two-word columns. Below about 860px, every multi-column row (products, pipeline, team, news, specs, references) must stack full width in one column, in the order label, name, description, link. Put phone overrides after the desktop rules, or scope the desktop rules with min-width. German and other long-word copy gets `hyphens:auto; overflow-wrap:anywhere`. GATE: `node _kit/tools/squeeze.js SLUG` (and `SLUG 768`) must print OK. It flags text in a column narrower than 40% of the viewport, text squeezed to under 14 characters per line, and text boxes that overlap.

# v23 (client critique, 2026-11-23)

**DW. Content is visible by default; whitespace is earned.** Client on limaxbio v6: sections showed numbered rows and "Funded by" labels with NOTHING beside them. Their reveal animations never fired in a real browser, so content stayed at opacity 0. Never make opacity:0 the resting state of content; animate in only as progressive enhancement. Also: no section of tall empty rows, no text squeezed into a narrow column with a wide void beside it, and no two sections in the same visual form (e.g. two numbered lists back to back). Gate: `node _kit/tools/hidden.js SLUG` after a fast scroll must list nothing except inactive story steps; check by eye at 1920 after a fast scroll.

**DV. Every line of text is readable on its own ground.** Found on lionixinternational: News headlines and the Contact address were invisible, bone text on a bone section, because a section's theme class didn't match the styles copied in for it. When you move or restyle a section, its text colours must follow its ground. Gate: `node _kit/tools/contrast.js SLUG` (and again at 390) must print "OK". It scrolls the whole page and flags any visible text under 3:1.

**DU. No raw HTML entities on screen.** Found on akyso: the team list showed "Adrienne O&#8217;Reilly" because an entity-encoded string was inserted as text. Write real characters (’ – é) in content.js, never entities. Gate: `node _kit/tools/entities.js SLUG` must print "clean" (it checks the visible text of home and every build-out route).

**DT. Heroes are never alarming, and every site keeps the standard build-out.** Client on limaxbio v3 (tissue with a bleeding cut sealed by a gel patch): "confusing (and even alarming) and unsettling and unsatisfying". No wounds, cuts, blood, gore, diseased organs or injured bodies in the hero; show the product or material itself, calm and premium, ideally echoing the firm's own brand imagery. The client also asked "why is there no coming up animation when clicking on pages? why is the home design not in back of other pages' tops?": bespoke and priority builds must still use the template build-out (wipe and reveal on every nav click, with the hero ghosted large behind each page head). Gate: buildout-test, plus a by-eye check of one page mid-transition and settled.

**DS. The hero must read instantly as one calm, recognisable object.** Client on limaxbio: "the home / top design is kind of weird / odd / offputting". The hero was a rounded glass box full of a chaotic neon wire tangle; it read as tangled cable or a die, not a hydrogel. A visitor should name the subject in under a second. Prefer a single clean form with realistic material (glass, water, metal, tissue) and restrained light over busy abstract wireframes, glowing scribbles or "network" spaghetti. Show internal structure only as subtle texture. If it looks like a screensaver, redo it.

# v22 (client critique, 2026-11-22)

**DR. The loader, the story scene and every animation must be flawless frame by frame. Small breakages lose leads.** Client critique on sent sites: turnerscientific's loader stacked "Turner" one letter per line (a `display:flex;flex-direction:column` wrapper turned each SplitText char into its own row); story labels sat on top of drawn strokes and icons ("ROUND WINDOW" under the drop icon); pharmacoidea's loader logo was a faint, thin, etched-looking outline; biredimaging's drawn white curve stopped short of its end point at top right. Rules:
1. **Loader wordmark** renders on one line exactly as the logo does (plus its descriptor line if the logo has one) at 1440 and 390 in every frame. Never put SplitText chars inside a flex/grid container; use `display:inline-block` wrappers and `display:block` for a second line.
2. **Loader logo** is the firm's real mark, crisp and solid at full brand colour/weight, at least ~56px tall, never a hairline-stroked trace, low-opacity ghost, thresholded/"etched" raster or upscaled blurry PNG. If their mark is only a raster, use it at native size or redraw it as clean filled SVG paths.
3. **No text collides with anything.** No label, caption, number or heading may touch or cross a stroke, icon, dot, curve, image or another text in any frame of the loader, hero or story, at 1440, 1920 and 390. Labels get ≥8px clear space; on phones reposition or drop labels rather than let them collide.
4. **Every drawn line finishes, in Safari too.** Animated strokes (dash-offset draws, progress curves) must reach their real end points at the end state; check the final frame of each animation, at every width. Safari measures dashes on `vector-effect:non-scaling-stroke` paths in screen units, so a draw-in dash of getTotalLength() stops short there (the client caught this on biredimaging; Chromium does not show it). Never dash-draw a non-scaling-stroke path: either drop non-scaling-stroke and scale the width by 1/CTM, or include `_kit/lib/nssfix.js` inline before </body> (it does that automatically).
5. **The story keeps its state after a layout refresh.** ScrollTrigger.refresh() (fired when lazy images load or the window resizes) redraws a scrubbed story at step 1 unless the ScrollTrigger has `onRefresh:function(st){tl.progress(st.progress);tl.eventCallback("onUpdate").call(tl)}`. Every pinned story needs it.
6. **Gate:** run `node _kit/tools/textclash.js SLUG` (flags stacked loader wordmarks and text over graphics, writes crops to /tmp/tc_SLUG) and look at every crop; then look by eye at loader frames (~0.3s, 0.8s, 1.5s) and at every story step at 1440 and 390. Fix everything before reporting.

# v21 (coordinator review, 2026-11-21)

**DQ. Every hero is unique to its firm, and the headline never crowds the nav.** Coordinator review (vasculonics): the same NCI T-cell SEM was the hero on three concept sites, and the eyebrow sat right under the nav with an oversized H1. Before choosing a stock/agency photo, grep the repo (`grep -rl <photo-id> */index.html`) and never reuse a hero image another concept already uses; prefer a render of the firm's own molecule, device or mechanism. Keep the H1 at the scale of the reference builds (no more than ~4 lines at 1440) and give the hero text block clear headroom below the nav (eyebrow at least ~90px below the nav bar), vertically centred in the hero at 1440 and 1920.

# v20 (coordinator review of home-only batch, 2026-11-20)

**DP. A hero photo is never a pasted panel, and never touches the headline.** Coordinator review (imcarebiotech, omnecoil): a photo dropped in as a feathered rectangle that fills the right half reads as a pasted box, and it was soft, washed by a flat duotone, and butted against the H1. Leave at least 100px between the measured H1/lede end and the first visible pixel of the subject. Show the subject whole inside the right content margin, at or below the source's native resolution (sharp, never upscaled). Use a long eased radial/edge mask so no box edge is perceptible at any width. Keep tonal depth (no flat single-hue wash). If no sharp photo fits that space, use a crafted render of the product or mechanism instead. Check: a screenshot with luminance boosted x6 shows no straight edge around the image (the image ground must equal the page ink exactly, or be real alpha).

**DO. Hero subject composed in the open area, fully in frame.** Client (GarMark at 1920): "the tower should be a bit more left". At 1280-1920+ the photo/render subject sits centred in the space right of the text (~62-75% of the width), never cut by the right edge or the nav, never darkened into near-black; the scrim lives only behind the text. Check 1920x1080, 1920x930, 1440, 1280.

**DN. No empty columns beside a statement.** Client: an off-centre 66% statement and then a label-left/statement-right split both read as "way too much white space". The statement and the stats share the row on desktop: statement left (~60%, readable 45-75 char lines, never giant), stats stacked in a column on the right. Never a lone statement with an empty column, never a full-width wall of display type.

**DM. The loading screen is the first impression: every word on it must read.** Client: Objective Bio's loader showed "Biology in" near-white on white ("that's the first impression the CEO gets"). Cause: the loader's .pc class collided with the product-card .pc rule (white background). Never reuse a short class name for two components; scope loader classes under #pre. Gate: _kit/loader-contrast-audit.js (no loader text under 3:1) on every build.

**DL. Fill the screen sensibly at every width; nothing overlaps.** Client (finatem at ~1920): "too narrow and leave way too much white space ... maybe their text should be smaller on smaller dimensions?" Containers widen at large screens (to ~1600px at >=1800), statement blocks align to the grid instead of floating as a narrow off-centre column, display type scales down gently at 1024-1366 and on phones, and stat numerals always fit their column (no "€ 10–50 Mio23"). Check 1280/1440/1920/2560/390.

**DK. Build-out pages look like the real sub-page.** Client: "shouldnt the transition pages still have the text and stuff on the transition page that it used to have? ... it shows what theyd get and we already have template for that." A nav click on a home-only site runs the full-site route transition into a real sub-page (sub-page hero with eyebrow, H1 and lede, then the matching home section's own content), and ends with the concept note ("I'd build out this page and the rest of the site..."). Never a bare notice page. Implemented once in _kit/lib/buildout.js.

**DJ. Hero art never shows a seam.** Rendered or photographed hero art must feather into the page ink on every edge that falls inside the viewport (or fill the canvas with the art's own ground colour). A visible rectangle edge (vertical or horizontal) makes it read as a pasted box. Seen on cg-scientific and enyxtherapeutics. Check at 1440, 1920 and 390.

**DI. Nothing bright or busy behind the H1 or lede.** Place the subject right of ~45-50% width (shift or crop the photo, fit the render) and/or use a strong ink scrim over 0-55%. Sunlit clouds, lit coils, lens plates or a white lab coat behind the headline all failed review (waconacapital, dotyscientific, steaminstrumentsinc). A crafted render must look like a real material object; clay/toy shading fails (coramtechnologies), so use a real Unsplash/Pexels photo of the subject instead.

# v19 ( client review of batch 2026-11c, Blackford Capital)

**DH. Portfolio rows animate their rule on hover.** Client: "going forward I like it when on hover over portfolio companies there's a bit of a hover animation on the line." Every portfolio/holdings row (and similar list rows) has a divider line that animates on hover: e.g. the accent colour draws across the rule left-to-right (~0.4s ease-out) and retracts on leave. Keep it inside the row bounds (rule 16).

**DG. Illustrated scenes must beat the original's professionalism, and skylines rarely do.** Client: illustrated city scenes (Shorehill's skyline, BlueRock's bridge) "just don't seem too professional, and not as professional as the original sites", whereas Burlington's freighter "looks professional/good", and Greendelta and OceanM19 "could be good". The fake scene is fine when the original site was weak and had no real photography of buildings, people or places. When the original HAS real professional photography, a cartoon scene reads as a downgrade: use their real photography (full-bleed, colour-graded to the palette, with a refined overlay) or a restrained single-subject illustration at Burlington quality. Generic downtown skylines are the weakest choice; prefer one specific, well-lit subject (a vessel, a building, a landscape, a tree) with depth and atmosphere, rendered with painterly restraint, not toy-like flat shapes.

**DE. Boxed corners.** Client: "I prefer boxed corners to rounded -- it's more professional." Buttons, CTAs, nav contact button, tags, cards, inputs and form fields use square corners (border-radius 0, at most 2px). No pills, no rounded cards.

**DF. Footer wordmark stays legible.** Client on Firelight: the fire behind the footer "FIRELIGHT" wordmark "makes the text of the title a bit difficult to see." Any art echoed in the footer sits behind or beside the wordmark at low contrast, never crossing its letterforms at a strength that hurts legibility (wordmark-to-background contrast ≥ 4.5:1 across every glyph); add a scrim or move the art.

**DD. The hero is recognisable in one second.** Client on Firelight (a flame inside a tilted trapezoid "logo frame"): "cool... but weird and unintuitive, you're like 'what in the world is that' rather than 'oh yeah, cool design'." A first-time visitor must name the subject instantly and find it natural (a landscape, a building, a tree, a vessel, a real object in a believable setting). No conceptual mash-ups (object inside a logo shape, symbolic frames, metaphors that need explaining). If it needs the caption to make sense, redo it.

**DC. The hero depicts a real thing, never abstract geometry.** Client on Burlington (concentric rounded squares around a name plaque): "I've never seen a worse homepage background design... it looks so ugly. You cannot be serious." Banned as heroes: concentric/nested shapes, tunnels, plaques, abstract planes, dot fields, network lines, tile grids, plaid or ribbon patterns, faint line art that reads as empty. The hero is a specific, recognisable, beautifully rendered subject tied to the firm (a place, landscape, building, vessel, tree, object, their own mark rendered as a crafted object) with depth and light. Test: describe the hero in five words to a stranger; if the words are shapes ("squares", "lines", "grid"), redo it.

**DB. The story is a crafted illustration that fills its frame, at every width.** Coordinator rejections (KCM: a few small labelled boxes in an empty frame; Holleway: on phones the art shrank to a ~100px thumbnail beside text with half the screen empty; SouthPointe: hero mostly flat empty navy). Story art must be drawn in the site's own fine-line/engraved language (elevations, landscapes, objects), never boxed UI rectangles or org-chart blocks. It fills ~55–65% of the frame on desktop and the full width on phones (stacked above the step text). No frame, hero or story, may be mostly empty. Check every sfxshot frame at 1440 and 390 by eye before SITE DONE.

**DA. The hero must be beautiful at a glance, not a clever diagram.** Client (Skyharbor ledger hero, rows of pill bars): "WHAT is that background / header animation thing. looks super weird and poorly done." The signature visual must read instantly as a refined, attractive image (an illustration, landscape, object, emblem, map, light). Never charts, UI-like rows, pills, bars, flowcharts or data-viz as the hero; keep those for the story section. Test: would a CEO screenshot it because it's beautiful? If you have to explain it, redo it.

**CY. Labels never overlap.** Client (Corfigo): two figure callouts rendered on top of each other ("CHANNELS IN" over "HELIUM IN"). Check every callout and annotation on every route and every story step at 1440, 1280 and 390, and re-place any that collide or touch.

**CZ. Art that moves on its own doesn't also follow the mouse.** Client (Corfigo): "since the heart is beating it's weird to have the design also move with the mouse." When the hero animates on its own (a beat, flow, drift, growth), no pointer parallax or tilt on top of it. If you add pointer interaction, keep it subtle and only on static compositions.

**CX. Every site is custom.** Client: "i think the effectiveness of our site is its custom nature." Never reuse another firm's hero, story diagram or layout as a template. Shared code is allowed only for invisible plumbing (loader, transitions, sheets, footer fit, gates). Each firm gets its own signature concept.

**CU. The hero visual is never an empty shape.** Client on Blackford: "that background design for the home page just seems like it's really missing something. like an empty circle just seems odd and out of place." A ring, frame, void or outline lifted from a logo must not be the centrepiece on its own: an empty container reads as a missing image. The signature element must carry real content and detail the eye can rest on: the actual mark or emblem (redrawn), a map, a composition built from their sectors/portfolio/science, or dense generative structure that fills its area. Abstracting a logo is fine only when the result has a filled focal point and visible richness at first sight (before any scroll). Self-check: screenshot the first screen and ask "if a stranger saw this, would they think an image failed to load?" If yes, it fails. Applies to sub-page heroes too.

**CV. Never distort type or a logo.** A giant footer wordmark or hero word is fitted by font-size or letter-spacing, never by `preserveAspectRatio="none"`, `scaleX`, or a stretched SVG viewBox; the letterforms keep their true proportions at every width. Echoed graphics (a sun, glow or mark repeated behind the footer) must never show a clipped box or canvas edge. (Coordinator review, Fifth Ocean.)

**CW. On phones, hero art never crosses text, at any scroll position.** Ridges, maps, labels or lines in the hero must not run through the eyebrow, title or copy, either at rest or while the page scrolls (parallax moves art at a different speed than the text). Phones get a clear band, a fade before the text, or no parallax. Check 360/390/430 with a real wheel scroll, not only the first frame. (Coordinator review, Snow Peak and Heartland.)

# v18 (client review round 5, after the "done" report)

**CR. The first screen arrives together.** The headline rises as whole lines (never a letter stagger whose tail lands late: client, "the 'r it' issue"), and the eyebrow, lede, buttons and nav start while it is still settling, never after it has landed. Client: "the title usually loads first, there's a long pause, and then the rest comes up (the caption, buttons, etc.)". Measure with a recording at 4x CPU and a throttled network (fonts come from the CDN), not only on a local fast load: everything on the first screen is in within ~0.6s of the title. Lines of a headline are evenly spaced: an italic/serif accent never enlarges its own line box (`em{line-height:0}` in display headings).

**CS. Nothing ships unstyled.** Every class used for visible content has a rule. A component copied from another site brings its CSS. Client: "WHAT IS THIS FLOATING SECTION" (a grant statement whose class was never styled, so it rendered as 16px body text floating in a dark band). Gate: `node _kit/unstyled-audit.js <file>` and look at what it lists.

**CT. Nothing shifts when the page unlocks.** `html{scrollbar-gutter:stable}` on every site, so the Windows scrollbar appearing after the preloader (or when a sheet closes) never jolts the layout sideways. Test with real scrollbars (Playwright: `ignoreDefaultArgs:['--hide-scrollbars']`).

# v17 (client review round 5)
**CL. One people-list format everywhere.** Horizontal person lists use `_kit/components/masthead.html` exactly (markup, metrics, hover), re-skinned with tokens only. Client: "why is there soooo much vertical spacing ... maybe it all, including the text, just needs to be smaller ... figure out one format and apply it to all ... think about what a professional agency would do." Name 21px, role 13.5px, summary 14.5px, row padding 18px, groups 56px apart. Within one list every row behaves the same (all open a sheet, or none). Gate: `node _kit/masthead-audit.js <file> "<route>"`.
**CM. A section animates as a whole.** If anything in a section reveals on scroll, every block in it does (headings, labels, rows, rules, captions), with the same motion and a small uniform stagger. Client: "why on some sites do some things in the same section animate up but not others!!! shouldn't everything?" (Virtus funders and pipeline rows; OnVagus). Usual cause: rows rendered by a helper outside the reveal collector, or excluded by RV_SKIP. Gate: `node _kit/mixed-audit.js <file>` must print OK. Every block must be seen moving: blocks below the fold reveal when they scroll in (75–90% threshold), never pre-revealed off-screen with the first-screen part of their section; a safety net may only reveal a block that has no pending tween. Gate: `node _kit/mixed-audit.js <file>` prints OK.
**CN. Space is proportional to content.** No small element (a pull quote, a single line, a lone card) floating in a band of empty space. Client on MaxQ's team quote: "it looks out of place because there's just so much white space". A pull quote sits in the flow at the section's normal padding, sized to the measure, or it goes.
**CO. Hover is visibly alive.** A clickable person row/tile must do more than change text colour: the masthead draws an underline and slides its arrow 8px; portrait tiles warm the portrait and show the arrow. Gate: polish-audit HOVER ("only changes text colour").
**CP. Page titles never pass over their subtext** on any route, at any width where they wrap (MaxQ "The people / behind MaxQ."). Fixed centrally: title and heading entrances now travel one line (yPercent 100). Gate: polish-audit UNDERLAP now also checks every sub-route's title.
**CQ. Shared animations, fixed centrally (do not undo):** the footer wordmark fades and rises as one piece (no per-letter split, which flashed); the page-transition layer, logo included, fades out with the page name; failsafes never snap running or queued entrances.

# v16 ( client review round 4: "these are likely general problems ... I just need you to be better and fix them")
Gate for the measurable ones: `node _kit/polish-audit.js <file> "<people route>"` must print OK (OVERFLOW, MASKCLIP, UNDERLAP, POPIN, HOVER, LINK, SCRUB, CUE). The rest are design standards a reviewer checks on screenshots.

**CC. Nothing runs off the page.** The footer wordmark (or any display type) fits inside the side margins on one line at every width: size it to fit (measure and scale, e.g. font-size from the container width), never let it bleed off-screen. Client: "why is their name off the footer". Gate: OVERFLOW.

**CD. Entrances never break the layout.** (1) A heading's reveal mask must be at least as wide as the heading's real text, or glyphs are clipped during the entrance and pop in when the mask is released (AAL's "repair it." lost "r it."); set the heading's measure so its longest line fits. (2) While glyphs rise in, they must never pass over another element (Oak's title "underlapped" its paragraph: the descender room under each masked line overlapped the paragraph). Keep the travel inside the line's own box (start at yPercent ≤ 100 with opacity 0 and a mask that does not extend into the next element), or give the heading enough margin. (3) No snapping: a failsafe may only complete animations that have stalled, never ones still running (fixed centrally in all sites: the failsafe now skips elements that are tweening). Gates: MASKCLIP, UNDERLAP, POPIN.

**CE. No scroll cues.** Remove hero scroll cues (moving lines, arrows, "scroll" labels). Client on ImmuneBro: "why is there a line moving up/down AND an arrow, and the line not staying on the arrow". Gate: CUE.

**CF. Every link works and says what it is.** No link to a route that doesn't exist, no single-letter links (ImmuneBro's footer "E" → page not found). Gate: LINK.

**CG. Hover is immediate and smooth.** Any hover change (colour, image filter, background, underline) starts at once and eases over 0.2–0.4s; no transition-delay, no snap. Prefer colour/underline/arrow motion over filled backgrounds; if a hover fills a background, it has the element's full padding (Elements' Phase II aim cards: "the spacing when hovered is just so weird/tight"). Gate: HOVER.

**CH. Scroll-coloured statements finish colouring by mid-screen.** When the "Why it matters" block sits in the middle of the screen every word is fully coloured (Oak: "some text is literally faded out even though I'm fully on the section"). Also size the block to the page: a large statement that fills the content measure (about 65–75% of the container, centred, text left-aligned), not a narrow column floating in empty space. Gate: SCRUB.

**CI. Team sections look like a premier design studio made them.** Client on Elements and Virtus: "why is the formatting of the people on the team just so poor and unprofessional — you really think a world-class, premier design team would make that?" One standard, two forms:
- With good portraits: a uniform portrait grid (same aspect ratio and crop for everyone, e.g. 4:5), name 20–24px, role 14–15px muted directly beneath, no boxes, no "Profile" label; the whole tile is the link; hover = the portrait warms from duotone/greyscale to colour and a small arrow appears, over 0.3s.
- Without portraits: the masthead list from `_kit/components/masthead.html` (v17 CL supersedes the old 28–34px, generous-row wording). Group headings (Leadership, Board, Advisors) as small eyebrow labels. Hover = name colour shift + arrow nudge, no filled background.
- Never: bordered or filled boxes, tight hover fills, stranded "Profile" labels, cards of unequal height, a lone card, mixed formats in one group.

**CJ. Partner and funder names are a clean credit line.** When partners are set in type (BW), show them as one consistent credit line: same size and weight, evenly spaced, wrapping centred, under a small "Validated with" style label. Never a table-like grid with rules that looks like the list beside it (AAL "Built and tested at MIT": "the different line formats are just confusing ... the section [is] simply unclear"). Each section uses ONE format.

**CK. Walk-through drawings obey physics and read cleanly.** Objects behave like the real thing: orientation, contact and gravity are right (Oak's strip "dissolves sideways but is placed down on the tongue": a strip lies flat on the tongue and dissolves from the face that touches it). No canvas edge-fade over labels or key shapes (Oak's "edges of words initially are faded"). No ambiguous duplicate outlines (a drop-shadow or thickness rectangle offset from the object reads as "two boxes, one off-centre"). Every label names something a first-time viewer recognises; if a term is jargon (e.g. "support matrix"), say what it is in plain words.

# v15 ( HARD rules from the client's third review: "there are simply errors that shouldn't be happening here or ever again")
Root cause of this round: every automated gate passed while the sites still looked unfinished. Gates prove things work; they do not prove things look right. So v15 adds gates for each measurable defect AND a mandatory visual sign-off (CB). A site is not done until both pass.

**BS. Text never jumps.** A split-text reveal must not change layout. Client: "No pills. No needles. No surgery." animates in, "then it stops and just jumps together." Cause: `.ln-mask{padding:.16em .14em .26em;margin:-.16em -.14em -.26em}`. Stacked masks' negative bottom/top margins COLLAPSE instead of adding, so every split line gains ~.16em, and when the split is reverted the lines snap together. Use exactly:
`.ln-mask{padding:.16em .14em .26em;margin:0 -.14em -.42em;position:relative;top:-.16em}`
(no top margin, so nothing collapses; `top` restores the position). Gate: `node _kit/split-audit.js <file>` must print OK (it splits every heading the way the site does and fails any line or following block that moves >1.5px). Also run clip-audit afterwards (the fix must not clip descenders).

**BT. The hero's living visual bookends the page.** Client: "wouldn't it be more classy to have the top background moving dynamic thing in the bottom behind the footer?" Render the hero's canvas/animated background again, quieter (lower opacity/density, same palette), behind the footer wordmark (the big company title), on every route. Reuse the same code; pause it when off-screen (IntersectionObserver) so it costs nothing. Gate: balance-audit FOOTER.

**BU. Balanced and centred.** Client: "why are some things not centered, like the team people in Elements Endoscopy?" and the "Why it matters" scroll-coloured statement is "not centred on screen". Rules: (1) a short last row of cards, people or logos is centred; a single row with fewer items than columns uses as many columns as items, centred (never a dead column on one side). (2) A statement paragraph that stands alone in its band (the scroll-coloured "Why it matters" text) is centred as a BLOCK on the page, text left-aligned inside it. (3) Nothing sits in one half of a band with the other half empty unless the empty half is deliberate negative space beside a large heading. Gate: `node _kit/balance-audit.js <file>` (ROW, CENTRE).

**BV. People: no unprofessional bio sheets, no redundant profiles.** Client on a 96px circle beside a huge name: "this bio just looks unprofessional"; and "not everyone needs a profile if it's just repeating what their short bio says"; Virtus (card = name + role, sheet = the bio) was "fine/good". Rules: (1) the sheet shows a LARGE high-quality portrait (two columns) or NO portrait (compact single column); the small-circle mode is removed from the component. A small headshot appears on the card only. (2) Open a sheet only when it adds real information beyond the card. If the card already carries everything known about a person, show it on the card and make the card non-clickable (no "Profile" label). (3) A one-person team (e.g. a lone co-founder) is never a lone card; compose a founder feature: a large portrait (if good) or a typographic block, the bio inline, set on the page grid. Gate: overlay-audit now fails a small portrait in the sheet and a sheet that repeats the card (>60% overlap).

**BW. Logos are legible and consistent, or they are type.** Client: "photos like these logos that are unreadable and even detract from the quality." Every partner/funder/award logo is rendered in ONE consistent tone that reads on its tile (e.g. CSS `filter:grayscale(1) brightness(0)` with an opacity matched to the body text colour, or an inverted version on dark tiles), at the same optical height. A logo whose file is white-on-transparent, low-res, or carries its own background box (e.g. a grey rectangle) gets a better official file, or is set as the organisation's name in type in the same row. Never mix colour and grey logos. Gate: `node _kit/logo-audit.js <file>` (FAINT, BOX, MIXED, SMALL).

**BX. No hanging images.** Client: "hanging photos that seem out of place: are you serious?" (a micrograph alone at the left of an empty band). An image is always composed with the content it supports: beside its text in a two-column layout, or across the full measure with its caption. Never a narrow image alone in a band. Gate: balance-audit ORPHAN.

**BY. Diagrams and story walk-throughs must be instantly clear and clean.** Client: "stray lines in designs?" and "many of those product walk-through designs are just confusing/not that clear/need to be redesigned", while Elements Endoscopy's "How it works" "looks so smooth". The Elements standard: ONE recognisable object (the device or the biology) drawn once and kept on screen; each step changes or lights one labelled part of it; every line connects two things or points to a label; nothing appears that is not explained by the step's text; the first frame is already a complete, readable picture (never an empty frame or a lone line). Test: a first-time viewer, given only the visual at each step, can say what it shows. No stray strokes, no lines that end in nothing, no dashed guides that overshoot their baseline, no abstract floating blobs, no data-looking bars without axes or labels. Each step's visual is reviewed zoomed in (sfxshot at every step) before sign-off.

**BZ. Cards look designed, not like boxes.** Client: "the cards sitting there look unprofessional at times"; OnVagus's co-founder card had "so much unparalleled white space ... uncentred card ... looks like noob formatting." Card height fits its content (no tall box with a label stranded at the bottom); cards in a row share height and align their first lines; prefer no border box at all when typography and a rule line do the job. Gate: balance-audit VOID.

**CA. Never claim "done" on gates alone.** Each round's report lists, per site, the contact sheets reviewed.

**CB. Visual sign-off, proportional to the change.** For a NEW site: screenshots of every route at 1440 and 390, every story step and every person sheet, reviewed by a fresh critic subagent until clean. For a FIX round: only the gates on the routes you changed plus one screenshot look at the changed sections; a critic pass only for sections that were redesigned. Never expand a fix round into a redesign the client didn't ask for (client: "I didn't ask for major site changes! They're already mainly fantastic!"); usage is limited.

# v14 (HARD rules from the client's second review)
**BQ. The person sheet adapts to the photo; never waste space.** Client: a photo-less sheet with a big plate repeating the name "just looks like a terrible use of space". Use `_kit/components/person-sheet.html`, which now picks the mode per person: a high-quality headshot (source ≥480px wide, sharp) → two columns; a small or soft headshot → (v15/BV: no portrait in the sheet; card only); no headshot → `.noimg` (one compact column sized to its content). No plate may repeat the name or role. overlay-audit now fails a name shown twice in the sheet, a photo-less sheet wider than 820px, and an upscaled portrait.
**BR. Photos must earn their place (refines BJ).** Client: a product render beside a spec list "detracts from the essentialness and coolness" when the site's own hero and story already show the device. Use company images only when they add something the custom visuals cannot: real people (good headshots), the device in real use or in a clinician's hand, the team or lab at work, real data or figures, award or partner logos in their own block. Never build a section whose main job is to display a photo. Never repeat a product render that the hero or story already conveys. When in doubt, leave it out: fewer, better images. The design critic must ask of every image: "does this add information or credibility the page doesn't already have?"

# v13 (HARD rules from the Nov 2026 batch review)
**BH. Zero cut-off glyphs, proven by pixels, not by eye.** Line masks (overflow:hidden / clip-path wrappers used for reveals) cut italic tails, swashes and descenders when the text is at rest (ImmuneBro "first-in-human.": the italic f tail was sliced off). Rules: (1) a mask clips ONLY while its reveal is moving: on the reveal's onComplete set the wrapper to `overflow:visible; clip-path:none` (or unwrap it); (2) masks get padding `.16em .14em .26em` with matching negative margins (italic/display serifs need the full amount); (3) never set `line-height` below 1.0 on a clipped wrapper. Gate: `node _kit/clip-audit.js <file> "<route>" 1440 900` and `... 390 844` on EVERY route (plus `--bios` on the people route) must print `OK`. Its INK check unclips each wrapper and compares pixels, so it catches what rectangles miss.
**BI. Bio overlays are a centred person sheet that scrolls with the wheel.** The right-edge drawer is retired (stylistically odd, and its long bios could only be scrolled by dragging the scrollbar, because Lenis swallows wheel events while stopped). Use `_kit/components/person-sheet.html`: a centred two-column sheet (portrait or typographic plate left, scrollable bio right) over a dimmed, blurred page, and a bottom sheet on mobile. The scroll column carries `data-lenis-prevent` plus `overscroll-behavior:contain`. Close returns to the page, Prev/Next use replaceState, Esc closes, focus is trapped. Gate: `node _kit/overlay-audit.js <file> "<people route>"` must print `OK`. ANY other scrollable panel (menus, modals, tables) also needs `data-lenis-prevent`.
**BJ. Use their real photos, the ones THEY would consider important (now limited by BR: only where they add something).** Before designing, run `node _kit/photo-inventory.js <their site> <outprefix> <built file>` and LOOK at the contact sheet. Include every meaningful company image: team headshots (always), product/device photos, lab/facility/team-at-work photos, published figures/data images, event photos, partner/investor/award logos. Skip generic stock and AI filler (the tool flags likely stock). Treat photos as the brand would: consistent crops/ratios, the site's grade, imgfx reveal, onerror fallback. Re-run the tool at the end: every UNUSED non-stock image needs a reason (duplicate, too small, off-topic), recorded in the dossier.
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
