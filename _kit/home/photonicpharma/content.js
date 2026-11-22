var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','700 1em "Manrope"','400 1em "Roboto"','500 1em "Roboto"'];
var MAIL="info@photonicpharma.com";
var RP="https://reporter.nih.gov/project-details/";
var PPN="https://www.photonicpharma.com/news.html";
/* Target programmes, from photonicpharma.com (News Center, Patents, Publications) and NIH RePORTER. Status words only
   where the company or the public record states them. [target, area, title, status, detail, dim] */
var PIPE=[
 ["Cardiac myosin","Heart failure","Activators and inhibitors of cardiac myosin","Published with Bristol Myers Squibb, 2023","A fluorescence-lifetime FRET screen that identified both activators and inhibitors of cardiac myosin, published jointly with Bristol Myers Squibb in SLAS Discovery. Funded in part by Photonic Pharma's 2016–2023 collaboration and license agreement with BMS.",0],
 ["Cardiac muscle proteins","Heart failure","A discovery platform for modulators of cardiac muscle proteins","NHLBI SBIR Phase I · R43HL162329","Photonic Pharma's fourth NIH award ($306,471), carried out by David D. Thomas and Jennifer Jewell Thomas with Brett Colson of the University of Arizona.",0],
 ["RyR calcium release channels","Age-related indications","A pipeline against pathologically leaky calcium release channels","NIA SBIR Phase I · R43AG069582","$499,443, led by Razvan L. Cornea and Jennifer Jewell Thomas with the University of Minnesota and Rosalind Franklin University. The RyR modulator assay is covered by licensed US Patent 10,281,476.",0],
 ["Tau · alpha-synuclein","Alzheimer's and Parkinson's","Small-molecule inhibitors of tau and alpha-synuclein oligomerization","NIA SBIR Phase I · R43AG063675","$593,889, with Jonathan N. Sachs at the University of Minnesota. The live-cell alpha-synuclein biosensor was published in ASN Neuro in 2023.",0],
 ["Protein kinases","Cancer","Allosteric kinase inhibitors","NCI Academic-Industrial Partnership · R01CA255513","A five-year partnership with the University of Minnesota (Nicholas M. Levinson, contact PI), with a $234,000 annual subaward to Photonic Pharma; Photonic Pharma holds an exclusive license to the protein kinase allostery sensor, US Patent 11,099,177.",0],
 ["SERCA · phospholamban","Heart","The calcium pump that started the platform","Licensed US Patent 8,431,356","FRET assays for the sarco/endoplasmic reticulum calcium ATPase and phospholamban, the target behind the living-cell SERCA screens published in SLAS Discovery in 2017.",0],
 ["Further targets","Inflammation · muscle","TNF receptor 1, actin-binding proteins and more","Published; patent applications filed","Conformational screens for TNFR1 (Science Signaling, 2019), actin-myosin (J Biol Chem, 2018) and actin-binding proteins.",1]];
/* The platform, from photonicpharma.com (Home, About, Founders, Instruments). */
var EVID=[
 ["30-fold precision","in high-throughput screening of small-molecule libraries, by combining biosensor engineering with lifetime detection"],
 ["Living cells","targets expressed as genetically encoded FRET sensors in a stable human (HEK293) cell line, probed in their natural environment"],
 ["1536-well, top-read","the fluorescence lifetime plate reader, dual laser (473 nm and 532 nm) with channels for FRET and compound interference"],
 ["Lifetime, not intensity","resolving small allosteric structural changes in the target with a precision intensity readings cannot reach"]];
/* photonicpharma.com (About the Founders; News Center). Text-only masthead. */
var TEAM=[
 {g:"Founders",name:"David D. Thomas, PhD",title:"Founder and President",sum:"William F. Dietrich Chair and Professor of Biochemistry, Molecular Biology, and Biophysics at the University of Minnesota; a world leader in site-directed spectroscopic probes of protein structure, function and dynamics."},
 {g:"Founders",name:"Jennifer Jewell Thomas, MBA",title:"Co-founder, VP Operations and Business Development",sum:"Three decades in strategic marketing and new product development across consumer goods, financial services and biomedical products, including CNS, the National Marrow Donor Program and Airborne."},
 {g:"Founders",name:"Razvan L. Cornea, PhD",title:"Scientific co-founder",sum:"Co-inventor on the RyR and living-cell assay patents and multi-PI on the NIA award targeting leaky calcium release channels."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 2026","Photonic Pharma donates its FLT-PR and SUPR plate readers to the University of Minnesota, where they remain open to users at the Biophysical Technology Center","Photonic Pharma","https://www.photonicpharma.com/instruments.html"],
 ["February 2026","Photonic Pharma completes the subaward on its fourth NIH grant","Photonic Pharma","https://www.photonicpharma.com/"],
 ["July 2023","Advancements in a FRET biosensor for live-cell fluorescence-lifetime high-throughput screening of alpha-synuclein","ASN Neuro","https://pubmed.ncbi.nlm.nih.gov/37428128/"],
 ["June 2023","HTS driven by fluorescence lifetime detection of FRET identifies activators and inhibitors of cardiac myosin, with Bristol Myers Squibb","SLAS Discovery","https://pubmed.ncbi.nlm.nih.gov/37307989/"],
 ["April 2022","NHLBI awards Photonic Pharma an SBIR grant for a discovery platform for cardiac muscle protein modulators in heart failure","NIH RePORTER",RP+"10483462"],
 ["February 2021","NCI Academic-Industrial Partnership for allosteric kinase inhibitors, with a subaward to Photonic Pharma","NIH RePORTER",RP+"10097782"]];
var SHEETS=[];
