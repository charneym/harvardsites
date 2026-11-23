/* Pipeline, from neurotraumasciences.com (Home, Pipeline, Science, News) and ClinicalTrials.gov (sponsor NeuroTrauma
   Sciences, LLC). Stage words only as the company and the registry state them.
   [program, route, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["NTS-104","Intravenous","Acute ischemic stroke","Lead indication · Phase 1","A water-soluble neurosteroid prodrug, converted in the bloodstream to the active neurosteroid NTS-105. The single-dose, randomized, double-blind, placebo-controlled Phase 1 study in healthy volunteers began dosing in June 2023.",0,"Phase 1","https://neurotraumasciences.com/neurotrauma-sciences-commences-first-in-human-dosing-in-the-us-of-investigational-neuroprotective-drug-nts-104/","First-in-human"],
 ["NTS-521","Intravenous","Early recovery from acute ischemic stroke","Phase 2a · ACT-IVATE","A multicenter, randomized, double-blind, placebo-controlled dose-response study of intravenous NTS-521 infusions, run as a domain within the ACT-GLOBAL trial platform, with an estimated 140 participants.",0,"Phase 2a",CTG+"NCT07742098","NCT07742098"],
 ["NTS-104","Intravenous","Chronic stroke","Indication","Chronic stroke affects an estimated 7–8 million patients in the US, with motor, sensorimotor, cognitive and neurobehavioral deficits, and there are no FDA-approved chronic stroke therapeutics.",1,"Chronic stroke","",""],
 ["Next generation","Subcutaneous / intramuscular","Acute ischemic and chronic stroke","Next generation candidate","A next generation candidate for subcutaneous or intramuscular dosing, with expansion indications beyond stroke.",1,"Expansion","",""]];
/* Milestones, as the company, its publications and ClinicalTrials.gov state them. */
var EVID=[
 ["August 2026","A Phase 2a study of intravenous NTS-521 in the early recovery treatment of acute ischemic stroke (ACT-IVATE) is registered on ClinicalTrials.gov"],
 ["June 2023","First-in-human dosing of NTS-104 in a Phase 1 safety, tolerability and pharmacokinetics study in healthy US volunteers"],
 ["Published in Stroke, 2022","NTS-104 improved neurological, motor and sensorimotor scores and reduced infarct size in a dose-dependent manner in an embolic stroke model"],
 ["December 2019","An exclusive worldwide license from Emory University for neuroactive compounds to treat ischemic stroke and traumatic brain injury"]];
/* neurotraumasciences.com (Home, Our Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Scot Barry, MS",title:"President",sum:"Joined in 2021 as Vice President of CMC; more than 30 years in the CDMO and biopharmaceutical industry, including VP of CMC at Idenix Pharmaceuticals, where he led the commercial development of Telbivudine."},
 {g:"Leadership",name:"Marc de Somer, MD, ScD, MSc, MPH, MBA",title:"Chief Medical Officer",sum:"Over 30 years of neuroscience clinical development and regulatory experience, 11 at Sandoz/Novartis; co-founded three start-ups and contributed to the global marketing of nine products."},
 {g:"Leadership",name:"Tom Parry, PhD, MBA",title:"Chief Scientific Officer",sum:"Over 27 years in drug discovery and development; formerly Vice President of Research and Early Development at Ovid Therapeutics, after roles at Acorda Therapeutics and Johnson & Johnson."},
 {g:"Leadership",name:"Martin Rabe, MSc",title:"EVP, Head of Regulatory Affairs and Quality Assurance",sum:"Over 25 years of global drug development and regulatory expertise in neurological diseases, with six new drug and biologic approvals; formerly at Kira Pharmaceuticals, Eisai, Pfizer and Merck."}];
var NEWS=[
 ["3 August 2026","Phase 2a study of NTS-521 in acute ischemic stroke (ACT-IVATE) posted","ClinicalTrials.gov",CTG+"NCT07742098"],
 ["1 June 2023","NeuroTrauma Sciences commences first-in-human dosing in the US of investigational neuroprotective drug NTS-104","neurotraumasciences.com","https://neurotraumasciences.com/neurotrauma-sciences-commences-first-in-human-dosing-in-the-us-of-investigational-neuroprotective-drug-nts-104/"],
 ["10 May 2023","NeuroTrauma Sciences announces key appointments to its executive leadership team","neurotraumasciences.com","https://neurotraumasciences.com/neurotrauma-sciences-announces-key-appointments-to-its-executive-leadership-team/"],
 ["November 2022","Pharmacological characterization of NTS-104 and its neuroprotective activity in experimental stroke models","Stroke","https://www.ahajournals.org/doi/10.1161/STROKEAHA.122.038507"],
 ["11 December 2019","Worldwide license agreement with Emory University for molecules to treat stroke and traumatic brain injury","neurotraumasciences.com","https://neurotraumasciences.com/neurotrauma-sciences-enters-into-worldwide-license-agreement-with-emory-university-for-molecules-to-treat-stroke-and-traumatic-brain-injury/"]];
var SHEETS=[];
