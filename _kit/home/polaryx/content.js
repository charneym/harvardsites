var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"'];
var CONTACT="mailto:info@polaryx.com";
/* pipeline, from polaryx.com Our Pipeline and Clinical Trials pages (and the Aug 2026 SOTERIA readiness release).
   [candidate, modality, indication, status, stage bar (0..4 over Preclinical, Phase 1, Phase 2, Phase 3), detail, dim] */
var PIPE=[
 ["PLX-200","Oral small molecule · PPARα agonist","SOTERIA basket: CLN2, CLN3, Krabbe, Sandhoff","Phase 2 · IND cleared",2.08,"An open-label proof-of-concept basket trial in four lysosomal storage disorders that we believe represent about a quarter of the LSD population. Safe-to-proceed letter October 2025; Fast Track designation for all four indications.",0],
 ["PLX-200","Oral small molecule · PPARα agonist","CLN2 (late infantile Batten disease)","Phase 2 · IND authorized",2.04,"A potentially single pivotal, single-arm trial with a synthetic control, measuring decline on the Hamburg rating scale. Timelines align with emerging SOTERIA data.",0],
 ["PLX-200","Oral small molecule · PPARα agonist","CLN3 (juvenile Batten disease) · STARLIGHT","Phase 3 · IND authorized",3.04,"A registrable randomized, double-blind, placebo-controlled trial in mild to moderate CLN3, with design optimized from SOTERIA findings.",0],
 ["PLX-100","PLX-200 + vitamin A · oral combination","All subtypes of NCL","Preclinical",1,"Neuroprotective in murine CLN2 and CLN3 models; extended lifespan and reduced brain storage material (lipofuscin). FDA orphan drug designation for all NCL subtypes.",0],
 ["PLX-300","Cinnamic acid · oral combination","GM2 gangliosidosis, Krabbe, Niemann-Pick A/B","Preclinical",1,"Preclinical animal studies completed; orphan drug and rare pediatric disease designations in all three indications.",0],
 ["PLX-400","Gene therapy · AAV-delivered lysosomal genes","CLN2 and CLN3","Preclinical",.8,"Designed to deliver lysosomal genes, alone or with oral PLX-200; shown to increase lifespan in murine models.",1]];
/* disease areas, polaryx.com Our Science */
var DIS=[
 ["Batten disease","Neuronal ceroid lipofuscinosis (NCL)","13 genetically distinct subtypes marked by lipofuscin build-up. Only one, CLN2, has an established standard of care."],
 ["Krabbe disease","Globoid cell leukodystrophy","GALC mutations leave toxic lipids in the nervous system, causing demyelination. 0.3 to 2.6 per 100,000 live births."],
 ["Tay-Sachs and Sandhoff","GM2 gangliosidoses","Hexosaminidase deficiency lets GM2 ganglioside accumulate in nerve cells. No established standard of care."],
 ["Niemann-Pick A and B","Acid sphingomyelinase deficiency","SMPD1 mutations cause lipid accumulation in organs including the brain; approved enzyme therapy does not treat neurological symptoms."]];
/* polaryx.com, Our Leadership. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Management team",name:"Alex Yang, J.D., LL.M.",title:"CEO and Chair of the Board",sum:"Chair since 2021, CEO since 2023. CEO of Mstone Partners; formerly managing partner at Kim & Chang and Ernst & Young, Hong Kong."},
 {g:"Management team",name:"Will Charlton, M.D., M.A.S.",title:"Chief Medical Officer",sum:"Board-certified pediatric endocrinologist; formerly at Tyra Biosciences and CMO of Spruce Biosciences."},
 {g:"Management team",name:"Eddy Zhu, Ph.D., PMP",title:"Chief CMC Officer",sum:"Over 20 years in CMC, formulation and regulatory approvals; formerly Product Development Lead at Sanofi."},
 {g:"Management team",name:"G. Michael Landis, CPA",title:"Chief Financial Officer",sum:"Over 25 years of public-company finance; formerly CFO of Epygenix Therapeutics and Avisa Diagnostics."},
 {g:"Management team",name:"Shrijay Vijayan, Ph.D., MBA",title:"Chief Scientific and Business Development Officer",sum:"Formerly Head of Technology Commercialization at Rush University Medical Center."},
 {g:"Management team",name:"Andrew O",title:"Chief Investment Officer",sum:"Over twenty years in asset management, with Manulife, FrontPoint Partners and Goldman Sachs."},
 {g:"Management team",name:"Minsu Kang, Ph.D.",title:"VP, Clinical Development and Regulatory Affairs",sum:"Over 10 years in CNS development; formerly Clinical Science Lead at Karuna Therapeutics."},
 {g:"Scientific and clinical advisory board",name:"Kalipada Pahan, Ph.D.",title:"Rush University Medical Center",sum:"Floyd A. Davis, M.D., Endowed Chair in Neurology; more than 160 publications."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Polaryx highlights participation in NCL scientific conference and NTSAD Imagine & Believe event","GlobeNewswire","https://www.globenewswire.com/news-release/2026/11/20/3407411/0/en/polaryx-therapeutics-highlights-participation-in-ncl-scientific-conference-and-ntsad-imagine-believe-event.html"],
 ["August 2026","Polaryx advances operational readiness for the SOTERIA Phase 2 basket trial","GlobeNewswire","https://www.globenewswire.com/news-release/2026/08/25/3350454/0/en/polaryx-therapeutics-advances-operational-readiness-for-soteria-phase-2-basket-trial.html"],
 ["May 2026","Closing of a $10 million private placement to support the launch of SOTERIA","BioSpace","https://www.biospace.com/press-releases/polaryx-therapeutics-announces-closing-of-10-million-private-placement-equity-financing-to-support-launch-of-soteria-phase-2-basket-trial"],
 ["February 2026","Polaryx marks Rare Disease Day, reaffirming its commitment to children with lysosomal storage disorders","GlobeNewswire","https://www.globenewswire.com/news-release/2026/02/27/3246511/0/en/Polaryx-Therapeutics-Marks-Rare-Disease-Day-Reaffirming-Commitment-to-Patients-with-Rare-Pediatric-Lysosomal-Storage-Disorders.html"],
 ["February 2026","Key preclinical data related to SOTERIA at the 22nd Annual WORLDSymposium","GlobeNewswire","https://www.globenewswire.com/news-release/2026/02/10/3235320/0/en/Polaryx-Announces-Key-Pre-Clinical-Data-Related-to-SOTERIA-at-the-22nd-Annual-WORLDSymposium.html"],
 ["February 2026","Direct listing on Nasdaq; shares trade under the symbol PLYX","GlobeNewswire","https://www.globenewswire.com/news-release/2026/02/02/3230261/0/en/polaryx-therapeutics-announces-direct-listing-on-nasdaq-shares-to-begin-trading-under-the-symbol-plyx.html"]];
var SHEETS=[];
