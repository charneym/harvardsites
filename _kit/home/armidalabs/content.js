var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var MAIL="mp@armidalabs.com";
var RP="https://reporter.nih.gov/project-details/";
var UCR25="https://news.ucr.edu/articles/2025/09/17/ucr-startup-secures-grant-advance-cancer-therapy";
/* programmes: every line from NIH RePORTER (R44CA277917, abstract) and the UC Riverside releases of Oct 2023 and Sep 2025.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Targefrin-dimer","Metastatic pancreatic cancer","Lead programme","IND-enabling studies","Manufacturing and IND-enabling studies for an IND filing with the FDA and subsequent phase I/II trials with pancreatic cancer patients, funded by an NCI SBIR Phase II award, “Targeting pancreatic cancer metastases with Targefrin”.",RP+"11413836","NIH RePORTER"],
 ["Targefrin-dimer","With standard of care","Combination","Planned","Targefrin-dimer is intended for use in combination with standard of care, where it could degrade a major driver of cell migration and tumour metastases.",RP+"11413836","NIH RePORTER"],
 ["EphA2 targeting","Other EphA2-driven solid tumours","Future indications","Next","EphA2 is frequently overexpressed in pancreatic, prostate, lung, breast, ovarian and colorectal cancers. Initial applications focus on pancreatic cancer, with possible expansion to other EphA2-driven tumours.",UCR25,"UC Riverside"]];
/* completed SBIR Phase I results, as stated in the Phase II abstract (NIH RePORTER) */
var EVID=[
 ["EphA2 degradation","Remarkably effective in inducing EphA2 degradation in several pancreatic cancer cell lines"],
 ["Migration","Suppressed pancreatic cancer cell migration"],
 ["Pharmacokinetics","Favourable pharmacokinetics in vivo"],
 ["Safety","A favourable safety profile in vivo"]];
/* UC Riverside releases (Oct 2023, Sep 2025) and NIH RePORTER. Text-only masthead. */
var TEAM=[
 {g:"Founders",name:"Maurizio Pellecchia, PhD",title:"Co-founder & President",sum:"Distinguished Professor of Biomedical Sciences at the UC Riverside School of Medicine, Daniel Hays Endowed Chair in Cancer Research and director of the Center for Molecular and Translational Medicine. Targefrin was discovered in his lab; he is its main inventor."},
 {g:"Founders",name:"Carlo Baggio, PhD",title:"Co-founder, CTO & Director of Chemical Biology",sum:"Principal investigator on Armida’s NCI SBIR awards and lead of the IND studies; previously a senior scientist in the Pellecchia group."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NCI funds the second year of Armida’s SBIR Phase II award, $1.09M, to target pancreatic cancer metastases with Targefrin","NIH RePORTER",RP+"11413836"],
 ["September 2025","UC Riverside startup secures $2.25 million NCI grant to advance Targefrin toward the clinic","UC Riverside",UCR25],
 ["October 2023","UC Riverside startup company wins prestigious NIH grant: a $400,000 SBIR Phase I award for Targefrin","EurekAlert!","https://www.eurekalert.org/news-releases/1003476"],
 ["2018","Structure-based design of novel EphA2 agonistic agents with nanomolar affinity in vitro and in cell","ACS Chemical Biology","https://doi.org/10.1021/acschembio.8b00556"]];
var SHEETS=[];
