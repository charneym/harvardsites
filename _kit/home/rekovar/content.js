var FONTS=['300 1em "Poppins"','italic 300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"','400 1em "DM Mono"','500 1em "DM Mono"'];
var WEB="https://www.rekovar.com/";
var MAIL="admin@rekovar.com";
var CTG="https://clinicaltrials.gov/study/NCT06303986";
var RPT="https://reporter.nih.gov/search/results?query=REKOVAR";
/* clinical programme: rekovar.com (home, about, news), ClinicalTrials.gov NCT06303986 and NIH RePORTER (org REKOVAR, Lake Forest). [name, for, tag, detail, link, label] */
var PROD=[
 ["NeoMonki Neonatal Monitoring Kit","Hospital use in neonates with neonatal abstinence syndrome","Lead device","An infant wearable wristband, an imaging camera, a recharging station, a tablet app and a patient portal for healthcare providers, built for automated digital scoring and continuous monitoring of the signs of NAS. Investigational use only.",WEB,"rekovar.com"],
 ["Multicenter NAS data study","ClinicalTrials.gov NCT06303986 · University of New Mexico, UT Health San Antonio, Corewell Health","Enrolling by invitation","Collecting physiological and behavioural data from infants with NAS to develop the AI algorithm and evaluate automated Finnegan / ESC data collection. 33 patients enrolled at the first site, UNM, by April 2025.",CTG,"ClinicalTrials.gov"],
 ["Wireless wearable with AI analytics","NIH · National Institute on Drug Abuse · SBIR","Funded · 2020–2026","NIDA support since 2020 under the HEAL Initiative: an STTR Phase I, a $2.5 million SBIR Phase II for the wireless withdrawal detection and monitoring system, and a 2025 award for AI analytics on the wearable.",RPT,"NIH RePORTER"]];
/* people: rekovar.com/people */
var TEAM=[
 ["Shiva Sharareh, PhD","Chief Executive Officer and Founder","Founded Rekovar in late 2020; principal investigator on its NIH awards."],
 ["Erik Linstead, PhD","Machine learning",""],
 ["Robert Kenney","Commercialization",""],
 ["Pablo Morales, MD","Regulatory consultant","Former FDA regulatory physician."],
 ["Michael Hill, PhD","Lead mentor","EvoNexus."]];
var CLIN=[
 ["Anthony Chang, MD","Chief Intelligence and Innovation Officer","Children’s Hospital of Orange County"],
 ["Sudeep Kukreja, MD","Medical Director, Neonatal Intensive Care","Children’s Hospital of Orange County"],
 ["Jessie Maxwell, MD","Professor of Pediatrics and Neurosciences","The University of New Mexico"],
 ["Nitin Chouthai, MD","Neonatology","Corewell Health"],
 ["Edward Boyer, MD, PhD","Professor of Emergency Medicine","The Ohio State University"],
 ["Afshin Shabanie, MD","Chairman, Department of Anesthesiology","Providence St. Joseph Hospital of Orange"],
 ["Daniel Scheinberg, MD","Anesthesiologist","Providence St. Joseph Hospital"]];
var BACK=["National Institute on Drug Abuse","NIH HEAL Initiative","NVIDIA Inception","EvoNexus"];
/* news: Rekovar's own posts (rekovar.com/news) and the trial record. [date, headline, source, url] */
var NEWS=[
 ["September 2025","Multicenter NAS study record updated: enrolling by invitation","ClinicalTrials.gov",CTG],
 ["April 17, 2025","Major milestones: 33 patients enrolled at UNM, a new NIH grant and ISO 13485 recertification","Rekovar",WEB+"news/major-milestones-in-our-journey-to-transform-neonatal-care"],
 ["December 27, 2024","Rekovar joins the NVIDIA Inception program","Rekovar",WEB+"news/rekovar-joins-nvidia-inception"],
 ["December 27, 2024","Rekovar wins the AIMed Shark Tank competition at AIMed 2024","Rekovar",WEB+"news/rekovar-wins-ai-med-shark-tank"],
 ["June 27, 2024","BSI certifies Rekovar to ISO 13485 for the NeoMonki kit","Rekovar",WEB+"news/rekovar-receives-bsi-certification-for-iso-13485-quality-management-for-medical-devices"]];
var SHEETS=[];
