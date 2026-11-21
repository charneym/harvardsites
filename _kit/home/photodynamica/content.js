var FONTS=['300 1em "Lexend"','400 1em "Lexend"','500 1em "Lexend"','600 1em "Lexend"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"','700 1em "Inter"'];
/* the address photodynamica.com publishes (home, footer and Contact) */
var MAIL="info@photodynamica.com";
var XS="https://photodynamica.com";
var RP="https://reporter.nih.gov/project-details/";
var YT="https://www.youtube.com/@PhotoDynamica",XT="https://x.com/PhotoDynamica_";
var CT="https://clinicaltrials.gov/study/NCT03638622";
/* research: every line from photodynamica.com (Team, PDT Applications, Research) and NIH RePORTER.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Oral cancer · OPML","Image-guided PDT system","Intraoral light delivery with real-time imaging","NIH STTR Phase I","A standalone bench-top unit with a display and a 635 nm laser for PpIX activation, coupled to an ergonomic intraoral applicator, with fluorescence monitoring of PpIX photobleaching. Awarded by the National Cancer Institute in September 2026.",RP+"11409103","NIH RePORTER"],
 ["Oral cancer","First clinical trial, India","30 patients with early oral cancer","Completed","Professor Hasan and Professor Celli's NIH-funded trial at Aligarh Muslim University: a 73% one-time complete cure rate, without much side effect beyond 24 hours of photosensitivity.",RP+"8789594","NIH RePORTER"],
 ["Oral cancer","Second clinical trial, India","More patients, screening and image-guided PDT","NIH-funded, 2022","In 2022 the founders received another $4 million NIH grant for a second clinical trial in India with more patients, building a low-cost platform for screening and image-guided PDT of pre-malignant and early oral lesions.",RP+"10648426","NIH RePORTER"],
 ["Head and neck","Premalignant and early tumours","PDT in the clinic","Clinical study","A clinical study of photodynamic therapy in patients with premalignant or early stage head and neck tumours, featured by PhotoDynamica.",CT,"ClinicalTrials.gov"]];
/* the head and neck PDT clinical summary on photodynamica.com, Research */
var EVID=[
 ["Patients","Over 1,500 patients with head and neck cancers have been treated with PDT using Photofrin, HPD, ALA or Foscan"],
 ["Complete response","Of 518 patients with Cis, T1 or T2 cancers of the oral cavity, larynx, pharynx and nasopharynx, 462 (89.1%) responded completely after one treatment"],
 ["Durability","Laryngeal cancers, 171 of those patients, reached a durable complete response rate of 89% with up to 16 years of follow-up"],
 ["Standing","PDT is as effective as conventional therapies for early (Cis, T1, T2) squamous cell cancers of the head and neck"]];
/* photodynamica.com, Team. Text-only masthead; summaries are their own lines. */
var TEAM=[
 {g:"Co-founders",name:"Tayyaba Hasan, PhD",title:"Co-founder",sum:"Professor at Harvard Medical School, known as the “mother of PDT”."},
 {g:"Co-founders",name:"Hui Liu, PhD, MBA",title:"Co-founder, CEO",sum:"Chief fiber laser scientist at Acclaro Medical."},
 {g:"Co-founders",name:"Jonathan Celli, PhD",title:"Co-founder",sum:"Professor at the University of Massachusetts Boston; renowned PDT scientist."},
 {g:"Co-founders",name:"Hao Zhao, PhD",title:"Co-founder, angel investor",sum:"Chairman of QPC laser Inc. (U.S.)."},
 {g:"Co-founders",name:"Filip Cuckov, PhD",title:"Co-founder",sum:"Director of the Auster Center for Applied Innovation and Research at Tufts University."},
 {g:"Board and advisers",name:"Lawrence Ganti, MBA",title:"Independent director",sum:"EIR at Babson College; former CEO of Merck India and Latin America."},
 {g:"Board and advisers",name:"Colin Hopper, MD",title:"Clinical advisor",sum:"Head and neck surgeon; President of the International Photodynamic Association."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NCI awards Photodynamic Solutions an STTR Phase I grant for low-cost, image-guided PDT of oral lesions in resource-limited settings","NIH RePORTER",RP+"11409103"],
 ["March 2024","Tayyaba Hasan on developments in photodynamic therapy (video)","PhotoDynamica",XS+"/tayyaba-hasan-on-developments-in-photodynamic-therapy/"],
 ["2023","A comprehensive platform for low-cost screening and image-guided PDT of pre-malignant and early oral lesions","NIH RePORTER",RP+"10648426"],
 ["2014","Low-cost enabling technology for image-guided photodynamic therapy of oral cancer","NIH RePORTER",RP+"8789594"]];
var SHEETS=[];
