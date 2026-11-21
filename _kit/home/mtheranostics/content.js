var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Fira Sans"','500 1em "Fira Sans"','600 1em "Fira Sans"','700 1em "Fira Sans"'];
/* the address published on mtheranostics.com (every page footer), as written there */
var MAIL="info1@ptheranostics.com";
var RP="https://reporter.nih.gov/project-details/";
var MT="https://www.mtheranostics.com/";
/* pipeline: every line from mtheranostics.com (/products, /mt218, /mt-pet), ClinicalTrials.gov NCT06262139 and NIH RePORTER.
   [agent, programme, modality, status, detail, link, link label] */
var PIPE=[
 ["MT218","High-risk prostate cancer","Targeted MRI contrast agent","Phase 1/2 clinical trial","Accurate detection and differential diagnosis of high-risk prostate cancer with MRI. The FDA cleared the IND in March 2021; after a trial in 30 healthy volunteers, an NCI SBIR Phase II award funds the study in prostate cancer patients, recruiting since July 2024.","https://clinicaltrials.gov/study/NCT06262139","ClinicalTrials.gov"],
 ["MT218","Breast, colon, liver and pancreatic cancer","Targeted MRI contrast agent","Preclinical","Effective in animal models of aggressive breast, colon, pancreatic, prostate and other solid tumours, for early detection, surgical planning, active surveillance and monitoring of treatment.",MT+"mt218","mtheranostics.com"],
 ["[Ga-68]MTP220","Aggressive solid tumours","PET probe","In development","A small peptide with a Ga-68 chelate for specific PET imaging and risk-stratification of aggressive tumours, with low background, for PET, PET/CT or PET/MRI and for monitoring therapeutic response.",MT+"mt-pet","mtheranostics.com"],
 ["Next generation","Safer targeted MRI agents","Mn- and Gd-pyclen chelates","NCI R01 · 2026","Targeted agents built on pyclen chelates: high-relaxivity gadolinium agents at lower doses, and manganese agents as non-gadolinium alternatives. NCI award 1R01CA297667.",RP+"11226020","NIH RePORTER"],
 ["Fluorescence probe","Head and neck cancer surgery","Intraoperative imaging","NIDCR SBIR · 2024","A small peptide-targeted fluorescent dye, injected or applied topically, to show surgeons tumour margins and small metastases during head and neck cancer surgery. Award 1R43DE033946.",RP+"10922472","NIH RePORTER"],
 ["Peptide drug conjugate","Triple negative breast cancer","Targeted therapy","NCI SBIR · 2023","The same peptide that carries MT218 into the tumour matrix, used to deliver chemotherapy specifically into triple negative breast cancer. Award 1R43CA281488.",RP+"10760236","NIH RePORTER"]];
/* MT218 in numbers: mtheranostics.com/mt218 and the NCI SBIR abstract 1R44CA265626 */
var EVID=[
 ["Relaxivity","A T1 relaxivity of 5.5 mM⁻¹s⁻¹, nearly twice that of the corresponding clinical agent, ProHance®"],
 ["Signal","3–6 times more signal in aggressive tumours than the clinical agent at 3T, at a dose as low as 0.04 mmol/kg"],
 ["Risk","Differentiates high-risk tumours from low-grade tumours, where the clinical agent at 0.1 mmol/kg gives no significant enhancement in either"],
 ["Safety","Rapid, complete renal clearance with no detectable brain retention in GLP studies; no adverse effects in the first clinical dosing cohorts"]];
/* NIH RePORTER principal investigators and mtheranostics.com/news. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Yajuan Li, PhD",title:"Chief Executive Officer",sum:"Principal investigator on the company’s NCI SBIR awards since 2015; co-author of the studies behind MT218."},
 {g:"Scientists",name:"Songqi Gao",title:"Senior Scientist",sum:"Principal investigator on the NCI SBIR Phase II award taking MT218 into prostate cancer patients."},
 {g:"Scientists",name:"Ryan C. Hall",title:"Scientist",sum:"Principal investigator on the 2026 NCI R01 for next-generation agents and on the surgical-imaging and drug-conjugate programmes."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Molecular Theranostics receives an NCI R01 award to develop next-generation targeted MRI contrast agents","NIH RePORTER",RP+"11226020"],
 ["July 2024","A Phase 1/2 study of MT218 in prostate cancer patients begins recruiting","ClinicalTrials.gov","https://clinicaltrials.gov/study/NCT06262139"],
 ["July 2024","NIDCR SBIR award for a peptide-targeted fluorescence probe for precision head and neck cancer surgery","NIH RePORTER",RP+"10922472"],
 ["July 2023","NCI SBIR award to develop peptide drug conjugates for triple negative breast cancer","NIH RePORTER",RP+"10760236"],
 ["November 2022","MT awarded a two-year, $2 million NCI SBIR Phase II grant to study MT218 in prostate cancer patients","Molecular Theranostics",MT+"news"],
 ["October 2019","CEO Yajuan Li presents targeted peptide-based agents for precise tumour imaging at the BIO Investor Forum","Molecular Theranostics",MT+"news"]];
var SHEETS=[];
