var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="Inquiry@TransposonRX.com";
var TW="https://transposonrx.com";
function PR(f){return TW+"/pdf/"+encodeURIComponent(f)}
/* programmes: every line from transposonrx.com (/pipeline, /tpn101, /psp, /als, /ad, /nrti, /pkr) and Transposon's press releases.
   [asset, indication, stage, status, detail, link, link label] */
var PIPE=[
 ["TPN-⁠101","Progressive supranuclear palsy (PSP)","Phase 2 complete","Phase 3 in planning · FDA Fast Track","A primary 4R tauopathy in which LINE-⁠1 expression rises with tau tangles. In Phase 2, TPN-⁠101 was the first treatment to reduce CSF neurofilament light chain (NfL) compared with placebo, with dose-related reductions in IL-6; all doses were well tolerated.",PR("Transposon - Press Release - Fast Track Designation - May 21, 2024.pdf"),"Release"],
 ["TPN-⁠101","C9orf72-related ALS / FTD","Phase 2 complete","HEALEY ALS Platform Trial, Phase 2/3","After 24 weeks, about 50% less decline in vital capacity than on placebo, with lower NfL, NfH and IL-6. Selected for the HEALEY ALS Platform Trial at Massachusetts General Hospital.",PR("Transposon - Press Release - HEALEY ALS Platform Trial - May 28, 2025 - Final.pdf"),"Release"],
 ["TPN-⁠101","Alzheimer’s disease","Phase 2","With the ADDF","Tau and TDP-43 pathologies shared with PSP and C9-ALS/FTD are also found in Alzheimer’s disease. An investment from the Alzheimer’s Drug Discovery Foundation supports a Phase 2 study of TPN-⁠101.",PR("Transposon - Press Release - ADDF Funding - July 9, 2025.pdf"),"Release"],
 ["TPN-⁠101","Healthy aging","ARPA-H PROSPR","Award of up to $22M","A multiphase programme to test whether TPN-⁠101 improves aging-related outcomes and extends healthspan, with the University of Rochester, Brown, UConn, UTMB, UT Health and the University of Nebraska.",PR("Transposon - Press Release - ARPA-H Award - March 4, 2026.pdf"),"Release"],
 ["Novel NRTIs","Auto-immune, age-related and rare neurodegenerative disease; cancer","Discovery","Preclinical","Next-generation nucleoside reverse transcriptase inhibitors, ready to be deployed in preclinical studies in indications of high unmet need.",TW+"/nrti.html","Programme"],
 ["Novel PKRi","Disorders of cognition","Discovery","Preclinical","Protein kinase R sits downstream in the LINE-⁠1 pathway and is elevated in the CSF of people with Alzheimer’s disease. Small-molecule PKR inhibitors for compromised cognition and memory.",TW+"/pkr.html","Programme"]];
/* Phase 2 in C9orf72-related ALS/FTD: every line from Transposon's releases of 24 July 2024 and 28 May 2025 */
var EVID=[
 ["Breathing","About 50% less decline in vital capacity than on placebo after 24 weeks (−8.4% vs −16.5%), an objective measure that correlates with survival in ALS"],
 ["Function","Over 48 weeks, decline on the ALSFRS-R in the original TPN-⁠101 group was about 40% less than expected from natural history"],
 ["Biomarkers","Lower NfL, NfH and IL-6 than on placebo; pooled with PSP, a statistically significant NfL-lowering effect at week 24 (p = 0.034)"],
 ["Safety","TPN-⁠101 was well tolerated at all doses, consistent with exposure in over 250 subjects for about 48 weeks"]];
