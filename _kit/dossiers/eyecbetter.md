# Eye C Better Corp. (slug: eyecbetter) — HOME-ONLY build, batch 2026-11h

- Site: https://eyecbetter.com/ (WordPress/Elementor, read 2026-11-22). Bad-site evidence: the hero is a mock-up of a phone and a pair of glasses on grey with a thin blue text block and a dark pill "video demonstration" button; the page and sitemap.xml are compromised with injected casino links ("pin up casino", "mostbet") and hundreds of adult-spam `wp-post.php?viral=` URLs; "Empty heading" left on the home page; "Provider Reimbursment" typo in the nav; footer "2023 All rights reserved"; the About page reads "to be an active participants". Pages read: home, About (about-2), Contact (contact-ecb), press posts (licence 2022, Pitt option 2021, Gold-standard IOP, Amy Dixon 2023).
- Domain check: company name, team and press on the page; contact page publishes info@eyecbetter.com, 513-544-3129, 47474 Washington St, La Quinta, CA 92253; the 2023-09-26 PR Newswire release carries joyg@eyecbetter.com (Cloudflare-obfuscated) and a La Quinta dateline; NIH RePORTER lists EYE C BETTER CORP, La Quinta CA 92253, UEI LN1FESJLGMN6, PI Joel M. Solano. No newer site on another domain.
- Type: medtech, non-contact tonometry (intraocular pressure) for glaucoma plus a patient app. No pathogens, toxins or biodefence.
- HQ: 47474 Washington St, La Quinta, California 92253 (contact page; NIH zip 92253-9508).
- Lead: Joel M. Solano, MD — founder and CEO (Our Team; 2023 releases; NIH PI). No pronouns on the site ("Dr. Solano is..."); greeting "Dear Dr. Solano".
- Best published email: info@eyecbetter.com (contact page). Also published: joyg@eyecbetter.com (Joy Glen, CMO, in the 2023 PR Newswire release). No personal email for Dr. Solano is published.

## Activity (pre-screen OK)
- 2025-08-28: NIH/NEI SBIR Phase I award 1R43EY037593-01, $315,825, project 2025-09-01 to 2027-05-31, "New, Non-Invasive (No-Puff, No-Touch), Tonometry Method: Remote photonic IOP biomonitoring using the damping factor of transitional oscillations after terminating its stimulation by a sound wave" — https://reporter.nih.gov/project-details/11182264
- 2023-09: StartEngine Reg CF campaign (PR Newswire); Amy Dixon appointed Director of Patient Advocacy.
- 2022-03-10: exclusive worldwide licence with BIRAD R&D and Universitat de València (24 granted, 2 pending patents). 2021-07-31: option with University of Pittsburgh (trans-lid tonometer).

## Facts used
- Home: "Pioneering Digital Glaucoma Healthcare"; mission "a Lifetime of Vision"; counters 100,000,000+ affected today, 160,000,000+ by 2050, >50% don't know they have it; digital therapeutic, Patient Care Coordinators, "Wearable, no-touch, no-airpuff tonometer that transmits to digital therapeutic patient app"; team and advisory board bios.
- About: patient app (personalised analytics, health nudges, AI-driven health signals, per-patient per-month subscription via providers/organisations/health plans); seewell™ score (from their app image); Glaucoma 360 launch Feb 2023.
- Press: pressure can fluctuate up to 10 mmHg per day; most measured only a few times a year; IOP the most important factor; leading cause of irreversible blindness.
- NIH abstract: PIB = sound-wave-induced scleral oscillations monitored by laser speckle; physical model + ML; miniaturisation into monoculars or eyeglasses with readings relayed to physicians via phone; Aims 1–4 (≤1 mmHg in porcine eyes; pupil monitor and 0.6 mW threshold; 30 healthy human eyes; safety and comfort).

## Palette / type
Logo (Vertical-Logo-Navy.png #1f1f5a; inner dome and the wordmark "c" #26a9e1); site headings #02075d. Ink #0b0b26 from the logo navy, accent cyan (#4cc0ef on dark, #1680b5 on light), navy solid buttons on light. Poppins (their site's heading face) + Inter. The arch-and-dome mark is redrawn as inline SVG.

## Hero
Option (c), a crafted render of their subject: the human eye whose pressure they measure. Ray-traced offline by render.py (numpy): anatomical proportions (globe 12 mm, corneal curvature 7.8 mm, limbus ~5.85 mm), refracting cornea over a procedural iris (wandering stroma fibres, collarette, crypts, pupillary ruff, limbal ring), wet sclera with conjunctival vessels and bumped tear-film reflections, softbox catchlight, cyan rim light; true alpha, 1056 px. Unique: other eye concepts use an iris macro photo (bedrocktherapeutics), an engraved sagittal section (olmedabio) and a slit lamp (blackspacetechnology). Slow drift, no pointer response.

## Story
One fine-line scene: wearable sensor (sound, laser, camera) → sagittal eye. (1) Sound wavefronts set the sclera oscillating; (2) the laser lights the spot, speckle is read, and the ring-down trace draws (damping → IOP); (3) the reading travels to the patient app and on to the specialist.
