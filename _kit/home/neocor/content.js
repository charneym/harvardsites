var FONTS=['300 1em "Literata"','italic 300 1em "Literata"','400 1em "Literata"','italic 400 1em "Literata"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','800 1em "Manrope"'];
var MAIL="info@neocor.fr";
var PR="https://www.eurobiomed.org/en/actualites/neocor-therapeutics-laureate-du-concours-i-lab-2025-avec-sa-therapie-genique-de-regeneration-cardiaque/";
/* programmes: every line from neocor.fr and the i-Lab 2025 press release (15 Oct 2025). [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Ischemic heart disease","Heart damage after myocardial infarction","Gene therapy · one IV injection","Preclinical","Regenerating the heart after the severe injury of a heart attack: protecting the cardiomyocytes that survive, renewing those that were lost, and preventing the scar tissue that stiffens the heart.",PR,"i-Lab 2025 release"],
 ["Rare genetic disease","Dilated cardiomyopathy","Gene therapy · one IV injection","Preclinical","An inherited disease that progressively weakens and dilates the heart muscle. More than 33,000 new patients are diagnosed every year in Europe and the United States, and current treatments only slow it down.",PR,"i-Lab 2025 release"]];
/* the road to the clinic, from the press release and Made in Marseille (29 Oct 2025); 2026 and 2027 are stated plans */
var ROAD=[
 ["2018","A patent protects the founding team’s research on the protein"],
 ["2023","Neocor Therapeutics is founded in Marseille by Matthieu Metz and Francesca Rochais"],
 ["2025","Laureate of the national i-Lab innovation competition (France 2030), with a €370K grant"],
 ["2026","Planned: large-scale production to pharmaceutical standards, then regulatory studies"],
 ["2027","Planned: a first Phase I/II clinical trial"]];
/* neocor.fr: founding team and scientific advisory board. Text-only masthead (CI/CL); summaries condensed from their bios. */
var TEAM=[
 {g:"Founding team",name:"Matthieu Metz",title:"CEO & Co-founder",sum:"École Centrale Paris; MS, UC Berkeley. Co-founded and led Innixim, a dental imaging company, from 2014 to 2021, from R&D to an exit to a market leader."},
 {g:"Founding team",name:"Francesca Rochais, PhD",title:"CSO & Co-founder",sum:"Heads the Heart Development and Cardiac Regeneration team at Marseille Medical Genetics (Inserm / Aix-Marseille Université)."},
 {g:"Scientific advisory board",name:"Dr Rodolphe Fischmeister",title:"Inserm Research Director",sum:"Deep expertise in heart failure and therapeutic innovation."},
 {g:"Scientific advisory board",name:"Dr Thierry Bordet",title:"CSO, Eyevensis",sum:"Rare diseases, gene therapy and clinical trials."},
 {g:"Scientific advisory board",name:"Dr Sandra Robelet",title:"CSO, Syncrosome",sum:"Preclinical studies in cardiovascular disease."},
 {g:"Scientific advisory board",name:"Pr Jean-Sébastien Hulot",title:"HEGP, Paris",sum:"Professor of medicine, cardiology and pharmacology; gene therapy and clinical trials."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2025","La biotech Neocor Therapeutics innove pour réparer le cœur","Made in Marseille","https://madeinmarseille.net/actualite/189431-la-biotech-neocor-therapeutics-innove-pour-reparer-le-coeur/"],
 ["October 2025","Neocor Therapeutics, laureate of the i-Lab 2025 competition with its cardiac regeneration gene therapy","Eurobiomed",PR],
 ["October 2025","i-Lab 2025: the laureates of the national innovation competition, project HEARTCARE2","Ministère de l’Enseignement supérieur et de la Recherche","https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2025-10/annexe---liste-des-laur-ats-concours-d-innovation-2024-2025-38061.pdf"]];
var SHEETS=[];
