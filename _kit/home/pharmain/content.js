var MAIL="ContactUs@pharmain.com";
var BD="BD@pharmain.com";
var PN="https://pharmain.com/";
/* the pipeline, from PharmaIN's own pipeline chart (pharmain.com/pipeline: progress bars at 62% and 35% of
   Discovery / Pre-clinical / Phase 1 / Phase 2-3): [programme, sub, indication, stage label, done 0..4, incl. in-progress, detail, dim] */
var PIPE=[
 ["PHIN-214","Lead · Phase 1","Progression of decompensated cirrhosis","Phase 1 · NCT05490888",2,2.48,"A partial vasopressin V1a receptor agonist, given once daily as a subcutaneous self-injection. Ongoing Phase 1 PHIN-001 study (single and multiple ascending doses) at clinical sites across the United States.",0],
 ["Undisclosed","Molecule","Solid tumours","Pre-clinical",1,1.4,"An undisclosed molecule for solid tumours, in pre-clinical development. Separately, PharmaIN reported in 2024 that its dCNP therapy normalised tumour blood vessels and reinvigorated the immune response in solid tumour models.",1]];
/* Phase 1 PHIN-001 results: AASLD 2025 (SAD) and AASLD 2026 (MAD) press releases, pharmain.com */
var EVID=[
 ["Kidney function","Mean cystatin C-based eGFR peaked 33.5% above baseline at 6 hours after a single dose and stayed elevated through 24 hours (pooled SAD/MAD)"],
 ["Repeated dosing","At dose level 5, peak mean eGFR rose about 35%, 32% and 19% on days 1, 15 and 28"],
 ["Blood pressure","Mean arterial pressure peaked about 3.3 mmHg above baseline at 7 hours, with a lower heart rate, consistent with V1a agonism"],
 ["Safety and dosing","Generally well tolerated; treatment-related events Grade 1 or 2 and mostly transient. Pharmacokinetics support once-daily dosing with negligible accumulation"]];
/* pharmain.com/about-pharmain. Text-only masthead (CI/CL). Summaries are only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Elijah Bolotin, PhD",title:"Founder, President, CEO and Board Member",sum:"20+ years in biopharma; has guided PharmaIN to $75M+ in funding from the NIH, investors and strategic partners."},
 {g:"Leadership",name:"Andy Stubbs, PhD",title:"Chief Development Officer",sum:"Formerly global lead for NK cell therapy clinical development at Sanofi."},
 {g:"Leadership",name:"Lorraine Tracey, PhD",title:"VP, Clinical Development",sum:"Clinical development at Sanofi, Kiadis Pharma, Ipsen and Teva."},
 {g:"Leadership",name:"Jenny Martin, RN",title:"VP, Clinical Operations",sum:"Built clinical operations teams at Sanofi and Juno Therapeutics."},
 {g:"Leadership",name:"Gerardo Castillo, PhD",title:"VP, IP and Grants & Distinguished Scientist",sum:"Registered patent agent and inventor on more than 100 patents."},
 {g:"Board of directors",name:"Craig Philips",title:"Chairman of the Board",sum:"Formerly President of Kineta and of CTI Biopharma."},
 {g:"Board of directors",name:"Mike Shetzline, MD, PhD",title:"Board Member",sum:"CMO and Head of R&D at Ironwood Pharmaceuticals."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","PharmaIN presents multiple-ascending dose results from the Phase 1 PHIN-001 study of PHIN-214 in decompensated cirrhosis at The Liver Meeting® 2026","Press release",PN+"2026/11/05/pharmain-corporation-presents-multiple-ascending-dose-results-from-phase-1-phin-001-study-of-phin-214-in-patients-with-decompensated-cirrhosis-at-aaslds-the-liver-meeting-2026/"],
 ["October 2026","Poster presentation of Phase 1 PHIN-214 data in decompensated cirrhosis announced for AASLD’s The Liver Meeting® 2026","Press release",PN+"2026/10/01/pharmain-corporation-announces-poster-presentation-of-phase-1-phin-214-data-in-decompensated-cirrhosis-at-aaslds-the-liver-meeting-2026/"],
 ["November 2025","Single-ascending dose results from PHIN-001 in compensated and decompensated cirrhosis, presented at The Liver Meeting® 2025","Press release",PN+"2025/11/08/pharmain-corporation-to-present-phase-1-single-ascending-dose-results-from-phin-001-study-of-phin-214-in-patients-with-compensated-and-decompensated-cirrhosis-at-the-american-association-for-the-stu-2/"],
 ["August 2025","NIDDK continues PharmaIN’s SBIR award for subcutaneous drug development for portal hypertension ascites","NIH RePORTER","https://reporter.nih.gov/project-details/11193954"]];
var SHEETS=[];
