var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','800 1em "Figtree"'];
var MAIL="info@ivosmedical.com";
var RP="https://reporter.nih.gov/project-details/";
var IV="https://ivosmedical.com/";
/* the road to market: every line from ivosmedical.com (/milestones, press releases) and NIH RePORTER.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["NHLBI · R43HL164325","Feasibility","Phase I","2022","An NIH SBIR Phase I grant ($247,334) from the National Heart, Lung, and Blood Institute to test the feasibility of the technology, with clinicians at UC Irvine Medical Center’s Departments of Anesthesiology and Emergency Medicine.",RP+"10483262","NIH RePORTER"],
 ["NHLBI · R44HL164325","Product development and clinical validation","Phase II","2024–2026","An SBIR Phase II award of about $1.9M. Its aims: complete product development and achieve clinical validation of the BOSS G4™. The latest continuation was awarded in September 2026.",RP+"11389221","NIH RePORTER"],
 ["NIH C3i","Concept to Clinic: Commercializing Innovation","Accelerator","2025","Selected for the NIH C3i incubator, which advances biomedical technologies and their founders from concept to clinical readiness.",IV+"ivos-medical-joins-nihs-c3i-program-to-accelerate-commercialization-of-boss-g4-airway-management-technology/","Announcement"],
 ["BOSS G4™","Commercialization","Market entry","Targeted 2026","IVOS is initiating commercialization of the BOSS G4 and continuing product refinements. The BOSS Sleeve is an investigational device, not yet cleared by the FDA, and not available for commercial sale.",IV+"ivos-medical-announces-boss-g4-video-laryngoscope-sheath-designed-to-improve-intubation-safety-in-high-risk-patients/","Press release"]];
/* ivosmedical.com team section. Text-only masthead (CI/CL); summaries condensed from their bios. */
var TEAM=[
 {g:"Management",name:"Gabriel Punsalan, MS, CRNA",title:"Founder & Chief Executive Officer",sum:"Clinician-innovator advancing the NIH-backed, patented BOSS™ platform, bringing frontline CRNA airway expertise to the clinician needs it was built for."},
 {g:"Management",name:"Francis Duhay, MD, MBA",title:"VP, Clinical & Regulatory Affairs and Business Development",sum:"30+ years in medical devices. Former Chief Medical Officer of Edwards Lifesciences and SVP of Olympus Corp."},
 {g:"Management",name:"Blake Sama, MS",title:"Head of Engineering, Quality & Operations",sum:"15+ years leading product innovation, operations and growth. Former SVP, Operations & Engineering at Perineologic."},
 {g:"Advisor",name:"Michael Magnani, MS, MBA",title:"Commercialization & Marketing Advisor",sum:"20+ years of global medical device commercialization; CEO of two Class II/III device startups and past President of Clinical Laserthermia Systems Americas."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NIH continues IVOS Medical’s NHLBI SBIR Phase II award, “IVOS Medical: Intubation, Optimized.”","NIH RePORTER",RP+"11389221"],
 ["September 2025","IVOS Medical joins NIH’s C3i Program to accelerate commercialization of BOSS G4™ airway management technology","GlobeNewswire",IV+"ivos-medical-joins-nihs-c3i-program-to-accelerate-commercialization-of-boss-g4-airway-management-technology/"],
 ["February 2025","IVOS Medical names Francis Duhay, MD, MBA as Vice President, Clinical & Regulatory Affairs and Business Development","Press release",IV+"ivos-medical-names-francis-duhay-md-mba-as-vice-president-clinical-regulatory-affairs-and-business-development/"],
 ["January 2025","IVOS Medical announces the BOSS G4™ video laryngoscope sheath, designed to improve intubation safety in high-risk patients","Press release",IV+"ivos-medical-announces-boss-g4-video-laryngoscope-sheath-designed-to-improve-intubation-safety-in-high-risk-patients/"],
 ["January 2025","IVOS Medical receives a Phase II SBIR award from the National Institutes of Health for $1.9M","Press release",IV+"ivos-medical-receives-phase-ii-sbir-award-from-the-national-institutes-of-health-for-1-9m/"],
 ["July 2023","Lessons, not failures: it all starts at the first step, by Gabe Punsalan","ANA Magazine",IV+"lessons-not-failures-it-all-starts-at-the-first-step/"]];
var SHEETS=[];
