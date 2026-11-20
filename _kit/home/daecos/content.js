var FONTS=['300 1em "Sora"','400 1em "Sora"','600 1em "Sora"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','700 1em "Manrope"'];
var MAIL="support@daecos.com";
var RP="https://reporter.nih.gov/project-details/";
/* Sources (dossier): daecos.com; NIH RePORTER 11409014 (1R43DK146600-01A1, NIDDK SBIR Phase I, 2026); R. L. Mehta, "Predictive
   analytics for kidney support in the ICU", ICU Management & Practice 23(2), 2023; Daecos Predictor developer docs
   (daecospredictor-docs.pages.dev). [stage, title, sub, status, detail, link, link label] */
var PIPE=[
 ["NIH SBIR Phase I · 2026","PACKS-ICU","Personalized Assessment and Care of Kidney Support in Critically Ill Patients","Under way","With the UC San Diego Center for Health Innovation: refine the algorithm on retrospective data from three UC San Diego hospitals, deploy it inside UC San Diego’s Epic record through AWS and FHIR APIs, and run it in silent test mode across teaching and non-teaching settings.",RP+"11409014","NIH RePORTER"],
 ["Validation","Prospective, international","500 patients · 5 centres","Completed","Prospectively validated in 500 ICU patients across five international centres, after derivation in more than 20,000 ICU patients from the US, Canada and Europe.","https://daecospredictor-docs.pages.dev/docs/introduction","Daecos docs"],
 ["Validation","External, retrospective","80,000+ ICU patients","Completed","Externally validated on electronic medical record data from more than 80,000 ICU patients at a US centre, with an AUC of 0.945 for predicting the need for dialysis within 96 hours.","https://healthmanagement.org/c/icu/IssueArticle/predictive-analytics-for-kidney-support-in-the-icu","ICU Management & Practice"],
 ["Next","SBIR Phase II","A clinical trial of the CDSS","Planned","Phase I lays the foundation for a Phase II clinical trial to evaluate the system’s effectiveness and its potential for wide implementation in critical care.",RP+"11409014","NIH RePORTER"]];
var TEAM=[];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Daecos receives an NIH NIDDK SBIR Phase I award for PACKS-ICU: Personalized Assessment and Care of Kidney Support in Critically Ill Patients","NIH RePORTER",RP+"11409014"],
 ["2023","Predictive analytics for kidney support in the ICU: a dynamic algorithm that weighs demand against capacity to predict acute dialysis, in real time and hospital-wide","ICU Management & Practice","https://healthmanagement.org/c/icu/IssueArticle/predictive-analytics-for-kidney-support-in-the-icu"]];
var SHEETS=[];
