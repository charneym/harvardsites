var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"'];
var WEB="https://www.idealmedtech.com/";
var MAIL="imt@idealmedtech.com";
var NEWSPG=WEB+"NEWS-a/278.htm";
var STUDYPG=WEB+"IMTSTUDIES-a/285.htm";
var CT="https://clinicaltrials.gov/study/NCT07646067";
var RP="https://reporter.nih.gov/search/results?query=R44DK133084";
/* technology: idealmedtech.com home page "Product Features" and "Benefits", How it Works. [name, for, tag, detail, link, label] */
var TECH=[
 ["Closed loop","No input required between checks","Autonomous","After an initial calibration, FUSION works on its own, continually adapting to the patient: it regulates the dosing and dispensing of intravenous insulin and dextrose with no input required from nursing staff.",WEB+"Closed-Loop-System-a/261.htm","Closed loop"],
 ["Easy to use","Three settings at the bedside","Set-up","Enter the patient’s weight, the desired control range and the concentrations of insulin and dextrose. FUSION does not need the rate of intravenous fluids or enteral feeding, and the rest is handled automatically.",WEB+"Easy-to-Use-a/281.htm","Easy to use"],
 ["Analyze results","For the attending ICU physician","Real time","FUSION calculates its glucose metrics in real time, so the care team can see how well the system is performing and decide whether the patient’s glucose control range should change.",WEB+"Analyze-Results-a/280.htm","Analyze results"],
 ["Modular by design","Works with ICU-cleared monitors","CGM agnostic","FUSION runs today with the Dexcom G6 continuous glucose monitor and is designed to work with other CGM systems in the future, once the FDA has approved them for use in the ICU setting.",WEB+"How-it-Works-a/260.htm","How it works"]];
/* studies: idealmedtech.com Ideal Med Tech Studies, ClinicalTrials.gov NCT07646067, NIH RePORTER R44DK133084. [title, setting, status, detail, link, label] */
var STUDY=[
 ["Closed-loop control in a simulated ICU setting","Emory University · NIDDK","Registered June 2026","A 24-hour safety study of the fully autonomous system in people with type 1 and type 2 diabetes, controlled to 100–140 mg/dL through three unannounced meals and a continuous dextrose infusion. NCT07646067.",CT,"ClinicalTrials.gov"],
 ["First-in-human safety study","Emory University · FDA IDE","Completed 2023","Seven people with type 1 and type 2 diabetes, three meals over 24 hours: 87.8% time in range 70–180 mg/dL, 0.2% below 70 mg/dL and a coefficient of variation of 19.4%. Presented at the 2023 American Diabetes Association meeting.",STUDYPG,"IMT studies"],
 ["Large-scale simulation study","100,000 five-day ICU patients","Simulation","More than 107 million glucose values: 97.8% time in range 70–140 mg/dL, 0.09% below 70 mg/dL and a coefficient of variation of 11.1%. The FDA used these results to designate FUSION a Breakthrough Medical Device.",STUDYPG,"IMT studies"],
 ["Comparative simulation study","Against five ICU control systems","Simulation","FUSION’s AI-based software was compared with five control systems already used in the ICU setting on a composite glucose control score, and outperformed the next best system by 75%.",STUDYPG,"IMT studies"],
 ["Animal studies","Sweden and stress-induced hyperglycemia","Preclinical","FUSION outperformed an experienced ICU physician at preventing hypoglycemia in an induced-hypoglycemia model, and an early prototype maintained excellent control in a model of the stress-induced hyperglycemia ICU patients experience.",STUDYPG,"IMT studies"]];
/* people: idealmedtech.com Our Team; ClinicalTrials.gov NCT07646067 for the clinical lead */
var TEAM=[
 ["Leon DeJournett, M.D.","Founder, Chief Executive Officer","More than thirty years in the intensive care unit. Wrote the algorithms that mimic the pancreas and liver, founded the company in 2014 and led FUSION to Breakthrough Device designation and FDA approval of its clinical studies. Trained at Stanford University Medical Center."],
 ["Jeremy DeJournett","Chief Technology Officer","Technical lead on FUSION and the simulation platform that runs 100,000 five-day ICU patient simulations a day. BS in Electrical Engineering, University of Illinois at Urbana-Champaign; earlier led embedded software on a NASA-funded CubeSat."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 12, 2026","New 24-hour closed-loop safety study of FUSION with Emory University registered on ClinicalTrials.gov","ClinicalTrials.gov",CT],
 ["December 23, 2025","FDA approves IMT’s new Investigational Device Exemption, clearing the way for new clinical studies","IMT news",NEWSPG],
 ["February 27, 2025","FDA approves FUSION’s updated glucose control software after extensive simulation testing","IMT news",NEWSPG],
 ["September 16, 2024","IMT selected to present at NC MedTech Venture Day in Raleigh and BioFuture 2024 in New York","IMT news",NEWSPG]];
var SHEETS=[];
