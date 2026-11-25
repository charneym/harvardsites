var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','italic 300 1em "Titillium Web"','italic 400 1em "Titillium Web"'];
var WEB="https://serpinpharma.com/";
var ADDR="9501 Discovery Blvd, Suite 120, Manassas, VA 20109";
var MAP="https://www.google.com/maps/search/?api=1&query=9501+Discovery+Blvd+Suite+120+Manassas+VA+20109";
var MAIL="cgelber@serpinpharma.com";
var TEL="+15713794933";
var PR_IND="https://www.einpresswire.com/article/905745428/serpin-pharma-receives-fda-clearance-of-ind-application-for-sp16-for-chemotherapy-induced-peripheral-neuropathy";
var PR_AKI="https://www.einpresswire.com/article/892791664/serpin-pharma-inc-announces-approval-to-initiate-ease-aki-phase-ii-clinical-trial-in-germany";
/* programmes: from serpinpharma.com/pipeline and the company's 2024–2026 press releases.
   [indication, short name, stage label, detail, link, link label] */
var PROG=[
 ["Acute kidney injury","AKI after cardiac surgery in patients with chronic kidney disease","Phase II · Germany","EASE-AKI, a randomized, double-blind, placebo-controlled trial in 120 patients undergoing heart bypass surgery, led by nephrologists at University Hospital Erlangen. Unconditional approval to enrol came in February 2026.",PR_AKI,"Press release"],
 ["Acute myocardial infarction","Inflammation after a heart attack","Clinical · Phase 2a","In a Phase 2a trial, a single dose of SP16 reduced biomarkers of infarct size and overall inflammation, and improved heart function one year after treatment.","https://www.dcnewsnow.com/business/press-releases/ein-presswire/684074254/serpin-pharma-secures-900000-bird-foundation-grant-for-clinical-trial-in-ami-treatment/","BIRD grant"],
 ["Chemotherapy-induced peripheral neuropathy","Nerve damage and pain from cancer treatment","IND cleared · Phase 1b","The FDA cleared the IND for intravenous SP16 in April 2026. The programme is backed by a $2 million NCI SBIR Phase II grant, and Dogwood Therapeutics holds a global licence for IV SP16 in patients receiving chemotherapy.",PR_IND,"Press release"],
 ["Prurigo nodularis","A chronic skin disease of intensely itchy nodules","Preclinical · topical","In preclinical models SP16 reduced TSLP, a mediator of itch, cut eosinophil infiltration in the skin and sped the healing of damaged skin, with a convenient topical form.",WEB+"pipeline/","Pipeline"]];
/* collaborators named in the company's own releases: type only (BW/CJ) */
var PARTNERS=["University Hospital Erlangen","Dogwood Therapeutics","The Estée Lauder Companies","National Cancer Institute","BIRD Foundation"];
/* people: serpinpharma.com/about-us (no portraits used: masthead list, CL/CI) */
var TEAM=[
 {g:"Management",name:"Cohava Gelber, PhD, MBA",title:"Founder, Executive Chairperson and CEO",sum:"Executive roles at ImmuLogic, Molecular Discoveries, MannKind and ATCC. PhD from the Weizmann Institute, postdoctoral research at Stanford, MBA from Cornell."},
 {g:"Board",name:"Denise Barbut, MD",title:"Board member",sum:"Physician-scientist and Professor of Neurology, formerly at Cornell, who has founded and led several biotech companies."},
 {g:"Board",name:"Alexander Fleming, MD",title:"Board member",sum:"Co-founder of Kinexum and former Chief of the Metabolic Group at the FDA."},
 {g:"Board",name:"Lawrence Steinman, MD",title:"Board member",sum:"Professor of Neurology and Neurological Sciences, Pediatrics and Genetics at Stanford."},
 {g:"Board",name:"William B. Johns, MBA",title:"Board member",sum:"Over 20 years of investment banking in New York and London."},
 {g:"Scientific advisory board",name:"Alexander Fleming, MD",title:"Chair",sum:"Serves on more than a dozen clinical advisory boards for pharma and biotech companies."},
 {g:"Scientific advisory board",name:"Antonio Gotto, MD, PhD",title:"Member",sum:"Former Dean of Weill Medical College of Cornell University and National President of the American Heart Association."},
 {g:"Scientific advisory board",name:"Larry Douglas Altstiel, MD, PhD",title:"Member",sum:"Former senior executive in drug development at Pfizer and Lilly."},
 {g:"Scientific advisory board",name:"Marc Rothenberg, MD, PhD",title:"Member",sum:"Director of Allergy and Immunology at Cincinnati Children’s Hospital Medical Center."},
 {g:"Scientific advisory board",name:"Gordon Smith, MD",title:"Member",sum:"Chair of Neurology at Virginia Commonwealth University, researching peripheral neuropathy."},
 {g:"Scientific advisory board",name:"Jerome Zeldis, MD, PhD",title:"Member",sum:"Former Chief Medical Officer of Celgene."},
 {g:"Scientific advisory board",name:"Jonathan Zenilman, MD",title:"Member",sum:"Chief of Infectious Diseases at Johns Hopkins Bayview Medical Center."},
 {g:"Scientific advisory board",name:"Emanuel Petricoin III, PhD",title:"Member",sum:"Co-Director of the Center for Applied Proteomics and Molecular Medicine at George Mason University."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["April 15, 2026","FDA clears the IND for SP16 in chemotherapy-induced peripheral neuropathy","EIN Presswire",PR_IND],
 ["February 16, 2026","EASE-AKI Phase II trial approved to begin enrolling patients in Germany","EIN Presswire",PR_AKI],
 ["February 26, 2025","The Estée Lauder Companies partners with Serpin Pharma on skin longevity","Estée Lauder Companies","https://www.elcompanies.com/en/news-and-media/newsroom/press-releases/2025/02-26-2025-140034821"],
 ["October 7, 2024","A $2 million NCI SBIR Phase II grant for the neuropathy programme","EIN Presswire","https://www.einpresswire.com/article/749674078/serpin-pharma-secures-2-million-nci-grant-for-innovative-neuropathy-treatment"],
 ["January 24, 2024","A $900,000 BIRD Foundation grant for a Phase 2a trial in heart attack","DC News Now","https://www.dcnewsnow.com/business/press-releases/ein-presswire/684074254/serpin-pharma-secures-900000-bird-foundation-grant-for-clinical-trial-in-ami-treatment/"]];
var SHEETS=[];
