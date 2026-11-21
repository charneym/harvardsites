var FONTS=['400 1em "Questrial"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var WEB="https://www.amidebio.com/";
var MAIL="info@amidebio.com";
var SALES="sales@amidebio.com";
var TEL="303.604.0296";
var MAP="https://www.google.com/maps/search/?api=1&query=331+South+104th+Street+Louisville+CO+80027";
var RP="https://reporter.nih.gov/project-details/";
var N24="https://www.amidebio.com/2024/09/11/amidebio-awarded-direct-to-phase-2-sbir-grant/";
var N22="https://www.amidebio.com/2022/10/04/amidebio-awarded-sbir-phase-iib-grant-to-support-pre-clinical-development-of-its-long-acting-stable-glucagon-analog-for-the-treatment-of-hyperinsulinism/";
var N20R="https://www.amidebio.com/2020/08/20/amidebio-granted-rare-pediatric-disease-designation-by-fda-for-novel-solution-stable-glucagon/";
var N20O="https://www.amidebio.com/2020/04/22/amidebio-granted-orphan-drug-designation-by-fda-for-novel-solution-stable-glucagon/";
var N21="https://www.amidebio.com/2021/03/09/amidebio-awarded-sbir-phase-i-grant-to-develop-novel-glucose-responsive-insulin-therapeutics/";
/* pipeline: amidebio.com/drug-discovery (stages and progress as published there), the 2024-09-11 release and NIH RePORTER.
   [programme, indication, stage label, progress 0-100 across Discovery/Preclinical/pre-IND/Phase 1 (null = not published), detail, link, link label] */
var PROG=[
 ["Dual agonist insulin","Diabetes with impaired awareness of hypoglycemia (IAH)","Candidate selection, toward IND",null,"An insulin-glucagon biologic with a time-action profile like regular insulin, but without the risk of hypoglycemia if an overdose occurs. Several lead candidates already show potent in vivo activity.",RP+"11176960","NIDDK SBIR · 2024–2026"],
 ["Solution-stable glucagon","Congenital hyperinsulinism, an orphan indication","Pre-IND",65,"A solution-stable, long-acting glucagon. Granted Orphan Drug and Rare Pediatric Disease designations by the FDA in 2020.",N20O,"FDA orphan designation"],
 ["Long-lasting glucagon","Congenital hyperinsulinism","Preclinical",45,"A long-acting stable glucagon analog, in preclinical development with an SBIR Phase IIB grant from the NIDDK.",N22,"SBIR Phase IIB"],
 ["Glucose-responsive insulin","Type 1 and type 2 diabetes","Discovery",20,"Insulins that respond in real time to blood glucose, aiming to replace basal and prandial insulin with a single weekly dose, without complex chemical modification.",N21,"SBIR Phase I"],
 ["Ultrastable insulin","Single-chain insulin analogs","Preclinical",45,"Single-chain insulin analogs resistant to thermal and chemical degradation at elevated temperature. AmideBio is seeking a partner to develop them further.",null,"Partnering"]];
var STAGES=["Discovery","Preclinical","Pre-IND","Phase 1"];
/* people: amidebio.com/about (no portraits published). [name, role, one line from the published bio] */
var TEAM=[
 ["Pawel Fludzinski, PhD","CEO, President and Board Member","31 years at Eli Lilly; led the global development and registration of TRULICITY® for type 2 diabetes."],
 ["Michael H. B. Stowell, PhD","CSO, Founder and Board Member","Professor of Molecular Biology and Mechanical Engineering at the University of Colorado Boulder."],
 ["John P. Mayer, PhD","Director, Peptide Chemistry","Former Peptide Chemistry Group Leader at Eli Lilly and at Amgen; over 80 publications."],
 ["Stephen Eisenberg, PhD","Director, Molecular Biology","More than 20 years in biotechnology at Sangamo, BiOptix and Synergen; inventor on 30+ patents."],
 ["Derek Watson, MBA","Fractional CFO","Life sciences finance for early-stage companies; chartered accountant, IMD MBA."],
 ["Yanyu Peng, MS","Manager, Product Development","With AmideBio since 2010; developed its proprietary peptide and protein manufacturing processes."],
 ["Elizabeth Schanuel, BS","Scientist, Product Development","Upstream and downstream manufacturing since 2012, and sales for the peptide catalog."]];
var BOARD=["David Brunel, Chairman","Greg Abbott, JD","David L. Barker, PhD"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 24, 2025","NIDDK continues funding for the dual agonist insulin program, with a second-year award of $999,468","NIH RePORTER",RP+"11176960"],
 ["September 11, 2024","AmideBio awarded a $1.93M Direct-to-Phase 2 SBIR grant to develop dual agonist insulins for diabetics with IAH","AmideBio",N24],
 ["October 4, 2022","SBIR Phase IIB grant of $2.69M for pre-clinical development of a long-acting stable glucagon analog","AmideBio",N22],
 ["August 20, 2020","FDA grants Rare Pediatric Disease designation to AmideBio’s solution-stable glucagon","AmideBio",N20R]];
var SHEETS=[];
