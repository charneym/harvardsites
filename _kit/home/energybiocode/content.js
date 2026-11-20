var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var WEB="https://energybiocode.com/";
var ADDR="Cedar Knolls, NJ 07927";
var MAP="https://www.google.com/maps/search/?api=1&query=Cedar+Knolls+NJ+07927";
var RP_MF="https://reporter.nih.gov/project-details/11311550";
var PMC_EMS="https://pmc.ncbi.nlm.nih.gov/articles/PMC13610236";
/* programs: from the NIH RePORTER abstract of 1R43HL184661-01 (NHLBI SBIR Phase I) and the Pharmaceuticals 2026 article
   (19(9):1399; EnergyBioCode LLC affiliation, NJ CSIT R&D voucher). [program, indication, stage label, detail, link, link label] */
var PROG=[
 ["ModiFlow geometry","Inhaled drug delivery to the lower lungs","NHLBI SBIR Phase I · 2026","Refining ModiFlow’s design to optimise airflow: testing how its geometry changes the degree of flow lamination and the efficiency of delivery in a straight flow, then comparing pre-laminated flow with a standard spacer through 3D models of the bronchial bifurcation.",RP_MF,"NIH RePORTER"],
 ["Breast cancer cell research","Triple-negative breast cancer cell models","NJ CSIT R&D voucher · published 2026","A cell study combining a low-intensity, triple-frequency electromagnetic stimulation protocol with fingolimod, reporting reduced proliferation and lower levels of metastasis-associated extracellular vesicle proteins. The authors describe the metastasis findings as exploratory.",PMC_EMS,"Pharmaceuticals, 2026"]];
/* funders named in the public record: type only */
var PARTNERS=["National Heart, Lung, and Blood Institute","National Institutes of Health · SBIR","New Jersey Commission on Science, Innovation and Technology","New Jersey Economic Development Authority"];
/* people: the only person named on the company's public record (contact PI on the NHLBI award; EnergyBioCode author of the
   2026 Pharmaceuticals article); no title or portrait is published */
var TEAM=[
 {g:"Principal investigator",name:"Arevik Mosoian",title:"Contact PI, NHLBI SBIR Phase I award",sum:"Leads the NHLBI-funded project to optimise ModiFlow’s geometry for aerosol drug delivery, and is EnergyBioCode’s author and the corresponding author of the company’s 2026 breast cancer cell study in Pharmaceuticals."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NHLBI awards EnergyBioCode a $306,799 SBIR Phase I grant to optimise ModiFlow’s geometry for aerosol drug delivery","NIH RePORTER",RP_MF],
 ["September 4, 2026","Pharmaceuticals publishes EnergyBioCode’s study of electromagnetic stimulation with fingolimod in triple-negative breast cancer cells","PubMed Central",PMC_EMS]];
var SHEETS=[];
