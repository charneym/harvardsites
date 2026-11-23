# Perceptive Medical, Inc. (slug: perceptivemedical) — HOME-ONLY build, batch 2026-11h

- Site: https://www.perceptivemedical.com/ (Wix; read 2026-11-22). Bad-site evidence: template look: a stock clinician photo washed flat blue with a navy box of thin centred text, then a pale-blue band; the Vision and Studies nav items return the Wix 404 page (live pages sit at /treating-hypotension and /clinical-studies); footer "© 2025".
- Domain check: company name, BaroHawk, Joseph Rinehart and info@perceptivemedical.com on perceptivemedical.com; blog feed active to 2026-07; UCI Beall Applied Innovation profile and MTEC member page (mtec-sc.org/members/perceptive-medical-inc) use the same company and domain; Cove Fund one-page brief gives Joe.rinehart@perceptivemedical.com. No newer site.
- Type: medtech (closed-loop vasopressor titration system). No pathogens, toxins or biodefence.
- HQ: Newport Beach, California (Cove Fund brief 2021 "LOCATION: Newport Beach, CA"; CB Insights). No street address published.
- Lead: Joseph Rinehart, MD, co-founder and CEO (Cove Fund brief: "Joe Rinehart CEO. MD, Anesthesiologist"; UCI Beall 2023: founders Joseph Rinehart, M.D., and Maxime Cannesson, M.D., Ph.D.; "Dr. Rinehart" in the company's own posts). Greeting: "Dear Dr. Rinehart".
- Best email: Joe.rinehart@perceptivemedical.com (Cove Fund one-page brief, https://www.covefund.com/s/Perceptive-Medical-ES.pdf). Company: info@perceptivemedical.com (site footer and contact page).

## Activity (pre-screen OK)
- 2026-07-02: "Perceptive Medical Selected as Finalist for 2026 UC Regents Innovation Awards" (Best Startup), https://www.perceptivemedical.com/post/perceptive-medical-selected-as-finalist-for-2026-uc-regents-innovation-awards
- 2026-06-10: closed-loop nitroglycerine and esmolol abstract nominated for Best Abstracts, ASA 2026 Annual Meeting (company post).
- 2026-05-23: Dr. Rinehart presents at UCLA's LABEST conference (company post).

## Facts used
- Home: BaroHawk™ Vasopressor Management System; FDA breakthrough device; clinical trials; mission (integrated into clinical infrastructure, precision); core values Impactful / Precise / Empowering (text used verbatim in spirit); "developed by physicians".
- /treating-hypotension: 5,000,000 high-risk non-cardiac surgeries a year; 75% of ICU patients have episodes of severely low blood pressure; AKI 300,000/yr, myocardial injury 150,000/yr, deaths 30,000-60,000/yr, stroke 10,000s/yr; even experienced anesthesiologists cannot tightly control blood pressure; 10-15% of time in preventable hypotension with manual titration; hypotension the only modifiable factor associated with perioperative myocardial injury.
- /clinical-studies: technology from UC Irvine; studies performed and published by the UCI inventors and collaborators; four highlighted trials with findings and links (JCMC 2023 title confirmed on Springer: "Tight control of mean arterial pressure ... after high-risk abdominal surgery").
- Posts: FDA Breakthrough Device Designation (2023-05-09); MTEC prototype acceleration grant (2022-04-29); MedTech Innovator 2023 cohort; Seed A round led by private investors and Cove Fund (2021); UCI Beall feature (2023).
- UCI Beall Applied Innovation 2023: founders; Rinehart associate professor of anesthesiology and vice chair for research, UCI School of Medicine; device monitors blood pressure and adjusts medication automatically while leaving providers in control; "where there's evidence about harm, but where our practice lags behind".
- Cove Fund brief (2021): CEO Rinehart, former CEO of Sironis (exit with Edwards Lifesciences, 2014); Cannesson Chief Medical Officer, world-recognized expert in hemodynamic monitoring / machine learning; Newport Beach; IDE study and PMA required.
- MTEC: automates titration of vasopressor infusions using continuous blood pressure inputs to maintain clinician-specified MAP targets.

## Palette / type
Logo: solid black winged-shield bar under a spaced-caps wordmark (redrawn as filled SVG paths, shown white on the ink). Live site: navy #151e61 (hero box), blue #3277ae (active nav), light blue #8dbbdd (band). Mapping: navy → ink #0a0e2a (deepened), #3277ae → --acc, #8dbbdd → --accL (accent text on dark), cool bone #f4f6f9. Nunito Sans (close to their Avenir), Source Serif 4 display, Jost 500 spaced caps for the logotype.

## Hero
Option (b): a real photograph of the subject BaroHawk manages, an IV infusion line with its drip chamber: Samuel Ramos on Unsplash, "white and gray corded device", Unsplash License (free, not Unsplash+): https://unsplash.com/photos/white-and-gray-corded-device-RXVfrhCswCQ (CDN photo-1585960691786-a593e76d3847, downloaded at 2400 px). Unbranded. make_hero.py cuts the line out of its blurred room (hand outline + background-estimate edge refinement; the transparent bag keeps only its own creases), grades it cool toward the navy, and bakes long eased alpha fades (top and down the tube) into perceptivemedical/hero.webp (663×1700). In the canvas a single drop forms and falls in the chamber every 3.2 s; slow drift; no pointer response. Not used by any other concept (repo grep). Not Perceptive Medical's device; no copy claims it is.

## Story
One continuous monitor-strip scene: an illustrative arterial pressure trace above the vasopressor rate; the clinician's target band draws in (Set), the trace is written and pressure begins to fall (Sense), the rate steps up and pressure returns to the band (Titrate).
