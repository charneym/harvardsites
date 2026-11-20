# Shilling Group (slug: shilling) — HOME-ONLY build, 2026-11-20

- Site: https://shillinggroup.com/ (WordPress/Divi). Pages read: home, about-us, acquisitions, aquisition-criteria (form-gated), partners, shilling-support, shilling-money, contact-us, faqs ("Coming Soon"), case-studies ("Coming Soon"), shilling-summary.
- Type: UK acquisition group / holdco that buys SMEs directly from retiring owners (succession buyouts) and also makes acquisitions for clients and joint-venture partners. The press calls it a "private equity investor". Lower-middle market or smaller: deals are SME scale, e.g. a £2.75m facility for Simmonds Transport. In scope under SPEC §2b (international, English, UK spelling).
- HQ: First Floor, Falcon Point, Park Plaza, Heath Hayes, Cannock, Staffordshire WS12 2DE (contact page and Companies House). Phone +44 (0) 1543 465 699. Email: info@shillinggroup.com (the only published address). Hours Mon–Fri 9am–5pm.
- Lead: Colin John Carter, Director. He is the sole active director of Shilling Group Holdings Ltd (09033679, SIC 70100 head office) and of Shilling Mergers Ltd (07046876, inc. 16 Oct 2009, the acquiring entity in the ASB deal), per Companies House officers pages. No published pronouns -> "Dear Colin Carter" (flag). Alternative: Bart Walkerdine, Group Operations Manager (quoted in Business Sale Report, 16 May 2024).

## Facts used
- Tagline (home): "Creating Growth & Releasing Capital … since 2009".
- About: established 2009; the Group's trading businesses are held as "sole, majority, or minority shareholder"; "funders and facilitators of acquisitions"; after acquiring, they "insert and fully support new, creative and dynamic management to develop and expand for the next decade"; the "why we do it" passage (natural exit, release / opportunity / new life) is condensed for the manifesto.
- Buying Businesses: not brokers, no fees to sellers, offers fully funded and subject only to due diligence and contract, structured for Business Asset Disposal Relief. The site's tax-rate figures (10%/14%) are out of date, so no rate is shown. Process: initial review, fully funded offer, streamlined discreet completion; "repeat the process the following year".
- Partners / Support / Money pages: the four arms and their one-line descriptions.
- Stats: 2009 (founded), 4 Shilling businesses, "No fees" to sellers. No deal counts, fund size or returns are published, so none are shown.
- Portfolio (press-reported acquisitions only): Accurate Section Benders (Higgs LLP, 23 May 2025) and Simmonds Transport (Business Sale Report / TheBusinessDesk, May 2024). Descriptions are taken from those articles. Links go to accuratesectionbenders.co.uk and simmondstransport.co.uk (both live).
- Team: Colin Carter (Director, from Companies House) and Bart Walkerdine (Group Operations Manager, from the press). The site has no team page or headshots, so the masthead list is used.
- News: 3 deal articles plus the firm's own Shilling Summary page, all with working links.

## Activity (since 2025-05-18)
- 2025-05-23: Shilling Mergers Limited acquired the entire share capital of Accurate Section Benders (Black Country) from Mick Mocroft and his brother Nigel, including a sale and leaseback. Storrar Cowdry acted for Shilling. https://www.higgsllp.co.uk/news/higgs-supports-accurate-section-benders-limited-on-share-sale
- Ongoing: daily "Shilling Group – Press Briefing" posts on /shilling-summary/, the latest dated 16 Nov 2026.

## Bad-site evidence
- The hero is a cheesy upward-looking skyscraper stock photo with a centred logo and faded gradient text ("Creating Growth & Releasing Capital … since 2009"). The nav is tiny and crowded.
- The Case Studies and FAQs pages say only "Coming Soon". The investment criteria are hidden behind an email form. There is no team page and no portfolio.
- The home page repeats the "Working for what you want…" block twice, and two service cards share the same "Grow by Acquisition" copy. The tax-rate copy is stale (it still mentions the pre-6 April 2025 10% rate).

## Palette
- Logo red #d9203e (pixel-sampled from logo-shilling-group@2x.png; it is also the site's #d9203e) -> --accL #e2475f on dark and --acc #c41d39 / --accD #ad1932 on bone. Logo charcoal #525252 -> the ink family (#1c1b1d base, #5c5956 stoneD). Warm bone #f3f0ea. The two-crescent mark is redrawn (grey crescent lower-left, red crescent right). The spaced-caps wordmark is set in Jost; display type is Newsreader.

## Hero / story
- Hero (per the HOME_BRIEF update of 2026-11-20, option b): a real photograph of an engineering shop floor at first light, with low sun through tall factory windows and long shadows across the machines. Shilling has no photography of its own; its site uses a stock skyscraper. There are no usable Cannock Chase landscapes on Unsplash or Pexels: the four "Cannock Chase" Unsplash results are deer, a French cemetery and a drone, and Pexels only has a wooden statue. So the photo follows the firm's subject instead: established UK SMEs, most recently a Black Country section and press-brake bending works. The image is mirrored so the windows sit on the right, graded toward charcoal and warm red, and drawn with a slow Ken Burns drift and dust motes in the light. No pointer response.
- **Hero photo source:** Cemrecan Yurtman, "The sun is shining through the windows of a factory": https://unsplash.com/photos/the-sun-is-shining-through-the-windows-of-a-factory-hwIrgD8FC8M. CDN: https://images.unsplash.com/photo-1738162837389-73a9c7737b4f. Unsplash License (free, commercial use, no attribution required; not Unsplash+). Graded file: _kit/home/shilling/hero.webp. It replaces an earlier painted Cannock Chase sunrise.
- Build-out pages: nav items Approach, Criteria, Portfolio, Team and News open #/more/<item> with the brief's exact English copy. Contact scrolls to the contact block, and the home CTAs still scroll.
- Story "Selling to Shilling": one engraved elevation of an established works (sawtooth north-light roof, roller door, two-storey office). The steps follow the firm's own process: review (survey dimensions), fully funded offer (the office lights up, linked to an offer letter), completion (the roller door rises on a lit floor), the next decade (a new bay, north lights lit, a second van, a young birch).
- Build note: Jost was not in _kit/node_modules/@fontsource, so I ran `npm i --no-save @fontsource/jost`. That broke Playwright, and node_modules/playwright* were removed per the brief.
