# Cytocybernetics (slug: cytocybernetics) — HOME-ONLY build, 2026-11-21

- Site: https://cytocybernetics.com/ (Turbify/XPRS site builder). Batch 2026-11f.
- Type: US biotech research-tools company (SPEC §2c): plug and play dynamic clamp (Cybercyte), far-red voltage-sensitive dyes (Cytovolt), ion-channel modeling software (CyberSolver, CyberQ), custom electrophysiology services. Cardiac and neuronal electrophysiology; no pathogens, toxins or biodefence.
- HQ: Cytocybernetics, Inc., North Tonawanda, NY 14120 (NIH RePORTER org record, UEI G69NH6PMLT75). Street address not confirmed in a primary source (an Upstart NY listing reportedly gives 5000B Tonawanda Creek Rd, not verifiable: page down), so the site shows town + ZIP only. Earlier also at 120 Sherman Annex, UB South Campus (2018 coverage).
- Phones (their site): 1-855-351-6285, 716-322-4222. Emails (their site): web25@cytocybernetics.com (quotes, loaners, dye orders); admin@cytocybernetics.com (Research Compliance Officer, about page).
- Lead: Glenna C. L. Bett, Ph.D., co-founder and CEO (UB releases Jan/Oct/Nov 2018; CB Insights lists her as current CEO, undated). Greeting: Dear Dr. Bett. No newer source confirming the title was found.
- Others: Randall L. Rasmusson, Ph.D., co-founder and president (UB Jacobs School news, Nov 2018); Mark W. Nowak, Ph.D., lead scientist, joined 2015 (UB release Oct 2018), contact PI on R44MH144721.

## Facts used
- cytocybernetics.com cybercyte.html / dynamicclamp.html: combines in silico synthetic cells and in vitro patch-clamped cells in real time; electronic "transfection" in seconds, not weeks; up to eight patch-clamped cells; over 100 pre-installed validated ion channel models; icon driven, no programming; compatible with all major amplifiers (Axon Instruments, Molecular Devices, HEKA); Cybercyte MC1 up to 8 cells, suitable for automated systems; IK1 added to iPSC cardiac myocytes turns spontaneously beating cells into quiescent cells with a ventricular-type AP on stimulation; inverse current knocks a channel out; "Contact us to arrange a loaner".
- voltage-sensitive-dyes.html: Cytovolt1 (Di-4-ANBDQBS) lasts up to four hours without damaging the cell; Cytovolt2 (Di-4-ANBDQPQ); kit = Cytovolt Excite, Cube, Detector.
- cybersolver.html, fda-qnet.html, custom-services.html: as summarised on the products list.
- Home page: teamed up with HEKA; webinar with Sophion; new papers from Cybercyte users in the Chahine lab (Heart Rhythm, Oct 2026, PMID 42248312) and the Waxman lab (J Gen Physiol, Jan 2027 issue, PMID 42961300).
- NIH RePORTER abstract of R44MH144721: NEURON + Cybercyte; "enabling users to have computers converse with cells" (hero line).
- Hero (v2, after coordinator review): crafted render of the two-unit Cybercyte stack (CIM on V10) by _kit/home/cytocybernetics/render.py, modelled on the company's own product photo (cybercyte.html, lh3.googleusercontent.com PUL4hVqJ1B…): satin-black lid, brushed-aluminium fronts, the CIM ON/OFF toggle + LED, the V10 clamp-mode and power toggles, five ten-turn dials 1-5 with toggles, wordmark as panel print. 1254×960 transparent WebP, shown at <=native size. (v1 used the photo cut-out; rejected as soft/low-res.)
- Palette: logo indigo #29166f (logo.png); violet of their Cybercyte diagrams; link blue #2098d1.

## Activity (since 2025-05-18)
- 2026-08-24: NIMH SBIR Phase II continuation 5R44MH144721-03, $1,013,217, "Real Time NEURON Simulation for Experimental Applications". https://reporter.nih.gov/project-details/11404831
- 2025-09-03: NIMH SBIR Phase II 9R44MH144721-02, $1,013,966. https://reporter.nih.gov/project-details/11184896
- 2026: SfN booth 338 (Washington, DC) and poster, per their home page; new user publications (above).

## Bad-site evidence
- Amateur builder layout: mixed Times/Arial text blocks, centred all-caps headings, pasted poster images and partner logo tiles as the content.
- Header crams a "Quick Quote" email box and loaner notice in purple Times beside the logo; the home page's lead banner is a cropped screenshot of a journal citation.
- Leftover template text from a pet business ("WE ARE HERE FOR YOU AND YOUR PET") in the contact pop-up markup; /contact.html returns a LiteSpeed 404; no team, no company story, no address on the site.
- Gates (2026-11-21): smoke, clip 1440/390, reveal 1440/390, anim, overlay, masthead, mixed, polish, loader, unstyled, cramped, hoverpad, split, balance, logo, buildout-test (8 clicks), fit-audit (5 widths), loader-contrast all OK; hero-audit "no title found" (known home-only harness limitation, as on olmedabio/dotyscientific/owictechnologies). Hero checked by eye at 1920x930, 1440x900, 390; x6 luminance boost shows no box edge.
- v2 hero placement (measured): centre 68-71% of width at 1920x1080/1920x930/1440x900/1280x800; text-to-art gap 140-307px; >=170px below the nav; x6 boost shows no box edge. Gates rerun: smoke, clip 1440/390, anim, polish, balance, unstyled, loader, buildout-test, fit-audit, loader-contrast OK.
