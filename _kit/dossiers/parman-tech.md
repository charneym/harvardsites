# Parman Tech, Inc. — factual dossier (home-only build, batch 2026-11c, 19 Nov 2026)

Site: https://parmantech.com/ (GoDaddy Website Builder 8.0; pages Home, Our Technology, About Us, Applications, Contact Us; read 19 Nov 2026)
Address: 815 14th Street SW, Suite 250, Loveland, Colorado 80537 (Contact page). NSF record: 815 14TH ST SW UNIT C250, Loveland CO 80537-6364.
Email: jjcurry@parmantech.com (PI email on NSF award 2538046). The site publishes no email (contact form only).
Origin: "a company that originated at NIST" (About page). Technology: "NIST-licensed".

## Funding and activity (company About page unless noted)
- **NSF SBIR Phase I, award 2538046** — "SBIR Phase I: An instrument for Analysis and Purification of Nanoparticle Drug Delivery Using an Novel Optical Resonator".
  Awarded 25 Jun 2026 (start 1 Jul 2026, expires 30 Jun 2027); **$304,996**. PI John J Curry. https://www.nsf.gov/awardsearch/showAward?AWD_ID=2538046
  (Company site dates it 30 Jun 2026.)
- 30 Jun 2026: made "awardable" in the DARPA ERIS (Expedited Research Innovation System) Marketplace for NanoSelect nanoparticle separation and purification.
- 1 Aug 2025: NIST Phase I SBIR, "Development of Advanced Microfluidic Module with Integrated Manifold and Tapered Capillary for Separation of Particles by Optical Forces" (amount not stated; no public record link found).
- 1 Jan 2024 incorporated (C corp); Oct 2023 home office in Loveland (site says "Loveland, CA", a typo: address is Colorado).
- 24 Dec 2019 TEDCO/NIST N-STEP grant; Parman Tech LLC completed NSF I-Corps; Dec 2018 Parman Tech LLC founded.
- Hiring: "R&D experimentalist", Ph.D. level, "second technical hire".

## Science (sourced)
- 2016 paper: J. J. Curry, Z. H. Levine (NIST), "Continuous-feed optical sorting of aerosol particles", Optics Express 24, 14100 (15 Jun 2016), doi 10.1364/OE.24.014100.
- US Patent 10,073,026 "Optical particle sorter", inventors John J. Curry, Zachary H. Levine, assignee US Dept of Commerce; issued 11 Sep 2018.
- How it works (Our Technology page): heterogeneous stream enters a microfluidic capillary; counter-propagating laser beams (e.g. Fabry-Perot cavity) create a standing wave at an acute angle (45°) to the flow; optical force causes longitudinal displacement varying with size, density or refractive index; controlled by balancing optical force and flow rate; a barrier at the end of the cavity isolates a specific size or size range. Product name: NanoSelect.
- NSF abstract: high-power optical cavity with an integrated microfluidic cell; challenges of resonance/finesse with a liquid channel inside the cavity, heating, cavity locking; new materials and geometries for a stable frequency-locked cavity with circulating powers high enough to change trajectories of nanomedicine particles; shorter cavity; manufacturability with external custom manufacturers. Other markets: semiconductor manufacturing, airborne/water-borne threat detection, rapid disease diagnosis.
- Applications page: viral vector purification (AAV, lentivirus, adenovirus; empty capsids); LNPs (mRNA, CRISPR-Cas9, plasmid DNA; size; loaded vs unloaded); synthetic blood (HBOCs, synthetic platelets; DARPA FSHARP and RAPIID); EVs (blood, urine, CSF, breast milk, saliva); synthetic nanoparticles (gold, magnetic, dendrimers, liposomes; CQA).

## People (About page)
- Dr. John J Curry — Founder and CEO (NSF PI). Greeting: Dr. Curry.
- Dr. Douglas Doughty — Founder & CTO (listed three times on the live site).
- Mr. Michael B Olex — Founder and CFO.
- Mr. Steven Montoya — VP of Strategy.

## Bad-site evidence (live, 19 Nov 2026)
1. GoDaddy Website Builder template ("Powered by" GoDaddy footer link, cookie banner); home page is one tagline repeated six times in the carousel markup plus three bullet points.
2. Team section repeats "Dr. Douglas Doughty, Founder & CTO" three times; headshots of mixed sizes (200px to 2560px).
3. Typos and errors: "Januar 1, 2024", "home office in Loveland, CA" (company is in Colorado), "microfludic", "Insuring consistent", "staring media", "August I, 2025", "an Novel".
4. No email published (form only); news is a dated text list inside About Us, with no links.

## Brand palette (BK), sampled from the live logo and site
Logo PNG (ParmanTech New-01.png): navy wordmark #043a58, dotted paths green #4cbe95 and blue #3e77bc. Site theme-color #0a4b6f; site greys #303030.
Mapping: logo navy darkened → --ink #05202f (base) and the light-header wordmark #043a58; logo green → --acc #4cbe95 (laser, lightened #6fd3ad on dark, deepened #1b7656 on light, AA-checked 5.0:1); logo blue → small particles, liquid tint, logo path; bone #f2f4f3.

## Build (HOME_BRIEF)
- Engine: Firelight regions via the home-only split in mechano-therapeutics.src.html; assemble script `_kit/src/parman-tech.assemble.py` with region sources parman-tech.{scene.css,content.js,views.js,field.js,story.js}.
- Hero: the NanoSelect cell — a glass microfluidic chip with an etched channel widening into a cavity, two mirrors on posts holding a green laser standing wave across it at 45°, a mixed stream of particles flowing; large ones are carried along the beam into the upper outlet past a barrier. The live site has no professional photography (only a rendered schematic and headshots), so DG does not call for photos.
- Story (pinned): inlet → standing wave (mirrors) → 45° → displacement by size → barrier; same cell, one camera.
- Team: masthead text format (headshots inconsistent in size).
- Nav: Technology → #story, Applications → #applications, Team → #team, News → #news (links: NSF award, patent, Optics Express), Contact → #contact (mailto + address).
