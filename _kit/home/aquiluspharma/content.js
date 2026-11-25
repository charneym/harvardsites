var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Tinos"'];
/* published business contact: the company’s executive summary hosted by NINDS (Nov. 2024) lists this address for the CEO */
var MAIL="sucholeiki@aquiluspharma.com";
var TW="https://www.aquiluspharma.com";
/* the programme and its evidence: every line from aquiluspharma.com (Research, Treatment, News) and NIH RePORTER.
   [area, name, detail line, stage, text, link or "", link label] */
var PIPE=[
 ["Amyotrophic lateral sclerosis","AQU-118","MMP-9 / MMP-2 · oral small molecule","Phase 1 · IND cleared 2025","All IND-enabling studies are complete and the FDA cleared the IND for a Phase 1 trial in 2025. A Human Research Ethics Committee approved single and multiple ascending dose studies in 2024.","",""],
 ["Biomarkers in ALS patients","AQU-118 programme","Published 2025","Translational","Biomarker data in ALS patients, published in the International Journal of Molecular Sciences in 2025.","https://www.mdpi.com/1422-0067/26/18/8900","Read the paper"],
 ["Nerve injury and neuropathic pain","AQU-118","Rodent models","Preclinical, published","Significantly reduced nerve damage in several rodent models of neuropathic pain and nerve injury (Henry et al., 2015; Kwan et al., Int. J. Mol. Sci., 2019).","",""]];
/* the clinical path, from aquiluspharma.com (Treatment and News) */
var EVID=[
 ["IND-enabling","All necessary IND-enabling studies for AQU-118 completed"],
 ["Ethics approval","Human Research Ethics Committee approval to begin a Phase 1 single and multiple ascending dose trial, 2024"],
 ["FDA","IND filed in 2024 and cleared for a Phase 1 clinical trial in 2025"],
 ["Next","Recruitment for a Phase 2 trial planned to begin in the fourth quarter of 2026"]];
/* senior leadership and collaborators, from aquiluspharma.com (The Team). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Senior leadership",name:"Irving Sucholeiki, PhD",title:"President & Chief Executive Officer",sum:"Leads Aquilus’ research initiatives, with more than 25 years of experience in drug discovery and development."},
 {g:"Senior leadership",name:"Darrell J. Nix, PhD",title:"Vice President, R&D",sum:"A pharmacologist with more than 20 years of industry experience; guides the regulatory requirements for Aquilus’ goal of FDA approval."},
 {g:"Senior leadership",name:"Roy Sucholeiki, MD",title:"CMO & Vice President, Clinical Development",sum:"More than 25 years of clinical experience and academic research; spearheads Aquilus’ clinical trial path."},
 {g:"Collaborators and advisors",name:"Merit Cudkowicz, MD, MSc",title:"Harvard Medical School",sum:"Professor, Harvard Medical School, and Director of the Sean M. Healey & AMG Center for ALS."},
 {g:"Collaborators and advisors",name:"Sabrina Paganoni, MD",title:"Harvard Medical School",sum:"Associate Professor, Harvard Medical School, and Co-Director of the MGH Neurological Clinical Research Institute."},
 {g:"Collaborators and advisors",name:"Robert Bowser, PhD",title:"Barrow Neurological Institute",sum:"Chairman, Department of Neurobiology, Barrow Neurological Institute."},
 {g:"Collaborators and advisors",name:"Rita Sattler, MSc, PhD",title:"Barrow Neurological Institute",sum:"Associate Professor, Barrow Neurological Institute."},
 {g:"Collaborators and advisors",name:"Daniela Zarnescu, PhD",title:"University of Arizona",sum:"Professor of Molecular & Cellular Biology, University of Arizona."}];
/* milestones, from aquiluspharma.com News; links only where a public page exists. [year, headline, link or ""] */
var NEWS=[
 ["2025","IND cleared by the FDA for a Phase 1 clinical trial",""],
 ["2025","Selected by MassBio and SCbio as one of ten innovative companies for the Fall Drive programme","https://www.massbio.org/mb-drive-participant/aquilus-pharma/"],
 ["2025","Biomarker data in ALS patients published","https://www.mdpi.com/1422-0067/26/18/8900"],
 ["2024","IND filed with the FDA for a Phase 1 clinical trial",""],
 ["2024","Ethics committee approval to begin Phase 1 single and multiple ascending dose studies",""],
 ["2023","Hoffman ALS Clinical Trial Grant Award, $1,000,000",""],
 ["2021","Department of Defense ALS Research Program Therapeutic Development Award, $1,000,000",""],
 ["2021","Lawrence and Isabel Barnett Drug Development Award, ALS Association, $500,000",""],
 ["2019","NIH Small Business Innovation Research grant, $457,639","https://reporter.nih.gov/project-details/1R43NS110077-01A1"]];
var SHEETS=[];
