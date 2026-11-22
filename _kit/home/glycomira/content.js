var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','italic 700 1em "Archivo"'];
var MAIL="contactus@glycomira.com";
var GM="https://www.glycomira.com/";
/* the pipeline, from glycomira.com (Pipeline, Solid Tumors, Supportive Care) and the 2025-02-12 IND release; the
   rhinosinusitis programs from the team page (Pulsipher) and NIH RePORTER (R44AI126987, R41AI179525).
   [programme, sub, indication, detail line, progress 0..4, progress incl. in-progress, text, dim] */
var PIPE=[
 ["GM-1111","Supportive care","Radiation-induced oral mucositis","Head and neck cancer · with radiation",3,3.5,"FDA accepted the IND in February 2025 for first-in-human Phase 1a trials. In an animal model, GM-1111 reduced tongue lesions in a dose-dependent manner.",0],
 ["GM-1111","Solid tumors","Head and neck squamous cell carcinoma","Adjuvant to radiation therapy",3,3.5,"In a mouse model of human head and neck cancer, GM-1111 with radiation produced a highly significant reduction in tumor volume compared with radiation alone.",0],
 ["GM-1111","Solid tumors","Colorectal, lung, renal, breast and endometrial cancers","Potential indications",2,2,"Pre-clinical studies suggest GM-1111 inhibits tumor growth in colorectal, renal, breast and lung cancer models.",0],
 ["Glycosaminoglycans","Respiratory","Chronic rhinosinusitis","Drug and diagnostic programs",0,0,"NIH-funded programs for a glycosaminoglycan-based therapeutic and a diagnostic test for eosinophilic chronic rhinosinusitis.",1]];
/* glycomira.com (Team). Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Management team",name:"William P. Tew, Ph.D.",title:"CEO and Chairman of the Board, Director",sum:"Over 40 years in biopharma commercialization; founded Chesapeake Biological Laboratories and Glycosan BioSystems."},
 {g:"Management team",name:"Kenneth R. North",title:"Chief Financial Officer",sum:"Founding President and CEO of Seattle Bank; later raised $37.5M for Kineta Biotechnology. Leads fundraising."},
 {g:"Management team",name:"Justin R. Savage, Ph.D.",title:"SVP of Operations",sum:"Has directed operations at GlycoMira for 12 years; formerly at Prolexys Pharmaceuticals. PI on SBIR awards totaling over $2M."},
 {g:"Management team",name:"Abby Pulsipher, Ph.D.",title:"VP of Research, Director",sum:"Secured $5.1M in SBIR/STTR awards; oversees the rhinosinusitis programs. University of Utah faculty and Huntsman Cancer Institute member."},
 {g:"Co-founders",name:"Glenn D. Prestwich, Ph.D.",title:"Co-Founder and CSO, Director",sum:"Presidential Professor of Medicinal Chemistry (Emeritus), University of Utah. Over 650 papers, 49 issued patents, ten companies co-founded."},
 {g:"Co-founders",name:"Thomas P. Kennedy, M.D., M.P.H.",title:"Co-Founder and CMO, Director",sum:"Expert in sulfated glycosaminoglycan biology. Co-founded Cantex Pharmaceuticals and JSK Therapeutics; inventor on over 30 issued patents."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Eosinophil peroxidase activity is a reliable and resilient biomarker for eosinophilic chronic rhinosinusitis","Int Forum Allergy Rhinol","https://pubmed.ncbi.nlm.nih.gov/42839249/"],
 ["February 2025","FDA accepts GlycoMira’s IND application for a clinical trial of its first-in-class oncology therapeutic","Press release",GM+"pressrelease20250212"],
 ["January 2025","GlycoMira Therapeutics’ first-in-class, immune-modulating therapeutic GM-1111","CEOCFO Magazine","https://www.ceocfointerviews.com/glycomiratherapeutics0125.html"],
 ["November 2024","GlycoMira receives a key US patent for its first-in-class oncology therapeutic","Press release",GM+"pressrelease20241104"],
 ["October 2021","GlycoMira awarded $2.8M from the National Institutes of Health to advance GM-1111 towards the clinic","Press release",GM+"pressrelease20211026"]];
var SHEETS=[];
