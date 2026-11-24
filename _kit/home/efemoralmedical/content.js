var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="chris.haig@efemoralmedical.com";
var EW="https://efemoralmedical.com";
var UP=EW+"/wp-content/uploads/";
/* programmes: every line from efemoralmedical.com and Efemoral's press releases (2020-12-14, 2022-09-22, 2024-02-14, 2026-04-21).
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["EVSS · above the knee","Femoropopliteal disease","EFEMORAL I · first-in-human","3-year data, 2026","The first-in-human study of the Efemoral Vascular Scaffold System at investigational sites in New Zealand and Australia. Long-term results for the first 40 patients were presented at the Charing Cross Symposium in London, and the trial has expanded to more hospitals, more investigators and longer lesions.",UP+"2026/04/Efemoral-Medical-FIH-first-40-patients-press-release-21apr2026-final.pdf","Release"],
 ["EVSS · below the knee","Chronic limb-threatening ischemia","Infrapopliteal arteries","FDA Breakthrough Device","An additional device for de novo or restenotic lesions of the infrapopliteal arteries in patients with CLTI, the most severe form of peripheral arterial occlusive disease. Granted FDA Breakthrough Device designation in February 2024.",UP+"2024/02/2024-02-14-Efemoral-Medical-Granted-Breakthrough-Device-Designation-final-with-logo.pdf","Release"],
 ["Pre-clinical","Safety, efficacy and mechanism","NIH SBIR Phase II · NHLBI","R44 HL165972","A Phase II Small Business Innovation Research award from the National Heart, Lung, and Blood Institute supports studies characterising the pre-clinical safety, efficacy and foundational mechanism of action of the EVSS, complementing the clinical work.",UP+"2022/09/Efemoral-Medical-SBIR-Phase-II-Grant-22-Sept-2022_Released.pdf","Release"]];
/* EFEMORAL I, first 40 patients: every figure from Efemoral's release of 21 April 2026 */
var EVID=[
 ["Primary patency","97% at three years"],
 ["Freedom from TLR","97% freedom from target lesion revascularization at three years"],
 ["Residual stenosis","1% ± 16% mean residual stenosis after the procedure, the lowest reported in a femoropopliteal trial"],
 ["Function","Sustained improvement in ankle-brachial index, Rutherford-Becker class and walking tolerance"]];
/* efemoralmedical.com/management and /scientific-advisory-board. Text-only masthead (CI/CL); summaries condensed from their bios. */
var TEAM=[
 {g:"Management",name:"Christopher Haig",title:"Co-founder & Chief Executive Officer",sum:"More than 25 years in cardiovascular devices: Guidant and Abbott Vascular, then senior roles at Calypso Medical and QT Vascular. B.A., UC Berkeley; M.B.A., UNC Kenan-Flagler."},
 {g:"Management",name:"Lewis Schwartz, M.D.",title:"Co-founder & Chief Medical Officer",sum:"Vascular surgeon and Professor of Vascular Surgery, University of Illinois. Former Divisional VP at Abbott Vascular, where he led the first trials of drug-eluting bioresorbable stents for PAD."},
 {g:"Scientific Advisory Board",name:"Andrew Holden, MBChB",title:"Auckland City Hospital",sum:"Director of Interventional Radiology and Professor of Radiology, University of Auckland; Principal Investigator of EFEMORAL I."},
 {g:"Scientific Advisory Board",name:"William A. Gray, M.D.",title:"Main Line Health",sum:"System Chief, Division of Cardiovascular Diseases, and President of the Lankenau Heart Institute; principal investigator for numerous clinical trials."},
 {g:"Scientific Advisory Board",name:"Sahil A. Parikh, M.D.",title:"Columbia University",sum:"Director of Endovascular Services and Associate Professor of Medicine, Columbia University Vagelos College of Physicians and Surgeons."},
 {g:"Scientific Advisory Board",name:"Krishna Rocha-Singh, M.D.",title:"Prairie Heart Institute",sum:"Chief Scientific Officer of the Prairie Heart Institute; trained in coronary and peripheral interventions at Scripps Clinic."},
 {g:"Scientific Advisory Board",name:"Craig Walker, M.D.",title:"Cardiovascular Institute of the South",sum:"Founder, President and Medical Director of the Cardiovascular Institute of the South, and an interventional cardiologist."}];
/* news: only items with a working link (efemoralmedical.com/news). [date, headline, source, url] */
var NEWS=[
 ["April 2026","Exceptional long-term EFEMORAL I results highlight durability and differentiated performance in femoropopliteal disease","Efemoral Medical",UP+"2026/04/Efemoral-Medical-FIH-first-40-patients-press-release-21apr2026-final.pdf"],
 ["April 2025","Efemoral Medical releases positive long-term results from EFEMORAL I","Efemoral Medical",UP+"2025/04/Efemoral-Medical-FIH-first-20-patients_press-release-23april2025.pdf"],
 ["February 2024","The Efemoral Vascular Scaffold System is granted FDA Breakthrough Device designation","Efemoral Medical",UP+"2024/02/2024-02-14-Efemoral-Medical-Granted-Breakthrough-Device-Designation-final-with-logo.pdf"],
 ["December 2023","Efemoral announces the issuance of its 10th patent for an intravascular stent in the treatment of peripheral arterial disease","Efemoral Medical",UP+"2023/12/Efemoral-Medical-10th-patent-news-release-13DEC2023.pdf"],
 ["December 2022","Efemoral Medical announces Series A1 funding","Efemoral Medical",UP+"2022/12/Efemoral_Medical_Series_A1_December_13_2022_press_release.pdf"],
 ["September 2022","Efemoral is awarded a Phase II SBIR grant from the NIH to advance treatment for peripheral artery disease","Efemoral Medical",UP+"2022/09/Efemoral-Medical-SBIR-Phase-II-Grant-22-Sept-2022_Released.pdf"]];
var SHEETS=[];
