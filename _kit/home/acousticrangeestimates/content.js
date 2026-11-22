var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="support@AcousticRangeEstimates.com";
var SM="https://acousticrangeestimates.com/";
var REDJ="https://www.sciencedirect.com/science/article/pii/S0360301626042252";
/* the validation record: every line from acousticrangeestimates.com/publications-thermoacoustic-range-verification and /tarv,
   and the Red Journal 2026 abstract (PubMed 42660299). [year, journal, study, setting, detail, link, label] */
var PIPE=[
 ["2026","Cable-free tARV, 2 Gy proton field to the liver","Anthropomorphic phantom · Mevion Hyperscan","Red Journal","Thermoacoustic estimates found a 6.7 ± 1.7 mm range error in the clinical Monte Carlo plan and 0.5 ± 1.6 mm in the stoichiometric plan. Recomputing the dose from those estimates largely corrected the clinical dosemap.",REDJ,"Read the paper"],
 ["2025","Range verification at a conventional dose rate","Synchrocyclotron delivery","Medical Physics","Thermoacoustic range verification during conventional dose rate delivery by a synchrocyclotron: 1.3 mm accuracy and 1.6 mm precision.","https://doi.org/10.1002/mp.17954","Read the paper"],
 ["2021","A clinical plan, pencil beam by pencil beam","Abdominal imaging phantom","Radiother Oncol","Thermoacoustic range verification during pencil beam delivery of a clinical plan to an abdominal imaging phantom.","https://www.thegreenjournal.com/article/S0167-8140(21)06164-8/abstract","Read the paper"],
 ["2016","The Bragg peak, overlaid on ultrasound","Clinical ultrasound array","Phys Med Biol","A clinical ultrasound array provides perfectly co-registered overlay of the Bragg peak onto an ultrasound image of the underlying anatomy.","https://iopscience.iop.org/article/10.1088/0031-9155/61/15/5621","Read the paper"]];
/* tARV design and performance specifications, acousticrangeestimates.com/tarv */
var EVID=[
 ["Range accuracy","1.3 mm (Med Phys 2025), 0.5 mm (Red Journal 2026)"],
 ["Range precision","1.6 mm in both studies"],
 ["Sampling rate","384 ksps thermoacoustic, 1.536 Msps nuclear"],
 ["Vertical resolution","1.24 nV thermoacoustic, 1 mV nuclear"],
 ["Receive chain","10 to 100 kHz, receiver sensitivity 0.1 to 2.8 mV/Pa"],
 ["Weight and size","0.7 kg · 150 × 95 × 110 mm"]];
/* the team: the founder (NIH RePORTER R44CA243764, PubMed) and the 2026 study's company and clinical co-authors. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founder",name:"Sarah K. Patch, PhD",title:"Founder; principal investigator",sum:"Thermoacoustics papers since 2003, proton range verification since 2016; also UW-Milwaukee Physics."},
 {g:"Acoustic Range Estimates",name:"Anjali Chiravuri",title:"Acoustic Range Estimates",sum:"Co-author of the 2026 Red Journal validation study."},
 {g:"Clinical collaborators, 2026 study",name:"Vikren Sarkar",title:"Department of Radiation Oncology, University of Utah",sum:""},
 {g:"Clinical collaborators, 2026 study",name:"Roger J. Vallejos and John E. Lynch",title:"Phantoms and Alignment, Sun Nuclear",sum:"Multimodality anthropomorphic phantom of hydrogels with known stoichiometry."}];
/* publications as news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["December 2026","Validation of a cable-free and user-friendly thermoAcoustic Range Verifier for a 2 Gy proton field delivered to the liver of an anthropomorphic phantom","Red Journal",REDJ],
 ["2025","Thermoacoustic range verification during conventional dose rate delivery by a synchrocyclotron","Medical Physics","https://doi.org/10.1002/mp.17954"],
 ["2023","Reconstruction of thermoacoustic emission sources induced by proton irradiation using numerical time reversal","Phys Med Biol","https://iopscience.iop.org/article/10.1088/1361-6560/acabfc"],
 ["2021","Thermoacoustic range verification during pencil beam delivery of a clinical plan to an abdominal imaging phantom","Radiother Oncol","https://www.thegreenjournal.com/article/S0167-8140(21)06164-8/abstract"]];
var SHEETS=[];
