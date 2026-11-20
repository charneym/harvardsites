# Edge Eye Labs, Inc. — dossier (home-only build, batch 2026-11e, medtech)

Sources, fetched 2026-11-20: edgeeyelabs.com (GoDaddy "Launching Soon" page); NIH RePORTER API, org "EDGE EYE LABS" (one project, appl 11410213).
Web searches for the company, product, founder and patents found nothing else (no press, no LinkedIn hit, no published email).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-edgeeyelabs.jpg): GoDaddy Airo builder placeholder; header just "EDGEEYELABS.COM"; "Launching Soon" over a stock night-sky video; a "Contact Us / Drop us a line!" form; cookie banner; no product, team or company text at all.
- Active: NIH NEI SBIR Phase II 1R44EY039171-01, $1,123,233, award notice 2026-08-14, project 2026-08-10 → 2028-05-31 (https://reporter.nih.gov/project-details/11410213).
- Scope: pediatric ophthalmic medical device; no pathogens, toxins or biodefence.

## Company and product (all from the RePORTER abstract and narrative)
- Edge Eye Labs Inc., San Francisco, CA 94102 (RePORTER org address; no street published). UEI WZPRQBQNP6A8.
- AmblyoGo: "a novel, patent-protected occlusion dose monitoring (ODM) system that integrates dual magnetometers in a clip-on sensor worn on a child's glasses to detect a small magnet embedded in the occlusion patch. Data are transmitted via Bluetooth to a base station and cloud platform, enabling real-time monitoring and feedback for parents and clinicians."
- Amblyopia: most common cause of visual impairment in children, 2–4% of the US pediatric population; children wear patches only ~44% of prescribed time; parental reports overestimate; no FDA-cleared solution to objectively monitor patch wear in routine practice.
- Pilot (Phase I-equivalent): high acceptability; strong concordance between ODM-recorded wear and parental diaries; worn comfortably without reducing willingness to patch.
- Direct-to-Phase II aims: (1) regulatory preparation — DHF, ISO 14971 risk assessment, FDA Pre-Submission on the De Novo pathway, usability and cybersecurity; (2) engineering and design verification of sensor, base station, cloud platform; (3) human factors, pediatric usability, pilot home use with ~20 children. Potential to improve adherence by at least 20 percentage points (not used on the page).

## People
- Omondi Luthuli Nyongo — contact PI, title "CEO" in RePORTER. No pronouns published → greeting "Dear Omondi Nyongo" (full: Omondi Luthuli Nyongo).
- Email: none published anywhere found (site has only a contact form). CTA links to edgeeyelabs.com.

## Brand
- No logo. Live site: black/near-black (#000, #161616, #1b1b1b), grey #969696, white; Playfair Display headings, Montserrat wordmark, Source Sans body; warm brown night-sky hero (#2e2a27).
- Concept palette: ink #121110, bone #f3f1ec, stone #a19d96, accent #c9a46a (warm horizon glow of their own hero image), site grey #969696. Type: Playfair Display + Montserrat (both from their site). Wordmark: "EDGE EYE LABS" in spaced Montserrat 600 (their header style) with a small eye glyph.

## Build notes
- Hero (HOME_BRIEF update option b): Pexels photo 1629833, close-up of a child's eye (https://www.pexels.com/photo/close-up-photo-of-kid-s-eye-1629833/, Pexels licence), graded warmer/lower to the ink, hero.webp; eye right of ~60%, deep ink wash over the headline side; slow Ken Burns. No company photography exists.
- Story: one engraved front view of a child's glasses; patch + magnet → clip-on sensor with dual magnetometers → Bluetooth to base station → secure cloud to parents and clinicians. Placement of parts is schematic (the abstract does not specify).
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
