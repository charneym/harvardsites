var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Sora"','500 1em "Sora"','600 1em "Sora"'];
var WEB="https://www.avertomed.com/";
var MAIL="info@avertomed.com";
/* the system, from the ClinicalTrials.gov records (NCT06402188, NCT07429110) and the CEO's Fierce 15 interview on avertomed.com */
var SYS=[["The device","Placed transanally","After the resection and anastomosis, the ICD Device is inserted, advanced and positioned transanally with the ICD Delivery System, and can be placed with a minimally invasive endoscope."],
 ["The anchor","Held by vacuum","The anchor sits in healthy bowel, ideally 10–20 cm above the anastomosis. A vacuum around its circumference holds it without disrupting the blood supply."],
 ["The removal","About five minutes","The device stays in place for 10 ± 3 days. After a leak test it is removed, which the CEO says takes about five minutes, leaving the anchoring site indistinguishable on histology."]];
/* the clinical programme: ClinicalTrials.gov, NIH RePORTER and Averto's releases */
var PATH=[
 ["Regulatory","FDA Breakthrough Device Designation","Granted in February 2025 for the ColoSeal™ ICD System, for its potential to improve outcomes in colorectal surgery by eliminating the need for a temporary ostomy.","https://www.prnewswire.com/news-releases/averto-medical-announces-fda-breakthrough-device-designation-for-coloseal-intraluminal-colonic-diversion-system-302383711.html"],
 ["Feasibility","Safety and feasibility studies","Two prospective, multicenter, single-arm studies in adults with rectal and rectosigmoid cancer undergoing resection with a colorectal anastomosis. Recruiting.","https://clinicaltrials.gov/study/NCT06402188"],
 ["Pivotal","Anastomotic Protection Pivotal Study","A randomized study of ColoSeal™ against a protective diverting ostomy in rectal cancer surgery, an estimated 250 patients at sites in the US and New Zealand. Started June 2026, with the National Cancer Institute.","https://clinicaltrials.gov/study/NCT07429110"],
 ["New indication","Diverticular disease","An NIH SBIR Phase II award from NIDDK funds a safety and efficacy trial of ColoSeal™ in diverticular disease, to see whether it can protect the colon intraluminally without an ostomy.","https://reporter.nih.gov/project-details/11184789"]];
var TEAM=[
 {g:"Management",name:"Kenton Fong, MD",title:"Founder and Chief Executive Officer",sum:"Plastic and reconstructive surgeon; co-founded Spiracur"},
 {g:"Management",name:"Andy Uchida",title:"Sr. VP, R&D",sum:""},
 {g:"Management",name:"Anna Gawlicka",title:"Sr. VP, Clinical & Regulatory",sum:""},
 {g:"Management",name:"Brian Talbert",title:"Sr. VP, Finance",sum:""},
 {g:"Management",name:"Tanya Shalem",title:"Head of Quality & Regulatory Affairs",sum:""},
 {g:"Board of directors",name:"Ken Song, MD",title:"Executive Chairman",sum:"Former gastroenterologist; led Ariosa Diagnostics, Omniome and RayzeBio"},
 {g:"Board of directors",name:"Bihua Chen",title:"Director",sum:"Portfolio Manager, Cormorant Asset Management"},
 {g:"Board of directors",name:"Dan Puckett",title:"Director",sum:"Former Chief Financial Officer, Shockwave Medical"}];
var INV=["Cormorant Asset Management","Venrock Healthcare Capital Partners","LifeSci Venture Partners","CVF"];
var NEWS=[
 ["6 Oct 2025","Averto Medical awarded a $2.1M NIH grant to study ColoSeal™ in diverticulitis","Press release","https://www.avertomed.com/news-1/averto-medical-awarded-%242.1m-grant"],
 ["Oct 2025","Featured in Fierce Medtech’s Fierce 15: helping colorectal surgery patients avoid ostomy","Fierce Medtech","https://www.avertomed.com/news-1/featured-in-fierce-medtech%E2%80%99s-%E2%80%9Cfierce-15%E2%80%9D"],
 ["13 Feb 2025","FDA grants Breakthrough Device Designation to the ColoSeal™ Intraluminal Colonic Diversion System","Press release","https://www.prnewswire.com/news-releases/averto-medical-announces-fda-breakthrough-device-designation-for-coloseal-intraluminal-colonic-diversion-system-302383711.html"],
 ["7 May 2024","Averto Medical debuts with an oversubscribed $30M Series A to advance a device that avoids the need for ostomy","Press release","https://www.avertomed.com/news-1/averto-medical-debuts-with-oversubscribed-%2430m-series-a-financing-to-advance-innovative-medical-device-that-avoids-need-for-ostomy"]];
var SHEETS=[];
