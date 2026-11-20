var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 500 1em "Archivo"','italic 300 1em "Newsreader"','400 1em "IBM Plex Mono"'];
var MAIL="jjcurry@parmantech.com";
var NSF1="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2538046",PAT="https://patents.google.com/patent/US10073026B2/en",OE="https://doi.org/10.1364/OE.24.014100";
var NEWS=[
 {d:"2026-06-25",s:"National Science Foundation",t:"NSF awards a $304,996 SBIR Phase I for an instrument to analyse and purify nanoparticle drug delivery with a novel optical resonator",u:NSF1},
 {d:"2018-09-11",s:"US Patent 10,073,026",t:"“Optical particle sorter” issues to NIST, covering the continuous-feed technology licensed to Parman Tech",u:PAT},
 {d:"2016-06-15",s:"Optics Express",t:"John Curry and Zachary Levine of NIST publish “Continuous-feed optical sorting of aerosol particles”",u:OE}
];
var PAPERS=[
 {t:"Continuous-feed optical sorting of aerosol particles",j:"J. J. Curry, Z. H. Levine · Optics Express 24, 14100",y:"2016",u:OE},
 {t:"Optical particle sorter",j:"US Patent 10,073,026 · issued to NIST",y:"2018",u:PAT}
];
/* [name, title, one line] — names and titles exactly as on the company site */
var FOUNDERS=[
 ["Dr. John J. Curry","Founder and CEO","Co-inventor of the technology at NIST; principal investigator on the NSF SBIR award."],
 ["Dr. Douglas Doughty","Founder & CTO",""],
 ["Michael B. Olex","Founder and CFO",""]
];
var STAFF=[
 ["Steven Montoya","VP of Strategy",""]
];
/* applications: the company's own five, paraphrased from its Applications page */
var APPS=[
 {n:"Viral vector purification",i:"Gene therapies deliver with AAV, lentivirus and adenovirus. Their vectors must be cleared of cellular debris, concentrated and separated from empty capsids, today in multiple process steps that are difficult to scale.",s:"Full from empty",sd:"AAV · lentivirus · adenovirus"},
 {n:"Lipid nanoparticles",i:"LNPs carry mRNA, CRISPR-Cas9, plasmid DNA and small-molecule drugs. They work best in a narrow size range, and encapsulation is often low, so loaded particles need separating from unloaded ones.",s:"Size, and loaded from unloaded",sd:"mRNA · CRISPR-Cas9 · plasmid DNA"},
 {n:"Extracellular vesicles",i:"Naturally occurring lipid-bound nanoparticles for diagnostics, therapeutics and drug delivery, found in blood, urine, cerebrospinal fluid, breast milk and saliva: complex sources full of other particulates.",s:"Isolation from source fluids",sd:"Diagnostics · therapeutics"},
 {n:"Synthetic blood",i:"Shelf-stable, universal-donor, pathogen-free oxygen carriers (HBOCs) and synthetic platelets, for trauma care where real blood is not available. Efforts such as DARPA’s FSHARP and RAPIID programs can benefit.",s:"Blood-like nanoparticles",sd:"HBOCs · synthetic platelets"},
 {n:"Synthetic nanoparticles",i:"Gold and magnetic nanoparticles, dendrimers and liposomes. A consistent, narrow size distribution is a critical quality attribute of almost all of them, so separating by size and removing impurities is essential.",s:"Narrow size distributions",sd:"Gold · magnetic · liposomes"}
];
var SHEETS=[];
