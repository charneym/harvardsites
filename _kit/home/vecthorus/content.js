var FONTS=['300 1em "Raleway"','400 1em "Raleway"','500 1em "Raleway"','400 1em "Source Sans 3"','600 1em "Source Sans 3"','500 1em "Oswald"','300 1em "Oswald"'];
/* contact@vect-horus.com is the company contact published in its 30 June 2026 GlobeNewswire release (Servier). */
var MAIL="mailto:contact@vect-horus.com";
var TEL="tel:+33491698781";
var GN_SERVIER="https://www.globenewswire.com/news-release/2026/06/30/3319385/0/en/vect-horus-announces-collaboration-and-license-option-agreement-with-servier-to-develop-targeted-oligonucleotide-therapeutics-for-rare-cns-diseases.html";
var GN_OLIX="https://www.globenewswire.com/news-release/2026/02/03/3230746/0/en/Vect-Horus-Enters-a-CNS-Focused-Research-Collaboration-with-OliX-Pharmaceuticals.html";
var BIORXIV="https://www.biorxiv.org/content/10.64898/2026.05.20.726486v1";
var NATURE="https://www.nature.com/articles/d43747-025-00013-5";
var VHNEWS="https://www.vect-horus.com/News";
/* Partnerships, from vect-horus.com (Partnering, News) and the releases. [partner, since, title, kind, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Servier","June 2026","Oligonucleotides for rare CNS diseases","Research evaluation · exclusive licence option","VECTrans® will carry Servier’s oligonucleotide therapeutics across biological barriers to the brain, for the treatment of central nervous system diseases.",0,"Option",GN_SERVIER,"Release"],
 ["OliX Pharmaceuticals","February 2026","siRNA delivery for CNS disorders","Material transfer and evaluation agreement","A collaboration with a leading developer of RNAi therapeutics, focused on delivering siRNA to the central nervous system.",0,"Evaluation",GN_OLIX,"Release"],
 ["Ionis Pharmaceuticals","January 2024","RNA-targeted medicines for neurological diseases","Global licence","A worldwide, exclusive licence to use VECTrans® for systemic delivery of RNA-targeted therapeutics that cross the blood–brain barrier and address targets in the CNS.",1,"Licence","",""],
 ["Novo Nordisk","October 2023","Targeted therapeutics","Global licence","A worldwide, exclusive licence to use VECTrans® for delivery of cargos directed against specified targets, with an option to add further targets.",1,"Licence","",""],
 ["RadioMedix","Co-development","Theranostics for glioblastoma and pancreatic cancer","Co-development and licence · in the clinic","A Vect-Horus theranostic agent for the diagnosis and radiotherapy of glioblastoma (GBM) and pancreatic ductal adenocarcinoma (PDAC). RadioMedix leads clinical development; the first patient was dosed with 203Pb-RMX-VH-PIB in September 2025.",1,"Clinical",VHNEWS,"News"]];
/* Business model and backing, from vect-horus.com (Partnering, Company) and the June 2026 release. */
var EVID=[
 ["Licensing","More than a dozen research collaborations, including licence agreements with Novo Nordisk, Ionis and RadioMedix"],
 ["Internal pipeline","Vector–payload candidates developed up to preclinical or early clinical trials, then out-licensed to pharma and biotech partners"],
 ["Clinical","One theranostic agent co-developed with RadioMedix is already in early clinical trials, in glioblastoma and pancreatic cancer"],
 ["Région Sud · REACT-EU","A non-dilutive grant of more than €1M to scale R&D and production, including nucleic-acid therapeutics (siRNAs, ASOs, mRNAs)"]];
/* vect-horus.com (Company). Names and titles as the site gives them. */
var TEAM=[
 {g:"Founders and management",name:"Alexandre Tokay",title:"CEO and co-founder"},
 {g:"Founders and management",name:"Michel Khrestchatisky, PhD",title:"Co-founder and scientific counsel"},
 {g:"Founders and management",name:"Claudia Fromond",title:"Director of Research and Development"},
 {g:"Founders and management",name:"Jamal Temsamani",title:"Chief Business Officer"},
 {g:"Founders and management",name:"Carole Imbert",title:"Chief Financial Officer"},
 {g:"Founders and management",name:"Florence Ferchat",title:"Human Resources Manager"},
 {g:"Scientific advisory board",name:"Pr. Pascal Hammel",title:"MD"},
 {g:"Scientific advisory board",name:"Pr. Frédéric Courbon",title:"PhD"},
 {g:"Scientific advisory board",name:"Jean-Pierre Benoit",title:"PharmD, PhD"},
 {g:"Scientific advisory board",name:"Julia Alterman",title:"PhD"},
 {g:"Scientific advisory board",name:"Frédéric Matonti",title:"MD, PhD, FEBO"},
 {g:"Scientific advisory board",name:"Xavier Declèves",title:"Professor of Pharmacokinetics, PharmD, PhD"}];
var NEWS=[
 ["30 June 2026","Vect-Horus announces collaboration and licence option agreement with Servier to develop targeted oligonucleotide therapeutics for rare CNS diseases","GlobeNewswire",GN_SERVIER],
 ["26 May 2026","Harnessing TfR1 for cross-species systemic delivery of siRNAs to deep brain regions using single-domain antibodies","bioRxiv",BIORXIV],
 ["10 March 2026","Vect-Horus appoints Claudia Fromond as new Director of R&D","vect-horus.com",VHNEWS],
 ["3 February 2026","Vect-Horus enters a CNS-focused research collaboration with OliX Pharmaceuticals","GlobeNewswire",GN_OLIX],
 ["September 2025","How blood–brain barrier technology is unleashing CNS therapies","Nature · Biopharma Dealmakers",NATURE]];
var SHEETS=[];
