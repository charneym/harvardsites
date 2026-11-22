var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"','300 1em "Oswald"','400 1em "Oswald"'];
var MAIL="info@isoformix.com";
/* the assay menu, isoformix.com/services: [protein, sample, what the assay detects] */
var ASSAYS=[
 ["ApoE","Apolipoprotein E","The three apoE isoforms (E2, E3, E4), their ratios, and the isoform-specific glycosylation."],
 ["ApoC-I and C-II","Apolipoproteins C-I and C-II","Truncated isoforms, and their ratios to the native proteins."],
 ["ApoC-III","Apolipoprotein C-III","Multiple glycoforms, and their ratios."],
 ["Clusterin","Apolipoprotein J","Glycoforms of the protein."],
 ["SAA","Serum amyloid A","Multiple protein isoforms and gene products, and their ratios. Also offered as an ELISA."],
 ["ApoA-1","Apolipoprotein A-I","Allelic variations and post-translational modifications of the protein."]];
/* pricing, isoformix.com/services (mass spectrometry assays, per assay) */
var PRICE=[["Fewer than 10 samples","$300"],["Fewer than 50 samples","$250"],["Fewer than 200 samples","$200"],["More than 200 samples","$150"]];
/* isoformix.com/team. Text-only masthead (CI/CL). The summary only restates the site. */
var TEAM=[
 {g:"Leadership",name:"Dobrin Nedelkov, Ph.D.",title:"President",sum:"Founded Isoformix in 2017. Thirty years in clinical assays and technology development: Intrinsic Bioprobes, where he became Scientific Director and CEO, then the Biodesign Institute at Arizona State University."}];
/* publications with an Isoformix affiliation (isoformix.com/publications-&-events, PubMed). [date, title, journal, url] */
var NEWS=[
 ["April 2026","Beyond lipidation: CSF APOE4 protein burden, not HDL subclass, drives tau associations in APOE4 Alzheimer’s disease","Research Square","https://doi.org/10.21203/rs.3.rs-9349576/v1"],
 ["July 2025","Increased cerebrospinal fluid and plasma apoE glycosylation is associated with reduced levels of Alzheimer’s disease biomarkers","Alzheimer’s Research & Therapy","https://alzres.biomedcentral.com/articles/10.1186/s13195-025-01795-7"],
 ["December 2024","Relationship of plasma apolipoprotein C-I truncation with risk of diabetes in MESA and ACT NOW","Diabetes Care","https://doi.org/10.2337/dc24-1462"],
 ["August 2023","ApoC-III proteoforms, plasma lipids, and cardiovascular risk in MESA","Arterioscler. Thromb. Vasc. Biol.","https://www.ahajournals.org/doi/abs/10.1161/ATVBAHA.123.319035"],
 ["May 2023","An association of CSF apolipoprotein E glycosylation and amyloid-beta 42 in individuals who carry the APOE4 allele","Alzheimer’s Research & Therapy","https://doi.org/10.1186/s13195-023-01239-0"]];
var SHEETS=[];
