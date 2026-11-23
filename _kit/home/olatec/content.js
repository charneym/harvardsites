var FONTS=['300 1em "Sora"','400 1em "Sora"','500 1em "Sora"','600 1em "Sora"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:inquiries@olatec.com";
/* Clinical programmes of dapansutrile (OLT1177®), from olatec.com (Trials, Lead Compound) and Olatec's releases
   (PR Newswire 24 March 2026). Stage words only as the company states them.
   [trial, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["PODAGRA II","Rheumatology · gout","Dapansutrile tablets in an acute gout flare","Phase 2/3","A multi-center, randomized, double-blind, placebo-controlled safety and efficacy study. It follows the Phase 2a PODAGRA trial, which met its primary and secondary endpoints, published in The Lancet Rheumatology.",0,"Clinical","",""],
 ["DREAM","Oncology · melanoma","Dapansutrile plus pembrolizumab in PD-1 refractory advanced melanoma","Phase 1/2","An investigator-initiated study of dapansutrile in combination with the checkpoint inhibitor pembrolizumab, in patients with PD-1 refractory advanced melanoma.",0,"Clinical","",""],
 ["Dapan-Dia","Cardiometabolic · type 2 diabetes","Dapansutrile in diabetes and diabetes-related complications","Phase 2","An investigator-initiated study in up to 300 patients with type 2 diabetes mellitus and diabetes-related complications, at centers of excellence in diabetes in Switzerland and the EU.",0,"Clinical","",""],
 ["DAPA-PD","Neurology · Parkinson’s","Dapansutrile for Parkinson’s disease modification","Phase 2","A 12-month, randomized, double-blind, placebo-controlled study in about 36 people with early Parkinson’s disease at the University of Cambridge, funded by Cure Parkinson’s and the Van Andel Institute. The first patients were randomized in March 2026.",0,"Clinical","https://www.prnewswire.com/news-releases/first-parkinsons-patients-treated-in-landmark-phase-2-trial-of-dapansutrile--expanding-a-leading-oral-nlrp3-inhibitor-into-neurological-diseases-302723428.html","PR Newswire"]];
/* Completed clinical trials, olatec.com (Trials, Lead Compound) */
var EVID=[
 ["Gout flare · Phase 2a","PODAGRA met its primary and secondary endpoints: the first known selective NLRP3 inhibitor to show clinical benefit, safety and a reduction in systemic inflammation"],
 ["Heart failure · Phase 1b","Safety and tolerability established in patients with clinically stable systolic heart failure (NYHA II–III)"],
 ["Knee osteoarthritis · Phase 2a and 2b","Two randomized, placebo-controlled studies of OLT1177® Gel, enrolling 79 and 202 subjects"],
 ["Healthy volunteers · Phase 1","Ascending-dose safety and pharmacokinetic studies of OLT1177® Capsules (35 subjects) and Gel (36 subjects)"]];
/* olatec.com (Management). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"Damaris B. Skouras",title:"Founder, Chairman & CEO",sum:"Over 30 years of drug development experience in biotechnology; has led dapansutrile from its initial discovery to the clinic. BA, Stanford University; MBA, Harvard University."},
 {g:"Management",name:"Charles A. Dinarello, MD",title:"Chairman of the SAB, co-CSO",sum:"Elucidated dapansutrile’s mechanism of action as an NLRP3 inhibitor. First identified IL-1α and purified IL-1β; member of the U.S. National Academy of Sciences."},
 {g:"Management",name:"Joseph P. St. Laurent",title:"co-Chief Scientific Officer",sum:"Responsible since 2005 for all aspects of the chemical drug development and analysis of dapansutrile and the OLT Analogues; President and CSO of Chemic Laboratories."},
 {g:"Management",name:"Curtis L. Scribner, MD",title:"Chief Medical Officer",sum:"Part of Olatec’s drug development team since 2006, designing and conducting its human clinical trials; ten years at the FDA’s Center for Biologics."}];
var NEWS=[
 ["15 September 2026","Olatec appoints Parkinson&#8217;s disease investigator Caroline Williams-Gray to its Clinical Advisory Board, and David Haase, MD, to its Board of Directors","PR Newswire","https://www.prnewswire.com/news-releases/olatec-therapeutics-appoints-parkinsons-disease-investigator-caroline-williams-gray-frcp-phd-to-clinical-advisory-board-and-physician-innovator-david-haase-md-fmcp-m-qia-to-board-of-directors-and-clinical-advisory-board-302879101.html"],
 ["24 March 2026","First Parkinson&#8217;s patients treated in a landmark Phase 2 trial of dapansutrile","PR Newswire","https://www.prnewswire.com/news-releases/first-parkinsons-patients-treated-in-landmark-phase-2-trial-of-dapansutrile--expanding-a-leading-oral-nlrp3-inhibitor-into-neurological-diseases-302723428.html"],
 ["20 January 2026","Olatec presents preclinical evidence of disease-modifying activity with dapansutrile in its Parkinson&#8217;s studies","PR Newswire","https://www.prnewswire.com/news-releases/olatec-therapeutics-presented-preclinical-evidence-of-disease-modifying-activity-with-dapansutrile-in-its-parkinsons-studies-302665774.html"],
 ["2 October 2025","Andy Cunningham joins Olatec Therapeutics&#8217; Board of Directors","PR Newswire","https://www.prnewswire.com/news-releases/andy-cunningham-joins-olatec-therapeutics-board-of-directors-302573685.html"],
 ["28 January 2025","Marc Y. Donath, MD, renowned immuno-endocrinologist, appointed to Olatec&#8217;s Clinical Advisory Board","Business Wire","http://www.businesswire.com/news/home/20250128658251/en/Marc-Y.-Donath-MD-Renowned-Immuno-Endocrinologist-Appointed-to-Olatecs-Clinical-Advisory-Board"]];
var SHEETS=[];
