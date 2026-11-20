var FONTS=['300 1em "Literata"','italic 300 1em "Literata"','400 1em "Literata"','italic 400 1em "Literata"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','700 1em "Montserrat"'];
var MAIL="info@wwiky.com";
var W="https://wwiky.com/";
/* products and pipeline: every line from wwiky.com (/research, /imaging-and-therapy, /histological-imaging,
   /radiolabeling-platforms, /projections, /updates). [kind, name, use, status, detail, link, link label] */
var PIPE=[
 ["Theranostic radiopharmaceutical","Hypoxycin-1™","Image and treat solid hypoxic tumours","Phase I/II approved","The same drug images hypoxic tumours, as a PET or SPECT agent, and treats them, which assures pharmacokinetic matching. Health Canada has issued a ‘no objection’ for a Phase I/II theranostic trial in cancer patients, led by Dr. Michael Sawyer at the Cross Cancer Institute.",W+"imaging-and-therapy/","WWiKY"],
 ["Laboratory reagent","Hypoxycin-M™","Hypoxia mapping in cells and tissue","NRC IRAP supported","A rapid, cost-effective and antibody-free reagent for in situ imaging and quantification of hypoxia, for pre- and post-therapy evaluation at the cellular and tissue level, including biopsy-based evaluation of how well a cancer treatment is working.",W+"histological-imaging/","WWiKY"],
 ["Radiolabeling platform","Hypoxycin-P™","Precursor for PET or SPECT agents","US Patent 8,969,546","A unique precursor for synthesising radioactive Hypoxycin-1, for PET or SPECT, or the widely used [18F]FAZA PET radiopharmaceutical for imaging hypoxia.","https://patents.google.com/patent/US8969546","Patent"],
 ["Next generation","Ligand-based theranostics and nanotheranostics","Hypoxic tumours","Preclinical","Supported by an Alberta Innovates AICE Validate award, and developed with collaborators including Prof. Ravin Narain (University of Alberta) on thermoresponsive nanotheranostics.",W+"updates/","WWiKY"]];
/* wwiky.com/team and the linked bios. Text-only masthead (CI/CL); summaries condensed from their bios. */
var TEAM=[
 {g:"Management",name:"Dr. Piyush Kumar, PhD",title:"President, CEO & COO",sum:"Clinical Professor (Emeritus) of Oncology, University of Alberta, leading its hypoxia research initiative; Edmonton PET Centre."},
 {g:"Management",name:"Dr. Michael Weinfeld, PhD",title:"Vice President & Chief Scientific Officer",sum:"Professor of Oncology, University of Alberta; imaging and therapy of hypoxic regions within tumours."},
 {g:"Management",name:"Dr. John Yao, PhD",title:"Chief Financial Officer",sum:"Industrial chemist and CEO of TC Scientific Inc.; drug design and synthesis, scale-up and GLP drug manufacturing."},
 {g:"Advisory board",name:"Dr. Leonard I. Wiebe, PhD, DSc",title:"University of Alberta",sum:"Adjunct Professor of Oncology; medicinal and radiopharmaceutical chemist in tumour hypoxia and radiopharmaceuticals."},
 {g:"Advisory board",name:"Dr. Michael Sawyer, DM, FRCP",title:"Cross Cancer Institute",sum:"Medical oncologist; clinical lead on the WWiKY-sponsored Phase I/II cancer clinical trial."},
 {g:"Advisory board",name:"Dr. Naresh Jha, MD",title:"Cross Cancer Institute",sum:"Radiation oncologist in radiotherapy and head and neck cancers; collaborator on the Phase I/II trial."},
 {g:"Advisory board",name:"Dr. Sharon Barker, PhD",title:"Investment and financial advisor",sum:"Johnson & Johnson, Canada; former CEO of WWiKY BioSciences."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","NRC IRAP contribution to advance WWiKY’s time- and cost-effective precision imaging and quantification of tumour hypoxia","Government of Canada","https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2025-2026-Q2-1032297%2Ccurrent"],
 ["2023","Optimized carbohydrate-based nanogel formulation to sensitize hypoxic tumors","Mol. Pharmaceutics","https://doi.org/10.1021/acs.molpharmaceut.3c00101"],
 ["2022","Radiation dosimetry of theragnostic pairs for isotopes of iodine","Pharmaceutics","https://doi.org/10.3390/pharmaceutics14081655"],
 ["2022","Cellular mechanism of action of 2-nitroimidazoles as hypoxia-selective therapeutic agents","Redox Biology","https://doi.org/10.1016/j.redox.2022.102300"],
 ["2021","Identification of proteins and cellular pathways targeted by 2-nitroimidazole hypoxic cytotoxins","Redox Biology","https://doi.org/10.1016/j.redox.2021.101905"]];
var SHEETS=[];
