# ZyVersa Therapeutics, Inc. (slug: zyversa) — HOME-ONLY build, batch 2026-11h

- Site: https://www.zyversa.com/ (Equisolve, read 2026-11-23; pages Home, About, Vision/Mission, Management Team, Board, Inflammasomes, IC 100, Renal Lipids, VAR 200, Pipeline, Contact). Domain check: company name, logo, team, pipeline and "© 2026 ZyVersa Therapeutics, Inc." on the site; investor site investors.zyversa.com; press-release contact uses @zyversa.com.
- Bad-site evidence: dated template; plain white page with a cut-out stock crowd photo under a centred black headline, small grey body text, no design system; investor link returns an Akamai error page.
- Type: clinical-stage specialty biopharma; IC 100 (humanized IgG4 mAb against inflammasome adaptor ASC) and VAR 200 (Cholesterol Efflux Mediator, 2-hydroxypropyl-beta-cyclodextrin) for inflammatory and renal disease; both licensed from University of Miami Miller School of Medicine. Not pathogen/toxin science.
- HQ: 2436 N. Federal Highway, Suite 466, Lighthouse Point, FL 33064 (Contact page; registry listed Weston, FL, the older address). Direct 754-231-1688.
- Lead: Stephen C. Glover, Co-founder, Chairman, CEO and President (Management Team page). Greeting: "Dear Mr. Glover" (site uses "Mr. Glover").
- Best published email: kcashmere@zyversa.com (Karen Cashmere, Chief Commercial Officer; Corporate, Media and IR contact on the 31 Mar 2026 release; 786-251-9641). No CEO email published. Partnerships: zglover@zyversa.com (Collaboration page).

## Activity (pre-screen OK)
- 2026-05-13: "ZyVersa Therapeutics Reports First Quarter 2026 Financial Results and Provides Business Update" (investors.zyversa.com).
- 2026-03-31: FY2025 results and business update (BioSpace): IC 100 IND planned Q4-2026; VAR 200 Phase 2a in FSGS and Alport planned.
- 2025-07-21: CEO mid-year shareholder letter (GlobeNewswire).

## Facts used
- About/Pipeline: TAM >$100B inflammatory, $18B renal; ASC shared by 12+ inflammasomes vs NLRP3 inhibitors; IC 100 blocks formation/initiation and extracellular ASC specks; lead indication cardiometabolic conditions associated with obesity; expansion CNS (Parkinson's, Alzheimer's) and non-CNS (atherosclerosis).
- VAR 200: lead FSGS; Alport syndrome, diabetic kidney disease; add-on to RAS inhibitors and immunosuppressants; 2HPbCD = 7 glucose units in a cone-shaped ring, hydrophilic outside, hydrophobic cavity, inclusion complex; IV or subcutaneous; accumulates mostly in kidney; passive efflux to acceptors such as HDL; ABCA1/ABCG1 reduced in CKD; podocyte damage and proteinuria; preclinical protection.
- Team: Glover, Cashmere, Wolfe (management); Freitag, Sapirstein (board), summaries shortened from the site.
- Stage words are conservative ("planned") because the 13 May 2026 release reportedly describes the VAR 200 study as paused.

## Palette / type
Logo (files/images/logo.png, 600x281): wordmark blue #0d72bb, S-curve green #8bc540, grey THERAPEUTICS. Site CSS: #217cc6, #36afe3, Titillium Web + Open Sans. Mapping: navy ink #0b1520, blue accent #0d72bb on bone / #5fb0ea on ink, green #8bc540 second accent. Logo redrawn as filled SVG paths (home/zyversa/mklogo.py, marching-squares trace of the PNG).

## Hero
Option (c), crafted render: VAR 200's active ingredient (2-hydroxypropyl-beta-cyclodextrin, seven glucose units in a cone-shaped ring) as a space-filling molecular surface in the logo blue, sphere-traced by _kit/home/zyversa/render.py; drawn additively onto the ink (no edges). No stock photo used.

## Story
One fine-line podocyte on the glomerular basement membrane over a capillary: cholesterol builds up (ABCA1/ABCG1 reduced), foot processes efface, protein leaks; VAR 200 rings arrive; rings carry cholesterol out to HDL; foot processes protected, leak stops.

## Nav
Science / Pipeline / Team / News open build-out pages (#/more/<item>, _kit/lib/buildout.js); Contact scrolls to the contact block (mailto, phones, address).
