var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"','300 1em "Fira Sans"'];
var MAIL="info@cohesys.com";
/* milestones (cohesys.ca; Trent University News 2019-01-31; ClinicalTrials.gov NCT06600854; Business Wire 2025-08-18). [when, what, detail, label, url] */
var MILE=[
 ["2018","Cohesys founded in Toronto","Launched in July 2018 to commercialise BoneTape, a concept first conceived by surgeons and developed through a collaboration between the University of Toronto and Sunnybrook Research Institute.","Trent University","https://www.trentu.ca/news/story/23491"],
 ["May 2025","BoneTape feasibility trial opens","A clinical feasibility study of BoneTape for zygomaticomaxillary (midface) fracture fixation began at Sunnybrook Health Sciences Centre, Toronto, sponsored by Cohesys.","NCT06600854","https://clinicaltrials.gov/study/NCT06600854"],
 ["August 2025","First in human","The first participants were treated with BoneTape; the procedures were completed as planned, the first clinical use of this drill- and screw-free fixation system.","Business Wire","https://www.businesswire.com/news/home/20250818000644/en/Cohesys-Announces-First-in-Human-Use-of-Investigational-BoneTape-in-Craniofacial-Fracture-Repair"]];
/* the study, as registered on ClinicalTrials.gov (NCT06600854) and in the August 2025 release */
var STUDY=[
 ["Study","Clinical Feasibility of BoneTape: a Novel Approach for Zygomaticomaxillary Fracture Fixation"],
 ["Site and investigator","Sunnybrook Health Sciences Centre, Toronto. Principal Investigator Dr. Jeffrey A. Fialkov, Head of Plastic and Reconstructive Surgery"],
 ["Outcomes","Feasibility, early efficacy and early safety; infection, non-union and re-operation are monitored through follow-up"],
 ["Size and timing","About 30 participants (estimated). Started May 2025; primary completion estimated January 2027"]];
/* Innovation Factory client profile (Leadership); Business Wire 2025-08-18; Trent University News; UHN Research News. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Michael Floros, PhD",title:"CEO and Founder",sum:"Biomaterials scientist. As a post-doctoral fellow in Dr. Paul Santerre’s lab he redesigned BoneTape’s adhesive, inspired by the adhesive proteins of marine organisms."},
 {g:"Leadership",name:"Michael Tessier",title:"COO and Co-Founder",sum:"Co-founder with a background in applied science; postgraduate materials science education at Trent University."},
 {g:"Leadership",name:"Dr. Janaina Bortolatto",title:"VP, Clinical Operations and Co-Founder",sum:"Co-founder. Leads clinical operations for the BoneTape feasibility study with Cohesys’s clinical partners."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2025","Cohesys announces first-in-human use of investigational BoneTape in craniofacial fracture repair","Business Wire","https://www.businesswire.com/news/home/20250818000644/en/Cohesys-Announces-First-in-Human-Use-of-Investigational-BoneTape-in-Craniofacial-Fracture-Repair"],
 ["May 2025","BoneTape feasibility trial for midface fractures opens at Sunnybrook Health Sciences Centre","ClinicalTrials.gov","https://clinicaltrials.gov/study/NCT06600854"],
 ["May 2019","Quick fix for broken bones: a biocompatible tape for small and delicate bones","UHN Research","https://www.uhnresearch.ca/news/quick-fix-broken-bones"],
 ["January 2019","Trent alumni invent a sticky solution for broken bones","Trent University","https://www.trentu.ca/news/story/23491"]];
var SHEETS=[];
