var FONTS=['300 1em "Sora"','400 1em "Sora"','italic 300 1em "Literata"','italic 400 1em "Literata"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var WEB="https://gammabiotherapeutics.com/";
var MAIL="info@gammabiotherapeutics.com";
var CT="https://clinicaltrials.gov/study/NCT06719362";
var RP="https://reporter.nih.gov/project-details/11315901";
var PV1="https://blog.providence.org/cancer/pioneering-immunotherapy-clinical-trial-enrolling-patients-with-advanced-cancers";
var PV2="https://blog.providence.org/men/a-new-cancer-therapy-at-providence-helps-immune-cells-stand-their-ground";
/* programmes: from gammabiotherapeutics.com (Pipeline), ClinicalTrials.gov NCT06719362, NIH RePORTER 1R44CA310416-01 and the
   Providence articles of 2025-09-25 and 2026-11-04. [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["M3T01 · single agent","Advanced solid tumors","Phase 1 · Part 1 · enrolling","First-in-human dose escalation of M3T01 on its own, to establish safety, tolerability and the maximum tolerated dose.",CT,"NCT06719362"],
 ["M3T01 + pembrolizumab","Advanced solid tumors","Phase 1 · Part 1 · enrolling","Dose escalation in combination with the PD-1 checkpoint inhibitor pembrolizumab: activate the T cells, then keep them alive.",CT,"NCT06719362"],
 ["M3T01 + standard therapy","Glioblastoma · gastric or esophageal adenocarcinoma · head and neck squamous cell carcinoma · triple-negative breast cancer","Phase 1 · Part 2","Once the dose is set, M3T01 is combined with standard treatments (chemoradiation, FOLFOX plus pembrolizumab, or pembrolizumab) in cancers that remain difficult to treat.",PV1,"Providence"]];
var PARTNERS=["Providence Cancer Institute, Portland","Earle A. Chiles Research Institute","National Cancer Institute · SBIR Phase II"];
/* people: gammabiotherapeutics.com/team; Grayson Duraine from the NIH RePORTER record of 1R44CA310416-01 */
var TEAM=[
 ["Matthew Taylor, M.D.","Founder, President and CEO","A medical oncologist and translational researcher with more than 15 years of experience leading early-phase cancer immunotherapy trials. His work at Providence Cancer Institute on why the immune system fails to sustain its attack on tumors led to the discovery of M3T01."],
 ["Grayson Duraine","Principal investigator, NCI SBIR Phase II","Contact principal investigator on the National Cancer Institute’s 2026 SBIR Phase II award for the clinical development of M3T01."]];
var ADVISORS=["Bernard A. Fox, Ph.D.","Alan Korman, Ph.D.","Will Redmond, Ph.D."];
var CONSULT=["Chris Sheth, Ph.D., toxicology and pharmacology","Denise Krawitz, Ph.D., drug manufacturing","Tracy M. Janus, regulatory affairs","Doug Hanes, Ph.D., biostatistics"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 4, 2026","Pioneering immunotherapy clinical trial enrolling patients with advanced cancers","Providence",PV1],
 ["August 11, 2026","NCI awards a $979,068 SBIR Phase II grant for the clinical development of M3T01","NIH RePORTER",RP],
 ["September 25, 2025","A new cancer therapy at Providence helps immune cells stand their ground","Providence",PV2],
 ["June 17, 2025","First-in-human Phase 1 trial of M3T01 starts at Providence Cancer Institute","ClinicalTrials.gov",CT]];
var SHEETS=[];
