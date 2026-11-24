var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="info@tolremo.com";
var LI="https://www.linkedin.com/company/tolremo-therapeutics/";
var TW="https://www.tolremo.com";
/* the TT125-802 programme: every line from tolremo.com (/ourapproach, /about-us, /news) and its press releases.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["TT125-802 · monotherapy","Advanced solid tumours","Phase I · NCT06403436","Completed 2026","45 patients, including 24 with non-small cell lung cancer. The final dataset sets 60 mg once daily as the recommended dose and confirms a differentiated safety profile without thrombocytopenia.",TW+"/press-releases/2026/09/15/tolremo-therapeutics-completes-phase-i-study-of-tt125-802-and-presents-final-clinical-data-at-world-conference-on-lung-cancer-2026","Release"],
 ["TT125-802","EGFR-mutated NSCLC","After an EGFR inhibitor","FDA Fast Track","Locally advanced or metastatic NSCLC with an EGFR exon 19 deletion or exon 21 L858R mutation, progressing on at least one prior line of therapy including an EGFR inhibitor.",TW+"/s/20250828_Tolremo_NSCLC_Fast-Track-PR_final.pdf","Release"],
 ["TT125-802","KRAS-G12C-mutated NSCLC","After a KRAS G12C inhibitor","FDA Fast Track","Locally advanced or metastatic KRAS-G12C-mutated NSCLC, progressing on at least one prior line of therapy including a KRAS G12C inhibitor.",TW+"/s/20250828_Tolremo_NSCLC_Fast-Track-PR_final.pdf","Release"],
 ["TT125-802 · combinations","With targeted therapies","KRAS, EGFR and AR inhibitors","Next study","In preclinical models of lung, colorectal and prostate cancer, adding TT125-802 to targeted therapies gave deeper and more durable responses. The next study tests whether blocking oncogenic signalling and transcriptional escape together does the same in patients.",TW+"/ourapproach","Our approach"]];
/* final Phase I data, WCLC 2026: every line from TOLREMO's release of 15 September 2026 */
var EVID=[
 ["Tumour shrinkage","10 of 24 patients with NSCLC (42%) saw their tumours shrink on TT125-802 alone"],
 ["Confirmed responses","Three durable partial responses, each in a different resistance setting: primary resistance to osimertinib, acquired resistance to KRAS-G12C inhibition, and SOX2-amplified squamous NSCLC"],
 ["Safety","98% of treatment-related adverse events were Grade 1 or 2, reversible and manageable, with no thrombocytopenia"],
 ["Dose","60 mg once a day, without food restriction, gives continuous target coverage and supports combination studies"]];