/* transposonrx.com/team. Text-only masthead (CI/CL); the summaries are condensed from their bios. */
var TEAM=[
 {g:"Management",name:"Dennis Podlesak",title:"Chairman & CEO",sum:"CEO and Managing Partner of Axcelius and advisory partner to Domain Associates; his board or CEO leadership led to exits including Tobira, Avanir, Corthera, Calixa, Cerexa and Peninsula."},
 {g:"Management",name:"Eckard Weber, MD",title:"Chief Innovation Officer",sum:"Over 30 years creating biopharma companies; venture partner at Canaan Partners, inventor on numerous patents and author of more than 130 papers."},
 {g:"Management",name:"Michael Cordingley, PhD",title:"Chief Scientific Officer",sum:"R&D roles at Merck and BMS, then Preclinical TA Head, Virology and Infectious Disease, and SVP R&D Site Head at Boehringer Ingelheim."},
 {g:"Management",name:"Andrew Satlin, MD",title:"Chief Medical Officer",sum:"Former EVP and CMO of Intra-Cellular Therapies, with roles at Eisai and Novartis; formerly Director of Geriatric Psychiatry at McLean Hospital."},
 {g:"Management",name:"Lynne Rollins",title:"Chief Financial Officer",sum:"Over 40 years in healthcare finance; 19 years at Baxter Healthcare, latterly VP Finance for the Cardiopulmonary Business."},
 {g:"Management",name:"Rick Orr",title:"Head, BD and Corporate Counsel",sum:"Former CEO of Adynxx, with leadership roles at Corthera, Calixa, Cerexa and Peninsula; previously an attorney at Cooley."},
 {g:"Management",name:"Walter Bee, PhD",title:"SVP Preclinical & Biomarker Development",sum:"Over 30 years in nonclinical development and safety; formerly Global Head of Safety Assessment and Regulatory Affairs at QPS."},
 {g:"Management",name:"Mark Mugerditchian",title:"VP Manufacturing",sum:"More than 42 years of CMC experience across small-molecule and biotech drug substance and many drug-product formats."},
 {g:"Management",name:"Priya Jambhekar",title:"Head, Regulatory",sum:"Over 30 years in regulatory and quality affairs; formerly head of regulatory affairs for Baxter Critical Care."},
 {g:"Management",name:"Jay Soto",title:"Head, Clinical Operations",sum:"Over 20 years in development operations, focused on neurodegenerative disease; formerly VP Clinical Operations at Prothena."},
 {g:"Management",name:"Ethan Geier, PhD",title:"Senior Director, R&D",sum:"Bioinformatics and biomarker lead; previously at PrimeFour Therapeutics and the UCSF Memory and Aging Center."},
 {g:"Board of Directors",name:"Brent Ahrens",title:"Director",sum:"General partner at Canaan, investing in biopharma and medtech."},
 {g:"Board of Directors",name:"Bill Harrington, MD",title:"Director",sum:"Managing Partner at Osage University Partners; has invested in more than 80 life science companies."},
 {g:"Board of Directors",name:"Daniel Hetu, MD",title:"Director",sum:"Manages Lumira Ventures’ Montreal office; formerly a senior executive at Shire and BioChem Pharma."},
 {g:"Board of Directors",name:"Keith Katkin",title:"Director",sum:"Led Avanir and Urovant Sciences through their sales; serves on the boards of Syndax, Emergent BioSolutions and Eledon."},
 {g:"Board of Directors",name:"John Pacifico",title:"Director",sum:"General Partner at Canaan, founder and CEO of Abyrx, and inventor on more than 20 patents."},
 {g:"Board of Directors",name:"BT Slingsby, MD",title:"Director",sum:"Founder and Managing Partner of Catalys Pacific; founded the GHIT Fund."},
 {g:"Scientific Advisory Board",name:"John Sedivy, PhD",title:"Chair · Brown University",sum:""},
 {g:"Scientific Advisory Board",name:"Kathy Burns, MD, PhD",title:"Dana-Farber, Harvard Medical School",sum:""},
 {g:"Scientific Advisory Board",name:"George Church, PhD",title:"Harvard University",sum:""},
 {g:"Scientific Advisory Board",name:"Josh Dubnau, PhD",title:"Stony Brook University",sum:""},
 {g:"Scientific Advisory Board",name:"Rusty Gage, PhD",title:"Salk Institute",sum:""},
 {g:"Scientific Advisory Board",name:"Molly Gale Hammell",title:"NYU Langone Medical Center",sum:""},
 {g:"Scientific Advisory Board",name:"Bess Frost, PhD",title:"Brown University",sum:""},
 {g:"Clinical Advisory Board",name:"Murali Doraiswamy, MD",title:"Chair · Duke University",sum:""},
 {g:"Clinical Advisory Board",name:"Adam Boxer, MD",title:"UCSF",sum:""},
 {g:"Clinical Advisory Board",name:"Yanick Crow, MD, PhD",title:"University of Edinburgh",sum:""},
 {g:"Clinical Advisory Board",name:"Merit Cudkowicz, MD",title:"Massachusetts General Hospital",sum:""},
 {g:"Clinical Advisory Board",name:"John Ravits, MD",title:"UC San Diego",sum:""}];
/* news: only items with a working link (transposonrx.com/news.html). [date, headline, source, url] */
var NEWS=[
 ["March 2026","TPN-⁠101 to be studied for extending healthy aging under an ARPA-H award of up to $22M","Transposon",PR("Transposon - Press Release - ARPA-H Award - March 4, 2026.pdf")],
 ["July 2025","Investment from the Alzheimer’s Drug Discovery Foundation to advance TPN-⁠101 in Alzheimer’s disease","Transposon",PR("Transposon - Press Release - ADDF Funding - July 9, 2025.pdf")],
 ["May 2025","TPN-⁠101 selected for the Phase 2/3 HEALEY ALS Platform Trial","Transposon",PR("Transposon - Press Release - HEALEY ALS Platform Trial - May 28, 2025 - Final.pdf")],
 ["November 2024","Pipeline expanded with the acquisition of a portfolio of novel nucleoside analogs for oncology","Transposon",PR("Transposon - Press Release - Acquisition of Novel Nucleoside Analogs for Oncology - November 21, 2024.pdf")],
 ["July 2024","Final results from the Phase 2 study of TPN-⁠101 in C9orf72-related ALS and FTD","Transposon",PR("Transposon - Press Release - Final C9 Results - July 24, 2024.pdf")],
 ["May 2024","US FDA Fast Track designation for TPN-⁠101 in progressive supranuclear palsy","Transposon",PR("Transposon - Press Release - Fast Track Designation - May 21, 2024.pdf")]];
var SHEETS=[];
