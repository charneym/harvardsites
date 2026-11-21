var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var WEB="https://www.vortexbiotechnology.com/";
var FORM="https://www.vortexbiotechnology.com/";   /* the live site publishes no email address, only a contact form on its home page */
var ADDR="Charleston, South Carolina";
var NEWSURL="https://www.vortexbiotechnology.com/copy-of-our-team";
var RP="https://reporter.nih.gov/project-details/10758110";
var SBP="https://sbpdiscovery.org/";
/* programmes: from the live site (About / Our Focus / News) and the NIH RePORTER abstract of 1R43CA281394-01A1.
   [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["VBT-34","Hematological and solid tumors","Lead compound","An oral stimulator of RNA degradation. VBT-34 blocks the binding of the decapping scaffold EDC3 to Pim-1 and Pim-3 kinases, and in prostate cancer models it blocks tumor growth and invasion.",RP,"NIH RePORTER"],
 ["Second-generation VBT analogs","Prostate cancer","NCI SBIR Phase I","New analogs designed, synthesized and tested for potency against the EDC3:Pim-1/3 complex and for better drug-like and pharmacokinetic properties, guided by in silico modeling and structure-activity studies.",RP,"NCI award"],
 ["First-in-class small molecules","Breast cancer","Discovery","Novel compounds against Vortex-identified targets, designed and synthesized with the medicinal chemistry team at the Sanford Burnham Prebys Center. Proposals have gone to the NIH and the Department of Defense.",NEWSURL,"Vortex news"]];
var PARTNERS=["National Cancer Institute (SBIR)","Colorado Advanced Industries Accelerator (OEDIT)","Sanford Burnham Prebys Medical Discovery Institute"];
/* people: as published on the live site's Our Team page; no portraits used */
var TEAM=[
 ["Andrew S. Kraft, M.D.","Founder and Chief Executive Officer","Directed two NCI-designated Cancer Centers, at the University of Arizona and the Medical University of South Carolina, from 2004 to 2019. Laboratory developer of VBT-34; author of over 160 scientific articles."],
 ["Xuedong Liu, Ph.D.","Scientific Advisor","Professor of Biochemistry at the University of Colorado Boulder; co-founder of OnKure and founder of Vesicle Therapeutics."],
 ["Paul Bunn, M.D.","Scientific Advisor","Distinguished Professor and James Dudley Professor of Lung Cancer Research at the University of Colorado; past President of ASCO."],
 ["Daniel LaBarbera, Ph.D.","Scientific Advisor","Founding Director of the Center for Drug Discovery at the University of Colorado Cancer Center and School of Pharmacy."],
 ["James Zwiebel, M.D.","Scientific Advisor","Former Chief of the Investigational Drug Branch at the National Cancer Institute."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2025","A drug-discovery partnership with Sanford Burnham Prebys, and new NIH and DoD proposals for breast cancer small molecules","Vortex news",NEWSURL],
 ["November 2023","Awarded $125K through the State of Colorado’s Advanced Industries Accelerator Program","Vortex news",NEWSURL],
 ["August 2023","A $400K Phase I SBIR grant from the National Cancer Institute to regulate RNA decapping in prostate cancer","NIH RePORTER",RP]];
var SHEETS=[];
