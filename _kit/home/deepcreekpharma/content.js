var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','400 1em "Public Sans"','600 1em "Public Sans"'];
var WEB="https://www.deepcreekpharma.com/";
var MAIL="william.gmeiner@advocatehealth.org";
var MAP="https://www.google.com/maps/search/?api=1&query=Yadkinville+NC";
/* sources: deepcreekpharma.com (home, technology); NIH RePORTER (Deep Creek Pharma, LLC, Yadkinville NC); Cancers 2024 16(7):1360; Cancers 2025 17(17):2739 */
var RP_TBA="https://reporter.nih.gov/project-details/11255090";
var RP_P2="https://reporter.nih.gov/search/results?query=R42CA254834";
var RP_P1="https://reporter.nih.gov/search/results?query=R41CA254834";
var PUB25="https://pmc.ncbi.nlm.nih.gov/articles/PMC12427396/";
var PUB24="https://pmc.ncbi.nlm.nih.gov/articles/PMC11011147/";
/* pipeline: [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["CF10","Metastatic colorectal cancer with liver metastases (first indication)","Late preclinical","A next-generation fluoropyrimidine engineered for direct tumor-active metabolite formation, about 1,000 times more potent than fluorouracil. NCI-funded Phase II work covers lipid nanoparticle formulation, safety pharmacology, and pharmacokinetics and biodistribution in non-human primates.",RP_P2,"NCI STTR Phase II"],
 ["TBA-EFPREX","Colorectal cancer metastasis, and potentially other malignancies","NCI STTR Phase I, 2025","A modified thrombin-binding aptamer: a DNA quadruplex whose thymidines are replaced with 5-fluoro-2′-deoxyuridine. Designed to home to thrombin at metastatic sites and release FdU, EdU and the Chk1 inhibitor prexasertib inside cancer cells.",RP_TBA,"NIH RePORTER"],
 ["Fluoropyrimidine polymers","Pancreatic cancer and other solid tumors","Research","Novel fluoropyrimidine polymers for patients whose best option is still a 5-FU-based regimen, designed to improve outcomes while reducing systemic toxicities.",WEB+"technology","Company site"]];
var PARTNERS=["National Cancer Institute (NIH)","Wake Forest University School of Medicine","Atrium Health Wake Forest Baptist Comprehensive Cancer Center"];
var TEAM=[
 ["William H. Gmeiner, Ph.D.","Founder","Professor of Cancer Biology at Wake Forest University School of Medicine, where he has worked since 2000. His lab invented the fluoropyrimidine polymers behind CF10; he holds more than ten issued patents on the technology and is contact principal investigator on the company’s NIH awards."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2, 2025","NCI awards Deep Creek Pharma a $399,968 STTR Phase I grant for a modified thrombin-binding aptamer against colorectal cancer metastasis","NIH RePORTER",RP_TBA],
 ["August 2025","CF10 displays improved activity relative to 5-FU in a mouse colorectal liver metastasis model under physiological folate","Cancers",PUB25],
 ["May 1, 2024","Second year of NCI STTR Phase II funding ($1,018,545) for improved treatment of colorectal cancer with CF10","NIH RePORTER",RP_P2],
 ["March 2024","Enhanced therapeutic efficacy of the nanoscale fluoropyrimidine polymer CF10 in a rat colorectal cancer liver metastasis model","Cancers",PUB24]];
var SHEETS=[];
