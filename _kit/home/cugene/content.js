/* Programmes, from cugene.com (Our Science; the pipeline chart "Updated-Pipeline-2026", January 2026), cugene.com news, and
   ClinicalTrials.gov NCT07946302 (CUG279 Phase 1, first posted 2026-11-18). Stage words only as those sources state them.
   [program, area, title, stage, detail, dim, tag, link, linklabel] */
var CT="https://clinicaltrials.gov/study/NCT07946302";
var PIPE=[
 ["CUG252","Autoimmune diseases","Treg-selective long-acting IL-2","Phase 1 · Phase 1b in SLE","A precision-engineered IL-2 that abolishes binding to effector cells and retains full agonist activity on IL-2Rα. It restores Treg function and suppresses autoantibody production. Partnered with AbbVie under an exclusive worldwide license option.",0,"Autoimmune","https://www.cugene.com/news-2/","Phase 1b news"],
 ["CUG279","Solid tumors","VitoKine-2™","Phase 1 · recruiting","A tumor-activable IL-2: a proprietary masking domain keeps it inert until it reaches the tumor, to engage tumor-infiltrating lymphocytes while minimising systemic immune activation. First-in-human dose escalation began in November 2026.",0,"Oncology",CT,"ClinicalTrials.gov"],
 ["CUG288","Solid tumors","TILKine-2™","IND","A TIL-targeting bispecific that blocks a key immune checkpoint and activates effector T cells in cis, at the tumor site.",0,"Oncology","https://www.cugene.com/news-4/","SITC 2021 data"],
 ["CUG185","Solid tumors","TILKine-15™","Lead optimization","The TILKine bispecific design, built on IL-15.",1,"Oncology","",""],
 ["CUG115","Solid tumors","VitoKine-15™","Lead optimization","The masked, tumor-activable VitoKine design, built on IL-15.",1,"Oncology","",""],
 ["CUG105","NMIBC, solid tumors","Novel long-acting IL-15","Lead optimization","A long-acting IL-15 for non-muscle-invasive bladder cancer and solid tumors.",1,"Oncology","",""],
 ["CUG172","Solid tumors","Innate immune target","Lead optimization","A programme against an innate immune target.",1,"Oncology","",""],
 ["CUG222","Solid tumors","Checkpoint inhibitor","Lead optimization","A checkpoint inhibitor programme.",1,"Oncology","",""]];
/* Milestones, as cugene.com, PR Newswire (AbbVie, 16 May 2022) and ClinicalTrials.gov state them. */
var EVID=[
 ["November 2026","CUG279 (VitoKine-2) enters a first-in-human, open-label Phase 1 dose-escalation and expansion study in select advanced or metastatic solid tumors"],
 ["April 2023","CUG252 advances to Phase 1b, recruiting patients with mild-to-moderate systemic lupus erythematosus"],
 ["May 2022","AbbVie takes an exclusive worldwide license option to CUG252 and other IL-2 muteins, with a $48.5 million upfront payment"],
 ["September 2021","FDA clearance for the Phase 1a healthy-volunteer study of subcutaneous CUG252"]];
/* The four Cugene Pillars, from cugene.com. */
var PILLARS=[
 ["Science driven","Our platform is anchored in a deep understanding of biology, strategically selecting compelling targets to address disease pathophysiology."],
 ["Biologics innovation","Molecular modeling, structural biology and precision engineering: tissue- or cell-selective antibodies, engineered cytokines, and bispecific or multi-functional biologics with proprietary masking."],
 ["Immunoengineering","We design molecules that target and reprogram critical immune pathways, aiming to reverse disease progression across autoimmune disorders and cancers."],
 ["Leading expertise","A core scientific team of world-leading experts, advisors and accomplished drug developers, supported by a highly experienced operational team."]];
var NEWS=[
 ["18 November 2026","A Phase I dose-escalation study of CUG279 in select advanced or metastatic solid tumors","ClinicalTrials.gov",CT],
 ["18 April 2024","Cugene presents preclinical data on VitoKine-2 at the AACR Annual Meeting 2024","cugene.com","https://www.cugene.com/news-1/"],
 ["18 April 2023","Cugene advances its study of CUG252 to Phase 1b, recruiting patients with mild-to-moderate SLE","cugene.com","https://www.cugene.com/news-2/"],
 ["16 May 2022","AbbVie and Cugene announce collaboration in autoimmune diseases","PR Newswire","https://www.prnewswire.com/news-releases/abbvie-and-cugene-announce-collaboration-in-autoimmune-diseases-301547560.html"],
 ["18 November 2021","Cugene presents preclinical data on TILKine-2 at SITC 2021","cugene.com","https://www.cugene.com/news-4/"]];
var SHEETS=[];
