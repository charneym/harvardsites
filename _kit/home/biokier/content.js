var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"','italic 700 1em "Open Sans"'];
var WEB="https://www.biokier.com/";
var MAIL="info@biokier.com";
var CT26="https://clinicaltrials.gov/study/NCT06556745";
var CT20="https://clinicaltrials.gov/study/NCT04279444";
var CT1D="https://clinicaltrials.gov/study/NCT03999853";
var RP24="https://reporter.nih.gov/project-details/11006033";
var RP19="https://reporter.nih.gov/project-details/9847022";
var N25="https://www.biokier.com/news/biokier-awarded-phase-i-small-business-innovation-research-sbir-grant-by-the-national-heart-lung-and-blood-institute/";
var N23="https://www.biokier.com/news/biokier-completed-a-12-week-clinical-study-of-bkr-017-in-type-2-diabetes-patients/";
var N22="https://www.biokier.com/news/results-of-4-week-bkr-017-study-in-type-2-diabetes-subjects-and-ongoing-activity/";
var N19="https://www.biokier.com/news/biokier-awarded-3-0-million-phase-iib-small-business-innovation-research-grant/";
var PUB="http://ffhdj.com/index.php/ffhd/article/view/283/574";
/* programmes: from biokier.com (Our Approach, Formulation, Results to Date, News), ClinicalTrials.gov and NIH RePORTER.
   [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["BKR-017","Hypercholesterolemia, in people on statin therapy","Phase 1 completed 2026 · NHLBI SBIR","Butyrate in a sustained-release tablet core under the Phloral™ colon-targeting coating. A Phase 1 study of safety and pharmacokinetics after a single dose and seven days of twice-daily dosing, run with Dr. Frank Greenway at Pennington Biomedical Research Center, completed in June 2026.",CT26,"ClinicalTrials.gov"],
 ["BKR-017","Insulin resistance in type 2 diabetes","Clinical · NIDDK SBIR Phase IIb","A 4-week open-label study in 14 patients at Pennington Biomedical (2020) was followed by a 12-week study, CL-501, at Duke University and Pennington Biomedical, completed in late 2022.",N23,"BioKier news"],
 ["BKR-017","Type 1 diabetes","Clinical · JDRF, with Mayo Clinic","A $500K JDRF sponsored research grant with Mayo Clinic, Rochester, Minnesota: a study of butyrate as adjuvant therapy for type 1 diabetes led by Dr. Adrian Vella, with Dr. Szewczyk as co-PI. Completed in December 2025.",CT1D,"ClinicalTrials.gov"],
 ["BKR-019","Hypercholesterolemia","Next formulation","An optimized colon-targeted butyrate formulation. BioKier plans a Phase II SBIR application to fund formulation optimization, production scale-up and clinical studies in a hypercholesterolemic population.",N25,"BioKier news"],
 ["BKR-013","Type 2 diabetes","Clinical · 4-week study","A rapid-release capsule of L-glutamine for the colon. Infused into the sigmoid colon of type 2 diabetes patients, 1 g of L-glutamine significantly increased GLP-1 and insulin secretion over placebo in response to an oral glucose challenge.",WEB+"results-to-date/","Results to date"]];
/* people: as named on biokier.com (Our Management, Our Advisors); no portraits are published */
var TEAM=[
 ["Jerzy “George” Szewczyk, PhD","Co-founder, CEO and CSO","CEO and CSO since BioKier’s founding in November 2008, and the inventor of its intellectual property. He spent more than 15 years at Glaxo, GlaxoWellcome and GSK leading cross-disciplinary drug discovery teams in metabolic diseases, after research at Duke University and Research Triangle Institute. Doctorate in medicinal chemistry, Technical University of Gdansk."],
 ["Roger D. Nolan, PhD","Co-founder, President and COO","Leads the development of BioKier’s drug candidates, from capital-raising to preclinical, clinical and regulatory strategy. Previously at Calvert Research, Cato Research and Insmed Pharmaceuticals, and at Eastern Virginia Medical School’s Strelitz Diabetes Research Center. PhD in pharmacology and biochemistry, Melbourne University."],
 ["W. Bennett Love","Vice President and Chief Financial Officer (part-time)","More than twenty years in financial, strategic and general management roles and investing in biotech companies; co-founder and Vice President of Synereca Pharmaceuticals."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","Phase 1 study of the safety and pharmacokinetics of BKR-017 in individuals on statin therapy completed at Pennington Biomedical","ClinicalTrials.gov",CT26],
 ["November 15, 2025","BioKier awarded a $436K Phase I SBIR grant by the National Heart, Lung, and Blood Institute","BioKier news",N25],
 ["January 26, 2023","BioKier completes a 12-week clinical study of BKR-017 in type 2 diabetes patients","BioKier news",N23],
 ["April 30, 2022","4-week BKR-017 study: statistically and clinically significant decreases in total and LDL cholesterol","BioKier news",N22],
 ["October 1, 2019","BioKier awarded a $3.0 million Phase IIb SBIR grant by NIDDK","BioKier news",N19]];
var SHEETS=[];
