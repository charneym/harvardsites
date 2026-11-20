# Tessonics Inc. — dossier (home-only build, batch 2026-11e, medtech / ultrasonic imaging)

Sources, fetched 2026-11-20: tessonics.com (home, /about, /contact, /careers, /products/f2, /f1r, /riwa, /smart-welding-gun, /am-1202, /dfcs-1000);
tessonicsmedical.com (Tessonics Medical Systems, 3D-TRUBI); Government of Canada grants record NRC IRAP
https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2026-2027-Q2-1046384%2Ccurrent ; University of Windsor IDIR profile
(uwindsor.ca/idir/56/dr-roman-gr-maev-phd), Physics faculty-and-staff listing (uwindsor.ca/science/physics/434/faculty-and-staff),
UWindsor Daily News 2024-05-14 (Sokolov Award); Wikipedia "Roman Maev".

## Pre-screen
- Active: NRC IRAP contribution to Tessonics Inc. (BN 856875778), $560,000.00, agreement Sep 1, 2026 – Sep 30, 2027, "Hospital-grade 3D-TRUBI Development and Preparation for Phase II Clinical Evaluation": "This project will develop a hospital-grade 3D-TRUBI prototype for use in both military Role III medical facilities and civilian Level I trauma centres. The system will combine advanced hardware, AI-supported imaging, and more efficient clinical workflows."
- Bad site (registry + live check 2026-11-20 at 1440): dated Bootstrap template; generic Font Awesome icon circles (a "?" icon for "About Us"); fully justified body text with wide rivers; stock robot-line hero overlaid with a "plexus" network-line effect; the home page never mentions the medical programme (3D-TRUBI) or the NRC grant; no team, leadership or news anywhere; cookie banner over content; registry screenshot (11e-tessonics.jpg) shows a broken render (unstyled bullet-list nav, default blue links, Times New Roman over the banner, "Back to top" artifacts).
- Scope: industrial NDT + transcranial ultrasound for traumatic brain injury diagnosis (military and civilian trauma). No pathogens, toxins or biodefence.
- Note: Canadian HQ (Windsor, ON); US arm Tessonics Corp., Birmingham, MI. Assigned by the coordinator.

## Company (tessonics.com)
- "We develop and manufacture leading edge ultrasonic technologies for industrial and medical applications. We are a leader in high resolution imaging and Non-Destructive Testing (NDT)."
- Established 2003 with support of DaimlerChrysler and the University of Windsor. Tessonics Corp (USA) founded 2003 in Birmingham, MI; Tessonics Inc. (Canada) 2005 as head office in Windsor. RSWA launched 2005 (exclusive agreement with DaimlerChrysler); F1 2010; F2 2019. All production and final assembly in Windsor.
- R&D team: "more than thirty Canadian, USA and European patents". Group: five wholly owned subsidiaries (Canada, USA, Germany GmbH Frechen, Poland Wrocław, China Beijing) + dealer network (USA, Mexico, Brazil, Germany, GB, Poland, Czech Republic, Japan, South Korea, China). Customers: automotive OEMs, tier 1/2 suppliers, agricultural and aerospace (logo wall: BMW, Ford, Chrysler, Hyundai, VW, Mercedes, Kia, Toyota, Honda, GM, Boeing, Bombardier, Embraer, Rolls-Royce, Magna, Gestamp, KUKA, …).
- Spin-offs: The True Image Solution (2013, NDE of art and cultural heritage); Tessonics Medical Systems (Birmingham MI, 2019; 3D-TRUBI); also Ontech Coatings, True Phantom Solutions linked.
- Products: F2 (RSWA/ABIS, matrix-array C-scan), F1-R, RIWA (transducer in the welding electrode, AI analysis), FlexGun Ultra / FlexGun 3 smart welding guns, AM 1202 acoustic microscope (5–100 MHz), DFCS cold spray. RSWA: 2T/3T stacks, 0.6–2.4 mm, estimates nugget diameter vs minimum.
- 3D-TRUBI (tessonicsmedical.com): 3D imaging of intracranial hemorrhages and their types (epidural, subdural, intracerebral); point-of-injury; ruggedized, portable, lightweight; originally developed by Tessonics over the past decade; OASDHA CRMRP award W81XWH-20-1-0852; MTBI2 clinical study at Brooke Army Medical Center.
- Contact: 787 Ouellette Ave., Windsor, ON N9A 4J4; +1 (519) 250-4455; US 2019 Hazel Street, Birmingham, MI 48009. Emails published on the contact page: saleseu@tessonics.com (Europe), mk@tessonics.com (Poland). No general info@ address published (contact form).

## Lead
- Dr. Roman Gr. Maev — founding President and CEO of Tessonics Group (Wikipedia). University Professor Emeritus of Physics, University of Windsor (faculty listing); founding Director General, Institute for Diagnostic Imaging Research; ICNDT Sokolov Award 2024. Not named on tessonics.com.
- Greeting: "Dear Dr. Maev". Best published email: maev@uwindsor.ca (UWindsor Physics faculty listing). Company fallback: saleseu@tessonics.com.

## Brand
- Live site: charcoal #343a40 nav/#343a3f logo outline, white, logo blue #246ba3 (pixel-sampled from Tessonics-Logo-Blue.webp). Concept: ink #0b1015, bone #eef1f3, accent #246ba3 / #5c9bd1 on dark; Jost + IBM Plex Sans. Header/preloader logo = their outline wordmark (TessonicsGrey.webp) recoloured to bone.

## Build notes
- Hero (HOME_BRIEF update option b; their own hero is a stock photo with a network overlay): Pexels photo 19233057 "High-tech robots assembling a car in a modern factory setting" https://www.pexels.com/photo/assembling-machines-in-factory-19233057/ (Pexels licence, free commercial use). Graded offline to a steel-blue duotone on the ink, highlights pulled down, top/base feathered; placed right of ~45% with an ink wash over the headline side; slow Ken Burns. Caption: "Robotic car-body line" (no claim it is a Tessonics site).
- Products section: their own F2 Platform product photo (tessonics.com/images/F2-Three-Units.webp, transparent PNG-webp) copied locally.
- Story: engraved cross-section of a resistance spot weld: sheets + nugget → matrix transducer → echoes (far side through the nugget, gap beside it) → C-scan grid with nugget diameter. Proportions schematic.
- Nav (Technology / Products / Medical / Group) opens build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (tel + mailto saleseu@tessonics.com + addresses).
