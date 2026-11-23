# xDot Medical Inc (slug: xdotmedical) — HOME-ONLY build, batch 2026-11i

- Site: https://www.xdotmedical.com/ (Wix, read 2026-11-23; one page with Home / Team / Contact anchors, footer "© 2023 xDot Medical Inc. Design by Pipa B."). Domain check: company name, logo, team, street address and info@xdotmedical.com on the page; the trial contact on ClinicalTrials.gov (NCT07464353, NCT07719244) uses the xdotmedical.com domain (ginny.kirby@xdotmedical.com); the February 2024 release is datelined Maple Grove, MN like the site address. No newer site on another domain.
- Type: medtech, automated suture-based vascular closure for large-bore femoral arterial and venous access (TAVR, EVAR etc.). No pathogens, toxins or biodefence.
- HQ: xDot Medical Inc, 7538 Urbandale Lane N, Maple Grove, MN 55311 (site Contact).
- Lead: Aashiish Agnihotri, PhD, Founder & CEO (site Team; quoted as CEO in the Feb 2024 release; release contact). Greeting: "Dear Dr. Agnihotri".
- Best published email: info@xdotmedical.com (site Contact). No personal address found published for the CEO; clinical-trial contact on ClinicalTrials.gov is Virginia (Ginny) Kirby, ginny.kirby@xdotmedical.com.

## Activity (pre-screen OK)
- 2026-11-03: TCT 2026, "Novel Vascular Closure Device (xDot): US Early Feasibility Study Results", presented by Susheel K. Kodali (TCTMD). https://www.tctmd.com/slide/novel-vascular-closure-device-xdot-us-early-feasibility-study-results
- 2026-07-06: MassDevice, FDA IDE approval for the xDot Access Management System pivotal study. https://www.massdevice.com/xdot-begin-study-vascular-closure-device/
- 2026-06-16: US early feasibility study NCT07464353 started (30 patients; Downers Grove, Saint Cloud, Tulsa, Sioux Falls, Milwaukee). Pivotal NCT07719244: 266 subjects, dual cohort, est. start 2026-09, not yet recruiting.
- 2024-02-12: EIN Presswire, first-in-human study of the xCinch Access Management System (Sanatorio Italiano, Asunción, Paraguay; 5 arterial + 3 venous closures, immediate hemostasis in every case).

## Bad-site evidence
Generic 2023 Wix template: a stock photo of a hugging senior couple in a field (file "side-view-of-senior-couple-hugging-outside-in-spri-2021...utc_edited.jpg") as the hero, faint dark-grey "Introducing xDot Medical" over the bright photo, a "LEARN MORE" button, a sparse three-item nav (Home / Team / Contact), team shown as screenshot crops ("Screenshot 2023-02-01 at 2.22.44 PM.png"), and nothing about the device, IDE, trials or TCT results.

## Facts used
- Site: "early-stage medical device company developing an automated vascular closure solution for catheter-based therapies that provides instantaneous closure of the access site"; "Catheter-based therapies are revolutionizing treatment for millions of patients needing cardiovascular care"; team, board, advisors with affiliations; address; email.
- Feb 2024 release: patented dynamic cinching mechanism; automatic closure; guidewire access maintained; no manual compression after large-bore sheath removal; designed to lower failure rates, especially in calcified vessels; suture-based closure with an extravascular implant (Kodali); automates the surgical purse-string approach (Bolling); >3 million patients/yr served by large-bore catheter therapies by 2030 (company estimate); current solutions "inadequate" with high failure rates; investigational device, not for sale.
- ClinicalTrials.gov: AMS delivers the xDot Implant Unit around the access site on the target vessel; EFS eligibility 8F–22F arterial devices/sheaths (e.g. TAVR, EVAR); pivotal design and 30-day follow-up.

## Build
- _kit/home/xdotmedical/* (assemble.py from firelight regions) → _kit/src/xdotmedical.src.html → /xdotmedical/index.html.
- Palette from the live site: charcoal header #404040/#373B4D → ink #1f2229; sky-blue #7fccf7 accent; deep blue #28607A for buttons on bone. Montserrat (matches the wordmark) + Inter.
- Logo: the site's own vector SVG (inline paths), white; header uses a horizontal lockup of the real mark + wordmark paths, loader the original stacked logo, solid fill.
- Hero: option (c), a crafted render (render.py, sphere-traced SDF, real alpha) of a femoral artery segment cut at both ends with a single implant seated on the access site. Rev 2 (coordinator review, DT): the vessel wall is a calm, pale, desaturated blush tissue tone with a subtly darker lumen and the sky-blue rim, no glossy red; the implant (sky-tinted, brighter) is the focal point. No stock photo, nothing shared with another concept.
- Story: fine-line long section of the groin (skin, fat, fascia, common femoral artery) with large-bore sheath and guidewire, plus a view-from-above inset; steps access → implant around the site → purse-string cinches closed as the sheath withdraws.
- Nav Technology / Clinical / Team / News open build-out pages (buildout lib); Contact scrolls to the contact block.
