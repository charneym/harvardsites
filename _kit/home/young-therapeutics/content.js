var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var MAIL="bruce.nemlich@gmail.com";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* Programmes: every line from the NIH RePORTER records of Young Therapeutics, LLC (Philadelphia, PA; UEI JY3KKMRM47L6)
   and from youngtherapeutics.com. [target, programme, setting, status, detail, link, link label] */
var PIPE=[
 ["PKC epsilon inhibitor","YT-002","Myocardial infarction","SBIR Phase II · NHLBI","Given to limit myocardial damage and loss of cardiac function after a heart attack. The Phase II programme optimises the formulation for stability, characterises absorption, distribution, metabolism and excretion, and runs long-term safety and efficacy studies in porcine models toward an Investigational New Drug application.",RP+"11310186","NIH RePORTER"],
 ["PKC beta II inhibitor","YT-004","Myocardial infarction","SBIR Phase II · NHLBI","The second compound in the same Phase II award, aimed at the PKC beta II isoform. Long-term pharmacodynamic studies measure its effect on infarct size and cardiac function, with dose–response modelling to set the therapeutic window.",RP+"11310186","NIH RePORTER"],
 ["PKC epsilon peptide","YT-001","Kidney ischemia–reperfusion","SBIR Phase I · NIDDK","Tested in warm murine kidney ischemia–reperfusion, a model of acute kidney injury and of the injury a kidney sustains in transplantation. In mice, the company reports preserved glomerular filtration rate and lower serum creatinine after ischemia and reperfusion.",RP+"9847676","NIH RePORTER"]];
/* youngtherapeutics.com (home page), in the company's own terms. */
var EVID=[
 ["Heart, ex vivo","Experimental data on diminishing myocardial damage after ischemia and reperfusion"],
 ["Heart, in vivo (pig)","Data on reducing myocardial damage and sustaining cardiac function after a heart attack"],
 ["Kidney, in vivo (mouse)","Preserved glomerular filtration rate and minimised serum creatinine after ischemic and reperfusion events"],
 ["Where it applies","Heart attacks, organ transplants, acute kidney injury and strokes: the settings in which blood flow is lost and restored"]];
/* youngtherapeutics.com (legal notice), PCOM and NIH RePORTER. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Bruce Nemlich",title:"Chief Executive Officer",sum:"Named as CEO and company contact on youngtherapeutics.com."},
 {g:"Leadership",name:"Lindon H. Young, PhD",title:"Founder",sum:"Professor of biomedical sciences at the Philadelphia College of Osteopathic Medicine; inventor on the PKC epsilon inhibitor patent."},
 {g:"Investigators",name:"Thomas Argentieri",title:"Contact Principal Investigator",sum:"Contact PI on the NHLBI SBIR Phase II award for YT-002 and YT-004 (fiscal year 2026)."},
 {g:"Investigators",name:"Qian Chen",title:"Principal Investigator",sum:"Co-principal investigator on the NHLBI Phase II award; long-time co-author with Dr Young at PCOM."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","NHLBI continues the SBIR Phase II programme for YT-002 and YT-004 in myocardial infarction ($1,488,899)","NIH RePORTER",RP+"11310186"],
 ["March 2025","NHLBI awards Young Therapeutics an SBIR Phase II grant to take YT-002 and YT-004 toward an IND ($1,488,899)","NIH RePORTER",RP+"11068139"],
 ["2022","Renal function in a mouse model of acute kidney injury is improved by a myristoylated PKC epsilon inhibitor","PCOM Research Day","https://digitalcommons.pcom.edu/research_day/research_day_PA_2022/researchPA2022/11"],
 ["August 2021","NHLBI awards an SBIR Phase I grant for targeted PKC inhibitors 002 and 004 after myocardial infarction ($560,261)","NIH RePORTER",RP+"10324843"],
 ["July 2019","NIDDK awards an SBIR Phase I grant for the PKC epsilon peptide inhibitor YT-001 in kidney ischemia–reperfusion ($300,000)","NIH RePORTER",RP+"9847676"],
 ["November 2016","PCOM professor Lindon Young is awarded a patent for a PKC epsilon inhibitor solution to stop reperfusion injury after a heart attack","PCOM News","https://www.pcom.edu/campuses/philadelphia-campus/news-and-events/pcom-news/pcom-professor-wins-heart-drug-patent.html"]];
var SHEETS=[];
