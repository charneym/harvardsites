var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Inter Tight"','500 1em "Inter Tight"','500 1em "JetBrains Mono"'];
var MAIL="info@bloodcelltechnologies.com";
var MAP="https://www.google.com/maps/search/?api=1&query=Long+Island+High+Technology+Incubator+Stony+Brook+NY+11790";
var RPT="https://reporter.nih.gov/project-details/";
var PUB="https://pubmed.ncbi.nlm.nih.gov/";
/* pipeline: the three programmes on BCT's own pipeline chart, with the NIH SBIR record behind each */
var PROGS=[
 ["Chemotherapy-induced thrombocytopenia","Preclinical development","Second-generation BLVRB inhibitors that enhance platelet production, optimised for potency, drug-like properties and safety, and compared head to head with thrombopoietin and an approved TPO receptor agonist in a mouse model.","11457446"],
 ["Breast cancer","Discovery","BLVRB-targeted redox therapeutics: breast cancer cells rely on BLVRB’s antioxidant function to survive oxidative stress and resist therapy, and two lead compounds selectively block its redox coupling.","10759653"],
 ["Fetal and maternal biomarkers","Discovery","Platelet RNA biomarkers to detect fetal platelets in maternal blood.","9905924"]];
/* news: from BCT's own news page, each linking to its NIH RePORTER or PubMed record */
var NEWS=[
 ["Sep 2026","NCI funds the next stage of BCT’s Fast Track award, $875,125, for second-generation BLVRB inhibitors","NIH RePORTER",RPT+"11457446"],
 ["Aug 2026","“A structure-guided active site affinity ligand unmasks a stress-sensitizing role for BLVRB in the endoplasmic reticulum”","J Med Chem",PUB+"42505148/"],
 ["Oct 2025","“Biliverdin reductase B as a new target in breast cancer”","Breast Cancer Research",PUB+"41102733/"],
 ["Aug 2025","NCI SBIR Fast Track award: development of second-generation BLVRB inhibitors for treating chemotherapy-induced thrombocytopenia","NIH RePORTER",RPT+"11254010"],
 ["Apr 2025","“Small molecule BLVRB redox inhibitor promotes megakaryocytopoiesis and stress thrombopoiesis in vivo”","Nature Communications",PUB+"40216753/"]];
var TEAM=[
 {g:"Leadership",name:"Wadie Bahou, MD",title:"Founder & Chief Executive Officer",sum:"Founded Blood Cell Technologies in 2015 to develop its BLVRB discoveries."},
 {g:"Leadership",name:"Natasha M. Nesbitt, PhD",title:"Chief Scientific Officer",sum:"Principal investigator on BCT’s NIH SBIR awards for platelet-enhancing BLVRB inhibitors."},
 {g:"Leadership",name:"Lisa Pennacchia, MS",title:"Chief Operating Officer",sum:"Investor contact; presented BCT at the Long Island Capital Alliance First Wave Challenge in 2026."},
 {g:"Research",name:"Gian Luca Araldi, PhD",title:"Director of Medical Chemistry",sum:""},
 {g:"Research",name:"Natalia Marchenko, PhD",title:"Director of Oncologic Therapeutics",sum:"Principal investigator on BCT’s NCI award for BLVRB-targeted redox therapeutics in breast cancer."}];
var SHEETS=[];
