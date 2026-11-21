var FONTS=['300 1em "Newsreader"','400 1em "Newsreader"','italic 300 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Jost"','500 1em "Jost"'];
var WEB="https://cerovations.com/";
var MAIL="info@cerovations.com";
var RPT="https://reporter.nih.gov/project-details/10646176";
/* facts: cerovations.com (home, /osmoflo, /team, /contact), NIH RePORTER (U44NS121557, R43NS113655, R41DK126586),
   Medical Alley 2020-09; all fetched 2026-11-21. Nothing here goes beyond those sources. */
var SYS=[["Recognition","FDA Breakthrough Device","The OsmoFlo system has earned a “breakthrough device” designation from the U.S. Food and Drug Administration."],
 ["Funding","$8M from the NIH","An NIH Small Business Innovation Research grant (NIH #NS121557) from the National Institute of Neurological Disorders and Stroke funds the clinical programme."],
 ["Clinical network","TRACK-TBI","Near-term first-in-human clinical trials are planned with TRACK-TBI, the premier U.S. TBI trial network."]];
var MODES=[
 ["Mode 1","Water-vapour removal","Dry air circulates through permeable membrane fibres in the catheter and removes water from the cerebrospinal fluid as vapour, by pervaporation. CSF osmolarity rises, drawing water out of the swollen tissue."],
 ["Mode 2","Standard EVD drainage","The same catheter drains cerebrospinal fluid like a standard external ventricular drain, so clinicians can switch between the two modes."],
 ["Placement","The workflow clinicians know","The catheter is placed like a standard EVD, so the clinical workflow does not change."]];
var PROGRAMS=[
 ["Traumatic brain injury","OsmoFlo™ Bimodal EVD System","External ventricular drainage with cerebrospinal-fluid water-removal osmotherapy for cerebral edema after severe TBI. NIH SBIR Fast Track (U44NS121557); FDA Breakthrough Device designation.","https://reporter.nih.gov/project-details/10646176","NIH"],
 ["Hydrocephalus","Dual-lumen CSF shunt","A cerebral spinal fluid shunt system with dual-lumen distal catheter redundancy, to minimise revision surgery. NIH SBIR Phase I (R43NS113655), 2019.","https://reporter.nih.gov/project-details/9844124","NIH"],
 ["Peritoneal dialysis","Contamination-resistant interconnection","An interconnection designed to reduce peritonitis associated with peritoneal dialysis, licensed from the University of Minnesota. NIH STTR (R41DK126586), 2020.","https://reporter.nih.gov/project-details/10149887","NIH"]];
var TEAM=[
 {g:"Leadership",name:"Jim Stice",title:"President",sum:"Decades launching medical devices and healthcare startups; former leader of FlexMedics Corp. and Twin Star Medical; former chairman of Medical Alley."},
 {g:"Leadership",name:"Rick Odland, MD",title:"Medical and Technical Director",sum:"Inventor of OsmoFlo and of 33 patents; senior staff surgeon, Hennepin County Medical Center; professor, University of Minnesota."},
 {g:"Investigators, NIH U44NS121557",name:"Geoffrey T. Manley, MD, PhD",title:"Multiple principal investigator",sum:"Named with Dr. Odland as a principal investigator on the NIH-funded pilot clinical study."},
 {g:"Investigators, NIH U44NS121557",name:"David O. Okonkwo, MD, PhD",title:"Multiple principal investigator",sum:"Named with Dr. Odland as a principal investigator on the NIH-funded pilot clinical study."}];
var NEWS=[
 ["Sep 2026","NIH continues the SBIR Fast Track pilot clinical study of OsmoFlo osmotherapy for TBI-induced cerebral edema, with $1.5M for 2026","NIH RePORTER",RPT],
 ["Jun 2022","NINDS awards Cerovations an SBIR Fast Track grant for a pilot clinical study of EVD with CSF water-removal osmotherapy","NIH RePORTER","https://reporter.nih.gov/project-details/10358331"],
 ["Sep 2020","Cerovations receives a second NIH grant award, for a peritoneal dialysis innovation","Medical Alley","https://www.medicalalley.org/cerovations-receives-2nd-nih-grant-award-for-peritoneal-dialysis-innovation/"],
 ["Aug 2019","NIH SBIR Phase I award for a dual-lumen CSF shunt to reduce revision surgery in hydrocephalus","NIH RePORTER","https://reporter.nih.gov/project-details/9844124"]];
var SHEETS=[];
