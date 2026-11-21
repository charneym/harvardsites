# Tele-stethoscope, Inc. / TSI (slug: tele-stethoscope) — HOME-ONLY build, 2026-11-21

- Site: https://tele-stethoscope.com/ (WordPress, default block theme, "Designed with WordPress" footer). Pages: Home, Publications and Presentations, Clinical studies, TSI mHealth app, About Us, Contact TSI, Other Devices.
- Type: US medtech / digital diagnostics (SPEC §2). Software that turns an ordinary mobile phone into an auscultation device and models heart/lung sounds with computational nonlinear dynamics to proxy gold standards (echo, spirometry, CT/MRI, labs). Research use only, not FDA cleared (their own disclaimer). Pre-screen: diagnostic signal processing, no wet-lab pathogen or toxin work. Some studies are BARDA-funded "medical countermeasure" studies (detecting pneumonia, bronchitis and influenza A from breath sounds against clinical diagnosis and rapid tests). The concept site lists these only as a respiratory-illness diagnostic row and puts no biodefence framing on them.
- HQ: Louisville, KY 40207 (NIH RePORTER org record, UEI CHJ8YC513988). No street address published.
- Email: none published. The site has only a contact form ("Feel free to contact David Wolfson, CEO TSI using the form below", https://tele-stethoscope.com/contact-tsi). Web searches found no @tele-stethoscope.com address, and the NIH records list none.
- Lead: David Wolfson, CEO (about page: "David Wolfson serves as CEO. Mr. Wolfson combines a mechanical engineering background with an MBA..."; listed as PI/CEO on all four NIH awards). Greeting: "Dear Mr. Wolfson".
- Others: Fleming Scientific (analytics partner; adapted its nonlinear dynamics software in 2019). NIH co-PIs: Martin Richard Huecker (1R43HL169087, 1R43HL172484), John Conrad Heironimus (1R43HL172484), Ryan M. Close (1R43HL186101). Collaborators: University of Louisville, MaineHealth, Lehigh Valley Health Network.

## Facts used
- Home page: software for underserved environments. Focus areas: mHealth, Smarter Devices and Prediction. "In over 20 clinical studies since 2020 ... any ordinary mobile phone can accurately predict findings of gold standards such as echocardiogram, spirometry, MRI/CT, PCR and certain blood labs." Also: "7 billion phones globally"; invariant to environmental noise, BMI and skin color; "locked", physics-based; results in real time; predicted low birth weight early in pregnancy.
- App page: "recording speeds that are 50 times faster than the leading digital stethoscope"; strong infrasonic sensitivity; no additional hardware or gels; simple enough for patient self-examination. The app's own screens show the recording sites "Aort / Lung / P" and "START RECORDING".
- Clinical studies page: 24 studies in four hospital systems, funded internally, by NIH and by BARDA (rows used: echo EF, E/A, E/e′ and AS; spirometry COPD; pneumonia, bronchitis and influenza A; carotid stenosis and ischemia; pre-eclampsia; mHealth for chronic disease, recruiting fall 2026).
- Publications page: DOIs for 2024–2026 papers (JMIR Cardio 2024; Diagnostics 2025; Frontiers CVM 2026; AJEM 2026; BMC Pulm Med 2026; J Emerg Med 2026). "No completed patient recording has ever been discarded."

## Activity (since 2025-05-18)
- NIH NHLBI SBIR Phase I 1R43HL186101-01, "mHealth AI for Remote & Rural Chronic Disease Detection and Management", $406,367. Notice 2026-07-28; runs 2026-09-01 to 2027-08-31. https://reporter.nih.gov/project-details/11349166
- Four peer-reviewed papers in 2026 (see publications page). The site was edited through 2026-09 (WordPress REST modified dates: publications page 2026-09-22).

## Bad-site evidence
- The default WordPress "Sample Page" is still live at /sample-page/: "Hi there! I'm a bike messenger by day, aspiring actor by night ... I like piña coladas."
- The hero is AI-generated clip art with a typo baked into it: "TSI brining healthcare to billions".
- Links and images point at the staging host telestethoscope2264.live-website.com (About, Clinical studies and Contact links on the home page; the hero and app images).
- Unstyled default theme with a "Designed with WordPress" footer. Typos in the copy ("thermograpraphy", "fetal-placental ration", "commercial commercial use"). No email or address, no team beyond one CEO paragraph, and no news section.

## Palette
- From the logo PNG (wp-content/uploads/2026/02/logo-3-scaled.png). Navy TSI letters deepened to the ink #07122a. Aqua wave → --accL #4fd6f5. Magenta wave peak → --ember #ff4f9e. Aqua darkened to #0a6a92 for text on the cool white #f2f6f9. The live site is the default white theme. Wordmark set live in Manrope 700 (close to the logo's geometric sans) with a small heart-sound mark.

## Hero / story
- Hero (option c, crafted render of the real product): an unbranded smartphone at three-quarters, rendered by render.py (perspective homography, extruded aluminium edge, glass sheen, alpha ground). Its screen shows a heart-sound recording (S1/S2) and its delay-embedding state-space loop, with the app's own site tabs (Aortic / Lung / P). Aqua glow drawn live, slow float, no pointer response. Why not (a) or (b): the site's only imagery is AI clip art, and the Unsplash/Pexels stethoscope photos were bright tabletop shots that would read as pasted panels on the dark hero. Their product is the phone software, not a stethoscope.
- Story: one engraved composition: (1) phone plus phonocardiogram drawing across; (2) state-space reconstruction; (3) readouts against echocardiogram, spirometry, CT/MRI and blood labs. The signal is synthetic and labelled as illustrative.
