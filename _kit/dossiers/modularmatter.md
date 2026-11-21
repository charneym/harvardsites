# Modular Matter, Inc. — dossier (home-only build, batch 2026-11e, medtech / prosthetics)

Sources, fetched 2026-11-20: modularmatter.com (home: Our Work, Our Company, Our Technology, founder, Our Funding, Contact; /services);
NSF award 2528353 (api.nsf.gov and https://www.nsf.gov/awardsearch/showAward?AWD_ID=2528353); UMD Clark School news 2023-01-27
"Prosthetics: A Better Fit" (https://eng.umd.edu/news/story/prosthetics-a-better-fit). The MTEC member listing (mtec-sc.org) carries
placeholder contact data (123 Modular Way, (123) 456-7890, info@modularmatter.com) and was NOT used.

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11e-modularmatter.jpg): Hugo "Academia" academic template; a giant grey clip-art cube logo in a
  white card filling the first screen, wide-tracked thin tagline, tiny logo in the nav; contact is a Formspree form, funding shown as bare logos.
- Active: NSF SBIR Phase I 2528353, $305,000, 2026-08-13 to 2027-05-31, "Universally-Adjustable Modular Prosthesis Socket"; PI Jeffrey L Gair.
- Scope: prosthetic sockets and exoskeletons. No pathogens, toxins or biodefence.

## Company
- Awardee address (NSF): 3412 Three Daughters Ct, Monrovia, MD 21770 (likely residential; site shows only "Monrovia, Maryland").
  Performance site: 300 W Pratt Street, Baltimore, MD 21201. Phone (NSF): 443-961-1121.
- Email: no address on modularmatter.com (form only). Best published: j.gair.jr@scineticsinc.com (PI email in the NSF award record;
  Scinetics, Inc. is Gair's R&D company, which also filed EP 4149397 "Modular Prosthesis System").
- Technology (site): material for transferring loads to and from the body and monitoring real-time biofeedback; patent-pending; modular
  reconfiguration; adjusts to short-term volume changes. Products: modular prosthesis, exoskeleton. Services: fitting, custom manufacturing, socket-resizing training.
- NSF abstract: discrete mass-producible modules in preassembled sheets by SLS (comparable to injection moulding); upper/lower limb and growing
  patients; single office visit; fitting time reduced by 2/3; $2.7B US market; Phase I: harnessed prototypes, max/min pressure and hotspot mapping.
- UMD 2023: socket from mechanical metamaterials; MIPS grant with UMD (Eleonora Tubaldi, ME, simulations; Jae Kun Shim, kinesiology, fit tests);
  adjustable sockets up to $30,000 vs ~1/10 manufacturing cost (Gair). Gair: UMD PhD 2017 (ME), also CEO of Scinetics.
- Funding logos on site: NSF, TEDCO, US Defense Health Agency, US Department of Defense.

## Lead
- Jeffrey L. Gair, Jr., PhD — Founder and CEO (site). Greeting: "Dear Dr. Gair".

## Brand
- Live site: white, logo black + greys #1a1a1a/#333333/#808080 (logo.svg), coral #fc6f5c (theme-color, active nav), Lato.
  Concept: ink #101012, bone #f3f3f1, accent #fc6f5c, Sora display + Lato; their logo.svg recoloured for dark (cubes keep three greys).

## Build notes
- Hero (HOME_BRIEF option c): crafted offline three.js render (_kit/home/modularmatter/render.js) of a modular below-knee socket (sintered
  modules over a liner) on a titanium pylon and carbon foot, on the site ink; illustrative, captioned "Illustrative render". Unsplash/Pexels
  prosthesis photos checked: free ones are bright white-studio shots of whole people (would read as pasted panels on the dark hero).
- Story: engraved elevation: limb + liner → modules (preassembled sheet → socket wall) → fit (volume-change arrows) → test (hotspots, load).
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto the NSF-published PI email).
