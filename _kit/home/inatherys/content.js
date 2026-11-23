var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@inatherys.com";
var CTG="https://clinicaltrials.gov/study/NCT03957915";
var ANSM="https://ansm.sante.fr/uploads/2026/01/23/20260123-aac-ina03-resume-rapport-de-synthese-aac.pdf";
var PSCC="https://www.parissaclaycancercluster.org/en/projet-accompagne/inatherys";
/* Programmes, from inatherys.com, the ANSM compassionate-access documents (April 2025 protocol, January 2026 report),
   ClinicalTrials.gov NCT03957915 and the Paris-Saclay Cancer Cluster listing. [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["INA03","Oncology · CD71","Anti-CD71 antibody-drug conjugate, acute leukaemia","Phase 1 completed","A first-in-human, open-label dose-escalation study in adults with relapsed or refractory acute leukaemia, sponsored by Institut Paoli-Calmettes with Inatherys as collaborator, enrolled 33 patients at three French centres and completed in February 2025.",0,"Clinical",CTG,"ClinicalTrials.gov"],
 ["INA03","Oncology · CD71","Triple-negative breast cancer, compassionate access","Compassionate access, France","Since February 2025 the ANSM has granted compassionate-access authorisations for INA03 in unresectable or metastatic triple-negative breast cancer expressing CD71, after at least three prior lines of systemic treatment.",0,"Compassionate use",ANSM,"ANSM report"],
 ["New generations","Oncology · CD71","Next-generation anti-CD71 antibodies","Research","New generations of antibodies targeting the transferrin receptor (CD71), for advanced cancers without therapeutic alternative.",1,"Research","",""],
 ["INA02","Inflammation · CD89","Anti-CD89 antibody","Preclinical","INA02 binds the CD89 receptor expressed by inflammatory cells and reduces the release of the mediators responsible for inflammation, for severe inflammatory diseases resistant to conventional treatment, such as asthma and arthritis.",1,"Inflammation","",""]];
var EVID=[
 ["Phase 1 completed","First-in-human study of INA03 in relapsed or refractory acute leukaemia, 33 patients, completed February 2025"],
 ["Compassionate access","ANSM authorisations for INA03 in triple-negative breast cancer since February 2025"],
 ["Paris-Saclay Cancer Cluster","Supported project since June 2025"],
 ["INSERM spin-off","Founded in 2009 from INSERM U1149 and the Imagine Institute"]];
/* inatherys.com (Our team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"Emmanuel Gomez",title:"CEO",sum:"Doctor of Pharmacy with an MSc in Immunology and an Executive MBA from HEC Paris; over 15 years between the pharmaceutical industry and academic research, including Celgene and CALYM."},
 {g:"Management",name:"Pierre Launay",title:"Co-founder & CSO",sum:"Doctor in Immunology and Inserm research director; over 17 years of research on monoclonal antibodies, and a former Instructor at Harvard Medical School."},
 {g:"Management",name:"Cécile Réal",title:"Financial and administrative management advisor",sum:"Board member; CEO and co-founder of Endodiag, earlier founder of Bioprofile and COO of Ariana Pharma."},
 {g:"Founders",name:"Olivier Hermine",title:"Chairman of the Scientific Council",sum:"Professor in Hematology and head of the Hematology department at Necker hospital; author or co-author of 365 publications."},
 {g:"Founders",name:"Renato Monteiro",title:"Scientific Advisor",sum:"Professor in Immunology at Bichat-Claude Bernard hospital and director of INSERM UMR 1149; produced both of Inatherys’ leads."},
 {g:"Founders",name:"Ivan Moura",title:"Scientific Advisor",sum:"INSERM researcher who characterised the anti-tumour properties of the anti-TfR monoclonal antibody, and took part in both patents."},
 {g:"Board",name:"Dominique Megret",title:"Board member",sum:"HEC graduate; former Chairman of Paribas Industrial Affairs (now PAI partners) and of M&M Capital."},
 {g:"Board",name:"Anne Bousseau",title:"Board member",sum:"25+ years in the Sanofi-Aventis group; led the Sanofi Oncology Project Direction group from 2004 to 2015."},
 {g:"Board",name:"Jacky Vonderscher",title:"Board member",sum:"30 years in R&D executive positions at Novartis, then global head of translational research sciences at Roche."}];
var NEWS=[
 ["23 January 2026","ANSM publishes the first compassionate-access summary report for INA03 in triple-negative breast cancer","ANSM",ANSM],
 ["June 2025","Inatherys joins the Paris-Saclay Cancer Cluster as a supported project","Paris-Saclay Cancer Cluster",PSCC],
 ["24 February 2025","First-in-human Phase 1 study of INA03 in relapsed or refractory acute leukaemia completes","ClinicalTrials.gov",CTG]];
var SHEETS=[];
