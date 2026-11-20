var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','300 1em "Jost"','400 1em "Jost"','500 1em "Jost"'];
var MAIL="info@smartbreast.com";
var LI="https://www.linkedin.com/company/smart-breast-corporation/";
var RP="https://reporter.nih.gov/project-details/";
/* development programmes: NIH RePORTER 1R44CA315543-01 (project summary, notice 2026-09-17), ClinicalTrials.gov NCT07114679,
   and SmartBreast's December 2020 release on the Dilon assets. [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["NCI SBIR Phase II","Ultra-high-sensitivity collimation","Supplemental screening","2026–2028","Aim 1 of the award: design and validate a collimation system for twice the throughput (30 minutes instead of an hour per screening) at a dose lower than 3D mammography.",RP+"11410559","NIH RePORTER"],
 ["NCI SBIR Phase II","Semi-automated MBI-guided biopsy","Biopsy guidance","2026–2028","Aim 2: if a lesion is found on MBI and seen on no other modality, it must be testable by biopsy. A semi-automated MBI-guided biopsy system makes that routine.",RP+"11410559","NIH RePORTER"],
 ["Clinical study","Molecular Breast Imaging (MBI)-Guided Biopsy","UT Southwestern, Dallas","Planned · 250 participants","Sponsored by Smart Breast Corp. at the University of Texas Southwestern Medical Center; listed as not yet recruiting, with a planned start in June 2027.","https://clinicaltrials.gov/study/NCT07114679","ClinicalTrials.gov"],
 ["Phase I · privately funded","Variable-Angle Slant-Hole collimator","Half-dose MBI","Prototype built","A VASH collimator prototype with twice the efficiency, so the same performance at half the dose; 3D stereotactic location of phantom lesions within 3 mm.",RP+"11410559","NIH RePORTER"]];
/* why now: every line from the project summary of 1R44CA315543-01 */
var EVID=[
 ["Dense breasts","About 50% of US women and 70% of Asian women have dense breasts, and 70% of breast cancers occur in them"],
 ["Guidelines","The NCCN (2023) recommends MBI, MRI and contrast-enhanced mammography for supplemental screening; SNMMI added MBI screening in dense breasts on August 26, 2025"],
 ["Detection","A meta-analysis of 24 published trials and over 1.2 million women found MBI, MRI and CEM detect cancer at 2–3 times the rate of mammography, 3D mammography and ultrasound"],
 ["Accuracy","MBI has 93% sensitivity, 93% specificity and a 99.7% negative predictive value for lesions in dense breasts"]];
/* smartbreast.com/about-us (Chi-Hua Tung is commented out of their live page, so he is left out). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Management and board",name:"James W. Hugg, PhD",title:"Co-founder, CEO & President",sum:"Medical physicist. Eleven years at GE Healthcare, then VP and CTO of MBI startup Gamma Medica and Senior VP at Kromek, a maker of MBI detectors."},
 {g:"Management and board",name:"Bradley E. Patt, PhD",title:"Co-founder, Executive Chairman",sum:"Serial entrepreneur in medical imaging: co-founder and CEO of Gamma Medica and Radiant Detector Technologies, and CEO of Photon Imaging and DxRay."},
 {g:"Management and board",name:"Chin-Tu Chen, PhD",title:"Co-founder, Vice Chairman",sum:"Medical physicist and Associate Professor of Radiology at the University of Chicago, with over 300 papers in nuclear medicine and molecular imaging."},
 {g:"Management and board",name:"Eric Huang, PhD",title:"Board of Directors",sum:"Managing Director and Vice Chairman of Paradigm Ventures in Taiwan; over 25 years in medical device and biotechnology venture investment."},
 {g:"Management and board",name:"Vincenzo La Bella, PhD",title:"Co-founder; President, SBC EMEA",sum:"Biomedical engineer, currently at Traf IEH GmbH; formerly Siemens, Calypso, Picker and Alliance."},
 {g:"Management and board",name:"Eduardo Santos, MD",title:"Co-founder; President, SBC Asia Pacific",sum:"Breast surgeon at the Asian Breast Center in the Philippines and chair of the Medical Advisory Board."},
 {g:"Medical Advisory Board",name:"Kirti Kulkarni, MD",title:"University of Chicago",sum:"Breast radiologist and Associate Professor of Radiology."},
 {g:"Medical Advisory Board",name:"Ravi Jain, MD, PhD",title:"Middlesex Hospital, Connecticut",sum:"Breast radiologist."},
 {g:"Medical Advisory Board",name:"Theresa Buenaflor, MD",title:"Asian Breast Center, Metro Manila",sum:"Breast radiologist."},
 {g:"Medical Advisory Board",name:"PJ Huang, MD",title:"New England Clinic, Taipei",sum:"Breast surgeon."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","SmartBreast receives an NCI SBIR Phase II award of $945,687 for commercial-ready molecular breast imaging for biopsy guidance","NIH RePORTER",RP+"11410559"],
 ["February 2021","SmartBreast announces a molecular breast imaging manufacturing partnership with FoxSemicon Integrated Technologies","PR Newswire","https://www.biospace.com/smartbreast-announces-molecular-breast-imaging-partnership-with-fiti"],
 ["February 2021","SmartBreast acquires the Discovery NM750b molecular breast imaging assets from GE Healthcare","PR Newswire","https://www.biospace.com/smartbreast-acquires-molecular-breast-imaging-assets-from-ge-healthcare"],
 ["December 2020","SmartBreast acquires the Dilon 6800 MBI scanner, GammaLoc® MBI-guided biopsy and VASH collimator assets from Dilon Technologies","PR Newswire","https://www.prnewswire.com/news-releases/smartbreast-acquires-molecular-breast-imaging-assets-from-dilon-technologies-301198844.html"]];
var SHEETS=[];
