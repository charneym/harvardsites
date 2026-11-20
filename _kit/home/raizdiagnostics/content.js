var FONTS=['400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"'];
var WEB="https://www.raizdiagnostics.com/";
var MAIL="compliance@raizdx.com";
var MAP="https://www.google.com/maps/search/?api=1&query=Boston+MA+02111";
var RP1="https://reporter.nih.gov/project-details/11314071";
var RP2="https://reporter.nih.gov/project-details/11417251";
var PAPER="https://doi.org/10.1182/bloodadvances.2021004347";
var BETA="https://rootdx.org/app";
/* pipeline: the aims of the NCI SBIR Phase II award 5R44CA310364 (NIH RePORTER abstract). [stage, title, scope, detail, link, link label] */
var PROG=[
 ["Aim 1 · Training and validation","LymphomaDx V2 classifier","Lymphoma detection and subtyping, e.g. DLBCL, FL, HL and CLL/SLL","CLPA expression data from 2,500 clinically suspected lymphoma cases train and validate the diagnostic classifier, against benchmarks of at least 95% sensitivity and specificity for detection and at least 90% top-1 accuracy in key subtypes.",RP1,"NIH RePORTER"],
 ["Aim 2 · CLIA validation","A laboratory-developed test","For launch in CLIA-certified laboratories","Validation of LymphomaDx V2 as a CLIA-compliant LDT: reproducibility, analytic sensitivity, diagnostic concordance, biopsy equivalency and QC metrics.",RP1,"NIH RePORTER"],
 ["Aim 3 · Regulatory","Toward an IVD kit","On infrastructure already present in most clinical labs","QSR-compliant product development and an FDA pre-submission (Q-sub) to set the regulatory pathway for kit development and future clearance.",RP1,"NIH RePORTER"]];
/* people: from the company's FCOI policy (Timothy Guyon, CEO & Co-Founder) and the NIH award record (Edward Briercheck, contact PI).
   No portraits are published, so the masthead list (CL), not clickable (no sheet would add anything: BV). */
var TEAM=[
 {name:"Timothy Guyon",title:"CEO & Co-Founder",sum:"Principal investigator on the NCI SBIR Phase II award, and a co-author of the 2021 Blood Advances study."},
 {name:"Edward Briercheck",title:"Principal investigator",sum:"Contact principal investigator on the NCI award to scale LymphomaDx, and a co-author of the 2021 study."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 26, 2026","NCI continues the SBIR Phase II award with $520,000 for the second year of scaling LymphomaDx","NIH RePORTER",RP2],
 ["September 16, 2025","NCI awards $1,770,000 SBIR Phase II grant: “Scaling Lymphoma Diagnosis: A Cost-Effective Gene Expression Assay for Broad Implementation”","NIH RePORTER",RP1],
 ["May 2021","Blood Advances publishes a low-cost transcriptional diagnostic that accurately categorizes lymphomas in low- and middle-income countries","Blood Advances",PAPER]];
var SHEETS=[];
