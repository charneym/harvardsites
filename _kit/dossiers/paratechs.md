# ParaTechs Corporation — dossier (home-only build, batch 2026-11f, biotech/medtech: rodent assisted reproduction)

Sources, fetched 2026-11-21: paratechs.com (home, About Us, Contact Us, All Products, product JSON for mNSET 60010 / rNSET 70010 /
Cryodropper 80010 / VE-BEVS 10010, Contract Research Services, News, Events, Scientific Advisory Board, NIH ORIP page, Nitrate Reductor
and Cryodropper resource pages); NIH RePORTER API (org PARATECHS CORP., Lexington KY: 32 NIH SBIR/STTR records 2005–2026);
JoVE doi 10.3791/65477 (Crossref: 2023-07-07, Stone & Srodulski); Kentucky SOS annual report Feb 2025 (via search: Fath-Goodin officer,
principal office 1122 Oak Hill Drive).

## Pre-screen
- Bad site (screenshot _kit/sourcing/v2-sheets/11f-paratechs.jpg): Shopify shop theme; home page is a stack of flat blue full-width
  heading bars over plain text with a clip-art cartoon mouse in a hat; an "EU right of withdrawal" legal notice and a raw shopify.com
  account URL on the home page; no explanation of the NSET method on the home page;
  News page's newest item is February 2017; "Therapuetic" typo in the footer.
- Active: NIH OD SBIR Phase II 5R44OD032088-03, $535,088, notice 2026-08-25 (project to 2027-08-31), "A novel rat sperm
  cryopreservation and artificial insemination system", contact PI Barbara Jean Stone (https://reporter.nih.gov/project-details/11397362);
  2R44OD032088-02 $560,816, 2025-08-14. Site: TT2026 (Leiden) post; "New look for mNSET" (2026).
- Scope: research devices for laboratory rodent reproduction (embryo/sperm transfer, cryopreservation), insect-cell protein expression,
  a nitrate assay. Not pathogen/toxin/biodefence science. (Their contract-services list and one product page mention "pathogen transfer"
  as a device use; the concept site does not feature it.)

## Company
- ParaTechs Corporation, privately held, formed 2004 on University of Kentucky IP. 1122 Oak Hill Drive, Suite 100, Lexington, KY 40505.
  Phone +1 (859) 317-9213. Emails: info@paratechs.com (general), sales@paratechs.com (POs), margo@paratechs.com (NSET workshops).
- Products: mNSET 60010 (US Patent 9,615,903; EtO sterilized; 10/box), mC&I 60020, rNSET 70010 (FDA-registered, ISO 13485 manufacturer),
  Cervical Manipulation Rod 90050, Cryodropper-E 80010 / -S 80020 (2 mL or 4 mL cryovials), VE-BEVS cell lines (up to 8-fold protein vs
  parental Sf9), pAcVE vectors, Nitrate Reductor 50010 (96 Cu-plated Cd pins). Research use only.
- RAIS (NIH abstract): Cryodropper freezes rat sperm → motility enhancing device (selects motile sperm, removes cryoprotectants,
  concentrates) → non-surgical insemination device to the uterine horn, no anesthesia/analgesia; reduces idle colonies, protects lines.

## People (site About Us / SAB)
- Angelika Fath-Goodin, PhD — Co-founder; CSO since 2004, CEO since 2011. LEAD. Greeting: "Dear Dr. Fath-Goodin".
- Bruce A. Webb, PhD — Co-founder (prof. emeritus, Entomology, UK). Barbara Stone, PhD — Chief Science Officer, Director of NSET
  Technology, PI on R44OD032088. Sarah Srodulski — Director of Sales and Logistics. SAB: Michael Adang (UGA), Glenn King (UQ).
- No personal email published; best published email info@paratechs.com.

## Brand
- Logo PNG: blue #003a9e (sampled 0,58,158) and helix periwinkle #7588cd; site font Lato. Concept: navy-black ink #080d1a, bone,
  accent #8a9ce0 on dark, #003a9e on light; logo recoloured (blue → bone) for the dark header and loader. Archivo display + Lato.

## Build notes
- Hero (HOME_BRIEF option a): ParaTechs' own studio photo of eight mNSET devices arranged as a star on black
  (https://paratechs.com/cdn/shop/files/mNSET_Snow_black.jpg), luminance-keyed to real alpha, slightly cooled; measured placement right
  of the text, slow ±4° turn. On phones it sits whole above the headline and scrolls with the page.
- Story: one engraved plate of the in-development rat AI system (Freeze / Recover / Transfer / Protect); device geometry schematic.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block.
