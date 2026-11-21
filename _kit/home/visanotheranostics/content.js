var FONTS=['300 1em "Outfit"','400 1em "Outfit"','500 1em "Outfit"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"'];
var WEB="https://visanotheranostics.com/";
var MAIL="VTinfo@visanotheranostics.com";
var LIC="https://visanotheranostics.com/visano-theranostics-secures-exclusive-license/";
var CWRU="https://case.edu/news/tiny-bubbles-big-breakthrough-cracking-cancers-fortress";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* programmes: from visanotheranostics.com (Lead Application; Targeted Nanobubble Therapy; About Us), the 2 June 2026 licence
   release, and the CWRU newsroom story of 24 Feb 2026. [name, indication, stage label, detail, link, link label] */
var PROG=[
 ["PSMA-targeted nanobubbles","Molecular ultrasound imaging for prostate biopsy and image-guided procedures","Lead programme · preclinical","Nanobubble contrast agents that target prostate-specific membrane antigen, overexpressed on prostate cancer cells, so suspicious lesions light up during a standard transrectal ultrasound biopsy, without ionizing radiation. The Ohio TVSF Phase II project now funds the preclinical and translational work that leads to regulatory engagement.",LIC,"Licence release"],
 ["Targeted Nanobubble Therapy","Ultrasound-mediated, drug-free treatment of prostate cancer","Research","The same targeted bubbles, pulsed with ultrasound until they rupture, to selectively destroy the cancer cells they are bound to and spare the surrounding healthy tissue; studied in PSMA-expressing prostate cancer cells.",PM+"38304914","PubMed"],
 ["Opening solid tumours","Ultrasound-activated nanobubbles that soften the tumour barrier for other therapies","Research at CWRU","In a breast cancer model, Exner and Karathanasis labs used perfluoropropane nanobubbles and ultrasound to remodel stiff tumour tissue, letting immune cells and lipid nanoparticles in (ACS Nano, 2026).",CWRU,"CWRU Newsroom"]];
/* people: from the Team section of visanotheranostics.com and the 2026 licence release (advisors) */
var TEAM=[
 ["Michael J. Haag, MS, MBA","Co-founder · Chief Executive Officer","Over 25 years in technology transfer and start-up creation. From 2013 to 2023 he ran Technology Management at Case Western Reserve University, where more than 80 start-ups launched; he founded TherExel LLC in 2023."],
 ["Agata A. Exner, Ph.D.","Inventor · Co-founder","Director of the CWRU Center for Imaging Research and Henry Willson Payne Professor of Radiology. Her group pioneered long-circulating, ultrasound-responsive targeted nanobubbles, with NIH funding for over 20 years."],
 ["James P. Basilion, Ph.D.","Inventor · Co-founder","Professor of Radiology and Biomedical Engineering at CWRU and co-director of the Cancer Imaging Program at the Case Comprehensive Cancer Center, with more than 100 publications and 50 issued or pending patents."]];
var ADV=["Hui Zhu, MD","Bruno Nahar, MD"];
/* news and papers: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2, 2026","Visano secures an exclusive licence from Case Western Reserve University for its nanobubble platform","Visano Theranostics",LIC],
 ["February 24, 2026","Tiny bubbles, big breakthrough: ultrasound-activated nanobubbles crack cancer’s “fortress”","CWRU Newsroom",CWRU],
 ["2024","Nanobubble contrast enhanced ultrasound imaging: a review","WIREs Nanomed. Nanobiotechnol.",PM+"39511794"],
 ["May 2024","Ultrasound-mediated drug-free theranostics for treatment of prostate cancer","Bioactive Materials",PM+"38304914"],
 ["2022","Intracellular vesicle entrapment of nanobubble ultrasound contrast agents targeted to PSMA","Nanotheranostics",PM+"35223380/"],
 ["August 2020","Real time ultrasound molecular imaging of prostate cancer with PSMA-targeted nanobubbles","Nanomedicine",PM+"32348874"]];
var SHEETS=[];
