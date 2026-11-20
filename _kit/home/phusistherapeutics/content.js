var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var MAIL="info@phusistherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
var SBIR2=RP+"11256599";
/* pipeline: from phusistherapeutics.com (PDK1 inhibitor PHT-427, RAS inhibitors, platform programmes) and the NIH RePORTER
   abstracts of the company's NCI awards. [programme, indication, stage label, detail, link, link label] */
var PIPE=[
 ["PHT-427 · Topical","Actinic keratosis and cutaneous squamous cell carcinoma","Phase IA · Planned","A lipophilic dual inhibitor of AKT1/2/3 and PDPK1 that blocks membrane binding of their PH domains. The NCI SBIR Phase II award funds a Phase IA trial of its safety and pharmacokinetics in people with actinic keratosis.",SBIR2,"1R44CA306740"],
 ["RAS inhibitors","Cancers driven by mutant KRAS","Discovery","Small molecules against the PH domains of CNKSR1 and PLEKHA7, proteins in the mutant KRAS signalling nanocluster that mutant KRAS cells need and wild-type cells do not.",RP+"8777034","1R43CA186292"],
 ["ALDOA inhibitors","Pancreatic cancer","Lead probe","A novel allosteric inhibitor of aldolase A that binds its reactive Cys289, inhibiting glycolysis, HIF-1 activity and tumor growth in a xenograft model.",RP+"10494262","5R01CA216424"],
 ["ERK5","Colorectal cancer with KRAS or BRAF mutations","Target validation","Studies of ERK5 as a by-pass route that reactivates MAPK signalling and drives resistance to EGFR, RAF and MEK inhibitors.",RP+"10357462","7R21CA244691"]];
/* PHT-427 in actinic keratosis: every line from the NIH RePORTER abstract of 1R44CA306740-01 */
var EVID=[
 ["The need","Field treatments with 5-FU or imiquimod creams have significant toxicity, and lesion clearance is not much greater than placebo"],
 ["The target","Oncogenic PI-3-kinase is mutated in half of actinic keratoses and cutaneous squamous cell carcinomas"],
 ["In mice","Topical PHT-427 significantly decreased the size and number of UV-B induced actinic keratosis lesions"],
 ["In the skin","It readily permeates the stratum corneum to give high skin concentrations, with low transdermal absorption into the blood"]];
/* people: Dr. Kirkpatrick's title and background from her TheOrg profile; Dr. Powis from the company's NCI awards on NIH RePORTER.
   No portraits are published, so the masthead list (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Lynn Kirkpatrick, Ph.D.",title:"President & Chief Executive Officer",sum:"Co-founder. Previously co-founded ProlX Pharmaceuticals and was Professor of Chemistry and Biochemistry at the University of Regina."},
 {g:"Leadership",name:"Garth Powis",title:"Co-founder",sum:"Principal investigator on the 2025 NCI SBIR Phase II award for PHT-427 and on the company's ALDOA and ERK5 programmes."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2025","NCI awards PHusis a $2.09M SBIR Phase II grant for the clinical evaluation of topical PHT-427 in actinic keratosis","NIH RePORTER",SBIR2],
 ["September 2021","NCI research awards targeting ALDOA in pancreatic cancer and ERK5 in colorectal cancer transfer to PHusis","NIH RePORTER",RP+"10357451"],
 ["July 2014","NCI SBIR award to develop PLEKHA7 inhibitors for mutant KRAS cancers","NIH RePORTER",RP+"8777034"],
 ["August 2013","NCI SBIR award to develop CNKSR1 PH-domain inhibitors for mutant KRAS cancers","NIH RePORTER",RP+"8589456"]];
var SHEETS=[];
