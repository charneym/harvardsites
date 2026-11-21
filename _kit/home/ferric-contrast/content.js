var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Raleway"','500 1em "Raleway"','600 1em "Raleway"'];
var WEB="https://www.ferric-contrast.com/";
var MAIL="Info@Ferric-Contrast.com";
var UB="https://www.buffalo.edu/partnerships/about/news-events.host.html/content/shared/www/partnerships/spotlight-stories/ferric-contrast.detail.html";
var RP="https://reporter.nih.gov/project-details/11175001";
var NSF2="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1951127";
var NSF1="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1746556";
var ANIE="https://doi.org/10.1002/anie.201912273";
/* programmes: from ferric-contrast.com (Who We Are), NSF award 1746556 project outcomes (2019), NSF 1951127 (2020-23) and
   NIH RePORTER 1R41CA301774-01 (2025). [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["Fe(III) macrocyclic T1 agents","General-purpose alternative to gadolinium-based contrast agents","Preclinical · NCI STTR Phase I","Iron coordination complexes whose macrocyclic ligands hold a high-spin trivalent iron centre. The lead compounds are anionic and clear rapidly through a renal pathway in mice; the NCI award funds new soluble analogs, imaging against Gd(DOTA), 57Fe retention tracking and maximum tolerated dose studies.",RP,"NIH RePORTER"],
 ["Kidney-specific imaging agent","Renal imaging, including for patients contraindicated for gadolinium","Preclinical · NSF STTR","One of the complexes studied under the NSF Phase I award showed strong promise as a kidney-specific imaging agent in mice, with relaxivity higher in certain organs than gadolinium-based agents.",NSF1,"NSF award 1746556"],
 ["Liver imaging agent","Hepatobiliary imaging and liver tumors","Preclinical · NSF STTR","Changing the ancillary group on the macrocycle shifts clearance between the kidneys and the hepatobiliary route; another complex from the NSF work can be used to study the liver.",NSF2,"NSF award 1951127"]];
/* people: as named in the University at Buffalo spotlight (2025-09-02), NIH RePORTER and the NSF award records; no portraits are published */
var TEAM=[
 ["Bradford La Salle","Co-founder and President","An entrepreneur who co-founded Ferric Contrast in 2017 with Professor Janet Morrow, starting in a single lab at UB’s Incubator @ Baird."],
 ["Janet Morrow, Ph.D.","Co-founder and Chief Science Officer","SUNY Distinguished Professor of Chemistry at the University at Buffalo, and the inventor of the iron-based technology the company licensed from UB."],
 ["Eric Snyder, Ph.D.","Lead Chemist · NIH principal investigator","A UB chemistry graduate and former postdoctoral researcher in the Morrow lab, who joined Ferric Contrast in 2020 and leads its 2025 NCI award."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2, 2025","Ferric Contrast: chemistry developed at UB makes MRIs safer for patients","University at Buffalo",UB],
 ["August 2025","NCI STTR Phase I award 1R41CA301774: MRI contrast agents based on iron as alternatives to gadolinium agents ($305,253)","NIH RePORTER",RP],
 ["April 2, 2020","NSF STTR Phase II award 1951127: relaxivity mechanisms of Fe(III) MRI contrast agents","National Science Foundation",NSF2],
 ["2020","A class of Fe(III) macrocyclic complexes with alcohol donor groups as effective T1 MRI contrast agents","Angewandte Chemie",ANIE],
 ["December 18, 2017","NSF STTR Phase I award 1746556: relaxivity mechanisms of Fe(III) MRI contrast agents","National Science Foundation",NSF1]];
var SHEETS=[];
