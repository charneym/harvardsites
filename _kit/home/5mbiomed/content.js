var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Archivo"','500 1em "Archivo"','700 1em "Archivo"','400 1em "DM Mono"','500 1em "DM Mono"'];
var WEB="https://www.5mbiomed.com/";
var MAIL="info@5mbiomed.com",TEL="404-913-3660";
var SHOP="https://www.5mbiomed.com/category/all-products";
var RP="https://reporter.nih.gov/project-details/";
/* programmes: the company's NIH awards (NIH RePORTER, org 5M Biomed, LLC, Johns Creek, GA), newest first */
var PIPE=[
 ["Imagnostix","Alzheimer’s disease","A multiplexed liquid biopsy that detects and quantifies four Alzheimer’s biomarkers in blood: a point-of-care test designed to be cost-effective, easy to operate and quick to return results. Builds on a 2022 SBIR Phase I.","STTR Phase II · NIA","2025–2028",RP+"11186422"],
 ["MagEV","Myocardial infarction","An MRI-guided theranostic platform: therapeutic stem-cell extracellular vesicles labelled with ultra-magnetic nanorods for magnetic purification, targeting and imaging. With Kennedy Krieger Institute and Johns Hopkins.","STTR Phase I · NHLBI","2023–2025",RP+"10822702"],
 ["Glioma delivery","Brain tumours","A new class of magnetic nanoparticles for glioma-targeted drug delivery.","STTR Phase I · NCI","2021–2023",RP+"10258239"],
 ["Oral insulin","Diabetes","A small-intestine-targeted, fast-acting oral insulin formulation.","STTR Phase I · NIDDK","2021–2024",RP+"10385154"],
 ["Metastasis test","Medulloblastoma","Serum detection of medulloblastoma metastasis.","STTR Phase I · NCI","2020–2022",RP+"10082085"]];
/* products, as listed in the 5mbiomed.com shop */
var PROD=[
 ["Magfiniti™","Ultra-magnetic iron oxide nanorods","Water-soluble nanorods, 50/10 nm and 140/12 nm (length/diameter), coated with oligosaccharides (Magfiniti™-OS) or a biocompatible polymer (Magfiniti™-AF)."],
 ["Conjugates","Streptavidin-conjugated nanorods and nanoparticles","Magfiniti™-Strep and NP-Strep, ready to bind biotinylated antibodies and probes."],
 ["NP","Water-soluble iron oxide nanoparticles","Ultra-fine 3 nm to 30 nm cores, coated with oligosaccharides (NP-OS) or a biocompatible polymer (NP-AF)."],
 ["Organic","Organic-soluble nanorods and nanoparticles","Iron oxide nanorods and nanoparticles that disperse in organic solvents."],
 ["Custom","Made to order","Customised synthesis of magnetic nanomaterials, surface functionalisation of inorganic nanoparticles, and reformulation of therapeutic agents for targeted delivery."]];
var SERV=["Characterisation and evaluation of imaging contrast agents","Magnetic resonance based metabolomics","Assay development for testing imaging probes and nanoparticle agents","Image data processing and quantitative analysis","Highly sensitive and specific magnetic separation and purification"];
var TEAM=[
 {g:"Science leadership",name:"Yuancheng Li",title:"Vice President & Chief Scientific Officer",sum:"Contact principal investigator on all seven of 5M Biomed’s NIH awards, including the Imagnostix STTR Phase II."},
 {g:"Science leadership",name:"Hui Mao",title:"Co-investigator",sum:"Professor of Radiology and Imaging Sciences at Emory University School of Medicine; co-investigator on six of the company’s NIH awards."}];
/* news: NIH awards, each linking to its NIH RePORTER record */
var NEWS=[
 ["25 Jun 2026","Imagnostix Phase II enters its third year with $811,413 from the National Institute on Aging","NIH RePORTER",RP+"11417991"],
 ["17 Sep 2025","NIA awards $888,723 STTR Phase II to develop Imagnostix, a liquid biopsy for Alzheimer’s disease","NIH RePORTER",RP+"11186422"],
 ["28 Nov 2023","NHLBI STTR Phase I: multi-functional magnetic nanorods for theranostic extracellular vesicles to treat myocardial infarction","NIH RePORTER",RP+"10822702"],
 ["9 Aug 2022","NIA SBIR Phase I: a sensitive, robust blood test platform for early detection of Alzheimer’s disease","NIH RePORTER",RP+"10515572"]];
var SHEETS=[];
