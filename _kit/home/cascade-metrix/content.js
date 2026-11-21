var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"'];
var WEB="https://cascademetrix.com/";
var MAIL="info@cascademetrix.com";
var MAP="https://www.google.com/maps/search/?api=1&query=11650+Olio+Road+Fishers+IN+46037";
/* the clinical need and the solution, from cascademetrix.com/solution and the NIH RePORTER abstract (2R44GM146498) */
var NEED=[
 ["Inpatient glycemic control","Hyperglycemia · ICU","More than 40% of ICU patients are hyperglycemic, and hypoglycemia and glycemic variability are recognised risk factors. Tight glycemic control cut mortality, morbidity and length of stay, but compliance stays poor because fingerstick meters and strips are labour-intensive and short of the accuracy critical care needs."],
 ["Sepsis management","Lactate · glucose · hemoglobin · ScvO₂","At the first suspicion of sepsis, blood lactate should be measured. Knowing the “big four” (glucose, hemoglobin, central venous oxygen saturation and lactate) tells the team whether a raised lactate points to glucose, bleeding, fluids or infection, and speeds the race to antibiotics."],
 ["What exists today","Meters · cartridges · blood gas","Fingerstick meters, interstitial CGMs with limited accuracy in critical care, single-use point-of-care cartridges and blood gas analyzers: labour-intensive, slow to turn around, costly, and they expose caregivers to blood and take blood from the patient."],
 ["The AutoPlexer","Automated · multiplex · closed loop","A patient-attached, ex-vivo blood sampling and multiplex analysis platform. Pre-programmed or on demand, it measures lactate, glucose and hematocrit in whole blood from a central venous catheter, with no caregiver sample handling, no anticoagulant infusion and no blood consumed."],
 ["Beyond the first four","Next analytes","Phase II expands the platform to venous oxygen saturation, creatinine, plasma volume status, pH, pyruvate and glutamine, with whole-blood sensors for blood gases and electrolytes to follow, streaming into AI/ML and workflow tools."]];
/* milestones: the company's own site and NIH RePORTER */
var MILES=[["2022","NIH NIGMS SBIR Phase I: a multiplex analyzer for sepsis management"],
 ["Phase I","AutoPlexer automated sampling and measurement validated in preclinical studies in porcine models"],
 ["Match","Additional non-dilutive matching funds from Elevate Ventures"],
 ["2025","SBIR Phase II awarded: an automated multiplex analyzer for sepsis and beyond, 2025–28"],
 ["2026","Phase II continues: the platform refined for first-in-human studies"],
 ["Next","Inpatient trials ahead of regulatory filings, toward FDA 510(k) for the three-analyte AutoPlexer"]];
var TEAM=[
 {g:"Founders",name:"Kislaya Kunjan, PhD, MBA",title:"Co-Founder and CEO",sum:"Lead inventor of the product technology. Formerly at Johnson & Johnson/LifeScan and Vista Biosciences; MS Purdue, MBA Cornell, PhD Indiana University."},
 {g:"Founders",name:"Frank Lloyd, Jr., MD, MBA",title:"Co-Founder and Chief Engagement Officer",sum:"More than 20 years in clinical research. Former Clinical Associate Professor of Surgery at IU School of Medicine and Medical Director of Methodist Research Institute."},
 {g:"Founders",name:"David T. Giddings",title:"Co-Founder and Chief Development Officer",sum:"Former President and COO of Boehringer Mannheim Corporation, Chairman and CEO of Diametrics Medical, and CEO of Digilab."},
 {g:"Advisory board",name:"Peter Rule",title:"Strategic Advisor",sum:"Led MiniMed as President and COO, co-founded Therasense, and led the first ICU CGM at OptiScan Biomedical to FDA approval. Named inventor on over 50 US patents."},
 {g:"Advisory board",name:"Raj Kapoor, MD, MBA, FCCP",title:"Medical Advisor",sum:"Cardiovascular Critical Care Medical Director at IU Health and Clinical Professor of Medicine, Pulmonary and Critical Care, IU School of Medicine."}];
/* news: only items with a working link */
var NEWS=[
 ["28 Aug 2026","NIH NIGMS continues the SBIR Phase II award: Automated Multiplex Analyzer for Sepsis and Beyond (5R44GM146498-03)","NIH RePORTER","https://reporter.nih.gov/project-details/11406343"],
 ["28 Aug 2025","SBIR Phase II awarded after Phase I deliverables were completed (2R44GM146498-02)","NIH RePORTER","https://reporter.nih.gov/project-details/11256350"],
 ["2 Aug 2022","NIH NIGMS SBIR Phase I: A Multiplex Analyzer for Sepsis Management (1R43GM146498-01)","NIH RePORTER","https://reporter.nih.gov/project-details/10483277"]];
var SHEETS=[];
