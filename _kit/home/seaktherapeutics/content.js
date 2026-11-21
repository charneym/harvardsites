var FONTS=['300 1em "Literata"','italic 300 1em "Literata"','400 1em "Literata"','italic 400 1em "Literata"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"','700 1em "IBM Plex Sans"'];
var MAIL="wli.uthsc@gmail.com";
var RP="https://reporter.nih.gov/project-details/";
/* Programmes: every line from the NIH RePORTER records of SEAK Therapeutics, LLC (Memphis, TN), the UTHSC news story of
   19 November 2025 and the Li lab news page. [compound, programme, modality, status, detail, link, link label] */
var PIPE=[
 ["SEAK193 · antimitotic agent","Breast cancer brain metastasis","Small molecule","STTR Phase I · NCI · 2025","A potent, highly brain-penetrable antimitotic discovered in NCI-supported research and patented. Its mechanism of action is confirmed by an X-ray co-crystal structure; it has shown excellent metabolic stability, activity against drug-resistant breast tumour models in vivo, and efficacy in an aggressive taxane-refractory triple-negative brain metastasis model. Phase II is planned for IND-enabling studies.",RP+"11312503","NIH RePORTER"],
 ["SEAK-114b · MDM2/XIAP dual inhibitor","Pediatric cancers: leukaemia and neuroblastoma","Small molecule","SBIR Phase I · NCI","SEAK-114 binds the MDM2 RING domain and disrupts its interaction with the XIAP IRES, inhibiting two cell-survival proteins at once. Discovered with UTHSC and Emory and licensed by SEAK, it was effective against leukaemia xenografts at 10–20 mg/kg with a maximum tolerated dose of at least 200 mg/kg in mice; SEAK is developing its more potent isomer, SEAK-114b.",RP+"10144288","NIH RePORTER"],
 ["JW-65 · TRPC3 inhibitor","Epilepsy","Small molecule","STTR Phase I · NINDS · 2023","A patented analogue of the TRPC3 inhibitor Pyr3 with much better metabolic stability and safety, good brain penetration and retention, and better efficacy than phenytoin head to head in an epilepsy mouse model. UTHSC reports that the compound was later licensed to a biotech company.",RP+"10819354","NIH RePORTER"]];
/* the SEAK193 STTR Phase I plan, from the award abstract (1R41CA310186-01) */
var EVID=[
 ["Brain penetration","Measure SEAK193's unbound brain-to-plasma ratio in rats, whose barrier is closer to the human one; the milestone is a Kp,uu,brain of at least 0.5"],
 ["Efficacy","Test SEAK193 in triple-negative (HCI-10 PDX) and HER2-positive (JIMT) brain metastasis models against capecitabine, a standard of care"],
 ["Safety","Profile off-target activity with SafetyScan47 and build the ADME and safety data that IND-enabling work will need"],
 ["Beyond the breast","Assess SEAK193 as a candidate for brain metastases from lung cancer and melanoma, and for glioma"]];
/* team: SEAK's own site (founder), UTHSC faculty pages and NIH RePORTER. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founder",name:"Wei Li, PhD",title:"Founder & Chief Scientific Officer",sum:"UTHSC Distinguished Professor and Director of the College of Pharmacy Drug Discovery Center; PhD in chemistry, Columbia University."},
 {g:"Research",name:"Zhongzhi Wu",title:"Principal Investigator, SBIR",sum:"Contact PI on SEAK's NCI SBIR awards for the MDM2/XIAP dual inhibitor programme in childhood cancers."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["2026","SEAK is selected for the NIH Technical and Business Assistance (TABA) programme for its breast cancer brain metastasis therapy","Li Lab, UTHSC","https://li.lab.uthsc.edu/li-group-news/"],
 ["November 2025","Pioneering breakthroughs in epilepsy and cancer treatment research: Dr. Wei Li's SEAK193 and JW-65","UTHSC News","https://news.uthsc.edu/pioneering-breakthroughs-in-epilepsy-and-cancer-treatment-research/"],
 ["September 2025","NCI awards SEAK an STTR Phase I grant to develop SEAK193 for breast cancer brain metastasis ($399,981)","NIH RePORTER",RP+"11312503"],
 ["September 2023","NINDS awards SEAK an STTR Phase I grant for a selective TRPC3 inhibitor in epilepsy ($429,932)","NIH RePORTER",RP+"10819354"],
 ["September 2020","NCI awards SEAK an SBIR Phase I grant for SEAK-114 in pediatric cancers ($399,964)","NIH RePORTER",RP+"10144288"],
 ["September 2019","NCI awards SEAK its first SBIR grant, for a dual MDM2/XIAP inhibitor for childhood cancers ($299,823)","NIH RePORTER",RP+"9902255"]];
var SHEETS=[];
