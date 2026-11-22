# Persista Bio, Inc. (slug: persistabio) — HOME-ONLY build, batch 2026-11h

- Site: https://www.persistabio.com/ (WordPress/Elementor, read 2026-11-22). Bad-site evidence: a dated template with a stock "molecule spheres" banner (glossy ball-and-stick render unrelated to their product) under an oversized, outlined, all-caps "DELIVERING THE PROMISE OF BIOTHERAPEUTICS"; tab-style nav with dotted separators; the "The Challenge" nav link points to /challenge/ while /the-challenge/ 404s; the product is shown only as a flat cartoon cross-section diagram; copyright still "2024-2025".
- Domain check: company name, logo and trademarks (Persista Bio®, O2Line™) on every page; news releases dated "Ithaca, NY"; Cornell Center for Life Science Ventures lists Persista Bio (entry Oct 2025, CEO Linda Tempelman, website persistabio.com); Cornell CTL startup page (Apr 2026); NIH RePORTER: PERSISTA BIO INC, Ithaca NY. No newer site on another domain.
- Type: medtech/biotech — implantable, oxygenated cell-encapsulation system for Type 1 diabetes. No pathogens, toxins or biodefence.
- HQ: Ithaca, New York (news datelines, NIH record; based at Cornell's Center for Life Science Ventures).
- Lead: Linda Tempelman, PhD — CEO and co-founder (Team page; quoted as CEO in every 2025–26 release). Pronouns not published on the site → greeting "Dear Dr. Tempelman" (doctorate stated).
- Best published email: none for the company on its site or releases. The contact page's only mailto is the media contact rowe@roweassoc.com ("Members of the news media: please contact us"). Third-party Prospeo lists info@persistabio.com (unverified, not used). The site's main channel is the contact form at persistabio.com/contact/.

## Activity (pre-screen OK)
- 2026-09-23: release — positive feedback from an FDA CBER INTERACT meeting on the modular approach.
- 2026-07-31: NIH award 5R44DK142496-02 ($1,006,033), "Advanced Pre-Clinical Development of O2Line System for Type 1 Diabetes Cell Therapy", PI Linda Ann Tempelman (RePORTER 11406294).
- 2026-07-23: FuzeHub Manufacturing Grant (Jeff Lawrence Innovation Fund).
- 2025-09: two NIH grants (Direct-to-Phase II SBIR $2.1M; Phase I R43DK143903, PI Beum Jun Kim). 2025-08: Nature Communications paper (DOI 10.1038/s41467-025-62271-2).

## Palette / type
Logo: an inline SVG (four-sphere mark + PERSISTA BIO wordmark), Elementor globals primary #215780, secondary #00AEE6, text #003561, accent #E5F7FC; Montserrat throughout. Ink #03111f (the render's own ground), cyan #3cc2ef on dark, #215780 on light. Header and loader use their own logo paths.

## Hero
Option (c): a crafted render of their real product — the O2Line oxygenated cell capsule after their own "Oxygenated Cell Capsule, Cross Section" figure and the Nature Communications description: a white core-shell nanofibrous tubular capsule, cut away over the middle to show densely packed islets (cell clusters) around the central oxygen line, which exits through a port at one end. render.py (numpy: analytic capsule/cylinder hits, z-buffered cell splats, electrospun-fibre texture, AO, true alpha). Not used by any other concept (grepped).

## Story
One cross-section: skin, iEOG oxygen generator, capsule with islets around the oxygen line, capillary. Oxygen → shield (immune cells stop at the membrane) → regulate (glucose in, insulin out).
