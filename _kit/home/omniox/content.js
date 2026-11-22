var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','300 1em "Jost"','400 1em "Jost"','500 1em "Jost"','600 1em "Jost"'];
var MAIL="info@omniox.com";
var RP="https://reporter.nih.gov/project-details/";
/* programmes, from omniox.com (home, Technology, the Pipeline menu: Ischemic Stroke, Immuno-Oncology) and Omniox's NIH
   RePORTER project records. No invented stages: the status line is what the record or site says.
   [programme, sub, indication, status, detail, dim] */
var PIPE=[
 ["OMX","Paediatric cardiac surgery","Preserving heart and organ function in newborns on cardiopulmonary bypass for congenital heart disease","NICHD SBIR Phase IIB · toward an IND for a Phase 1 trial in neonates","Developed with neonatal and pediatric intensivists at UCSF. The Phase IIB plan: confirm a more stable OMX variant preserves myocardial and peripheral organ function after bypass, set the dose, scale a GMP-ready process and file the IND.",0],
 ["OMX-4.80","Lead H-NOX candidate","Hypoxic cancers, in combination with standard-of-care radiation and chemotherapy","Glioblastoma radiotherapy studied with NCI support","Tailored for glioblastoma, metastatic brain cancer, head-and-neck, pancreatic, lung and prostate cancer, where hypoxic tumour regions resist radiation and chemotherapy.",0],
 ["OMX","Ischemic stroke","Reducing brain injury after focal ischemia","Preclinical · NINDS SBIR, 2012–2017","An oxygen carrier that is non-reactive with nitric oxide, studied for oxygenating the threatened brain tissue around a stroke.",1]];
/* H-NOX properties: omniox.com Technology */
var EVID=[
 ["Tunable affinity","Individual products can be designed for different levels of physiologic oxygen need"],
 ["NO-neutral","Reduced reactivity with nitric oxide, the body’s natural vasoregulator, means a negligible risk of hypertension"],
 ["Sized for efficacy","Each product is engineered with the circulation half-life and tissue penetration it needs"],
 ["Deep delivery","OMX holds its oxygen until it reaches hypoxic microenvironments, where red blood cells have already let theirs go"]];
/* omniox.com (Company: Management) and NIH RePORTER (HD094414 collaborators). Only what those sources state. */
var TEAM=[
 {g:"Management",name:"Jonathan Winger, PhD",title:"Co-Founder and CEO",sum:"Co-inventor of the H-NOX technology, with 20+ years producing and studying H-NOX proteins."},
 {g:"Management",name:"Julia Simmons",title:"Senior Director, Controller",sum:"More than 25 years in finance and accounting, including at Genentech; with Omniox since 2018."},
 {g:"Clinical collaborators (NIH SBIR)",name:"Jeffrey R. Fineman",title:"University of California, San Francisco",sum:"Neonatal and pediatric critical care; bypass programme co-investigator."},
 {g:"Clinical collaborators (NIH SBIR)",name:"Emin Maltepe",title:"University of California, San Francisco",sum:"Neonatal and pediatric critical care; bypass programme co-investigator."}];
/* news: NIH award records, each linking to RePORTER. [date, headline, source, url] */
var NEWS=[
 ["September 2025","NICHD continues Omniox’s SBIR to develop an oxygen delivery biotherapeutic for pediatric cardiopulmonary bypass","NIH RePORTER",RP+"11167638"],
 ["August 2024","Year two of the Phase IIB programme to preserve myocardial function in newborn heart surgery","NIH RePORTER",RP+"10915621"],
 ["August 2023","NICHD renews the programme with a Phase IIB SBIR, aiming at an IND for a Phase 1 trial in neonates","NIH RePORTER",RP+"10761664"],
 ["April 2017","NCI awards an R01 to develop PET imaging biomarkers for glioblastoma radiotherapy enhanced by an H-NOX oxygen carrier","NIH RePORTER",RP+"9240463"],
 ["July 2016","NINDS funds Phase II work on reducing brain injury after focal ischemia with a nitric-oxide-neutral oxygen carrier","NIH RePORTER",RP+"9142199"]];
var SHEETS=[];
