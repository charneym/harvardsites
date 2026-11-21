var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"'];
var MAIL="jeff@arcatolabs.com";
var PRN="https://www.prnewswire.com/news-releases/arcato-announces-phase-1-clinical-trial-results-and-closing-of-fully-subscribed-financing-round-302855246.html";
var RP="https://reporter.nih.gov/project-details/";
/* every line from arcato-labs.com (ARC-001, Unmet Needs, Our Team), the PR Newswire release of 19 Aug 2026 and NIH RePORTER (R41/R44DE028208). */
/* programme row: [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["ARC-001 Gel","Pain after third molar (wisdom tooth) extraction","Lead programme","Phase 1 complete","First-in-human Phase 1 study in patients after third molar extraction: primary safety endpoint achieved, supporting further Phase 2/3 development. Preclinical programme complete, manufacturing scaled, IND approved by the FDA.",PRN,"PR Newswire"]];
var PHASES=[["Preclinical",1],["IND",1],["Phase I",1],["Phase II",0],["Phase III",0]];
/* Phase 1 topline results, as stated in the release of 19 Aug 2026 */
var EVID=[
 ["Safety","Primary endpoint achieved, supporting further Phase 2/3 development"],
 ["Pain","Exploratory endpoints suggest pain reduction within the first 24 hours"],
 ["Duration","A single dose may provide pain relief for up to one week"],
 ["Opioids","Patients on placebo self-reported a need for opioids twice as often as those on ARC-001 Gel"]];
/* arcato-labs.com/our-team. Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Jeffrey Miller",title:"Chairman & Chief Executive Officer",sum:"More than 30 years in the biopharma industry at Eli Lilly, Boehringer Ingelheim, Alexion and Alnylam; has worked in over 20 countries. Co-founder of TSP Therapeutics."},
 {g:"Leadership",name:"Michael Jay, PhD",title:"Founder",sum:"40+ years in drug development, formulations and imaging agents. Fred Eshelman Chair and Emeritus Professor of molecular pharmaceuticals at UNC Chapel Hill (retired)."},
 {g:"Leadership",name:"Alan Parr, PharmD, PhD",title:"Chief Technical Officer",sum:"35+ years in the pharmaceutical industry, involved with numerous FDA and EMA regulatory submissions. Principal investigator on Arcato’s SBIR Phase II grant."},
 {g:"Advisor",name:"Kevin Byrd, DDS, PhD",title:"Advisor",sum:"DDS, University of Michigan; PhD in Oral and Craniofacial Biomedicine, UNC. Volpe Research Scholar and Manager of Oral & Craniofacial Research at the ADA Science & Research Institute."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Arcato announces Phase 1 clinical trial results for ARC-001 Gel and the closing of a fully subscribed financing round","PR Newswire",PRN],
 ["2021","NIDCR SBIR Phase II award: non-opiate topical formulations for treating pain associated with molar extractions, $1.54M","NIH RePORTER",RP+"10078383"],
 ["2018","NIDCR STTR Phase I award for non-opiate topical formulations for pain after molar extractions","NIH RePORTER",RP+"9618290"]];
/* what oral surgeons told Arcato (arcato-labs.com home page) */
var QUOTES=[
 ["… could be the best ever. Perhaps it will completely negate discomfort …","Oral surgeon, Southeast"],
 ["… this is certainly something that could be a game changer …","Academic oral surgeon, Northeast"],
 ["… there is nothing on the market or available like this product …","Oral surgeon, Midwest"]];
var SHEETS=[];
