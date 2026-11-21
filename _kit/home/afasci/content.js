var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','600 1em "Instrument Sans"'];
var WEB="https://www.afasci.com/";
var MAIL="inquiries@afasci.com";
var TEL="(415) 480-4138";
var CT="https://clinicaltrials.gov/study/NCT05547503";
var RP_TABA="https://reporter.nih.gov/project-details/11302897";
var RP_P1="https://reporter.nih.gov/project-details/10923984";
var RP_AUD="https://reporter.nih.gov/project-details/10933482";
var RP_CUD="https://reporter.nih.gov/project-details/10786151";
var SC="https://www.afasci.com/index.php/instruments/smartcage";
/* programmes: from afasci.com (Therapeutics; Drug Pipeline Development and Clinical charts), NIH RePORTER abstracts and ClinicalTrials.gov NCT05547503.
   [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["AFA-281","Chronic neuropathic pain","Phase I complete · Phase II ready","An oral small molecule that inhibits both T-type Cav3 calcium channels and soluble epoxide hydrolase. Single and multiple ascending dose studies in healthy volunteers showed no serious adverse events, high tolerability and dose-proportional pharmacokinetics. Phase II is planned in painful lumbosacral radiculopathy.",CT,"ClinicalTrials.gov"],
 ["AFA-281","Epilepsy","Phase I complete","The same new chemical entity is effective against seizures in rodent models of epilepsy, and AfaSci is advancing it toward Phase II proof-of-concept studies in epilepsy alongside chronic pain.",WEB+"index.php/drug-discovery/cns-anal-molecules","AfaSci"],
 ["AFA-281","Alcohol and cocaine use disorders","Preclinical · NIH-funded","NIAAA and NIDA SBIR awards fund proof-of-concept studies of AFA-281, the active IND 157314, in rodent models of alcohol use disorder and cocaine use disorder.",RP_AUD,"NIH RePORTER"],
 ["AFA-279 · AFA-280","Epilepsy · inflammatory pain","IND-enabling studies","Two follow-on molecules: AFA-279 acts on the channel, for epilepsy; AFA-280 acts on the enzyme, for inflammatory pain.",WEB+"index.php/drug-discovery","Pipeline"],
 ["AFA-P30","Localized pain","Candidate","Small peptides that selectively block a validated GPCR target (CGRP), applied locally. Efficacy in postoperative, inflammatory, burn, dental and neuropathic pain models in rodents.",WEB+"index.php/drug-discovery/peripheral-anal-molecules","AfaSci"],
 ["CP2 · TP70","Alzheimer’s disease","IND candidates","Orally available tricyclic pyrones, developed with Kansas State University and UC Davis, that reduced soluble and insoluble Aβ in transgenic models and preserved memory and motor function.",WEB+"index.php/drug-discovery/alzheimer-s-disease-modifiers","AfaSci"]];
/* people: as named on afasci.com (Team and Scientific Advisors); no portraits are published */
var TEAM=[
 ["Xinmin Simon Xie, MD, PhD","Founder and Chief Executive Officer","Formerly a group leader at GlaxoWellcome in the UK and head of the high-throughput screening lab at SRI International. Study chair of the AFA-281 Phase I trials."],
 ["James Xie, MD","Co-founder","Clinical Associate Professor in the Department of Anesthesiology, Perioperative and Pain Medicine at Stanford University School of Medicine."],
 ["Dean Carson, PhD","Business Development","Consulting Chief Development Officer."],
 ["Frank Kayser, PhD","Medicinal Chemistry","Formerly Director of Chemistry at Amgen and a research fellow at Merck."],
 ["Mark Versavel, MD, PhD, MBA","Medical Monitor","Listed with AfaSci’s medical advisors, alongside professors of anesthesiology and pain medicine."]];
var ADV=[["Jianguo Cheng","Cleveland Clinic"],["Steven Cohen","Northwestern"],["Martin Angst","Stanford"],["Steve Shafer","Stanford"],["Daniel Sessler","UTHealth Houston"],["David Yeomans","Stanford"],["Mike Gresser","formerly Merck, Amgen"],["Duy H. Hua","Kansas State"],["Chas Bountra","Oxford"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 31, 2025","NINDS awards AfaSci a supplement to accelerate the clinical development of the non-opioid analgesic AFA-281","NIH RePORTER",RP_TABA],
 ["May 14, 2025","AFA-281 Phase I single and multiple ascending dose study in healthy volunteers completed","ClinicalTrials.gov",CT],
 ["August 27, 2024","NINDS awards $1.5 million for the second year of the AFA-281 clinical Phase I trials in neuropathic pain","NIH RePORTER",RP_P1],
 ["August 5, 2024","NIAAA continues funding for AFA-281 as a medication for alcohol use disorder","NIH RePORTER",RP_AUD],
 ["September 7, 2023","NIDA SBIR award to study AFA-281 as a treatment for cocaine use disorder","NIH RePORTER",RP_CUD]];
var SHEETS=[];
/* instruments and services: from afasci.com (Instruments, SmartCage, Services) */
var INS=[
 ["SmartCage™","Mice and rats, in the home cage","Ten assays in one platform","Automated, non-invasive monitoring of home-cage activity, with modular add-ons for sleep and wake, light/dark preference, social interaction, rotarod, feeding, avoidance and conditioned fear tests.",SC,"SmartCage"],
 ["AeroDeliver™","Aerosolized drug delivery","Timer or self-administration","Lung alveolar region-targeted aerosol delivery on a user schedule, including animal self-administration, developed with UCLA for nicotine studies.",WEB+"index.php/instruments/aerodeliver-nicotine-exposure-system","AeroDeliver"],
 ["AutoSom™","Automated sleep deprivation","Time- or state-dependent","Non-invasive sleep restriction for rodents on a user schedule, or triggered by the animal’s active and inactive states.",WEB+"index.php/instruments/autosom","AutoSom"],
 ["Contract research","Electrophysiology, behaviour, PK/PD","Services","Patch clamp and MEA-64 recordings of trigeminal ganglion and DRG neurons and brain slices, EEG/EMG in vivo, in vivo PK/PD and neurobehavioral toxicity, histopathology and immunohistochemistry.",WEB+"index.php/services","Services"]];
