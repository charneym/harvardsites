var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var WEB="https://nephrodi.com/";
var MAIL="info@nephrodi.com";
var TRIAL="https://clinicaltrials.gov/study/NCT07525960";
/* pipeline: from the NIH RePORTER abstract (2R44DK127798-02), ClinicalTrials.gov NCT07525960 and the company's releases.
   [programme, indication, stage label, detail, link, link label] */
var PIPE=[
 ["NDI-5001","Congenital X-linked nephrogenic diabetes insipidus","Phase 1b · Recruiting","An open-label trial of daily oral NDI-5001 capsules in adult males with X-linked NDI, assessing safety, pharmacokinetics and pharmacodynamics. Started July 2026, sponsored by Otsuka Pharmaceutical Development & Commercialization.",TRIAL,"NCT07525960"],
 ["NDI-5001 · Pediatric","Children with documented V2R mutations","Enabling studies","Funded by the NIH SBIR Phase II award: GLP juvenile toxicology, a fertility study and a liquid formulation suited to children, to prepare the pivotal pediatric study.","https://reporter.nih.gov/project-details/11183830","NIH RePORTER"]];
/* designations and backers: type only (BW/CJ) */
var DESIG=[["Orphan Drug Designation","U.S. FDA, for NDI-5001"],["Rare Pediatric Disease designation","U.S. FDA, making NDI-5001 eligible for a Priority Review Voucher"],["Strategic partnership","The McQuade Center for Strategic Research and Development (MSRD), a member of the Otsuka family of companies"]];
var BACK=["Otsuka · MSRD","Sound Bioventures","NIH · NIDDK","Georgia Research Alliance","Wallace H. Coulter Foundation"];
/* people, from nephrodi.com/team and the company's releases (no portraits are published) */
var TEAM=[
 {g:"Leadership",name:"Rachael Hagan, M.Sc.",title:"President & Chief Executive Officer",sum:"Former head of the Coulter Translational Partnership Fund at Emory and Georgia Tech."},
 {g:"Leadership",name:"Jeff M. Sands, M.D.",title:"Chief Medical Officer & Founder",sum:"Renal Division Director at Emory University; 2025 Berliner Award in renal physiology."},
 {g:"Leadership",name:"Janet D. Klein, Ph.D.",title:"Director of Biology & Founder",sum:"Associate Professor at Emory, with over 100 papers on urine concentrating defects."},
 {g:"Leadership",name:"Josh Knackert, M.Sc.",title:"Director of Scientific Operations",sum:"Former researcher and biotech consultant, and a lifelong X-linked NDI patient."},
 {g:"Additional founders",name:"Ish Khanna, Ph.D.",title:"Co-founder",sum:"With Dr. Pillarisetti, developed a novel class of AMPK activators for type 2 diabetes."},
 {g:"Additional founders",name:"Ram Pillarisetti, Ph.D.",title:"Co-founder",sum:"With Dr. Khanna, brought that AMPK activator class to NDI with the Emory team."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","Phase 1b trial of NDI-5001 in adult males with X-linked NDI begins recruiting","ClinicalTrials.gov",TRIAL],
 ["August 28, 2025","NIH NIDDK awards SBIR Phase II grant ($1,096,928) to advance NDI-5001 toward a pediatric study","NIH RePORTER","https://reporter.nih.gov/project-details/11183830"],
 ["April 25, 2025","Founder and CMO Jeff M. Sands, M.D., receives the 2025 Robert W. Berliner Award for Excellence in Renal Physiology","Santé log","https://www.santelog.com/actualites-sante-nasdaq/nephrodi-therapeutics-founder-and-cmo-jeff-m-sands-md-receives-2025-robert-w"],
 ["June 20, 2024","Investment by Sound Bioventures to accelerate development of NDI-5001","BioSpace","https://www.biospace.com/nephrodi-therapeutics-announces-investment-by-sound-bioventures-to-accelerate-development-of-ndi-5001-as-a-potential-first-in-class-therapy-for-pediatric-orphan-kidney-disease"],
 ["June 22, 2023","Agreement with MSRD, a member of the Otsuka family, to develop NDI-5001","Business Wire","https://www.businesswire.com/news/home/20230622006557/en/NephroDI-Therapeutics-Enters-Agreement-to-Develop-a-First-in-Class-Treatment-for-a-Genetic-Rare-Disease-of-the-Kidneys"]];
var SHEETS=[];
