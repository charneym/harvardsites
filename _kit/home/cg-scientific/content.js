var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','italic 500 1em "Cormorant Garamond"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="admin@cgscientific.com";
var MAP="https://www.google.com/maps/search/?api=1&query=60+Prescott+Street+Worcester+MA+01605";
var RP="https://reporter.nih.gov/project-details/";
/* programs: one per NIH SBIR project, from the NIH RePORTER abstracts. [program, technology, stage, detail, appl id] */
var PROGS=[
 ["PBMC isolation","HEDS microfluidic chip","SBIR Phase II · NIGMS · to 2027","A low-cost, easy-to-use device to isolate peripheral blood mononuclear cells from 10 mL of blood in 15 minutes, for immunology, vaccine development and drug discovery. Phase II takes it from plastic chip to a validated pre-production prototype.","11337608"],
 ["Pancreatic islet isolation","Automated cell isolation platform","SBIR Phase II · NIDDK · 2017–2025","An automated, closed system to isolate islets for transplantation in type 1 diabetes and for diabetes research. With porcine pancreata in Phase I: about 2.4 times the islet recovery of the current method, at about 95% viability.","10601118"],
 ["Mesenchymal stem cells","Automated extraction from adipose tissue","SBIR Phase II · NIBIB · 2016–2021","An automated system to extract MSCs from fat. Phase I delivered about 60 to 100 million MSCs in 45 minutes from a single adipose specimen, enough for a therapeutic dose without culture expansion.","9748524"],
 ["White blood cell enrichment","HEDS for CAR-T manufacturing","SBIR Phase I · NCI · 2020–2022","Enriching white blood cells from leukapheresis products, the source material for CAR-T and other cell therapies. Preliminary data: over 95% WBC recovery and over 98% red cell removal, with no detectable loss of viability.","10077471"]];
var FUNDERS=["NIGMS","NIDDK","NIBIB","NCI","NIH Office of the Director"];
/* people: the contact principal investigator on every award (no portraits are published) */
var TEAM=[
 {g:"Principal investigator",name:"Lotien Richard Huang, Ph.D.",title:"Principal investigator, NIH SBIR projects since 2016",sum:"Ph.D., Princeton University. First author of the 2004 Science paper on continuous particle separation by deterministic lateral displacement."}];
/* the wider investigator team, as the Phase II abstracts describe it */
var CREW=[["Cell biology","Cell and immunology biologists who characterize what the devices deliver, by flow cytometry, functional assays and RNA sequencing."],
 ["Engineering","Plastic manufacturing and medical device engineers, taking chips from soft embossing to injection molding."],
 ["The labs that use it","Directors of research and clinical laboratories that use Ficoll regularly, and clinicians in islet transplantation and cell therapy."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 3, 2026","NIH NIGMS continues Phase II funding for the low-cost HEDS platform for PBMC isolation ($765,267)","NIH RePORTER",RP+"11337608"],
 ["May 30, 2025","NIH NIGMS awards SBIR Phase II ($833,381) to develop the HEDS PBMC device to a pre-production prototype","NIH RePORTER",RP+"11077586"],
 ["April 11, 2023","NIDDK funds the fourth year of the automated system for high-yield pancreatic islet isolation ($499,992)","NIH RePORTER",RP+"10601118"],
 ["September 21, 2020","NCI SBIR Phase I for a high-efficiency microfluidic device for large-scale CAR-T cell manufacturing ($385,433)","NIH RePORTER",RP+"10077471"]];
var SHEETS=[];
