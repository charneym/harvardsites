var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','700 1em "Inter Tight"'];
var MAIL="contact@megadaltonsolutions.com";
/* services, from megadaltonsolutions.com (Our Solutions). [modality, short tag, what CD-MS measures, applies to / detects] */
var SVC=[
 ["Advanced AAV analytics","Gene therapy vectors","Empty, partial and full capsid ratios, viral protein ratios and DNA packaging analysis.","From upstream cell lysates to purified downstream product."],
 ["Nucleotide analysis","mRNA · plasmids · DNA","High-resolution mass and charge measurements of mRNA, plasmids, single- and double-stranded DNA and DNA nanostructures.","Detects genome truncations; supports structural analysis."],
 ["VLPs and oncolytic viruses","Self-assembled particles","Resolves assembly intermediates and quantifies the intact assembly products of virus-like particles.","Empty/full ratios in large viral vectors, across a broad mass range."],
 ["Vaccines","Antigen and drug product","Structure and stoichiometry of antigen in drug product, and antibody binding to the target antigen.","Antigen stability from pre-formulation to final product, at high throughput."],
 ["Non-viral nanoparticles","Density and loading","Density and polydispersity of non-viral nanoparticles from their mass and charge.","Quantifies particle conjugation and assesses loading effectiveness."]];
/* megadaltonsolutions.com (Meet the Team); roles only, plus authorship on the publications listed below. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Martin Jarrold",title:"Chief Executive Officer",sum:"Megadalton Solutions originated from his pioneering work advancing CD-MS at Indiana University."},
 {g:"Leadership",name:"David Clemmer",title:"Chief Operating Officer",sum:""},
 {g:"Scientific team",name:"Benjamin E. Draper",title:"Analytical Lead",sum:"Co-author of the company’s 2025–2026 papers on AAV manufacturing, capsid charge heterogeneity and intact mRNA."},
 {g:"Scientific team",name:"Lohra (Miller) Young",title:"Assay Development Lead",sum:"First author of the 2026 Analytical Chemistry method for intact mRNA constructs by CDMS."}];
/* publications with a Megadalton Solutions affiliation (PubMed); each links to its DOI. [date, title, journal, url] */
var PUBS=[
 ["September 2026","Advancing charge detection mass spectrometry for characterizing large, intact mRNA constructs","Analytical Chemistry · with Pfizer","https://doi.org/10.1021/acs.analchem.6c03854"],
 ["September 2026","High resolution ES-DMA quantifies AAV capsid DNA content by electrical mobility to mass correlation","Gene Therapy","https://doi.org/10.1038/s41434-026-00626-0"],
 ["December 2025","End-to-end characterization of AAV manufacturing process using charge detection mass spectrometry","Mol. Ther. Methods Clin. Dev.","https://doi.org/10.1016/j.omtm.2025.101607"],
 ["August 2025","Insights into adeno-associated virus capsid charge heterogeneity","Analytical Chemistry","https://doi.org/10.1021/acs.analchem.5c03104"],
 ["February 2025","Coupling of size exclusion chromatography to high-throughput charge detection mass spectrometry","Analytical Chemistry","https://doi.org/10.1021/acs.analchem.4c06084"],
 ["August 2024","Charge detection mass spectrometry enables molecular characterization of nucleic acid nanoparticles","ACS Nano","https://doi.org/10.1021/acsnano.4c06313"]];
var SHEETS=[];
