/*<R:site>*/var SITE="Clear Guide Medical";
var PK="cgm";
var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','italic 300 1em "Archivo"','italic 400 1em "Archivo"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="mailto:sales@clearguidemedical.com";
var CTG="https://clinicaltrials.gov/study/NCT07120906";/*</R:site>*/

/* ================= CONTENT (from the dossier; nothing invented) ================= */
/*<R:content>*//* Clear Guide Medical: facts from clearguidemedical.com (home, About, Team Profiles, Procedures, Publications, FDA
   Cleared, LUMENA and VisiMARKERs/TipTAGs pages, Contact), ClinicalTrials.gov (NCT07120906, Mayo Clinic, LUMENA in
   MRI-guided liver procedures, start 2025-07-25; NCT05573048, Mayo Clinic, optical fusion trans-perineal grid, collaborator
   Clear Guide Medical; NCT04031495, pediatric vessel cannulation, record updated 2026-07-30; NCT02614222, CAIG nerve blocks)
   and the FDA 510(k) list on their site. Real characters only, never HTML entities (DU).
   Procedure rows: [area, status, title, sub, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Biopsy + ablation","MRI · CT","Prostate, transperineal","SCENERGY TP · Mayo Clinic","Rapid, accurate MR- or CT-guided needle placement through the perineum, which substantially reduces the sepsis risk of transrectal biopsy and improves access to the anterior prostate. Targeted biopsy and cryoablation can be combined in one session in the MRI suite.",0,"","https://clinicaltrials.gov/study/NCT05573048","ClinicalTrials.gov"],
 ["Liver","MRI · investigational","MRI-guided liver procedures","LUMENA · Mayo Clinic","A clinical study of the LUMENA MRI needle-guidance system during MRI-guided needle placement in patients undergoing liver biopsy or other liver procedures. LUMENA is an investigational device and has not been cleared or approved by the FDA.",0,"",CTG,"ClinicalTrials.gov"],
 ["Pain management","Ultrasound","Orthopedic peripheral nerve blocks","Computer Assisted Instrument Guidance (CAIG)","A completed clinical study of camera-based instrument guidance for ultrasound-guided peripheral nerve blocks.",0,"","https://clinicaltrials.gov/study/NCT02614222","ClinicalTrials.gov"],
 ["Cannulation","Ultrasound · pediatric","Vessel cannulation in children","Image guidance for improved vessel cannulation","A completed clinical study of image guidance for vessel cannulation in pediatric patients.",0,"","https://clinicaltrials.gov/study/NCT04031495","ClinicalTrials.gov"]];
var SITES=["Mayo Clinic","Children’s National Hospital, Washington, D.C."];
var TEAM=[
 {g:"Leadership",name:"Paul C. Clark, DSc",title:"CEO & Chairman",sum:"Steering the company through its expanded launch and adoption; a named inventor on several patents and an invited expert before Congress."},
 {g:"Leadership",name:"James J. Condon, MBA",title:"President & Board Member",sum:"More than 30 years running companies and scaling start-ups; chairs the Johns Hopkins Computer Science advisory board."},
 {g:"Leadership",name:"Nick Karahalios, MD",title:"Chief Medical Officer",sum:"Board-certified internist with 25 years of inpatient and outpatient care, guiding the clinical integration of the systems."},
 {g:"Leadership",name:"Pezhman Foroughi, PhD",title:"Chief Technology Officer",sum:"Leads development; needle tracking, ultrasound and stereo calibration and 3D reconstruction, with 40+ publications and patents."},
 {g:"Leadership",name:"Kenny Harlan",title:"Director of Sales",sum:"Over 25 years in capital medical sales, focused on diagnostic and surgical ultrasound, working side by side with physicians."}];
var NEWS=[
 ["October 2026","At iMRI 2026 in Boston: MRI‑guided hepatic interventions with augmented reality optical navigation, initial clinical experience with LUMENA","Clear Guide Medical","https://clearguidemedical.com/"],
 ["July 2025","Mayo Clinic study of the LUMENA guidance system in MRI‑guided liver procedures begins","ClinicalTrials.gov",CTG],
 ["April 2025","Augmented reality system for MRI‑guided interventions: a cadaver study","Publication","https://clearguidemedical.com/augmented-reality-system-for-mri-guided-interventions-a-cadaver-study/"],
 ["March 2025","SCENERGY TP and LUMENA on display at the SIR Annual Scientific Meeting","SIR","https://www.sirmeeting.org/"],
 ["October 2024","Clinical evaluation of a transperineal access tool for MRI‑guided procedures: a 30-patient study at Mayo Clinic","Publication","https://clearguidemedical.com/clinical-evaluation-of-a-transperineal-access-tool-for-mri-guided-procedures/"]];
var SHEETS=[];/*</R:content>*/
