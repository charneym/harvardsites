var FONTS=['400 1em "Ibarra Real Nova"','italic 400 1em "Ibarra Real Nova"','500 1em "Ibarra Real Nova"','600 1em "Ibarra Real Nova"','italic 600 1em "Ibarra Real Nova"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"'];
var WEB="https://dupagemt.com/";
var MAIL="admin@dupagemt.com";
var RP25="https://reporter.nih.gov/project-details/11186781";
var RPMI="https://reporter.nih.gov/project-details/10491205";
var RPSE="https://reporter.nih.gov/project-details/10625353";
var STM20="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8061427/";
var NC21="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8159967/";
var JI21="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9117564/";
var NC23="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10432399/";
var OTM="https://otm.uic.edu/news-stories/otm-spotlight-du/";
/* programmes: from dupagemt.com (About Us) and NIH RePORTER. [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["Renal ischemia/reperfusion injury","Transplant-associated kidney injury","Preclinical · NIDDK SBIR Phase I, 2025","A new drug to treat transplant-associated renal ischemia-reperfusion injury: the Gα13-binding peptide nanoparticles taken into a kidney indication, funded by the National Institute of Diabetes and Digestive and Kidney Diseases from August 2025.",RP25,"NIH RePORTER"],
 ["Myocardial ischemia/reperfusion injury","Heart attack, after the artery is reopened","Preclinical · NHLBI SBIR Phase II","Developing a new drug for treating myocardial ischemia/reperfusion injury. In mice, the high-loading EXE peptide nanoparticles prevented thrombosis and protected the heart from ischemia/reperfusion injury (Science Translational Medicine, 2020).",RPMI,"NIH RePORTER"],
 ["Sepsis","Systemic inflammation and thrombosis","Preclinical · NHLBI SBIR Phase II","Targeting integrin outside-in signaling for treating sepsis. Blocking the Gα13-integrin interaction ameliorated systemic inflammation in preclinical models (Nature Communications, 2021).",RPSE,"NIH RePORTER"]];
/* people: as named on dupagemt.com (About Us); text-only, no bio sheets */
var TEAM=[
 ["Xiaoping Du, MD, PhD","Founder and President","UIC Distinguished Professor in the Department of Pharmacology and Regenerative Medicine, University of Illinois Chicago, and an expert in thrombosis, bleeding and inflammation. He is an inventor on numerous patents, some of them licensed by DuPage Medical Technology."],
 ["Aleksandra Stojanovic, MS","Chief Operating Officer","Oversees the company’s daily business operations and works with research and development on production of the peptide nanoparticle drugs. Before joining in 2020 she ran a pharmacology lab at the University of Illinois College of Medicine for 15 years."],
 ["Randal A. Skidgel, PhD","Senior Scientific Officer","Oversees research and development of the peptide nanoparticle drugs and is principal investigator on DMT’s SBIR awards. He was a professor of pharmacology at the University of Illinois College of Medicine for 31 years."],
 ["Yong-Jian Geng, MD, PhD","Team member","A cardiovascular researcher in atherosclerosis, vascular immunology, inflammation and stem cell therapy, formerly Professor of Medicine at the University of Texas Houston Medical School and Director of Stem Cells and Heart Failure Research at the Texas Heart Institute."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2025","NIDDK awards an SBIR Phase I grant ($306,867) for a new drug to treat transplant-associated renal ischemia-reperfusion injury","NIH RePORTER",RP25],
 ["August 2023","Integrin β3 directly inhibits the Gα13-p115RhoGEF interaction","Nature Communications",NC23],
 ["December 2021","Gα13 mediates transendothelial migration of neutrophils by promoting integrin-dependent motility without affecting directionality","Journal of Immunology",JI21],
 ["May 2021","Targeting Gα13-integrin interaction ameliorates systemic inflammation","Nature Communications",NC21],
 ["July 2020","High-loading Gα13-binding EXE peptide nanoparticles prevent thrombosis and protect mice from cardiac ischemia/reperfusion injury","Science Translational Medicine",STM20]];
var SHEETS=[];
