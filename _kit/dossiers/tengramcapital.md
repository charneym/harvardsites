# Tengram Capital Partners (slug: tengramcapital) — HOME-ONLY build, 2026-11-20

- Site: https://www.tengramcapital.com/ (static HTML, blocks non-browser user agents with a 406). Pages read: home, about-us, overview, approach, investment-principles, portfolio, prior-investments, the three current brand pages, team, all bios, press, contact.
- Type: consumer private equity (branded consumer products and retail). In scope: HQ Westport, Connecticut.
- HQ: 15 Riverside Avenue, First Floor, Westport, CT 06880 (contact page). Phone +1.203.454.6999, fax +1.203.454.6998. Email: info@tengramcapital.com (only published address).
- Lead: Matthew Eby, Co-Founder and Managing Partner (team page; bio uses "Mr. Matthew Eby", "his wife") -> "Dear Mr. Eby". Bio says he lives in Austin, Texas. Co-founder William Sweedler, Co-Founder and Managing Partner (bio: "Mr. Sweedler", Fairfield County) is the alternative.

## Facts used
- Tagline (home + about): "A private equity firm formed to acquire exceptional, highly recognizable, consumer brands."
- Etymology (about): Ten = "one deserving the highest rating"; Engram = "the memory of a word, image, or great consumer experience".
- Overview: seasoned management (Sweedler, Eby, Gersten: over three decades of combined experience); return-enhancing strategy (underdeveloped or growing brands at attractive valuations in strong segments).
- Approach: invests in strong brands alongside strong management teams, a catalyst for growth; segments: apparel, sporting goods, consumer electronics, home furnishings, health and beauty, spirits, food and beverage (7); stage: small-cap growth and restructuring, stable cash flow.
- Investment principles: high growth potential / untapped value; risk management (diligence, structuring, vetted brand extensions); strong management (teams, merchants, designers); kinetic (potential to grow, growth or restructuring story). Typos on the site corrected ("Invesment", "hight").
- Stats: $320M Fund II final close (press release 2015-06-16, link 061715); 7 segments; three decades combined experience. No revenue/EBITDA ranges are published, so none shown.
- Portfolio: current = Tommie Copper, Algenist, Zanella (descriptions condensed from the brand pages, links to their sites); prior = the 22 names on the Prior Investments page (names only).
- Team: 11 people and titles from the team page; one-sentence summaries from the bios for the 7 with bios used. No headshots on the site -> masthead list.
- News: 4 items with working links (PR Newswire 2025-10-07; firm press pages 2020-04-02, 2018-06-18, 2015-06-16).

## Activity (since 2025-05-18)
- 2025-10-07: Tengram portfolio company Tommie Copper acquired Freeze Sleeve (add-on). PR Newswire, Mount Kisco NY: "a Tengram Capital portfolio company". https://www.prnewswire.com/news-releases/tommie-copper-acquires-freeze-sleeve-302577558.html (PitchBook lists it as Tengram's latest investment.)

## Bad-site evidence
- Home hero is a cropped, soft stock photo of a suit jacket filling the screen in a jQuery "supersized" slideshow, with a glossy cyan banner of stretched bold caps.
- Stale: press page ends at April 2020; copyright "©2015" on team, press and contact pages (©2025 on others); team lists people without photos.
- Typos in navigation and copy: "Invesment Principles", "hight potential"; portfolio shown only as small logo tiles (237×174 JPGs); no investment criteria or deal size anywhere.

## Palette
- Logo blue #3b9ddb (pixel-sampled from the live logo and style.css) -> --accL; darkened #1f74ad for fills and text on bone (contrast); site greys #646f73 / #989fa2 -> --stoneD / --stone; deep navy ink #0e1a24 as the neutral base. Wordmark set in Montserrat (logo is Gotham-like: bold "Tengram", light "Capital Partners"); mark redrawn as five T's around a ring.

## Hero / story
- Hero: downtown Westport across the Saugatuck River at dusk (the view from the firm's Riverside Avenue office): clapboard and brick storefront buildings on a stone bulkhead, shop windows lit, river-walk lamps, a moored boat, the river mirroring the town; layered canvas with haze, glow and grain. Not a skyline (DG). Charter Oak (also Westport) uses an oak; this is a different subject (CX).
- Story: one engraved shop elevation (display counter, wall shelf, one dropper bottle). Steps = the firm's four investment principles: brand (label, spotlight), risk (dimensions, fill level in section, dashed vetted extensions), management (designer's sketch with swatches, merchant's shelf light), kinetic (extensions made real, a lit line on both shelves).

## Rev 2 / HOME_BRIEF update 2026-11-20 (part 1)
- Town and trees fade out between 60% and 72% of the width on desktop, so the H1 and lede sit on clean sky and water (coordinator review).
- Nav items Approach / Criteria / Portfolio / Team / News open build-out pages at #/more/<item> via the kit module (_kit/lib/buildout.js, "buildout" added to @libs in assemble.py): eyebrow "Concept preview", H1 "<Item>, built out.", the brief's copy, "Back to the home page" and "Or keep scrolling the concept". Contact and the home CTAs still scroll. Gate: buildout-test.js OK (10 nav clicks, 1440 + 390).

## Rev 3 (HOME_BRIEF update part 2: photography-first hero)
- (a) impossible: the firm's own imagery is a stock suit-jacket slideshow and brand-logo tiles.
- (b) place: no free Unsplash/Pexels photo of Westport, CT exists (checked Unsplash westport-connecticut, westport-ct, saugatuck-river, compo-beach; Pexels westport connecticut / westport ct: results are Saugatuck MI, Westport Ireland, Stamford/Norwalk, WA/OR or Unsplash+). Real Westport photos are only on Getty/iStock/Shutterstock/Dreamstime/Wikimedia (excluded).
- Coordinator chose option A: a real photo of the firm's SUBJECT (consumer brands), not labelled as Westport.
- Hero photo: "Elegant Boutique Storefront at Night", Gizem Erol, Pexels License (free, commercial use, modification allowed). Source: https://www.pexels.com/photo/elegant-boutique-storefront-at-night-32561585/ (downloaded at 2400x1600 from images.pexels.com/photos/32561585/).
- Edits (offline, PIL): third-party store name "BEST COLLECTION" removed from the awning (column interpolation of the plain fabric); window and door interiors softened with a feathered Gaussian blur (shallow-focus look) so no brand on posters/garments is legible; graded toward Tengram navy (#0e1a24 shadows, slight desaturation, gentle contrast). Saved as tengramcapital/hero.jpg (382 KB).
- Drawn in field.js with a slow Ken Burns drift (~48s cycle); desktop: photo frames the right ~56% and feathers into the ink so the H1/lede column is clean; phones: top band fading into the page. The painted Westport riverfront is retired.
