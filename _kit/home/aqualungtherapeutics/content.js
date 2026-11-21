var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','italic 500 1em "Cormorant Garamond"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','700 1em "Manrope"','400 1em "Marcellus"'];
var MAIL="stan@aqualungtherapeutics.com";
var AQ="https://www.aqualungtherapeutics.com/";
var CT="https://clinicaltrials.gov/study/";
/* Programs: every line from aqualungtherapeutics.com (Our Pipeline, Disease Indications, Roadmap, News; viewed
   2026-11-21). [area, indication, trial, status, detail, link, link label] */
var PIPE=[
 ["Lead program","Progressive pulmonary fibrosis","PAISANO · Phase 2","IND cleared Dec 2025","PPF covers IPF and other fibrotic lung diseases that keep progressing despite treatment; nintedanib and nerandomilast slow the decline but do not stop it. Subcutaneous ALT-100, started after injury, reduced lung fibrosis in mice. PAISANO, a randomized, placebo-controlled Phase 2, will test ALT-100 on top of standard care; first patient expected 2027.",AQ+"fda","FDA clearance"],
 ["Clinical proof of concept","Acute respiratory distress syndrome","PUERTA · Phase 2a","Complete · AJRCCM 2026","Roughly 400,000 US cases a year and no approved drug. In the randomized PUERTA trial, one dose of ALT-100 lowered the organ-injury score by 50% by Day 3, against a 20% rise on placebo, with no serious adverse events attributed to the drug. Phase 2b (AMOROSA) is planned.","https://ufhealth.org/news/2026/ards-patients-improve-with-experimental-treatment","UF Health"],
 ["Oncology","Bone-metastatic prostate cancer","ALTAR-100 · Phase 1/2","IND cleared Oct 2026","Up to 90% of men with metastatic castration-resistant prostate cancer develop bone metastases. In mice, ALT-100 improved survival and shrank prostate cancer metastases. ALTAR-100 runs at the UF Health Cancer Institute; first patient expected early 2027.",CT+"NCT07917390","ClinicalTrials.gov"],
 ["Neonatal","Neonatal RDS and bronchopulmonary dysplasia","ARDENTA · Phase 1b","Planned","About 25,000 US infants a year are born at 22–29 weeks, and no drug is approved to prevent BPD. In mice, maternal ALT-100 raised pup survival from 20% to 64% and reduced BPD and pulmonary hypertension. ARDENTA is planned in preterm infants at the University of Florida.",AQ+"our-disease-indications","Indications"],
 ["Pulmonary vascular","ILD-associated pulmonary hypertension","IND-enabling","IND filing planned 2027","Pulmonary hypertension roughly halves five-year survival in interstitial lung disease, and the one approved drug class dilates vessels without reversing remodeling. Subcutaneous ALT-100 lowered right-heart pressure and vessel-wall thickening in two rat models.",AQ+"our-disease-indications","Indications"],
 ["Inflammatory expansion","Inflammatory bowel disease; lupus vasculitis","Preclinical","IND filings planned 2027","The same molecule, manufacturing process, safety database and companion biomarkers carried into autoimmune and inflammatory disease.",AQ+"our-platform","Pipeline"]];
/* aqualungtherapeutics.com, About Us. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Joe G.N. “Skip” Garcia, MD",title:"Founder & Chief Executive Officer",sum:"Pulmonary and critical care physician-scientist; elected member of the National Academy of Medicine; Associate Vice President for Research at the University of Florida; over 650 peer-reviewed publications."},
 {g:"Leadership",name:"Stan Miele, BA",title:"President & Chief Business Officer",sum:"Former Chief Commercial Officer at bioLytical Laboratories and Sucampo Pharmaceuticals, and President of Sucampo Pharma Americas for six years."},
 {g:"Leadership",name:"Augustine Choi, MD",title:"Chief Medical Officer (Fractional)",sum:""},
 {g:"Leadership",name:"Shawntela Martinez",title:"Chief Financial Officer (Fractional)",sum:""},
 {g:"Leadership",name:"David Boisvert, PhD",title:"CMC",sum:""},
 {g:"Board of Directors",name:"Joe G.N. “Skip” Garcia, MD",title:"Founder and CEO",sum:"Director, Center for Inflammation Science and Systems Medicine, Herbert Wertheim UF Scripps Institute."},
 {g:"Board of Directors",name:"Don Payan, MD",title:"Director",sum:"Co-founder of Sana and Shinobi; founder and CSO of Rigel and Khepri; inventor on over 90 issued patents."},
 {g:"Board of Directors",name:"Robert Schleimer, PhD",title:"Director",sum:"Professor Emeritus of Medicine and former Chief of Allergy and Immunology, Northwestern; co-founder of Allakos."},
 {g:"Board of Directors",name:"Jackson Streeter, MD",title:"Director",sum:"Partner at Deepworks; founder of PhotoThera and American Veterinary Laser; former CEO of Banyan Biomarkers."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","FDA clears the IND for ALTAR-100, a Phase 1/2 trial of ALT-100 in bone-metastatic prostate cancer at UF Health Cancer Institute","ClinicalTrials.gov",CT+"NCT07917390"],
 ["October 2026","eNAMPT neutralization reduces cancer-induced bone pain and bone loss in a preclinical model","Frontiers in Pain Research","https://doi.org/10.3389/fpain.2026.1955262"],
 ["June 2026","AJRCCM publishes early safety and therapeutic results from the PUERTA Phase 2a ARDS trial of ALT-100","UF Health","https://ufhealth.org/news/2026/ards-patients-improve-with-experimental-treatment"],
 ["January 2026","Invest Palm Beach interview with Dr. Skip Garcia, founder and CEO","Capital Analytics","https://capitalanalyticsassociates.com/joe-g-n-garcia-founder-ceo-aqualung-therapeutics/"],
 ["December 2025","Aqualung receives FDA clearance for the PAISANO Phase 2a study in progressive pulmonary fibrosis","Aqualung",AQ+"fda"],
 ["September 2025","NIH STTR award to develop ALT-100 for progressive pulmonary fibrosis, with the University of Florida","Aqualung",AQ+"enampt-grant"],
 ["September 2024","Phase 1a results published: safety, tolerability and pharmacokinetics of ALT-100 in healthy volunteers","PMC","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11823460/"]];
var SHEETS=[];