/* tolremo.com/about-us and press releases. Text-only masthead (CI/CL); the summaries are condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Stefanie Flückiger-Mangual, PhD",title:"Co-founder & CEO",sum:"A scientific founder and expert in drug resistance in cancer therapy. PhD in Molecular and Translational Biomedicine from ETH Zurich; led the team that discovered the mechanisms TOLREMO is built on."},
 {g:"Leadership",name:"Alessandra Cesano, MD, PhD",title:"Chief Medical Officer",sum:"Board-certified oncologist with over 25 years in oncology drug development; former CMO of ESSA Pharma, NanoString and Nodality. Also a member of the Board."},
 {g:"Leadership",name:"Jessica Corson",title:"Chief Business Officer",sum:"Over 20 years in biotech strategy; formerly VP of Corporate Strategy, Business Development and Alliance Management at Mirati Therapeutics."},
 {g:"Leadership",name:"Claudia Escher, PhD",title:"Chief Operating Officer",sum:"Joined from Biognosys, where as COO she ran contract research in mass spectrometry proteomics. PhD in biochemistry, University of Basel."},
 {g:"Board of Directors",name:"Julie M. Cherrington, PhD",title:"Chair of the Board",sum:"Company builder and former CEO of several oncology biotechs, including Arch Oncology and Zenith Epigenetics; Venture Partner at Brandon Capital Partners."},
 {g:"Board of Directors",name:"Mike Sherman",title:"Director",sum:"Former CEO of Endocyte, acquired by Novartis in 2018, and CEO then Chair of Chimerix through its acquisition by Jazz Pharmaceuticals."},
 {g:"Board of Directors",name:"Michael Wacker, PhD",title:"Director",sum:"General Partner at BioMedPartners; founder and CSO of GlycoVaxyn (acquired by GSK) and coach to Swiss start-ups for Innosuisse."},
 {g:"Scientific Advisory Board",name:"Pasi A. Jänne, MD, PhD",title:"Dana-Farber Cancer Institute",sum:"Co-discoverer of EGFR mutations in lung cancer and a global leader in the treatment of drug-resistant lung cancer; Professor of Medicine, Harvard Medical School."},
 {g:"Scientific Advisory Board",name:"Kenneth C. Anderson, MD",title:"Dana-Farber Cancer Institute",sum:"Kraft Family Professor of Medicine at Harvard Medical School; four decades of translational research in multiple myeloma."},
 {g:"Scientific Advisory Board",name:"Josep Tabernero, MD, PhD",title:"Vall d’Hebron Institute of Oncology",sum:"Director of VHIO and Head of Medical Oncology at Vall d’Hebron University Hospital; ESMO President 2018–2019."},
 {g:"Scientific Advisory Board",name:"Timothy Yap, MD, PhD",title:"MD Anderson Cancer Center",sum:"Professor in Investigational Cancer Therapeutics; first-in-human and combination development of targeted agents."},
 {g:"Scientific Advisory Board",name:"Sanjay Popat, MD, PhD",title:"Royal Marsden Hospital",sum:"Consultant Thoracic Medical Oncologist and Professor of Thoracic Oncology at the Institute of Cancer Research, London."},
 {g:"Scientific Advisory Board",name:"Alan Sandler, MD",title:"Oncology drug development",sum:"Former Chief Medical Officer of Mirati Therapeutics and Global Head of Product Development, Oncology Solid Tumors, at Genentech."},
 {g:"Scientific Advisory Board",name:"Francesco Hofmann, PhD",title:"Pierre Fabre",sum:"VP, Head R&D Pierre Fabre Medical Care; previously Global Head of Oncology Drug Discovery at Novartis."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","TOLREMO completes its Phase I study of TT125-802 and presents final clinical data at the World Conference on Lung Cancer 2026","TOLREMO",TW+"/press-releases/2026/09/15/tolremo-therapeutics-completes-phase-i-study-of-tt125-802-and-presents-final-clinical-data-at-world-conference-on-lung-cancer-2026"],
 ["October 2025","Multiple myeloma leader Kenneth C. Anderson joins TOLREMO’s Scientific Advisory Board","TOLREMO",TW+"/press-releases/2025/10/30/tolremo-therapeutics-welcomes-multiple-myeloma-leader-kenneth-c-anderson-to-its-scientific-advisory-board"],
 ["October 2025","First-in-human dose escalation of TT125-802 completed; solid tumour monotherapy results presented at ESMO 2025","TOLREMO",TW+"/s/20251016_TOLREMO_ESMO-data-PR_final_V2.pdf"],
 ["August 2025","TT125-802 receives two FDA Fast Track designations in pretreated EGFR- or KRAS-G12C-mutated NSCLC","TOLREMO",TW+"/s/20250828_Tolremo_NSCLC_Fast-Track-PR_final.pdf"],
 ["June 2025","TT125-802 is the first CBP/p300 bromodomain inhibitor to show clinical activity in solid tumours","TOLREMO",TW+"/s/20250604_Tolremo_data-update-PR_final.pdf"],
 ["March 2025","Lung cancer expert Pasi A. Jänne joins TOLREMO’s Scientific Advisory Board","TOLREMO",TW+"/press-releases/2025/03/24-sab-pasi"]];
var SHEETS=[];
