var FONTS=['300 1em "Sora"','400 1em "Sora"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','500 1em "JetBrains Mono"'];
var WEB="https://tetraimaging.com/";
var MAP="https://www.google.com/maps/search/?api=1&query=4320+Forest+Park+Ave+Suite+304+St.+Louis+MO";
var PAPER="https://doi.org/10.1002/mp.70033";
/* programmes, from the firm's Core Technologies section and its NIH/NCI SBIR awards (NIH RePORTER) */
var LINES=[
 ["Tetrahedron beam CT for ENT","Point-of-care CT · NIBIB STTR Phase II","A compact volumetric CT for otolaryngology clinics. A linear array of discrete x-ray sources and a linear detector array form a tetrahedron volume, for diagnostic-quality images in a smaller footprint than cone-beam CT. Phase II builds a clinical prototype on a rotating gantry.","https://reporter.nih.gov/project-details/10546823"],
 ["Dental tetrahedron beam CT","Super-resolution · dual energy · NIDCR STTR","A dental TBCT pairing the in-house MPTEX source, with variable focal spot size and location, and an energy-resolved photon-counting detector, to cut scatter and artefacts and resolve the fine detail dentistry needs.","https://reporter.nih.gov/project-details/10258444"],
 ["FLASH radiotherapy QA","Multilayer strip ion chamber · NCI SBIR Phase II","Ultra-fast detectors for FLASH proton therapy. The MLSIC measures a proton FLASH beam spot by spot: position and profile, energy, absolute dose and dose rate, for development, commissioning and QA.","https://reporter.nih.gov/project-details/11211392"],
 ["Proton imaging","Radiography · proton CT · QA","Novel proton imagers for comprehensive quality assurance, proton radiography and proton CT, to make proton-based cancer treatment more accurate and effective.","https://tetraimaging.com/#technologies","Current site"]];
/* team, from the firm's Leadership Team section */
var TEAM=[
 {g:"Leadership",name:"Tiezhi Zhang, PhD",title:"Founder and President",sum:"Professor of Radiation Oncology at Washington University School of Medicine; a leading expert in medical imaging and radiation therapy technology."},
 {g:"Leadership",name:"Emre Toker",title:"Chief Executive Officer",sum:"Leads strategy and business development, to bring the company's imaging technology into clinical practice."},
 {g:"Leadership",name:"Dr. Hao Jiang",title:"Chief Science Officer",sum:"Leads research and development in advanced medical imaging and radiation therapy quality assurance systems."},
 {g:"Engineering",name:"Liuxing (Tony) Shen",title:"Mechanical Engineer",sum:"Mechanical design and engineering for advanced imaging systems and precision instrumentation."},
 {g:"Engineering",name:"Dr. Shuang Zhou",title:"Electrical Engineer",sum:"Electrical engineering and system integration for imaging technologies and their electronics."}];
/* news: only items with a working link */
var NEWS=[
 ["Oct 2025","Three-dimensional proton FLASH dose-rate measurement at high spatiotemporal resolution with the multi-layer strip ionization chamber","Medical Physics",PAPER],
 ["Sep 2024","NCI SBIR Phase II contract: developing the multilayer strip ion chamber device for FLASH radiotherapy QA","NIH RePORTER","https://reporter.nih.gov/project-details/11211392"],
 ["Aug 2022","NIBIB STTR Phase II award: a clinical prototype of tetrahedron beam CT for point-of-care ENT imaging","NIH RePORTER","https://reporter.nih.gov/project-details/10546823"],
 ["Sep 2021","NIDCR STTR award: super-resolution dual-energy dental CT with a distributed x-ray source and photon-counting detector","NIH RePORTER","https://reporter.nih.gov/project-details/10258444"]];
var SHEETS=[];
