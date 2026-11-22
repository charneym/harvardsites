var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','500 1em "Saira Condensed"'];
var MAIL="info@carthronix.com";
var CTG="https://clinicaltrials.gov/study/NCT07308834";
/* the pipeline, from carthronix.com (Pipeline, Home), ClinicalTrials.gov NCT07308834 and NIH RePORTER 1R43AR080485-01A1.
   [programme, area, indication, detail line, progress 0..4, progress incl. in-progress, text, dim] */
var PIPE=[
 ["CX-011","Lead programme","Knee osteoarthritis","Single intra-articular injection",3,3.5,"First-in-class small molecule designed to halt or reverse mild-to-moderate knee OA. FDA cleared the IND in March 2025; the Phase 1/2a dose-escalation trial is recruiting at the University of Southern California.",0],
 ["gp130 modulator","Fibrosis","Joint fibrosis","NIH SBIR, NIAMS",1,1.5,"A lead small-molecule gp130 modulator advanced under the company’s first NIH Small Business Innovation Research grant, with partners at USC.",0],
 ["Platform","Animal health","Canine oncology","Partnered with Boehringer Ingelheim",0,0,"A partnership to pursue small-molecule therapeutics for degenerative and aging-related disease in dogs, beginning with oncology.",1],
 ["Platform","Oncology","Immuno-oncology","Inflammation-modulating technology",0,0,"The same inflammation-modulating technology is being explored across further conditions, including immuno-oncology.",1]];
/* carthronix.com (About us). Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Leadership and board",name:"Hassan Serhan, Ph.D.",title:"CEO, Board Member",sum:"Former Distinguished Fellow at J&J’s DePuy Synthes; co-founder of the International Musculoskeletal Society."},
 {g:"Leadership and board",name:"Ben Van Handel, Ph.D.",title:"Chief Scientific Officer, Co-Founder, Board Member",sum:"Stem cell scientist with over 60 papers; led CarthroniX to FDA clearance of the CX-011 IND."},
 {g:"Leadership and board",name:"Irina Evseenko",title:"Board Member",sum:"Over 20 years in nonprofit and business development; oversees CarthroniX operations."},
 {g:"Leadership and board",name:"Gregory Sieczkiewicz, Ph.D., J.D.",title:"Chief IP Counsel",sum:"Chief IP Counsel at MPM Capital; formerly VP, IP at Flagship Ventures."},
 {g:"Leadership and board",name:"R. Rex Parris",title:"Founding Investor, Attorney",sum:"Founder of Parris Law and Mayor of Lancaster, California."},
 {g:"Advisory board",name:"Denis A. Evseenko, M.D., Ph.D.",title:"Advisor",sum:"Stem cell and musculoskeletal biologist; inventor of therapies for arthritis and cartilage regeneration."},
 {g:"Advisory board",name:"Frank Petrigliano, M.D.",title:"Advisor",sum:"Orthopaedic sports medicine surgeon, UCLA; head team physician for the LA Chargers."},
 {g:"Advisory board",name:"Ali Guermazi, M.D., Ph.D., M.Sc.",title:"Advisor",sum:"Professor of Radiology and Medicine, Boston University; MRI reader for major NIH OA studies."},
 {g:"Advisory board",name:"Mark G. Rubin, M.D.",title:"Advisor",sum:"Beverly Hills board-certified dermatologist; over 20 years in practice."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Phase 1/2a trial of intra-articular CX-011 in knee osteoarthritis begins recruiting","ClinicalTrials.gov",CTG],
 ["March 2025","FDA clears CarthroniX to begin dosing CX-011 in a Phase 1/2a dose-escalating trial","CarthroniX","https://carthronix.com/"],
 ["September 2022","NIH SBIR award to advance a small-molecule gp130 modulator for joint fibrosis","NIH RePORTER","https://reporter.nih.gov/project-details/10482204"]];
var SHEETS=[];
