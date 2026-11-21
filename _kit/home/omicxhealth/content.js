var FONTS=['400 1em "Caudex"','italic 400 1em "Caudex"','700 1em "Caudex"','400 1em "Figtree"','500 1em "Figtree"'];
var WEB="https://www.omicxhealth.com/";
var MAIL="info@omicxhealth.com";
var ADDR="San Ramon, California (San Francisco Bay Area)";
var RP="https://reporter.nih.gov/project-details/11404601";
var B_TC="https://www.omicxhealth.com/post/omicxhealth-selected-for-techcrunch-disrupt-s-startup-battlefield-200";
var B_AASLD="https://www.omicxhealth.com/post/presenting-at-the-liver-meeting-aasld-2026";
var B_PMWC="https://www.omicxhealth.com/post/reflections-from-pmwc-2026-company-showcase-presentation-and-more";
var PMWC="https://pmwcintl.com/speaker/mythili-subharam-514_omicxhealth_2026sv";
/* programmes: from omicxhealth.com (2026 updates), the company one-pager (October 2026) and the NIH RePORTER abstract of
   1R43CA310377-01A1. [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["OmicXScreen · liver","Hepatocellular carcinoma (HCC), the most common liver cancer","Blinded validation","Pre-clinical validation is complete. An NIH/NCI SBIR grant funds a blinded, independent validation study for early liver cancer detection at UT Southwestern.",RP,"NCI SBIR award"],
 ["OmicXScreen · lung","Lung cancer","Classifier completed","The second validated cancer type after liver cancer, completed in 2026 and read from the same whole-genome data.",WEB,"Company update"],
 ["OmicXScreen · esophagus","Esophageal cancer, primarily esophageal adenocarcinoma","SBIR Phase I aim","A classifier trained on public cfDNA methylation data, then applied to the same 100 biobank plasma samples used to validate the liver model: sequence once, analyse many times.",RP,"NIH RePORTER"],
 ["Multi-cancer early detection","Six cancer types in proof of concept","Platform roadmap","The platform proof of concept now covers six cancer types. New cancer signals ship as a model update, not a new wet-lab assay.",WEB,"Company update"]];
/* programmes and recognition named on omicxhealth.com (type only, BW/CJ) */
var PARTNERS=["National Cancer Institute SBIR","NSF I-Corps","NCI STEP","Santa Clara University Bronco Ventures","TechCrunch Startup Battlefield 200"];
/* people: the founder as named on the PMWC 2026 speaker page; no portrait is published */
var TEAM=[
 ["Mythili Subharam, MS","Founder and Chief Executive Officer","More than 25 years building and scaling data-driven software platforms in enterprise and consumer technology. She leads OmicXHealth’s software-first approach to disease detection from cfDNA methylation and machine learning."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","NIH/NCI SBIR Phase I award ($405,305) for OmicXScreen, an AI/ML DNA-methylation test for early HCC and esophageal cancer","NIH RePORTER",RP],
 ["August 2026","Selected for TechCrunch Disrupt’s Startup Battlefield 200, in the Health & Wellness track","OmicXHealth",B_TC],
 ["August 2026","Abstract on early HCC detection from cell-free whole-genome bisulfite sequencing accepted at The Liver Meeting® (AASLD) 2026","OmicXHealth",B_AASLD],
 ["2026","OmicXScreen presented at the AI and Data Sciences Company Showcase, Precision Medicine World Conference","OmicXHealth",B_PMWC]];
var SHEETS=[];
