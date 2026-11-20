# F&P Equity Partners
Home-only concept site (Italian), assembled by _kit/home/fp-equity-partners/assemble.py. Facts only, each with its source.
- Website: https://www.fp-equity-partners.com/ (Italian, with an /en/ version)
- Headquarters: Via Alberto da Giussano 15, 20145 Milano — https://www.fp-equity-partners.com/#contatti
- Founded: March 2023, as the evolution of F&P4BIZ (founded mid-2019 by Guglielmo Fiocchi and Maurizio Perroni) — https://www.fp-equity-partners.com/chi-siamo/
- Model: club deal, co-investment deal by deal; industrial and service companies with revenue up to EUR 100M; majority and minority stakes; expansion, replacement capital, buy-out — https://www.fp-equity-partners.com/le-attivita/
- Track record of the promoters: 70+ companies managed, 90+ plants, 70+ PE and M&A deals; 20+ add-ons on the portfolio by 31.12.2022 — https://www.fp-equity-partners.com/chi-siamo/
- Brand colours: #1F57A3 (logo blue, theme CSS and logo SVG), #011330 (site navy, theme CSS)

## Contacts (decoded from the site's JS-protected emails)
- Guglielmo Fiocchi, +39 335 65 13 525, guglielmo.fiocchi@fp4biz.com
- Maurizio Perroni, +39 338 68 57 723, maurizio.perroni@fp4biz.com
- Andrea Lovato, +39 335 563 8620, andrea.lovato@fp4biz.com

## Team — https://www.fp-equity-partners.com/chi-siamo/#i-partner
- Guglielmo Fiocchi, Managing Partner (co-founder). Aerospace engineer, Politecnico di Milano; 20+ years CEO/DG at BTR, Pirelli, Sogefi, Sinterama; "Automotive Supplier CEO of the year – Europe" 2014.
- Maurizio Perroni, Managing Partner (co-founder). LUISS, NYU Stern MBA; Chase Gemina Italia, CVC, Quadrivio, Siparex, Cape; AIFI M&A committee.
- Andrea Lovato, Managing Partner. Politecnico di Milano; co-founder of Jakala; CEO of Tenova (2015–20) and Takraf GmbH (2020–22), Techint group.
- Gino Amadi, Operating Partner. CEO/owner of ISA; built Altanova, sold to ESCO Technologies 2021.
- Eugenio Rocco, Investment Manager (since Sept 2022). Politecnico di Milano; PwC, EY.
- Lorenzo Rutigliano, Board Member; founding partner of RTZ.

## Portfolio — https://www.fp-equity-partners.com/portafoglio-investimenti/
- Nachmann (Nov 2025): specialty chemicals, Milan, plants in Lodi province and Thailand; 2024 revenue >EUR 40M; Newco 60% club vehicle / 40% Cotilli family; LBO financed by Crédit Agricole Italia, MPS, BNL BNP Paribas.
- Righi Elettroservizi (Dec 2023): industrial automation and renewables, Cesena; add-ons Viganelli and SEI Sistemi (2024). https://www.righisolutions.com/
- Panzeri (Apr 2023): high-end lighting, Biassono, founded 1947; acquired Luxxbox (US) 2024. https://panzeri.it
- Test Industry (Aug 2019, F&P4BIZ): test benches. https://www.test-industry.com/
- Exits: BluVet (sold to CaZampa, 2025); FARMA (sold to Interpump Group, Dec 2025, F&P4BIZ).

## News (all PDFs on the firm's site, HTTP 200 on 2026-11-20)
- 2026-01-01 F&P4Biz cede F.A.R.M.A. a Interpump Group — https://www.fp-equity-partners.com/wp-content/uploads/2026/01/cs-fp-exit-farma-.pdf
- 2025-11-13 F&P Equity Partners investe in Nachmann — https://www.fp-equity-partners.com/wp-content/uploads/2025/11/fp-nachmann-121125i.pdf (also https://app.mergerlinks.com/transactions/2025-11-13-nachmann)
- 2025-02-26 Ceduta la partecipazione in BluVet — https://www.fp-equity-partners.com/wp-content/uploads/2025/02/250224-nb-aurora-closing-bluvet-ita.pdf
- 2024-06-27 Righi acquisisce il 100% di SEI Sistemi — https://www.fp-equity-partners.com/wp-content/uploads/2024/06/cs-fp-equity-partners-righi-sei-27-06-24.pdf
- 2024-06-19 Primo add-on internazionale per Panzeri — https://www.fp-equity-partners.com/wp-content/uploads/2024/06/cs-fp-equity-partners-luxxbox-panzeri-19-1.pdf

## Bad-site evidence (live site, 2026-11-20)
- The homepage's first screen is only a giant logo circle on navy with a cookie bar: no headline, no copy, no call to action.
- No photography or imagery anywhere; every page is text on a dated WordPress theme ("fnp4biz", WP 6.2, jQuery migrate).
- Portfolio page is a long wall of text; the team's emails are hidden behind JavaScript obfuscation and sit on the old fp4biz.com domain.
- Footer says only "Tutti i diritti riservati" with no year; the theme and assets are still named for the predecessor F&P4BIZ.

## Hero photo (client update 2026-11-20: real photography first)
- The firm's site has no photography of its own, so the hero uses option (b): Daniel Kirby (@dsk_), "a canal with buildings along it", Navigli, Milan: https://unsplash.com/photos/a-canal-with-buildings-along-it-smCqxgrMeNY. CDN: https://images.unsplash.com/photo-1668784290849-aa5acd24edcd. Unsplash License (free, commercial use, no attribution required). Graded toward the firm's navy: _kit/home/fp-equity-partners/hero.webp. The earlier painted brick-works hero was replaced per the update.
- Nav items (except Contatti) open Italian build-out pages at #/more/<item> (modello, criteri, portafoglio, team, media).
