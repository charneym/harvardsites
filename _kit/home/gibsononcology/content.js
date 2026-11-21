var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','700 1em "Manrope"'];
var MAIL="info@gibsononcology.com";
var GO="https://gibsononcology.com/";
var PU="https://www.purdue.edu/newsroom/2026/Q1/gibson-oncology-nih-to-begin-phase-2-trials-of-lmp744-for-treatment-of-first-time-recurrent-glioblastoma/";
/* Programmes: every line from gibsononcology.com (Lead Program, Additional Programs, News and Events), the Purdue release of
   25 February 2026, and the NCI CCR and Business Wire items linked from their news page. [drug, indication, setting, status, detail, link, label] */
var PIPE=[
 ["DC-101 · LMP744","Glioblastoma, first-time recurrent","NINDS · NIH","Phase 2","About 40 patients whose glioblastoma has recurred once receive a one-hour infusion of LMP744 once a day for five days, with brain tissue analysed before and after; if the biology is favourable, treatment continues for 12 cycles. The FDA has indicated the trial may qualify as a registration trial. A second LMP744 study, at Mayo Clinic, targets residual tumour after radiation and temozolomide.",PU,"Purdue University"],
 ["DC-103 · LMP400","Grade 3 and grade 4 astrocytoma","Duke · Preston Robert Tisch Brain Tumor Center","Phase 1 complete","An analogue of LMP744 that is less easily pumped out of the cancer cell, with brain levels held for over 24 hours. At Duke it slowed IDH-mutant astrocytoma and was studied in ATRX-deficient GBM models; NIH work showed low-dose LMP400 with niraparib effective in PTEN-deficient brain tumours. FDA orphan drug designation for malignant glioma (2023).",GO+"lmp744/lead-program-glioblastoma/","Gibson Oncology"],
 ["DC-102 · LMP744","Relapsed solid tumours and lymphoma","National Cancer Institute","Phase 1 complete","Two NCI Phase 1 trials in more than 40 heavily pretreated patients: LMP744 was well tolerated, with two partial responses and tumours held stable for up to 18 months in 35% of patients.",PU,"Purdue University"],
 ["DC-104 · LMP400","Relapsed solid tumours and lymphoma","National Cancer Institute","Phase 1 complete","Selective for cancers with homologous recombination deficiency and high SLFN11, and synergistic with PARP inhibitors; Gibson animal studies show activity across PTEN-deficient tumours, with a PTEN endometrial PDX study now done.",GO+"lmp744/additional-clinical-programs/","Gibson Oncology"],
 ["DC-105 · LMP776","Relapsed solid tumours and lymphoma","National Cancer Institute","Phase 1 complete","Indimitecan, the third licensed indenoisoquinoline. In NCI Phase 1 trials the class showed prolonged stabilisation of disease, including in patients who had progressed on irinotecan.",GO+"lmp744/additional-clinical-programs/","Gibson Oncology"],
 ["DC-106 · G-103","Haematologic and solid tumours","Purdue · NCI","Preclinical","A second-generation aza-indenoisoquinoline for oral administration, from a series of 56 rationally designed compounds licensed worldwide from Purdue University and the National Cancer Institute, with U.S. and international patents filed.","https://www.businesswire.com/news/home/20200520005015/en/Gibson-Oncology-Expands-its-Scientific-Advisory-Board-for-Novel-Oncology-cMYC-Program","Business Wire"]];
/* The Phase 1 record behind the Phase 2 trial: Purdue University release, 25 February 2026. */
var EVID=[
 ["Phase 1","Two trials in more than 40 heavily pretreated, advanced-stage cancer patients; LMP744 was well tolerated"],
 ["Responses","Two patients' tumours shrank by at least 30%, and 35% of patients had tumours that did not grow for up to 18 months"],
 ["Phase 2 endpoints","Tumour regression first; then progression-free survival, biological changes in the tumour tissue, quality of life and overall survival"],
 ["Protection","Composition-of-matter patents, and FDA orphan drug designation for LMP744 (glioma, 2024) and LMP400 (glioma, 2023)"]];
/* gibsononcology.com, Leadership Team and Board of Directors. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Mark C. Rogers, MD, MBA",title:"Founder & Executive Chair",sum:"Founder and member of the board."},
 {g:"Leadership",name:"Randall B. Riggs",title:"President & CEO",sum:"President and Chief Executive Officer; member of the board."},
 {g:"Leadership",name:"Theodore C. Solomon",title:"Founder & CFO",sum:"Founder and member of the board."},
 {g:"Leadership",name:"Elizabeth London Rogers, MD",title:"Founder & COO",sum:"Founder and member of the board."},
 {g:"Leadership",name:"Clifford T. Solomon, MD",title:"Founder & CMO",sum:"Clinical Professor of Neurosurgery at the University of Miami."},
 {g:"Leadership",name:"Mark S. Cushman, PhD, PharmD",title:"Founder & CSO",sum:"Distinguished Professor Emeritus at Purdue, whose group designed LMP744 and LMP400; ACS Medicinal Chemistry Hall of Fame."},
 {g:"Board",name:"Mark D. Baganz, MD",title:"Independent Director",sum:"Independent member of the board."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Dr. Sadhana Jackson presents an update on the NINDS Phase 2 trial of LMP744 at the 28th Annual Blood-Brain Barrier Consortium","Gibson Oncology",GO+"news-and-events/"],
 ["February 2026","Gibson Oncology and NIH begin Phase 2 trials of LMP744 in first-time recurrent glioblastoma","Purdue University",PU],
 ["October 2024","FDA grants orphan drug designation to LMP744 for glioma","OncLive","https://www.onclive.com/view/fda-grants-orphan-drug-designation-to-lmp744-for-glioma"],
 ["October 2023","FDA grants orphan drug designation to indotecan (LMP400) for the treatment of glioma","NCI Center for Cancer Research","https://ccr.cancer.gov/news/article/fda-grants-orphan-drug-designation-to-indotecan-for-the-treatment-of-glioma"],
 ["September 2023","Powerful drug combination kills glioblastoma tumours containing a unique genetic makeup","NCI Center for Cancer Research","https://ccr.cancer.gov/neuro-oncology-branch/powerful-drug-combination-kills-glioblastoma-tumors-containing-a-unique-genetic-makeup"],
 ["February 2020","Gibson Oncology obtains exclusive commercial rights to novel anti-cancer drugs that inhibit the cMYC oncogene","Business Wire","https://www.businesswire.com/news/home/20200210005202/en/Gibson-Oncology-Obtains-Exclusive-Commercial-Rights-to-Novel-Anti-Cancer-Drugs-That-Inhibit-the-Undruggable-cMyc-Oncogene-a-Key-Driver-for-the-Majority-of-Cancers"]];
var SHEETS=[];
