var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','400 1em "Poppins"','500 1em "Poppins"'];
var MAIL="mailto:info@aclipsetherapeutics.com";
var AS="https://aclipsetherapeutics.com/";
var PR_CYP=AS+"aclipse-therapeutics-and-cypress-biopharma/";
var PR_MAYO=AS+"aclipse-therapeutics-to-collaborate-with-mayo-clinic-on-phase-2-clinical-development-of-m107-for-the-treatment-of-gastroparesis/";
var PR_ALS=AS+"aclipse-therapeutics-selected-to-present-m102-als-clinical-development-program-at-prestigious-als-and-motor-neurone-disease-symposia/";
var PR_CKD=AS+"aclipse-therapeutics-expands-drug-development-pipeline/";
/* Programs, from Aclipse's releases (Business Wire 14 Sept 2023, 10 Nov 2024, 19 Nov 2025, 22 Sept 2026).
   Stage words only as the company states them. [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["M107G","Gastroenterology","Gastroparesis","Phase 2 · LOGAST","The Mayo Clinic-sponsored Phase 2 LOGAST trial of M107 (lobeglitazone) in idiopathic gastroparesis, under Principal Investigator Dr. Pankaj Jay Pasricha, at three Mayo Clinic campuses: Rochester, Phoenix and Jacksonville.",0,"Lead",PR_MAYO,"Mayo Clinic"],
 ["M107R","Nephrology","Childhood nephrotic syndrome","Phase 2 · LOKID, planned","M107 in children with nephrotic syndrome, including steroid-dependent and frequently relapsing disease, where it could become the first non-immunosuppressive treatment option. Through an option to acquire Cypress BioPharma.",0,"Renal",PR_CYP,"Cypress BioPharma"],
 ["M102","Neurology","ALS and traumatic brain injury","Entering Phase 1","A once-daily oral NRF2 and HSF1 activator that acts on multiple ALS pathomechanisms, discovered by Professor Dame Pamela Shaw’s lab at the Sheffield Institute for Translational Neuroscience.",1,"Neuro",PR_ALS,"SITraN"],
 ["M228","Nephrology","Cystinuria","Pipeline","A program for cystinuria, a rare kidney disease.",1,"Renal","",""]];
/* Milestones, as the releases state them. */
var EVID=[
 ["Worldwide license","Exclusive license from Chong Kun Dang Pharmaceutical Corporation for lobeglitazone in gastroparesis and additional indications (September 2023)"],
 ["FDA pre-IND meeting","Held with the support of CKD, to align on M107’s existing safety data and Phase 2 and Phase 3 plans in gastroparesis"],
 ["Mayo Clinic collaboration","A clinical collaboration and Know-How Agreement for the Phase 2 development of M107 (November 2025)"],
 ["Renal expansion","An option to acquire Cypress BioPharma, a Nationwide Children’s Hospital spin-out in rare pediatric kidney disease (September 2026)"]];
/* Aclipse's releases. Text-only masthead; summaries state only what the releases state. */
var TEAM=[
 {g:"Leadership",name:"Raymond K. Houck",title:"Chief Executive Officer",sum:"Announced the M107 license from Chong Kun Dang, the Mayo Clinic collaboration and the Cypress BioPharma agreement."},
 {g:"Leadership",name:"Dr. Ira Kalfus",title:"Chief Medical Officer",sum:"Presented the M102 dataset and clinical development plans in ALS at the 7th Annual ALS One Research Symposium."},
 {g:"Leadership",name:"Michael Kranda",title:"Chief Business Officer",sum:"Contact for business and media enquiries on Aclipse’s 2025 and 2026 announcements."},
 {g:"Clinical collaborators",name:"Prof. Dame Pamela Shaw, MD",title:"Founding member, Clinical Advisory Board",sum:"Heads the Sheffield Institute for Translational Neuroscience, where her lab discovered the M102 biology and molecule."},
 {g:"Clinical collaborators",name:"Dr. Pankaj Jay Pasricha",title:"Principal Investigator, LOGAST",sum:"Chair, Department of Internal Medicine, Mayo Clinic Arizona; directs the M107 Phase 2 trial in gastroparesis."}];
var NEWS=[
 ["22 September 2026","Aclipse Therapeutics and Cypress BioPharma announce agreement to launch Phase 2 study in childhood nephrotic syndrome and expand renal development capabilities","Business Wire","https://www.businesswire.com/news/home/20260922706216/en/Aclipse-Therapeutics-and-Cypress-BioPharma-Announce-Agreement-to-Launch-Phase-2-Study-in-Childhood-Nephrotic-Syndrome-and-Expand-Renal-Development-Capabilities"],
 ["19 November 2025","Aclipse Therapeutics to collaborate with Mayo Clinic on Phase 2 clinical development of M107 for the treatment of gastroparesis","aclipsetherapeutics.com",PR_MAYO],
 ["10 November 2024","Aclipse Therapeutics selected to present M102 ALS clinical development program at ALS and motor neurone disease symposia","aclipsetherapeutics.com",PR_ALS],
 ["14 September 2023","Aclipse Therapeutics expands drug development pipeline with exclusive, worldwide license from Chong Kun Dang","aclipsetherapeutics.com",PR_CKD]];
var SHEETS=[];
