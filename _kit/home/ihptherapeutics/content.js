var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Work Sans"','500 1em "Work Sans"','600 1em "Work Sans"'];
var MAIL="info@ihptherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
/* the pipeline, from IHP's own pipeline chart (ihptherapeutics.com, "Pipeline overview"):
   [programme, sub, indication, stage label, progress 0..4 (done), progress incl. in-progress, detail, dim] */
var PIPE=[
 ["IHP-102","Lead molecule","Treatment of acute vaso\u2011occlusive episodes in people with sickle cell disease","IND-enabling studies",3,3.7,"Dual inhibitor of P-selectin and complement. 100% of IHP’s resources are currently allocated to sickle cell disease, the lead indication; additional thrombo-inflammatory indications are under investigation.",0],
 ["IHP-101","Paused","Solid tumours with sialyl Lewis overexpression","In vitro validation",1.6,1.6,"Dual inhibitor of complement and P-selectin. Sialyl Lewis is a P-selectin-specific biomarker associated with poor outcomes in multiple cancers. Paused due to resource constraints, to be developed through partnership and grants.",1]];
/* preclinical evidence and funding: NIH RePORTER abstracts (UH3NS134781) and Haematologica 2023 (haematol.2023.283716) */
var EVID=[
 ["P-selectin","IHP-102 inhibits P-selectin-mediated cell binding"],
 ["Complement","IHP-102 inhibits complement-mediated cell lysis"],
 ["Vaso-occlusion","IHP-102 reduced vaso-occlusions by 75% in the Townes mouse model of sickle cell disease"],
 ["Under the skin","Subcutaneous IHP-102 reduced oxy-haemoglobin-triggered lung vaso-occlusion in sickle cell mice by 80%"]];
/* ihptherapeutics.com (Team). Text-only masthead (CI/CL). Summaries are only what the site and NIH records state. */
var TEAM=[
 {g:"Leadership",name:"Rinko Ghosh, MS, MBA",title:"President and CEO",sum:"Leads IHP Therapeutics and sits on its board of directors."},
 {g:"Leadership",name:"John Paderi, PhD",title:"Chief Scientific Advisor",sum:"Principal investigator on IHP’s NIH awards for IHP-102; member of the board."},
 {g:"Leadership",name:"Gabriel Njikang, PhD",title:"Chemistry, Manufacturing and Controls",sum:""},
 {g:"Leadership",name:"Kate Stuart, PhD",title:"VP of Program Management",sum:""},
 {g:"Leadership",name:"Peggy McLaughlin",title:"Clinical Operations Advisor",sum:""},
 {g:"Leadership",name:"Nathan Bachtell, MD",title:"Clinical Advisor",sum:""},
 {g:"Leadership",name:"Robert Van Gorp",title:"Strategic Sourcing",sum:""},
 {g:"Board of directors",name:"Vlad Hogenhuis, MD, MBA",title:"Director",sum:"Board of directors, with Rinko Ghosh and John Paderi."},
 {g:"Clinical and scientific advisors",name:"Vivien Sheehan, MD, PhD",title:"Emory University School of Medicine",sum:""},
 {g:"Clinical and scientific advisors",name:"Eric Collisson, MD",title:"University of California San Francisco",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NINDS continues IHP’s UH3 award for at-home, disease-modifying rescue of pain crisis in sickle cell disease","NIH RePORTER",RP+"11402594"],
 ["August 2025","NINDS moves IHP’s cooperative agreement for IHP-102 into its UH3 phase","NIH RePORTER",RP+"11134763"],
 ["October 2024","IHP creating an “EpiPen” for sickle cell disease","BioCentury","https://www.biocentury.com/article/653883/ihp-creating-an-epipen-for-sickle-cell-disease"],
 ["2023","Subcutaneous injection of IHP-102 prevents lung vaso-occlusion in sickle cell disease mice","Haematologica","https://haematologica.org/article/view/haematol.2023.283716"],
 ["September 2023","NINDS awards IHP a UG3 cooperative agreement for a novel glycan-based selectin and complement inhibitor","NIH RePORTER",RP+"10785873"],
 ["March 2023","NHLBI awards IHP an SBIR to develop IHP-102 for early at-home intervention in vaso-occlusive crisis","NIH RePORTER",RP+"10603870"]];
var SHEETS=[];
