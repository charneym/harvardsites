# IVOS Medical, Inc. — dossier (batch 2026-11f, HOME-ONLY build)

Slug: `ivosmedical` · built at `/ivosmedical/` · domain ivosmedical.com · parts and render in `_kit/home/ivosmedical/`

## The company
IVOS Medical, Inc. is a medical device startup in airway management. It is developing the BOSS G4™, a single-use,
custom-moulded video laryngoscope sleeve (sheath) that works with existing video laryngoscope platforms. Its integrated
Breathing Optimization and Suction System (BOSS™) gives continuous suction to clear aspirate and debris, plus independent
oxygen delivery that keeps the camera window clear, so clinicians get first-pass success in soiled, emergency intubations.
The technology is patented (the 2025 press releases say patent-pending), exclusively licensed from UC Irvine, and investigational: not FDA-cleared, not for sale.
Sources: ivosmedical.com home, /how-it-started, /milestones, press releases (2021–2025).

HQ (site /contact): UCI Beall Applied Innovation, 5270 California Ave., Suite 200, Irvine, CA 92617 · 949-357-0369.
NIH RePORTER gives the organisation's city as Dana Point, CA. The site and press releases say Irvine.

## Facts used on the page
- More than 15,000,000 intubations a year in the US; more than 2 million performed emergently (site hero stats).
- Over $2M in non-dilutive NIH funding (site). RePORTER: R43HL164325-01 $247,334 (FY2022, appl 10483262); 2R44HL164325-02
  $824,627 (2024-09-17, appl 10922562); 5R44HL164325-03 $926,634 (2025-08-08, appl 11193843); 5R44HL164325-04 $144,919
  (2026-09-16, appl 11389221). All NHLBI, "IVOS Medical: Intubation, Optimized." PI Gabriel Punsalan (Waylan Wong co-PI on Phase I).
- Phase II about $1.9M (press release 2025-01-22). Aims: complete product development and achieve clinical validation (Duhay quote).
- Selected for the NIH C3i (Concept to Clinic: Commercializing Innovation) program, September 2025 (GlobeNewswire 2025-09-11).
- Market entry targeted for 2026 (press release 2025-01-22).
- Milestones: founded March 2021 by Gabriel Punsalan, MS, CRNA and Dr. Waylan Wong (UCI Anesthesia); UCI Beall startup grant
  of $5k (June 2021); LLC converted to Inc. (Feb 2024); Wong stepped down (Spring 2023).
- Story: the two narrated videos on the home page (soiled airway with and without the BOSS G4).
- Team: Punsalan (Founder & CEO), Francis Duhay MD MBA (VP Clinical & Regulatory Affairs and BD; ex-CMO Edwards, SVP Olympus),
  Blake Sama MS (Head of Engineering, Quality & Operations), Michael Magnani MS MBA (Commercialization & Marketing Advisor).

## Design
- Palette from the live site and logo: teal #007b94, gradient #00516c, the yellow #ffc632 of the site's top rule, and white.
  Built on deep teal ink #06212b. The wordmark is their own SVG logo, recoloured to white.
- Hero: a crafted render (HOME_BRIEF 2c) of the real product, the BOSS G4 sleeve: ribbed cuff, J blade, teal suction/O2 channel
  and port. It is modelled on their own product image (IVOS-Instrument.jpg, which is too soft and upscaled to use directly).
  render.py does numpy sphere tracing and saves the result with alpha. No stock photo.
- Story: the video laryngoscope's camera view of the glottis. Fluid obscures it, gas flow and suction clear it, then the tube passes the cords.

## Leadership / outreach
- Lead: **Gabriel Punsalan, MS, CRNA**, Founder & Chief Executive Officer (site; press releases say CEO & Co-Founder).
  No pronouns are published, so the greeting is **Dear Gabriel Punsalan**.
- Best email: **gpunsalan@ivosmedical.com**, the contact in the GlobeNewswire release of 2025-09-11 (C3i), as syndicated
  at santelog.com. General: info@ivosmedical.com (site); media: press@ivosmedical.com.

## Activity (latest first)
- 2026-09-16: NHLBI SBIR Phase II continuation 5R44HL164325-04 ($144,919). https://reporter.nih.gov/project-details/11389221
- 2025-09-11: joins the NIH C3i Program (GlobeNewswire).
- 2025-08-08: NHLBI 5R44HL164325-03 ($926,634).

## Bad-site evidence
The live hero's stat headline ("2 Million+ / intubations are emergently performed") is dark-on-dark and nearly invisible.
It sits beside a cropped, desaturated stock-style photo on a flat gradient panel. The site is a Divi template with stock imagery.
