var FONTS=['300 1em "Roboto"','400 1em "Roboto"','500 1em "Roboto"','italic 300 1em "Roboto"','400 1em "Roboto Mono"','500 1em "Roboto Mono"'];
var WEB="https://www.neucyte.com/";
var MAIL="info@neucyte.com";
var NEWSURL="https://www.neucyte.com/newsandevents";
/* facts: neucyte.com (home / About Us, Technology, Services, News and Events, Contact Us), NIH RePORTER (org NEUCYTE, Mountain View:
   1R41AG084421-01, 75N95024C00001, 1R41AG085831-01); BIO Investor Forum speaker profile for Tao Huang; all fetched 2026-11-23 */
var SYS=[["Proprietary iPSC platform","Translatable neuroscience","Advanced technology for translatable neuroscience focused on neurological disorders, from any patient background."],
 ["SynFire® neural cells","Accurate human models","Pure populations of human neural subtypes that enable accurate in vitro models of neurological diseases."],
 ["Phenotypic and target-based screens","Tools for discovery","Precision tools for drug discovery and development, from target validation to compound screening and neural safety."]];
var PRODUCTS=[
 ["Custom production","SynFire® iNeurons","Excitatory and inhibitory human neurons, made from iPSCs in large homogeneous batches of multiple neuronal subtypes with high functionality.","https://www.neucyte.com/technology"],
 ["Custom production","iAstrocytes and iMicroglia","The glia from the same platform, for defined co-cultures in which synapse formation, transcriptional programs and electrophysiology can be tested.","https://www.neucyte.com/services-4"],
 ["Disease modeling","Patient-to-screening pipeline","Patient fibroblasts or PBMCs are reprogrammed into iPSCs and differentiated into neural cells, on an isogenic and disease modeling platform.","https://www.neucyte.com/services-4"],
 ["Assays","Screening and neurotoxicity","Assay development, compound screening, functional phenotypic and neurotoxicity assessment, read out by electrophysiology and high-content imaging.","https://www.neucyte.com/services-4"]];
var TEAM=[
 {g:"Leadership",name:"Tao Huang, PhD, JD",title:"Chief Executive Officer and President",sum:"Co-founder of NeuCyte. PhD in biochemistry from Peking Union Medical College, JD from the University of Michigan Law School."},
 {g:"Leadership",name:"Wayne Poon",title:"Senior Director, Head of Neuroscience and Rare Diseases",sum:"Principal investigator on NeuCyte’s NIH-funded AD/ADRD microphysiological systems for high-throughput screening."},
 {g:"Scientific Advisory Board",name:"Paul J. Hagerman, MD, PhD",title:"University of California, Davis",sum:"Distinguished Professor in Biochemistry and Molecular Medicine."},
 {g:"Scientific Advisory Board",name:"Pamela Lein, PhD",title:"University of California, Davis",sum:"Department Chair and Professor, Molecular Biosciences, School of Veterinary Medicine."},
 {g:"Scientific Advisory Board",name:"Zhiping P. Pang, MD, PhD",title:"Rutgers Robert Wood Johnson Medical School",sum:"Associate Professor of Neuroscience and Cell Biology, Child Health Institute of New Jersey."},
 {g:"Scientific Advisory Board",name:"Julia TCW, PhD",title:"Boston University",sum:"Assistant Professor of Pharmacology and Bioinformatics; directs the Laboratory of Human iPSC Therapeutics."},
 {g:"Scientific Advisory Board",name:"Edsel Abud, MD, PhD",title:"Scripps Clinic La Jolla",sum:"Assistant Professor of Medicine, Division of Allergy, Asthma and Immunology."},
 {g:"Scientific Advisory Board",name:"Ricardo N. Ramirez, PhD",title:"Computational scientist",sum:"Expertise in epigenetics, gene editing, gene therapy modalities and regulatory T-cell and myeloid gene networks."}];
var NEWS=[
 ["Jan 2026","NeuCyte and Grann Pharmaceuticals announce a strategic partnership to accelerate mRNA-based therapies for rare neurological diseases","NeuCyte news",NEWSURL],
 ["Jan 2026","NeuCyte is awarded a 2025 KCNT1 Epilepsy Foundation Innovation Grant","NeuCyte news",NEWSURL],
 ["Dec 2025","Dr. Ricardo N. Ramirez joins the NeuCyte Scientific Advisory Board","NeuCyte news",NEWSURL],
 ["Sep 2024","NIH (NIA) awards NeuCyte an STTR grant for a NanoLuciferase-based AD/ADRD microphysiological systems platform for high-throughput screening","NIH RePORTER","https://reporter.nih.gov/project-details/10823023"]];
var SHEETS=[];
