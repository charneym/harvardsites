var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@onepassmedical.com";
var LI="https://www.linkedin.com/feed/update/urn:li:activity:";
/* Programmes, from onepassmedical.com (InstaFan; Pipeline Products: "all based on InstaFan"), the FDA 510(k) record K251542
   and the company's news page. Stage words only where the record states them. [programme, area, title, stage, detail, next] */
var PIPE=[
 ["InstaFan","EUS-FNA/B diagnostic biopsy","Five biopsy specimens in one pass","FDA 510(k) cleared, July 2025 · cleared by Anvisa (Brazil), November 2021","The first disposable multi-needle EUS-FNA/B device: a 22-gauge FNB central needle and four pre-bent 25-gauge FNA peripheral needles, for sampling submucosal and extramural lesions in or beside the gastrointestinal tract through the accessory channel of a curvilinear echoendoscope.",0],
 ["Prevention","EUS-RFA · pancreatic neoplasms","Focused RF ablation through five needles","Pipeline product, based on InstaFan","EUS-RFA is an emerging minimally invasive alternative to surgical resection, but heat spread has limited it to pancreatic tumours of up to about 18 mm. Delivering energy at several sites at once, InstaFan is designed to destroy a larger area of the tumour.",1],
 ["Bio Therapeutics","Pancreatic cancer","EUS drug-device combination for intratumoral injection","Pipeline product, based on InstaFan","Pancreatic cancer's dense stroma acts as a barrier to drugs given systemically. InstaFan as a drug-device combination would inject drug into the tumour, as an adjuvant to the systemic protocol, to damage that structure and raise the tumour's response.",1]];
/* InstaFan specifications (onepassmedical.com/instafan; brochure LBL-01-001 Rev.1). */
var SPEC=[
 ["Central needle","22G FNB"],["Peripheral needles","4 × 25G FNA, pre-bent"],["Spread","10 mm at 30 mm deployment"],
 ["Minimum working channel","2.8 mm"],["Working length","1,400 mm"],["Maximum needle length","80 mm"]];
/* onepassmedical.com (About Us). Text-only masthead; summaries state only what the company states. */
var TEAM=[
 {g:"Leadership",name:"Jacob BenArie, B.Sc., MBA",title:"Co-founder, inventor and CEO",sum:"Former CEO of Orgenesis (Nasdaq: ORGS); director of Q2Pharma and CEO of Betalin."},
 {g:"Leadership",name:"Prof. Jesse Lachter, MD",title:"Co-founder, inventor and Chief Medical Officer",sum:"Gastroenterologist; former head of the EUS service at Rambam Health Care Campus."},
 {g:"Leadership",name:"Yaron Amikam, M.Sc.",title:"Engineering Manager",sum:"Former development and engineering manager at Hanita Lenses and Elcam Medical."},
 {g:"Leadership",name:"Prof. Ron Epelbaum, MD",title:"Clinical Research Manager",sum:"Oncologist; former director of the Division of Cancer at Rambam Health Care Campus."},
 {g:"Advisory board",name:"Prof. Seth Gross, MD",title:"NYU, USA",sum:"Gastroenterologist and advanced endoscopist; Clinical Chief, Division of Gastroenterology and Hepatology."},
 {g:"Advisory board",name:"Prof. Vivek Kaul, MD",title:"University of Rochester Medical Center, USA",sum:"Segal-Watson Professor of Medicine, Division of Gastroenterology."},
 {g:"Advisory board",name:"Prof. David Diehl, MD",title:"Geisinger Medical Center, USA",sum:"Director of Interventional Endoscopy."},
 {g:"Advisory board",name:"Prof. Yehuda Ringel, MD",title:"Meir Medical Center, Israel",sum:"Chief, Division of Gastroenterology."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","InstaFAN receives FDA 510(k) clearance (K251542) for sampling lesions in or beside the GI tract through a curvilinear echoendoscope","U.S. FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K251542"],
 ["December 2021","Challenge leads to opportunity: a look back at OnePass Medical's 2021","LinkedIn","https://www.linkedin.com/pulse/challenge-leads-opportunity-look-back-2021-onepass-medical/"],
 ["November 2021","InstaFan cleared for marketing and sales by Anvisa, the Brazilian Health Regulatory Authority","LinkedIn",LI+"6862087638745194496/"],
 ["June 2021","OnePass Medical completes a $1.5 million bridge financing round","LinkedIn",LI+"6816280250951995392/"],
 ["April 2021","The Israel Innovation Authority confirms NIS 2.5 million in support for OnePass Medical","LinkedIn",LI+"6792757153644982273/"]];
var SHEETS=[];
