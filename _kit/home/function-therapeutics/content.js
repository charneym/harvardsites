var FONTS=['300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var WEB="https://www.functiontx.com/";
var MAIL="contact@functiontx.com";
var LI="https://www.linkedin.com/company/function-therapeutics/";
var N_PAIN="https://www.functiontx.com/post/function-therapeutics-receives-sbir-award-to-study-neuropathic-pain";
var N_MASH="https://www.functiontx.com/post/function-therapeutics-receives-sbir-award-to-study-potential-treatment-for-liver-disease-mash";
var N_OBESE="https://www.functiontx.com/post/parmodulin-shows-beneficial-effects-in-obese-mice";
var N_AKI="https://www.functiontx.com/post/function-therapeutics-receives-sbir-award-to-study-acute-kidney-injury-aki";
var N_CTC="https://www.functiontx.com/post/function-therapeutics-receives-business-development-award-from-the-wisconsin-ctc";
var R_PAIN="https://reporter.nih.gov/project-details/11415152";
var R_SCD="https://reporter.nih.gov/project-details/10699379";
var R_MASH="https://reporter.nih.gov/project-details/11163456";
var R_AKI="https://reporter.nih.gov/project-details/11087659";
/* programmes: functiontx.com (Projects: pipeline FTX-1 to FTX-4; News) and NIH RePORTER (Function Therapeutics, Inc., Milwaukee:
   1R43HL169107-01, 1R43DK138702-01A1 / 5R43DK138702-02, 1R43DK141373-01 / 5R43DK141373-02, 1R43NS143450-01 / 5R43NS143450-02).
   [programme, indication, stage / funding, detail, link, link label] */
var PROG=[
 ["FTX-1","Chronic kidney disease","Pipeline · Preclinical","Chronic kidney disease usually involves a gradual, presently irreversible decline in kidney function. In the lab of SAB member Dr. Berend Isermann (Leipzig University), the first-generation parmodulin ML161 substantially improved kidney function in a mouse model of diabetic nephropathy; next-generation parmodulins are slated for advanced preclinical studies.",WEB+"projects","Current site"],
 ["FTX-2","Acute kidney injury","NIDDK SBIR Phase I · 2024","There are no FDA-approved drugs to prevent acute kidney injury, which strikes many patients undergoing cardiac surgery, chemotherapy or transplant, or fighting serious infection. Function is testing parmodulins as inhibitors of thromboinflammation in a rodent model of the injury.",N_AKI,"Read the release"],
 ["FTX-3","Sickle cell disease and vascular injury","NHLBI SBIR Phase I · 2023","An NHLBI award to study allosteric modulation of PAR1 for the treatment of sickle cell disease. Function\u2019s collaborators in sickle cell and vascular disease include Dr. Erica Sparkenbaugh at the University of North Carolina.",R_SCD,"NIH RePORTER"],
 ["FTX-4","Neurodegenerative disease","Pipeline · Discovery","Parmodulins studied with collaborators at Phlogistix and the University of Kansas Medical Center, Rutgers University and Veterans Affairs New Jersey, and the University of Alabama.",WEB+"projects","Current site"],
 ["MASH","Metabolic dysfunction-associated steatohepatitis","NIDDK SBIR Phase I · 2024","Oral small-molecule PAR1 ligands to reduce liver inflammation, tested in a rodent model of obesity in the lab of Dr. James Luyendyk at Michigan State University, where the parmodulin NRD-21 reduced hepatic steatosis and insulin resistance in obese mice.",N_MASH,"Read the release"],
 ["Neuropathic pain","Parmodulins without abuse potential","NINDS SBIR Phase I · 2025–26","Discovery of anti-inflammatory parmodulins and their testing in models of neuropathic pain. A continuation-year award followed in September 2026.",N_PAIN,"Read the release"]];
var PARTNERS=["NINDS · SBIR","NIDDK · SBIR","NHLBI · SBIR","Wisconsin Center for Technology Commercialization","Milwaukee Institute for Drug Discovery, UWM"];
/* people: functiontx.com/team */
var TEAM=[
 ["Chris Dockendorff, Ph.D.","Founder, CEO and CSO","An organic and medicinal chemist with a passion for the design, synthesis and study of novel molecules with the potential to improve human health. Function Therapeutics was established on compounds and assays from his lab, previously at Marquette University."],
 ["Paul Ornstein, Ph.D.","VP of Preclinical Development","Close to 40 years of drug discovery experience as a medicinal chemist at Eli Lilly, followed by faculty positions at Roosevelt University and the Medical College of Wisconsin."],
 ["Peter Suzdak, Ph.D.","Consultant","More than 35 years of experience as a pharmaceutical scientist, executive, and leader of therapeutic startups."]];
var EXEC=["Allie Huber, Controller","Kate Karre, Human Resources","Michael Penley, General Counsel"];
var SAB=["William Greenlee, Ph.D., formerly Merck Research Labs and Schering-Plough","Hartmut Weiler, Ph.D., Versiti Blood Research Institute","Robert Flaumenhaft, M.D., Ph.D., Harvard Medical School and Beth Israel Deaconess","Berend Isermann, M.D., Leipzig University"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 18, 2026","NINDS continues the neuropathic pain award into its second year ($200,070)","NIH RePORTER",R_PAIN],
 ["January 6, 2026","Function Therapeutics receives SBIR award to study neuropathic pain","Function Therapeutics",N_PAIN],
 ["October 19, 2024","Function Therapeutics receives SBIR award to study potential treatment for liver disease (MASH)","Function Therapeutics",N_MASH],
 ["October 19, 2024","Parmodulin shows beneficial effects in obese mice","Function Therapeutics",N_OBESE],
 ["June 4, 2024","Function Therapeutics receives SBIR award to study acute kidney injury (AKI)","Function Therapeutics",N_AKI]];
var SHEETS=[];
