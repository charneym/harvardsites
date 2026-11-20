var FONTS=['italic 700 1em "DM Sans"','300 1em "DM Sans"','italic 300 1em "DM Sans"','400 1em "DM Sans"','italic 400 1em "DM Sans"','500 1em "DM Sans"','600 1em "DM Sans"','700 1em "DM Sans"','400 1em "DM Mono"','500 1em "DM Mono"'];
var MAIL="welcome@deeppulseneuro.com";
var LI="https://www.linkedin.com/company/deeppulseneuro/";
/* every line below is from deeppulseneuro.com (home: Company, Epilepsy, Technology, Team, CSR, Partners) unless noted */
/* what the technology aims to enable: their own list, with their footnote "*pending clinical evidence". [label, title, detail] */
var AIMS=[
 ["Diagnosis","Faster and more accurate diagnosis","EEG measured deep in the brain, as close as possible to the areas responsible for epilepsy."],
 ["Patients","Less uncertainty about the care pathway","For patients and their caregivers, a clearer picture of what comes next."],
 ["Treatment","Refined pharmaceutical or surgical options","A clinically relevant channel to guide the choice between drug and surgical treatment."],
 ["Health systems","Reduced medical costs","A minimally invasive procedure, through the cerebral vessels, without perforating the skull."]];
/* deeppulseneuro.com Team. Text-only masthead (CI/CL): their portraits carry a LinkedIn badge baked into the image. Summaries condensed from their bios. */
var TEAM=[
 {g:"Co-founders",name:"Stéphane Corp",title:"CEO, Co-founder",sum:"25 years in the medical device industry, in European start-ups and an American multinational; co-founder of Hyprevention Inc.; French Foreign Trade Advisor."},
 {g:"Co-founders",name:"Pierre-Henri Lefèvre, MD",title:"Medical Director, Co-founder",sum:"Interventional neuroradiologist specialising in epilepsy; Department of Cerebral Endovascular Medicine, Montpellier University Hospital."},
 {g:"Co-founders",name:"Vincent Serantoni, PhD",title:"R&D Project Manager, Co-founder",sum:"PhD in biomechanics; six years in public research working closely with hospitals and clinicians."},
 {g:"Co-founders",name:"Serge Bernard, PhD",title:"Scientific Advisor, Co-founder",sum:"CNRS research director in microelectronics and sensor systems, including electronic devices for medical applications."},
 {g:"Team",name:"Koji Andriamahery",title:"R&D Engineer, Embedded Electronics",sum:"Mechatronics (Ecole des Mines) and healthcare devices (University of Montpellier); the full physiological signal chain, bedside to software."},
 {g:"Consultants",name:"Stéphanie Garbez",title:"Senior Consultant, R&D, QARA · Medinqara",sum:"25 years in medical device evaluation, quality systems and technical documentation, including at a notified body."},
 {g:"Consultants",name:"Marjory Mayo",title:"Organisational Engagement & Robustness · Maille & Co",sum:"A decade in quality systems and workplace development in the medical device industry."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["December 2025","DeepPulseNeuro, winner of the i-Lab 2025 competition","LIRMM","https://www.lirmm.fr/2025/12/18/deeppulseneuro-winner-of-the-i-lab-2025-competition"],
 ["October 2025","i-Lab 2025: the list of laureates, including the DeepPulseNeuro project","Ministry of Higher Education and Research","https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2025-10/annexe---liste-des-laur-ats-concours-d-innovation-2024-2025-38061.pdf"]];
var PARTNERS=["Bpifrance","i-Lab","CHU de Montpellier","LIRMM","LMGC","AxLR Occitanie Méditerranée","Montpellier BIC","Eurobiomed","La French Care","Région Occitanie"];
var SHEETS=[];
