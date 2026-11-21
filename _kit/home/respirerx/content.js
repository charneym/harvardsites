var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','700 1em "Manrope"'];
var MAIL="jmargolis@respirerx.com";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
var WP="https://respirerx.com/wp-content/uploads/";
var L26=WP+"2026/08/RespireRx-Press-Release-Letter-to-Stockholders-and-Other-Interested-Parties-08042026-final-final-3.pdf";
var G25=WP+"2025/11/Press-Release-GABAkines-Grant-and-Amended-License-Agmt-dated-11192025-clean-received-from-printer-at-5pm-11182025-and-approved-for-distribution.pdf";
/* Programmes: every line from respirerx.com (platform pages), the 19 November 2025 release, the 4 August 2026 letter to
   stockholders and NIH RePORTER. [platform · compound, indication, stage, funding/partner, detail, link, link label] */
var PIPE=[
 ["GABAkine · KRM-II-81","Epilepsy, including pharmaco-resistant epilepsy","IND-enabling","NIH/NINDS SBIR Phase II","The lead GABAkine. The award funds the preclinical toxicology and related work toward an IND for a first clinical trial. By August 2026 manufacturing had scaled from milligram to gram quantities with kilogram batches beginning, PK studies were complete in two species and 10-day dose escalation in one.",RP+"11420545","NIH RePORTER"],
 ["GABAkine · KRM-II-81","Chronic pain","Preclinical","NINDS profiling","Analgesic activity in seven preclinical studies, comparable to or greater than commonly used analgesics in intact animal models, without sedation or motor impairment. KRM-II-81 is being profiled by the Division of Translational Research at NINDS.",G25,"Release, Nov 2025"],
 ["AMPAkine · CX717","Attention deficit hyperactivity disorder","Phase 2A complete","NIH SBIR application filed","In a randomised, double-blind, placebo-controlled crossover study in adults with ADHD, CX717 at 800 mg twice a day produced a statistically significant effect on the ADHD Rating Scale, seen from week one. A non-stimulant with the rapid onset of a stimulant is the aim.",PM+"40783159/","Eur J Pharmacol, 2025"],
 ["AMPAkine · CX1739","Spinal cord injury: bladder function","Phase 2 study","Department of Defense award","RespireRx supplies CX1739, its investigator brochure and a right of reference to its IND to Shirley Ryan AbilityLab for a clinical trial of bladder function after spinal cord injury, under an agreement signed on 31 July 2026.",L26,"Letter, Aug 2026"],
 ["AMPAkine · CX1739","Breathing: respiratory depression and central sleep apnea","Phase 2A complete","CDMRP pre-applications","CX717 and CX1739 countered opioid-induced respiratory depression without altering the opioids' analgesia in three Phase 2A trials. Pre-applications were filed in July and August 2026 for trials in opioid-associated central sleep apnea and in cervical spinal cord injury.",L26,"Letter, Aug 2026"],
 ["Cannabinoid · dronabinol","Obstructive sleep apnea","Phase 2B complete","ResolutionRx","Two placebo-controlled trials, a Phase 2A and the multi-centre Phase 2B PACE study (SLEEP, 2018), reduced the apnea-hypopnea index; dronabinol was safe and well tolerated. RespireRx intends to file a 505(b)(2) NDA, with patent applications on dosage strengths and controlled-release formulations.","https://respirerx.com/dronabinol-for-the-treatment-of-obstructive-sleep-apnea/","respirerx.com"]];
/* The clinical and translational record (respirerx.com platform pages; 19 November 2025 release). */
var EVID=[
 ["Seizure models","KRM-II-81 displayed anti-seizure activity in 34 preclinical models, including treatment-resistant and pharmaco-resistant ones, and no tolerance developed to it"],
 ["Human tissue","Applied to brain slices removed from patients with treatment-resistant epilepsy, it dramatically reduced epileptiform electrical activity (3 studies)"],
 ["AMPAkines in people","Three Phase 2A trials with CX717 and CX1739 confirmed target engagement at AMPA receptors in humans"],
 ["Dronabinol in people","A Phase 2A trial in 22 patients and the Phase 2B PACE trial in 56 evaluable patients both reduced the apnea-hypopnea index"]];
/* The current team as named in the 4 August 2026 letter to stockholders; summaries from respirerx.com. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Arnold S. Lippa, PhD",title:"CEO, President, Chief Scientific Officer & Chairman",sum:"Described CL218,872, the first non-benzodiazepine shown to bind selectively to a subtype of GABA-A receptor."},
 {g:"Leadership",name:"Jeff Margolis",title:"SVP, Chief Financial Officer, Secretary & Treasurer",sum:"Member of the Board of Directors and the company's investor contact."},
 {g:"Leadership",name:"Richard Purcell",title:"Senior VP, Research & Development",sum:"Named in the August 2026 letter to stockholders as the company's Senior VP of Research and Development."},
 {g:"Science",name:"Rok Cerne, MD, PhD",title:"Senior Research Fellow",sum:"Contact principal investigator on the NIH/NINDS SBIR award for KRM-II-81 in epilepsy."},
 {g:"Science",name:"Jeffrey M. Witkin, PhD",title:"Senior Research Fellow",sum:"Indiana University School of Medicine; with Dr. James Cook, led the work that produced the selective GABAkine series."},
 {g:"Science",name:"Daniel P. Radin, MD, PhD",title:"AMPAkines Team Leader",sum:"First author of the 2025 report of the CX717 Phase 2A trial in adults with ADHD."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NIH/NINDS continues the SBIR Phase II award for KRM-II-81 in epilepsy into its second year ($1,499,869)","NIH RePORTER",RP+"11420545"],
 ["August 2026","Letter to stockholders: a CX1739 supply agreement and two CDMRP pre-applications","RespireRx",L26],
 ["November 2025","RespireRx announces the NIH/NINDS grant award and an amended and restated patent licence with the UWM Research Foundation","RespireRx",G25],
 ["October 2025","Low-impact ampakine CX717 exhibits promising therapeutic profile in adults with ADHD: a Phase 2A clinical trial","European Journal of Pharmacology",PM+"40783159/"],
 ["September 2025","NINDS awards RespireRx an SBIR Phase II grant to develop a novel GABA-A receptor potentiator for epilepsy","NIH RePORTER",RP+"11184954"],
 ["June 2025","Antipsychotic-like pharmacological profile of the low-impact ampakine CX691 (farampator)","Journal of Psychiatric Research",PM+"40245529/"]];
var SHEETS=[];
