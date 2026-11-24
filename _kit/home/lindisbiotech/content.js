var FONTS=['300 1em "Titillium Web"','400 1em "Titillium Web"','600 1em "Titillium Web"','700 1em "Titillium Web"','400 1em "Jura"','600 1em "Jura"'];
/* info@lindisbiotech.de is the address in the top bar of lindisbiotech.com. */
var MAIL="mailto:info@lindisbiotech.de";
var TEL="tel:+498945239600";
var LNEWS="https://www.lindisbiotech.com/scientific-publications-news/";
var BS_LAUNCH="https://www.biospace.com/press-releases/pharmanovia-announces-launch-of-korjuny-catumaxomab-in-germany-a-first-in-class-treatment-for-malignant-ascites";
var BS_EMA="https://www.biospace.com/press-releases/lindis-biotech-and-pharmanovia-announce-european-marketing-authorization-approval-for-catumaxomab-a-first-in-class-treatment-for-malignant-ascites";
/* Pipeline, from the chart on lindisbiotech.com/pipeline (2024) and the 2025 releases. [category, stage label, programme, targets, indication, detail, stage fraction (of research → approval), approved] */
var PIPE=[
 ["Solid tumour","EU approved","Catumaxomab · KORJUNY®","EpCAM × CD3","Malignant ascites","The first T-cell engaging multi-specific antibody approved worldwide (2009, as Removab®). Re-approved in the EU in February 2025 for malignant ascites in adults with EpCAM-positive carcinomas, and launched in Germany by partner Pharmanovia in December 2025.",1,1],
 ["Solid tumour","Phase I","Catumaxomab","EpCAM × CD3","Non-muscle-invasive bladder cancer (NMIBC)","Intravesical treatment of high-risk NMIBC. Phase I dose-escalation data were presented at EMUC22.",.5,0],
 ["Haematological","Phase II","Bi20","CD20 × CD3","NHL / DLBCL, CLL","A Triomab® antibody against the B-cell antigen CD20, for non-Hodgkin lymphoma, diffuse large B-cell lymphoma and chronic lymphocytic leukaemia.",.58,0],
 ["Haematological","Non-clinical","Armed T cells","CD20 × CD3","NHL / DLBCL, CLL","Triomab®-armed immune effector cells, developed with the University Hospital Leipzig.",.3,0],
 ["Ektodermal origin","Non-clinical","Ektomun","GD2 × CD3","Neuroblastoma, melanoma, sarcoma","A GD2-specific Triomab® antibody, in non-clinical development with Charité Berlin.",.3,0]];
/* Partners, from lindisbiotech.com/partnering and the releases. */
var PARTNERS=[
 ["Pharmanovia","Exclusive licence to commercialise catumaxomab across Europe (2024); launched KORJUNY® in Germany in 2025."],
 ["LintonPharm, Guangzhou","Strategic partner for the development of Triomab® and Fleximab® antibodies in Asia."],
 ["Trion Research, Munich","Research partner for the discovery and development of new drug candidates."],
 ["University Hospital Leipzig","Triomab®-armed immune effector cells for haematological and oncological neoplasia."],
 ["Helmholtz Zentrum München","Translational research projects with the German research centre for environmental health."],
 ["Charité Berlin","Non-clinical development of GD2-specific Triomab® antibodies, with the Division of Paediatric Oncology and Haematology."]];
/* lindisbiotech.com/profile. Names and titles as the site gives them. */
var TEAM=[
 {g:"Leadership",name:"Dr. Horst Lindhofer",title:"Founder and CEO",sum:"Proposed the trifunctional mode of action and named the Triomab® antibodies. Inventor or co-inventor of more than 20 patents; AIO Award of the German Cancer Society, 2002."},
 {g:"Leadership",name:"Dr. Peter Ruf",title:"Chief Operating Officer",sum:"Twenty years in tumour immunotherapy research; previously headed Antibody Development at Trion Research, taking trifunctional antibodies from the lab to industrial scale."}];
var NEWS=[
 ["15 December 2025","Pharmanovia announces launch of KORJUNY® (catumaxomab) in Germany, a first-in-class treatment for malignant ascites","BioSpace",BS_LAUNCH],
 ["13 February 2025","Lindis Biotech and Pharmanovia announce EU marketing authorisation for catumaxomab","BioSpace",BS_EMA],
 ["19 November 2024","Lindis Biotech signs licensing agreement with Pharmanovia for the commercialisation of catumaxomab","lindisbiotech.com",LNEWS],
 ["21 October 2024","Lindis Biotech receives positive CHMP opinion for KORJUNY® (catumaxomab) in the European Union","lindisbiotech.com",LNEWS],
 ["14 November 2022","Encouraging data from high-risk NMIBC patients treated with catumaxomab, presented at EMUC22","lindisbiotech.com",LNEWS]];
var SHEETS=[];
