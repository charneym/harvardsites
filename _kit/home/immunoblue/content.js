var FONTS=['300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var WEB="https://www.immunoblue.com/";
var MAIL="immunoblue@gmail.com";
var FCOI="https://www.immunoblue.com/_files/ugd/86e6b3_297c7c49730c4ea4bd74295b80ffa1db.pdf";
/* the platform, from the company's Our Technology page and the NIH STTR abstract */
var TECH=[["Nanoparticle","A T cell expansion platform built on an FDA-approved nanoparticle: Prussian blue."],
 ["Light","Activated with a laser, the nanoparticles heat tumor cells and generate potent responses from the immune system."],
 ["Personalized","Tumor-specific T cells expand in an antigen-agnostic manner, so each patient's cells target many tumor antigens at once."]];
/* programs: [name, indication, description, stage, source url] (stages as stated in the NIH awards and patent filings) */
var PG=[
 ["IB-T cells","Glioblastoma","Personalized, multi-targeted autologous adoptive T cell therapy, envisioned as an adjuvant given into the tumor bed through an Ommaya reservoir after surgery.","IND-enabling · NIH NCI STTR Phase II","https://reporter.nih.gov/project-details/11415186"],
 ["Photothermal nanoimmunotherapy","Checkpoint inhibitor-resistant cancer","Prussian blue nanoparticle-based photothermal therapy combined with immune cell stimulating agonistic agents.","Patent pending · US20240415773A1","https://patents.google.com/patent/US20240415773A1"],
 ["Engineered nanoimmunotherapy","Melanoma","An engineered nanoimmunotherapy for melanoma, funded by an NIH NCI STTR Phase I award.","NIH NCI STTR Phase I · 2018","https://reporter.nih.gov/project-details/9464484"]];
/* people, from the company's Leadership and Advisors pages; summaries from the NIH STTR abstract */
var PEOPLE=[
 {g:"Leadership",name:"Lizie Sweeney, PhD",title:"Chief Executive Officer",sum:"Principal investigator for ImmunoBlue on its NIH NCI STTR awards."},
 {g:"Leadership",name:"Rohan Fernandes, PhD",title:"Founder, Chief Scientific Officer",sum:"Principal investigator at George Washington University, ImmunoBlue's STTR partner."},
 {g:"Leadership",name:"Varnika Roy, PhD",title:"Head of Development",sum:""},
 {g:"Advisors",name:"C. Russell Y. Cruz, MD, PhD",title:"Advisor",sum:"Cellular immunotherapy"},
 {g:"Advisors",name:"Carlos E. Sanchez, MD",title:"Advisor",sum:"Neurosurgery and immunotherapy"},
 {g:"Advisors",name:"Jonathan H. Sherman, MD",title:"Advisor",sum:"Neurosurgical oncology"},
 {g:"Advisors",name:"Morana Vojnic, MD",title:"Advisor",sum:"Neuro-oncology"},
 {g:"Advisors",name:"Chixiang Chen, PhD, MS",title:"Advisor",sum:"Biostatistics"},
 {g:"Advisors",name:"Katie Hornfeck, MS, CCRP",title:"Advisor",sum:"Regulatory and clinical consulting"}];
/* news and research: [date, type, title, url] */
var NEWS=[
 ["August 2026","NIH award","STTR Phase II continues: Engineered Glioblastoma-specific T cells using Immunostimulatory Photothermal Nanoparticles","https://reporter.nih.gov/project-details/11415186"],
 ["September 2025","NIH award","NCI STTR Phase II award to take IB-T cells toward clinical readiness","https://reporter.nih.gov/project-details/11315832"],
 ["2024","Bioeng. Transl. Med.","Photothermal Prussian blue nanoparticles generate potent multi-targeted tumor-specific T cells as an adoptive cell therapy","https://doi.org/10.1002/btm2.10639"],
 ["2023","Cytotherapy","Engineered tumor-specific T cells using immunostimulatory photothermal nanoparticles","https://doi.org/10.1016/j.jcyt.2023.03.014"],
 ["2022","Adv. Healthc. Mater.","Interstitial photothermal therapy generates durable treatment responses in neuroblastoma","https://doi.org/10.1002/adhm.202201084"],
 ["2021","Nano Research","CD137 agonist potentiates the abscopal efficacy of nanoparticle-based photothermal therapy for melanoma","https://doi.org/10.1007/s12274-021-3813-1"]];
var SHEETS=[];
