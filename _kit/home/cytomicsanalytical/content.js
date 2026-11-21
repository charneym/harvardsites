var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"'];
var WEB="https://cytomicsanalytical.com/";
var TEL="+1 765-233-6044",TELH="tel:+17652336044";
var MAIL="cytomicsanalytical@gmail.com";
var MAP="https://www.google.com/maps/search/?api=1&query=West+Lafayette+Indiana";
/* programmes: from the firm's site (home, nano-particle page) and its NIH SBIR awards on NIH RePORTER */
var PROGS=[
 ["Neuro-Link","Immune biomarkers · Alzheimer’s disease","Automated immune-biomarker fingerprinting: validated flow cytometry panels and automated pipelines that track peripheral immune cells in patients on disease-modifying Alzheimer’s therapies, with regularised optimal transport for unbiased comparison of high-dimensional cytometry data.","NIH NIA SBIR Phase I, 2026","https://reporter.nih.gov/project-details/11407255"],
 ["Cloud analysis service","Automated analysis · in development","A cloud-based service for uploading data sets for automated analysis, built on our multiparametric toolsets. Available for testing in Q1 2027.","Testing from Q1 2027",""],
 ["MY-blu","Extracellular vesicles · 10–150 nm","A modified Blu-ray disc with microfluidic channels, read by the Blu-ray head and our board-level hardware and software, to find extracellular vesicles, size them and read their phenotype from a sample in about 30 minutes.","NIH NIDA SBIR Phase I, 2017","https://cytomicsanalytical.com/technology-for-nano-particle-detection/"],
 ["HLS scanning cytometry","Small-laser-beam flow cytometry","New concepts for microparticle analysis: a small laser beam scanned across each particle as it flows, for more content per cell than a single total signal.","NIH NHLBI SBIR Phase I, 2015","https://reporter.nih.gov/project-details/8980640"]];
/* spectral flow cytometry milestones, from the Spectral Flow Cytometry page of the firm's site */
var FIRSTS=[["2004","First work on spectral flow cytometry presented at the ISAC conference: collection hardware for high-speed multispectral single-particle analysis","https://cytomicsanalytical.com/spectral-flow-cytometry/"],
 ["2004","Patent application “Multispectral detector and analysis system”, issued as US 7,280,204 in 2007","https://patents.google.com/patent/US7280204B2/en"],
 ["2004","“Multispectral Cytometry: The Next Generation”, Biophotonics International","https://cytomicsanalytical.com/spectral-flow-cytometry/"],
 ["2005","Multispectral cytometry of single bio-particles using a 32-channel detector, Proc. SPIE 5692","https://doi.org/10.1117/12.591365"],
 ["2012","Hyperspectral cytometry at the single-cell level using a 32-channel photodetector, Cytometry Part A","https://doi.org/10.1002/cyto.a.21120"],
 ["2019","Spectral flow cytometry, Cytometry Part A","https://doi.org/10.1002/cyto.a.23779"]];
/* software capabilities, from the Software page */
var SOFT=[["Instrument control","Platforms operating multi-parameter devices, networked control devices, and camera control software for biomedical instruments."],
 ["Spectral deconvolution","Complex, solution-oriented packages, from spectral unmixing to multiparameter analytical packages."],
 ["Classification","Applications that need advanced classification toolsets such as SVM, and image-processing applications."],
 ["Data integration","Utilities that integrate data sets from instruments from different manufacturers, and automation needing real-time processing."]];
/* education: the CyTorials listed on the Education page */
var CYT=["Light scatter","What is flow cytometry","Fluidics","Optical systems","Excitation and emission","Particles","Histograms","Sorting"];
var TEAM=[
 {g:"Principal investigators on our NIH awards",name:"Grzegorz Gmyrek, PhD",title:"Contact principal investigator, NIH NIA SBIR, 2026",sum:"Leads Neuro-Link, automated immune-biomarker fingerprinting for neurodegenerative disease assessment."},
 {g:"Principal investigators on our NIH awards",name:"Masanobu Yamamoto",title:"Principal investigator, NIH NIDA SBIR 2017 and NHLBI SBIR 2015",sum:"Led the extracellular-vesicle detection programme and HLS scanning small-laser-beam flow cytometry."}];
/* news: only items with a working link */
var NEWS=[
 ["17 Sep 2026","NIH NIA SBIR Phase I award: automated immune biomarker fingerprinting for neurodegenerative disease assessment","NIH RePORTER","https://reporter.nih.gov/project-details/11407255"],
 ["28 Jul 2017","NIH NIDA SBIR award: detection, quantitation and analysis of extracellular vesicles using reflective phase grating technology","NIH RePORTER","https://reporter.nih.gov/project-details/9390168"],
 ["14 Aug 2015","NIH NHLBI SBIR award: HLS scanning small-laser-beam flow cytometry, new concepts for microparticle analysis","NIH RePORTER","https://reporter.nih.gov/project-details/8980640"]];
var SHEETS=[];
