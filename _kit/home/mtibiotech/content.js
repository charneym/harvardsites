var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','800 1em "Archivo"','italic 800 1em "Archivo"'];
var MAIL="info@mtibiotech.com";
var RP="https://reporter.nih.gov/project-details/";
/* programmes: every line from NIH RePORTER abstracts (MTI BioTech awards), PubMed and mtibiotech.com.
   [compound, indication, kind, status, detail, link, link label] */
var PIPE=[
 ["2-HOBA","Pulmonary hypertension","Lead programme","NIH STTR Phase II","With Vanderbilt University: a small open-label mechanistic pilot trial of two weeks of 2-HOBA in patients, right-ventricle function under stress in a sheep model, and 2-HOBA alone and with standard of care in mouse and large-animal models. NHLBI award R42HL158393.",RP+"11180471","NIH RePORTER"],
 ["2-HOBA","Metabolic dysfunction-associated steatohepatitis (MASH)","Liver","Preclinical","Scavenging reactive dicarbonyls with 2-HOBA improved MASH in preclinical models, a study by MTI Biotech with Vanderbilt investigators.","https://doi.org/10.3390/nu17040610","Nutrients, 2025"],
 ["2-HOBA","Inflammation-driven colorectal cancer","Prevention","NIH STTR Phase I","With the Wilson Lab at Vanderbilt: testing whether scavenging the dicarbonyl electrophiles of chronic inflammation, which form adducts on DNA, histones and proteins, prevents colitis-associated cancer. NCI award R41CA257262.",RP+"10257862","NIH RePORTER"],
 ["2-HOBA","Alzheimer’s disease prevention","Brain","NIH SBIR, first in humans","Single and multiple ascending-dose studies of the pharmacokinetics, metabolism and safety of 2-HOBA in people, its brain penetrance, and its effect on blood and spinal-fluid markers of oxidised proteins. NIA award R44AG055184.",RP+"9970647","NIH RePORTER"],
 ["HMB","Muscle health and performance","Nutrition","On the market","MTI Biotech’s first ingredient, discovered by its founders: seven years of animal and human testing before it was marketed. Licensed by Metabolic Technologies, LLC as myHMB®.","https://doi.org/10.1080/15502783.2024.2434734","ISSN position stand"]];
/* the August 2026 pulmonary hypertension study (Journal of Translational Medicine), every line from its abstract */
var EVID=[
 ["Three models","Metabolic stress, cardiometabolic syndrome and pressure load: three complementary mouse models of pulmonary hypertension"],
 ["Pressure","Scavenging reactive lipids with 2-HOBA lowered right ventricular systolic pressure by about 10%"],
 ["The heart","Diastolic dysfunction was reduced, and right-ventricle fatty acid oxidation, severely impaired in two of the models, returned to normal"],
 ["Mechanism","Restored mitochondrial function and less oxidative protein damage, with lower plasma lipids and ceramides"]];
/* mtibiotech.com/about-mti and /contact-us; NIH RePORTER; PubMed affiliations. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"John A. Rathmacher, PhD",title:"Director of Clinical Research",sum:"Contact principal investigator on MTI’s NIH awards for 2-HOBA, and the company’s contact for research proposals."},
 {g:"Leadership",name:"Shawn Baier",title:"Chief Operating Officer",sum:"MTI Biotech’s contact for business questions."},
 {g:"Founders",name:"Steven L. Nissen, DVM, PhD",title:"Co-founder, 1990",sum:"University professor whose research led to the discovery of beta-hydroxy beta-methylbutyrate (HMB) and its effects on health and performance."},
 {g:"Founders",name:"Naji N. Abumrad, MD",title:"Co-founder, 1990",sum:"University professor and co-founder of MTI Biotech; co-author of MTI’s 2023 study of oral 2-HOBA in healthy volunteers."},
 {g:"Collaborators",name:"James D. West, PhD",title:"Vanderbilt University",sum:"Division of Allergy, Pulmonary and Critical Care Medicine; principal investigator with MTI on the pulmonary hypertension STTR."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Reducing reactive lipids with 2-HOBA improves cardiac metabolic and diastolic function in models of pulmonary hypertension","J Transl Med","https://doi.org/10.1186/s12967-026-08716-8"],
 ["August 2025","NHLBI continues MTI Biotech’s STTR Phase II award, “2-HOBA for Treatment of Pulmonary Hypertension” ($957,913)","NIH RePORTER",RP+"11180471"],
 ["February 2025","Reactive dicarbonyl scavenging with 2-hydroxybenzylamine improves MASH","Nutrients","https://doi.org/10.3390/nu17040610"],
 ["2025","International Society of Sports Nutrition position stand on HMB, led by Dr. John Rathmacher","JISSN","https://doi.org/10.1080/15502783.2024.2434734"],
 ["August 2023","Inflammation biomarker response to oral 2-HOBA acetate in healthy humans","Inflammation","https://doi.org/10.1007/s10753-023-01801-w"]];
var SHEETS=[];
