# Stenseminde Holding ApS (slug: stenseminde) — HOME-ONLY build, 2026-11-20 (Danish)

- Site: https://stenseminde.dk/ — placeholder: a 300px JPEG of the logo (laurel/beech-leaf wreath, "STENSEMINDE Holding ApS, Est. 2003") centred on a blank white page. No text, navigation, contact, portfolio or team.
- Type: North Jutland family-owned investment company / family office making long-term minority and majority (control) investments in operating companies. CVR 27082874, founded 25 March 2003. Parent company named as "Stenseminde Holding ApS, Aalborg" in Mariendal El-Teknik's annual report for 2025.
- Lead: Henrik Sørensen, owner and director (ejer og direktør); former long-time head of DESMI (26 years). No published pronouns in a bio → greeting "Dear Henrik Sørensen" (flag). No published email anywhere (site has none; press release lists only Space Inventor's and the PR agency's contacts).

## Facts used (sources)
- Via Ritzau / Lange PR press release, 5 Jan 2026: https://via.ritzau.dk/pressemeddelelse/14739177/kapitalstaerk-pumpemand-kober-sig-ind-i-nordjysk-satelliteventyr?publisherId=10609237&lang=da — Stenseminde Holding bought 25.2% of Space Inventor (Aalborg) with a board seat; boilerplate "nordjysk familieejet investeringsselskab med fokus på langsigtede, værdibårne investeringer i virksomheder med højt vækstpotentiale ... enten som aktiv minoritetsejer eller majoritetsejer ... globalisering, internationalt salg og leverancer til forsvarsvirksomheder ... udvikle stærke, nordjyske og danske erhvervsfyrtårne"; quote "Vi investerer som familiekontor i virksomheder med sunde værdier ..."; Sørensen led DESMI for 26 years, sold a large part of his DESMI shares in 2022.
- Mariendal El-Teknik A/S annual report 2025 (approved 22 Jun 2026): https://via.ritzau.dk/files/13566731/15011369/437889/da — Stenseminde became main shareholder by capital increase end-Dec 2025; took full ownership in 2026; new management; Henrik Sørensen chairman.
- M&A Insights, 14 Jan 2026: majority stake in Mariendal El-Teknik (~250 employees).
- Mariendal description from mariendal.dk meta description.
- Dansk Marine Center: estatistik.dk ownership (Stenseminde Holding ApS registered owner via Dansk Marine Center A/S); departments from danskmarinecenter.dk / Hallberg-Rassy importer news (2023). Henrik Sørensen chairman per Proff.
- danmarksrigeste.dk: family remains a DESMI shareholder after the 2022 sale.

## Activity (since 2025-05-18)
- 2025-12: capital increase making Stenseminde main shareholder of Mariendal El-Teknik; 2026 full ownership (annual report).
- 2026-01-05: 25.2% of Space Inventor + board seat (press release above).

## Bad-site evidence
1. Home page is only a small logo JPEG on a blank white page, offset upward; nothing else.
2. No text at all: no description, investment criteria, portfolio, team or news.
3. No contact details, address, email or navigation; title tag is just "Stenseminde Holding ApS".

## Hero / story / palette
- Hero (rev2, HOME_BRIEF update 2026-11-20 option b; the firm has no photography of its own, its site is a logo only): a Nordic beech wood in warm light, sun bursting through the canopy over smooth grey beech trunks and copper leaf litter, Söderåsen National Park, Skåne, Sweden — Henrik Kindströmmer, https://unsplash.com/photos/4DB8MzCqDIA (Unsplash License, free; page says "Free to use under the Unsplash License"). CDN https://images.unsplash.com/photo-1791147296838-9c237cc32403, saved as stenseminde/img/hero.jpg (2400x1600). Mirrored horizontally so the sunburst sits clear of the headline, graded toward the logo ink and the wreath's olive gold, cover-fit with a slow Ken Burns drift and a breathing sunburst; ink scrim on the text side; band above the text on phones. Beech is the leaf in the wreath. History: painted beech wood (v1) → Unsplash pine wood at Hals, Aalborg Municipality (photo-1700226161339-adee8617fc47, Aleksandra Kovacic; not beech) → this beech wood. No free Unsplash/Pexels beech photo with a stated Danish location was found.
- Story: engraved elevation of the firm's own wreath around the name; four steps ink the wreath quarter by quarter (roots in pump industry → active minority owner → majority owner → long-term ownership).
- Palette: the logo is black ink on white → ink #14150f and bone #f4f1e8; single accent leaf olive #5d5a33 / pale gold #cdbf88 from the wreath. Logo wreath halves cut from their own logo JPEG and recoloured for the header. Wordmark in Libre Caslon Text (close to the logo face); body Public Sans.
- Nav (rev2): Tilgang / Kriterier / Investeringer / Ejer / Nyheder open build-out pages at #/more/<item> through the shared module _kit/lib/buildout.js ("buildout" in @libs), with Danish copy set in window.BUILDOUT.copy: "Konceptforhåndsvisning" / "<Punkt>, udbygget." / body "Dette er et koncept til forsiden. Hvis I kan lide retningen, bygger jeg denne side og resten af sitet ud i samme stil, med jeres team, portefølje og nyheder, og står for flytningen fra jeres nuværende side. Svar på den e-mail, som dette link kom i, så tager vi den derfra." / "Tilbage til forsiden" / "Eller fortsæt med at se konceptet" / crumb "Forside". Kontakt scrolls to the contact block.
- Contact: no email published, so the CTA links to the CVR record and the press release (no invented mailto).

## Gates (rev2, 2026-11-20)
smoke, reveal 1440/390, anim 1440/390, clip 1440/390, overlay, masthead, mixed, polish, loader, unstyled, cramped, hoverpad, split, balance, logo, buildout-test (10 nav clicks at 1440 + 390): OK. hero-audit OK on #/ (cold load); it lists the nav's own section hashes (#/tilgang ... #/kontakt) as "no title found" because typed hashes scroll on the home page (clicks go through the build-out module), not pages. Hero, build-out pages and story frames checked by eye at 1440 and 390. prepush-check OK.

## Email search (rev2) — nothing published
- stenseminde.dk: the site has no text or contact. DNS: MX stenseminde-dk.mail.protection.outlook.com (Microsoft 365), SPF for Outlook and one.com, so the domain receives mail, but no address is published anywhere I could find.
- CVR / BiQ (data.biq.dk): the CVR record has an email field, but it is behind a login; the registry address is Brorholtvej 36, 9430 Vadum. The company is marked "reklamebeskyttet" (protected against direct marketing) in CVR — flag for outreach.
- Proff.dk: no email shown. Space Inventor press release (Via Ritzau, 5 Jan 2026): contacts only Karl Kaas (Space Inventor) and Jacob Lange (Lange PR). Mariendal El-Teknik annual report 2025: no email addresses at all.
- RocketReach lists an inferred first.last@stenseminde.dk pattern; not used (a guessed pattern, not a published address).
- Also seen: a GML A/S (recruiters) CEO listing posted 2026-05-18 shows "Stenseminde Holding ApS · Region Nordjylland" among its employer links; the posting is closed and its text no longer shows, so it was not used on the site.
