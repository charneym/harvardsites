# Adaxtra Capital (slug: adaxtra-capital) — HOME-ONLY build, 2026-11-20, site in French (SPEC §2b)

- Site: https://adaxtra.com/ — the whole site is a WordPress "Site en maintenance" placeholder (©2026). Only the placeholder was viewed; nothing behind it was probed. Facts come from public documents instead (below).
- Type: French private-equity management company (société de gestion agréée AMF GP-16000021), 100% subsidiary of BRED Banque Populaire (groupe BPCE). Two strategies: direct investment in French SMEs (Adaxtra PME I, Adaxtra France PME 2: 5–80 M€ revenue, tickets 2–8 M€) and funds of funds (Adaxtra Sélection range). Lower-middle market / small cap, invests in operating companies → in scope.
- HQ: 18, quai de la Rapée, 75012 Paris (LEI record, fund registry, 2024 brochure per search). Phone not confirmed in a primary source → not shown.
- Email: presse@adaxtra.com (press contact on the firm's 2023 and 2024 press releases; the only published Adaxtra address).
- Lead: François Parmentier, Directeur Général (2025 Sélection V presentation; press releases 2023–2024). The presentation's bio uses "il" → "Dear Mr. Parmentier".

## Sources
- Press release 2026-05-18 (Besnard / Virgo): https://newsroom.bred.fr/assets/communique-de-presse-adaxtra-capital-bpifrance-et-ouest-croissance-annoncent-la-cession-de-la-societe-besnard-et-le-recentrage-strategique-du-groupe-virgo-sur-l-aeronautique-pdf-0a1d6-9c1c2.html?dl=1 — "plus de 600 millions d'euros d'actifs pour le compte de plus de 1 300 clients"; "accompagnement des entrepreneurs talentueux"; "partenariats fondés sur la confiance et le respect"; deal team Thibaut Penhoat, Matthieu Reggio-Paquet.
- Article 29 LEC report, June 2026 (ADEME hub): AMF agreement, Article 8 funds (Adaxtra France PME 2; Adaxtra Feeder Infra since Jan 2026), process (due diligence with management and site visits, ESG in the investment committee note, shareholders' agreement clauses, strategic-committee follow-up), exclusion list.
- Adaxtra Sélection V presentation (April 2025, via unep-partenaires.fr): "en croissance depuis 2016", 8 vehicles / 2 strategies, PME I/II criteria, member of France Invest, full team and titles, bios of the four investment directors.
- BRED newsroom: Sélection III 128 M€ (2023-06-05); Berceau des Rois / P'tits Babadins (2024-01-23, 5th investment of PME 2); Teolia (2023-01-20, minority stake via PME 2).
- Siparex press release 2024-10-24: Groupe ELBA ORA capital reorganisation; Adaxtra Capital and Bpifrance remain as historic partners; ~300 staff.

## Activity (since 2025-05-18)
- 2026-05-18: Adaxtra Capital, Bpifrance and Ouest Croissance announce the sale of Besnard (Virgo group) to an industrial buyer; Virgo refocuses on Microsteel (aerospace foundry). BRED newsroom PDF above.
- 2026-01: launch of the Adaxtra Feeder Infra fund (Article 29 LEC report, June 2026).

## Bad-site evidence
- adaxtra.com shows only a maintenance placeholder ("Site en maintenance… Le site sera bientôt disponible à nouveau"), duplicated heading, default serif text over a geometric stock photo of a glass facade, ©2026; no information about the firm, its funds, team or portfolio.

## Palette
- Logo (pixel-sampled from the live placeholder): gold X #b49b65 → --acc (#c9b07a on navy, #7a6538 for text on bone); navy #0c2236 base; white wordmark. Display face Spectral (rev3; Cormorant Garamond's tall detached circumflex read as a floating caret on "côtés"). Wordmark set in Montserrat 700 ("ADAXTRA", gold X) with "CAPITAL" beneath, as in the logo.

## Hero / story
- Hero (rev2, HOME_BRIEF update 2026-11-20, real photography first): the firm's site has no photography (maintenance page only), so option (b). Loukian Jacquet (@loukian), "a bridge over a body of water next to a tall building", location "Bercy, Paris, France", Unsplash License (free): https://unsplash.com/photos/a-bridge-over-a-body-of-water-next-to-a-tall-building-p2ZZVjx2PCQ — CDN https://images.unsplash.com/photo-1685650705040-699a7c07a810 (downloaded at 2600 px). Shows the Pont de Bercy with a line 6 Métro train on its viaduct and the Ministère de l'Économie in evening light, seen from the Seine, across from the firm's office on the quai de la Rapée. Graded offline (split-tone toward navy #0c2236 shadows / gold highlights, partial desaturation) to adaxtra-capital/hero.jpg; slow Ken Burns drift toward the bridge; navy scrim on the text side; on phones a top band that fades before the text. (rev1 used a painted canvas of the same bridge; replaced.) rev3: the third-party "ACCOR ARENA" lettering on the arena roof behind the train was removed in the graded file (letter pixels filled from the surrounding roof steel; train and trees untouched).
- Build-out pages (rev2): kit module _kit/lib/buildout.js (@libs buildout), lang fr. Copy overrides: back "Revenir à la page d’accueil"; heading "{item}, en version complète." because every nav item is feminine and three are plural, so a fixed "développé." would be ungrammatical; body = the kit's French text with typographic apostrophes.
- Story: one engraved elevation of a French SME workshop (sawtooth roof, chimney, office block). Steps = the firm's own process: Analyse (survey dimensions, lens), Pacte (signed shareholders' agreement, dashed extension), Suivi (extension built, workshop lit, chimney running), Cession (lorry at the dock, flag; Besnard sale 2026).
