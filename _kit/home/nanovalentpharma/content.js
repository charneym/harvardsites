var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','400 1em "Questrial"'];
var CONTACT="https://nanovalentpharma.com/contact-us/";
var NB="https://nanovalentpharma.com/";
/* pipeline, from NanoValent's own chart ("Our Pipeline", last updated January 21, 2026) and the pipeline text.
   [candidate, target / payload, indication, status, stage reached (0..4 of R&D, Preclinical, IND-enabling, Clinical), detail, dim] */
var PIPE=[
 ["NV103/NV105","CD99 · Irinotecan","Ewing sarcoma","IND enabling",3,"The lead programme, now approaching Investigational New Drug status. The initial focus on Ewing sarcoma reflects NanoValent\u2019s commitment to pediatric cancers. NV105 adds improved antibody binding.",0],
 ["NV103/NV105","CD99 · Irinotecan","Glioblastoma (GBM)","IND enabling",3,"Being validated in glioblastoma, supported by an NCI STTR award; the nanospheres\u2019 ability to cross the blood\u2013brain barrier matters here.",0],
 ["NV103/NV105","CD99 · Irinotecan","CD99-expressing tumours","IND enabling",3,"Also being validated in ovarian and pancreatic cancer and other CD99-expressing tumours.",0],
 ["NV104","B7H3 · Irinotecan","Glioblastoma (GBM)","Preclinical",2,"Validating programmes in GBM and other B7H3 (CD276) expressing tumours are planned.",0],
 ["NV106","B7H3 · Temozolomide","Glioblastoma (GBM)","Preclinical",2,"Validating programmes in GBM and other B7H3 (CD276) expressing tumours are planned.",0],
 ["NV102","CD19 · Doxorubicin","Leukemia","Preclinical",2,"Validating programmes in acute myeloid leukemia (AML), acute lymphoblastic leukemia (ALL) and other CD19-expressing tumours are planned.",0],
 ["Nucleic-acid TNS","Undisclosed","Undisclosed","Preclinical",1.5,"A second-generation nanosphere with a solid cationic lipid interior that captures nucleic acids, with the same shell and blood\u2013brain barrier features.",1]];
/* publications (NanoValent Publications / Platform Technology pages; PubMed) */
var EVID=[
 ["bioRxiv, January 2026","CD99-targeted irinotecan-containing nanoparticles show twenty-fold greater anti-tumor effect than free irinotecan for treatment of Ewing sarcoma","https://doi.org/10.64898/2026.01.06.697855"],
 ["bioRxiv, December 2025","Targeted nanoparticles: an innovative modality in the treatment of cancer","https://doi.org/10.64898/2025.12.01.691687"],
 ["Cancer Research, 2024 (AACR)","Tumor-targeted nanoparticles for cancer therapy, Abstract 3206","https://aacrjournals.org/cancerres/article/84/6_Supplement/3206/735746/Abstract-3206-Tumor-targeted-nanoparticles-for"],
 ["Sarcoma, 2012","Enhanced growth inhibition of osteosarcoma by cytotoxic polymerized liposomal nanoparticles targeting the ALCAM cell surface receptor","https://pubmed.ncbi.nlm.nih.gov/23024593/"]];
/* nanovalentpharma.com, About Us: Our Executive Leadership. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Executive leadership",name:"Mark Lewis",title:"Chief Executive Officer",sum:"Oncology-focused pharmaceutical executive, with Amersham, Farmitalia, Chiron, Servier and SuperGen."},
 {g:"Executive leadership",name:"Jon Nagy, PhD",title:"Chief Scientific Officer and President",sum:"Co-founder. Synthetic organic chemist, formerly at Lawrence Berkeley National Laboratory and LigoCyte."},
 {g:"Executive leadership",name:"Timothy Triche, MD, PhD",title:"Chief Medical Officer",sum:"Co-founder. Pathologist; Co-Director, CHLA Center for Personalized Medicine; USC faculty."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["January 2026","NV103 shows a twenty-fold greater anti-tumour effect than free irinotecan in Ewing sarcoma models","bioRxiv","https://doi.org/10.64898/2026.01.06.697855"],
 ["December 2025","Targeted nanoparticles: an innovative modality in the treatment of cancer","bioRxiv","https://doi.org/10.64898/2025.12.01.691687"],
 ["April 2024","New data at AACR, San Diego, on tumour-targeted nanoparticles for cancer therapy","Cancer Research","https://aacrjournals.org/cancerres/article/84/6_Supplement/3206/735746/Abstract-3206-Tumor-targeted-nanoparticles-for"],
 ["April 2021","A more targeted approach in pediatric cancer therapy?","Onco\u2019Zine","https://www.oncozine.com/a-more-targeted-approach-in-pediatric-cancer-therapy/"],
 ["October 2018","NIH SBIR funding for the targeted nanoparticle technology","ADC Review","https://www.adcreview.com/news/nanovalent-resceives-nih-sbir-funding-for-ongoing-development-of-antibody-conjugated-nanoparticle-platform-technology/"],
 ["October 2017","Exclusive global licensing agreement with Children\u2019s Hospital Los Angeles","ADC Review","https://www.adcreview.com/news/nanovalent-pharmaceuticals-childrens-hospital-los-angeles-sign-exclusive-global-licensing-agreement/"]];
var SHEETS=[];

